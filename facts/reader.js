let fs=require("fs");
let cheerio=require("cheerio");
let data=fs.readFileSync("./index.html");

let ch=cheerio.load(data);


let pouterdata=ch("h1").text();
console.log(pouterdata +"");