function getElement(id) {
  return document.getElementById(id);
}

function mudaConv() {
  let e = getElement("slct_pagina").value;

  switch (e) {
    case "moeda":
      getElement("slct_moeda").hidden = false;
      getElement("slct_bitcoin").hidden = true;
      break;

    case "bitcoin":
      getElement("slct_moeda").hidden = true;
      getElement("slct_bitcoin").hidden = false;
      break;
  }
}

async function ConverterMoeda() {
  let c1 = getElement("select_currency1").value;
  let c2 = getElement("select_currency2").value;
  let valorC1 = getElement("valor").value;
  valorC1 = isNaN(valorC1) ? 0 : valorC1;

  // Usa uma API para pegar o peso das moedas com relação à primeira moeda colocada
  let result = await (
    await fetch(`https://api.exchangerate-api.com/v4/latest/${c1}`)
  ).json();

  let valorC2 = result.rates[c2] * valorC1;
  getElement("valorConvertido").innerHTML = `${c2} ` + valorC2.toFixed(2);
}
