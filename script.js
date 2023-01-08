
/* variables */
const modal = document.querySelector('.modal');
const modalContent = document.querySelector('.modal-content')
const modalDesc = document.querySelector('.modal-desc')
const modalH1 = document.querySelector('.modal-h1')
const modalH4 = document.querySelector('.modal-h4')
const modalText = document.querySelector('.modal-text')
const modalBG = document.querySelector('.modal-carousel-image-container')
const modalLink = document.querySelector('.modal-link')
const modalClose = document.querySelector('.close')

/* array of modal elements */
/* */
const modalArray = {
"beviax" : {
    "id" : "beviax",
    
    "titre" : "Beviax",
    "soustitre" : "Site de photographie",
    "description" : "Un site vitrine pour une photographe, avec back-office et CRUD.",
    "lien" : "https://mmi21g01.mmi-troyes.fr/beviax",
    "tags" : [
        "PHP",
        "JavaScript",
        "Bootstrap 5"
    ],
    "recherche" : "dev"
},
"pokemon" : {
    "titre" : "La malette du Prof Chen",
    "soustitre" : "Mini-jeu JS",
    "description" : "Un mini-jeu très simple pour m'exercer au JavaScript et au JQuery. Découvrez les évolutions des Pokémon offerts par le Professeur Chen !",
    "lien" : "https://mmi21g01.mmi-troyes.fr/autres_pages/pointclick_pokemon",
    "tags" : [
        "JavaScript",
        "JQuery"
    ],
    "recherche" : "dev"
},
"portfolio_univ" : {
    "titre" : "Portfolio Universitaire",
    "soustitre" : "Travaux et compétences universitaires",
    "description" : "Un site réalisé dans le cadre de ma formation en MMI à l'IUT de Troyes, sur lequel sont répertoriés tous mes travaux, en liens avec les enseignements du référentiel MMI.",
    "lien" : "https://mmi21g01.mmi-troyes.fr/portfolio_universitaire",
    "tags" : [
        "Bootstrap 5"
    ],
    "recherche" : "dev"
},
"monopoly" : {
    "titre" : "Monopoly : The Office",
    "soustitre" : "Jeu de plateau à thème",
    "description" : "Un monopoly sur le thème de la série The Office. Petit projet amateur avec lequel j'ai découvert Gimp et Illustrator, et les tracas de l'impression.",
    "lien" : "https://docs.google.com/presentation/d/e/2PACX-1vQCb2GiSTs4VPyF6zRM-1_-yzYh_VB1xTs43E97RAORO3DR0DmPhP0IB94N_hQ7oQ/embed?start=false&amp;loop=false&amp;delayms=60000",
    "tags" : [
        "Illustrator",
        "Gimp"
    ],
    "recherche" : "graph"
},
"videocafe" : {
    "titre" : "Pub Café Grand-Mère",
    "soustitre" : "Projet vidéo réalisé en équipe",
    "description" : "Une vidéo réalisée en équipe dans le cadre des cours d'audiovisuel, de l'écriture au montage final.",
    "lien" : "videos/pub_cafe_final.mp4",
    "tags" : [
        "Adobe Premiere"
    ]
},
"square3" : {
    "titre" : "A venir",
    "soustitre" : "Projet à venir",
    "description" : "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae animi eos atque blanditiis expedita adipisci id, illo cupiditate tempore molestias quis harum perspiciatis fugit! Quod maxime maiores facere libero sed",
    "lien" : "#",
    "tags" : [
        "Tech 1",
        "Tech 2"
    ]
},
"square4" : {
    "titre" : "A venir",
    "soustitre" : "Projet à venir",
    "description" : "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae animi eos atque blanditiis expedita adipisci id, illo cupiditate tempore molestias quis harum perspiciatis fugit! Quod maxime maiores facere libero sed",
    "lien" : "#",
    "tags" : [
        "Tech 1",
        "Tech 2"
    ]
},
"square5" : {
    "titre" : "A venir",
    "soustitre" : "Projet à venir",
    "description" : "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae animi eos atque blanditiis expedita adipisci id, illo cupiditate tempore molestias quis harum perspiciatis fugit! Quod maxime maiores facere libero sed",
    "lien" : "#",
    "tags" : [
        "Tech 1",
        "Tech 2"
    ],
    "recherche" : "graph"
},
"square6" : {
    "titre" : "A venir",
    "soustitre" : "Projet à venir",
    "description" : "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae animi eos atque blanditiis expedita adipisci id, illo cupiditate tempore molestias quis harum perspiciatis fugit! Quod maxime maiores facere libero sed",
    "lien" : "#",
    "tags" : [
        "Tech 1",
        "Tech 2"
    ],
    "recherche" : "graph"
},
"square7" : {
    "titre" : "A venir",
    "soustitre" : "Projet à venir",
    "description" : "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae animi eos atque blanditiis expedita adipisci id, illo cupiditate tempore molestias quis harum perspiciatis fugit! Quod maxime maiores facere libero sed",
    "lien" : "#",
    "tags" : [
        "Tech 1",
        "Tech 2"
    ],
    "recherche" : "dev"
},
"square8" : {
    "titre" : "A venir",
    "soustitre" : "Projet à venir",
    "description" : "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae animi eos atque blanditiis expedita adipisci id, illo cupiditate tempore molestias quis harum perspiciatis fugit! Quod maxime maiores facere libero sed",
    "lien" : "#",
    "tags" : [
        "Tech 1",
        "Tech 2"
    ],
    "recherche" : "dev"
},
"square9" : {
    "titre" : "A venir",
    "soustitre" : "Projet à venir",
    "description" : "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Recusandae animi eos atque blanditiis expedita adipisci id, illo cupiditate tempore molestias quis harum perspiciatis fugit! Quod maxime maiores facere libero sed",
    "lien" : "#",
    "tags" : [
        "Tech 1",
        "Tech 2"
    ],
    "recherche" : "graph"
},
};

