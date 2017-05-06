//CHART
                
jQuery(document).ready(function(){
    
    function chart() {
    // this function will get currency exchange data from NBP API

        $.ajax({
            type: 'GET',
            url: 'https://api.nbp.pl/api/exchangerates/tables/a/last/30',
            dataType: 'json'

        }).done(function(data){
            
            // var for our choosen period of time
            var ourPeriod = [];
            
            // we would like to push every second day to our period
            for (var i=0; i<data.length; i++) {
                if (i && (i % 2 === 0)) {
                    ourPeriod.push(data[i]);
                };
            };
            
            //console.log(ourPeriod);
            
            // empty arrays for days and daysRates
            var days = [];
            var daysRates = [];
                
            // now using loop we push every second date to days 
            // and every second rates table into days Rates
            for (var i=0; i<ourPeriod.length; i++) {
                days.push(ourPeriod[i].effectiveDate);
                daysRates.push(ourPeriod[i].rates);
            };
                
                
            //console.log(days);
            //console.log(daysRates);
                
            // now we have to create on click event for button exchane
            jQuery('.button1').on('click', function(){
                
                // it will be great to have empty array for particular currency mids
                var daysRatesMid1 = [];
                // this var will holds choosen currency
                var select1val = jQuery('.select1').val();
                // and this one is for index of selectet option
                var midIndex1 = jQuery('.select1 option:selected').index();
                
                //if statement for polski zloty - when index == 0 == polski zloty push 1zl for each of 15 days
                if (midIndex1 == 0) {
                    for (var i=0; i<15; i++) {
                        daysRatesMid1.push(1);
                    }
                // if no!
                } else if (select1val != 'polski złoty') {
                    // we're loop through daysRates ...
                    for (var i=0; i<daysRates.length; i++) {
                        // cause we want to create array from each daysRates [i] ...
                        var dayRatesCurs = Array.from(daysRates[i]);
                        // and push into array mid of choosen currency form each choosen day.
                        // we have to subtract -1 because we add polski zloty to our currencies
                        daysRatesMid1.push(dayRatesCurs[midIndex1 - 1].mid);
                    };
                };
                
                // the same cod for select2
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
                
                // this is code for mdbootstrap chart
                $(function () {

                    var data = {
                        labels: days, // here we're injecting choosen days from var days
                        datasets: [
                            {
                                label: "My First dataset",
                                fillColor: "rgba(220,220,220,0.2)",
                                strokeColor: "rgba(220,220,220,1)",
                                pointColor: "rgba(220,220,220,1)",
                                pointStrokeColor: "#fff",
                                pointHighlightFill: "#fff",
                                pointHighlightStroke: "rgba(220,220,220,1)",
                                data: daysRatesMid1 // and here we're injecting mids of choosen currency in every choosen day
                            },
                            {
                                label: "My Second dataset",
                                fillColor: "rgba(151,187,205,0.2)",
                                strokeColor: "rgba(151,187,205,1)",
                                pointColor: "rgba(151,187,205,1)",
                                pointStrokeColor: "#fff",
                                pointHighlightFill: "#fff",
                                pointHighlightStroke: "rgba(151,187,205,1)",
                                data: daysRatesMid2 // same for second currency choose
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