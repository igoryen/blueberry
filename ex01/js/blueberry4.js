var Mei = (function (name) {return name;}(Mei || {}));

Mei.Dates = (function () {


   var allDates = scope.stories.lines;
   var dateObjectFromString = scope02.dateObjectFromString;
   var compare = scope02b.compare;
   var filterMDE = scope03.filterMDE;
   var filterODE = scope04.filterODE;
   var display = scope05.display;
   var displayMDE = scope06.displayMDE;
   var displayODE = scope07.displayODE;





   // console.log("aaa " + typeof( allDates));
   // console.log( allDates.size );


 

 // THE TESTING
 // var allDates = [
 //     { from: "1942-04-02", till: "1942-04-05", title: "type 1 - past"},
      


 // ];



 // =========================================================================================================

    // function analyzeEvent( warEvent ) {
    //    //  "many-year event" = mye
    //    //  "many-day event" = mde
    //    //  "one-day event" = ode

    //     // var todaysDates = [];

    //     var today = moment();
    //     var thisMonth = today.format("MM");
    //     var thisDay = today.format("DD");

    //     var eventStartDate = moment(warEvent.from);
    //     var eventFullStartDate = eventStartDate.format("YYYY-MM-DD");
    //     var eventStartYear = eventStartDate.format("YYYY");
    //     var eventStartMonth = eventStartDate.format("MMMM");
    //     var eventStartDay = eventStartDate.format("DD");


    //     var eventEndDate = moment(warEvent.till);
    //     var eventFullEndDate = eventEndDate.format("YYYY-MM-DD");
    //     var eventEndYear = eventEndDate.format("YYYY");
    //     var eventEndMonth = eventEndDate.format("MMMM");
    //     var eventEndDay = eventEndDate.format("DD");

    //     var monthFrom = eventStartDate.format("MM");
    //     var dayFrom   = eventStartDate.format("DD");
    //     var monthTill = eventEndDate.format("MM");
    //     var dayTill   = eventEndDate.format("DD");


    //     //  console.log( moment(warEvent.from))//
    //     if( eventEndDate.isValid() ) { // 26
    //         //  mye || mde
            
    //         var durationInYears = eventEndYear - eventStartYear; // 27
    //         // console.log(" typeof durationInYears: " + typeof durationInYears);
    //         if( durationInYears > 0 ) { // e.g. 3 (1941-09-08 ~ 1944-01-27) // 28
    //             //  mye
    //             console.log("---------- mye, " 
    //                 + durationInYears + "y"
    //                 + " " + eventFullStartDate  // 1941-09-08
    //                 + "..."   + eventFullEndDate 
    //                 + " " + warEvent.title ); // 1944-01-27 
                

    //             var dummyStartDate = moment().year(moment().format("YYYY")).month(eventStartMonth).day(eventStartDay); // 29
    //             // console.log("^^^^^^^^^^^^^^^^" + dummyStartDate)
    //             // var dummyEndDate   = moment().year(2000).month(eventEndMonth).day(eventEndDay);


    //            // return 100;
    //            //  print the start date
    //            /*-----------------------------------------------------
    //            |    1. if the many-year event started before today or today
    //            |    i.e. if the -MM-DD of the event's start date are 
    //            |    earlier than or the same as those of today's -MM-DD 
    //            -------------------------------------------------------*/
    //             if( dummyStartDate.diff( moment() ) <= 0 ) { // 1
                    
    //                 /*---------------------------------------------------
    //                 |   1. create a clone of the event where 
    //                 |   2. "from" = eventFullStartDate
    //                 |   3. "till" = moment( eventStartYear, 12, 31)
    //                 |   4. fyc = first year's clone
    //                 |   16. add to array
    //                 -----------------------------------------------------*/
    //                 var wec = JSON.parse(JSON.stringify( warEvent )); // 1

    //                 wec.from = moment(warEvent.from).format("YYYY-MM-DD"); // 2
    //                 wec.till = moment().year(eventStartYear).month(12).day(31); // 3

    //                 console.log(
    //                     "Adding mye. fyc:" 
    //                     + " "  + moment(wec.from).format("YYYY-MM-DD") 
    //                     + "..."  + moment(wec.till).format("YYYY-MM-DD")
    //                     + " " + wec.title );
                    
    //                 todaysDates.push( wec ); // 16
    //             }

    //             /*---------------------------------
    //             |   1. the middle year, the year that gets incremented with every year
    //             |   when creating a new clone
    //             |       the year for the clones of the war event that is in the middle
    //             |   2. for the clone of the event that is the last one
    //             ----------------------------------*/

    //             var _middleDate = eventStartDate.clone(); // 1
    //             var _nextYear = "";
    //            //  var _endDate = eventStartDate;

    //             for (var i = 1; i < durationInYears; i++) {
    //            // console.log( " next "+ eventStartDate.add(1, 'years').format("YYYY")); // 1942, 1943
    //                 /*---------------------------------------------------
    //                 |   1. create a clone of the event where
    //                 |   2. "from" = moment( followingYear, 01, 01)
    //                 |   3. "till" = moment( followingYear, 12, 31)
    //                 |   
    //                 |   
    //                 |   4. wec = war event clone
    //                 |   add to array
    //                 -----------------------------------------------------*/
    //                 var wec = JSON.parse(JSON.stringify( warEvent )); // 1, 4
    //                 followingYear =  _middleDate.add(1, 'years').format("YYYY");
    //                 // console.log("followingYear: " + followingYear);

    //                 // wec.from = moment().year(followingYear).month(0).day(1); // 2
    //                 // wec.till = moment().year(followingYear).month(11).day(30); // 3

    //                 wec.from = moment([followingYear, 0,  1]);
    //                 wec.till = moment([followingYear, 11,31]);

    //                 console.log("Adding mye. myc " + i + "."
    //                     + " "    + moment(wec.from).format("YYYY-MM-DD") 
    //                     + "..."  + moment(wec.till).format("YYYY-MM-DD") 
    //                     + " "    + wec.title);
    //                 todaysDates.push( wec );
                    

    //             };



    //             if(dummyStartDate.diff( moment() ) > 0 ) {
                    
    //                 /*---------------------------------------------------
    //                 |   if the many-year event started after today
    //                 |   i.e. if the -MM-DD of the event's start date are 
    //                 |   later than those of today's -MM-DD
    //                 | 
    //                 |   1. creating a clone of the event where 
    //                 |   "from" = moment( event's last Year, 01, 01)
    //                 |   "till" = eventFullEndDate
    //                 |   2. add to array
    //                 |   4. lyc = last year's clone
    //                 -----------------------------------------------------*/
    //                 var wec = JSON.parse(JSON.stringify( warEvent )); // 1
    //                 wec.from = moment([eventEndYear, 0, 1]); // 2
    //                 wec.till = eventFullEndDate; // 3

    //                 console.log("Adding mye. lyc   " // 4
    //                     + " " + moment(wec.from).format("YYYY-MM-DD") 
    //                     + "..." + moment(wec.till).format("YYYY-MM-DD")
    //                     + " " + wec.title );
    //                 todaysDates.push( wec );
    //                 // 30
    //             }
    //             // 30                
    //         }
    //         else { // 31
    //             //  mde
    //             console.log("---------- mde");


    //            // ~~~~~~~~~~~~~~~~~~~~~~~
    //                 if( monthFrom < thisMonth ) {                              
    //                     if( dayFrom < thisDay ) {        

    //                         if( monthTill < thisMonth ) { //                   
    //                             if(      dayTill <   thisDay ) {  /*return 1; */ } // April 1-8 - April 1-8 (Triple case)
    //                             else if( dayTill === thisDay ) { /*return 2; */ } // April 1-8 - April 9
    //                             else if( dayTill >   thisDay ) { /*return 3; */ } // April 1-8 - April 10-30               
    //                         }
    //                         else if( monthTill === thisMonth ) {           
    //                             if(      dayTill <   thisDay ) { /*return 4; */ } // April 1-8 - May 1-8
    //                             else if( dayTill === thisDay ) { todaysDates.push( warEvent ); display(warEvent, add); } // 5. April 1-8 - May 9
    //                             else if( dayTill >   thisDay ) { todaysDates.push( warEvent ); display(warEvent, add); } // 6. April 1-8 - May 10-30                    
    //                         }
    //                         else if( monthTill > thisMonth ) {              
    //                             if(      dayTill <   thisDay ) { todaysDates.push( warEvent ); display(warEvent, add); } // 7. April 1-8 - June 1-8
    //                             else if( dayTill === thisDay ) { todaysDates.push( warEvent ); display(warEvent, add); } // 8. April 1-8 - June 9
    //                             else if( dayTill >   thisDay ) { todaysDates.push( warEvent ); display(warEvent, add); } // 9. April 1-8 - June 10-30                    
    //                         }
                            
    //                     }
    //                     else if( dayFrom === thisDay ) {  

    //                         if( monthTill < thisMonth ) {     
    //                             if(      dayTill <   thisDay ) { todaysDates.push( warEvent ); display(warEvent, add); } // 11. April 9 - April 1-8
    //                             else if( dayTill === thisDay ) { todaysDates.push( warEvent ); display(warEvent, add); } // 12. April 9 - April 9 (Event X)
    //                             else if( dayTill >   thisDay ) { todaysDates.push( warEvent ); display(warEvent, add); } // 13. April 9 - April 10-30           
    //                         }
    //                         else if( monthTill === thisMonth ) {    
    //                             if(      dayTill <   thisDay ) { todaysDates.push( warEvent ); display(warEvent, add); } // 14. April 9 - May 1-8
    //                             else if( dayTill === thisDay ) { todaysDates.push( warEvent ); display(warEvent, add); } // 15. April 9 - May 9
    //                             else if( dayTill >   thisDay ) { todaysDates.push( warEvent ); display(warEvent, add); } // 16. April 9 - May 10-30           
    //                         }
    //                         else if( monthTill > thisMonth ) {                  
    //                             if(      dayTill <   thisDay ) { todaysDates.push( warEvent ); display(warEvent, add); } // 17. April 9 - June 1-8
    //                             else if( dayTill === thisDay ) { todaysDates.push( warEvent ); display(warEvent, add); } // 18. April 9 - June 9
    //                             else if( dayTill >   thisDay ) { todaysDates.push( warEvent ); display(warEvent, add); } // 19. April 9 - June 10-30               
    //                         }
                            
    //                     }
    //                     else if( dayFrom > thisDay ) {                        

    //                         if( monthTill < thisMonth ) {                       
    //                             if(      dayTill <   thisDay ) { todaysDates.push( warEvent ); display(warEvent, add); } // 21. April 10-30 - April 1-8
    //                             else if( dayTill === thisDay ) { todaysDates.push( warEvent ); display(warEvent, add); } // 22. April 10-30 - April 9
    //                             else if( dayTill >   thisDay ) { /*return 23; */ } // April 10-30 - April 10-30 (Triple-case)
    //                         }
    //                         else if( monthTill === thisMonth ) {
    //                             if(      dayTill <   thisDay ) { /*return 24; */ } // April 10-30 - May 1-8
    //                             else if( dayTill === thisDay ) { todaysDates.push( warEvent ); display(warEvent, add); } // 25. April 10-30 - May 9
    //                             else if( dayTill >   thisDay ) { todaysDates.push( warEvent ); display(warEvent, add); } // 26. April 10-30 - May 10-30
                                
    //                         }
    //                         else if( monthTill > thisMonth ) {              
    //                             if(      dayTill <   thisDay ) { todaysDates.push( warEvent ); display(warEvent, add); } // 27. April 10-30 - June 1-8
    //                             else if( dayTill === thisDay ) { todaysDates.push( warEvent ); display(warEvent, add); } // 28. April 10-30 - June 9
    //                             else if( dayTill >   thisDay ) { todaysDates.push( warEvent ); display(warEvent, add); } // 29. April 10-30 - June 10-30 (Triple case)
    //                         }
                            
    //                     }
                        
    //                 }

    //                 else if( monthFrom === thisMonth ) {
    //                     if( dayFrom < thisDay ) {

    //                         if( monthTill < thisMonth ) {
    //                             if(      dayTill <   thisDay ) { todaysDates.push( warEvent ); display(warEvent, add); } // 31. May 1-8 - April 1-8
    //                             else if( dayTill === thisDay ) { todaysDates.push( warEvent ); display(warEvent, add); } // 32. May 1-8 - April 9
    //                             else if( dayTill >   thisDay ) { todaysDates.push( warEvent ); display(warEvent, add); } // 33. May 1-8 - April 10-30
                                
    //                         }
                            
    //                         else if( monthTill === thisMonth ) {
    //                             if(      dayTill <   thisDay ) { /*return 34; */ } // May 1-8 - May 1-8 (Triple Case)
    //                             else if( dayTill === thisDay ) { todaysDates.push( warEvent ); display(warEvent, add); } // 35. May 1-8 - May 9
    //                             else if( dayTill >   thisDay ) { todaysDates.push( warEvent ); display(warEvent, add); } // 36. May 1-8 - May 10-30
                                
    //                         }
    //                         else if( monthTill > thisMonth ) {
    //                             if(      dayTill <   thisDay ) { todaysDates.push( warEvent ); display(warEvent, add); } // 37. May 1-8 - June 1-8
    //                             else if( dayTill === thisDay ) { todaysDates.push( warEvent ); display(warEvent, add); } // 38. May 1-8 - June 9
    //                             else if( dayTill >   thisDay ) { todaysDates.push( warEvent ); display(warEvent, add); } // 39. May 1-8 - June 10-30
                                
    //                         }
    //                     }
    //                     else if( dayFrom === thisDay ) {

    //                         if( monthTill < thisMonth ) {
    //                             if(      dayTill <   thisDay ) { todaysDates.push( warEvent ); display(warEvent, add); } // 41. May 9 - April 1-8
    //                             else if( dayTill === thisDay ) { todaysDates.push( warEvent ); display(warEvent, add); } // 42. May 9 - April 9
    //                             else if( dayTill >   thisDay ) { todaysDates.push( warEvent ); display(warEvent, add); } // 43. May 9 - April 10-30
                                
    //                         }
    //                         else if( monthTill === thisMonth ) {
    //                             if(      dayTill <   thisDay ) { /*return 44; */ } // May 9 - May 1-8
    //                             else if( dayTill === thisDay ) { /*return 45; */ } // May 9 - May 9 (Event X)
    //                             else if( dayTill >   thisDay ) { todaysDates.push( warEvent ); display(warEvent, add); } // 46. May 9 - May 10-30
                                
    //                         }
    //                         else if( monthTill > thisMonth ) {
    //                             if(      dayTill <   thisDay ) { todaysDates.push( warEvent ); display(warEvent, add); } // 47. May 9 - June 1-8
    //                             else if( dayTill === thisDay ) { todaysDates.push( warEvent ); display(warEvent, add); } // 48. May 9 - June 9
    //                             else if( dayTill >   thisDay ) { todaysDates.push( warEvent ); display(warEvent, add); } // 49. May 9 - June 10-30
                                
    //                         }
                           
    //                     }
    //                     else if( dayFrom > thisDay ) {
    //                         if( monthTill < thisMonth ) {
    //                             if(      dayTill <   thisDay ) { /*return 51; */ } // May 10-30 - April 1-8
    //                             else if( dayTill === thisDay ) { /*return 52; */ } // May 10-30 - April 9
    //                             else if( dayTill >   thisDay ) { /*return 53; */ } // May 10-30 - April 10-30
                                
    //                         }
    //                         else if( monthTill === thisMonth ) {
    //                             if(      dayTill <   thisDay ) { /*return 54; */ } // May 10-30 - May 1-8
    //                             else if( dayTill === thisDay ) { /*return 55; */ } // May 10-30 - May 9
    //                             else if( dayTill >   thisDay ) { /*return 56; */ } // May 10-30 - May 10-30 (Triple case)
                                
    //                         }
    //                         else if( monthTill > thisMonth ) {
    //                             if(      dayTill <   thisDay ) { /*return 57; */ } // May 10-30 - June 1-8
    //                             else if( dayTill === thisDay ) { /*return 58; */ } // May 10-30 - June 9
    //                             else if( dayTill >   thisDay ) { /*return 59; */ } // May 10-30 - June 10-30
                                
    //                         }
                            
    //                     }
                       
    //                 }

    //                 else if( monthFrom > thisMonth ) {
    //                     if( dayFrom < thisDay ) {
    //                         if( monthTill < thisMonth ) {
                                
    //                             if(      dayTill <   thisDay ) { /*return 61; */ } // June 1-8 - April 1-8
    //                             else if( dayTill === thisDay ) { /*return 62; */ } // June 1-8 - April 9
    //                             else if( dayTill >   thisDay ) { /*return 63; */ } // June 1-8 - April 10-30
                                
    //                         }
    //                         else if( monthTill === thisMonth ) {
    //                             if(      dayTill <   thisDay ) { /*return 64; */ } // June 1-8 - May 1-8
    //                             else if( dayTill === thisDay ) { /*return 65; */ } // June 1-8 - May 9
    //                             else if( dayTill >   thisDay ) { /*return 66; */ } // June 1-8 - May 10-30
                                
    //                         }
    //                         else if( monthTill > thisMonth ) {
    //                             if(      dayTill <   thisDay ) { /*return 67; */ } // June 1-8 - June 1-8 (Triple Case)
    //                             else if( dayTill === thisDay ) { /*return 68; */ } // June 1-8 - June 9
    //                             else if( dayTill >   thisDay ) { /*return 69; */ } // June 1-8 - June 10-30
                                
    //                         }
                            
    //                     }
    //                     else if( dayFrom === thisDay ) {
    //                         if( monthTill < thisMonth ) {
    //                             if(      dayTill <   thisDay ) { /*return 71; */ } // June 9 - April 1-8
    //                             else if( dayTill === thisDay ) { /*return 72; */ } // June 9 - April 9
    //                             else if( dayTill >   thisDay ) { /*return 73; */ } // June 9 - April 10-30
                                
    //                         }
    //                         else if( monthTill === thisMonth ) {
    //                             if(      dayTill <   thisDay ) { /*return 74; */ } // June 9 - May 1-8
    //                             else if( dayTill === thisDay ) { /*return 75; */ } // June 9 - May 9
    //                             else if( dayTill >   thisDay ) { /*return 76; */ } // June 9 - May 10-30
                                
    //                         }
    //                         else if( monthTill > thisMonth ) {
    //                             if(      dayTill <   thisDay ) { /*return 77; */ } // June 9 - June 1-8
    //                             else if( dayTill === thisDay ) { /*return 78; */ } // June 9 - June 9 (Event X)
    //                             else if( dayTill >   thisDay ) { /*return 79; */ } // June 9 - June 10-30
                                
    //                         }
                            
    //                     }
    //                     else if( dayFrom > thisDay ) {
    //                         if( monthTill < thisMonth ) {
    //                             if(      dayTill <   thisDay ) { /*return 81; */ } // June 10-30 - April 1-8
    //                             else if( dayTill === thisDay ) { /*return 82; */ } // June 10-30 - April 9
    //                             else if( dayTill >   thisDay ) { /*return 83; */ } // June 10-30 - April 10-30
                                
    //                         }
    //                         else if( monthTill === thisMonth ) {
    //                             if(      dayTill <   thisDay ) { /*return 84; */ } // June 10-30 - May 1-8
    //                             else if( dayTill === thisDay ) { /*return 85; */ } // June 10-30 - May 9
    //                             else if( dayTill >   thisDay ) { /*return 86; */ } // June 10-30 - May 10-30
                                
    //                         }
    //                         else if( monthTill > thisMonth ) {
    //                             if(      dayTill <   thisDay ) { /*return 87; */ } // June 10-30 - June 1-8
    //                             else if( dayTill === thisDay ) { /*return 88; */ } // June 10-30 - June 9
    //                             else if( dayTill >   thisDay ) { /*return 89; */ } // June 10-30 - June 10-30 (Triple case)
                                
    //                         }
                            
    //                     }
                        
    //                 }
    //            // ~~~~~~~~~~~~~~~~~~~~~~~

    //         }
    //     }
    //     else { // 32
    //    //  ode
    //         console.log("---------- ode");

    //         if( monthFrom < thisMonth ) {
    //             if(      dayFrom <   thisDay ) { /*return 91; */ } // April 1-8 
    //             else if( dayFrom === thisDay ) { /*return 92; */ } // April 9 - Happened on this day last month
    //             else if( dayFrom >   thisDay ) { /*return 93; */ } // April 10-30
                
    //         }
    //         else if( monthFrom === thisMonth ) {
    //             if(      dayFrom <   thisDay ) { /*return 94; */ } // May 1-8
    //             else if( dayFrom === thisDay ) { todaysDates.push( warEvent ); display(warEvent, add); } // 95. May 9 - Anniversary!
    //             else if( dayFrom >   thisDay ) { /*return 96; */ } // May 10-30
                
    //         }
    //         else if( monthFrom > thisMonth ) {
    //             if(      dayFrom <   thisDay ) { /*return 97; */ } // June 1-8
    //             else if( dayFrom === thisDay ) { /*return 98; */ } // June 9 - Will happen on this day next month.
    //             else if( dayFrom >   thisDay ) { /*return 99; */ } // June 10-30
                
    //         }
    //     }  

    //     // return todaysDates;
    // }
    
 // =========================================================================================================

 // today 

    var now = moment();
    var thisMonth = now.format("MM");
    var thisDay = now.format("DD");

    var init = function( ) {

        moment.locale('ru');

        var lang = "ru";
        
        $("#date").text(moment().format("D MMMM"));

        $todaysevents = $('#todays-events');
        var todaysDates = [];
        // 21

        // STAGE 1 // 24 

        // for every event in allDates
        for (var i = 0; i < allDates.length; i++) {
            // 1


            // 2

            var today = moment();
            var thisMonth = today.format("MM");
            var thisDay = today.format("DD");

            var eventStartDate = moment(allDates[i]["from"]);
            var eventFullStartDate = eventStartDate.format("YYYY-MM-DD");
            var eventStartYear = eventStartDate.format("YYYY");
            var eventStartMonth = eventStartDate.format("MMMM");
            var eventStartDay = eventStartDate.format("DD");


            var eventEndDate = moment(allDates[i]["till"]);
            var eventFullEndDate = eventEndDate.format("YYYY-MM-DD");
            var eventEndYear = eventEndDate.format("YYYY");
            var eventEndMonth = eventEndDate.format("MMMM");
            var eventEndDay = eventEndDate.format("DD");

            var monthFrom = eventStartDate.format("MM");
            var dayFrom   = eventStartDate.format("DD");
            var monthTill = eventEndDate.format("MM");
            var dayTill   = eventEndDate.format("DD");


            // 3

            if( eventEndDate.isValid() ) {
                //  mye || mde
                

                var durationInYears = eventEndYear - eventStartYear;
                // 22
                
                if( durationInYears > 0 ) { // e.g. 3 (1941-09-08 ~ 1944-01-27)
                    //  mye
                    console.log("- Got a mye, " 
                        + durationInYears + "yrs "
                        + " " + eventFullStartDate  // 1941-09-08
                        + "..."   + eventFullEndDate 
                        + " " + allDates[i]["title"] ); // 1944-01-27 

                    var dummyStartDate = moment().year(moment().format("YYYY")).month(parseInt(eventStartDate.format("MM") - 1)).date(eventStartDay); // 33
                    // 19, 20
                    //  print the start date
                    console.log("~~~~~~ " +dummyStartDate.format("YYYY-MM-DD") + ", diff:"+ dummyStartDate.diff(dummyStartDate) );
                    
                    if( dummyStartDate.diff(dummyStartDate) <= 0 ) { // 5

                        var wec = JSON.parse(JSON.stringify( allDates[i] )); // 6

                        wec["from"] = moment(allDates[i]["from"]).format("YYYY-MM-DD"); // 7
                        wec["till"] = moment().year(eventStartYear).month(11).date(31); // 8
                        wec["truefrom"] = eventFullStartDate;
                        wec["truetill"] = eventFullEndDate;


                        console.log(
                            "Adding mye. fyc:"  // 9
                            + " "  + moment(wec["from"]).format("YYYY-MM-DD") 
                            + "..."  + moment(wec["till"]).format("YYYY-MM-DD")
                            + " >>>>> true-from " + wec["truefrom"]
                            + " " + wec["title"] );
                        todaysDates.push( wec ); // 16

                    }

                    var _middleDate = eventStartDate.clone(); // 10
                    // 11, 12

                    for (var year = 1; year < durationInYears; year++) {
                        // 23
                   
                        var wec = JSON.parse(JSON.stringify( allDates[i] )); // 6, 
                        followingYear =  _middleDate.add(1, 'years').format("YYYY"); 

                        wec["from"] = moment([followingYear, 0,  1]);
                        wec["till"] = moment([followingYear, 11,31]);
                        wec["truefrom"] = eventFullStartDate;
                        wec["truetill"] = eventFullEndDate;


                        console.log("Adding mye. myc " + year + "."
                            + " "    + moment(wec["from"]).format("YYYY-MM-DD") 
                            + "..."  + moment(wec["till"]).format("YYYY-MM-DD") 
                            + " >>>>> true-from " + wec["truefrom"]

                            + " "    + wec["title"]);

                        todaysDates.push( wec ); // 16

                    };



                    // if(dummyStartDate.diff( moment() ) > 0 ) { // 18
                        
                        var wec = JSON.parse(JSON.stringify( allDates[i] )); // 6
                        wec["from"] = moment([eventEndYear, 0, 1]); 
                        wec["till"] = eventFullEndDate;
                        wec["truefrom"] = eventFullStartDate;
                        wec["truetill"] = eventFullEndDate;


                        console.log("Adding mye. lyc   " // 17
                            + " " + moment(wec["from"]).format("YYYY-MM-DD") 
                            + "..." + moment(wec["till"]).format("YYYY-MM-DD")
                            + " >>>>> true-from " + wec["truefrom"]

                            + " " + wec["title"] );
                        todaysDates.push( wec );
                    // }

                }
                else {
                    //  mde
                    console.log("- Got a mde");

                    if( monthFrom < thisMonth ) {
                        // console.log("---------- mde, started last month");
                        if( dayFrom < thisDay ) {        

                            if( monthTill < thisMonth ) { //    
                                // console.log("---------- mde, started before this month & before this day, ended before this month");               
                                if(      dayTill <   thisDay ) { /*return 1; */ }// April 1-8 - April 1-8 (Triple case)
                                else if( dayTill === thisDay ) { /*return 2; */ } // April 1-8 - April 9
                                else if( dayTill >   thisDay ) { /*return 3; */ } // April 1-8 - April 10-30               
                            }
                            else if( monthTill === thisMonth ) {  
                                // console.log("---------- mde, started before this month & before this day, ended this month");           
                                if(      dayTill <   thisDay ) { /*return 4; */ } // April 1-8 - May 1-8
                                else if( dayTill === thisDay ) { todaysDates.push(allDates[i]); display(5, allDates[i], true); } // 5. April 1-8 - May 9
                                else if( dayTill >   thisDay ) { todaysDates.push(allDates[i]); display(6, allDates[i], true); } // 6. April 1-8 - May 10-30                    
                            }
                            else if( monthTill > thisMonth ) {
                                // console.log("---------- mde, started before this month & before this day, ended after this month");  
                                if(      dayTill <   thisDay ) { todaysDates.push(allDates[i]); display(7, allDates[i], true); } // 7. April 1-8 - June 1-8
                                else if( dayTill === thisDay ) { todaysDates.push(allDates[i]); display(8, allDates[i], true); } // 8. April 1-8 - June 9
                                else if( dayTill >   thisDay ) { todaysDates.push(allDates[i]); display(9, allDates[i], true); } // 9. April 1-8 - June 10-30                    
                            }
                            
                        }
                        else if( dayFrom === thisDay ) {  

                            if( monthTill < thisMonth ) {
                                // console.log("---------- mde, started before this month on this day, ended before this month");  
                                if(      dayTill <   thisDay ) { /*todaysDates.push(allDates[i]);*/ display(11, allDates[i], false); } // 11. April 9 - April 1-8
                                else if( dayTill === thisDay ) { todaysDates.push(allDates[i]); display(12, allDates[i], true); } // 12. April 9 - April 9 (Event X)
                                else if( dayTill >   thisDay ) { /*todaysDates.push(allDates[i]); display(13, allDates[i], true);*/ } // 13. April 9 - April 10-30           
                            }
                            else if( monthTill === thisMonth ) {  
                                // console.log("---------- mde, started before this month on this day, ended this month");   
                                if(      dayTill <   thisDay ) { todaysDates.push(allDates[i]); display(14, allDates[i], true); } // 14. April 9 - May 1-8
                                else if( dayTill === thisDay ) { todaysDates.push(allDates[i]); display(15, allDates[i], true); } // 15. April 9 - May 9
                                else if( dayTill >   thisDay ) { todaysDates.push(allDates[i]); display(16, allDates[i], true); } // 16. April 9 - May 10-30           
                            }
                            else if( monthTill > thisMonth ) {      
                                // console.log("---------- mde, started before this month on this day, ended after this month");   
                                if(      dayTill <   thisDay ) { todaysDates.push(allDates[i]); display(17, allDates[i], true); } // 17. April 9 - June 1-8
                                else if( dayTill === thisDay ) { todaysDates.push(allDates[i]); display(18, allDates[i], true); } // 18. April 9 - June 9
                                else if( dayTill >   thisDay ) { todaysDates.push(allDates[i]); display(19, allDates[i], true); } // 19. April 9 - June 10-30               
                            }
                            
                        }
                        else if( dayFrom > thisDay ) {                        

                            if( monthTill < thisMonth ) {   
                                // console.log("---------- mde, started before this month after this day, ended before this month");  

                                if(      dayTill <   thisDay ) { /*todaysDates.push(allDates[i]); display(21, allDates[i], false); */} // 21. April 10-30 - April 1-8
                                else if( dayTill === thisDay ) { /*todaysDates.push(allDates[i]); display(22, allDates[i], false); */ } // 22. April 10-30 - April 9
                                else if( dayTill >   thisDay ) { /*return 23; */ } // April 10-30 - April 10-30 (Triple-case)
                            }
                            else if( monthTill === thisMonth ) {

                                // console.log("---------- mde, started before this month after this day, ended this month");  

                                if(      dayTill <   thisDay ) { /*return 24; */ } // April 10-30 - May 1-8
                                else if( dayTill === thisDay ) { todaysDates.push(allDates[i]); display(25, allDates[i], true); } // 25. April 10-30 - May 9
                                else if( dayTill >   thisDay ) { todaysDates.push(allDates[i]); display(26, allDates[i], true); } // 26. April 10-30 - May 10-30
                                
                            }
                            else if( monthTill > thisMonth ) {
                                // console.log("---------- mde, started before this month after this day, ended after this month");  

                                if(      dayTill <   thisDay ) { todaysDates.push(allDates[i]); display(27,allDates[i], true); } // 27. April 10-30 - June 1-8
                                else if( dayTill === thisDay ) { todaysDates.push(allDates[i]); display(28,allDates[i], true); } // 28. April 10-30 - June 9
                                else if( dayTill >   thisDay ) { todaysDates.push(allDates[i]); display(29,allDates[i], true); } // 29. April 10-30 - June 10-30 (Triple case)
                            }
                            
                        }
                        
                    }

                    else if( monthFrom === thisMonth ) {
                        if( dayFrom < thisDay ) {

                            if( monthTill < thisMonth ) {
                                if(      dayTill <   thisDay ) { todaysDates.push(allDates[i]); display(31,allDates[i], true); } // 31. May 1-8 - April 1-8
                                else if( dayTill === thisDay ) { todaysDates.push(allDates[i]); display(32,allDates[i], true); } // 32. May 1-8 - April 9
                                else if( dayTill >   thisDay ) { todaysDates.push(allDates[i]); display(33,allDates[i], true); } // 33. May 1-8 - April 10-30
                                
                            }
                            
                            else if( monthTill === thisMonth ) {
                                if(      dayTill <   thisDay ) { /*return 34; */ } // May 1-8 - May 1-8 (Triple Case)
                                else if( dayTill === thisDay ) { todaysDates.push(allDates[i]); display(35,allDates[i], true); } // 35. May 1-8 - May 9
                                else if( dayTill >   thisDay ) { todaysDates.push(allDates[i]); display(36,allDates[i], true); } // 36. May 1-8 - May 10-30
                                
                            }
                            else if( monthTill > thisMonth ) {
                                if(      dayTill <   thisDay ) { todaysDates.push(allDates[i]); display(37,allDates[i], true); } // 37. May 1-8 - June 1-8
                                else if( dayTill === thisDay ) { todaysDates.push(allDates[i]); display(38,allDates[i], true); } // 38. May 1-8 - June 9
                                else if( dayTill >   thisDay ) { todaysDates.push(allDates[i]); display(39,allDates[i], true); } // 39. May 1-8 - June 10-30
                                
                            }
                        }
                        else if( dayFrom === thisDay ) {

                            if( monthTill < thisMonth ) {
                                if(      dayTill <   thisDay ) { todaysDates.push(allDates[i]); display(41,allDates[i], true); } // 41. May 9 - April 1-8
                                else if( dayTill === thisDay ) { todaysDates.push(allDates[i]); display(42,allDates[i], true); } // 42. May 9 - April 9
                                else if( dayTill >   thisDay ) { todaysDates.push(allDates[i]); display(43,allDates[i], true); } // 43. May 9 - April 10-30
                                
                            }
                            else if( monthTill === thisMonth ) {
                                if(      dayTill <   thisDay ) { /*return 44; */ } // May 9 - May 1-8
                                else if( dayTill === thisDay ) { /*return 45; */ } // May 9 - May 9 (Event X)
                                else if( dayTill >   thisDay ) { todaysDates.push(allDates[i]); display(46,allDates[i], true); } // 46. May 9 - May 10-30
                                
                            }
                            else if( monthTill > thisMonth ) {
                                if(      dayTill <   thisDay ) { todaysDates.push(allDates[i]); display(47,allDates[i], true); } // 47. May 9 - June 1-8
                                else if( dayTill === thisDay ) { todaysDates.push(allDates[i]); display(48,allDates[i], true); } // 48. May 9 - June 9
                                else if( dayTill >   thisDay ) { todaysDates.push(allDates[i]); display(49,allDates[i], true); } // 49. May 9 - June 10-30
                                
                            }
                           
                        }
                        else if( dayFrom > thisDay ) {
                            if( monthTill < thisMonth ) {
                                if(      dayTill <   thisDay ) { /*return 51; */ } // May 10-30 - April 1-8
                                else if( dayTill === thisDay ) { /*return 52; */ } // May 10-30 - April 9
                                else if( dayTill >   thisDay ) { /*return 53; */ } // May 10-30 - April 10-30
                                
                            }
                            else if( monthTill === thisMonth ) {
                                if(      dayTill <   thisDay ) { /*return 54; */ } // May 10-30 - May 1-8
                                else if( dayTill === thisDay ) { /*return 55; */ } // May 10-30 - May 9
                                else if( dayTill >   thisDay ) { /*return 56; */ } // May 10-30 - May 10-30 (Triple case)
                                
                            }
                            else if( monthTill > thisMonth ) {
                                if(      dayTill <   thisDay ) { /*return 57; */ } // May 10-30 - June 1-8
                                else if( dayTill === thisDay ) { /*return 58; */ } // May 10-30 - June 9
                                else if( dayTill >   thisDay ) { /*return 59; */ } // May 10-30 - June 10-30
                                
                            }
                            
                        }
                       
                    }

                    else if( monthFrom > thisMonth ) {
                        if( dayFrom < thisDay ) {
                            if( monthTill < thisMonth ) {
                                
                                if(      dayTill <   thisDay ) { /*return 61; */ } // June 1-8 - April 1-8
                                else if( dayTill === thisDay ) { /*return 62; */ } // June 1-8 - April 9
                                else if( dayTill >   thisDay ) { /*return 63; */ } // June 1-8 - April 10-30
                                
                            }
                            else if( monthTill === thisMonth ) {
                                if(      dayTill <   thisDay ) { /*return 64; */ } // June 1-8 - May 1-8
                                else if( dayTill === thisDay ) { /*return 65; */ } // June 1-8 - May 9
                                else if( dayTill >   thisDay ) { /*return 66; */ } // June 1-8 - May 10-30
                                
                            }
                            else if( monthTill > thisMonth ) {
                                if(      dayTill <   thisDay ) { /*return 67; */ } // June 1-8 - June 1-8 (Triple Case)
                                else if( dayTill === thisDay ) { /*return 68; */ } // June 1-8 - June 9
                                else if( dayTill >   thisDay ) { /*return 69; */ } // June 1-8 - June 10-30
                                
                            }
                            
                        }
                        else if( dayFrom === thisDay ) {
                            if( monthTill < thisMonth ) {
                                if(      dayTill <   thisDay ) { /*return 71; */ } // June 9 - April 1-8
                                else if( dayTill === thisDay ) { /*return 72; */ } // June 9 - April 9
                                else if( dayTill >   thisDay ) { /*return 73; */ } // June 9 - April 10-30
                                
                            }
                            else if( monthTill === thisMonth ) {
                                if(      dayTill <   thisDay ) { /*return 74; */ } // June 9 - May 1-8
                                else if( dayTill === thisDay ) { /*return 75; */ } // June 9 - May 9
                                else if( dayTill >   thisDay ) { /*return 76; */ } // June 9 - May 10-30
                                
                            }
                            else if( monthTill > thisMonth ) {
                                if(      dayTill <   thisDay ) { /*return 77; */ } // June 9 - June 1-8
                                else if( dayTill === thisDay ) { /*return 78; */ } // June 9 - June 9 (Event X)
                                else if( dayTill >   thisDay ) { /*return 79; */ } // June 9 - June 10-30
                                
                            }
                            
                        }
                        else if( dayFrom > thisDay ) {
                            if( monthTill < thisMonth ) {
                                if(      dayTill <   thisDay ) { /*return 81; */ } // June 10-30 - April 1-8
                                else if( dayTill === thisDay ) { /*return 82; */ } // June 10-30 - April 9
                                else if( dayTill >   thisDay ) { /*return 83; */ } // June 10-30 - April 10-30
                                
                            }
                            else if( monthTill === thisMonth ) {
                                if(      dayTill <   thisDay ) { /*return 84; */ } // June 10-30 - May 1-8
                                else if( dayTill === thisDay ) { /*return 85; */ } // June 10-30 - May 9
                                else if( dayTill >   thisDay ) { /*return 86; */ } // June 10-30 - May 10-30
                                
                            }
                            else if( monthTill > thisMonth ) {
                                if(      dayTill <   thisDay ) { /*return 87; */ } // June 10-30 - June 1-8
                                else if( dayTill === thisDay ) { /*return 88; */ } // June 10-30 - June 9
                                else if( dayTill >   thisDay ) { /*return 89; */ } // June 10-30 - June 10-30 (Triple case)
                                
                            }
                            
                        }
                        
                    }

                }
            }
            else {
                //  ode
                // console.log("---------- ode");

                if( monthFrom < thisMonth ) {
                    if(      dayFrom <   thisDay ) { /*return 91; */ } // April 1-8 
                    else if( dayFrom === thisDay ) { /*return 92; */ } // April 9 - Happened on this day last month
                    else if( dayFrom >   thisDay ) { /*return 93; */ } // April 10-30
                    
                }
                else if( monthFrom === thisMonth ) {
                    if(      dayFrom <   thisDay ) { /*return 94; */ } // May 1-8
                    else if( dayFrom === thisDay ) { todaysDates.push(allDates[i]); display(95,allDates[i], true); } // 95. May 9 - Anniversary!
                    else if( dayFrom >   thisDay ) { /*return 96; */ } // May 10-30
                    
                }
                else if( monthFrom > thisMonth ) {
                    if(      dayFrom <   thisDay ) { /*return 97; */ } // June 1-8
                    else if( dayFrom === thisDay ) { /*return 98; */ } // June 9 - Will happen on this day next month.
                    else if( dayFrom >   thisDay ) { /*return 99; */ } // June 10-30
                    
                }
            }  

            // return todaysDates;

           
        } // end of STAGE 1 // 24

        console.log( "Finished filtering. Dates to show: " + todaysDates.length);
        // console.log( "typeof " + typeof todaysDates[0])
        console.log('=============================================================================');
        todaysDates.sort(compare);




        //  STAGE 2 // 25
        console.log("---- Printing out events");

        // year separator
        var newYear = "";


        //  for every event in todaysDates
        for (var i = 0; i< todaysDates.length; i++) {

                // TTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTT
                var from = moment(todaysDates[i]["from"]);
                var yearFrom = from.format("YYYY");

                if(newYear != yearFrom ) {
                    //  $yearSeparator = $('<div class="new-year">').text(yearFrom); TODO
                    $yearSeparator = $('<h3>').text(yearFrom);

                    $todaysevents.append( $yearSeparator);
                    console.log("======================== " + newYear + " ========================");

                }
                newYear = yearFrom;
                
                //LLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLL

                //TTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTT
            
                if ( moment(todaysDates[i]["till"]).isValid() ) {// it's a many-day event
                    // console.log("- Got one MDE");

                    switch( filterMDE( todaysDates[i] ) ) {
                        //--------------------------------------------------------
                        case 51: case 52: case 53: case 54: case 55: case 56: case 57: case 58: case 59:
                        case 61: case 62: case 63: case 64: case 65: case 66: case 67: case 68: case 69:
                        case 71: case 72: case 73: case 74: case 75: case 76: case 77: case 78: case 79:
                        case 81: case 82: case 83: case 84: case 85: case 86: case 87: case 88: case 89:
                            // console.log("- this MDE is in the future");
                            displayMDE( todaysDates[i], "is still in the future");
                            break; 
                        //--------------------------------------------------------
                                                                     case 6:  case 7:         case 8:  case 9:           
                        /*case 11:*/ case 12: case 13:                   case 16: case 17: case 18: case 19:
                        case 21: case 22: case 23:                   case 26: case 27: case 28: case 29:
                        case 31: case 32: case 33: case 34:          case 36: case 37: case 38: case 39:

                            //  console.log("case  1: " + display(allDates[i])); 

                            // console.log(monthFrom + "-" + dayFrom + " -> " + thisMonth +"-"+thisDay + " <- " + monthTill + "-" + dayTill);

                            displayMDE( todaysDates[i], "continues today");
                            //  create container for the date
                            var $datecontainer = $('<span>').attr('class','date').addClass("continues");
                               //  console.log ('~~~~~ class ' + $datecontainer.class);
                               //  create element for the event
                               //  console.log('YEAR: ' + aryDateObject.getFullYear());
                            var $pastperiod = $('<span>').attr('class','past-year').text("(" + moment(todaysDates[i]["truefrom"]).format("D MMMM YYYY") +" - "+ moment(todaysDates[i]["truetill"]).format("D MMMM YYYY") + ")");
                            var $progress = $('<span>').attr('class','progress');
                                //.text( /*"continues" + " сегодня в " + moment().format("DD MMMM") + moment(todaysDates[i]["from"]).format("YYYY") + " г."*/ );
                            $progress.append( $('<img src="img/continues.gif" />') );
                            
                            
                            //  with link
                            //  var $link = $('<a>').attr("href", todaysDates[i]["link"]);
                            //  $link.text(todaysDates[i]["title"]);
                            //  var $eventtitle = $('<div>').attr('class','event-title').append($link);

                            //  // with no link
                            //  // var $eventtitle = $('<div>').attr('class','event-title').text(todaysDates[i]["title"]);

                            var $where = $('<span>').attr('class', 'geo').text( todaysDates[i]["where"]);

                            if(!!todaysDates[i]["link"]) {
                                var $link = $('<a>').attr("href", todaysDates[i]["link"]).attr("target", "_blank");
                                $link.text(todaysDates[i]["title"]);
                                var $eventtitle = $('<span>').attr('class','event-title').append($link);

                                //======================================
                                //======================================



                            }
                            else {
                                //  with no link
                                var $eventtitle = $('<span>').attr('class','event-title').text(todaysDates[i]["title"]);

                                //======================================
                                //======================================
                            }

                            var $lnk = $('<a>').attr("href", todaysDates[i]["link"]).attr("target", "_blank");
                            $lnk.text("Источник");

                            var $eventonthisdate = $('<span>').attr('class','whathappened').text(todaysDates[i]["desc"]);

                            var $country = $('<span>').attr('class', 'coa ' + todaysDates[i]["country"]).attr('title', todaysDates[i]["country"]);
                            var $province = $('<span>').attr('class', 'coa p-' + todaysDates[i]["province"]).attr('title', todaysDates[i]["province"]);
                            var $locality = $('<span>').attr('class', 'coa l-' + todaysDates[i]["locality"]).attr('title', todaysDates[i]["locality"]);

                            $eventonthisdate.append($lnk);

                            $datecontainer.append($progress);
                            
                            $datecontainer.append($country);
                            $datecontainer.append($province);
                            $datecontainer.append($locality);
                            
                            // $datecontainer.append($where);

                            $datecontainer.append( $eventtitle);
                            
                            $datecontainer.append($pastperiod);
                            $datecontainer.append($eventonthisdate);
                            $todaysevents.append($datecontainer);
                            break;
                        //--------------------------------------------------------
                        case 1: case 2: case 3: case 4:
                            // console.log("- this MDE is past");
                            displayMDE(todaysDates[i], "is already past");
                            break;
                        //--------------------------------------------------------
                        case 5: case 15:  case 25: case 35:
                            // console.log("- this MDE ends today");
                            displayMDE(todaysDates[i], "     ends today");

                            //  create container for the date
                            var $datecontainer = $('<span>').attr('class','date').addClass("ends");
                            //  create element for the event
                            var $pastperiod = $('<span>').attr('class','past-year').text(">>>" + moment(todaysDates[i]["truefrom"]).format("D MMMM YYYY") +" - >>>>> "+ moment(todaysDates[i]["truetill"]).format("D MMMM YYYY"));
                            //  var $eventtitle = $('<div>').attr('class','event-title').text(todaysDates[i]["title"] + ": ends");
                            var $progress = $('<span>').attr('class','progress');
                            $progress.append( $('<img src="img/end.png" />') );
                            //.text("the last day of" /*+ " сегодня в " + moment(todaysDates[i]["till"]).format("YYYY") + " г." */);
                            var $where = $('<span>').attr('class', 'geo').text( todaysDates[i]["where"]);
                            if(!!todaysDates[i]["link"]) {
                                var $link = $('<a>').attr("href", todaysDates[i]["link"]).attr("target", "_blank");
                                $link.text(todaysDates[i]["title"]);
                                var $eventtitle = $('<span>').attr('class','event-title').append($link);
                            }
                            else {
                                //  with no link
                                var $eventtitle = $('<span>').attr('class','event-title').text(todaysDates[i]["title"]);
                            }

                            var $country = $('<span>').attr('class', 'coa ' + todaysDates[i]["country"]).attr('title', todaysDates[i]["country"]);
                            var $province = $('<span>').attr('class', 'coa p-' + todaysDates[i]["province"]).attr('title', todaysDates[i]["province"]);
                            var $locality = $('<span>').attr('class', 'coa l-' + todaysDates[i]["locality"]).attr('title', todaysDates[i]["locality"]);

                            
                            $datecontainer.append($progress);

                            $datecontainer.append($country);
                            $datecontainer.append($province);
                            $datecontainer.append($locality);

                            // $datecontainer.append($where);
                            $datecontainer.append($eventtitle);
                            
                            $datecontainer.append($pastperiod);
                                                
                            
                            


                            var $lnk = $('<a>').attr("href", todaysDates[i]["link"]).attr("target", "_blank");
                            $lnk.text("Источник");
                            var $eventonthisdate = $('<span>').attr('class','whathappened').text(todaysDates[i]["desc"]);

                            if(!!todaysDates[i]["result"]) {
                                var $eventresult = $('<span>').attr('class','event-result').text(" Result: " +todaysDates[i]["result"]);
                                // $datecontainer.append($eventresult);
                                $eventonthisdate.append($eventresult).append($lnk);
                            }
                            $datecontainer.append($eventonthisdate);

                            $todaysevents.append($datecontainer);
                            break;

                        case 41: case 42: case 43: case 44: case 45: case 46: case 47: case 48: case 49:
                            //--------------------------------------------------------
                            displayMDE( todaysDates[i], "   begins today");
                            var $datecontainer = $('<span>').attr('class','date').addClass("begins");
                            //  create element for the event
                            var $pastperiod = $('<span>').attr('class','past-year').text( "%%%%% " + from.format("D MMMM YYYY"));

                            var $progress = $('<span>').attr('class','progress');//.text("the first day of" /* + "сегодня в " + from.format("YYYY") + " г." */);
                            $progress.append( $('<img src="img/start.png" />') );
                            //  with link
                            //  console.log("------" + !!todaysDates[i]["link"])
                            if(!!todaysDates[i]["link"]) {
                                var $link = $('<a>').attr("href", todaysDates[i]["link"]).attr("target", "_blank");
                                $link.text(todaysDates[i]["title"]);
                                var $eventtitle = $('<span>').attr('class','event-title').append($link);
                            }
                            else {
                                //  with no link
                                var $eventtitle = $('<span>').attr('class','event-title').text(todaysDates[i]["title"]);
                            }
                            
                            var $lnk = $('<a>').attr("href", todaysDates[i]["link"]).attr("target", "_blank");
                            $lnk.text("Источник");
                            
                            var $eventonthisdate = $('<span>').attr('class','whathappened').text(todaysDates[i]["desc"]);

                            var $where = $('<span>').attr('class', 'geo').text( todaysDates[i]["where"]);

                            var $country = $('<span>').attr('class', 'coa ' + todaysDates[i]["country"]).attr('title', todaysDates[i]["country"]);
                            var $province = $('<span>').attr('class', 'coa p-' + todaysDates[i]["province"]).attr('title', todaysDates[i]["province"]);
                            var $locality = $('<span>').attr('class', 'coa l-' + todaysDates[i]["locality"]).attr('title', todaysDates[i]["locality"]);

                            $eventonthisdate.append($lnk);

                            $datecontainer.append($progress);

                            $datecontainer.append($country);
                            $datecontainer.append($province);
                            $datecontainer.append($locality);

                            // $datecontainer.append($where);

                            $datecontainer.append($eventtitle);
                            
                            $datecontainer.append($pastperiod); 
                            
                                               
                            
                            $datecontainer.append($eventonthisdate);

                            $todaysevents.append($datecontainer);
                            break;
                            
                    }
                }
                else {
                    switch( filterODE(todaysDates[i] ) ) {
                        case 95: 
                            //  console.log("case  1: " + display(allDates[i])); 
                            console.log(monthFrom + "-" + dayFrom + " == " + thisMonth +"-"+thisDay );

                            console.log(todaysDates[i]["title"] + " Happens today");
                            //  create container for the date
                            var $datecontainer = $('<span>').attr('class','date').addClass("today");
                            //  console.log ('~~~~~ class ' + $datecontainer.class);
                            //  create element for the event
                            //  console.log('YEAR: ' + aryDateObject.getFullYear());
                            var $pastperiod = $('<span>').attr('class','past-year').text( ">>>>> " + from.format("D MMMM YYYY"));
                            var $progress = $('<span>').attr('class','progress');
                            // .text( "today " /*+ from.format("YYYY") + " г."*/);
                            $progress.append( $('<img src="img/today.png" />') );
                            
                            //  with link
                            //  var $link = $('<a>').attr("href", todaysDates[i]["link"]);
                            //  $link.text(todaysDates[i]["title"]);
                            //  var $eventtitle = $('<div>').attr('class','event-title').append($link);

                            //  // with no link
                            //  // var $eventtitle = $('<div>').attr('class','event-title').text(todaysDates[i]["title"]);

                            var $where = $('<span>').attr('class', 'geo').text( todaysDates[i]["where"]);


                            var $srclnk = $('<a>').attr("href", todaysDates[i]["link"]).attr("target", "_blank");
                            $srclnk.text("Источник");

                            var $eventonthisdate = $('<span>').attr('class','whathappened').text(todaysDates[i]["desc"]);


                            if(!!todaysDates[i]["link"]) {
                                var $link = $('<a>').attr("href", todaysDates[i]["link"]).attr("target", "_blank");
                                $link.text(todaysDates[i]["title"]);
                                var $eventtitle = $('<span>').attr('class','event-title').append($link);
                                $eventonthisdate.append($eventresult).append($srclnk);
                            }
                            else {
                            //  with no link
                                var $eventtitle = $('<span>').attr('class','event-title').text(todaysDates[i]["title"]);
                            }

                            

                            var $country = $('<span>').attr('class', 'coa ' + todaysDates[i]["country"]).attr('title', todaysDates[i]["country"]);
                            var $province = $('<span>').attr('class', 'coa p-' + todaysDates[i]["province"]).attr('title', todaysDates[i]["province"]);
                            var $locality = $('<span>').attr('class', 'coa l-' + todaysDates[i]["locality"]).attr('title', todaysDates[i]["locality"]);
                            
                            // The order of presentation
                            $datecontainer.append( $progress );

                            $datecontainer.append($country);
                            $datecontainer.append($province);
                            $datecontainer.append($locality);

                            // $datecontainer.append($where);

                            $datecontainer.append( $eventtitle );
                            $datecontainer.append( $pastperiod );
                            $datecontainer.append( $eventonthisdate );

                            $todaysevents.append($datecontainer);
                            break;
                    }
                }
                
                //LLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLL
        }


        // codectomy 01




        
    };

        

    return { init: init }

})();

window.onload = function () {
    // Mei.Events.init();            

    Mei.Dates.init();
    $('h3').each(function(){
        console.log("wrap all works");
        $(this).nextUntil('h3').wrapAll( "<div class='year-container' />" );
    });


            
}

