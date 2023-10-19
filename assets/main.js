// historia
window.addEventListener('scroll', function() {
    const historia = document.getElementById('historia');
    const distanciaDoTopo = historia.getBoundingClientRect().top;
    historia.style.opacity = 0;

    if (distanciaDoTopo < window.innerHeight) {
        // Adicionar uma classe CSS com transição de 1 segundo para animar a seção "história" quando estiver visível
        historia.classList.add('animacao-scroll');
        historia.style.opacity = 1
        historia.style.transition = 'opacity 4s ease';
    }
});


// presente
window.addEventListener('scroll', function() {
    const presente = document.getElementById('presente');
    const distanciaDoTopoPresente = presente.getBoundingClientRect().top;
    presente.style.opacity = 0;

    if (distanciaDoTopoPresente < window.innerHeight) {
        // Adiciona uma classe CSS com transição de 1 segundo para animar o elemento "presente" quando estiver visível
        presente.classList.add('animacao-scroll');
        presente.style.transition = 'opacity 4s ease';
        presente.style.opacity = 1;
    }


// onde estamos
    const ondeEstamos = document.getElementById('onde-estamos');
    const distanciaDoTopoOndeEstamos = ondeEstamos.getBoundingClientRect().top;
    ondeEstamos.style.opacity = 0;

    if (distanciaDoTopoOndeEstamos < window.innerHeight) {

        // Adiciona uma classe CSS com transição de 1 segundo para animar o elemento "onde estamos" quando estiver visível
        ondeEstamos.classList.add('animacao-scroll');
        ondeEstamos.style.transition = 'opacity 5s ease';
        ondeEstamos.style.opacity = 1;
    }
});
