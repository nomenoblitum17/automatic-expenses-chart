"use strict";

const monAmount = document.querySelector(".amount-mon"),
tueAmount = document.querySelector(".amount-tue"),
wedAmount = document.querySelector(".amount-wed"),
thuAmount = document.querySelector(".amount-thu"),
friAmount = document.querySelector(".amount-fri"),
satAmount = document.querySelector(".amount-sat"),
sunAmount = document.querySelector(".amount-sun"),

monBar = document.querySelector(".mon-bar"),
tueBar = document.querySelector(".tue-bar"),
wedBar = document.querySelector(".wed-bar"),
thuBar = document.querySelector(".thu-bar"),
friBar = document.querySelector(".fri-bar"),
satBar = document.querySelector(".sat-bar"),
sunBar = document.querySelector(".sun-bar");

const dayAmount = [monAmount,tueAmount,wedAmount,thuAmount,friAmount,satAmount,sunAmount],
dayBar = [monBar,tueBar,wedBar,thuBar,friBar,satBar,sunBar];

const loadData = async () =>{
	let request = await fetch("data.json");
	let result = await request.json();
	for (let i = 0; i < result.length; i++) {
		dayBar[i].style.height =  `${Math.round(result[i].amount) * 2}px`;
		if (new Date().getDay() - 1 === i) dayBar[i].style.background = "hsl(186, 34%, 60%)";
		dayBar[i].addEventListener("mouseover",()=>{
			dayAmount[i].style.display = "flex";
			dayAmount[i].textContent = `$${result[i].amount}`;
		})
		dayBar[i].addEventListener("mouseleave",()=> dayAmount[i].style.display = "none");
	}
}
loadData();