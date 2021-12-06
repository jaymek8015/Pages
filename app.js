'use strict';

const switcher = document.querySelector('.btn');

switcher.addEventListener('click', function() {
	console.log("Clicking button");
    document.body.classList.toggle('dark-theme');
	
	var className = document.body.className;
	if(className.includes("light-theme")) {
		this.textContent = "Dark";
	}
	else {
		this.textContent = "Light";
	}
	
	console.log('current class name: ' + className);
});


function test(){
	console.log("This is a test.");
}