var jotaro = {
  imagem:
    "https://i.pinimg.com/736x/65/09/a5/6509a5402e1851dc52544fb8d6c08cd2.jpg",
  nome: "Jotaro",
  Vitórias: 0,
  empates: 0,
  Derrotas: 0,
  pontos: 0
};
var kakyoin = {
  imagem:
    "https://i.pinimg.com/474x/1b/88/a5/1b88a512aeb207b499ac51fbd95e6b17.jpg",
  nome: "Kakyoin",
  Vitórias: 0,
  empates: 0,
  Derrotas: 0,
  pontos: 0
};
var dio = {
  imagem: "https://pbs.twimg.com/media/ECsCOweX4AEhp3K.jpg",
  nome: "Dio",
  Vitórias: 0,
  empates: 0,
  Derrotas: 0,
  pontos: 0
};
//Lista dos lutadores
var lutadores = [jotaro, kakyoin, dio];
//Para calcular nos personagens
jotaro.pontos = calculoPontos(jotaro);
kakyoin.pontos = calculoPontos(kakyoin);
dio.pontos = calculoPontos(dio);
//Função Calcular pontos
function calculoPontos(lutador) {
  var pontos = lutador.Vitórias * 3 + lutador.empates;
  // para retornar o valor
  return pontos;
}
//atribuindo o resultado da função
function exibirLutadores(lutadores) {
  var elemento = "";
  for (var i = 0; i < lutadores.length; i++) {
    elemento +=
      "<tr><td><img src='" +
      lutadores[i].imagem +
      "'class='personagens'/></td>";
    elemento += "<td>" + lutadores[i].nome + "</td>";
    elemento += "<td>" + lutadores[i].Vitórias + "</td>";
    elemento += "<td>" + lutadores[i].empates + "</td>";
    elemento += "<td>" + lutadores[i].Derrotas + "</td>";
    elemento += "<td>" + lutadores[i].pontos + "</td>";
    elemento +=
      "<td><button  class='Acoes' onClick='adicionarAbate(" +
      i +
      ")'>Vitória</button></td>";
    elemento +=
      "<td><button class='Acoes' onClick='adicionarEmpate(" +
      i +
      ")'>Empate</button></td>";
    elemento +=
      "<td><button class='Acoes' onClick='adicionarMorte(" +
      i +
      ")'>Derrota</button></td>";
    elemento +=
      "<td><button  class='Acoes' onClick='Apagar(" +
      i +
      ")'>Limpar</button></td>";
    elemento += "</tr>";
  }
  //Para poder exibir o elemento.
  var tabelaLutadores = document.getElementById("tabelaLutadores");
  tabelaLutadores.innerHTML = elemento;
}
//Para Exibir a função toda
exibirLutadores(lutadores);

function NewDesafiador() {
  var nome = document.getElementById("NovoDesafiante");
  var avatar = document.getElementById("PerfilDoDesafiante");
  var novoNome = nome.value;
  var novoAvatar = avatar.value;
  var novoDesafianteChegou = {
    imagem: novoAvatar,
    nome: novoNome,
    Viórias: 0,
    empates: 0,
    Derrotas: 0,
    pontos: 0
  };
  // validando se a imagem terminar com jpg ou png
  if (novoAvatar.endsWith(".jpg") || novoAvatar.endsWith(".png")) {
    lutadores.push(novoDesafianteChegou);
    exibirLutadores(lutadores);
    nome.value = "";
    avatar.value = "";
  } else {
    console.error("Só pode JPG ou PNG.");
    alert("Só pode JPG ou PNG.");
  }
}

//Para contar os Abates
function adicionarAbate(i) {
  var lutador = lutadores[i];
  lutador.Vitórias++;
  lutador.pontos = calculoPontos(lutador);
  exibirLutadores(lutadores);
}

//Para contar os Empates
function adicionarEmpate(i) {
  var lutador = lutadores[i];
  lutador.empates++;
  lutador.pontos = calculoPontos(lutador);
  exibirLutadores(lutadores);
}

//Para contar as Mortes
function adicionarMorte(i) {
  var lutador = lutadores[i];
  lutador.Derrotas++;
  exibirLutadores(lutadores);
}

//Para apagar tudo.
function Apagar(i) {
  lutadores[i].Vitórias = 0;
  lutadores[i].Derrotas = 0;
  lutadores[i].empates = 0;
  lutadores[i].pontos = 0;
  exibirLutadores(lutadores);
}
