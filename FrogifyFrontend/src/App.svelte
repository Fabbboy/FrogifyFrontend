<script>
    import BaseHeader from "./lib/Compontents/BaseHeader.svelte";
    import Auth from "./lib/Compontents/Auth/Auth.svelte";
    import {loggedIn} from "./lib/Controler.js";
    import Error from "./lib/Compontents/handling/error/msgBox.svelte";
    import Feed from "./lib/Compontents/Feed/Feed.svelte";
    import {getProfilePicture} from "./lib/Compontents/Feed/FeedManager.js";

    let loggedInSub;
    loggedIn.subscribe((value) => {
        loggedInSub = value;
    });

</script>

<main>
    <BaseHeader/>
    <Error/>
    {#if loggedInSub === false}
        <Auth/>
    {:else}
        <Feed/>
    {/if}
</main>

