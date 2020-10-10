# Création d'une voiture

# Exercice

Continuez l'exercice sur la voiture, maintenant il faut que vous implémentiez les événements qui vont écouter les clics sur le clavier.

- [ ] Si l'on clique sur la flèche qui va à gauche la voiture part à gauche
- [ ] Si l'on clique sur la flèche qui va à droit la voiture part à droit
- [ ] Si l'on clique sur la flèche qui va à en arrère la voiture part en arrère
- [ ] Si l'on clique sur la flèche qui va en avant la voiture part en avant

## Aide

https://developer.mozilla.org/en-US/docs/Web/API/Document/keydown_event

Le listener, vous devez le placer sur le document entier (`document.addEventListener(...)`)

Chaque clic du clavier à un code (`KeyCode`)

- Clic gauche => `37`
- Clic droit => `39`
- Clic haut => `38`
- Clic bas => `40`

````
Vous allez devoir ajouter des conditions dans votre listener pour gérer celà
```php
if(CLIC GAUCHE){
  // JE VAIS à gauche
} else  if(CLIC DROIT){
  // JE VAIS à droite
}……
````
