jQuery(document).ready(function(){
    
    function getData() {
    // this function will get currency exchange data from NBP API

        $.ajax({
            type: 'GET',
            url: 'https://api.nbp.pl/api/exchangerates/tables/a/last/2',
            dataType: 'json'

        }).done(function(data){

            // variable with all currencies / its array
            var dataArray1 = data[0].rates;
            var dataArray2 = data[1].rates;
            var currentDate = data[1].effectiveDate;
            
            
            
            // this one injecting current date above the table
            var tableDate = jQuery('.tableDate');
            tableDate.prepend("<span>" + "exchange rates last update: " + currentDate + " by api.nbp.pl" + "</span>");
            // undefined varieble for tr which we create
            var tr;
            // so we have to loop throught this array to get some interesting data
            // and put it to new DOMelements (table)
            for (var i=0; i<dataArray2.length; i++) {
                
                // var tr is new table row, then to each tr we put new lines as follows:
                tr = jQuery('<tr/>');
                tr.append("<th>" + (i+1) + "</th>");
                tr.append("<td>" + dataArray2[i].currency + "</td>");
                tr.append("<td>" + dataArray2[i].code + "</td>");
                tr.append("<td>" + dataArray2[i].mid.toFixed(3) + "</td>");
                // and we place whole created table row in table body:
                jQuery('tbody').append(tr);
                tr.addClass('clickMe');
                // we have to find some elements
                var tdCurr = jQuery('.clickMe td:nth-child(2)');
                var tdCode = jQuery('.clickMe td:nth-child(3)');
                var tdMid = jQuery('.clickMe td:nth-child(4)');
                // because we want to add some classes each of them
                tdCurr.addClass('curr');
                tdCode.addClass('code');
                tdMid.addClass('mid d-flex justify-content-end');
                
            };
            
            // we need to find 2 select elements
            var select1 = jQuery('.select1');
            var select2 = jQuery('.select2');
            // and loop array from nbp
            for (var i=0; i<dataArray2.length; i++) {
                // to inject each currency as a new option od select tag
                select1.append("<option>" + dataArray2[i].currency  + "</option>");
                select2.append("<option>" + dataArray2[i].currency + "</option>");
            };
            
                
            
            //lets creat count function
            function count() {
                // some vars we need:
                var button1 = jQuery('.button1'); //exchane button
                var input = jQuery('input');
                var resultBox = jQuery('.resultBox'); 
                
                // when we click on exchane button:
                button1.on('click', function() {
                    // function will create some empty vars for us
                    var first;
                    var second;
                    var firstCode;
                    var secondCode;
                    var amount = input.val();
                    
                    // we have to loop nbp array once again ...
                    for (var i=0; i<dataArray2.length; i++) {
                        
                        // and when selected currency from option will match curency from nbp, then ...
                        if (select1.val() == dataArray2[i].currency) {
                            // we inject this currency mid (rate) into var first
                            first = (dataArray2[i].mid).toFixed(3);
                            // and this currency code into var firstCode
                            firstCode = (dataArray2[i].code);
                        };
                        
                        /* there's no PLN in nbp api data so we have to create it html
                          with mid(rate) 1 (because we're in Poland)) */
                        if (select1.val() == "złoty polski") {
                            first = 1;
                            firstCode = "PLN";
                        };
                        // the same case as above for second select/option element
                        if (select2.val() == dataArray2[i].currency) {
                            //console.log(dataArray2[i].mid);
                            second = (dataArray2[i].mid).toFixed(3);
                            secondCode = (dataArray2[i].code);
                        };
                        // as above for first select/option
                        if (select2.val() == "złoty polski") {
                            second = 1;
                            secondCode = "PLN";
                        };

                    };
                    
                    // statements for result box we want to appear
                    if (firstCode == secondCode && amount <= 0){
                        
                        resultBox.empty(); // clear element
                        resultBox.addClass('error');
                        resultBox.addClass('resultPar col-12 d-flex flex-column justify-content-around');
                        resultBox.append("<span>" + "Please choose two different currencies." + "</span>");
                        resultBox.append("<span>" + "Make sure that your ammount is > 0" + "</span>");
                    
                    } else if (firstCode == secondCode && amount > 0) {
                        
                        resultBox.empty();
                        resultBox.addClass('error');
                        resultBox.addClass('resultPar col-12 d-flex flex-column justify-content-around');
                        resultBox.append("<span>" + "Please choose two different currencies." + "</span>");
                    
                    } else if (firstCode != secondCode && amount <= 0) {
                        
                        resultBox.empty();
                        resultBox.addClass('error');
                        resultBox.addClass('resultPar col-12 d-flex flex-column justify-content-around');
                        resultBox.append("<span>" + "Make sure that your ammount is > 0" + "</span>")
                        
                    } else {
                        
                        resultBox.empty();
                        resultBox.removeClass('error');
                        resultBox.addClass('resultPar col-12 d-flex flex-column justify-content-around');
                        resultBox.append("<span>" + "For: " + "<span>" + amount + " " + firstCode + "</span>" + "</span>");
                        resultBox.append("<span>" + "Get: " + "<span>" + ((first*amount)/second).toFixed(2) + " " + secondCode + "</span>" + "</span>");
                        jQuery.getScript("chart.js");
                    };

                });
                
                // function for reset button
                function reset() {
                
                    var reset = jQuery('.button2');

                    reset.on('click', function() {
                        resultBox.empty(); // box clearing
                        resultBox.removeClass(); // we remove classes
                        jQuery('input').val(''); // input amount clearing
                        select1.prop('selectedIndex', 0); // and we put into select window ...
                        select2.prop('selectedIndex', 0); // first option element
                    });
                };
                reset();

            };
            count();
            
        }).fail(function(error) {
            alert("error");
        });
    };
    getData();
    
}); // end of DOM