//Idioma
var lang = "es";
var lang_en = false;

//Nombre de la novia
var girlfriend = "Melody";

//Variables default
var yes = "";
var no = "No";
var quest = "";
var great = "";
var thanks = "";

var steps = 5;
var step_count = 1;

var search = window.location.search;
let urlParam = new URLSearchParams(search);
var name = urlParam.get("name");

if(search != ""){
	girlfriend = name;
}

//Variables En Español
var yes_es = "Si";
var quest_es = "Quieres ser mi novia " + girlfriend + "?";
var great_es = "Sabia que dirias que si😍❤️";
var thanks_es = "Me haces el Chico mas Feliz🥺🥺";

//Variables in English
var yes_en = "Yes";
var quest_en = "Do you want to be my girlfriend " + girlfriend + "?";
var great_en = "I knew you would say yes😍❤️";
var thanks_en = "You make me the happiest boy🥺🥺";

const Txtlang = document.getElementById("language");
const proposal = document.getElementById("proposal");
const btn_yes = document.getElementById("yes");
const btn_no = document.getElementById("no");
const btnA = document.getElementById("absolute-btn");
const wrapper = document.getElementById("wrapper");
const dialog = document.getElementById("dialog");
const Txtgreat = document.getElementById("great");
const Txthanks = document.getElementById("thanks");


changeLang();
updateTxt();

Txtlang.addEventListener('click',()=>{
	changeLang();
	updateTxt();
});

btn_yes.addEventListener('click',()=>{
	dialog.classList.add("show");
});
btn_no.addEventListener('click',()=>{
	
	if(step_count < steps){
   btnA.classList.add("visible");
   btn_no.classList.add("invisible");
	}
	
	if(step_count == steps){
		dialog.classList.add("show");
	}
	
});

btnA.addEventListener('click',()=>{
	var w = document.body.offsetWidth - btnA.clientWidth;
	var h = document.body.offsetHeight - btnA.clientHeight;
	moveBtn(h,w);
	step_count++;
	
	if(step_count == steps){
		trollBtn();
		 btnA.classList.remove("visible");
   btn_no.classList.remove("invisible");
	}
});
function trollBtn(){
	btn_no.classList.add("yes");
	btn_no.innerText = yes;
}
function moveBtn(width,height){
	btnA.style.top = Math.round(Math.random() * width) + "px";
	btnA.style.left = Math.round(Math.random() * height) + "px";
}
function updateTxt(){
Txtlang.innerText = lang;
proposal.innerText = quest + "❤️🥺";
btn_yes.innerText = yes;
btn_no.innerText = no;
btnA.innerText = no;

Txtgreat.innerText = great;
Txthanks.innerText = thanks;
}
function changeLang(){
	if(lang_en){
	yes = yes_en;
	quest = quest_en;
	great = great_en;
	thanks = thanks_en;
	lang = "EN";
	lang_en = false;
}else{
	yes = yes_es;
	quest = quest_es;
	great = great_es;
	thanks = thanks_es;
	lang = "ES";
	lang_en = true;
}
}