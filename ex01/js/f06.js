window.scope06 = {};
scope06.displayMDE = function( _event, phrase ) {
        console.log("- this MDE! "+ phrase + " (" 
        + moment(_event["from"]).format("D MMMM YYYY") + " - " 
        + moment(_event["till"]).format("D MMMM YYYY") + " \""
        + _event["title"] + "\") " );
    };