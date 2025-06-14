"use strict";

document.addEventListener("DOMContentLoaded", () => {
    const screen = document.querySelector(".screen");
    const buttons = document.querySelectorAll(".btn");
    const clearButton = document.querySelector(".btn-clear");
    const equalButton = document.querySelector(".btn-equal");

    buttons.forEach(button => {
        button.addEventListener("click", e => {
            const val = e.target.dataset.val;
            if (val) screen.value += val;
        });
    });

    equalButton.addEventListener("click", () => {
        if (screen.value !== "") {
            try {
                screen.value = eval(screen.value);
            } catch {
                screen.value = "Error";
            }
        }
    });

    clearButton.addEventListener("click", () => {
        screen.value = "";
    });
});

