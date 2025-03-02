const button = document.getElementById('btn-1');
const countRight =document.getElementById('count-right').innerText
const countLeft =document.getElementById('count-left').innerText
button.addEventListener('click' , function(){
    button.disabled = true;
    
    button.style.backgroundColor = 'gray'
    countRight = parseInt(countRight) + 1;
    countLeft = parseInt(countLeft)  - 1;
   
})
// btn-2
const btnB = document.getElementById('btn-2');
btnB.addEventListener('click' , function(){
    btnB.disabled = true;
    
    btnB.style.backgroundColor = 'gray'
  
})
// btn-3
const btnC = document.getElementById('btn-3');
btnC.addEventListener('click' , function(){
    btnC.disabled = true;
    
    btnC.style.backgroundColor = 'gray'
})
// btn-4
const btnD = document.getElementById('btn-4');
btnD.addEventListener('click' , function(){
    btnD.disabled = true;
    
    btnD.style.backgroundColor = 'gray'
})
// btn-5
const btnE = document.getElementById('btn-5');
btnE.addEventListener('click' , function(){
    btnE.disabled = true;
    
    btnE.style.backgroundColor = 'gray'
})
// btn-6
const btnF = document.getElementById('btn-6');
btnF.addEventListener('click' , function(){
    btnF.disabled = true;
    
    btnF.style.backgroundColor = 'gray'
})

