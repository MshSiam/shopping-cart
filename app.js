document.getElementById("case-plus").addEventListener("click", function () {
  //   console.log("hit")
  let caseInput = document.getElementById("case-number")
  let caseNumber = caseInput.value
  let caseN = parseInt(caseNumber)
  caseInput.value = caseN + 1
  //   console.log(caseNumber)
})
