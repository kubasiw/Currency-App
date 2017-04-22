jQuery(document).ready(function(){
    
    
    
        
        // this function will get currency exchange data from NBP API
        function getData() {
            
            $.ajax({
                type: 'GET',
                url: 'https://api.nbp.pl/api/exchangerates/tables/a/',
                dataType: 'json'
                
            }).done(function(data){
                
                // variable with all currencies / its array
                var dataArray = data[0].rates;
                    //console.log(dataArray);
                    
                var tr;
                // so we have to loop throught this array to get some interesting data
                // and put it to new DOMelements (table)
                for (var i=0; i<dataArray.length; i++) {
                    tr = jQuery('<tr/>');
                    tr.append("<th>" + (i+1) + "</th>");
                    tr.append("<td>" + dataArray[i].currency + "</td>");
                    tr.append("<td>" + dataArray[i].code + "</td>");
                    tr.append("<td>" + dataArray[i].mid.toFixed(3) + "</td>");
                    jQuery('tbody').append(tr);
                    tr.addClass('clickMe');
                    jQuery('tr td:last-child').addClass('d-flex')
                                              .addClass('justify-content-end');
                    jQuery('tr th:last-child').addClass('d-flex')
                                              .addClass('justify-content-end');
                    
                };
                
                jQuery('.clickMe').on('click', function(){
                    console.log(this);
                });
                
            }).fail(function(error){ //... });

            });
        };
    
        
    
    
    
        getData();
    
        
          
    
    

    
}); // end of DOM