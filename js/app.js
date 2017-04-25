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
                console.log(dataArray1);
//                    console.log(dataArray2);
//                    console.log(currentDate);
            var title = jQuery('.title');
            title.append("<span>" + "last update: " + currentDate + "</span>");

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
            tdMid.addClass('mid');
                
            };
            
            var select1 = jQuery('.select1');
            var select2 = jQuery('.select2');
            
            for (var i=0; i<dataArray2.length; i++) {
                
                select1.append("<option>" + dataArray2[i].currency + " - " + dataArray2[i].code + "</option>");
                select2.append("<option>" + dataArray2[i].currency + " - " + dataArray2[i].code + "</option>");
                
                var option1 = jQuery('.select1 option');
                var option2 = jQuery('.select2 option');
                
                for (var j=0; j<option1.length; j++) {
                    var $this = jQuery(this);
                    if ((dataArray2[i].currency + " - " + dataArray2[i].code) === option1[j].innerText) {
                        console.log(option1[i]);
                    }
                };
            };
            
            
        


        }).fail(function(error){ //... });

        });
    };
    getData();
    
    
        
        
          
    
    

    
}); // end of DOM