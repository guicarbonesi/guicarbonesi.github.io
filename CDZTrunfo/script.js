var carta1 = {
  nome: "Mu de Áries",
  atributos: {
    Strength: 80,
    Agility: 75,
    RangedAttack: 85,
    Stamina: 70,
    Wisdom: 95,
    Fatalitty: 80,
    Cosmo: 85
  },
  img:
    "https://phoneky.co.uk/thumbs/screensavers/down/cartoon-anime/mudearies_vl7c9pht.gif"
};

var carta2 = {
  nome: "Alderbaran de Touro",
  atributos: {
    Strength: 95,
    Agility: 80,
    RangedAttack: 75,
    Stamina: 80,
    Wisdom: 75,
    Fatalitty: 70,
    Cosmo: 80
  },
  img:
    "https://pa1.narvii.com/6788/702540056965e0af8c2990efd5349e589b835fe1_hq.gif"
};

var carta3 = {
  nome: "Saga de Gêmeos",
  atributos: {
    Strength: 90,
    Agility: 75,
    RangedAttack: 95,
    Stamina: 100,
    Wisdom: 85,
    Fatalitty: 80,
    Cosmo: 95
  },
  img:
    "https://i.pinimg.com/originals/d1/2b/88/d12b88624c8e666ecbf797d483665654.gif"
};

var carta4 = {
  nome: "MDM de Câncer",
  atributos: {
    Strength: 75,
    Agility: 75,
    RangedAttack: 80,
    Stamina: 70,
    Wisdom: 80,
    Fatalitty: 90,
    Cosmo: 75
  },
  img: "https://c.tenor.com/C3NLy-qOS_0AAAAM/cancer-deathmask-saint-seiya.gif"
};

var carta5 = {
  nome: "Aiolia de Leão",
  atributos: {
    Strength: 90,
    Agility: 90,
    RangedAttack: 85,
    Stamina: 90,
    Wisdom: 75,
    Fatalitty: 75,
    Cosmo: 80
  },
  img:
    "https://pa1.narvii.com/6805/9917c5229cb1d2dc017b082883fd238ad7625a0e_hq.gif"
};

var carta6 = {
  nome: "Shaka de Virgem",
  atributos: {
    Strength: 75,
    Agility: 75,
    RangedAttack: 90,
    Stamina: 80,
    Wisdom: 95,
    Fatalitty: 80,
    Cosmo: 95
  },
  img:
    "http://pa1.narvii.com/6599/333bc241517f0be2547e959b76491fcc7b2a39fb_00.gif"
};

var carta7 = {
  nome: "Dohko de Libra",
  atributos: {
    Strength: 85,
    Agility: 85,
    RangedAttack: 90,
    Stamina: 100,
    Wisdom: 100,
    Fatalitty: 75,
    Cosmo: 90
  },
  img:
    "http://pa1.narvii.com/6464/81e4d824c9ef17ed491d70c9a1b4a2cafb5be7ef_00.gif"
};

var carta8 = {
  nome: "Milo de Escorpião",
  atributos: {
    Strength: 85,
    Agility: 100,
    RangedAttack: 85,
    Stamina: 85,
    Wisdom: 80,
    Fatalitty: 90,
    Cosmo: 80
  },
  img:
    "https://phoneky.co.uk/thumbs/screensavers/down/cartoon-anime/milodeesco_25bxosa3.gif"
};

var carta9 = {
  nome: "Aiolos de Sagitário",
  atributos: {
    Strength: 90,
    Agility: 90,
    RangedAttack: 85,
    Stamina: 90,
    Wisdom: 80,
    Fatalitty: 75,
    Cosmo: 85
  },
  img:
    "https://pa1.narvii.com/6681/fcca34bc9b20af6a69fadbe81be22b52638ba229_hq.gif"
};

var carta10 = {
  nome: "Shura de Capricórnio",
  atributos: {
    Strength: 80,
    Agility: 90,
    RangedAttack: 85,
    Stamina: 90,
    Wisdom: 75,
    Fatalitty: 90,
    Cosmo: 85
  },
  img:
    "https://pa1.narvii.com/6837/39788c155e83d4488f5f01fd637683a6aa9d8b60_hq.gif"
};

var carta11 = {
  nome: "Camus de Aquário",
  atributos: {
    Strength: 80,
    Agility: 80,
    RangedAttack: 85,
    Stamina: 95,
    Wisdom: 90,
    Fatalitty: 80,
    Cosmo: 85
  },
  img:
    "https://thumbs.gfycat.com/InexperiencedCompetentBantamrooster-size_restricted.gif"
};

var carta12 = {
  nome: "Afrodite de Peixes",
  atributos: {
    Strength: 75,
    Agility: 80,
    RangedAttack: 85,
    Stamina: 70,
    Wisdom: 90,
    Fatalitty: 95,
    Cosmo: 75
  },
  img:
    "https://i.pinimg.com/originals/0b/7d/eb/0b7deb257deb2fdd3c72efcfe9ca6443.gif"
};

