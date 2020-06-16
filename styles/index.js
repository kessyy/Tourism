//Auto update copyright 
const copyrightYear = document.querySelector('.year');
const date = new Date();
const year = date.getFullYear();
copyrightYear.innerText = year;

const input = document.querySelector('input');
function subcribeNow(){input.value = "";}