let Total = 0.00;



function handleCLikBtn(target) {
  const selectedItemContainer = document.getElementById("selected-items");
  const itemName = target.childNodes[3].childNodes[3].childNodes[1].innerText;

  const count = selectedItemContainer.childElementCount;
  const p = document.createElement('ol');
  p.innerText = itemName;
  p.classList.add('my-4');
  p.innerHTML = `${count + 1}. ${itemName}`
  selectedItemContainer.appendChild(p);
  const price = target.childNodes[3].childNodes[3].childNodes[3].innerText.split(" ")[0];
  const price2 = target.childNodes[3].childNodes[3].childNodes[3].innerText.split(" ")[1];
  Total = parseFloat(Total) + parseFloat(price) ;
  const totalValue = Total.toFixed(2);
  document.getElementById("total-price").innerText = totalValue + price2;
  let totalPrice = document.getElementById("total-price").innerText;
  document.getElementById("apply-total").innerText = totalValue + price2;

  const applyCouponInput = document.getElementById("apply-coupon");

  const makePurchase = document.getElementById("purchase-button");

  
  if(totalValue>=200.00)
  {
    applyCouponInput.removeAttribute("disabled");
    
    applyCouponInput.classList.remove("disabled:opacity-75" , "bg-gray-400");
    applyCouponInput.classList.add("bg-primary-2");
  }
  else{
    applyCouponInput.classList.add("bg-gray-400")
  }
  
  if(totalValue>0.00)
  {
    makePurchase.removeAttribute("disabled");
   
    makePurchase.classList.remove("disabled:opacity-75" , "bg-gray-400");
    makePurchase.classList.add("bg-primary-2");
  }
  else{
    makePurchase.classList.add("bg-gray-400")
  }


const couponCodeInput = document.getElementById("coupon-code");
const applyCouponButton = document.getElementById("apply-coupon");
const discountInput = document.getElementById("apply-discount");

const  finalInput = document.getElementById("apply-total");

applyCouponButton.addEventListener("click", function() {
    
    const enteredCouponCode = couponCodeInput.value;

   
    if (enteredCouponCode !== "SELL200") {
        
        if (!alertShown) {
            alert(" Please enter a valid coupon code.");
             
            
        }
    } else {
     
    }
    if(couponCodeInput.value === 'SELL200')
{
  let discount = totalValue * 20 /100;
  discountInput.innerText = discount.toFixed(2) + price2;
  let final = totalValue - discount;
  finalInput.innerText = final.toFixed(2) + price2;
}
else{
  discountInput.innerText = 0.00;
  finalInput.innerText =  totalValue;
}
});






}



