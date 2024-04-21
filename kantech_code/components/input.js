const door = document.getElementById("input_door1_door")
const common1 = document.getElementById("input_door1_c1")
const rex = document.getElementById("input_door1_rex")
const zn3 = document.getElementById("input_door1_zn3")
const common2 = document.getElementById("input_door1_c2")
const zn4 = document.getElementById("input_door1_zn4")

const door2 = document.getElementById("input_door2_door")
const common3 = document.getElementById("input_door2_c1")
const rex2 = document.getElementById("input_door2_rex")
const zn7 = document.getElementById("input_door2_zn7")
const common4 = document.getElementById("input_door2_c2")
const zn8 = document.getElementById("input_door2_zn8")

export function inputDoor1() {

    // Door 1
    door.addEventListener("mouseover", () => {
        door.classList.add("highlight-door")
        common1.classList.add("highlight-common")
    })
    door.addEventListener("mouseout", function () {
        door.classList.remove("highlight-door")
        common1.classList.remove("highlight-common")
    })

    // REX 1
    rex.addEventListener("mouseover", () => {
        rex.classList.add("highlight-rex")
        common1.classList.add("highlight-common")
    })
    rex.addEventListener("mouseout", () => {
        rex.classList.remove("highlight-rex")
        common1.classList.remove("highlight-common")
    })

    // Zone 3
    zn3.addEventListener("mouseover", () => {
        zn3.classList.add("highlight-green")
        common2.classList.add("highlight-green")
    })
    zn3.addEventListener("mouseout", () => {
        zn3.classList.remove("highlight-green")
        common2.classList.remove("highlight-green")
    })
    
    // Zone 4
    zn4.addEventListener("mouseover", () => {
        zn4.classList.add("highlight-green")
        common2.classList.add("highlight-green")
    })
    zn4.addEventListener("mouseout", () => {
        zn4.classList.remove("highlight-green")
        common2.classList.remove("highlight-green")
    })

};


export function inputDoor2() {

   // Door 2
   door2.addEventListener("mouseover", () => {
       door2.classList.add("highlight-door")
       common3.classList.add("highlight-common")
   })
   door2.addEventListener("mouseout", function () {
       door2.classList.remove("highlight-door")
       common3.classList.remove("highlight-common")
   })

   // REX 2
   rex2.addEventListener("mouseover", () => {
       rex2.classList.add("highlight-rex")
       common3.classList.add("highlight-common")
   })
   rex2.addEventListener("mouseout", () => {
       rex2.classList.remove("highlight-rex")
       common3.classList.remove("highlight-common")
   })

   // Zone 3
   zn7.addEventListener("mouseover", () => {
       zn7.classList.add("highlight-blue")
       common4.classList.add("highlight-blue")
   })
   zn7.addEventListener("mouseout", () => {
       zn7.classList.remove("highlight-blue")
       common4.classList.remove("highlight-blue")
   })
   
   // Zone 4
   zn8.addEventListener("mouseover", () => {
       zn8.classList.add("highlight-blue")
       common4.classList.add("highlight-blue")
   })
   zn8.addEventListener("mouseout", () => {
       zn8.classList.remove("highlight-blue")
       common4.classList.remove("highlight-blue")
   })

};

