//export let loggedIn = false;

import {writable} from "svelte/store";

export let loggedIn = writable(false);
export let page = writable("/");

export function navigateTo(to) {
    return (event) => {
        event.preventDefault();
        console.log("Navigating to: " + to);
        page.set(to);
    };
}
