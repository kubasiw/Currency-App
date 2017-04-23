jQuery(document).ready(function(){
    
    
    
        
        // this function will get currency exchange data from NBP API
        function getData() {
            
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
                    jQuery('tr td:last-child').addClass('rateBox');
                    
                    jQuery('.rateBox').each(function(){
                        for (var j=0; j<dataArray1.length; j++) {
                            var $this = jQuery(this);
                            if (dataArray2[i].mid > dataArray1[i].mid) {
                                $this.addClass('growth');
                            } else if (dataArray2[i].mid < dataArray1[i].mid) {
                                $this.addClass('decrease');
                            } else {
                                $this.addClass('balance');
                            };
                        };
                    });
                    
                };
            }).fail(function(error){ //... });

            });
        };
    
        
    
    
    
        getData();
    
        
          
    
    

    
}); // end of DOM