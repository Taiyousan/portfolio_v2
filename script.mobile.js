if (window.matchMedia("(max-width: 480px)").matches) {
    console.log('Version mobile')

    const hamburgers = document.querySelector('.hamburger-container')
    const hamburger1 = document.getElementById('hamburger1')
    const hamburger2 = document.getElementById('hamburger2')
    const hamburger3 = document.getElementById('hamburger3')
    const menu = document.querySelector('.hamburger-menu')
    const menuItem = document.querySelectorAll('.hamburger-item')
    let closeFlag = false

    console.log(menuItem)
menuItem.forEach(function(item){
    console.log(item)
    item.addEventListener('click', function(){
        console.log('true')
            
            gsap.to(hamburger1, {
                rotateZ:0,
                y:0
            })
            gsap.to(hamburger2,{
                opacity:1,
                x:0
            })
            gsap.to(hamburger3,{
                rotateZ:0,
                y:0
            })
            gsap.to(menu, {
                opacity:0,
                height:0,
                paddingTop:0,
                paddingBottom:0
            })
            gsap.to(menuItem,{
                opacity:0,
            })
            closeFlag = false
      })
})
    hamburgers.addEventListener('click', function(){

        console.log('click')
        if (!closeFlag){ 
            console.log('flagfalse')
        gsap.to(hamburger1, {
            rotateZ:45,
            y:8
        })
        gsap.to(hamburger2,{
            opacity:0,
            x:-50
        })
        gsap.to(hamburger3,{
            rotateZ:-45,
            y:-8
        })
        gsap.to(menu, {
            display:'flex',
            opacity:1,
            height:150,
            paddingTop:30,
            paddingBottom:30,
        })
        gsap.to(menuItem,{
            opacity:1,
            delay:0.2
        })
        
        closeFlag = true
    }
    else if(closeFlag){
        console.log('true')
        
        gsap.to(hamburger1, {
            rotateZ:0,
            y:0
        })
        gsap.to(hamburger2,{
            opacity:1,
            x:0
        })
        gsap.to(hamburger3,{
            rotateZ:0,
            y:0
        })
        gsap.to(menu, {
            opacity:0,
            height:0,
            paddingTop:0,
            paddingBottom:0
        })
        gsap.to(menuItem,{
            opacity:0,
        })
        closeFlag = false
    }
    })
  } 
