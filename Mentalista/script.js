let qtdChances = document.querySelector("#qtdChances");
let qtdChancesValor;
let botaoRegras = document.querySelector("#botaoRegras");
let numInicial = document.querySelector("#numInicial");
let numFinal = document.querySelector("#numFinal");
let numeroSorteado;
let erro = false;

botaoRegras.addEventListener("click", defineRegras);

function defineRegras(e){
   e.preventDefault();
   validaNumeros();
   if(erro === true){
      erro = false;
      return
   } else{
   let mensagemErro = document.querySelector("#mensagemErro");
   mensagemErro.classList.add("escondido");
   mensagemErro.innerHTML = "";
   sorteiaNumero();   
   desabilitaCampos();
   defineChances();
   mostraJogo()
   }
}

function validaNumeros(){
   let numInicialValor = numInicial.value;
   let numFinalValor = numFinal.value;
   let qtdChancesValor = qtdChances.value;
   let mensagemErro = document.querySelector("#mensagemErro");   
   if(numInicialValor == "" || numFinalValor == "" || qtdChancesValor == ""){
      mensagemErro.classList.remove("escondido");
      mensagemErro.innerHTML = "Preencha todos os campos";
      erro=true;
   } else if(Number.isInteger(parseFloat(numInicialValor)) == false || Number.isInteger(parseFloat(numFinalValor)) == false || Number.isInteger(parseFloat(qtdChancesValor)) == false){
      mensagemErro.classList.remove("escondido");
      mensagemErro.innerHTML = "Somente números inteiros";
      erro=true;
   } else if(parseInt(numFinalValor)<parseInt(numInicialValor)){
      mensagemErro.classList.remove("escondido");
      mensagemErro.innerHTML = "O número final deve ser maior que o número inicial";
      erro=true;
   }      
}

function sorteiaNumero(){   
   let numInicialInteiro = parseInt(numInicial.value);
   let numFinalInteiro = parseInt(numFinal.value);
   numeroSorteado = Math.floor((Math.random()*(numFinalInteiro+1-numInicialInteiro))+numInicialInteiro);   
   console.log("O número secreto é " + numeroSorteado);
}

function desabilitaCampos(){
   numInicial.disabled = true;
   numFinal.disabled = true;
   qtdChances.disabled = true;
   botaoRegras.disabled = true;
}

function defineChances(){
   qtdChancesValor = parseInt(qtdChances.value);
}

function mostraJogo(){
   let formularioJogo = document.querySelector(".formularioChute");
   formularioJogo.classList.remove("escondido");
}


//segunda parte
let botaoChute = document.querySelector("#botaoChute");
botaoChute.addEventListener("click", fazTentativa);
let botaoReiniciar = document.querySelector("#botaoReiniciar");
botaoReiniciar.addEventListener("click", reiniciar);
let chute = document.querySelector("#chute");


function fazTentativa(e){
   e.preventDefault();
   validaChute();
   if(erro === true){
      erro = false;
      return
   } else{
   let mensagemErroDois = document.querySelector("#mensagemErroDois"); 
   mensagemErroDois.classList.add("escondido");
   mensagemErroDois.innerHTML = ""
   comparaChute();
   }
}

//posso refazer essa função passando parametros para reduzir o codigo e juntar com a outra
function validaChute(){
   let chuteValor = chute.value;   
   let mensagemErroDois = document.querySelector("#mensagemErroDois");   
   if(chuteValor == "" ){
      mensagemErroDois.classList.remove("escondido");
      mensagemErroDois.innerHTML = "Coloque seu número primeiro";
      erro=true;
   } else if(Number.isInteger(parseFloat(chuteValor)) ==false){
      mensagemErroDois.classList.remove("escondido");
      mensagemErroDois.innerHTML = "Somente números inteiros";
      erro=true;
   } else if(parseInt(chuteValor)<parseInt(numInicial.value) || parseInt(chuteValor)>parseInt(numFinal.value)){
      mensagemErroDois.classList.remove("escondido");
      mensagemErroDois.innerHTML = "Esse não foi um chute muito bom. Chute dentro da escala =)";
      erro=true;
   }   
}

function comparaChute(){
   let chuteValor = parseInt(chute.value);
   let mensagemResultado = document.querySelector("#mensagemResultado");
   if(chuteValor === numeroSorteado){
      mensagemResultado.classList.remove("escondido");
      mensagemResultado.innerHTML = `Parabéns, você acertou! O número é ${numeroSorteado}! Clique no Reiniciar para jogar de novo!`;
      botaoChute.disabled=true;
      chute.disabled=true;

   } else{
      qtdChancesValor--;
      if(qtdChancesValor === 0){
         mensagemResultado.classList.remove("escondido");
         mensagemResultado.innerHTML = `Puxa, você esgotou suas tentativas. O número era ${numeroSorteado}. Clica aqui embaixo no Reiniciar para jogar de novo!`;
         botaoChute.disabled=true;
         chute.disabled=true;
      } else{
         let dica;
         chuteValor-numeroSorteado>5 || chuteValor-numeroSorteado<-5 ? dica="e tá frio." : dica="mas tá quente.";
         mensagemResultado.classList.remove("escondido");
         mensagemResultado.innerHTML = `Você errou, ${dica} O número ${chuteValor} não é o que você busca. Você tem mais ${qtdChancesValor} chances`;
      }      
   }
}

function reiniciar(e){
   e.preventDefault();
   numInicial.disabled = false;
   numFinal.disabled = false;
   qtdChances.disabled = false;
   botaoRegras.disabled = false;
   numInicial.value="";
   numFinal.value="";
   qtdChances.value="";   
   let formularioJogo = document.querySelector(".formularioChute");
   formularioJogo.classList.add("escondido");
   chute.disabled=false;
   botaoChute.disabled=false;
   let mensagemResultado = document.querySelector("#mensagemResultado");
   mensagemResultado.classList.add("escondido");
   mensagemResultado.innerHTML = "";
   chute.value =""
}
