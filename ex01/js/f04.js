window.scope04 = {};
scope04.filterODE = function(theEvent ) {
        var today = moment();
        var thisMonth = today.format("MM");
        var thisDay = today.format("DD");

        //------------------------------------
        // Taken from analyzeEvent
        var today = moment();
        var thisMonth = today.format("MM");
        var thisDay = today.format("DD");

        var eventStartDate = moment(theEvent["from"]);
        var eventFullStartDate = eventStartDate.format("YYYY-MM-DD");
        var eventStartYear = eventStartDate.format("YYYY");
        var eventStartMonth = eventStartDate.format("MMMM");
        var eventStartDay = eventStartDate.format("DD");


        var eventEndDate = moment(theEvent["till"]);
        var eventFullEndDate = eventEndDate.format("YYYY-MM-DD");
        var eventEndYear = eventEndDate.format("YYYY");
        var eventEndMonth = eventEndDate.format("MMMM");
        var eventEndDay = eventEndDate.format("DD");

        var monthFrom = eventStartDate.format("MM");
        var dayFrom   = eventStartDate.format("DD");
        var monthTill = eventEndDate.format("MM");
        var dayTill   = eventEndDate.format("DD");
        //------------------------------------


        if( monthFrom < thisMonth ) {
            if(      dayFrom <   thisDay ) { return 91; } // April 1-8 
            else if( dayFrom === thisDay ) { return 92; } // April 9 - Happened on this day last month
            else if( dayFrom >   thisDay ) { return 93; } // April 10-30
            
        }
        else if( monthFrom === thisMonth ) {
            if(      dayFrom <   thisDay ) { return 94; } // May 1-8
            else if( dayFrom === thisDay ) { return 95; } // May 9 - Anniversary!
            else if( dayFrom >   thisDay ) { return 96; } // May 10-30
            
        }
        else if( monthFrom > thisMonth ) {
            if(      dayFrom <   thisDay ) { return 97; } // June 1-8
            else if( dayFrom === thisDay ) { return 98; } // June 9 - Will happen on this day next month.
            else if( dayFrom >   thisDay ) { return 99; } // June 10-30
            
        }

    };
