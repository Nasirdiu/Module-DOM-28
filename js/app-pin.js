function getPin() {
  const pin = Math.round(Math.random() * 10000);
  const pinString = pin + "";
  if (pinString.length == 4) {
    return pin;
  } else {
    return getPin();
  }
}

function generatePin() {
  const pin = getPin();
  document.getElementById("display-pin").value = pin;
}

document.getElementById("key-pad").addEventListener("click", function (e) {
  const number = e.target.innerText;
  const calInput = document.getElementById("type-number");
  if (isNaN(number)) {
    if(number=='C'){
        calInput.value='';
    }
    
  } 
  else {
   
    const previousNumber = calInput.value;
    const newNumber = previousNumber + number;
    calInput.value = newNumber;
  }
});

function verifyPin(){
    const pin =document.getElementById('display-pin').value;
    const typeNumber=document.getElementById('type-number').value;
    const suc=document.getElementById('notify-open');
    const fallError=document.getElementById('notify-fall');

    if(pin==typeNumber){
        
        suc.style.display='block';
        fallError.style.display='none';
    }
    else{
        suc.style.display='none';
        fallError.style.display='block';
    }

}
document.getElementById('cheekOut').addEventListener('click',function(){

  window.location.href='index.html'
})