window.scope09 = {};
var filterMDE = scope03.filterMDE;
var filterODE = scope04.filterODE;
var displayMDE = scope06.displayMDE;
var renderDate = scope10.renderDate;

scope09.alla = function (todaysDates) {

    // year separator
    var newYear = "";
    var year_tabs = [];

    for (var i = 0; i < todaysDates.length; i++) {
        var from = moment(todaysDates[i]["from"]);
        var yearFrom = from.format("YYYY");
        // year_tabs.push(yearFrom); // 34
        console.log("------------------- newYear: " + newYear + ", yearFrom: " + yearFrom);

        // if( i = 0 ) {
        //   $yearSeparator = $('<h3>').text(yearFrom);
        // }
        if (newYear != yearFrom) {
            //  $yearSeparator = $('<div class="new-year">').text(yearFrom); TODO
            $yearSeparator = $('<h3>').text(yearFrom);

            $todaysevents.append($yearSeparator);
            console.log("======================== " + yearFrom + " ========================");
            year_tabs.push(yearFrom); // 34
        }

        newYear = yearFrom;

        if (moment(todaysDates[i]["till"]).isValid()) { // it's a many-day event
            // console.log("- Got one MDE");

            switch (filterMDE(todaysDates[i])) {
                //--------------------------------------------------------
                case 51:
                case 52:
                case 53:
                case 54:
                case 55:
                case 56:
                case 57:
                case 58:
                case 59:
                case 61:
                case 62:
                case 63:
                case 64:
                case 65:
                case 66:
                case 67:
                case 68:
                case 69:
                case 71:
                case 72:
                case 73:
                case 74:
                case 75:
                case 76:
                case 77:
                case 78:
                case 79:
                case 81:
                case 82:
                case 83:
                case 84:
                case 85:
                case 86:
                case 87:
                case 88:
                case 89:
                    // console.log("- this MDE is in the future");
                    displayMDE(todaysDates[i], "is still in the future");
                    break;
                    //--------------------------------------------------------
                case 6:
                case 7:
                case 8:
                case 9:
                // case 11:
                case 12:
                case 13:
                case 16:
                case 17:
                case 18:
                case 19:
                case 21:
                case 22:
                case 23:
                case 26:
                case 27:
                case 28:
                case 29:
                case 31:
                case 32:
                case 33:
                case 34:
                case 36:
                case 37:
                case 38:
                case 39:

                    // console.log("case  1: " + display(allDates[i])); 

                    // console.log(monthFrom + "-" + dayFrom + " -> " + thisMonth +"-"+thisDay + " <- " + monthTill + "-" + dayTill);

                    displayMDE(todaysDates[i], "continues today");
                    //  create container for the date
                    renderDate(todaysDates[i], 1);

                    break;
                    //--------------------------------------------------------
                case 1:
                case 2:
                case 3:
                case 4:
                    // console.log("- this MDE is past");
                    displayMDE(todaysDates[i], "is already past");
                    break;
                    //--------------------------------------------------------
                case 5:
                case 15:
                case 25:
                case 35:
                    // console.log("- this MDE ends today");
                    displayMDE(todaysDates[i], "     ends today");

                    //  create container for the date
                    renderDate(todaysDates[i], 2);

                    break;

                case 41:
                case 42:
                case 43:
                case 44:
                case 45:
                case 46:
                case 47:
                case 48:
                case 49:
                    //--------------------------------------------------------
                    displayMDE(todaysDates[i], "   begins today");
                    renderDate(todaysDates[i], 3);
                    break;
            }
        } else {
            switch (filterODE(todaysDates[i])) {
                case 95:
                    //  console.log("case  1: " + display(allDates[i])); 
                    // console.log(monthFrom + "-" + dayFrom + " == " + thisMonth + "-" + thisDay);
                    renderDate(todaysDates[i], 4);
                    break;
            }
        }
    }
    return year_tabs;
};