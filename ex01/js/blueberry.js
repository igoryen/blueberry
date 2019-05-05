var Mei = (function (name) {return name;}(Mei || {}));

Mei.Dates = (function () {

    var aAllDates = [
        // {
        //     date: "",
        //     till: "",
        //     title: "",
        //     whathappened: ""
        // },

        {
            date: "1944-5-6",
            till: "1944-5-22",
            title: "Fight for Sevastopol",
            whathappened: "Soviet forces - final attack on Sevastopol with a massive artillery bombardment."
        },

        {
            date: "1941-5-6",
            till: "",
            title: "Stalin is head of government",
            whathappened: "Stalin becomes the chairman of the Council of People's Commissars"
        },
        
        {
            date: "1947-5-7",
            title: "",
            whathappened: "2 years + 1 day after Victory day!"
        },
        {
            date: "1945-5-6",
            till: "1945-5-11",
            title: "The Prague Offensive",
            whathappened: "The USSR troops - 3 Ukrainian Fronts (1st, 2nd, and 4th) - the offensive against the Hitlerites in the capital of Czechoslovakia."
        },
        {
            date: "1945-5-7",
            title: "Nazis surrender",
            whathappened: "Hitlerites signed an unconditional surrender at Allied headquarters in Reims, France, to take effect the following day, ending the European conflict of World War II."
        },
        {
            date: "1942-4-24",
            till: "1942-5-11",
            title: "Kestenga/Kiestinki operation",
            whathappened: "Karelian front - Kestenga (Kiestinki) operation"
        },
        {
            date: "1945-5-1",
            till: "1945-5-9",
            title: "test",
            whathappened: "test"
        },
        {
            date: "1945-5-9",
            title: "title",
            whathappened: "may 9"
        },
        {
            date: '1945-5-9',
            till: '1945-6-1',
            title: 'after war',
            whathappened: 'after war'
        }

    ];

    var hodie = new Date();
    console.log("------- today is day " + hodie.getUTCDate() + " of the current month");

    var today = hodie.getFullYear() + "-" + (hodie.getMonth()+1) + "-" + (hodie.getDate());


    var isToday = function( sDate ) {
        var oDate = dateObjectFromString( sDate );
        // compare the array date object with today's date object

        var monthToday = parseInt(hodie.getMonth()+1);
        var dayToday = parseInt(hodie.getDate());

        var monthThen = parseInt(oDate.getMonth()+1);
        var dayThen = parseInt(oDate.getDate());

        if ( monthToday === monthThen && dayToday  === dayThen ) {
            console.log("+++++++++++++++ " + monthThen + "-" + dayThen + " is today!");
            return true;
        } 
        else {
            console.log("--------------- " + monthThen + "-" + dayThen + " is NOT today...");
            return false;
        }
    };

    var bNotEndedYet = function ( sDate ) {
        var aryDateObject = dateObjectFromString ( sDate );
        
        var monthToday = parseInt(hodie.getMonth()+1);
        var dayToday = parseInt(hodie.getDate());

        var monthThen = parseInt(aryDateObject.getMonth()+1);
        var dayThen = parseInt(aryDateObject.getDate());


        console.log(
            monthToday +" vs "+ monthThen + " and " +
            dayToday +" vs "+ dayThen
        );


        if ( monthToday < monthThen || dayToday < dayThen ) {
            console.log(sDate + ' is still ahead');
            return true;
        }
        else {
            console.log(sDate+ ' is not still ahead');
            return false;
        }
    }

    var dateObjectFromString = function( s ) {
        //console.log("--- arydate" + s);
        var arydate = s.split("-");
        // console.log("--- arydate");

        // create date object from parsed date
        var aryDateObject = new Date( arydate[0], arydate[1]-1, arydate[2]);
        return aryDateObject;
    };

    function compare(x,y) {
        var a = dateObjectFromString(x.date).getTime();
        var b = dateObjectFromString(y.date).getTime();

        if (a < b)
            return -1;
        if (a > b)
            return 1;
        return 0;
    }



    var createDivWithClass = function( word ) {
        var $div = $('<div>').attr('class', word);
        return $div;
    }


    var init = function() {
        $("#date").text(today);
            // var thisday = "2017-5-6";

        $todaysevents = $('#todays-events');
        var aTodaysDates = [];

        for (var i = 0; i < aAllDates.length; i++) {

            if( isToday( aAllDates[i].date ) ) {
                aTodaysDates.push( aAllDates[i] );
            }

            if (!!aAllDates[i].till) {
                var aryDateObject = dateObjectFromString( aAllDates[i].till );

                if( bNotEndedYet(aAllDates[i].till)  ) {
                    aTodaysDates.push( aAllDates[i] );
                }
                if( isToday( aAllDates[i].till ) ) {
                    aTodaysDates.push( aAllDates[i] );
                }
                else {
                    //console.log('oops for all dates');
                }
            }
            
        };


        aTodaysDates.sort(compare);
        // console.log( "---- dates to show: " + aTodaysDates.length);

        // for (var i = aTodaysDates.length - 1; i >= 0; i--) {
        //     console.log(aTodaysDates[i].date);
        // };

        for (var i = 0; i < aTodaysDates.length; i++) {

            if( isToday( aTodaysDates[i].date ) ) {

                console.log(hodie.getMonth() +'vs'+ aryDateObject.getMonth() +' and '
                    + (hodie.getDate()) +'vs'+ aryDateObject.getDate());
                // create container for the date
                var $datecontainer = $('<div>').attr('class','date');
                // create element for the event
                var $yearinthepast = $('<div>').attr('class','past-year').text( dateObjectFromString( aTodaysDates[i].date ).getFullYear());

                var $eventtitle = $('<div>').attr('class','event-title').text(aTodaysDates[i].title);
                console.log(">>> " + $eventtitle);
                var verb = "";
                if(!!aTodaysDates[i].till) {
                    verb = ": begins";
                }
                var $eventonthisdate = $('<div>').attr('class','whathappened').text(aTodaysDates[i].whathappened + verb);

                $datecontainer.append($yearinthepast);
                $datecontainer.append($eventtitle);
                $datecontainer.append($eventonthisdate);

                $todaysevents.append($datecontainer);



                // document.getElementById('yr').innerHTML = aryDateObject.getFullYear();// aryDateObject.getMonth() + " - " + aryDateObject.getDate();
                // document.getElementById('whathappened').innerHTML = aTodaysDates[i].whathappened;

                // console.log(aTodaysDates[i].date + " - " + aTodaysDates[i].whathappened);
            }

            if (!!aTodaysDates[i].till) {
                // console.log('have till: ' + aTodaysDates[i].till);
                //  // parse array date
                //  var tilldate = aTodaysDates[i].till.split("-");
                // create date object from parsed date
                var aryDateObject = dateObjectFromString( aTodaysDates[i].till );
                // if today is earlier than 'till'
                // console.log(hodie.getTime() + " vs " + aryDateObject.getTime());
                if( bNotEndedYet(aTodaysDates[i].till)  ) {

                    
                    // create container for the date
                    var $datecontainer = $('<div>').attr('class','date');
                    // console.log ('~~~~~ class ' + $datecontainer.class);
                    // create element for the event
                    // console.log('YEAR: ' + aryDateObject.getFullYear());
                    var $yearinthepast = $('<div>').attr('class','past-year').text(aryDateObject.getFullYear());

                    var $eventtitle = $('<div>').attr('class','event-title').text( aTodaysDates[i].title + ": continues until " + aTodaysDates[i].till);

                    var $eventonthisdate = $('<div>').attr('class','whathappened').text(aTodaysDates[i].whathappened);

                    $datecontainer.append($yearinthepast, $eventtitle, $eventonthisdate);

                    $todaysevents.append($datecontainer);

                }
                else if( isToday( aTodaysDates[i].till ) ) {
                    
                    // create container for the date
                    var $datecontainer = $('<div>').attr('class','date');
                    // create element for the event
                    var $yearinthepast = $('<div>').attr('class','past-year').text(aryDateObject.getFullYear());

                    var $eventtitle = $('<div>').attr('class','event-title').text(aTodaysDates[i].title + ": ends");

                    var $eventonthisdate = $('<div>').attr('class','whathappened').text(aTodaysDates[i].whathappened);

                    $datecontainer.append($yearinthepast);
                    $datecontainer.append($eventtitle);
                    $datecontainer.append($eventonthisdate);

                    $todaysevents.append($datecontainer);

                }
                else {
                    console.log('oops for todays dates');
                }
            }
            
        };

    };

    return { init: init }

})();


        
window.onload = function () {
    Mei.Dates.init();
            
}
