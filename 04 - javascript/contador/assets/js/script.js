var currentNumberWrapper = document.getElementById('currentNumber');
var currentNumber = parseInt(currentNumberWrapper.innerHTML);
function increment(){
    
    if (currentNumber > 10) {
        return
    }
    
    
    currentNumber++;
    if (currentNumber >= 10)  {
        document.getElementById('currentNumber').style.color = 'blue';
    }
    else{
        document.getElementById('currentNumber').style.color = 'black';
    }
    currentNumberWrapper.innerHTML = currentNumber;
    
}

function decrement(){
   
    if (currentNumber < 0) {
        return
    }
    
    currentNumber--
    if (currentNumber < 0)  {
        document.getElementById('currentNumber').style.color = 'red';
    }
    else{
        document.getElementById('currentNumber').style.color = 'black';
    }
    currentNumberWrapper.innerHTML = currentNumber;
}
