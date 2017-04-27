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
            var select1val = jQuery('.select1').val();
            var select2val = jQuery('.select2').val();
            
            console.log(select1val);
            console.log(select2val);
                
                for (var i=0; i<data.length; i++) {
                    if (i && (i % 2 === 0)) {
                        ourPeriod.push(data[i]);
                    };
                };
            
            console.log(ourPeriod);
            
            $(function () {
                    
                var days = [];
                var daysRates = [];

                for (var i=0; i<ourPeriod.length; i++) {
                    days.push(ourPeriod[i].effectiveDate);

                    for (var j=0; j<ourPeriod.length; j++) {
                        daysRates.push(ourPeriod[j].rates[j]);
                    }

                };

                    console.log(days);
                console.log(daysRates);

                        var data1 = [];

                        for (var n=0; n<days.length; n++) {
                            for ( var m=0; m<ourPeriod.length; m++) {
                                if (days[n] == ourPeriod[m].effecitveDate) {
                                    console.log('hmmm');
                                } else {
                                    console.log('yyyym');
                                }
                            };
                        };


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
                                data: []
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

            
            
        }).fail(function(error) {
            alert("error");
        });
    };
    chart();
    
}); // end of DOM                