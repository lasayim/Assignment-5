const button = document.getElementById('btn-1');
const countRight =document.getElementById('count-right').innerText
const countLeft =document.getElementById('count-left').innerText
button.addEventListener('click' , function(){
    alert('Board Updated Successfully')
    button.disabled = true; 
    button.style.backgroundColor = 'gray'
    countRight = parseInt(countRight) + 1;
    countLeft = parseInt(countLeft)  - 1;
   
})
// btn-2
const btnB = document.getElementById('btn-2');
btnB.addEventListener('click' , function(){
    alert('Board Updated Successfully')
    btnB.disabled = true;
    
    btnB.style.backgroundColor = 'gray'
  
})
// btn-3
const btnC = document.getElementById('btn-3');
btnC.addEventListener('click' , function(){
    alert('Board Updated Successfully')
    btnC.disabled = true;
    
    btnC.style.backgroundColor = 'gray'
})
// btn-4
const btnD = document.getElementById('btn-4');
btnD.addEventListener('click' , function(){
    alert('Board Updated Successfully')
    btnD.disabled = true;
    
    btnD.style.backgroundColor = 'gray'
})
// btn-5
const btnE = document.getElementById('btn-5');
btnE.addEventListener('click' , function(){
    alert('Board Updated Successfully')
    btnE.disabled = true;
    
    btnE.style.backgroundColor = 'gray'
})
// btn-6
const btnF = document.getElementById('btn-6');
btnF.addEventListener('click' , function(){
    alert('Board Updated Successfully')
    btnF.disabled = true;
    
    btnF.style.backgroundColor = 'gray'
})

// if(button.disabled && btnB.disabled && btnC.disabled && btnD.disabled && btnE.disabled && btnF.disabled){
//     alert('all button are clicked')
// }



