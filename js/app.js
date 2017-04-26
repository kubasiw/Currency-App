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
//                console.log(dataArray1);
//                console.log(dataArray2);
//                console.log(currentDate);
            var tableDate = jQuery('.tableDate');
            tableDate.prepend("<span>" + "exchange rates last update: " + currentDate + " by api.nbp.pl" + "</span>");

            var tr;
            // so we have to loop throught this array to get some interesting data
            // and put it to new DOMelements (table)
            for (var i=0; i<dataArray2.length; i++) {

                tr = jQuery('<tr/>');
                tr.append("<th>" + (i+1) + "</th>");
                tr.append("<td>" + dataArray2[i].currency + "</td>");
                tr.append("<td>" + dataArray2[i].code + "</td>");
                tr.append("<td>" + dataArray2[i].mid.toFixed(3) + "</td>");

                jQuery('tbody').append(tr);
                tr.addClass('clickMe');
                
                
                var tdCurr = jQuery('.clickMe td:nth-child(2)');
                var tdCode = jQuery('.clickMe td:nth-child(3)');
                var tdMid = jQuery('.clickMe td:nth-child(4)');

            tdCurr.addClass('curr');
            tdCode.addClass('code');
            tdMid.addClass('mid d-flex justify-content-end');
                
            };
            
            var select1 = jQuery('.select1');
            var select2 = jQuery('.select2');
            
            for (var i=0; i<dataArray2.length; i++) {
                
                select1.append("<option>" + dataArray2[i].currency + "</option>");
                select2.append("<option>" + dataArray2[i].currency + "</option>");
                
                var option1 = jQuery('.select1 option');
                var option2 = jQuery('.select2 option');
            };
            
            
            
            function count() {
                
                var button1 = jQuery('.button1');
                var input = jQuery('input');
                var resultBox = jQuery('.resultBox');
                
                
                button1.on('click', function() {
                    
                    var first;
                    var second;
                    var firstCode;
                    var secondCode;
                    var amount = input.val();
                    
                    //console.log(amount);
                    
                    //console.log(select1.val());
                    for (var i=0; i<dataArray2.length; i++) {
                        
                        if (select1.val() == dataArray2[i].currency) {
                            //console.log(dataArray2[i].mid);
                            first = (dataArray2[i].mid).toFixed(3);
                            firstCode = (dataArray2[i].code);
                        };
                        
                        if (select1.val() == "złoty polski") {
                            first = 1;
                            firstCode = "PLN";
                        };
                        
                        if (select2.val() == dataArray2[i].currency) {
                            //console.log(dataArray2[i].mid);
                            second = (dataArray2[i].mid).toFixed(3);
                            secondCode = (dataArray2[i].code);
                        };
                        
                        if (select2.val() == "złoty polski") {
                            second = 1;
                            secondCode = "PLN";
                        };

                    };
                    
                    if (firstCode == secondCode && amount <= 0){
                        
                        resultBox.empty();
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
                    };

                });
                
                function reset() {
                
                    var reset = jQuery('.button2');

                    reset.on('click', function() {
                        resultBox.empty();
                        resultBox.removeClass();
                    })
                };
                reset();
                
            };
            count();
            
            
    
            
            
        


        }).fail(function(error){ //... });

        });
    };
    getData();
    
    
        
        
          
    
    

    
}); // end of DOM