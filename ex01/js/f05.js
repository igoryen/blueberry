window.scope05 = {};
scope05.display = function(_case, _event, add) {     

        var retval = 
              "Case " + _case.toString() + ". "
            + ( add ? "Adding: " : "Skipping: ")            
            + moment(_event["from"]).format("MMMM D") 
            + ( moment(_event["till"]).isValid() ?  " - " + moment(_event["till"]).format("MMMM D") : "")
            + ": " + _event["title"];
        console.log( retval );
    };