//Code modifié pour 2e partie

let reponses=[];
let verifSomme=0;


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
let inputExemple="[1,1,3,1,1]![1,1,5,1,1]!![[1],[2,3,4]]![[1],4]!![9]![[8,7,6]]!![[4,4],4,4]![[4,4],4,4,4]!![7,7,7,7]![7,7,7]!![]![3]!![[[]]]![[]]!![1,[2,[3,[4,[5,6,7]]]],8,9]![1,[2,[3,[4,[5,6,0]]]],8,9]";

afficheTotal(inputExemple);




function afficheTotal(texte) {
	reponses=[];
	verifSomme=0;
	testePaires(texte);

	console.log('reponses',reponses);

	let sommeIndex=0;
	reponses.forEach((reponse,index) => {
		if(reponse) {
			sommeIndex+=(parseInt(index)+1);
		}
	})

	console.log('somme index bonnes reponses',sommeIndex);
	console.log('verif somme',verifSomme);
	document.getElementById('reponse').value=sommeIndex;



}

function testePaires(texte) {
	
	let paires=texte.split("!!");


	paires.forEach((string,index) => {
		let gauche=string.split('!')[0];
		let droite=string.split('!')[1];
		console.log('==================test paire '+(parseInt(index)+1)+' '+gauche+' vs '+droite);
		let reponse=teste(gauche,droite);
		console.log('==================reponse',reponse);
		reponses.push(reponse);
		if(reponse) {
			verifSomme+=(parseInt(index)+1);
		}
	});

}

function teste(gaucheS,droiteS) {
	let resultat=true;
	let gauche="";
	let droite="";
	if(!Array.isArray(gaucheS)) {
		gauche=parseInt(gaucheS);
		if(!Number.isInteger(gauche)) {
			gauche=JSON.parse(gaucheS);
		}

	} else {
		gauche=gaucheS;
	}
	if(!Array.isArray(droiteS)) {
		droite=parseInt(droiteS);
		if(!Number.isInteger(droite)) {
			droite=JSON.parse(droiteS);
		}
	} else {
		droite=droiteS;
	}
	
	console.log('====test interne '+gauche+' vs '+droite);
	console.log('gauche',gauche);
	console.log('droite',droite);
	if(!Array.isArray(gauche) ) {
		if(Array.isArray(droite)) {
			gauche=Array.of(gauche);
			resultat=teste(gauche,droite);
		} else {
			resultat= gauche <= droite;
		}
	} else {
		if(!Array.isArray(droite)) {
			//resultat=gauche[0] <= droite;
			droite=Array.of(droite);
			resultat=teste(gauche,droite);
		} else {
			//on a 2 tableaux
			if(gauche.length > droite.length) {
				resultat=false;
			} else if(gauche.length===0) {
				resultat=true;
			} else {
				gauche.forEach((elem,index) => {
					if(resultat) {
						//on ne continue que si les tests précédents sont true
						resultat=teste(elem,droite[index]);
					}
				})
			}
			
		}
	}

	return resultat;
}
