let slideIndex = 1;
let reminingTime = 70000 ;

function setTime (){
    if (reminingTime == 0) return ;
    let h = Math.floor(reminingTime/3600);
    let m = Math.floor((reminingTime%3600)/60);
    let s = (reminingTime%3600)%60;

    document.querySelector('#hours').innerHTML = h
    document.querySelector('#minutes').innerHTML = m
    document.querySelector('#secondes').innerHTML = s

}

setInterval(()=> {
reminingTime -= 1;
setTime()
}, 1000)

function setSlide (input,index) {
    slideIndex = index;
    let item = document.querySelector(`#${input}`)
    let slides = [...document.querySelector('.slides').children];
    slides.forEach((element)=>{
       element.classList.remove('active');
    })
    item.classList.add('active');
}

setInterval(()=>{
slideIndex +=1;
    if(slideIndex==4) {
        slideIndex=1;
    }
setSlide(`slide${slideIndex}`, slideIndex)
}, 4000)


