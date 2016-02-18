function show(){
	var sealContainer = document.createElement("div");
	sealContainer.style.position = "absolute";		
	sealContainer.style.top = "5px";
	sealContainer.style.right = "5px";
	sealContainer.style.zIndex = 999;
	var seal = document.createElement("img");
	seal.src = "http://slashman.github.io/programmers-seal-of-approval/seal.png";
	sealContainer.appendChild(seal);
	document.getElementsByTagName("body")[0].appendChild(sealContainer);
}

window.addEventListener("load", show);