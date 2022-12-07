/*Variables de travail*/
let objets=[];
let pointer=0; //id de la racine
let id=0; //id de la racine

function readFile(input) {
	let f = input.files[0];
	let reader = new FileReader();
	reader.readAsText(f);
	reader.onload = function() {
		let texte=reader.result.replace(/(?:\r|\n|\r\n)/g, '!');
		afficheTotal(texte)
	};
	reader.onerror = function() {
		console.log(reader.error);
	};
}

/*Exemple*/
let inputExemple="$ cd /!$ ls!dir a!14848514 b.txt!8504156 c.dat!dir d!$ cd a!$ ls!dir e!29116 f!2557 g!62596 h.lst!$ cd e!$ ls!584 i!$ cd ..!$ cd ..!$ cd d!$ ls!4060174 j!8033020 d.log!5626152 d.ext!7214296 k";

//afficheTotal(inputExemple);




function afficheTotal(texte) {
	let total=calculeTotal(texte);
	console.log('total',total)
	document.getElementById('reponse').value=total;

	//2e partie de l'exercice, taille du répertoire à supprimer
	let total2=tailleSuppr();
	console.log('total2',total2)
	document.getElementById('reponse-2').value=total2;

}


function calculeTotal(texte) {
	let commandes=texte.split("!");

	//Initialiser les variables de travail à chaque nouveau calcul
	objets=[];
	pointer=0;
	id=0;

	//Ajout manuel de la racine
	ajouteObjet(id,"/",0,"dir",null);

	//Interpréter toutes les commandes et replir le tableau objets
	commandes.forEach((commande) => {
		appliqueCommande(commande);
	});

	//Parcourir tous les objets et cumuler le poids des fichiers à tous les répertoires parents
	calculeTailleDirs();


	//Parcourir tous les objets, filtrer les objets de type dir dont la taille <=100000

	let petitsDirs=objets.filter(elem => {
		return (elem.type==="dir" && elem.taille <=100000);
	})

	//Faire la somme des tailles des répertoires filtrés
	let total=petitsDirs.reduce( (accumVariable, curElem) => accumVariable + curElem.taille, 0);
	
	console.log("objets",objets);
	console.log("petitsDirs",petitsDirs);

	return total;
}

function ajouteObjet(id,nom,taille,type,parent) {
	objets.push({
		"id" : id,
		"nom":nom,
		"taille":taille,
		"type":type,
		"parent":parent
	});
}


function indexFromId(id) {

	let reponse=null;
	objets.forEach( function(element,index) {
		if(element.id == id) {
			reponse=index;
		}
	})

	return reponse;
}
function indexFromName(idParent, nom) {
	let reponse=null;
	objets.forEach( function(element,index) {

		if(element.parent===idParent && element.nom===nom) {
			reponse=index;
		}
	})
	return reponse;
}
function appliqueCommande(commande) {
	console.log('commande',commande);
	console.log('pointer avant commande',pointer);
	if(commande.indexOf('$ cd /') === 0){
		pointer=0;
	} else if(commande.indexOf('$ cd ..') === 0) {
		let indexDir=indexFromId(pointer);
		let idParent=objets[indexDir].parent;
		
		//placer le pointer sur le parent
		pointer=idParent;

		console.log('on remonte un niveau vers dir avec id ',pointer);


	} else if(commande.indexOf('$ cd ') === 0){

		//placer le pointer sur l'id du répertoire demandé
		let dir=commande.split('$ cd ')[1];
		let indexDir=indexFromName(pointer,dir); // on prend le dir qui est un enfant du pointer actuel (au cas où il y aurait plusieurs dir de même nom dans différents endroits de l'arborescence)
		pointer=objets[indexDir].id;
		console.log('on change de répertoire : ',dir);
		console.log('qui a pour id: ',id);

	} else if(commande.indexOf('$ ls') === 0) {
		console.log('on liste contenu du répertoire');
	} else if(commande.indexOf('dir ') === 0) {
		let dir=commande.split('dir ')[1];
		console.log('on a trouvé un répertoire ',dir);
		id++;
		ajouteObjet(id,dir,0,"dir",pointer);
	} else {
		let fichierA=commande.split(' ');
		let taille=parseInt(fichierA[0]);
		let nom=fichierA[1];
		console.log('on a trouvé le fichier ',nom);
		console.log('de taille ',taille);
		id++
		ajouteObjet(id,nom,taille,"fichier",pointer);
	}
}


function calculeTailleDirs() {
	objets.forEach(function(elem) {
		if(elem.type==="fichier") {
			ajoutePoids(elem.taille,elem.parent);
		}
	})
}

//Remonter récursivement tous les répertoires parents dans l'arborescence
function ajoutePoids(taille,id) {
	var index=indexFromId(id);
	objets[index].taille+=taille;
	if(objets[index].parent !== null ) {
		//on n'est pas encore remonté à la racine
		ajoutePoids(taille,objets[index].parent);
	}
	
}

//2e partie de l'exercice : taille du plus petit répertoire pour libérer assez d'espace
function tailleSuppr() {
	let tailleRacine=objets[0].taille;
	let besoinEspace = 30000000 - (70000000 - tailleRacine) ;
	console.log('taille Racine',tailleRacine);
	console.log('besoin espace',besoinEspace);

	//Répertoires candidats à la suppression : ceux qui sont plus gros que le besoin d'espace
	let candidats=objets.filter(elem => {
		return (elem.type==="dir" && elem.taille >= besoinEspace);
	})

	//Trier les candidats du plus petit au plus gros
	candidats.sort(function(a,b) {
		return a.taille - b.taille;
	});
	console.log(candidats);

	return candidats[0].taille;
}
