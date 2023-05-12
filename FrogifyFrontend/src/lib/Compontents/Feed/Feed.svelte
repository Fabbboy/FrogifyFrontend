<script>
import Info from "./Infos/Info.svelte";
import Posts from "./Posts/Posts.svelte";
</script>

<div class="feedHolder">
    <Info />
    <Posts />
</div>

<style>
    .feedHolder{
        width: 100%;
        height: 680px;
        overflow: hidden;
        position: relative;

        display: grid;
        grid-template-columns: 1.5fr 1.2fr;
        grid-template-rows: 1fr 0.165fr;
        gap: 0px 0px;
        grid-template-areas:
            "Feed infoFeed"
            "Feed .";
        padding-top: 20px;
        padding-left: 10px;
        padding-right: 20px;
    }


</style>