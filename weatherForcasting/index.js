const http = require("http");
const fs = require("fs");
let requests = require("requests");
const port = process.env.PORT || 3000;

const homeFile = fs.readFileSync("home.html", "utf-8");
const replaceValue = (tempval, orgval) => {
  let temperature = tempval.replace("{%tempVal%}", orgval.main.temp);
  temperature = temperature.replace("{%tempMinVal%}", orgval.main.temp_min);
  temperature = temperature.replace("{%tempMaxVal%}", orgval.main.temp_max);
  temperature = temperature.replace("{%location%}", orgval.name);
  temperature = temperature.replace("{%country%}", orgval.sys.country);
  temperature = temperature.replace("{%tempStatus%}", orgval.weather[0].main);
  return temperature;
};

const server = http.createServer((req, res) => {
  if ((req.url = "/")) {
    requests(
      "https://api.openweathermap.org/data/2.5/weather?q=abohar&appid=24775e438fa05f0796034c348d690e29"
    )
      .on("data", (chunk) => {
        const objData = JSON.parse(chunk);
        const arrData = [objData];
        // console.log(arrData[0].main.temp);
        const realTimeData = arrData.map(val => replaceValue(homeFile, val)).join("");
        res.write(realTimeData);
      })
      .on("end", (err) => {
        if (err) return console.log(err);
        res.end();
      });
  }
});

server.listen(port, () => {
  console.log(`Server is listening at ${port}`);
});
