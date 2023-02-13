const tocaSom = (seletorSom) => {
    const elemento = document.querySelector(seletorSom);

    if (elemento && elemento.localName === 'audio') {
        elemento.play();
    } 
    else {
        console.log('elemento não encontrado ou seletor inválido.')
    }
 }

const listaTeclas = document.querySelectorAll('.tecla');

for (let i = 0; i <= listaTeclas.length; i++) {

    const tecla = listaTeclas[i];
    const instrumento = tecla.classList[1];
    const idSom = `#som_${instrumento}`;

    tecla.onclick = () => { tocaSom(idSom) }

    tecla.onkeydown = (e) => {
        console.log(e.code)
        if (e.code === 'Space' || e.code === 'Enter') {
            tecla.classList.add('ativa');
        }
    }

    tecla.onkeyup = () => { tecla.classList.remove('ativa') }
}
