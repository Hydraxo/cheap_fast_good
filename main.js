'use strict';
const jscheap = document.querySelector(".body-main_menu_cheap_script");
const jsfast = document.querySelector(".body-main_menu_fast_script");
const jsgood = document.querySelector(".body-main_menu_good_script");

jscheap.addEventListener("click", buttonCheap);
jsfast.addEventListener("click", buttonFast);
jsgood.addEventListener("click", buttonGood);

function buttonCheap() {
    if (jsfast.checked && jsgood.checked && jscheap.checked){
        jsgood.checked = !jsgood.checked;
    }
}

function buttonFast() {
    if (jsfast.checked && jsgood.checked && jscheap.checked){
        jscheap.checked = !jscheap.checked;
    }
}

function buttonGood() {
    if (jsfast.checked && jsgood.checked && jscheap.checked){
        jsfast.checked = !jsfast.checked;
    }
}
