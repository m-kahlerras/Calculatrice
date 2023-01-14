//DOM
const touche = [...document.querySelectorAll('.button')];
const listKeycode = touche.map(touche => touche.dataset.key);
const ecran = document.querySelector('.ecran');

document.addEventListener('keydown', (e) => {
    const valeur = e.keyCode.toString();
    calculer(valeur);
});

document.addEventListener('click', (e) => {
    const valeur = e.target.dataset.key;   
    calculer(valeur);
})

const calculer = (valeur) => {
    if(listKeycode.includes(valeur)){
        switch(valeur){
           case '46':
            ecran.textContent = "";
            break;
           case '187':
            const calcul = eval(ecran.textContent);
            ecran.textContent = calcul;
            break;
           default:
            const indexKeycode = listKeycode.indexOf(valeur); 
            const touches = touche[indexKeycode];
            ecran.textContent += touches.innerHTML;
        }
    }
}

window.addEventListener('error', (e) => {
    alert('Une erreur est survenue dans votre calcul : ' + e.message);
})
