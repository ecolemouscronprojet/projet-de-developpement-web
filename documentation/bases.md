# Les bases pour bien démarrer

## GITHUB

Le lien github git@github.com:ecolemouscronprojet/projet-de-developpement-web.git
## VIDEO

[ici](https://youtu.be/bT4VOH-RFNM)


## La console

l'objet console est un outil permettant d'afficher des informations dans la console

```javascript
console.log('ICI') // affiche un log dans la console
console.war('ICI') // affiche un warning dans la console 
console.error('ICI') // affiche une erreur dans la console
```



## les variables

Il existe 3 types de variables en JavaScript CONST, LET et VAR


### CONST

 -  Portée de bloc  `{...}`
 -  La variable ne peut être réaffectée

```javascript
const monMessage = 'Mon premier message';
```



### LET

 -  Portée de bloc  `{...}`
 -  La variable peut être réaffectée

```javascript
let monMessage = 'Mon premier message';
monMessage = 'Mon deuxième message';
```


## VAR

Variable à ne pas utiliser pour éviter un maximum les effets de bord.


 -  Portée de fonction  `function() {...}` ce qui est plus dangereux
 -  La variable peut être réaffectée

```javascript
var monMessage = 'Mon premier message';
monMessage = 'Mon deuxième message';
```



## les conditions

```javascript
var i = 'TEST';

if (i === false) {
  console.log("I = FALSE");
} else if (i === true) {
  console.log("I = TRUE");
} else {
  console.log("I  est inconnu");
}

```


