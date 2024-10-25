document.getElementById('lire').addEventListener('click', function(event) {
    event.preventDefault(); // Empêche le lien de rediriger
    const prologue = document.querySelector('.prologue');
    
    // Ajoute la classe no-scroll au body pour empêcher le défilement
    document.body.classList.add('no-scroll');

    prologue.classList.add('hidden'); // Ajoute la classe hidden pour commencer la transition

    // Après la transition, cacher complètement l'élément et retirer la classe no-scroll
    prologue.addEventListener('transitionend', function() {
        prologue.style.display = 'none'; // Cache le prologue après la transition
        document.body.classList.remove('no-scroll'); // Retire la classe no-scroll
        startTyping(); // Démarre l'écriture des répliques après la transition
    }, { once: true }); // L'événement se déclenche une seule fois
});


