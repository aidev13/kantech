import { inputDoor1, inputDoor2 } from "./components/input.js";
import { readerDoor1, readerDoor2 } from "./components/reader.js";
import { d8Interface } from "./components/d8outputs.js";

document.addEventListener("DOMContentLoaded", function() {
 inputDoor1();
 inputDoor2();
 readerDoor1();
 readerDoor2();
 d8Interface();
});