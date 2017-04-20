jQuery(document).ready(function(){
    
    
    

    function currenciesAll() {
        
        
        
        $.ajax({
            type: 'GET',
            url: 'https://api.nbp.pl/api/exchangerates/tables/a/',
            dataType: 'json'
        }).done(function(data){
            jQuery.each(data, function(i, item) {
                console.log(data[0].rates);
                var currencies = data[0].rates[1].mid;
                console.log(currencies);
                
            })
        }).fail(function(error){ //... });

        });
        
        var formControl1 = jQuery('.form-control1');
        
        var formControl2 = jQuery('.form-control2');
        
        jQuery('#btn').on('click', function(){
            console.log(formControl1.val());
            console.log(formControl1.val());
        })
    };
    
    currenciesAll();
        
    


        

    
        
            
            

    
    
   

    
    
}); // end of DOM