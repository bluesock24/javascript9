var buttonItems = document.getElementsByClassName('button');

for (var i = 0; i<buttonItems.length; i++) {
	var buttonItem = buttonItems[i];
	console.dir(buttonItem);
	console.log(buttonItem.innerText);
	console.log(buttonItem.innerHTML);
}


