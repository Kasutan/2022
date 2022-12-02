function readFile(input) {
	let f = input.files[0];
	let reader = new FileReader();
	reader.readAsText(f);
	reader.onload = function() {
		let texte=reader.result.replace(/(?:\r|\n|\r\n)/g, '-');
		calculerScore(texte)
	};
	reader.onerror = function() {
		console.log(reader.error);
	};
}

function calculerScore(texte) {
	let manches=texte.split('-');
	console.log('manches',manches);
	let scoresManches=manches.map(scoreManche)
	console.log('scoreManches',scoresManches);

	let total=scoresManches.reduce(function (accumVariable, curValue) {
		return accumVariable + parseInt(curValue)
		}, 0);
	
	console.log('total',total)
	document.getElementById('reponse').value=total;

	/*2e partie*/
	let scoresManches2=manches.map(scoreManche2)
	console.log('scoreManches2',scoresManches2);

	let total2=scoresManches2.reduce(function (accumVariable, curValue) {
		return accumVariable + parseInt(curValue)
		}, 0);
	
	console.log('total2',total2)
	document.getElementById('reponse-2').value=total2;

}

function scoreManche(consigne) {
	let consigneA=consigne.split(' ');
	let elfe=consigneA[0];
	let moi=consigneA[1];
	//Score obtenu en fonction de la forme choisie
	let valeursFormes={
		'X' : 1, //rock
		'Y' : 2, //paper
		'Z' : 3, //scissors
		'A' : 1,
		'B' : 2,
		'C' : 3
	}

	let nomsFormes={
		'X' : 'pierre', 
		'Y' : 'papier', 
		'Z' : 'ciseaux', 
		'A' : 'pierre', 
		'B' : 'papier', 
		'C' : 'ciseaux', 
	}

	return valeursFormes[moi]+score(nomsFormes[elfe],nomsFormes[moi]);
}

function score(elfe,moi) {
	if(elfe===moi) {
		return 3;
	}
	if(elfe==='pierre') {
		if(moi==='papier') {
			return 6;
		} else {
			return 0;
		}
	}
	if(elfe==='papier') {
		if(moi==='ciseaux') {
			return 6;
		} else {
			return 0;
		}
	}
	if(elfe==='ciseaux') {
		if(moi==='pierre') {
			return 6;
		} else {
			return 0;
		}
	}
}


function scoreManche2(consigne) {
	let consigneA=consigne.split(' ');
	let elfe=consigneA[0];
	let objectif=consigneA[1];

	let nomsFormes={
		'A' : 'pierre', 
		'B' : 'papier', 
		'C' : 'ciseaux', 
	}
	
	let scoreSelonObjectif = {
		'X' : 0, 
		'Y' : 3, 
		'Z' : 6, 
	}

	let valeursFormes={
		'pierre' : 1, //rock
		'papier' : 2, //paper
		'ciseaux' : 3, //scissors
	}

	let pourPerdre = {
		'papier' : 'pierre',
		'ciseaux' : 'papier',
		'pierre' : 'ciseaux'
	}
	let pourGagner = {
		'papier' : 'ciseaux',
		'ciseaux' : 'pierre',
		'pierre' : 'papier'
	}

	return scoreSelonObjectif[objectif]+gainParForme(nomsFormes[elfe],objectif,valeursFormes,pourPerdre,pourGagner);
}

function gainParForme(elfe,objectif,valeursFormes,pourPerdre,pourGagner) {
	if(objectif==='Y') {
		//on cherche le match null
		return valeursFormes[elfe];
	}
	if(objectif==='X') {
		//on cherche à perdre
		return valeursFormes[pourPerdre[elfe]];
	}
	if(objectif==='Z') {
		//on cherche à gagner
		return valeursFormes[pourGagner[elfe]];
	}
}



