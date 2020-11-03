//This file work is to get the homepage link and send it to matches .js file 
let cheerio=require("cheerio");

let request=require("request");
const getLink = require("./matches");

let link="https://www.espncricinfo.com/series/_/id/8039/season/2019/icc-cricket-world-cup";

request(link,cb);

function cb(error,response,html){
    
    parseData(html);
}
function parseData(html){

    let ch=cheerio.load(html);
    let half=ch(".widget-items.cta-link a").attr("href");
    let fullink="https://www.espncricinfo.com"+half;
    console.log(fullink);
    getLink(fullink);
    

}