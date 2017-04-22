jQuery(document).ready(function(){
    
    
    
        
        
        function getData() {
            
            $.ajax({
                type: 'GET',
                url: 'https://api.nbp.pl/api/exchangerates/tables/a/',
                dataType: 'json'
                
            }).done(function(data){
                
                var dataArray = data[0].rates;
                    console.log(dataArray);
                    
                var tr;
                for (var i=0; i<dataArray.length; i++) {
                    tr = jQuery('<tr/>');
                    tr.append("<th>" + dataArray[i].index + "</th>");
                    tr.append("<td>" + dataArray[i].currency + "</td>");
                    tr.append("<td>" + dataArray[i].code + "</td>");
                    tr.append("<td>" + dataArray[i].mid + "</td>");
                    jQuery('tbody').append(tr);
                };
                
            }).fail(function(error){ //... });

            });

            
        };
        getData();
          
    
    

    
}); // end of DOM