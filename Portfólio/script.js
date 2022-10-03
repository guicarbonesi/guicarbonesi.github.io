const listProj = [
    {nome: "Mentalista", img: "", link:"https://codepen.io/guilherme-silva-carbonesi/pen/zYjBrYa"},
    {nome: "Calculadora", img: "", link:"https://codepen.io/guilherme-silva-carbonesi/pen/xxjZbJV"},
    {nome: "Placar", img: "", link:"https://codepen.io/guilherme-silva-carbonesi/pen/xxjqpOg"},
    {nome: "Conversor", img: "", link:"https://codepen.io/guilherme-silva-carbonesi/pen/RwyadRq"},
    {nome: "TorrentFlix", img: "", link:"https://codepen.io/guilherme-silva-carbonesi/pen/xxjgwLO"},
    {nome: "SuperTrunfo", img: "", link:"https://codepen.io/guilherme-silva-carbonesi/pen/mdLwbRv"}
]

const projetos = document.getElementById("projetos")

for(var i = 0; i<listProj.length; i++){
    projetos.insertAdjacentHTML("afterbegin", `
        <a href="${listProj[i].link}" target="_blank" class="container-proj" id="proj1" style="background-image: url(${listProj[i].img})">
            <div class="background">
                <p>${listProj[i].nome}</p>
            </div>
        </a>
    `)
}

function mudarTema() {
    document.body.classList.toggle("dark");
}
