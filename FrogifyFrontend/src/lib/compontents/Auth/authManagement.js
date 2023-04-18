import {writable} from 'svelte/store';
import {msgBox} from "../handling/error/msgBox.js";
import {hashPwd, truncatePassword} from "../../Tools/PasswordHasher.js";

export const loginMode = writable('register');

export function switchMode() {
    loginMode.update(value => value === 'register' ? 'login' : 'register');
}

export async function submitForm() {
    let mode;
    loginMode.subscribe(value => {
        mode = value;
    });

    if (mode === 'register') {
        // register
        const usernameInput = document.getElementById("UsernameInput").value; // document.querySelector("#usernameInput").value; (same thing
        const mailInput = document.getElementById("MailInput").value; // document.querySelector("#mailInput").value; (same thing
        const passwordInput = document.getElementById("PasswordInput").value; // document.querySelector("#passwordInput").value; (same thing

        await register(usernameInput, mailInput, passwordInput);
    } else {
        // login
        const mailInput = document.getElementById("MailInput").value; // document.querySelector("#mailInput").value; (same thing
        const passwordInput = document.getElementById("PasswordInput").value; // document.querySelector("#passwordInput").value; (same thing

        await login(mailInput, passwordInput);

    }
}

export async function register(usernameInput, mailInput, passwordInput) {
    if (usernameInput === "" || mailInput === "" || passwordInput === "") {
        msgBox(2, "Error", "Please fill out all fields!");
    }

    const toBeSend = {
        username: usernameInput,
        usermail: mailInput,
        password: truncatePassword(hashPwd(passwordInput))
    }



    fetch("http://localhost:4499/auth/register", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(toBeSend)
    })
        .then(res => res.json())
        .then(async data => {

          console.log(data);
          if (data.success === true) {
            const userId = data.userId;
            const userToken = data.userToken;


            localStorage.setItem("userId", userId);
            localStorage.setItem("userToken", userToken);
            localStorage.setItem("userMail", mailInput);

            msgBox(1, "Success", "You have successfully registered!");
            await login(mailInput, passwordInput);
          } else {
            msgBox(2, "Error", data.message);
          }
        }).catch(err => {
        console.log(err);
    });

}

export async function login(mailInput, passwordInput) {
    if (mailInput === "" || passwordInput === "") {
        msgBox(2, "Error", "Please fill out all fields!");
    }

    const toBeSend = {
        method: 'Default',
        usermail: mailInput,
        password: truncatePassword(hashPwd(passwordInput))
    }

    fetch("http://localhost:4499/auth/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(toBeSend)
    })
        .then(res => res.json())
        .then(data => {
            if (data.success === true) {
                const userId = data.userId;
                const userToken = data.userToken;
                const role = data.role;

                localStorage.setItem("userId", userId);
                localStorage.setItem("userToken", userToken);
                localStorage.setItem("userMail", mailInput);
                localStorage.setItem("role", role);

                msgBox(1, "Success", "You have successfully logged in!");
            } else {
                msgBox(2, "Error", data.message);
            }
        }).catch(err => {
        console.log(err);
    });
}

export async function tryTokenLogin() {
    const userToken = localStorage.getItem("userToken");
    const userMail = localStorage.getItem("userMail");

    if (userToken === null || userMail === null) {
        return;
    }

    const toBeSend = {
        method: 'UserToken',
        usermail: userMail,
        userToken: userToken
    }

    fetch("http://localhost:4499/auth/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(toBeSend)
    })
        .then(res => res.json())
        .then(data => {
            if (data.success === true) {
                const role = data.role;
                const userId = data.userId;

                localStorage.setItem("userId", userId);
                localStorage.setItem("userToken", userToken);


                msgBox(1, "Success", "You have successfully logged in!");
            } else {
                msgBox(2, "Error", data.message);
            }
        }).catch(err => {
        console.log(err);

    });
}

(async function () {
    await tryTokenLogin();
})();
