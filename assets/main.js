const btstooglenav = document.querySelectorAll ('button.tooglenav')

const nv= document.querySelector ('nav')

btstooglenav.forEach (functon(bt){
    bt.addEventListener('click',function(){
        nv.classList.toogle('open')
    })
})