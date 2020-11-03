let request=require("request");

let cheerio=require("cheerio");

function getLink(fullink)
{

    request(fullink,cb);
}

function cb(error,response,html){
    // console.log(html);
}
module.exports=getLink;