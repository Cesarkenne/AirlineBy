const btnC = document.querySelectorAll('.btnC')
const ratio =.1
const option={
    root: null,
    rootMargin: '0px',
    threshold: ratio
}
const intersec= function(  entries,observer ){
    entries.forEach((entry)=>{
        if(entry.intersectionRatio > ratio){
            entry.target.classList.remove('btnC')
            entry.target.classList.add('visible')
            observer.unobserve(entry.target)
        }
    })
}
const obser = new IntersectionObserver(intersec,option)
btnC.forEach((curent)=>{
    obser.observe(curent)
})
function redimention(){
    const mediaQuery = window.matchMedia("(max-width: 1050px)");
    function windresize(){
        if(mediaQuery.matches){
            const liELement= document.querySelector('#menu-nav')
            if(liELement){
                liELement.remove();
            }
    }}
    windresize()
}