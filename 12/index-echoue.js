let positions = [];
let lignes=[];
let alt=[];
let depart="";
let arrivee="";
let largeur=0;
let hauteur=0;
let alphabet="abcdefghijklmnopqrstuvwxyz";
alphabet=alphabet.split("");
let boussole=["U","D","L","R"];
let longueurMini=null;
let cheminMini="";

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
	positions = [];
	depart=0;
	arrivee=0;
	hauteur=0;
	largeur=0
	longueurMini=null;
	cheminMini="";
	
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

	alt=[{"k":depart, "chemin":"","prevK":depart}];

	let i=0;
	while(alt.length > 0) {
		console.log('nbre de chemins à explorer',alt.length);
		let output=explorer(alt[0]);
		if(output!==false) {
			longueurMini=output.length;
			cheminMini=output;
		}
		alt.shift();
		i++;
	}
	console.log('fin recherche chemins');
	console.log('vainqueur : cheminMini',cheminMini);
	return longueurMini;
}

function makeKey(l,c) {
	return "l"+l+"c"+c;
}

function explorer(input) {
	let reponse=false;
	let k=input.k;
	let chemin=input.chemin;
	let prevK=input.prevK;

	while (k !== arrivee) {
		if(longueurMini!==null && chemin.length >= longueurMini) {
			console.log('on a déjà plus court');
		}
		let p=positions[k];
		let voies=boussole.filter((b)=> (p[b] !=null && prevK.indexOf(p[b])<0));
		if(voies.length===0) {
			console.log('impasse pour chemin ',chemin);
			return false;
		}
		prevK+=k;

		for(let i=1; i<voies.length; i++) {
			let cheminalt=chemin+voies[i];
			alt.push({"k":p[voies[i]],"chemin":cheminalt,"prevK":prevK});
		}
		chemin+=voies[0];
		k=p[voies[0]];
		reponse=chemin;
	}
	console.log('chemin',chemin);
	console.log('longueur chemin',chemin.length);
	console.log('alt',alt);

	return reponse;
}



/*

mon mini
DRRDLDRDRRRRRUUUULLLLDDDRRRUULLDR



Sabqponm
abcryxxl
accszExk
acctuvwj
abdefghi


mini exemple
DRDRDDDRRRRR
*/