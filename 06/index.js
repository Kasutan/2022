function readFile(input) {
	let f = input.files[0];
	let reader = new FileReader();
	reader.readAsText(f);
	reader.onload = function() {
		let texte=reader.result.replace(/(?:\r|\n|\r\n)/g, '!');
		afficheDebut(texte)
	};
	reader.onerror = function() {
		console.log(reader.error);
	};
}

/*Exemples*/
//Réponse à la partie 2 en commentaire
afficheDebut('bvwbjplbgvbhsrlpgdmjqwftvncz'); //23
afficheDebut('nppdvjthqldpwncqszvftbrmjlhg'); //23
afficheDebut('nznrnfrfntjfmvfwmzdfjlvtqnbhcprsg'); //29
afficheDebut('zcfzfwzzqfrljwzlrfnpqdbhtmscgvjw'); //26
afficheDebut('mjqjpqmgbljsphdztnvjfqwrcgsmlb'); //19




function afficheDebut(texte) {
	//Début "start of packet marker" 4 caractères distincts séquentiels
	let debut=trouveDebut(texte);
	console.log('debut',debut)
	document.getElementById('reponse').value=debut;

	//Début message 14 caractères distincts séquentiels
	let debutM=trouveDebutM(texte);
	console.log('debutM',debutM)
	document.getElementById('reponse-2').value=debutM;
}

function trouveDebut(texte) {
	for(let i=0; i < texte.length - 4; i++) {
		let sub=texte.substring(i,i+4);
		if(!contientDoublon(sub)) {
			console.log('on a trouvé la clé : ',sub);
			console.log('i',i);
			return i+4;
		}
	}
}

function contientDoublon(sub) {
	let subA=sub.split("");
	let subUnique=[... new Set(subA)];
	return (subUnique.length < 4);
}

function trouveDebutM(texte) {
	for(let i=0; i < texte.length - 14; i++) {
		let sub=texte.substring(i,i+14);
		if(!contientDoublonM(sub)) {
			console.log('on a trouvé la clé : ',sub);
			console.log('i',i);
			return i+14;
		}
	}
}

function contientDoublonM(sub) {
	let subA=sub.split("");
	let subUnique=[... new Set(subA)];
	return (subUnique.length < 14);
}