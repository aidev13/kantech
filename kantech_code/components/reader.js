document.addEventListener("DOMContentLoaded", function () {
    const d0 = document.getElementById("reader1-d0")
    const d1 = document.getElementById("reader1-d1")
    const grd = document.getElementById("reader1-grd")
    const led = document.getElementById("reader1-led")
    const _12v = document.getElementById("reader1-_12v")
    const readerGrid = document.querySelector(".readerGrid")

    readerGrid.addEventListener("mouseover", () => {
        d0.classList.add("reader_d0")
        d1.classList.add("reader_d1")
        grd.classList.add("reader_grd")
        led.classList.add("reader_led")
        _12v.classList.add("reader__12v")
    })

    readerGrid.addEventListener("mouseout", () => {
        d0.classList.remove("reader_d0")
        d1.classList.remove("reader_d1")
        grd.classList.remove("reader_grd")
        led.classList.remove("reader_led")
        _12v.classList.remove("reader__12v")
    })
})
