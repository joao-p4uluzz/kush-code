/*
        funcão ciada para exibir o texto automático
*/
function typeWriter(elemento){
    const textoArray = elemento.innerHTML.split('')
    elemento.innerHTML = ''
    textoArray.forEach((letra, i) => {
        setTimeout(() => elemento.innerHTML += letra, 79 * i)
    })  
}

const titulo = document.querySelector('div#twriter')
typeWriter(titulo)


// final da função de exibição texto automático