let temp="A Y-B Y-B Z-B Z-B X-B Z-C Y-A Z-C X-C X-B Z-B Z-B Z-A X-B Z-B Z-A Y-B Z-A Z-B X-B Z-A X-A X-B Z-A Y-A Z-B Z-A Y-A Z-B Z-A Z-B Z-B Z-C Y-B Z-B Z-A X-C X-B Z-A X-B Z-C X-A X-B Z-A X-A X-C X-B Z-B Z-B Z-C Y-C Y-A X-B Z-C X-B Z-A X-A Y-B Z-B Z-B Z-B Z-B Z-B X-B Z-B Z-B Z-B X-A X-A X-B Z-A Y-C Y-C Y-A Y-A X-B Z-A Y-A Z-A X-A X-A Y-C Y-B Z-B Z-C X-B Z-A Y-A X-B Z-B Z-A X-A X-A X-B Z-A Y-B Z-A Z-C Y-B Z-B Z-B Z-C Y-A Y-C Y-B Z-A X-B Z-A X-B Z-C Y-B Z-B Z-B Z-C X-B Z-A X-B Z-B Z-B Z-A X-A X-B X-C Y-B Z-B Z-B Z-A X-B Z-A X-B Z-A X-A Z-A X-B Z-A X-C Y-A X-B Z-A X-C Y-B Z-B Z-A X-A X-B Z-C Y-B Y-B Z-B Z-B Z-B X-B Z-B Z-B Z-A X-B Z-C Y-C Y-A Z-A X-B Z-B Z-B Y-B Z-B Z-C Y-B Z-B Y-B Z-C Y-B Z-B Z-C X-C X-C X-B Z-A Z-A X-C Y-A Z-B Z-B Z-B Z-B Z-A X-A X-B Z-B Z-A Z-A X-A X-B Z-C Y-A X-A Z-A Y-A Y-A X-B Z-A X-A Z-B Z-C X-B Z-C X-C Y-B Z-B Z-B Z-B Z-B Z-C Y-A X-C Y-A X-B Y-B Y-A X-A X-B Z-B Z-C X-A Z-C Y-A X-A X-A Y-A X-A X-B Z-A Z-B Z-B Z-B Z-A Z-A X-B Z-B Z-C Y-B Z-B Z-B Z-A X-A X-B Z-B Z-B Z-B Z-B Z-B Z-A X-C X-A X-A X-C Y-A X-B Z-C Y-B Z-B Z-B Z-A X-B Z-C Y-B Z-A X-A X-B Z-A X-A X-B Z-A Z-B X-A X-A X-B Z-C Y-A Y-A X-C X-B Z-A X-B Z-B Z-A X-B Z-A Z-C Y-B Z-B Z-A X-A X-B X-A X-B Z-B Z-C X-A X-C X-A X-B Z-B Z-A X-A Z-B Z-B X-A X-A Y-B Z-B Z-B Z-C X-C Y-B Z-B Z-C Z-B X-C Y-C Z-B Z-B Z-A X-B Z-C X-B Z-B Z-A Z-A X-C X-B Z-B Z-A X-C Y-A X-B X-C Z-B Z-B Z-A X-B Z-A Y-B Z-B Z-A X-B Z-C Y-C Y-A X-C Y-C X-C X-A X-B Z-C Y-B Z-C X-B Z-A Z-B Z-A Z-B X-B Z-A Z-A X-B Z-B Z-B Z-A X-A X-A X-B Z-A X-B Z-B X-A Y-B Z-A X-B Z-B Z-B Z-A X-B Z-C X-A Y-A X-A Z-C Y-C Y-A X-C Y-B Z-A X-B Z-C Y-B X-A Z-B Z-B Z-B X-B Z-B Z-B Z-A Y-A Y-C Y-A Z-A X-B Z-B Z-A X-A X-A X-B Z-A X-B Z-B Y-A X-A X-A X-B Z-B Z-B Z-C Y-A X-A X-A X-A X-A X-A X-C Y-A Z-C X-B Z-B Z-C Z-A X-A X-B Z-A X-B X-B Z-B Z-C X-B Z-A Z-A X-B Z-A Z-B Z-B Y-A X-C Y-A X-B Z-B Z-B Z-A Z-C Y-C Z-A X-B Z-B Z-B X-A X-B Z-A X-B Z-B Z-C Z-B Z-A X-C Y-C X-A Z-C X-A X-A X-A X-B Z-B Y-C Y-B Z-B Z-C Y-B Z-A X-B Z-A Z-A X-B Z-A Y-A X-A X-B X-B Z-B Z-B Z-B Z-C Z-B Y-A X-A X-B Z-B Z-B Z-C Z-B Z-B Z-A Y-A Z-B Z-A X-C Y-B Z-A Z-C Z-B Z-C X-B Z-B Z-A X-B Z-A X-B Z-C Y-A X-B Z-A Z-B Z-C Y-A X-C X-A X-A X-B Z-B Z-B X-B Z-C X-C Y-A Z-B Z-C Y-B Z-C Y-B Y-A Y-B Z-A X-B Z-A Z-B Z-A X-C X-B Z-B X-C Y-A Z-A X-B Z-B Z-B Z-A Z-C Y-C Y-B Z-A Y-A X-A X-A Y-C Y-A Y-B Z-B Z-B Z-A Z-B Z-A Z-B Z-A X-A Z-B Z-C Y-B Z-A X-A X-A X-A Z-A Z-B Z-C Y-B Z-A X-B Z-B Z-A Z-B Z-B Z-A X-B Z-B Z-B X-A X-B Z-B Z-A Z-A X-B X-A X-B Z-A X-B Z-A X-B Z-C Y-B Z-C Z-C X-B Z-B Z-B Z-C Y-C X-B Z-B Z-B Z-B Z-A Y-A Y-C Y-A X-C X-B X-A X-C X-A Y-B X-A X-A Z-B Z-B X-B Y-B Z-B Z-B X-B Z-C Y-B Z-A X-A X-A X-B Z-A X-B Z-A X-B Z-B Z-B Z-B Z-A X-C Y-A X-B Z-B Z-B Z-A X-B Z-B Z-C Z-A X-A Z-B Z-C Y-B Z-B Z-B Z-B Z-A Z-B Z-B Z-B Z-C Y-A X-B X-C Y-A X-C Z-B Z-C Y-C Y-B Z-A X-B Z-C Z-A X-A Z-B Z-A Z-B Z-B X-B Z-A Z-B Z-C Y-C Z-B Z-A X-B Z-A X-A X-B Z-B Z-B Z-B Z-A X-A Z-A X-B X-B Z-A Y-A Y-B Z-A X-B Z-B Z-A Y-C X-B Z-B Z-B Z-C X-B Z-C X-A X-B Z-C Y-A X-A X-A X-C Z-A X-A X-A Y-B Z-B Z-B Z-B Z-B Z-C X-C Y-B Z-B Z-C X-B Z-B Z-B Z-C Y-C Y-A Z-A X-B Z-A X-B X-B Z-B Z-C Y-B Z-A X-B X-A Z-A Z-B Z-A X-C X-A X-B Z-B Z-B Z-A X-A Z-C X-B Z-A X-A Z-A Z-A Z-A Z-C Y-B X-B X-C Z-B X-C Z-A X-A Y-B Z-B X-A Y-A Z-B X-A X-A X-C Z-A Z-B Z-C X-B Z-B Z-C X-B Z-C X-A X-A Y-A X-B Z-A X-B Z-C Y-B Z-B Z-B Z-B Z-B Z-B Z-B Z-B Z-B Z-A X-B Z-A X-B Z-A Y-B Z-A X-A Z-B Z-C Y-A Z-A X-A Z-C X-B Z-B Z-B Z-A X-C X-C Y-B Z-A Z-A Z-C X-B Z-C Y-A Z-A Z-A Y-B Z-A Z-B Z-B Y-C Y-B Z-B Z-A Z-A X-B Z-C Y-B Z-B Z-B Z-B Z-B Z-A X-C Y-B X-C X-B Z-A Z-B Z-A X-B Z-B Z-A X-C Y-A X-A X-A X-C X-A X-A X-B Z-A Y-A X-B Z-C X-A X-C Z-A X-B Z-C X-A X-A X-A X-B Z-C X-B Z-B Z-A X-A X-A X-A X-B Z-A X-A X-B Z-B X-A Y-A X-C X-A X-C X-A X-B Z-B Z-B Z-B Z-B Z-A X-A X-B X-C Y-A Y-C X-C X-C X-B Z-B Z-B X-B Z-B Z-C X-B Z-B Z-A X-B Z-B Z-B X-A X-A X-C Y-C X-A X-C Y-A Y-C X-B Z-A X-A Z-B Z-B Z-B X-B Z-B Z-B Z-C Y-B X-A X-B Z-A X-B Z-A X-A Z-A Y-C Y-B Z-C Y-A Z-A Z-B Z-A X-A X-C Y-C Y-A X-B Z-A X-C X-C Z-A X-A Y-A X-A X-A X-B Z-B Z-B Z-C Y-B Z-B Z-C Z-A X-B Z-B Z-A X-A X-B Z-B Z-B Z-A Y-B X-A Z-A Z-B Z-A X-B Z-B Y-A Y-A X-C Y-A Z-B Z-C X-C X-A X-B Z-A X-A X-A Z-B Z-A Z-A Z-B Z-B Z-A Y-B Z-C Y-C X-B Z-A X-A X-B Z-B Z-A X-A X-C Y-B Z-A Z-A X-B Z-C Y-B Z-A X-A X-B X-A X-B Z-C Y-B Z-A Y-B Z-B Z-B Z-B X-A X-B Z-C Y-B Z-B Z-B Z-A Z-C Y-C Y-C Y-A X-A Z-A X-B Z-A X-B Z-A X-C Y-B Z-B Z-A X-B Z-A X-A X-B Z-B Z-A X-A X-C X-B Z-A Y-A X-A X-B Z-C Y-C X-C X-B Y-A Z-B Z-A Z-A X-B Z-C Y-B Z-A X-A Z-B Z-A X-A Y-A X-B Z-B Z-B Y-B Z-A X-B Z-B Z-B Z-C Y-A X-B Z-B Z-A X-A X-A X-B Z-A Y-B Z-A Z-A X-B Z-C X-B Z-A X-A Z-A Z-B Z-A X-B Z-B Z-B Z-B Z-C Y-A Y-A Z-A X-A Y-B Z-B Z-B Z-C Y-C Y-B Z-A Y-A Z-A X-B Z-A Z-B Z-A X-C Y-B Z-B Z-B Z-B Z-B Z-C X-A Z-B Z-A Z-B Z-A X-B Z-A X-A Y-B Z-B X-B Z-A Y-B Z-A Z-B Z-B Z-A X-A Z-A Z-B X-B Z-A X-B X-A X-A Z-A X-C X-B Z-C X-A X-C X-A X-A X-A Z-A Z-B Z-A Z-B X-B Z-B Z-A X-B Z-B Z-A X-B Z-B Z-B Z-B Z-B Z-C X-A X-C Y-B Z-B Z-A Y-B X-B Z-A Z-B Z-B Z-C Y-B Z-A X-A Z-B Z-A Z-B Z-B Z-A X-B Z-A Z-A Z-A Z-C X-A Z-B Z-C Y-B Z-A Z-B Z-A X-A X-A X-A Z-A X-B Z-B Z-B Z-B Z-A Y-A X-C Y-C Z-B Z-A Z-A X-B Z-B X-B Z-A X-B Z-B Z-C Y-A X-B Z-B Z-C X-C X-B Z-B Y-A Y-A X-C Y-A X-A X-B Z-B Z-B Z-B Z-A Z-C X-A X-A X-A X-A X-A Y-A Z-A Y-A Y-B Z-A X-A Y-A X-A Z-A Z-A X-B Z-B Z-C Y-A X-B Z-C Y-B Z-B Z-A X-B Z-B X-A X-B Z-A Y-A Y-B X-B Z-B Z-C X-A X-B Z-A X-B X-B Z-A X-B Z-A X-B X-A X-A X-C X-A X-A X-B Z-A X-A X-A Y-B Z-B Z-C Y-B Z-A X-B Z-B Z-A Z-A X-B Z-A Y-B Z-C Y-A Z-A X-A Y-C Y-A X-A Y-C X-B Z-A X-A Y-A X-B Z-A Z-B Z-B Z-C Y-A X-C Y-A Z-B Z-B Z-A X-A X-B X-B Z-C Y-B Z-B Y-A X-B Z-A X-C X-B Z-A Y-A X-B Z-C Y-A Z-B Z-A X-A X-A Y-A Z-C X-B Z-B Z-B Z-A Z-B Z-C Y-B Z-B Z-B Z-B Z-B X-B Z-A X-B Z-B Z-A X-C X-C Y-B Z-B Z-A X-B Z-A X-A X-A Y-B Z-A Z-B Z-C Y-B Z-A X-A Y-C Y-B Y-A Y-A X-C Y-A X-A Z-A X-B Z-A Z-B Z-A X-B Z-C Y-A X-B Z-B X-B Z-A X-A X-A X-B Z-A Z-A Z-B Z-A X-B Z-B Z-A X-A X-B Z-B Z-A X-B Z-B X-B Z-C Y-A Z-B X-A X-B Z-B Z-A X-B Z-A X-B Z-B X-B X-A X-B Z-B Z-B Z-B Z-A Y-B Z-B Z-A X-C X-B Z-B Z-B Z-B Z-B Z-A X-C X-A Y-A X-A X-B Z-C Y-C X-B Z-A X-A Y-B Z-A X-B Z-C Y-B Z-A X-B Z-A Y-B X-A X-B Z-A X-B Z-A X-B Z-A X-C X-C X-A X-B Z-A Y-B Z-B Z-A X-A X-B Z-B Z-B Z-A X-A X-A X-C Y-A Y-B Z-B Z-B Z-B Z-A X-A X-B Z-B Z-C Y-A X-A X-B Z-A X-A Y-A X-B Z-B Z-B Z-A X-B Z-A X-B Z-A X-A X-B Z-A Y-A Z-B Y-A X-A Z-B Z-B Z-A Z-A X-A X-B Z-A X-B Z-A X-C X-A Z-A X-B Z-B Z-A X-A Z-C X-B Z-B Z-A X-B Z-B Z-A X-B Z-B Z-B Z-A Y-A Z-B Z-B Z-A X-B Z-B Z-B X-C X-B Z-B Z-B Z-A X-A X-A Z-B Z-C X-B Y-A Y-B Z-B Z-A X-A X-A Z-B Z-B Z-B Z-A X-A Z-A X-B Z-B Z-A Z-B Z-A Y-A Z-C Y-B Z-B Z-B Z-B Z-A Z-A Z-A Y-B Z-A X-A X-B Z-A Z-B Z-B Z-B X-C Y-B Z-C Y-B Z-A X-C Z-B Z-A X-A X-B Z-A Z-A X-B Z-A Z-A X-C Z-C X-B Z-B Z-B Z-B Z-B Z-C Y-A X-B Z-C Y-A X-B Z-B Z-A Z-A Z-B Z-C Y-A X-C X-B Z-B Z-B Z-B Z-A X-B Z-A X-B Z-A Y-B Z-B Z-B Z-B Z-B Z-C Y-B Z-B Z-A X-A X-A X-A Z-B Z-A Y-C Z-A Z-B Z-B Z-B Z-A X-B X-C Y-C X-C Y-B Z-B Z-B Z-B Z-A Y-B Z-A X-C X-A X-B X-C X-B Z-B Z-A X-A X-C Y-C Y-A X-B Z-C Y-A Y-A Z-A Y-B Z-B Z-B Z-A Y-B Z-A Z-A X-B Z-C X-A Z-B Z-A X-C X-A X-C Y-B X-B Z-B Z-A X-C Y-A X-B Z-C X-A Z-A Y-B Z-A Z-B Z-B Z-B Z-B Z-A X-A X-B Z-A Z-C Y-A Y-A X-A X-B Z-C Z-B Z-A Z-B X-C X-B Z-B Z-A X-A Z-A X-A Z-A X-B Z-B Z-C Y-B Z-B Z-B Z-B Z-A Z-B Z-B X-B Z-B Z-B Z-B Z-C X-C X-A X-B Z-B Z-B Z-B Z-B Z-B Z-A X-C X-B Z-B Z-A Y-B Z-A X-C Y-B Z-C Y-B Z-A Y-B Z-B Z-B Z-A X-A X-A X-B Z-C Y-B Z-A Z-A Y-A Z-A Y-B Z-A X-B X-B Z-A X-B Z-A Y-A X-B Z-A X-A X-A Y-A Y-A X-A X-A X-B Z-B Z-B Z-A X-B Z-A X-B Z-A X-B Y-B Y-A X-B Z-C X-A Z-C Y-A X-B Z-B Z-B Z-C Y-B X-C Y-B Z-B Z-B Z-A Z-B Z-B Z-B Z-C Y-B Z-B Z-A X-A Z-A Y-C Y-B Z-B Z-A X-B Z-B Z-A X-A X-B Z-B Y-B Z-B Z-A Z-B Z-B Z-A X-B Z-A X-C X-C X-A X-C Y-B Z-B Z-B Z-A X-C Y-B Z-B Z-B Z-B Z-B Z-B Z-B Z-B Z-B Z-B Z-C Y-C X-B Z-B Z-B Z-C Y-A Y-C Y-A X-B X-B Z-A X-C X-B Z-A Z-C X-C X-B Z-B Z-A Z-B Z-B X-B Z-B Z-B Z-A X-C X-B Z-A X-C Y-B Z-B Z-C X-B X-A X-B Z-C X-C X-B Z-B X-A X-B Z-A Y-B Z-A Z-A X-B Z-A X-A X-B Z-B Z-A X-B Z-A X-A X-C Y-B Z-A X-C Y-B Z-B Z-A X-A Y-C Y-B Z-A X-B Z-A X-A X-B Z-B Z-C Y-B Z-A X-A X-A X-A X-A Z-B Z-B Z-C X-C X-B Z-B Z-C Y-B Z-A Y-B Z-A X-C X-A Z-B Z-B Z-B Z-C Y-A X-B Z-B Z-C Y-B Z-C Y-B Z-A Z-B Z-A X-B Z-C Y-C Y-A X-A X-A Z-B Z-C Y-C Y-A X-B Z-B Z-A X-B Z-B Z-B Z-B Z-B X-B Y-A X-B Z-B Z-B Z-C Y-A X-A Y-B Z-A Z-A Z-B X-A X-C Y-B Z-B Z-A Z-B Z-C X-C X-A Z-B Z-A X-B Z-A X-B Z-B Z-B X-A X-A Z-B X-A X-B Z-A X-A X-A Z-A Y-B Z-A Y-C Y-C X-B Z-B Z-A X-A X-B Z-B Z-B Z-A Z-C X-A X-B Z-B Z-A X-B Z-B Z-B Z-A X-A Z-B Z-A X-B Z-A X-B Z-B Z-A X-C Y-A X-C X-A Z-B X-A Y-A Y-B Z-B Z-B Z-A X-A X-A X-A Y-B Z-B Z-B Z-B Z-B Z-B Z-B Z-B Z-C Y-B Z-B Z-B Z-C Y-A X-A Z-B Z-C Y-B Z-A Z-A X-B Z-A Y-B Z-B Z-A Z-B Z-A X-A Z-A Z-B Z-B Z-B Z-B Z-A X-A Z-B Z-B Z-B Z-B Z-A Z-B Z-C X-B Z-B Y-A X-B Z-B Z-A X-B Z-A X-A X-A X-A X-B X-B Z-C X-B Z-B Z-B Z-A X-B Z-C X-B Z-A Z-A X-A X-B Z-B Z-B Z-B Z-C X-A X-B Z-B Z-C Y-B Z-C Y-B Z-B Z-A X-B Z-A X-A Y-B Z-A Z-B Z-B Z-A Y-B Z-B Z-C Y-A X-A X-A X-A X-B Z-B Z-A Y-B Z-A Z-A X-A X-B Z-A Y-B Z-B Z-B X-A Y-A X-A X-C Y-C X-A X-B Z-B Z-B Z-A Y-B Z-C X-C X-C X-B Z-B Z-B Z-B Z-B Z-A X-B Z-A Y-B Z-A Y-C X-B X-B Z-B Z-A X-B X-B Z-B Z-B Z-B Z-B Z-A X-B Z-C X-B X-A X-A X-A X-A X-A X-B Z-C X-C Y-A X-B Z-C X-A Z-B Z-B Z-C Y-A X-A Z-B Z-B Z-B Z-B Z-B Z-B Z-A X-A X-B X-A X-B Z-A X-B Z-B Z-A Z-B Z-B Z-B Z-B Z-C X-B Z-A Z-B Z-B Z-A Z-A X-C X-B X-C X-A X-B Z-A Z-B X-B X-A Z-B Z-B Z-B X-B Z-B Z-C X-A Y-A X-A Z-B Z-A X-B Z-B Z-B Z-B Z-A X-A X-C Y-B Z-B Z-B Z-A Z-C X-C Y-B Y-B Z-B Z-A X-C Y-A Z-B Z-B Z-B Z-B Z-B Z-C X-B Z-A X-C X-A X-A Z-C Y-C X-B Z-B Z-A Y-A Z-A Z-A X-A Z-A Z-C Y-B Z-B Z-B Z-B Z-A Z-A X-A Y-C X-A X-B Z-B Z-B Z-A X-B Z-B Z-A Z-B Z-A X-B Z-A X-A Y-B Z-A X-A Z-B Z-A X-B Z-C X-B Z-B Z-C X-A Y-B Z-A Z-C X-C Z-C X-B Z-B Z-B Z-A X-B Z-C X-A X-A Y-A X-A Z-C Y-A X-B Z-B Z-C Z-A X-B Z-B Z-A X-A Z-B Z-A Y-B Z-C X-A X-A X-B Z-B Z-B Z-B X-C X-B Z-B Z-A X-A X-A Z-B Z-B Z-A Z-C Y-C Z-B Z-A X-A X-A X-C Y-A X-A X-A X-A Z-B Z-A Y-B Z-C X-B Z-A X-C X-B Z-A Y-A X-B Z-B Z-B Z-A X-A Y-B Z-A X-B Z-B Z-B Z-B Z-A X-A X-B Z-C X-B X-A Z-B Z-B Z-B Z-B Z-B Z";
//calculerScore(temp);