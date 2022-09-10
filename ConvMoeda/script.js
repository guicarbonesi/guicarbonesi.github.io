// ========================================= MOEDA ===========================================//

function converterMoeda() {
    let moedaInicial = document.getElementById("valor1Moeda").value;
    let url = `https://v6.exchangerate-api.com/v6/e21611f760275389ee84d845/latest/${moedaInicial}`;
    let dados = Array();
    let resultadoMoeda = document.getElementById("resultadoMoeda")

    fetch(url).then((res) => {
      res.json().then((data) => {
        dados = data.conversion_rates;
  
        let valor = parseFloat(document.getElementById("valorMoeda").value);
        let moedaFinal = document.getElementById("valor2Moeda").value;
  
        valorConvertido = valor * dados[moedaFinal];
        valorFinal = parseFloat(valorConvertido).toFixed(2);

        resultadoMoeda.innerHTML = `A conversão de ${moedaInicial} para ${moedaFinal} é ${valorFinal}`;
      });
    });
  }

