export function readerDoor1() {
    const d0 = document.getElementById("reader1-d0")
    const d1 = document.getElementById("reader1-d1")
    const grd = document.getElementById("reader1-grd")
    const led = document.getElementById("reader1-led")
    const _12v = document.getElementById("reader1-_12v")
    const readerGrid1 = document.querySelector("#readerGrid1")
    
    readerGrid1.addEventListener("mouseover", () => {
       d0.classList.add("reader_d0")
       d1.classList.add("reader_d1")
       grd.classList.add("reader_grd")
       led.classList.add("reader_led")
       _12v.classList.add("reader__12v")
    })

    readerGrid1.addEventListener("mouseout", () => {
       d0.classList.remove("reader_d0")
       d1.classList.remove("reader_d1")
       grd.classList.remove("reader_grd")
       led.classList.remove("reader_led")
       _12v.classList.remove("reader__12v")
    })
   };
   
   export function readerDoor2() {
      const d0 = document.getElementById("reader2-d0")
      const d1 = document.getElementById("reader2-d1")
      const grd = document.getElementById("reader2-grd")
      const led = document.getElementById("reader2-led")
      const _12v = document.getElementById("reader2-_12v")
      const readerGrid2 = document.querySelector("#readerGrid2")

   readerGrid2.addEventListener("mouseover", () => {
       d0.classList.add("reader_d0")
       d1.classList.add("reader_d1")
       grd.classList.add("reader_grd")
       led.classList.add("reader_led")
       _12v.classList.add("reader__12v")
   })

   readerGrid2.addEventListener("mouseout", () => {
       d0.classList.remove("reader_d0")
       d1.classList.remove("reader_d1")
       grd.classList.remove("reader_grd")
       led.classList.remove("reader_led")
       _12v.classList.remove("reader__12v")
   })
};
