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
   var getTodaysDates = scope08.getTodaysDates;
   var alla = scope09.alla;
   var renderDate = scope10.renderDate;
   var selectPhrase = scope11.selectPhrase;








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
        //===========================================================================================================
        // STAGE 1 // 24 
         todaysDates = getTodaysDates(allDates);

        // end of STAGE 1 // 24
        //==============================================================================================================

        console.log( "Finished filtering. Dates to show: " + todaysDates.length);
        // console.log( "typeof " + typeof todaysDates[0])
        console.log('=============================================================================');
        todaysDates.sort(compare);


        

        //  STAGE 2 // 25
        console.log("---- Printing out events");

        // // year separator
        // var newYear = "";

        //====================================================================================
        //  for every event in todaysDates
        var year_tabs = [];
        year_tabs = alla(todaysDates);

        //====================================================================================

        $yeartabs = $("#tabs");

        console.log(year_tabs.length);
        for (var t = 0; t < year_tabs.length; t++) {
           console.log("~~~ " + year_tabs[t])
           // var $onetab = $("<li>").attr("class", "tab");
           var $onetab = $("<a>").attr("href", "#year" + year_tabs[t]).attr("class", "tab").text(year_tabs[t]);
           // $onetab.append($anchor);
           $yeartabs.append($onetab);

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
        var year = $(this).first("h3").text();
        $(this).nextUntil('h3').addBack().wrapAll( "<div id='year" +year+ "' class='year-container' />" );
    });


    $('ul#tabs').each(function(){
      // For each set of tabs, we want to keep track of
      // which tab is active and its associated content
      var $active, $content, $links = $(this).find('a');

      // If the location.hash matches one of the links, use that as the active tab.
      // If no match is found, use the first link as the initial active tab.
      $active = $($links.filter('[href="'+location.hash+'"]')[0] || $links[0]);
      $active.addClass('active');

      $content = $($active[0].hash);

      // Hide the remaining content
      $links.not($active).each(function () {
        $(this.hash).hide();
      });

      // Bind the click event handler
      $(this).on('click', 'a', function(e){
        // Make the old tab inactive.
        $active.removeClass('active');
        $content.hide();

        // Update the variables with the new link and content
        $active = $(this);
        $content = $(this.hash);

        // Make the tab active.
        $active.addClass('active');
        $content.show();

        // Prevent the anchor's default click action
        e.preventDefault();
      });
    });

    $(".event-header").on("click", function() {
      if( $(this).siblings(".whathappened").hasClass("hidden")) {
         $(this).siblings(".whathappened").removeClass("hidden");
         $(this).parents(".date").addClass("opened").siblings().removeClass("opened").find(".whathappened").addClass("hidden")
      }
      else {
         $(this).siblings(".whathappened").addClass("hidden");

      }
    });


           
}

