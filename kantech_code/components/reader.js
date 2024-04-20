document.addEventListener("DOMContentLoaded", function () {
    const d0 = document.getElementById("reader1-d0")
    const d1 = document.getElementById("reader1-d1")
    const grd = document.getElementById("reader1-grd")
    const led = document.getElementById("reader1-led")
    const _12v = document.getElementById("reader1-_12v")
    const readerGrid = document.querySelector(".readerGrid")

    readerGrid.addEventListener("mouseover", (e) => {
        if (e.target.id === "reader1-d0") {
            d0.classList.add("reader_d0")
        } else if (e.target.id === "reader1-d1") {
            d1.classList.add("reader_d1")
        } else if (e.target.id === "reader1-grd") {
            grd.classList.add("reader_grd")
        } else if (e.target.id === "reader1-led") {
            led.classList.add("reader_led")
        } else if (e.target.id === "reader1-_12v") {
         _12v.classList.add("reader__12v")
     }
    })

    d0.addEventListener("mouseout", function () {
        d0.classList.remove("reader_d0")
    })
    d1.addEventListener("mouseout", function () {
        d1.classList.remove("reader_d1")
    })
    grd.addEventListener("mouseout", function () {
        grd.classList.remove("reader_grd")
    })
    led.addEventListener("mouseout", function () {
        led.classList.remove("reader_led")
    })
    _12v.addEventListener("mouseout", function () {
        _12v.classList.remove("reader__12v")
    })
})
