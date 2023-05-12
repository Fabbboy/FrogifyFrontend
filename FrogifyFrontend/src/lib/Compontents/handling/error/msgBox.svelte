<div class="msgBox" id="msgBox">
    <p class="MsgTitle" id="MsgTitle"></p>
    <p class="MsgContent" id="MsgContent"></p>
</div>

<script>
    import { msgBox } from "./msgBox.js";
</script>

<style>
    .msgBox {
        position: fixed;
        top: 25px;
        right: 0;
        width: 300px;
        background-color: #464646;
        border-radius: 8px;
        border-left: 5px solid #00A1FF;
        box-shadow: 2px 2px 10px #000;
        transform: translate(100%, 0);
        transition: transform 0.5s;
        padding: 10px; /* add some padding for extra space */
        height: auto; /* remove fixed height */
    }

    .MsgTitle{
        font-size: 20px;
        font-weight: bold;
        color: white;
        margin: 0;
        margin-left: 4px;
        margin-top: 2px;
    }

    .MsgContent{
        font-size: 15px;
        color: white;
        margin: 0;
        margin-left: 4px;
        margin-top: 0px;
    }
</style>
