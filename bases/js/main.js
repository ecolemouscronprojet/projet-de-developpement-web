const btn = document.getElementById('bouton-bleu');
btn.addEventListener('click', function() {
    const tbl = document.querySelector('table');
    if(tbl.style.display == 'none'){
        tbl.style.display  = 'table';
    } else {
        tbl.style.display  = 'none';
    }
});


const btn2 = document.getElementById('bouton-deux');
btn2.addEventListener('click', function(){
    const date = document.querySelectorAll('table td:nth-child(3)')
    .forEach(function(date) {
        date.innerHTML = '';
    })
   /*
   1 ere solution
    const taille = document.getElementsByTagName('tr').length;
    for(i=1;i<taille;i++){
        document.querySelectorAll('tr')[i].lastElementChild.innerHTML = '';
    }*/
});


// console.log('Mon message');
// console.error('Mon message erreur');
//document.addEventListener('click', function() {
//    alert('MESSAGE');
//});

/*const myButton = document.getElementById('bouton-bleu');
if(myButton != null) {
    myButton.addEventListener('click', function() {
       const table = document.querySelector('table');
       table.style.display = 'none';
    });
}*/

/*$('#bouton-bleu').on('click', function() {
    $('table').find('tr').last().remove();
});*/

/*const btn = document.getElementById('bouton-bleu');
btn.addEventListener('click', function() {
    document.querySelectorAll('table tr').deleteRow(-1);
});
*/

/*const btns = document.getElementsByClassName('btn');

btns[0].addEventListener('click', function(){
    alert('MESSAGE');
});
*/