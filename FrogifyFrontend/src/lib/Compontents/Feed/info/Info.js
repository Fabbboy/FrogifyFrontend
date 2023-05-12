export async function getWeatherData() {
    let weather = [];

    const requestData = {
        plz: "413300",
        days: 3,
    };

    try {
        const response = await fetch("http://localhost:4499/info/weather", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(requestData),
        });

        const data = await response.json();

        if (data.success === true) {
            weather = data.data;
        } else {
            console.log("Error: " + data.message);
        }
    } catch (err) {
        console.log(err);
    }
    console.log(weather);

    return weather;
}

export function createWeatherDay(day) {
    const li = document.createElement("li");
    li.classList.add("weatherLi");

    const div = document.createElement("div");
    div.classList.add("weatherBox");

    const pDay = document.createElement("p");
    pDay.classList.add("weatherDay");
    pDay.textContent = day.date;

    const pRain = document.createElement("p");
    pRain.classList.add("weatherRainMM");
    pRain.textContent = `${day.precipitation}mm`;

    const img = document.createElement("img");
    img.src = day.image;
    img.alt = "weatherSvg";
    img.classList.add("weatherImage");

    const divMin = document.createElement("div");
    divMin.classList.add("weatherTempMin");

    const pMin = document.createElement("p");
    pMin.classList.add("weatherMinP");
    pMin.textContent = day.minTemp;

    const divMax = document.createElement("div");
    divMax.classList.add("weatherTempMax");

    const pMax = document.createElement("p");
    pMax.classList.add("weatherMaxP");
    pMax.textContent = day.maxTemp;

    divMin.appendChild(pMin);
    divMax.appendChild(pMax);

    div.appendChild(pDay);
    div.appendChild(pRain);
    div.appendChild(img);
    div.appendChild(divMin);
    div.appendChild(divMax);

    li.appendChild(div);

    return li;
}

//{
//     "success": true,
//     "message": "Successfully fetched news",
//     "news": [
//         {
//             "date": "21. Apr. 2023",
//             "title": "Spezielle Öffnungszeit der Verwaltung",
//             "link": "https://www.pratteln.ch/_rte/information/1839850",
//             "description": "Am Montag, 1. Mai 2023 ist die Verwaltung den ganzen Tag geschlossen.        \n\nAb Dienstag, 2. Mai 2023 bedienen wir Sie gerne wieder zu den ordentlichen Öffnungszeiten.\n\n \n\nIn Todesfällen\n\nIn..."
//         },
//         {
//             "date": "28. Apr. 2023",
//             "title": "Prattler Rechnung 2022 schliesst positiv ab",
//             "link": "https://www.pratteln.ch/_rte/information/1845395",
//             "description": "Die Jahresrechnung 2022 der Einwohnergemeinde Pratteln weist bei einem Aufwand von CHF 83'423'517 und Erträgen von CHF 84'010'897 einen Ertragsüberschuss von CHF 587'380 aus. Das Budget sah einen Mehr..."
//         },
//         {
//             "date": "27. Apr. 2023",
//             "title": "Start der Schwimmbadsaison auf Anfang Juni verschoben",
//             "link": "https://www.pratteln.ch/_rte/information/1843736",
//             "description": "Der Aufwand für Unterhalt und Gebäudetechnik eines Gartenbads sind gross. Die Vorschriften zu Sicherheit und Kontrollen entsprechend umfangreich. Die Ansprüche der Nutzenden an eine verlässliche Techn..."
//         }
//     ]
// }

function parseDate(dateString) {
    const [day, month, year] = dateString.split(". ");
    const monthNames = {
        "Jan": "01",
        "Feb": "02",
        "Mar": "03",
        "Apr": "04",
        "May": "05",
        "Jun": "06",
        "Jul": "07",
        "Aug": "08",
        "Sep": "09",
        "Oct": "10",
        "Nov": "11",
        "Dec": "12",
    };
    return new Date(`${year}-${monthNames[month]}-${day.padStart(2, "0")}`);
}

export async function getNewsData() {
    let news = [];

    const requestData = {
        amount: 3,
    };

    try {
        const response = await fetch("http://localhost:4499/info/news", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(requestData),
        });

        const data = await response.json();

        if (data.success === true) {
            news = data.news;
            // Sort the news items by date
            news.sort((a, b) => parseDate(a.date) - parseDate(b.date));
        } else {
            console.log("Error: " + data.message);
        }
    } catch (err) {
        console.log(err);
    }

    return news;
}

//<li class="newsIl">
//             <div class="newsItem">
//                 <p class="newsTitle">Einladung zur 3. öffentlichen Mitwirkung REK</p>
//                 <p class="newsInfo">Bereits an zwei öffentlichen Mitwirkungs-Veranstaltungen konnte sich die Bevölkerung ins Räumliche Entwicklungskonzept einbringen und Leitideen und Zukunftsbild von Pratteln gemeinsam diskutieren...</p>
//                 <p class="newsTimestamp">03. Apr. 2023</p>
//             </div>
//         </li>

export function clearData(data) {
    // Remove multiple spaces, tabs, newline, and carriage return characters
    data = data.replace(/\s{2,}/g, " ");

    // Remove any remaining backslashes
    data = data.replace(/\\/g, "");

    // Remove spaces before and after
    data = data.trim();

    return data;
}


export function createNewsItem(news) {
    const li = document.createElement("li");
    li.classList.add("newsIl");

    const a = document.createElement("a");
    a.href = news.link;
    a.target = "_blank";
    a.rel = "noopener noreferrer";
    a.classList.add("newsLink");

    const div = document.createElement("div");
    div.classList.add("newsItem");

    const pTitle = document.createElement("p");
    pTitle.classList.add("newsTitle");
    pTitle.textContent = clearData(news.title);

    const pInfo = document.createElement("p");
    pInfo.classList.add("newsInfo");
    pInfo.textContent = clearData(news.description);

    const pTimestamp = document.createElement("p");
    pTimestamp.classList.add("newsTimestamp");
    pTimestamp.textContent = clearData(news.date);

    div.appendChild(pTitle);
    div.appendChild(pInfo);
    div.appendChild(pTimestamp);

    a.appendChild(div);
    li.appendChild(a);

    return li;
}
