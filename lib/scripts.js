function playSound(soundfile) {
	document.getElementById("dummy").innerHTML=
	"<embed src=\""+soundfile+"\" hidden=\"true\" autostart=\"true\" loop=\"false\" />";
}

function show(element) {
    document.getElementById(element).className='visiblediv';
}

function hide(element) {
    document.getElementById(element).className='hiddendiv';
}

function randomShowDiv(){

	var random = Math.floor((Math.random() * 7) + 1);
	
	hide('div1');
	hide('div2');
	hide('div3');
	hide('div4');
	hide('div5');
	hide('div6');
	hide('div7');
	

	switch (random)
	{
		case 1:
			if (!document.getElementById('pizza').checked)
			{
				show('div1');
			}
			else
			{
				randomShowDiv();
			}
			break;
		case 2:
			if (!document.getElementById('burger').checked)
			{
				show('div2');
			}
			else
			{
				randomShowDiv();
			}
			break;
		case 3:
			if (!document.getElementById('fancy').checked)
			{
				show('div3');
			}
			else
			{
				randomShowDiv();
			}
			break;
		case 4:
			if (!document.getElementById('asian').checked)
			{
				show('div4');
			}
			else
			{
				randomShowDiv();
			}
			break;
		case 5:
			if (!document.getElementById('sandwiches').checked)
			{
				show('div5');
			}
			else
			{
				randomShowDiv();
			}
			break;
		case 6:
			if (!document.getElementById('schwarma').checked)
			{
				show('div6');
			}
			else
			{
				randomShowDiv();
			}
			break;
		case 7:
			if (!document.getElementById('eatAtYourDesk').checked)
			{
				show('div7');
			}
			else
			{
				randomShowDiv();
			}
			break;
		// case "schwarma":
			// show('div6');
			// if (arrayOfFood[1] === "estera")
			// {
				// show('div7');
			// }
			// break;
	}

}

function getFood() {
	// var socket = io.connect('http://localhost');
	// socket.emit('getFood', {}, function () {
		// var array = data.split('\n');
		// //randomShowDiv(array);
	// });
}