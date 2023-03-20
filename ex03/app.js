const btn = document.querySelector('.btn')
btn.addEventListener('click', () => {
    const resultado = document.querySelector('.resposta')
    const grama = document.querySelector('#grama').value
    let preco = document.querySelector('#preco').value
    preco = preco / 1000 * grama

    resultado.innerHTML = `
        <p>Valor a pagar R$${preco.toFixed(2)}</p>
    `
})