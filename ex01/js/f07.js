window.scope07 = {};
scope07.displayODE = function( _event, phrase ) {
        console.log("- this ODE  (" 
        + moment(_event["from"]).format("D MMMM") + " \""
        + _event["title"] + "\") " + phrase);
    };