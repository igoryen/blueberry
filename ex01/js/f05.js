window.scope05 = {};
scope05.display = function(_case, _event, add) {     

        var retval = 
              "Case " + _case.toString() + ". "
            + ( add ? "Adding: " : "Skipping: ")            
            + moment(_event["from"]).format("D MMMM YYYY") 
            + ( moment(_event["till"]).isValid() ?  " - " + moment(_event["till"]).format("D MMMM YYYY") : "")
            + ": " + _event["title"];
        console.log( retval );
    };