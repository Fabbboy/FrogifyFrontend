<script>
    import { onMount } from "svelte";
    import BaseHeader from "./lib/compontents/BaseHeader.svelte";
    import Auth from "./lib/compontents/Auth/Auth.svelte";
    import { loggedIn } from "./lib/Controler.js";
    import Error from "./lib/compontents/handling/error/msgBox.svelte";
    import { msgBox } from "./lib/compontents/handling/error/msgBox.js";
</script>

<main>
    <BaseHeader />
    <Error />
    {#if loggedIn === false}
        <Auth />
    {/if}
</main>
