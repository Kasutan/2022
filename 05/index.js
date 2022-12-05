//let stockStrings=["ZN","MCD","P"];
let stockStrings=["LNWTD","CPH","WPHNDGMJ","CWSNTQL","PHCN","THNDMWQB","MBRJGSL","ZNWGVBRT","WGDNPL"];

let stockInitial=stockStrings.map(function(str) {
	return str.split("");
})

console.log("stock initial",stockInitial);



//let movesString="move 1 from 2 to 1-move 3 from 1 to 3-move 2 from 2 to 1-move 1 from 1 to 2";
let movesString="move 6 from 6 to 5-move 2 from 5 to 9-move 8 from 9 to 1-move 3 from 5 to 4-move 9 from 1 to 8-move 2 from 1 to 5-move 1 from 1 to 8-move 14 from 8 to 2-move 1 from 1 to 2-move 2 from 6 to 8-move 2 from 5 to 7-move 6 from 8 to 6-move 4 from 4 to 2-move 2 from 4 to 9-move 5 from 7 to 4-move 2 from 7 to 5-move 6 from 2 to 4-move 2 from 4 to 7-move 4 from 5 to 8-move 1 from 5 to 2-move 3 from 3 to 5-move 3 from 8 to 3-move 4 from 3 to 7-move 2 from 9 to 8-move 1 from 3 to 7-move 1 from 6 to 8-move 5 from 7 to 1-move 3 from 7 to 2-move 1 from 6 to 3-move 2 from 5 to 9-move 5 from 4 to 2-move 3 from 5 to 9-move 5 from 9 to 6-move 2 from 1 to 3-move 4 from 4 to 1-move 2 from 8 to 1-move 18 from 2 to 5-move 3 from 4 to 1-move 1 from 1 to 2-move 1 from 6 to 8-move 1 from 7 to 1-move 10 from 1 to 5-move 1 from 1 to 5-move 3 from 8 to 1-move 2 from 1 to 5-move 3 from 6 to 5-move 8 from 2 to 9-move 2 from 9 to 7-move 3 from 3 to 8-move 1 from 4 to 8-move 3 from 5 to 3-move 15 from 5 to 8-move 4 from 6 to 1-move 2 from 7 to 4-move 9 from 5 to 7-move 1 from 6 to 8-move 5 from 3 to 5-move 5 from 7 to 5-move 3 from 1 to 5-move 2 from 4 to 8-move 3 from 1 to 6-move 20 from 5 to 4-move 1 from 7 to 6-move 21 from 8 to 2-move 1 from 3 to 7-move 2 from 4 to 2-move 1 from 7 to 1-move 18 from 2 to 8-move 3 from 9 to 2-move 1 from 6 to 4-move 1 from 1 to 9-move 8 from 8 to 6-move 4 from 8 to 2-move 1 from 2 to 6-move 7 from 8 to 5-move 2 from 5 to 3-move 1 from 9 to 5-move 5 from 2 to 4-move 1 from 3 to 7-move 2 from 5 to 7-move 4 from 4 to 9-move 2 from 5 to 9-move 6 from 2 to 8-move 3 from 7 to 3-move 2 from 5 to 4-move 4 from 8 to 2-move 2 from 7 to 4-move 7 from 6 to 4-move 1 from 8 to 4-move 3 from 6 to 7-move 2 from 7 to 2-move 7 from 9 to 7-move 1 from 9 to 2-move 3 from 3 to 6-move 3 from 7 to 4-move 2 from 7 to 9-move 6 from 4 to 1-move 3 from 7 to 9-move 1 from 8 to 5-move 1 from 3 to 6-move 3 from 9 to 4-move 2 from 6 to 4-move 3 from 9 to 1-move 4 from 2 to 8-move 1 from 8 to 5-move 9 from 1 to 2-move 1 from 6 to 5-move 1 from 7 to 2-move 1 from 8 to 1-move 2 from 8 to 9-move 1 from 9 to 8-move 1 from 5 to 7-move 1 from 7 to 6-move 1 from 9 to 8-move 1 from 6 to 3-move 26 from 4 to 3-move 1 from 5 to 8-move 3 from 6 to 3-move 7 from 4 to 3-move 1 from 1 to 3-move 1 from 4 to 8-move 13 from 3 to 1-move 1 from 3 to 4-move 12 from 2 to 5-move 20 from 3 to 2-move 1 from 4 to 1-move 4 from 5 to 7-move 1 from 7 to 8-move 9 from 5 to 2-move 5 from 1 to 5-move 21 from 2 to 8-move 5 from 8 to 4-move 4 from 5 to 2-move 6 from 1 to 7-move 1 from 5 to 4-move 4 from 3 to 1-move 6 from 1 to 3-move 1 from 1 to 9-move 6 from 8 to 7-move 4 from 8 to 2-move 4 from 2 to 7-move 5 from 4 to 1-move 8 from 8 to 4-move 1 from 9 to 6-move 18 from 7 to 6-move 15 from 6 to 5-move 2 from 6 to 8-move 2 from 6 to 3-move 8 from 3 to 7-move 15 from 5 to 7-move 3 from 4 to 9-move 12 from 2 to 3-move 3 from 9 to 4-move 6 from 7 to 9-move 9 from 4 to 5-move 10 from 3 to 5-move 9 from 5 to 2-move 14 from 7 to 8-move 14 from 8 to 5-move 4 from 2 to 4-move 1 from 4 to 6-move 2 from 8 to 4-move 3 from 8 to 9-move 18 from 5 to 1-move 1 from 5 to 9-move 1 from 7 to 4-move 5 from 5 to 9-move 3 from 2 to 4-move 13 from 9 to 2-move 13 from 2 to 6-move 1 from 7 to 3-move 3 from 3 to 1-move 9 from 6 to 5-move 1 from 7 to 8-move 20 from 1 to 8-move 2 from 2 to 8-move 5 from 6 to 9-move 15 from 8 to 7-move 3 from 5 to 3-move 5 from 1 to 3-move 2 from 3 to 4-move 3 from 9 to 5-move 4 from 5 to 2-move 4 from 5 to 7-move 3 from 4 to 9-move 10 from 7 to 8-move 2 from 9 to 4-move 1 from 5 to 6-move 8 from 7 to 9-move 1 from 6 to 7-move 6 from 3 to 4-move 12 from 9 to 8-move 1 from 1 to 5-move 2 from 7 to 8-move 1 from 7 to 5-move 1 from 9 to 5-move 2 from 2 to 9-move 11 from 8 to 1-move 7 from 1 to 5-move 3 from 1 to 6-move 5 from 8 to 9-move 8 from 4 to 3-move 4 from 4 to 6-move 5 from 9 to 3-move 4 from 4 to 5-move 2 from 6 to 7-move 1 from 9 to 5-move 2 from 7 to 4-move 12 from 5 to 2-move 8 from 8 to 9-move 8 from 8 to 6-move 9 from 6 to 2-move 4 from 9 to 2-move 1 from 5 to 1-move 5 from 2 to 1-move 2 from 5 to 4-move 5 from 2 to 5-move 5 from 5 to 6-move 3 from 4 to 7-move 11 from 2 to 7-move 2 from 2 to 1-move 4 from 3 to 7-move 2 from 2 to 4-move 6 from 1 to 4-move 1 from 2 to 8-move 2 from 9 to 5-move 4 from 4 to 3-move 5 from 4 to 1-move 2 from 2 to 1-move 1 from 8 to 5-move 14 from 7 to 6-move 3 from 9 to 2-move 15 from 6 to 8-move 4 from 1 to 3-move 2 from 2 to 3-move 1 from 1 to 7-move 2 from 3 to 5-move 4 from 5 to 4-move 1 from 3 to 5-move 5 from 1 to 6-move 12 from 6 to 7-move 7 from 8 to 4-move 12 from 7 to 9-move 4 from 7 to 9-move 1 from 2 to 8-move 12 from 9 to 4-move 23 from 4 to 3-move 1 from 6 to 5-move 3 from 9 to 3-move 1 from 7 to 9-move 1 from 9 to 1-move 1 from 9 to 7-move 42 from 3 to 1-move 3 from 5 to 4-move 5 from 1 to 3-move 3 from 4 to 7-move 1 from 1 to 9-move 4 from 3 to 8-move 1 from 3 to 7-move 1 from 9 to 1-move 2 from 7 to 8-move 8 from 1 to 6-move 2 from 7 to 5-move 9 from 1 to 2-move 5 from 2 to 3-move 3 from 2 to 4-move 20 from 1 to 2-move 1 from 1 to 5-move 1 from 6 to 7-move 3 from 4 to 7-move 2 from 3 to 6-move 3 from 6 to 1-move 1 from 6 to 4-move 2 from 1 to 6-move 3 from 5 to 9-move 1 from 4 to 3-move 2 from 7 to 4-move 6 from 8 to 4-move 1 from 1 to 9-move 1 from 2 to 9-move 2 from 8 to 7-move 3 from 6 to 2-move 5 from 7 to 5-move 4 from 2 to 5-move 4 from 4 to 6-move 3 from 9 to 6-move 4 from 3 to 1-move 1 from 9 to 2-move 7 from 8 to 9-move 4 from 2 to 4-move 2 from 1 to 7-move 3 from 4 to 5-move 4 from 2 to 4-move 1 from 7 to 4-move 4 from 2 to 9-move 7 from 4 to 3-move 1 from 7 to 3-move 6 from 2 to 3-move 2 from 1 to 5-move 10 from 3 to 6-move 2 from 6 to 1-move 2 from 2 to 7-move 2 from 3 to 1-move 1 from 7 to 8-move 11 from 5 to 3-move 2 from 3 to 1-move 4 from 6 to 1-move 1 from 4 to 6-move 8 from 3 to 4-move 2 from 5 to 6-move 3 from 3 to 5-move 1 from 8 to 4-move 1 from 4 to 9-move 2 from 6 to 1-move 1 from 5 to 1-move 9 from 4 to 3-move 5 from 6 to 9-move 5 from 6 to 7-move 13 from 9 to 3-move 5 from 1 to 8-move 4 from 8 to 4-move 10 from 3 to 2-move 3 from 6 to 1-move 2 from 7 to 9-move 1 from 8 to 3-move 1 from 7 to 3-move 1 from 9 to 5-move 1 from 6 to 3-move 7 from 2 to 4-move 3 from 5 to 2-move 8 from 3 to 5-move 7 from 4 to 3-move 5 from 9 to 7-move 1 from 7 to 1-move 9 from 1 to 8-move 9 from 5 to 8-move 2 from 7 to 8-move 3 from 8 to 1-move 10 from 3 to 6-move 1 from 1 to 6-move 5 from 1 to 7-move 3 from 2 to 8-move 7 from 8 to 6-move 7 from 8 to 6-move 1 from 3 to 5-move 5 from 7 to 9-move 4 from 8 to 4-move 3 from 2 to 8-move 1 from 7 to 8-move 3 from 3 to 9-move 3 from 7 to 4-move 1 from 7 to 2-move 9 from 9 to 1-move 5 from 1 to 9-move 4 from 8 to 6-move 1 from 2 to 7-move 1 from 5 to 3-move 1 from 3 to 7-move 1 from 1 to 9-move 1 from 1 to 7-move 5 from 9 to 6-move 2 from 7 to 6-move 10 from 4 to 8-move 1 from 4 to 2-move 1 from 4 to 1-move 1 from 9 to 2-move 3 from 1 to 2-move 1 from 7 to 3-move 1 from 2 to 1-move 16 from 6 to 3-move 9 from 6 to 1-move 6 from 6 to 1-move 5 from 6 to 1-move 3 from 8 to 1-move 11 from 3 to 4-move 1 from 6 to 2-move 3 from 8 to 2-move 4 from 1 to 6-move 5 from 3 to 2-move 1 from 2 to 5-move 1 from 8 to 5-move 5 from 8 to 3-move 4 from 6 to 9-move 2 from 9 to 6-move 3 from 3 to 9-move 1 from 5 to 7-move 5 from 1 to 6-move 3 from 6 to 4-move 2 from 2 to 9-move 8 from 4 to 2-move 9 from 1 to 7-move 3 from 3 to 5-move 3 from 5 to 7-move 12 from 7 to 1-move 5 from 4 to 6-move 1 from 4 to 5-move 7 from 1 to 8-move 5 from 9 to 3-move 1 from 7 to 4-move 10 from 1 to 8-move 1 from 4 to 8-move 4 from 6 to 8-move 1 from 6 to 9-move 2 from 5 to 1-move 4 from 3 to 4-move 1 from 1 to 8-move 4 from 4 to 7-move 2 from 1 to 8-move 4 from 6 to 1-move 3 from 9 to 5-move 1 from 6 to 5-move 1 from 3 to 7-move 24 from 8 to 6-move 3 from 6 to 5-move 4 from 6 to 7-move 1 from 1 to 7-move 7 from 7 to 6-move 7 from 5 to 3-move 13 from 6 to 8-move 3 from 1 to 2-move 7 from 6 to 3-move 12 from 2 to 4-move 4 from 6 to 9-move 6 from 3 to 1-move 1 from 2 to 4-move 2 from 8 to 7-move 2 from 2 to 9-move 6 from 3 to 4-move 12 from 8 to 2-move 18 from 2 to 5-move 10 from 4 to 3-move 4 from 7 to 3-move 5 from 4 to 7-move 3 from 5 to 2-move 4 from 7 to 9-move 1 from 5 to 4-move 3 from 2 to 1-move 4 from 3 to 6-move 7 from 5 to 6-move 2 from 5 to 7-move 5 from 1 to 7-move 9 from 7 to 6-move 8 from 9 to 8-move 1 from 1 to 3-move 1 from 3 to 1-move 10 from 3 to 9-move 8 from 8 to 4-move 1 from 3 to 8-move 1 from 1 to 3-move 6 from 9 to 1-move 5 from 5 to 3-move 5 from 3 to 6-move 1 from 8 to 9-move 19 from 6 to 2-move 13 from 4 to 1-move 4 from 1 to 5-move 6 from 2 to 1-move 2 from 9 to 4-move 1 from 3 to 1-move 9 from 2 to 3-move 4 from 5 to 1-move 5 from 9 to 6-move 4 from 3 to 4-move 3 from 2 to 7-move 2 from 4 to 8-move 6 from 1 to 9-move 1 from 8 to 6-move 4 from 1 to 5-move 3 from 4 to 5-move 1 from 7 to 2-move 11 from 1 to 6-move 1 from 2 to 7-move 5 from 3 to 7-move 1 from 3 to 4-move 1 from 4 to 8-move 3 from 5 to 6-move 8 from 1 to 7-move 1 from 8 to 9-move 1 from 6 to 9-move 1 from 8 to 5-move 11 from 6 to 5-move 12 from 5 to 2-move 1 from 5 to 2-move 8 from 7 to 3-move 1 from 5 to 6-move 2 from 5 to 6-move 3 from 7 to 1-move 6 from 2 to 6-move 1 from 3 to 1-move 1 from 4 to 1-move 4 from 6 to 2-move 5 from 1 to 5-move 10 from 2 to 3-move 2 from 9 to 4-move 4 from 5 to 8-move 2 from 2 to 7-move 12 from 6 to 7-move 1 from 8 to 2-move 10 from 3 to 4-move 2 from 3 to 5-move 1 from 3 to 1";

