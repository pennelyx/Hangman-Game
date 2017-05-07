var words = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
var underScore = [];
var cword;
var guessed= [];
//var cword="eeeEee";
var input;
var i=0;
var win=0;
var remaining=12;
var cwordIndex=[];

function initialWord() {
	underScore.length=0;
	guessed.length=0;
	remaining=12;
	cword= words[Math.floor(Math.random() * words.length)];
	console.log(cword);
	for (var i=0; i<cword.length; i++)
	{
		underScore.push("_ ");
	}

}

initialWord();

document.onkeyup=function(event){
	input=event.key;
	if (guessed.indexOf(input.toUpperCase()) === -1){
		guessed.push(input.toUpperCase());
	}
	
	console.log(guessed);
	document.getElementById("guessedrd").innerHTML = guessed;

	
	var j=0;

	if (cword.toLowerCase().indexOf(input) >-1)
	{
		if (input.toLowerCase()==cword[0].toLowerCase()){
			cwordIndex[0]=0;
			j=1;
		}
		console.log(input.toLowerCase());

		for (i=0, j; i>-1; j ++)
		{
			i= cword.toLowerCase().indexOf(input.toLowerCase(),i+1);
			cwordIndex[j]=i;
		}

		cwordIndex.splice(cwordIndex.length-1,1);

		console.log(cwordIndex);


		for (var k=0; k<j-1;k++)
		{
			
			underScore[cwordIndex[k]]=input.toUpperCase();
		}

		document.getElementById("CurrentWord").innerHTML = underScore.join(" ");

		if (underScore.indexOf("_ ")==-1)
		{
			win++;
			alert ("You did it!");
			initialWord();
			document.getElementById("CurrentWord").innerHTML=underScore.join(" ");
			document.getElementById("wincnt").innerHTML=win;
			document.getElementById("guessedrd").innerHTML = guessed;
			document.getElementById("remainingcnt").innerHTML = remaining;
		}

	}
	else {
		remaining--;
		document.getElementById("remainingcnt").innerHTML = remaining;
		if (remaining===0) {
			alert ("Try again!")
			initialWord();
			document.getElementById("CurrentWord").innerHTML=underScore.join(" ");
			document.getElementById("wincnt").innerHTML=win;
			document.getElementById("guessedrd").innerHTML = guessed;
			document.getElementById("remainingcnt").innerHTML = remaining;
		}

	}

}