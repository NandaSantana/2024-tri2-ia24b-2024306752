
//Uma variavel que procura uma lista dentro do document de botoes com a classe tooglenav
const btstooglenav = document.querySelectorAll ('button.tooglenav')
const nv= document.querySelector ('nav')

btstooglenav.forEach (functon(bt){
    //adiciona uma ação para o evento, ou seja, quando clicar outra coisa vai acontecer. ele vai pegar a lista de class no nav, 
    //e se ele tiver a class open ele tira a class e se não tiver ele adiciona.    
    
    bt.addEventListener('click',function(){
        nv.classList.toogle('open')
    })
})
