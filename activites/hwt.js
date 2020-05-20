//npm install request
let fs=require("fs");
let cheerio=require("cheerio");
// series id=19322,1187684

let request=require("request");
let seriesId = process.argv[2];
let  commentaryId=process.argv[3];
let url=`https://www.espncricinfo.com/series/19322/scorecard/1187684/new-zealand-vs-india-3rd-odi-india-in-new-zealand-2019-20
`;
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
console.log("sending request");
function parseHTML(data){
    //page=>cheerio
    let $=cheerio.load(data);
    //page=>selector pass==>text
    let bowlersArr=$(".table.bowler tbody tr");
    console.log(bowlersArr.length)//length
    for(let i=0;i<bowlersArr.length;i++)
    {
        let name=$($(bowlersArr[i]).find("td")[0]).text();//to find name of bowler inside the bowlersArr which is at o index on our website
        let wickets=$($(bowlersArr[i]).find("td")[4]).text();

        console.log(name+" "+wickets);
    }


    

    
    console.log("###############");
}