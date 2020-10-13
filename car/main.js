
let i = 0;
const car = document.getElementById('car');
setInterval(function()  {
    car.style.top = i % 2 === 0 ? '175px' : '174px'; 
    i++;
}, 100);


document.addEventListener('keydown', function(event){
    console.log('press clavier');
    console.log(event);
});