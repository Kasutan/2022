let historique = [];
let t=1;
let x=1;

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
let inputExemple="addx 15!addx -11!addx 6!addx -3!addx 5!addx -1!addx -8!addx 13!addx 4!noop!addx -1!addx 5!addx -1!addx 5!addx -1!addx 5!addx -1!addx 5!addx -1!addx -35!addx 1!addx 24!addx -19!addx 1!addx 16!addx -11!noop!noop!addx 21!addx -15!noop!noop!addx -3!addx 9!addx 1!addx -3!addx 8!addx 1!addx 5!noop!noop!noop!noop!noop!addx -36!noop!addx 1!addx 7!noop!noop!noop!addx 2!addx 6!noop!noop!noop!noop!noop!addx 1!noop!noop!addx 7!addx 1!noop!addx -13!addx 13!addx 7!noop!addx 1!addx -33!noop!noop!noop!addx 2!noop!noop!noop!addx 8!noop!addx -1!addx 2!addx 1!noop!addx 17!addx -9!addx 1!addx 1!addx -3!addx 11!noop!noop!addx 1!noop!addx 1!noop!noop!addx -13!addx -19!addx 1!addx 3!addx 26!addx -30!addx 12!addx -1!addx 3!addx 1!noop!noop!noop!addx -9!addx 18!addx 1!addx 2!noop!noop!addx 9!noop!noop!noop!addx -1!addx 2!addx -37!addx 1!addx 3!noop!addx 15!addx -21!addx 22!addx -6!addx 1!noop!addx 2!addx 1!noop!addx -10!noop!noop!addx 20!addx 1!addx 2!addx 2!addx -6!addx -11!noop!noop!noop";

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

	historique=[];
	t=1;
	x=1;
	let total=0;
	
	let instructions=texte.split("!");
	

	instructions.forEach((string) => {
		t++;
		historique[t]=x;
		if(string.indexOf('addx ') >=0) {
			let n=parseInt(string.split('addx ')[1]);
			x+=n;
			t++;
			historique[t]=x;
		}
	})
	console.log('historique',historique);
	
	let observations=[20,60,100,140,180,220];
	observations.forEach((obs)=>{
		total+=obs*historique[obs];
	})

	
	return total;
}