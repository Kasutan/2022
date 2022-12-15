let sources = [];
let beacons = [];
let cible = 2000000;
let beaconsSurCible= [];
let intervalles = [];


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
let inputExemple="Sensor at x=2, y=18: closest beacon is at x=-2, y=15!Sensor at x=9, y=16: closest beacon is at x=10, y=16!Sensor at x=13, y=2: closest beacon is at x=15, y=3!Sensor at x=12, y=14: closest beacon is at x=10, y=16!Sensor at x=10, y=20: closest beacon is at x=10, y=16!Sensor at x=14, y=17: closest beacon is at x=10, y=16!Sensor at x=8, y=7: closest beacon is at x=2, y=10!Sensor at x=2, y=0: closest beacon is at x=2, y=10!Sensor at x=0, y=11: closest beacon is at x=2, y=10!Sensor at x=20, y=14: closest beacon is at x=25, y=17!Sensor at x=17, y=20: closest beacon is at x=21, y=22!Sensor at x=16, y=7: closest beacon is at x=15, y=3!Sensor at x=14, y=3: closest beacon is at x=15, y=3!Sensor at x=20, y=1: closest beacon is at x=15, y=3";

afficheTotal(inputExemple);

function afficheTotal(texte) {
	sources = [];
	beacons = [];
	cible = 2000000;
	//cible = 10;
	beaconsSurCible= [];
	intervalles = [];


	parseInput(texte);
	let beaconsSurCibleU=[... new Set(beaconsSurCible)];
	console.log('sources',sources);
	console.log('beacons',beacons);
	console.log('beacons sur cible',beaconsSurCibleU);
	
	detecteIntervalles();
	intervalles.sort((a,b) => (a.min > b.min));
	let continuerRegr=true;
	while(continuerRegr) {
		continuerRegr=regroupeIntervalles();
	}

	let total=0;
	intervalles.forEach(element => {
		total+=element.max - element.min + 1;
	});

	total=total - beaconsSurCibleU.length;
	console.log('intervalles',intervalles);
	document.getElementById('reponse').value=total;

	//2e partie de l'exercice
	/*
	let total2=tailleSuppr();
	console.log('total2',total2)
	document.getElementById('reponse-2').value=total2;
*/
}

function parseInput(texte) {
	let lignes=texte.split("!");
	lignes.forEach((ligneS)=> {
		ligneS=ligneS.replace('Sensor at x=','');
		ligneS=ligneS.replace(" y=","");
		ligneS=ligneS.replace(" y=","");
		ligneS=ligneS.replace(": closest beacon is at x=","$");
		console.log(ligneS);
		let ligne=ligneS.split('$');
		let source=ligne[0];
		let beacon=ligne[1];
		sources.push(source);
		beacons.push(beacon);
		let beaconY=parseInt(beacon.split(',')[1]);
		if(beaconY===cible) {
			beaconsSurCible.push(beacon);
		}
		
	})
}



function detecteIntervalles() {
	sources.forEach((s,index) => {
		console.log('==========source',s);
		let b=beacons[index];
		//console.log('beacon',b);
		let sx=parseInt(s.split(',')[0]);
		let sy=parseInt(s.split(',')[1]);
		let bx=parseInt(b.split(',')[0]);
		let by=parseInt(b.split(',')[1]);
		let r=calculateR(sx,sy,bx,by);
		//console.log('r',r);

		let deltaY=Math.abs(sy - cible);
		if(deltaY > r) {
			console.log("cette source n'atteint pas la cible")
		} else {
			
			let xMax = sx + r - deltaY;
			let xMin = sx - r + deltaY;
			//console.log('xMin',xMin);
			//console.log('xMax',xMax);
			intervalles.push({'min':xMin,'max':xMax});

			
		}
		
	})
}

function calculateR(sx,sy,bx,by) {
	return (Math.abs(sx - bx) + Math.abs(sy - by));
}

function regroupeIntervalles() {
	let continuer=false;
	let j=0; //index du dernier intervalle conservé
	for(let i=1;i<intervalles.length;i++) {
		let currentMax=intervalles[i].max;
		let currentMin=intervalles[i].min;
		let prevMax=intervalles[j].max;
		if(currentMax <= prevMax) {
			//nouvel intervalle entièrement inclus dans le précédent
			intervalles.splice(i,1);
			continuer=true;
		} else if(currentMin <= prevMax && currentMax > prevMax) {
			//on augmente l'ancien intervalle par le haut
			intervalles[j].max=currentMax;
			intervalles.splice(i,1);
			continuer=true;
		} else {
			//l'intervalle est distinct du précédent, il devient notre nouvel intervalle de travail
			j=i;
		}
	
	}
	//Si tous les intervalles sont distincts, on retourne false
	return continuer;
	
}