let moves=movesString.split("-");
moves=moves.map(function(str) {
	str=str.replace("move ","");
	str=str.replace("from ","");
	str=str.replace("to ","");
	let A=str.split(" ");
	return {
		"nb" : A[0],
		"from" : A[1],
		"to" : A[2]
	}

});
console.log("moves",moves);


processMoves(stockInitial,moves);
processMoves9001(stockInitial,moves);
console.log(stockInitial);

function processMoves(stockInitial, moves) {
	//Shallow copy ! "Note that the spread operator only copies the values at one level. That means the nested items will still be a reference type array."
	//let stock1 = [...stockInitial];

	//Deep copy avec structuredClone
	//Attention support encore partiel
	//https://developer.mozilla.org/en-US/docs/Web/API/structuredClone
	let stock = structuredClone(stockInitial);

	moves.forEach(function(move) {
		for(var i=1;i<=move.nb;i++) {
			let from=move.from - 1;
			let to=move.to - 1;
			let crate=stock[from].pop();
			stock[to].push(crate);
		}
	})
	let message="";
	stock.forEach(function (stack) {
		message+=stack.pop()
	})
	console.log('message',message);
	document.getElementById('reponse').value=message;

}


function processMoves9001(stockInitial, moves) {
	let stock2 = structuredClone(stockInitial);


	moves.forEach(function(move) {
		let nb=parseInt(move.nb);
		let from=move.from - 1;
		let to=move.to - 1;
		let stack=stock2[from].splice(-1*nb,nb);
		stock2[to]=stock2[to].concat(stack);

	})
	let message2="";
	stock2.forEach(function (stack) {
		message2+=stack.pop()
	})
	console.log('message2',message2);
	document.getElementById('reponse-2').value=message2;
}