var cartas = [
  carta1,
  carta2,
  carta3,
  carta4,
  carta5,
  carta6,
  carta7,
  carta8,
  carta9,
  carta10,
  carta11,
  carta12
];
var cartaMaquina;
var cartaJogador;

var cartasDoJogador = [];
var cartasDaMaquina = [];
var placarJogador = 0;
var placarMaquina = 0;

var rareCandy = {
  img:
    "https://64.media.tumblr.com/3add00ee677172905dba691a78f1085c/91e0e75f8166bd68-55/s540x810/cd48c23c1f10a6b75af0f1fc9c7f430aab40e9a3.gif"
};
var pokeCenter = {
  img: "https://giffiles.alphacoders.com/186/186315.gif"
};
var pokeball = {
  img:
    "https://pa1.narvii.com/6309/b7c863e08deb49c76c4c303ee44c0b269703283d_hq.gif"
};

var whos = {
  img:
    "https://diegomaryo.cdz.com.br/wp-content/uploads/2017/09/odisseu-cm-ex-diego-maryo.png"
};

var insignia1 = {
  img:
    "http://pa1.narvii.com/6354/67a50cd1f1efe444aba07584a3f07042a4ddba9b_00.gif"
};

var insignia2 = {
  img:
    "https://pa1.narvii.com/7801/3d5108280720ab253b7d75e82071a283c82f0700r1-540-297_hq.gif"
};

var insignia3 = {
  img:
    "https://pa1.narvii.com/7394/3774ddcda4fc277d5023a1c4406319d537cd6f3er1-320-180_hq.gif"
};

var insignias = [insignia1, insignia2, insignia3];
var imagens = [rareCandy, pokeball, pokeCenter, whos];

function sortearCarta() {
  var numeroCartaMaquina = parseInt(Math.random() * cartas.length);
  cartaMaquina = cartas[numeroCartaMaquina];

  while (cartasDoJogador.includes(cartaMaquina)) {
    numeroCartaMaquina = parseInt(Math.random() * cartas.length);
    cartaMaquina = cartas[numeroCartaMaquina];
  }
  cartasDaMaquina.push(cartaMaquina);

  var numeroCartaJogador = parseInt(Math.random() * cartas.length);
  while (numeroCartaMaquina == numeroCartaJogador) {
    numeroCartaJogador = parseInt(Math.random() * cartas.length);
  }
  cartaJogador = cartas[numeroCartaJogador];

  while (cartasDaMaquina.includes(cartaJogador)) {
    numeroCartaJogador = parseInt(Math.random() * cartas.length);
    cartaJogador = cartas[numeroCartaJogador];
  }
  cartasDoJogador.push(cartaJogador);

  document.getElementById("btnSortear").disabled = true;
  document.getElementById("btnJogar").disabled = false;
  document.getElementById("btnReiniciar").disabled = true;
  document.getElementById("naoEscolheu").innerHTML = "";

  exibirCartaJogador();
}

function obtemAtributoSelecionado() {
  var radioAtributos = document.getElementsByName("atributo");
  var escolhaRadio = 0;

  for (var i = 0; i < radioAtributos.length; i++) {
    if (radioAtributos[i].checked == true) {
      return radioAtributos[i].value;
    } else {
      escolhaRadio++;
      if (escolhaRadio == radioAtributos.length) {
        var elementoEscolha = document.getElementById("naoEscolheu");
        elementoEscolha.innerHTML =
          "Você não escolheu nenhuma opção, então iremos comparar Strength";
        return radioAtributos[0].value;
      }
    }
  }
}

function jogar() {
  var atributoSelecionado = obtemAtributoSelecionado();
  var divResultado = document.getElementById("resultado");

  if (
    cartaJogador.atributos[atributoSelecionado] >
    cartaMaquina.atributos[atributoSelecionado]
  ) {
    htmlResultado =
      `<br>O atributo comparado foi ${atributoSelecionado}.<br>Você venceu essa batalha e será recompensado com a benção da Deusa Athena! <img src=` +
      rareCandy["img"] +
      ` style="width: 80px; height: 80px;">`;
    cartasDoJogador.push(cartaMaquina);
    placarJogador++;
  } else if (
    cartaJogador.atributos[atributoSelecionado] <
    cartaMaquina.atributos[atributoSelecionado]
  ) {
    htmlResultado =
      `<br>O atributo comparado foi ${atributoSelecionado}.<br>Você perdeu essa batalha, seu Cavaleiro precisará se recuperar! <img src=` +
      pokeCenter["img"] +
      ` style="width: 80px; height: 80px;">`;
    cartasDaMaquina.push(cartaJogador);
    placarMaquina++;
  } else {
    htmlResultado =
      `<br>O atributo comparado foi ${atributoSelecionado}.<br>Houve um empate, voltem para suas casas do Zodíaco! <img src=` +
      pokeball["img"] +
      ` style="width: 80px; height: 80px;">`;
  }

  if (placarMaquina == 5 || placarJogador == 5) {
    document.getElementById("btnJogar").disabled = true;
    document.getElementById("btnRodada").disabled = true;
    document.getElementById("btnSortear").disabled = true;

    if (placarMaquina == 5) {
      htmlResultado =
        `<p class='acabou'> Fim de Jogo! O vencedor foi a máquina por ${placarMaquina} a ${placarJogador}.<br>Seus Cavaleiros estão gravemente feridos, leve-os o mais rápido para o templo de Athena! <img src=` +
        pokeCenter["img"] +
        ` style="width: 80px; height: 80px;"></p>`;
      document.getElementById("btnReiniciar").innerHTML =
        "<button type='button' onclick='reiniciar()'>Jogar Novamente</button>";
    } else if (placarJogador == 5) {
      htmlResultado =
        `<p class='acabou'>Fim de Jogo! O vencedor foi você por ${placarJogador} a ${placarMaquina}.<br>Por isso você será recompensado com um Artefato! <img src=` +
        insignias[parseInt(Math.random() * insignias.length)].img +
        ` style="width: 80px; height: 80px;"></p>`;
      document.getElementById("btnReiniciar").innerHTML =
        "<button type='button' onclick='reiniciar()'>Jogar Novamente</button>";
    }
  } else {
    document.getElementById("btnRodada").disabled = false;
  }

  divResultado.innerHTML = htmlResultado;

  document.getElementById("btnJogar").disabled = true;
  exibirCartaMaquina();
  exibirPlacar();
}

