function playSound(soundfile) {
	document.getElementById("dummy").innerHTML=
	"<embed src=\""+soundfile+"\" hidden=\"true\" autostart=\"true\" loop=\"false\" />";
}

function playRandomFile() {
	var sourceFolder = Folder("C:\\Lunch De-Terminator\\LunchDeTerminator\\RandomArnoldQuotes");
	var fileList = sourceFolder.getFiles();
	
	playSound(fileList[0].Name);
}