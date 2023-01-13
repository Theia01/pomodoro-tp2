//  vérifier que le navigator supporte l’API contenant un code permet d’enregistrer le fichier sw.js en tant que Service Worker
if('serviceWorker' in navigator){
    navigator.serviceWorker.register('./sw.js')
    .then((reg) => {
        //registration worked
        // console.log('Enregistrement réussi');
    }).catch((error) => {
        //registration failed
        // console.log('Erreur : ' + error);
    });
};