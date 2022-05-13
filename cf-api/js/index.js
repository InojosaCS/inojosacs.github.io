import { getPerformances } from './performance.js';

async function main (e) {
	e.preventDefault();
	const input = document.getElementById('handle');
	let API = await fetch('https://codeforces.com/api/user.rating?handle=' + input.value);
	API = await API.json();
	console.log(API);
	getPerformances(API.result);
}


document.querySelector('#myBtn').addEventListener('click', main);
document.querySelector("#form").addEventListener('submit', main);


