const toggleButton= document.getElementsByClassName('toggle-button')[0]
const meNu = document.getElementsByClassName('menu')[0]

toggleButton.addEventListener('click', ()=>{
    meNu.classList.toggle('active')
})

let slideImg = document.getElementById("slideimage");
let images= new Array(
    "Mulkern_Landcaping_Design-1.jpg",
    "Mulkern_Landcaping_Yard_Maintenance.jpg",
    "Mulkern-Landcaping-Design-Installation.jpg",
    "Mulkern-Landcaping-Fire-Installation.jpg"
)
let len= images.length;
let i=0;
function slider(){
    if(i > len-1){
        i = 0;
    }
    slideImg.src=images[i];
    i++;
    setTimeout('slider()',3000)
}


let slideImg1 = document.getElementById("Slideimage");
let Images= new Array(
    "Honolulu_Landscape_Design (1).jpg",
    "Honolulu_Landscape_designs.jpg",
    "Honolulu_Lanscape_Nightlighting.jpg",
    "Honolulu_nightlighting_tree.jpg",
    "Honolulu-landscaping-design.jpg"
)
let le= Images.length;
let ii=0;
function Slider(){
    if(ii > le-1){
        ii = 0;
    }
    slideImg1.src=Images[ii];
    ii++;
    setTimeout('Slider()',4000)
}

