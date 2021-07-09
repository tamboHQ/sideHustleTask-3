const countValue  = document.querySelector('.count-value');
const btLower  = document.querySelector('.lower');
const btAdd  = document.querySelector('.add');

let counter = 0;

btLower.addEventListener('click', () =>{
    if (counter > 0){
        counter--;
        countValue.innerHTML = counter;
    }
});

btAdd.addEventListener('click', () =>{
    if (counter < 50) {
        counter++;
        countValue.innerHTML = counter;
    }
});