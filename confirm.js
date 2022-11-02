const box = document.querySelector('.confirm-container')


gsap.from(box,{
    x:500,
    ease: "elastic.out(1, 0.3)",
    duration:1
})