let positions = [];
let lignes=[];
let depart="";
let arrivee="";
let largeur=0;
let hauteur=0;
let alphabet="abcdefghijklmnopqrstuvwxyz";
alphabet=alphabet.split("");
let boussole=["U","D","L","R"];

let frontiere=[];
let visites=[];
let cameFrom={};


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
let inputExemple="Sabqponm!abcryxxl!accszExk!acctuvwj!abdefghi";

afficheTotal(inputExemple);




function afficheTotal(texte) {
	prepareGrille(texte);
	let chemin=calculeLongueur(depart);
	console.log('chemin à rebours',chemin);
	let longueur=chemin.length;
	console.log('longueur depuis depart',longueur)
	document.getElementById('reponse').value=longueur;



}

function prepareGrille(texte) {

	lignes=[];
	positions = [];
	depart=0;
	arrivee=0;
	hauteur=0;
	largeur=0


	
	let canyon=texte.split("!");
	hauteur=canyon.length;

	canyon.forEach((string,indexL) => {
		let prevA=null;
		let prevK=null;
		let ligne=string.split("");
		lignes.push(ligne);
		ligne.forEach((a,indexC) => {
			let key="l"+indexL+"c"+indexC;
			let al=alphabet.indexOf(a);
			if(a==="S") {
				depart=key;
				al=0;
			} else if(a==="E") {
				arrivee=key;
				al=alphabet.indexOf("z");
			}
		
			let p={
				"l":indexL,
				"c":indexC,
				"a":al,
				"U":null,
				"D":null,
				"R":null,
				"L":null,
				"lettre" : a
			}
			if(prevA!==null && (prevA - al) <= 1) {
				p.L=prevK;
			}
			if(prevA!==null && (al- prevA) <= 1) {
				positions[prevK].R=key;
			}
			positions[key]=p;
			prevA=al;
			prevK=key;

		})
	})

	for (const key in positions) {
		let p = positions[key];
		if(p.l > 0) {
			let upK=makeKey(p.l-1,p.c);
			let upA=positions[upK].a;
			if((upA - p.a)<=1) {
				p.U=upK;
			}
		}
		if(p.l < hauteur - 1) {
			let dK=makeKey(p.l+1,p.c);
			let dA=positions[dK].a;
			if((dA - p.a)<=1) {
				p.D=dK;
			}
		}
	}


	largeur=lignes[0].length;
	console.log('Après parcours canyon');
	console.log('hauteur',hauteur);
	console.log('largeur',largeur);
	console.log('depart',depart);
	console.log('arrivee',arrivee);
	console.log('lignes',lignes);
	console.log('positions',positions);

}

//Algorithme "breadth first search" avec "early exit" 
//https://www.redblobgames.com/pathfinding/a-star/introduction.html

function calculeLongueur(departLocal) {
	console.log('calculeLongueur avec departLocal',departLocal);
	frontiere=[];
	visites=[];
	cameFrom=[];

	frontiere.push(departLocal);
	visites.push(departLocal);

	while(frontiere.length > 0) {
		let k=frontiere.shift();
		//console.log('step '+steps+' avec noeud '+k)
		if(k===arrivee) {
			break;
		}
		let p=positions[k];
		boussole.forEach((direction) => {
			let voisin=p[direction];
			if(voisin !==null && visites.indexOf(voisin) < 0) {
				visites.push(voisin);
				frontiere.push(voisin);
				cameFrom[voisin]=k;
			}
		})
	}
	console.log('cameFrom',cameFrom);

	let chemin=[];
	let current=arrivee;
	while(current !== departLocal) {
		chemin.push(current);
		current=cameFrom[current];
	}
	
	return chemin;
}


function makeKey(l,c) {
	return "l"+l+"c"+c;
}
