const btn = document.querySelector('.btn')
btn.addEventListener('click', () => {
    const veiculo = document.querySelector('#veiculo').value
    const resultado = document.querySelector('.resposta')
    let preco = document.querySelector('#preco').value
    let entrada = preco / 2
    let parcela = entrada / 12

    resultado.innerHTML = `
        <p>${veiculo}</p>
        <p>entrada de R$${entrada.toFixed(2)}</p>
        <p>12 x R$${parcela.toFixed(2)}</p>
    `
})