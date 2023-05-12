<script>
import Info from "./info/Info.svelte";
</script>

<div class="feedHolder">
    <div class="feed">

    </div>
    <Info />
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

    .feed{
        grid-area: Feed;
        background-color: #fff;
        border-radius: 10px;
        width: 90%;
        box-shadow: 0 0 10px 0 rgba(0,0,0,0.2);
        overflow: hidden;
        height: 98%;
    }
</style>