Object.entries(modalArray).forEach(function(element, index){
document.querySelector('.gallery-container').innerHTML += ` <div class="card `+element[1]['recherche']+`"style="background-image: url('img/`+element[0]+`.webp')">
            <div class="card-text">
                <p>`+element[1]['titre']+`</p>
                <p class="sub-text">`+element[1]['soustitre']+`</p>
            </div>
            <div class="card-button">
                <a class="card-button-content" id="`+ element[0] + `">
                    EN VOIR +
                </a>
            </div>
        </div>`;
})

/*MAKE MODAL APPEAR*/
function display(){
    let modalID = this.id;
    let tags = modalArray[modalID]['tags'];

    gsap.to(modal,{
        opacity:1,
        display:"flex",
        duration:0.2
    })
    gsap.to(modalContent,{
        scale:1
    })
    modalBG.style.background = "url('slides/" + modalID + ".jpg')"
    modalBG.style.backgroundSize = 'cover'
    modalH1.innerHTML = modalArray[modalID]['titre'];
    modalH4.innerHTML = modalArray[modalID]['soustitre'];
    modalText.innerHTML = modalArray[modalID]['description'];
    modalLink.href = modalArray[modalID]['lien'];
    tags.forEach(function(tag) {
        document.querySelector('.modal-tags').innerHTML += '<p>' + tag + '</p>'
    });

}
const buttons = document.querySelectorAll('.card-button-content');
buttons.forEach(button => button.addEventListener('click', display));


/*MAKE MODAL DISAPPEAR*/
function hide(e){

        if (!modalContent.contains(e.target)|| e.target == modalClose){
            gsap.to(modal,{
                opacity:0,
                display:"none",
                duration:0.2
                })
            gsap.to(modalContent,{
                scale:0,
                
            })
            document.querySelector('.modal-tags').innerHTML = '';
            }
        }
      

modal.addEventListener('click', hide);
modalClose.addEventListener('click', hide);

/*boutons categories*/
/*all*/
const galleryContainer = document.querySelector('.gallery-container')
const galleryContainerSize = galleryContainer.offsetHeight
const z2Size = document.getElementById('z2').offsetHeight
const boutonsGallery = document.querySelectorAll('.gallery-bouton')

function resizeGallery(e){
if(e == 'default'){
    gsap.to('#z2',{
            height: z2Size,
            duration:0.5
        })
}else{
    gsap.to('#z2',{
            height: galleryContainer.offsetHeight,
            duration:0.5
        })
}
}
const boutonAll = document.querySelector('.all')
const cards = document.querySelectorAll('.card')
function boutonAllDisplay(){
cards.forEach(function(card){
    gsap.to(card,{
        display:'block',
        scale:1
    })
    
})
}
boutonAll.addEventListener('click', boutonAllDisplay)
boutonAll.addEventListener('click', function(){

    boutonsGallery.forEach(function(bouton){
        gsap.to(bouton, {
            backgroundColor:'transparent',
            duration:0.1,
            color:'black'
        })
    })

    gsap.to(this, {
        backgroundColor:'#e64f4c',
        color:'white',
        duration:0.1
    })
    
})

