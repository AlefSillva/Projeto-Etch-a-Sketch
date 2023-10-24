const container = document.getElementById('container');
const tamanhoPadrao = 400; // Largura e altura fixas do container
let lados = 16; // Lados padrão da grade

function criarGrade(lados) {
    container.innerHTML = ''; // Limpar o container antes de criar a nova grade

    const tamanhoDaCelula = tamanhoPadrao / lados;

    for (let i = 0; i < lados; i++) {
        const linha = document.createElement('div');
        linha.classList.add('linha');
        container.appendChild(linha);

        for (let j = 0; j < lados; j++) {
            const celula = document.createElement('div');
            celula.classList.add('celula');
            celula.style.width = `${tamanhoDaCelula}px`;
            celula.style.height = `${tamanhoDaCelula}px`;
            linha.appendChild(celula);
        }
    }

    const novasCelulas = document.querySelectorAll('.celula');
    novasCelulas.forEach(celula => {
        celula.addEventListener('mouseenter', toggleColor);
    });
}

function atualizarValor(valor) {
    const sliderValue = document.getElementById('sliderValue');
    sliderValue.textContent = valor;
}

function atualizarGrade(valor) {
    atualizarValor(valor);
    lados = valor;
    criarGrade(lados);
}

window.onload = function () {
    criarGrade(lados);
    atualizarValor(lados);
};

function toggleColor(event) {
    const celula = event.target;
    const randomCol = randomColor();
    celula.style.backgroundColor = `#${randomCol}`;
}

// Evento input para o controle deslizante
const slider = document.querySelector(".slider");
slider.addEventListener("input", function () {
    const valor = parseInt(slider.value);
    atualizarGrade(valor);
});

function randomColor() {
    const letters = "0123456789ABCDEF";
    let color = "";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }