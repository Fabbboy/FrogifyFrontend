<script>
    import {loginMode, switchMode} from "./authManagement.js";
    import { submitForm } from "./authManagement.js";

    let mode = '';
    loginMode.subscribe(value => {
        mode = value;
    });




</script>

<div class="BasicFormBlock">
    <div class="BasicFormHeader">Account</div>

        {#if mode === 'register'}
        <label class="RegisterInputText" for="UsernameInput">
            Username
        </label>

        <input class="RegisterInputField" id="UsernameInput" name="username" placeholder="Username" required
               type="text"/>
        <br><br>
        {/if}
        <label class="RegisterInputText" for="MailInput">
            Email
        </label>
        <br>
        <input class="RegisterInputField" id="MailInput" name="mail" placeholder="e123456@sbl.ch" required
               type="email"/>
        <br><br>
        <label class="RegisterInputText" for="MailInput">
            Password
        </label>
        <input class="RegisterInputField" id="PasswordInput" name="password" placeholder="Password" required
               type="password"/>
        {#if mode === 'register'}
            <input class="RegisterSubmitButton" id="SubmitButton" type="submit" value="Register" on:click={submitForm}>
        {:else}
            <br><br><br><br><br>
            <input class="RegisterSubmitButton" id="SubmitButton" type="submit" value="Login" on:click={submitForm}>
        {/if}

    <button class="changeMode" on:click={switchMode}>Sie haben bereits ein Account?</button>
</div>

<style>
    .RegisterInputField {
        width: 80%;
        height: 40px;
        border-radius: 8px;
        border: 0;
        padding: 0 10px;
        position: relative;
        top: 30px;
        left: 7.8%;
        background: #292A2F;
        color: #fff;
        font-size: 16px;
        transition: ease-in-out 0.2s;
    }

    .RegisterInputField:focus {
        outline: none;
    }

    .RegisterInputText {
        position: relative;
        top: 30px;
        left: 7.8%;
        color: #fff;
        font-size: 16px;
        transition: ease-in-out 0.2s;
    }

    .RegisterSubmitButton {
        width: 60%;
        height: 50px;
        border-radius: 8px;
        padding: 0 10px;
        position: relative;
        top: 140px;
        left: 19%;
        background: #106292;
        border: 4px solid #00A1FF;
        color: #fff;
        font-size: 16px;
        transition: ease-in-out 0.2s;
    }

    .RegisterSubmitButton:hover {
        background: #00A1FF;
        border: 4px solid #106292;
    }

    .RegisterSubmitButton:focus {
        outline: none;
    }

    .changeMode {
        position: relative;
        top: 140px;
        left: 19%;
        background: transparent;
        border:0;
        color: #00A1FF;
        font-size: 12px;
        transition: ease-in-out 0.2s;
    }

    .changeMode:hover {
        color: #106292;
    }

</style>
