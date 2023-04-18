import { writable } from 'svelte/store';

const icons = ["http://localhost:5173/src/lib/compontents/handling/error/msgIcons/warning.svg", "http://localhost:5173/src/lib/compontents/handling/error/msgIcons/success.svg", "http://localhost:5173/src/lib/compontents/handling/error/msgIcons/error.svg"];
const colors = ["#FFB800", "#00A1FF", "#FF0000"];

export const active = writable(false);

export function msgBox(type, title, content) {
    const msgBox = document.querySelector(".msgBox");
    const MsgTitle = document.querySelector("#MsgTitle");
    const MsgContent = document.querySelector("#MsgContent");
    msgBox.style.borderLeftColor = colors[type];
    MsgTitle.innerHTML = title;
    MsgContent.innerHTML = content;
    active.set(true);
    msgBox.style.transform = "translate(-5%, 0)";
    setTimeout(() => {
        msgBox.style.transform = "translate(100%, 0)";
        active.set(false);
    }, 3000);
}
