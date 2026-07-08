const title = "M4BladeX";

let i = 1;
let deleting = false;

function animateTitle(){

document.title = title.substring(0,i);

if(!deleting){

i++;

if(i>title.length){

deleting=true;

return setTimeout(animateTitle,1000);

}

setTimeout(animateTitle,150);

}else{

i--;

if(i===0){

deleting=false;

return setTimeout(animateTitle,500);

}

setTimeout(animateTitle,70);

}

}

animateTitle();

const card=document.querySelector(".card");

document.addEventListener("mousemove",(e)=>{

const x=(window.innerWidth/2-e.clientX)/35;

const y=(window.innerHeight/2-e.clientY)/35;

card.style.transform=`rotateY(${x}deg) rotateX(${-y}deg)`;

});

const socialBtn = document.getElementById("socialBtn");
const socials = document.getElementById("socials");

socialBtn.addEventListener("click", () => {
    socials.classList.toggle("show");

    socialBtn.textContent = socials.classList.contains("show")
        ? "Hide"
        : "Socials";
});
const quotes=[
"Discipline beats motivation.",
"Stay hungry. Stay dangerous.",
"Comfort kills growth.",
"Fall seven times. Stand up eight.",
"Code. Train. Repeat.",
"The only bad workout is the one you skipped.",
"Action beats intention.",
"Greatness is built quietly.",
"Small progress is still progress.",
"Pain is temporary. Pride lasts."
];

const shuffled=[...quotes].sort(()=>Math.random()-.5);

document.querySelector(".quote-1").textContent=shuffled[0];
document.querySelector(".quote-2").textContent=shuffled[1];
document.querySelector(".quote-3").textContent=shuffled[2];

