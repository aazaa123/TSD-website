import $ from "jquery";

const dotaChart = $("#dota-stats-chart");

var doughnutChart = new Chart(dotaChart, {

    type: 'doughnut',
    data: {
        labels: [
            "Win",
            "Loss"
        ],
        datasets: [
            {
                data: [60, 40],
                backgroundColor: [
                    "#d2f9dd",
                    "#333"
                ],
                hoverBackgroundColor: [
                    "#e4fdeb",
                    "#4d4d4d"
                ]
            }
        ]
    },
    options: {

        responsive: false,

        title:{
            display: true,
            text: "Winrate of last 10 games",
            fontColor: "white",
            fontFamily: "Roboto",
            fontSize: 26,
        },

        legend:{
                labels:{
                    fontColor: "white",
                    fontFamily: "Roboto",
                    fontSize: 16,
                },

        },

        tooltips:{
            backgroundColor: "#333",
            bodyFontFamily: "Roboto",
            bodyFontSize: 14,
            bodyFontColor: "#fff"

        },
    }

});
