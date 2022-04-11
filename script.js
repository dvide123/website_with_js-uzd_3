const text = document.querySelector('.banner')
const hide = document.querySelector('.hide')

hide.addEventListener('click', () => {
    text.classList.add('hidden')
})




const images = document.querySelectorAll('.js_image')
const next =document.querySelector('.js_next')
const prev =document.querySelector('.js_prev')
const dots =document.querySelectorAll('.js_dot')

let activeIndex = 0

next.addEventListener('click', ()=> {
    images.forEach((image) =>{
        image.classList.remove('active')
    })

    dots.forEach((dot) =>{
        dot.remove('active')
    })

    if(activeIndex === images.length-1){
        activeIndex = 0
    }else{
        activeIndex = activeIndex + 1
    }

    


    dots[activeIndex].classList.add('active')
    images[activeIndex].classList.add('active')
    
    

})

prev.addEventListener('click', ()=> {
    images.forEach((image) =>{
        image.classList.remove('active')
    })
    dots.forEach((dot) =>{
        dot.remove('active')
    })
    if(activeIndex === 0){
        activeIndex = images.length-1
    }else{
        activeIndex = activeIndex - 1
    }

    dots[activeIndex].classList.add('active')
    images[activeIndex].classList.add('active')
})




