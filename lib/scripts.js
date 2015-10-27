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
	
	switch (random) 
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
	}
	
}