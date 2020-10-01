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

const btn = document.getElementById('bouton-bleu');
btn.addEventListener('click', function() {
    document.querySelectorAll('table tr').deleteRow(-1);
});


/*const btns = document.getElementsByClassName('btn');

btns[0].addEventListener('click', function(){
    alert('MESSAGE');
});
*/