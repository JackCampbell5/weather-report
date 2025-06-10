function kelvinToFahrenheit(temp) {
    return Math.ceil(1.8 * (temp - 273) + 32).toString()
}

function formatDate(date) {
    const myDateObj = new Date(date * 1000)
    return myDateObj.toLocaleDateString("en-US",
        {
        weekday: "long",
        month: "short",
        day: "numeric",
      })

}
function formatTime(date) {
    const myDateObj = new Date(date*1000)
    return myDateObj.toLocaleTimeString("en-US",
        {
        hour: "numeric"
      })

}

export function parseForecastData(data) {

    let retArr = []
    for(const a of data) {
        if(formatTime(a.dt) === formatTime (data[0].dt)){
        console.log(formatDate(a.dt))
        retArr.push({
        date: formatDate(a.dt),
        temperature: kelvinToFahrenheit(a.main.temp),
        weather: a.weather[0].main,
        description: a.weather[0].description,
        icon: a.weather[0].icon});
        }
    }// End for loop
    return retArr;
}
