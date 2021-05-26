function alertar() {
    const form = document.querySelector('.form')
    form.onsubmit = function (evento) {
        alert(1)
        console.log("enviado")
    }
    
}

alertar() 