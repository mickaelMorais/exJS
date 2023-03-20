const btn = document.querySelector('.btn')
btn.addEventListener('click', () => {
    const titulo = document.querySelector('#filme').value
    const resultado = document.querySelector('.resposta')
    let min = document.querySelector('#duracao').value
    let horas = 0
    
    while (true) {
        if (min >= 60) {
            horas += 1
            min -= 60
        } else {
            break
        }
    }
    resultado.innerHTML = `
        <p>${titulo}</p>
        <p>${horas} hora(s) e ${min} minuto(s)</p>
    `
})