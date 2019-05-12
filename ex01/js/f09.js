window.scope09 = {};
var filterMDE = scope03.filterMDE;
var displayMDE = scope06.displayMDE;
scope09.alla = function( todaysDates ) {

  // year separator
        var newYear = "";
        var year_tabs = [];
    for (var i = 0; i< todaysDates.length; i++) {

                       // TTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTT
                       var from = moment(todaysDates[i]["from"]);
                       var yearFrom = from.format("YYYY");
                       // year_tabs.push(yearFrom); // 34
                       console.log("------------------- newYear: " + newYear + ", yearFrom: " + yearFrom);

                       // if( i = 0 ) {
                       //   $yearSeparator = $('<h3>').text(yearFrom);
                       // }
                       if( newYear != yearFrom ) {
                           //  $yearSeparator = $('<div class="new-year">').text(yearFrom); TODO
                           $yearSeparator = $('<h3>').text(yearFrom);

                           $todaysevents.append( $yearSeparator);
                           console.log("======================== " + yearFrom + " ========================");
                           year_tabs.push(yearFrom); // 34
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

                                    // console.log("case  1: " + display(allDates[i])); 

                                   // console.log(monthFrom + "-" + dayFrom + " -> " + thisMonth +"-"+thisDay + " <- " + monthTill + "-" + dayTill);

                                   displayMDE( todaysDates[i], "continues today");
                                   //  create container for the date
                                   var $datecontainer = $('<div>').attr('class','date').addClass("continues");
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
                                   console.log(">>------>----> " + Object.keys(todaysDates[i]));
                                   console.log(">>------>----> " + moment(todaysDates[i]["truefrom"]).format("D MMMM YYYY"));
                                   var $pastperiod = $('<span>').attr('class','past-year').text("(" + moment(todaysDates[i]["truefrom"]).format("D MMMM YYYY") +" - "+ moment(todaysDates[i]["truetill"]).format("D MMMM YYYY") + ")");
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
                                   // var $pastperiod = $('<span>').attr('class','past-year').text( "%%%%% " + from.format("D MMMM YYYY"));
                                   var $pastperiod = $('<span>').attr('class','past-year').text("(" + moment(todaysDates[i]["truefrom"]).format("D MMMM YYYY") +" - "+ moment(todaysDates[i]["truetill"]).format("D MMMM YYYY") + ")");
                                   

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
    return year_tabs;
};