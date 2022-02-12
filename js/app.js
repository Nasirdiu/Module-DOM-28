function updateProductNumber(product, price, isIncreasing) {
  const productInput = document.getElementById(product + "-number");
  let productNumber = productInput.value;
  if (isIncreasing == true) {
    productNumber = parseInt(productNumber) + 1;
  } else if (productNumber > 0) {
    productNumber = parseInt(productNumber) - 1;
  }
  productInput.value = productNumber;
  //update total
  const productTotal = document.getElementById(product + "-total");
  productTotal.innerText = productNumber * price;

  // calculate total
  calculateTotal();
}



function getInputValue(products){
    const productInput=document.getElementById(products + "-number");
    const productNumber= parseInt(productInput.value);
    return productNumber;
}



function calculateTotal(){
    
const phoneTotal=getInputValue('phone')*1219;
const caseTotal=getInputValue('case')*60;
const subTotal=phoneTotal+caseTotal;
const taxTotal =subTotal /10;
const totalPrice=subTotal+taxTotal;

//update on the html 
document.getElementById('sub-total').innerText=subTotal;
document.getElementById('tax').innerText=taxTotal;
document.getElementById('sub-price').innerText=totalPrice;
}

//......................call + - button..................................

//iPhone 11 Silicone Case - Black button minus

document.getElementById("case-plus").addEventListener("click", function () {
  updateProductNumber("case", 60, true);
});
//.......................back minus...................
document.getElementById("case-minus").addEventListener("click", function () {
  updateProductNumber("case", 60, false);
});

//phone
document.getElementById("phone-plus").addEventListener("click", function () {
  updateProductNumber("phone", 1219, true);
});
//.......................phone minus................
document.getElementById("phone-minus").addEventListener("click", function () {
  updateProductNumber("phone", 1219, false);
});

