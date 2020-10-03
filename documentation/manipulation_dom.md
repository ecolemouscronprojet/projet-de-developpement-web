# Manipulation de DOM et event listener

## Manipulation de DOM

Vous pouvez manipuler des éléments sur votre page web sous la representation d'objet grace aux méthodes suivantes

```javascript
document.getElementById("monId"); // récupere 1 élément
document.getElementsByClassName(".maClasse") // récupère un tableau d'élément 
document.getElementsByName("body") // récupère un tableau d'élément 
document.querySelector("div") // récupère 1 élément
document.querySelectorAll(".maClasse") // récupère un tableau d'élément 

```

## Event listener

Vous pouvez créer des listener qui vont venir écouter des actions que vous allez faire sur votre page et executer 
une callback dans lequel vous aurez placé des instructions

```javascript
//on selectione le bouton
const btn  = document.getElementById('mon-bouton');
// on ajoute un listener qui va venir écouter le click du bouton
// et lancer une alert('message');
btn.addEventListener('click', function(){
  alert('message');
});
```


# Exercices

Vous allez travailler dans le  fichier `index.html` se trouvant dans le repertoire `bases`, les exercices seront à réaliser en Vanilla Javascript (ne pas utiliser JQuery)


## Exercices 1

Créez un listener qui va venir écouter l'évènement `click` sur le bouton `Mon bouton` qui aura pour action de rendre visible/invisible le tableau (1 click visible, un autre click invisible …)



## Exercices 2

Créez un deuxième bouton sur lequel vous allez lui associer un listener qui va écouter l'évènement `click` qui aura pour action de supprimer dans le tableau toutes les dates de naissance, ne supprimer que le texte.
