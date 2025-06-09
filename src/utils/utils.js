function kelvinToFahrenheit(temp) {
    return Math.ceil(1.8 * (temp - 273) + 32).toString()
}

function formatDate(date) {
    const myDateObj = new Date(date)
    return myDateObj.toLocaleDateString("en-US",
        {
        weekday: "long",
        month: "short",
        day: "numeric"
      })

}

export function parseForecastData(data) {

    let retArr = []
    for(const a of data) {
        retArr.push({
        date: formatDate(a.dt),
        temperature: kelvinToFahrenheit(a.main.temp),
        weather: a.weather[0].main,
        description: a.weather[0].description,
        icon: a.weather[0].icon});
    }// End for loop
    return retArr;
}
