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
  const totalValue = Total.toFixed(2) + price2;
  
  document.getElementById("total-price").innerText = totalValue;
  document.getElementById("apply-total").innerText = totalValue;
}
