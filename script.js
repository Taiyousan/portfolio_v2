

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
"square" : {
    "titre" : "Portfolio Universitaire",
    "soustitre" : "Travaux et compétences universitaires",
    "description" : "Un site réalisé dans le cadre de ma formation en MMI à l'IUT de Troyes, sur lequel sont répertoriés tous mes travaux, en liens avec les enseignements du référentiel MMI.",
    "lien" : "https://mmi21g01.mmi-troyes.fr/portfolio_universitaire",
    "tags" : [
        "Bootstrap 5"
    ],
    "recherche" : "graph"
},
"square2" : {
    "titre" : "Portfolio Universitaire",
    "soustitre" : "Travaux et compétences universitaires",
    "description" : "Un site réalisé dans le cadre de ma formation en MMI à l'IUT de Troyes, sur lequel sont répertoriés tous mes travaux, en liens avec les enseignements du référentiel MMI.",
    "lien" : "https://mmi21g01.mmi-troyes.fr/portfolio_universitaire",
    "tags" : [
        "Bootstrap 5"
    ]
},
"square3" : {
    "titre" : "Portfolio Universitaire",
    "soustitre" : "Travaux et compétences universitaires",
    "description" : "Un site réalisé dans le cadre de ma formation en MMI à l'IUT de Troyes, sur lequel sont répertoriés tous mes travaux, en liens avec les enseignements du référentiel MMI.",
    "lien" : "https://mmi21g01.mmi-troyes.fr/portfolio_universitaire",
    "tags" : [
        "Bootstrap 5"
    ]
},
"square4" : {
    "titre" : "Portfolio Universitaire",
    "soustitre" : "Travaux et compétences universitaires",
    "description" : "Un site réalisé dans le cadre de ma formation en MMI à l'IUT de Troyes, sur lequel sont répertoriés tous mes travaux, en liens avec les enseignements du référentiel MMI.",
    "lien" : "https://mmi21g01.mmi-troyes.fr/portfolio_universitaire",
    "tags" : [
        "Bootstrap 5"
    ]
},
"square5" : {
    "titre" : "Portfolio Universitaire",
    "soustitre" : "Travaux et compétences universitaires",
    "description" : "Un site réalisé dans le cadre de ma formation en MMI à l'IUT de Troyes, sur lequel sont répertoriés tous mes travaux, en liens avec les enseignements du référentiel MMI.",
    "lien" : "https://mmi21g01.mmi-troyes.fr/portfolio_universitaire",
    "tags" : [
        "Bootstrap 5"
    ],
    "recherche" : "graph"
},
"square6" : {
    "titre" : "Portfolio Universitaire",
    "soustitre" : "Travaux et compétences universitaires",
    "description" : "Un site réalisé dans le cadre de ma formation en MMI à l'IUT de Troyes, sur lequel sont répertoriés tous mes travaux, en liens avec les enseignements du référentiel MMI.",
    "lien" : "https://mmi21g01.mmi-troyes.fr/portfolio_universitaire",
    "tags" : [
        "Bootstrap 5"
    ],
    "recherche" : "graph"
},
"square7" : {
    "titre" : "Portfolio Universitaire",
    "soustitre" : "Travaux et compétences universitaires",
    "description" : "Un site réalisé dans le cadre de ma formation en MMI à l'IUT de Troyes, sur lequel sont répertoriés tous mes travaux, en liens avec les enseignements du référentiel MMI.",
    "lien" : "https://mmi21g01.mmi-troyes.fr/portfolio_universitaire",
    "tags" : [
        "Bootstrap 5"
    ],
    "recherche" : "dev"
},
"square8" : {
    "titre" : "Portfolio Universitaire",
    "soustitre" : "Travaux et compétences universitaires",
    "description" : "Un site réalisé dans le cadre de ma formation en MMI à l'IUT de Troyes, sur lequel sont répertoriés tous mes travaux, en liens avec les enseignements du référentiel MMI.",
    "lien" : "https://mmi21g01.mmi-troyes.fr/portfolio_universitaire",
    "tags" : [
        "Bootstrap 5"
    ],
    "recherche" : "dev"
},
"square9" : {
    "titre" : "Portfolio Universitaire",
    "soustitre" : "Travaux et compétences universitaires",
    "description" : "Un site réalisé dans le cadre de ma formation en MMI à l'IUT de Troyes, sur lequel sont répertoriés tous mes travaux, en liens avec les enseignements du référentiel MMI.",
    "lien" : "https://mmi21g01.mmi-troyes.fr/portfolio_universitaire",
    "tags" : [
        "Bootstrap 5"
    ],
    "recherche" : "graph"
},
};

console.log(modalArray)
Object.entries(modalArray).forEach(function(element, index){
document.querySelector('.gallery-container').innerHTML += ` <div class="card `+element[1]['recherche']+`"style="background-image: url('img/`+element[0]+`.jpg')">
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
        console.log(element[1]['titre'])
})

/*MAKE MODAL APPEAR*/
function display(){
    let modalID = this.id;
    let tags = modalArray[modalID]['tags'];
    console.log(tags)

    gsap.to(modal,{
        opacity:1,
        display:"flex",
        duration:0.2
    })
    gsap.to(modalContent,{
        scale:1
    })
    console.log(modalH1)
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

/*slide In anim*/

const cards = document.querySelectorAll('.card')
let i = 0
console.log(cards)
cards.forEach(function(card){

console.log(i)
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
console.log('ok')
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
console.log(this)
cards.forEach(function(card){
    if(card.classList.contains('dev')){
        console.log(this)
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
    display:'flex'
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
console.log(this)
cards.forEach(function(card){
    if(card.classList.contains('graph')){
        console.log(this)
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

/*changement de couleur des boutons de la galerie*/

