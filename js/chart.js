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
                
                ;
                
                jQuery('.button1').on('click', function(){
                    
                   
                        
                    var daysRatesMid1 = [];

                    var select1val = jQuery('.select1').val();

                    var midIndex1 = jQuery('.select1 option:selected').index();

                    if (midIndex1 == 0) {
                        for (var i=0; i<15; i++) {
                            daysRatesMid1.push(1);
                        }
                        
                    } else if (select1val != 'polski złoty') {

                        for (var i=0; i<daysRates.length; i++) {

                            var dayRatesCurs = Array.from(daysRates[i]);
                            //console.log(dayRatesCurs);
                            daysRatesMid1.push(dayRatesCurs[midIndex1 - 1].mid);
                        };
                    };
                    
                    var daysRatesMid2 = [];
                    
                    var select2val = jQuery('.select2').val();

                    var midIndex2 = jQuery('.select2 option:selected').index();
                    
                    if (midIndex2 == 0) {
                        for (var i=0; i<15; i++) {
                            daysRatesMid2.push(1);
                        }
                    } else if (select1val != 'polski złoty') {

                        for (var i=0; i<daysRates.length; i++) {

                            var dayRatesCurs = Array.from(daysRates[i]);
                            //console.log(dayRatesCurs);
                            daysRatesMid2.push(dayRatesCurs[midIndex2 - 1].mid);
                        };
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
                                    data: daysRatesMid1
                                },
                                {
                                    label: "My Second dataset",
                                    fillColor: "rgba(151,187,205,0.2)",
                                    strokeColor: "rgba(151,187,205,1)",
                                    pointColor: "rgba(151,187,205,1)",
                                    pointStrokeColor: "#fff",
                                    pointHighlightFill: "#fff",
                                    pointHighlightStroke: "rgba(151,187,205,1)",
                                    data: daysRatesMid2
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