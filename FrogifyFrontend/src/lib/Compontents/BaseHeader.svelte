<script>
    import { onMount } from "svelte";
    import { loggedIn, navigateTo } from "../Controler.js";
    import { getProfilePicture } from "./Feed/FeedManager.js";

    let loggedInSub;
    loggedIn.subscribe((value) => {
        loggedInSub = value;
    });

    let profileImageSrc = "";

    async function updateProfileImage() {
        if (loggedInSub) {
            const profileImage = await getProfilePicture();
            if (profileImage !== null) {
                console.log("profileImage: ", profileImage);
                profileImageSrc = profileImage;
            }
        }
    }

    $: loggedInSub, updateProfileImage();

</script>


<div class="baseHeader">
    <a on:click={navigateTo("/")} class="baseHeaderLogo"></a>
    <p class="baseHeaderName">Frogify</p>
    <p class="baseHeaderUndertitle">SMA-Fröschmatt</p>
    {#if loggedInSub === true}
        <div class="breakLiner"></div>
        <a class="navigationOption" on:click={navigateTo("/")}>Startseite</a>
        <a class="navigationOption" on:click={navigateTo("/project")}>Projekt</a>
        <input type="search" class="searchBar" id="searchBar" placeholder="Suche">
        <img src={profileImageSrc} alt="profile" class="profileImage"/>
    {/if}
</div>


<style>
    .baseHeader{
        width: 100%;
        height: 115px;
        background-color: #292A2F;
        border-bottom: 4px solid #464646;
    }

    .baseHeaderLogo{
        background-image: url("../../assets/logo.svg");
        background-size: contain;
        background-repeat: no-repeat;
        width: 180px;
        height: 90px;
        display: block;
        position: relative;
        top: 10%;
        left: 1%;
    }

    .baseHeaderName {
        font-weight: bolder;
        color: #fff;
        font-size:1.8em;
        position: relative;
        top: -74%;
        left: 8%;
    }

    .baseHeaderUndertitle {
        color: #fff;
        font-size:1em;
        position: relative;
        top: -103%;
        left: 8%;
    }

    .profileImage{
        width: 70px;
        height: 70px;
        border-radius: 50%;
        position: relative;
        top: -285px;
        left: 55%;
    }

    .breakLiner{
        width:4px;
        height:90px;
        background:#464646;
        position: relative;
        border-radius: 8px;
        top: -205px;
        left: 18%;
    }

    .navigationOption{
        color: #fff;
        font-size:1.4em;
        position: relative;
        top: -310px;
        left: 18%;
        font-weight: bold;
        margin-left: 20px;
        transition: ease-in-out 0.2s;
    }

    .navigationOption:hover{
        cursor: pointer;
        text-decoration: underline;
    }

    .searchBar{
        width: 300px;
        height: 50px;
        border-radius: 8px;
        position: relative;
        top: -310px;
        left: 53%;
        margin-left: 20px;
        border: none;
        padding-left: 10px;
        font-size: 1.2em;
        background: #464646;
        color: #fff;
    }

    .searchBar:focus{
        outline: none;
    }




</style>
