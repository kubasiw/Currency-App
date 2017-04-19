jQuery(document).ready(function(){

    var show = $('.show');

    show.on('click', function() {

        var thisBtn = $(this);

        $.ajax({
            url: 'http://api.nbp.pl/api/exchangerates/rates/c/usd/2016-04-04/?format=json'
            
        }).done(function(response){
            thisBtn.next().html(response).slideDown();
        }).fail(function(error){ //... });

        });
    });

    
    
}); // end of DOM