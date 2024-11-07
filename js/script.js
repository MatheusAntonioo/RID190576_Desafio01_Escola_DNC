const number = document.querySelectorAll(".infoTitle");
const targetFix = document.querySelector("#targetFix")

// movimentando os números em informações
function showNumbers() {
  number.forEach((counter) => {
    function upData(){
      const target = Number(counter.getAttribute("data-target"))
      const count = Number(counter.innerText)
      const inc = target / 40

      if(count < target){
        counter.innerText = Math.floor(inc + count)
        setTimeout(upData, 1)
      } else {
        counter.innerText = target
        targetFix.textContent = "2,000,000"
      }
    }
    upData()
  })
}
showNumbers()
