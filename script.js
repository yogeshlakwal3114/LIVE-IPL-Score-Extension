
const url = "https://api.cricapi.com/v1/currentMatches?apikey=a9152cae-8953-4003-a2a8-13af949567ee&offset=0";

async function getMatchData(){
    return await fetch(url)
        .then(Response => Response.json())
        .then(data => {
            if(data.status != "success"){
                document.querySelector("h2").textContent = " Failed : Unable to fetch the data";
                document.querySelector("a").innerHTML = "Error";
                return;
            }
            else{
                const matchList = data.data;
                console.log(matchList);
            
                if(!matchList)return[];
                else{

                matchList.filter(match => match.series_id == "37fa8107-2df7-4779-81f6-d19969429dfe");
                console.log(matchList);

                document.querySelector("a").innerHTML = "LIVE";

                document.querySelector("h3").textContent = JSON.stringify(matchList[0].name);
                document.querySelector("h4").textContent = JSON.stringify(matchList[0].status);
                
                if(matchList[0].score[0] != [])
                if (matchList[0].score[0].inning == matchList[0].teamInfo[0].name + " Inning 1") {
                    document.querySelectorAll("h5")[0].textContent = (matchList[0].teamInfo[0].shortname);
                    document.querySelectorAll("h5")[1].textContent = (matchList[0].teamInfo[1].shortname);
                    document.querySelectorAll("img")[0].src = (matchList[0].teamInfo[0].img);
                    document.querySelectorAll("img")[1].src = (matchList[0].teamInfo[1].img);
                } else {
                    document.querySelectorAll("h5")[0].textContent = (matchList[0].teamInfo[1].shortname);
                    document.querySelectorAll("h5")[1].textContent = (matchList[0].teamInfo[0].shortname);
                    document.querySelectorAll("img")[0].src = (matchList[0].teamInfo[1].img);
                    document.querySelectorAll("img")[1].src = (matchList[0].teamInfo[0].img);
                }

                document.querySelectorAll("h6")[0].textContent = (matchList[0].score[0].r + "/" + matchList[0].score[0].w + " (" + matchList[0].score[0].o + ")");
                document.querySelectorAll("h6")[1].textContent = (matchList[0].score[1].r + "/" + matchList[0].score[1].w + " (" + matchList[0].score[1].o + ")");
            }
        }
    }).catch(err => console.log(err));
}

getMatchData();


setInterval(getMatchData, 5000);
