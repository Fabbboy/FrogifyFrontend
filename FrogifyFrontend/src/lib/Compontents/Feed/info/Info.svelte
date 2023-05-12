<script>
    import { createWeatherDay, getWeatherData, getNewsData, createNewsItem } from "./Info.js";

    async function renderWeatherData() {
        const weatherData = await getWeatherData();
        for (let i = 0; i < weatherData.length; i++) {
            const weatherDay = createWeatherDay(weatherData[i]);
            const list = document.getElementById("weatherUl");
            list.appendChild(weatherDay);
        }
    }

    renderWeatherData();

    async function renderNewsData() {
        const newsData = await getNewsData();
        for (let i = 0; i < newsData.length; i++) {
            const newsItem = createNewsItem(newsData[i]);
            const list = document.getElementById("newsUl");
            list.appendChild(newsItem);
        }
    }

    renderNewsData();


</script>


<div class="infos">
    <div class="infoTitleBox">
        <p class="infoTitle">Informationen</p>
    </div>
    <ul class="weatherUl" id="weatherUl"></ul>

    <hr class="breakLine1">

    <ul class="newsUl" id="newsUl"></ul>
</div>
<style>
    @import "weatherStyles.css";
    @import "newsStyles.css";
    .infoTitleBox{
        width: 95%;
        height: 50px;
        background-color: #292A2F;
        border-radius: 10px;
        box-shadow: 0 0 10px 0 rgba(0,0,0,0.2);
        color: #fff;
        margin-left: 10px;
        margin-top: 10px;
        margin-bottom: 10px;
        padding-left: 10px;
        justify-content: left;
        align-items: center;
        display: flex;
    }

    .infoTitle{
        font-size: 25px;
        font-weight: bolder;
    }

    .infos{
        grid-area: infoFeed;
        background-color: #464646;
        border-radius: 10px;
        width: 97%;
        margin-right: 100px;
        box-shadow: 2px 2px 10px 0 rgba(0,0,0,0.2);
        overflow: hidden;
    }

    .weatherUl{
        list-style-type: none;
        margin: 0;
        padding: 10px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .breakLine1{
        width: 96%;
        height: 5px;
        background-color: #292A2F;
        border-radius: 10px;
        border: none;
        margin-top: 0px;
    }
</style>