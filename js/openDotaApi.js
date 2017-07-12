var wlRequest = new XMLHttpRequest();
wlRequest.open('GET', 'https://api.opendota.com/api/players/93168786/wl?limit=10');

wlRequest.onload = function(){

    var winLoss = JSON.parse(wlRequest.responseText);

    document.getElementById('won-text').innerHTML = winLoss.win;
    document.getElementById('lost-text').innerHTML = winLoss.lose;

    var wins = winLoss.win;
    var losses = winLoss.lose;

    if(wins > losses){

        document.getElementById('win-graph').style.height = "100%";

        var lossesHeight = losses/wins * 100;

        document.getElementById('lose-graph').style.height = lossesHeight + "%";


    } else if(losses > wins){

        document.getElementById('lose-graph').style.height = "100%";

        var winHeight = wins/losses * 100;

        document.getElementById('win-graph').style.height = winHeight + "%";

    } else{

        document.getElementById('win-graph').style.height = "100%";
        document.getElementById('lose-graph').style.height = "100%";

    }

    document.getElementById('win-graph').style.height = winHeight + "%";
    document.getElementById('lose-graph').style.height = lossesHeight + "%";

};

wlRequest.send();
