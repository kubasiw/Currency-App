//CHART
                
jQuery(document).ready(function(){
    
    function chart() {
    // this function will get currency exchange data from NBP API

        $.ajax({
            type: 'GET',
            url: 'https://api.nbp.pl/api/exchangerates/tables/a/last/30',
            dataType: 'json'

        }).done(function(data){
            
            var ourPeriod = [];
            
                
                for (var i=0; i<data.length; i++) {
                    if (i && (i % 2 === 0)) {
                        ourPeriod.push(data[i]);
                    };
                };
            
            console.log(ourPeriod);
            
            var days = [];
                var daysRates = [];
                

                for (var i=0; i<ourPeriod.length; i++) {
                    days.push(ourPeriod[i].effectiveDate);
                    daysRates.push(ourPeriod[i].rates);
                };
                
                
                console.log(days);
                console.log(daysRates);
                var daysRatesMid = [];
                console.log(daysRatesMid);
                
                jQuery('.button1').on('click', function(){
                    
                    var midIndex = jQuery('.select1 option:selected').index();
                    
                    for (var i=0; i<daysRates.length; i++) {
                        
                        var dayRatesCurs = Array.from(daysRates[i]);
                        //console.log(dayRatesCurs);
                        daysRatesMid.push(dayRatesCurs[midIndex - 1].mid);
                    };
                    
                    $(function () {

                        var data = {
                            labels: days,
                            datasets: [
                                {
                                    label: "My First dataset",
                                    fillColor: "rgba(220,220,220,0.2)",
                                    strokeColor: "rgba(220,220,220,1)",
                                    pointColor: "rgba(220,220,220,1)",
                                    pointStrokeColor: "#fff",
                                    pointHighlightFill: "#fff",
                                    pointHighlightStroke: "rgba(220,220,220,1)",
                                    data: daysRatesMid
                                },
                                {
                                    label: "My Second dataset",
                                    fillColor: "rgba(151,187,205,0.2)",
                                    strokeColor: "rgba(151,187,205,1)",
                                    pointColor: "rgba(151,187,205,1)",
                                    pointStrokeColor: "#fff",
                                    pointHighlightFill: "#fff",
                                    pointHighlightStroke: "rgba(151,187,205,1)",
                                    data: []
                                }
                                ]
                        };

                        var option = {
                            responsive: true,
                        };

                        // Get the context of the canvas element we want to select
                        var ctx = document.getElementById("myChart").getContext('2d');
                        var myLineChart = new Chart(ctx).Line(data, option); //'Line' defines type of the chart.
                    });
                    
                });
            

        }).fail(function(error) {
            alert("error");
        });
    };
    chart();
    
}); // end of DOM                