function exibirCartaJogador() {
  var divCartaMaquina = document.getElementById("carta-maquina");
  divCartaMaquina.style.backgroundImage = `url(${whos.img})`;

  var divCartaJogador = document.getElementById("carta-jogador");
  divCartaJogador.style.backgroundImage = `url(${cartaJogador.img})`;
  //divCartaJogador.style.backgroundImage = "url(" + cartaJogador.img + ")"
  //as duas linhas são a mesma coisa, mas escritas de formas diferentes
  var moldura =
    '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png" style=" width: inherit; height: inherit; position: absolute;">';
  var tagHTML = "<div id='opcoes' class='carta-status'>";

  var opcoesTexto = "";
  for (var atributo in cartaJogador.atributos) {
    opcoesTexto +=
      "<br/>" +
      "<input type='radio' name='atributo' value='" +
      atributo +
      "'style='margin: 0px;'>  " +
      atributo +
      " " +
      cartaJogador.atributos[atributo] +
      " <br>";
  }
  var nome = `<p class="carta-subtitle">${cartaJogador.nome ?? ""}</p>`;

  divCartaJogador.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>";
  divCartaMaquina.innerHTML = moldura + "</div>";
}

function exibirCartaMaquina() {
  var divCartaMaquina = document.getElementById("carta-maquina");
  divCartaMaquina.style.backgroundImage = `url(${cartaMaquina.img})`;
  //divCartaJogador.style.backgroundImage = "url(" + cartaJogador.img + ")"
  //as duas linhas são a mesma coisa, mas escritas de formas diferentes
  var moldura =
    '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png" style=" width: inherit; height: inherit; position: absolute;">';
  var tagHTML = "<div id='opcoes' class='carta-status'>";

  var opcoesTexto = "";
  for (var atributo in cartaMaquina.atributos) {
    opcoesTexto +=
      "<br/>" +
      "<p type='text' name='atributo' value='" +
      atributo +
      "'style='margin: 0px;'>" +
      atributo +
      " " +
      cartaMaquina.atributos[atributo] +
      "</p>";
  }
  var nome = `<p class="carta-subtitle">${cartaMaquina.nome ?? ""}</p>`;

  divCartaMaquina.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>";
}

function proxRodada() {
  document.getElementById("btnSortear").disabled = false;
  document.getElementById("btnRodada").disabled = true;
  document.getElementById("resultado").innerHTML = "";
  document.getElementById("carta-jogador").innerHTML = "";
  document.getElementById("carta-maquina").innerHTML = "";
  document.getElementById("carta-jogador").style.backgroundImage = "";
  document.getElementById("carta-maquina").style.backgroundImage = "";
  document.getElementById("naoEscolheu").innerHTML = "";

  sortearCarta();
}

function exibirPlacar() {
  var pontos = document.getElementById("placar");
  pontos.innerHTML =
    `<span>Você: ` +
    placarJogador +
    `</span> | <span>Máquina: ` +
    placarMaquina +
    `</span>`;
}

function reiniciar() {
  document.getElementById("btnSortear").disabled = false;
  document.getElementById("btnRodada").disabled = true;
  document.getElementById("resultado").innerHTML = "";
  document.getElementById("placar").innerHTML = "";
  document.getElementById("carta-jogador").innerHTML = "";
  document.getElementById("carta-maquina").innerHTML = "";
  document.getElementById("carta-jogador").style.backgroundImage = "";
  document.getElementById("carta-maquina").style.backgroundImage = "";
  document.getElementById("naoEscolheu").innerHTML = "";

  placarMaquina = 0;
  placarJogador = 0;

  cartasDaMaquina = [];
  cartasDoJogador = [];
}
