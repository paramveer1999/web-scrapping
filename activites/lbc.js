//npm install request
let fs=require("fs");
let cheerio=require("cheerio");
// series id=19322,1187684

let request=require("request");
let seriesId = process.argv[2];
let  commentaryId=process.argv[3];
let url=`https://www.espncricinfo.com/series/${seriesId}/commentary/${commentaryId}/new-zealand-vs-india-3rd-odi-india-in-new-zealand-2019-20`
;
console.log("work start");
request(url,function(err,response,data){
    console.log("###############");
    if(err===null&&response.statusCode===200){
        fs.writeFileSync("index.html",data);
        parseHTML(data);

    }
    else if(response.statusCode===404){
        console.log("##################");
    }
        else{
            console.log(err);
            console.log(response.statuscode);

        }
    

})
//onsole.log("doing other work");
function parseHTML(data){
    //page=>cheerio
    let $=cheerio.load(data);
    //page=>selector pass==>text
    let AllCarr=$(".d-flex.match-comment-padder.align-items-center .match-comment-long-text");
    let text=$(AllCarr[0]).text();

    console.log(text);
    console.log("###############");
}