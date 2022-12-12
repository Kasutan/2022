let historique = [];
let singes=[];

function ajouteSinge(items, test, next1,next0) {
	let singe={
		"items" : items.split(", "),
		"test" : test,
		"next1" : next1,
		"next0" : next0
	}
	singes.push(singe);
}


ajouteSinge("79, 98",23,2,3);
ajouteSinge("54, 65, 75, 74",19,2,0);
ajouteSinge("79, 60, 97",13,1,3);
ajouteSinge("74",17,0,1);
/*
ajouteSinge("71, 86",19,6,7);
ajouteSinge("66, 50, 90, 53, 88, 85",2,5,4);
ajouteSinge("97, 54, 89, 62, 84, 80, 63",13,4,1);
ajouteSinge("82, 97, 56, 92",5,6,0);
ajouteSinge("50, 99, 67, 61, 86",7,5,3);
ajouteSinge("61, 66, 72, 55, 64, 53, 72, 63",11,3,0);
ajouteSinge("59, 79, 63",17,2,7);
ajouteSinge("55",3,2,1);*/



singes.forEach((singe,index) => {
	historique[index]=0;
})

function operation(monkey,worry) {
	if(monkey===0) {
		return worry * 19;
	} else if(monkey===1) {
		return worry + 6;
	} else if(monkey===2) {
		return worry * worry;
	} else if(monkey===3) {
		return worry + 3;
	}
}

/*function operation(monkey,worry) {
	if(monkey===0) {
		return worry * 13;
	} else if(monkey===1) {
		return worry + 3;
	} else if(monkey===2) {
		return worry + 6;
	} else if(monkey===3) {
		return worry + 2;
	}  else if(monkey===4) {
		return worry * worry;
	} else if(monkey===5) {
		return worry + 4;
	} else if(monkey===6) {
		return worry *7;
	}  else if(monkey===7) {
		return worry + 7;
	} 
}*/

console.log(singes);


function rounds(n) {
	for(let i=1; i <= n ; i++) {
		singes.forEach((singe,index) => {
			let test=singe.test;
			let next1=singe.next1;
			let next0=singe.next0;
			let items=singe.items;
			let s=index;
			historique[index]+=singe.items.length; // On compte le nombre d'items qui vont être manipulés par ce singe pendant ce round
			items.forEach((item,indexItem) => {
				let next;
				let worry=parseInt(item);

				//console.log('singe '+s+' inspecte item '+worry);

				worry=operation(index,worry);
				//console.log('worry après opération ',worry);
				worry=Math.floor(worry / 3) ;
				//console.log('worry après division ',worry);

				if(worry%test===0) {
					next=next1;
					//console.log('divisible, passe au singe ',next);

				} else {
					next=next0;
					//console.log('non divisible, passe au singe ',next);

				}
				singes[next].items.push(worry); //On ajoute l'item au singe suivant

			})

			singes[index].items=[];
		})
	}
}

rounds(1000);
//console.log(singes);
console.log(historique);
/*
historique.sort(function(a,b) {
	return b - a;
});
console.log(historique);
let total=historique[0]*historique[1];
console.log('total',total)
document.getElementById('reponse').value=total;*/