<!-- Chase May -->
<!-- Project 02 -->

function evaluateFirstAnswer(){
	if(document.getElementById("firstanswer").value == "329"){
		document.getElementById("status").innerHTML = "Correct Answer";
	}else{
		document.getElementById("status").innerHTML = "Incorrect Answer";
	}
}

function evaluateSecondAnswer(){
	if(document.getElementById("secondanswer").value == "72"){
		document.getElementById("status").innerHTML = "Correct Answer";
	}else{
		document.getElementById("status").innerHTML = "Incorrect Answer";
	}
}

function evaluateThirdAnswer(){
	if(document.getElementById("thirdanswer").value == "104"){
		document.getElementById("status").innerHTML = "Correct Answer";
	}else{
		document.getElementById("status").innerHTML = "Incorrect Answer";
	}
}

function gotoSecondQuestion(){
	var correct = 0;
	if(document.getElementById("firstanswer").value.length > 0){
		if(document.getElementById("firstanswer").value == "329"){
			correct++;
		}
		window.location.href = "question2.html" + "#" + correct;
	}else{
		alert("Please answer first question!")
	}
}

function gotoThirdQuestion(){
	var correct = window.location.hash.substring(1);
	if(document.getElementById("secondanswer").value.length > 0){
		if(document.getElementById("secondanswer").value == "72"){
			correct++;
		}
		window.location.href = "question3.html" + "#" + correct;
	}else{
		alert("Please answer second question!")
	}
}

function gotoScorecard(){
	var correct = window.location.hash.substring(1);
	if(document.getElementById("thirdanswer").value.length > 0){
		if(document.getElementById("thirdanswer").value == "104"){
			correct++;
		}
		window.location.href = "score.html" + "#" + correct;
	}else{
		alert("Please answer third question!")
	}
}

function getScore(){
	var correct = window.location.hash.substring(1);
	document.getElementById("questions").innerHTML = "3";
	document.getElementById("correct").innerHTML = correct;
	var incorrect = 3 - correct;
	var score = Math.floor((correct / 3) * 100)
	document.getElementById("incorrect").innerHTML = incorrect;
	document.getElementById("totalscore").innerHTML = score + "%";
}
