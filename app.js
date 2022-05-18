function updateProductNumber(product, price, isIncreasing) {
  let productInput = document.getElementById(product + "-number")
  let productNumber = productInput.value
  let productN = parseInt(productNumber)
  if (isIncreasing === true) {
    productNumber = productN + 1
  } else if (productNumber > 0 && isIncreasing === false) {
    productNumber = productN - 1
  }
  productInput.value = productNumber
  //   update case price
  const caseTotal = document.getElementById(product + "-total")
  caseTotal.innerText = productNumber * price
  calculateTotal()
}

// calculate total--------------

function getInputValue(product) {
  const productInput = document.getElementById(product + "-number")
  const productNumber = parseInt(productInput.value)
  return productNumber
}

function calculateTotal() {
  const phoneTotal = getInputValue("phone") * 1229
  const caseTotal = getInputValue("case") * 59
  const subTotal = phoneTotal + caseTotal
  const tax = parseInt(subTotal * 0.1)
  // update on html
  document.getElementById("sub-total").innerText = subTotal
  document.getElementById("tax-amount").innerText = tax
  document.getElementById("total-price").innerText = subTotal + tax
}

document.getElementById("case-plus").addEventListener("click", function () {
  updateProductNumber("case", 59, true)
})

document.getElementById("case-minus").addEventListener("click", function () {
  updateProductNumber("case", 59, false)
})

// phone calculation
document.getElementById("phone-plus").addEventListener("click", function () {
  // console.log("clicked")
  updateProductNumber("phone", 1229, true)
})
document.getElementById("phone-minus").addEventListener("click", function () {
  // console.log("clicked")
  updateProductNumber("phone", 1229, false)
})
