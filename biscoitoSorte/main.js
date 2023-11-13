const screen1 = document.querySelector('.screen1')
const screen2 = document.querySelector('.screen2')
const openCookie = document.querySelector('#openCookie')
const otherCookie = document.querySelector('#otherCookie')

openCookie.addEventListener('click', phraseGenerator)
otherCookie.addEventListener('click', reOpenCoockie)

function toggleScreen() {
    screen1.classList.toggle('hide')
    screen2.classList.toggle('hide')
}

function phraseGenerator() {
    const fortuneCookiePhrases = [
        'A vida trará coisas boas se tiver paciência.',
        'Não compense na ira o que lhe falta na razão.',
        'A maior de todas as torres começa no solo.',
        'A juventude não é uma época da vida, é um estado de espírito.',
        'Siga os bons e aprenda com eles.',
        'Não importa o tamanho da montanha, ela não pode tapar o sol.',
        'Uma bela flor é incompleta sem as suas folhas.',
        'Sem o fogo do entusiasmo, não há o calor da vitória.',
        'O riso é a menor distância entre duas pessoas.',
        'A sorte favorece a mente bem preparada.',
        'Todas as coisas são difíceis antes de se tornarem fáceis.',
        'Você é do tamanho do seu sonho.',
        'Acorda pra vida cachorro! by: Papai Careca',
        'Nós somos o que pensamos.',
        'Deixe de lado as preocupações e seja feliz.'
    ];
    const phraseIndex = Math.floor(Math.random() * fortuneCookiePhrases.length)
    document.querySelector('.screen2 p').innerText = fortuneCookiePhrases[phraseIndex];
    toggleScreen()
}

function reOpenCoockie() {
    toggleScreen()
}