/*boutondev*/
const boutonDev = document.querySelector('.dev')
function boutonDevDisplay(){
cards.forEach(function(card){
    if(card.classList.contains('dev')){
        gsap.to(card,{
            display:'block',
            scale:1,
            yoyo:true
        })
    }else{
        gsap.to(card,{
            scale:0,
            display:'none'
        })
    }
})
gsap.to('.gallery-container',{
    display:'flex',
    absolute:true
})

}

boutonDev.addEventListener("click", boutonDevDisplay)
boutonDev.addEventListener('click', function(){
    boutonsGallery.forEach(function(bouton){
        gsap.to(bouton, {
            backgroundColor:'transparent',
            duration:0.1,
            color:'black'
        })
    })

    gsap.to(this, {
        backgroundColor:'#e64f4c',
        color:'white',
        duration:0.1
    })
})

/*boutongraph*/
const boutonGraph = document.querySelector('.graph')

function boutonGraphDisplay(){
cards.forEach(function(card){
    if(card.classList.contains('graph')){
        gsap.to(card,{
            display:'block',
            scale:1,
            yoyo:true
        })
    }else{
        gsap.to(card,{
            scale:0,
            display:'none',
            duration:0.5
        })
    }
})


}

boutonGraph.addEventListener("click", boutonGraphDisplay)
boutonGraph.addEventListener('click', function(){
    boutonsGallery.forEach(function(bouton){
        gsap.to(bouton, {
            backgroundColor:'transparent',
            duration:0.1,
            color:'black'
        })
    })

    gsap.to(this, {
        backgroundColor:'#e64f4c',
        color:'white',
        duration:0.1
    })
})

 /* flip skills */

 gsap.set(".profile-skills-container", {
    transformStyle: "preserve-3d",
    transformPerspective: 1000
  });

  const skills = document.querySelectorAll('.skills-icon')
let iSkill = 0
skills.forEach(function(skill){

gsap.from(skill,{
delay : iSkill,
scrollTrigger:'.profile-skills-container',
rotationY:360,  
opacity:0
})
iSkill += 0.3  
})

const myname = document.getElementById('myname')
const mynamePrenom = document.querySelector('.prenom')
const mynameNom = document.querySelector('.nom')
const boutonHome = document.querySelector('.button-home')

gsap.from(mynamePrenom, {
   opacity:0,
   duration:0.1,
   delay:0.5
})
gsap.from(mynameNom, {
   opacity:0,
   duration:0.1,
   delay:1.5
})

gsap.to(boutonHome,{
   opacity:1,
   duration:0.01,
   delay:2.5
})

if (window.matchMedia("(min-width: 480px)").matches){
/*slide In anim*/

const cards = document.querySelectorAll('.card')
let i = 0
cards.forEach(function(card){

gsap.from(card,{
delay : i,
scrollTrigger:'.gallery-container',
x:200,
opacity:0
})
i += 0.3  
})

const titles = document.querySelectorAll('.title')
titles.forEach(function(title){
gsap.from(title,{
    delay : 0.2,
    scrollTrigger : title,
    x:200,
    opacity:0
})
})

const underlines = document.querySelectorAll('.underline')
underlines.forEach(function(underline){
gsap.from(underline,{
    duration : 0.4,
    delay : 0.4,
    scrollTrigger : underline,
    x:200,
    opacity:0,
    backgroundColor : 'green'
})
})

const profileText = document.querySelectorAll('.profile-info')
let iText = 0
profileText.forEach(function(text){
    gsap.from(text,{
    duration : 0.4,
    delay : iText,
    scrollTrigger : text,
    x:200,
    opacity:0
    })
    iText += 0.4
})

const maphoto = document.getElementById('talkbubble')
gsap.from(maphoto,{
    duration : 0.4,
    delay : 0.4,
    scrollTrigger : maphoto,
    x:-200,
    opacity:0,
})


/*navbar-----------*/
/*fixed-on-top*/
const navbar = document.querySelector('.navbar')
const positioned = 'sticky'
    window.addEventListener('scroll', function(ev) {

    let distancez2 = document.getElementById('z2').getBoundingClientRect().top
     if(distancez2 < 0 && navbar.style.position != positioned){
        gsap.fromTo(navbar, {
            y:-50
        
        },{
            y:0,
            position:positioned,
            duration:0.1
        })
    }
        
    else if(distancez2 > 50 && navbar.style.position == positioned){
        gsap.to(navbar,{
            position : 'static'
        })
    }
       
     });


 /* animation du nom sur la page d'accueil */




/* footer */
const socials = document.querySelectorAll('.social')



}




