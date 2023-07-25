"use strict";

const adviceID = document.querySelector('.advice-id');
const adviceText = document.querySelector('.advice-text');
const getAdviceBtn = document.querySelector('.generate-advice');
const url = 'https://api.adviceslip.com/advice';

const getAdvice = ()=> {
	fetch(url)
		.then(response => response.json())
		.then(jsonResponse => {
    		const {slip: {id,advice}} = jsonResponse;
	    	adviceID.textContent = id;
			adviceText.innerHTML = `"${advice}"`;
  	}).catch(error => {
    	adviceID.textContent = `???`;
		adviceText.textContent = `Connection error, ${error}. Try again`;
  	});
}

getAdvice();

getAdviceBtn.addEventListener("click",(e)=> {
	e.preventDefault();
	getAdvice();
});