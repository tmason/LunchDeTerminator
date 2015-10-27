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

function randomShowDiv(arrayOfFood){

	var random = Math.floor((Math.random() * 7) + 1);

	switch (arrayOfFood[0])
	{
		case 1:
			show('div1');
			break;
		case 2:
			show('div2');
			break;
		case 3:
			show('div3');
			break;
		case 4:
			show('div4');
			break;
		case 5:
			show('div5');
			break;
		case 6:
			show('div6');
			break;
		case 7:
			show('div7');
			break;
		case "schwarma":
			show('div6');
			if (arrayOfFood[1] === "estera")
			{
				show('div7');
			}
			break;
	}

}

function getFood() {
	var socket = io.connect('http://localhost');
	socket.emit('getFood', {}, function () {
		var array = data.split('\n');
		randomShowDiv(array);
	});
}