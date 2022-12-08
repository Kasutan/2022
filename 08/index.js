let visibles = [];
let lignes=[];
let colonnes=[];
let taille=0;

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
let inputExemple="30373!25512!65332!33549!35390";

afficheTotal(inputExemple);




function afficheTotal(texte) {
	let total=calculeTotal(texte);
	console.log('total',total)
	document.getElementById('reponse').value=total;

	//2e partie de l'exercice
	/*
	let total2=tailleSuppr();
	console.log('total2',total2)
	document.getElementById('reponse-2').value=total2;
*/
}


function calculeTotal(texte) {

	lignes=[];
	colonnes=[];
	visibles = [];
	let total=0;
	
	let foret=texte.split("!");
	taille=foret.length;

	for(let i=0; i<taille; i++) {
		colonnes.push([]);
	}

	foret.forEach((string) => {
		let ligne=string.split("");
		lignes.push(ligne);
		ligne.forEach((arbre,index) => {
			colonnes[index].push(arbre);
		})
	})
	console.log('lignes',lignes);
	console.log('colonnes',colonnes);

	remplitVisibles(lignes,true,1);
	remplitVisibles(lignes,true,-1);
	remplitVisibles(colonnes,false,1);
	remplitVisibles(colonnes,false,-1);


	console.log('visibles',visibles);
	let uniqueVisibles = [...new Set( visibles)];
	console.log('unique',uniqueVisibles);

	return uniqueVisibles.length;
}

function ajouteArbre(l,c,h,parLigne,sens) {
	
	if(parLigne) {
		if(sens===-1) {
			c=taille-parseInt(c)-1;
		}
		visibles.push('l'+l+'c'+c+'h'+h);
	} else {
		if(sens===-1) {
			c=taille-parseInt(c)-1;
		}
		visibles.push('l'+c+'c'+l+'h'+h);
	}
}



function remplitVisibles(lignes,parLigne,sens) {
	let maxlocal=0;
	lignes.forEach((ligne,l)=>{
		maxlocal=0;
		if(sens===-1) {
			ligne=ligne.reverse();
		}

		ligne.forEach((h,c)=>{
			if(l===0 || c===0 || h>maxlocal) {
				ajouteArbre(l,c,h,parLigne,sens);
				maxlocal=h;
			}
		})
	})
}