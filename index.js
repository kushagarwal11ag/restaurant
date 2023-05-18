var section = document.getElementById("extra-content");
var foot = document.getElementById("foot");
var button = document.getElementById("button");

function show() {
	section.style.display = "block";
	button.style.display = "none";
	foot.classList.remove("foot");
	foot.classList.add("foot-1");
}

function hide() {
	section.style.display = "none";
	button.style.display = "block";
	foot.classList.remove("foot-1");
	foot.classList.add("foot");
}
