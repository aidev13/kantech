const out1 = document.getElementById("out1")
const out2 = document.getElementById("out2")
const out3 = document.getElementById("out3")
const out4 = document.getElementById("out4")
const out5 = document.getElementById("out5")
const out6 = document.getElementById("out6")
const out7 = document.getElementById("out7")
const out8 = document.getElementById("out8")
const inputDoor1 = document.querySelector(".inputGrid")

const out1Positive = document.getElementById('positive')
const out1Negative = document.getElementById('negative')

console.log(out1Positive)

export function d8Interface() {
    //   === Add Classlist ===
    inputDoor1.addEventListener("mouseover", (e) => {
        if (e.target.id === "input_door1_rex1") {
            out1.classList.add("_12vled")
            out1Positive.classList.add("positiveLead")
            out1Negative.classList.add("negativeLead")
            
         }
      })
      
      //   === Remove Classlist ===
      inputDoor1.addEventListener("mouseout", () => {
         out1.classList.remove("_12vled")
         out1Positive.classList.remove("positiveLead")
         out1Negative.classList.remove("negativeLead")
    })
}
