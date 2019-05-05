$( ".event-title" ).on("click", function(){
            console.log("Hop!");
            

            // $(this).parents("#todays-events").children().children().children().next(".whathappened").slideUp();
            $(this).siblings(".whathappened").slideToggle( function() { });
            return false;
        });

        $( "body").on("click", function(){
            $( ".whathappened" ).slideUp();
        });

        //============== UNFURL ========