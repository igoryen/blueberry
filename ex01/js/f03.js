window.scope03 = {};
scope03.filterMDE = function(theEvent ) {
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


    /* ----------------------------------------------------
    Event X - a multi-day event that starts and ends on the same on another year.
    Triple case: e.g. 
        1) "April 1 - April 8"
        2) "April 8 - April 1"
        3) "April 8 - April 8" (with difference of 1 or more years)
    -----------------------------------------------------*/

    //  If today is MAY 9 (V-day!)
    if( monthFrom < thisMonth ) {                              
        if( dayFrom < thisDay ) {        

            if( monthTill < thisMonth ) { //                   
                if(      dayTill <   thisDay ) { return 1; } // April 1-8 - April 1-8 (Triple case)
                else if( dayTill === thisDay ) { return 2; } // April 1-8 - April 9
                else if( dayTill >   thisDay ) { return 3; } // April 1-8 - April 10-30               
            }
            else if( monthTill === thisMonth ) {           
                if(      dayTill <   thisDay ) { return 4; } // April 1-8 - May 1-8
                else if( dayTill === thisDay ) { return 5; } // April 1-8 - May 9
                else if( dayTill >   thisDay ) { return 6; } // April 1-8 - May 10-30                    
            }
            else if( monthTill > thisMonth ) {              
                if(      dayTill <   thisDay ) { return 7; } // April 1-8 - June 1-8
                else if( dayTill === thisDay ) { return 8; } // April 1-8 - June 9
                else if( dayTill >   thisDay ) { return 9; } // April 1-8 - June 10-30                    
            }
            
        }
        else if( dayFrom === thisDay ) {  

            if( monthTill < thisMonth ) {     
                if(      dayTill <   thisDay ) { return 11; } // April 9 - April 1-8
                else if( dayTill === thisDay ) { return 12; } // April 9 - April 9 (Event X)
                else if( dayTill >   thisDay ) { return 13; } // April 9 - April 10-30           
            }
            else if( monthTill === thisMonth ) {    
                if(      dayTill <   thisDay ) { return 14; } // April 9 - May 1-8
                else if( dayTill === thisDay ) { return 15; } // April 9 - May 9
                else if( dayTill >   thisDay ) { return 16; } // April 9 - May 10-30           
            }
            else if( monthTill > thisMonth ) {                  
                if(      dayTill <   thisDay ) { return 17; } // April 9 - June 1-8
                else if( dayTill === thisDay ) { return 18; } // April 9 - June 9
                else if( dayTill >   thisDay ) { return 19; } // April 9 - June 10-30               
            }
            
        }
        else if( dayFrom > thisDay ) {                        

            if( monthTill < thisMonth ) {                       
                if(      dayTill <   thisDay ) { return 21; } // April 10-30 - April 1-8
                else if( dayTill === thisDay ) { return 22; } // April 10-30 - April 9
                else if( dayTill >   thisDay ) { return 23; } // April 10-30 - April 10-30 (Triple-case)
            }
            else if( monthTill === thisMonth ) {
                if(      dayTill <   thisDay ) { return 24; } // April 10-30 - May 1-8
                else if( dayTill === thisDay ) { return 25; } // April 10-30 - May 9
                else if( dayTill >   thisDay ) { return 26; } // April 10-30 - May 10-30
                
            }
            else if( monthTill > thisMonth ) {              
                if(      dayTill <   thisDay ) { return 27; } // April 10-30 - June 1-8
                else if( dayTill === thisDay ) { return 28; } // April 10-30 - June 9
                else if( dayTill >   thisDay ) { return 29; } // April 10-30 - June 10-30 (Triple case)
            }
            
        }
        
    }

    else if( monthFrom === thisMonth ) {
        if( dayFrom < thisDay ) {

            if( monthTill < thisMonth ) {
                if(      dayTill <   thisDay ) { return 31; } // May 1-8 - April 1-8
                else if( dayTill === thisDay ) { return 32; } // May 1-8 - April 9
                else if( dayTill >   thisDay ) { return 33; } // May 1-8 - April 10-30
                
            }
            
            else if( monthTill === thisMonth ) {
                if(      dayTill <   thisDay ) { return 34; } // May 1-8 - May 1-8 (Triple Case)
                else if( dayTill === thisDay ) { return 35; } // May 1-8 - May 9
                else if( dayTill >   thisDay ) { return 36; } // May 1-8 - May 10-30
                
            }
            else if( monthTill > thisMonth ) {
                if(      dayTill <   thisDay ) { return 37; } // May 1-8 - June 1-8
                else if( dayTill === thisDay ) { return 38; } // May 1-8 - June 9
                else if( dayTill >   thisDay ) { return 39; } // May 1-8 - June 10-30
                
            }
        }
        else if( dayFrom === thisDay ) {

            if( monthTill < thisMonth ) {
                if(      dayTill <   thisDay ) { return 41; } // May 9 - April 1-8
                else if( dayTill === thisDay ) { return 42; } // May 9 - April 9
                else if( dayTill >   thisDay ) { return 43; } // May 9 - April 10-30
                
            }
            else if( monthTill === thisMonth ) {
                if(      dayTill <   thisDay ) { return 44; } // May 9 - May 1-8
                else if( dayTill === thisDay ) { return 45; } // May 9 - May 9 (Event X)
                else if( dayTill >   thisDay ) { return 46; } // May 9 - May 10-30
                
            }
            else if( monthTill > thisMonth ) {
                if(      dayTill <   thisDay ) { return 47; } // May 9 - June 1-8
                else if( dayTill === thisDay ) { return 48; } // May 9 - June 9
                else if( dayTill >   thisDay ) { return 49; } // May 9 - June 10-30                    
            }
           
        }
        else if( dayFrom > thisDay ) {
            if( monthTill < thisMonth ) {
                if(      dayTill <   thisDay ) { return 51; } // May 10-30 - April 1-8
                else if( dayTill === thisDay ) { return 52; } // May 10-30 - April 9
                else if( dayTill >   thisDay ) { return 53; } // May 10-30 - April 10-30
                
            }
            else if( monthTill === thisMonth ) {
                if(      dayTill <   thisDay ) { return 54; } // May 10-30 - May 1-8
                else if( dayTill === thisDay ) { return 55; } // May 10-30 - May 9
                else if( dayTill >   thisDay ) { return 56; } // May 10-30 - May 10-30 (Triple case)
                
            }
            else if( monthTill > thisMonth ) {
                if(      dayTill <   thisDay ) { return 57; } // May 10-30 - June 1-8
                else if( dayTill === thisDay ) { return 58; } // May 10-30 - June 9
                else if( dayTill >   thisDay ) { return 59; } // May 10-30 - June 10-30
                
            }                
        }           
    }

    else if( monthFrom > thisMonth ) {
        if( dayFrom < thisDay ) {
            if( monthTill < thisMonth ) {
                
                if(      dayTill <   thisDay ) { return 61; } // June 1-8 - April 1-8
                else if( dayTill === thisDay ) { return 62; } // June 1-8 - April 9
                else if( dayTill >   thisDay ) { return 63; } // June 1-8 - April 10-30
                
            }
            else if( monthTill === thisMonth ) {
                if(      dayTill <   thisDay ) { return 64; } // June 1-8 - May 1-8
                else if( dayTill === thisDay ) { return 65; } // June 1-8 - May 9
                else if( dayTill >   thisDay ) { return 66; } // June 1-8 - May 10-30
                
            }
            else if( monthTill > thisMonth ) {
                if(      dayTill <   thisDay ) { return 67; } // June 1-8 - June 1-8 (Triple Case)
                else if( dayTill === thisDay ) { return 68; } // June 1-8 - June 9
                else if( dayTill >   thisDay ) { return 69; } // June 1-8 - June 10-30
                
            }
            
        }
        else if( dayFrom === thisDay ) {
            if( monthTill < thisMonth ) {
                if(      dayTill <   thisDay ) { return 71; } // June 9 - April 1-8
                else if( dayTill === thisDay ) { return 72; } // June 9 - April 9
                else if( dayTill >   thisDay ) { return 73; } // June 9 - April 10-30
                
            }
            else if( monthTill === thisMonth ) {
                if(      dayTill <   thisDay ) { return 74; } // June 9 - May 1-8
                else if( dayTill === thisDay ) { return 75; } // June 9 - May 9
                else if( dayTill >   thisDay ) { return 76; } // June 9 - May 10-30
                
            }
            else if( monthTill > thisMonth ) {
                if(      dayTill <   thisDay ) { return 77; } // June 9 - June 1-8
                else if( dayTill === thisDay ) { return 78; } // June 9 - June 9 (Event X)
                else if( dayTill >   thisDay ) { return 79; } // June 9 - June 10-30
                
            }
            
        }
        else if( dayFrom > thisDay ) {
            if( monthTill < thisMonth ) {
                if(      dayTill <   thisDay ) { return 81; } // June 10-30 - April 1-8
                else if( dayTill === thisDay ) { return 82; } // June 10-30 - April 9
                else if( dayTill >   thisDay ) { return 83; } // June 10-30 - April 10-30
                
            }
            else if( monthTill === thisMonth ) {
                if(      dayTill <   thisDay ) { return 84; } // June 10-30 - May 1-8
                else if( dayTill === thisDay ) { return 85; } // June 10-30 - May 9
                else if( dayTill >   thisDay ) { return 86; } // June 10-30 - May 10-30
                
            }
            else if( monthTill > thisMonth ) {
                if(      dayTill <   thisDay ) { return 87; } // June 10-30 - June 1-8
                else if( dayTill === thisDay ) { return 88; } // June 10-30 - June 9
                else if( dayTill >   thisDay ) { return 89; } // June 10-30 - June 10-30 (Triple case)
                
            }                
        }            
    }
};