const bola = window.document.querySelector(".bola");
const container = window.document.querySelector('.container')
const email = window.document.querySelector('.pemail')
const senha = window.document.querySelector('.psenha')
const butao = window.document.querySelector('.butao')
const body = window.document.querySelector('.body')

function darkMode(){
    if(bola.classList.contains('boladark')){/*Braanco*/
        bola.classList.remove('boladark')
        bola.classList.add('bolalight')
        body.classList.remove('bodydark')
        body.classList.add('bodylight')

        bola.style.backgroundColor = 'black'
        container.style.backgroundColor = 'rgba(255, 255, 255, 0.8)'
        senha.style.color = 'black'
        email.style.color = 'black'
        butao.style.backgroundColor = 'rgb(238, 176, 41)'
        butao.style.color = ' black'
        
    }else{
        bola.classList.add('boladark')/* PREEEEETO*/
        body.classList.remove('bodylight')
        body.classList.add('bodydark')

        bola.style.backgroundColor = 'white' 
        container.style.backgroundColor = 'rgba(0, 0, 0, 0.8)'
        senha.style.color = 'white'
        email.style.color = 'white'
        butao.style.backgroundColor = 'rgb(19, 28, 156)'
        butao.style.color = ' white'
    }
    
}