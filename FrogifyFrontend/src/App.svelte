<script>
    import BaseHeader from "./lib/Compontents/BaseHeader.svelte";
    import Auth from "./lib/Compontents/Auth/Auth.svelte";
    import {loggedIn, page} from "./lib/Controler.js";
    import Error from "./lib/Compontents/handling/error/msgBox.svelte";
    import Feed from "./lib/Compontents/Feed/Feed.svelte";
    import {getProfilePicture} from "./lib/Compontents/Feed/FeedManager.js";

    let loggedInSub;
    loggedIn.subscribe((value) => {
        loggedInSub = value;
    });

    let pageSub;
    page.subscribe((value) => {
        pageSub = value;
    });

</script>

<main>
    <BaseHeader/>
    <Error/>
    {#if loggedInSub === false}
        <Auth/>
    {:else}
        {#if pageSub === '/'}
            <Feed/>
        {/if}
    {/if}
</main>

