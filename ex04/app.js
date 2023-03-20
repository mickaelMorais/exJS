const btn = document.querySelector('.btn')
btn.addEventListener('click', () => {
    const resultado = document.querySelector('.resposta')
    const medicamento = document.querySelector('#medicamento').value
    let preco = document.querySelector('#preco').value
    preco = parseInt(preco * 2)

    resultado.innerHTML = `
        <p>Promoção de ${medicamento}</p>
        <p>Leve 2 por apenas R$${preco.toFixed(2)}</p>
    `
})