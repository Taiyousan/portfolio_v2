const box = document.querySelector('.confirm-container')
console.log(box)

gsap.from(box,{
    x:500,
    ease: "elastic.out(1, 0.3)",
    duration:1
})