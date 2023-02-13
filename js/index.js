const tocaSom = (idElementoSom) => { document.querySelector(idElementoSom).play() }

const listaTeclas = document.querySelectorAll('.tecla');

for (let i = 0; i <= listaTeclas.length; i++) {

    const tecla = listaTeclas[i];
    const instrumento = tecla.classList[1];
    const idSom = `#som_${instrumento}`;

    tecla.onclick = () => {tocaSom(idSom) }
}
