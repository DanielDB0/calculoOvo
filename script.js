function calcular(){
   const dados = {
       valor_pacote: document.getElementById("valorPacote").value, // Obtém o valor do pacote
       peso_pacote: document.getElementById("pesoPacote").value, // Obtém o peso do pacote
       peso_ovo: document.getElementById("pesoOvo").value, // Obtém a quantidade de chocolate por ovo
       preco_emabalagem: Number(document.getElementById("valorEmbalagem").value), // Obtém o preço da embalagem
        };
    let realGrama= dados.valor_pacote/dados.peso_pacote;
    let quantidade=dados.peso_pacote/dados.peso_ovo;
    let precoCusto = dados.preco_emabalagem+(dados.peso_ovo*realGrama);
    let precoSugerido = precoCusto * 1.5;
    const saida = {
       valor_grama:realGrama,
       quantidade:quantidade,
       preco_custo:precoCusto,
       preco_sugerido:precoSugerido 
        };
        let Output = `Valor/grama: ${saida.valor_grama.toFixed(2)}
Quantidade: ${saida.quantidade.toFixed(2)}
Preço de Custo: ${saida.preco_custo.toFixed(2)}
Preço sugerido: ${saida.preco_sugerido.toFixed(2)}
`
        document.querySelector("#resposta").innerHTML= `<pre>${Output}</pre>`
   };

function clean(){
    document.querySelector("#resposta").innerHTML= ''
    document.getElementById("pesoPacote").value= ''
    document.getElementById("valorPacote").value = ''
    document.querySelector("#valorEmbalagem").value = ''
    document.getElementById("pesoOvo").value = 100
}