
const out1 = document.getElementById("out1")
const out2 = document.getElementById("out2")
const out3 = document.getElementById("out3")
const out4 = document.getElementById("out4")
const out5 = document.getElementById("out5")
const out6 = document.getElementById("out6")
const out7 = document.getElementById("out7")
const out8 = document.getElementById("out8")
const inputDoor1 = document.querySelector("#inputDoor1")
const inputDoor2 = document.querySelector('#inputDoor2')

const d1parentElement = document.getElementById("d1")
const d1positiveElement = d1parentElement.children[0]
const d1negativeElement = d1parentElement.children[1]

const d2parentElement = document.getElementById("d2")
const d2positiveElement = d2parentElement.children[0]
const d2negativeElement = d2parentElement.children[1]

export function d8Interface() {
    //   === Add Classlist ===
    inputDoor1.addEventListener("mouseover", (e) => {
        if (e.target.id === "input_door1_rex") {
            out1.classList.add("_12vled")
            d1positiveElement.classList.add("positiveLead")
            d1negativeElement.classList.add("negativeLead")
        }
    });

    inputDoor2.addEventListener("mouseover", (e) => {
        if (e.target.id === "input_door2_rex") {
            out2.classList.add("_12vled")
            d2positiveElement.classList.add("positiveLead")
            d2negativeElement.classList.add("negativeLead")
        }
    });

    //   === Remove Classlist ===
    inputDoor1.addEventListener("mouseout", () => {
        out1.classList.remove("_12vled")
        d1positiveElement.classList.remove("positiveLead")
        d1negativeElement.classList.remove("negativeLead")
    });
    inputDoor2.addEventListener("mouseout", () => {
       out2.classList.remove("_12vled")
       d2positiveElement.classList.remove("positiveLead")
       d2negativeElement.classList.remove("negativeLead")
    });


};
