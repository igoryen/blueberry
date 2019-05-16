window.scope08 = {};
var display = scope05.display;
scope08.getTodaysDates = function (allDates) {
    var now = moment();
    var thisMonth = now.format("MM");
    var thisDay = now.format("DD");
    var todaysDates = [];
    console.log("===>" + allDates.length)
    for (var i = 0; i < allDates.length; i++) {
        // console.log("-1")
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
        var dayFrom = eventStartDate.format("DD");
        var monthTill = eventEndDate.format("MM");
        var dayTill = eventEndDate.format("DD");


        // 3

        if (eventEndDate.isValid()) {
            //  mye || mde                

            var durationInYears = eventEndYear - eventStartYear;
            // 22

            if (durationInYears > 0) { // e.g. 3 (1941-09-08 ~ 1944-01-27)
                //  mye
                console.log("- Got a mye, " +
                    durationInYears + "yrs " +
                    " " + eventFullStartDate // 1941-09-08
                    +
                    "..." + eventFullEndDate +
                    " " + allDates[i]["title"]); // 1944-01-27 

                var dummyStartDate = moment().year(moment().format("YYYY")).month(parseInt(eventStartDate.format("MM") - 1)).date(eventStartDay); // 33
                // 19, 20
                //  print the start date
                console.log("~~~~~~ " + dummyStartDate.format("YYYY-MM-DD") + ", diff:" + dummyStartDate.diff(dummyStartDate));

                if (dummyStartDate.diff(dummyStartDate) <= 0) { // 5

                    var wec = JSON.parse(JSON.stringify(allDates[i])); // 6

                    wec["from"] = moment(allDates[i]["from"]).format("YYYY-MM-DD"); // 7
                    wec["till"] = moment().year(eventStartYear).month(11).date(31); // 8
                    wec["truefrom"] = eventFullStartDate;
                    wec["truetill"] = eventFullEndDate;


                    console.log(
                        "Adding mye. fyc:" // 9
                        +
                        " " + moment(wec["from"]).format("YYYY-MM-DD") +
                        "..." + moment(wec["till"]).format("YYYY-MM-DD") +
                        " >>>>> true-from " + wec["truefrom"] +
                        " " + wec["title"]);
                    todaysDates.push(wec); // 16

                }

                var _middleDate = eventStartDate.clone(); // 10
                // 11, 12

                for (var year = 1; year < durationInYears; year++) {
                    // 23

                    var wec = JSON.parse(JSON.stringify(allDates[i])); // 6, 
                    followingYear = _middleDate.add(1, 'years').format("YYYY");

                    wec["from"] = moment([followingYear, 0, 1]);
                    wec["till"] = moment([followingYear, 11, 31]);
                    wec["truefrom"] = eventFullStartDate;
                    wec["truetill"] = eventFullEndDate;


                    console.log("Adding mye. myc " + year + "." +
                        " " + moment(wec["from"]).format("YYYY-MM-DD") +
                        "..." + moment(wec["till"]).format("YYYY-MM-DD") +
                        " >>>>> true-from " + wec["truefrom"]

                        +
                        " " + wec["title"]);

                    todaysDates.push(wec); // 16

                };


                // if(dummyStartDate.diff( moment() ) > 0 ) { // 18

                var wec = JSON.parse(JSON.stringify(allDates[i])); // 6
                wec["from"] = moment([eventEndYear, 0, 1]);
                wec["till"] = eventFullEndDate;
                wec["truefrom"] = eventFullStartDate;
                wec["truetill"] = eventFullEndDate;


                console.log("Adding mye. lyc   " // 17
                    +
                    " " + moment(wec["from"]).format("YYYY-MM-DD") +
                    "..." + moment(wec["till"]).format("YYYY-MM-DD") +
                    " >>>>> true-from " + wec["truefrom"]

                    +
                    " " + wec["title"]);
                todaysDates.push(wec);
                // }

            } else {
                //  mde
                console.log("- Got a mde");

                allDates[i]["truefrom"] = eventFullStartDate;
                allDates[i]["truetill"] = eventFullEndDate;

                if (monthFrom < thisMonth) {
                    console.log("---------- mde, started before this month");
                    if (dayFrom < thisDay) {

                        if (monthTill < thisMonth) { //    
                            console.log("---------- mde, started before this month & before this day, ended before this month");
                            if (dayTill < thisDay) { /*return 1; */ } // April 1-8 - April 1-8 (Triple case)
                            else if (dayTill === thisDay) { /*return 2; */ } // April 1-8 - April 9
                            else if (dayTill > thisDay) { /*return 3; */ } // April 1-8 - April 10-30               
                        } else if (monthTill === thisMonth) {
                            console.log("---------- mde, started before this month & before this day, ended this month");
                            if (dayTill < thisDay) { /*return 4; */ } // April 1-8 - May 1-8
                            else if (dayTill === thisDay) {
                                todaysDates.push(allDates[i]);
                                display(5, allDates[i], true);
                            } // 5. April 1-8 - May 9
                            else if (dayTill > thisDay) {
                                todaysDates.push(allDates[i]);
                                display(6, allDates[i], true);
                            } // 6. April 1-8 - May 10-30                    
                        } else if (monthTill > thisMonth) {
                            console.log("---------- mde, started before this month & before this day, ended after this month");
                            if (dayTill < thisDay) {
                                todaysDates.push(allDates[i]);
                                display(7, allDates[i], true);
                            } // 7. April 1-8 - June 1-8
                            else if (dayTill === thisDay) {
                                todaysDates.push(allDates[i]);
                                display(8, allDates[i], true);
                            } // 8. April 1-8 - June 9
                            else if (dayTill > thisDay) {
                                todaysDates.push(allDates[i]);
                                display(9, allDates[i], true);
                            } // 9. April 1-8 - June 10-30                    
                        }

                    } else if (dayFrom === thisDay) {

                        if (monthTill < thisMonth) {
                            // console.log("---------- mde, started before this month on this day, ended before this month");  
                            if (dayTill < thisDay) { /*todaysDates.push(allDates[i]);*/
                                display(11, allDates[i], false);
                            } // 11. April 9 - April 1-8
                            else if (dayTill === thisDay) {
                                todaysDates.push(allDates[i]);
                                display(12, allDates[i], true);
                            } // 12. April 9 - April 9 (Event X)
                            else if (dayTill > thisDay) { /*todaysDates.push(allDates[i]); display(13, allDates[i], true);*/ } // 13. April 9 - April 10-30           
                        } else if (monthTill === thisMonth) {
                            // console.log("---------- mde, started before this month on this day, ended this month");   
                            if (dayTill < thisDay) {
                                todaysDates.push(allDates[i]);
                                display(14, allDates[i], true);
                            } // 14. April 9 - May 1-8
                            else if (dayTill === thisDay) {
                                todaysDates.push(allDates[i]);
                                display(15, allDates[i], true);
                            } // 15. April 9 - May 9
                            else if (dayTill > thisDay) {
                                todaysDates.push(allDates[i]);
                                display(16, allDates[i], true);
                            } // 16. April 9 - May 10-30           
                        } else if (monthTill > thisMonth) {
                            // console.log("---------- mde, started before this month on this day, ended after this month");   
                            if (dayTill < thisDay) {
                                todaysDates.push(allDates[i]);
                                display(17, allDates[i], true);
                            } // 17. April 9 - June 1-8
                            else if (dayTill === thisDay) {
                                todaysDates.push(allDates[i]);
                                display(18, allDates[i], true);
                            } // 18. April 9 - June 9
                            else if (dayTill > thisDay) {
                                todaysDates.push(allDates[i]);
                                display(19, allDates[i], true);
                            } // 19. April 9 - June 10-30               
                        }

                    } else if (dayFrom > thisDay) {

                        if (monthTill < thisMonth) {
                            // console.log("---------- mde, started before this month after this day, ended before this month");  

                            if (dayTill < thisDay) { /*todaysDates.push(allDates[i]); display(21, allDates[i], false); */ } // 21. April 10-30 - April 1-8
                            else if (dayTill === thisDay) { /*todaysDates.push(allDates[i]); display(22, allDates[i], false); */ } // 22. April 10-30 - April 9
                            else if (dayTill > thisDay) { /*return 23; */ } // April 10-30 - April 10-30 (Triple-case)
                        } else if (monthTill === thisMonth) {

                            // console.log("---------- mde, started before this month after this day, ended this month");  

                            if (dayTill < thisDay) { /*return 24; */ } // April 10-30 - May 1-8
                            else if (dayTill === thisDay) {
                                todaysDates.push(allDates[i]);
                                display(25, allDates[i], true);
                            } // 25. April 10-30 - May 9
                            else if (dayTill > thisDay) {
                                todaysDates.push(allDates[i]);
                                display(26, allDates[i], true);
                            } // 26. April 10-30 - May 10-30

                        } else if (monthTill > thisMonth) {
                            // console.log("---------- mde, started before this month after this day, ended after this month");  

                            if (dayTill < thisDay) {
                                todaysDates.push(allDates[i]);
                                display(27, allDates[i], true);
                            } // 27. April 10-30 - June 1-8
                            else if (dayTill === thisDay) {
                                todaysDates.push(allDates[i]);
                                display(28, allDates[i], true);
                            } // 28. April 10-30 - June 9
                            else if (dayTill > thisDay) {
                                todaysDates.push(allDates[i]);
                                display(29, allDates[i], true);
                            } // 29. April 10-30 - June 10-30 (Triple case)
                        }
                    }
                } else if (monthFrom === thisMonth) {
                    if (dayFrom < thisDay) {

                        if (monthTill < thisMonth) {
                            if (dayTill < thisDay) {
                                todaysDates.push(allDates[i]);
                                display(31, allDates[i], true);
                            } // 31. May 1-8 - April 1-8
                            else if (dayTill === thisDay) {
                                todaysDates.push(allDates[i]);
                                display(32, allDates[i], true);
                            } // 32. May 1-8 - April 9
                            else if (dayTill > thisDay) {
                                todaysDates.push(allDates[i]);
                                display(33, allDates[i], true);
                            } // 33. May 1-8 - April 10-30

                        } else if (monthTill === thisMonth) {
                            if (dayTill < thisDay) { /*return 34; */ } // May 1-8 - May 1-8 (Triple Case)
                            else if (dayTill === thisDay) {
                                todaysDates.push(allDates[i]);
                                display(35, allDates[i], true);
                            } // 35. May 1-8 - May 9
                            else if (dayTill > thisDay) {
                                todaysDates.push(allDates[i]);
                                display(36, allDates[i], true);
                            } // 36. May 1-8 - May 10-30

                        } else if (monthTill > thisMonth) {
                            if (dayTill < thisDay) {
                                todaysDates.push(allDates[i]);
                                display(37, allDates[i], true);
                            } // 37. May 1-8 - June 1-8
                            else if (dayTill === thisDay) {
                                todaysDates.push(allDates[i]);
                                display(38, allDates[i], true);
                            } // 38. May 1-8 - June 9
                            else if (dayTill > thisDay) {
                                todaysDates.push(allDates[i]);
                                display(39, allDates[i], true);
                            } // 39. May 1-8 - June 10-30
                        }
                    } else if (dayFrom === thisDay) {

                        if (monthTill < thisMonth) {
                            if (dayTill < thisDay) {
                                todaysDates.push(allDates[i]);
                                display(41, allDates[i], true);
                            } // 41. May 9 - April 1-8
                            else if (dayTill === thisDay) {
                                todaysDates.push(allDates[i]);
                                display(42, allDates[i], true);
                            } // 42. May 9 - April 9
                            else if (dayTill > thisDay) {
                                todaysDates.push(allDates[i]);
                                display(43, allDates[i], true);
                            } // 43. May 9 - April 10-30

                        } else if (monthTill === thisMonth) {
                            if (dayTill < thisDay) { /*return 44; */ } // May 9 - May 1-8
                            else if (dayTill === thisDay) { /*return 45; */ } // May 9 - May 9 (Event X)
                            else if (dayTill > thisDay) {
                                todaysDates.push(allDates[i]);
                                display(46, allDates[i], true);
                            } // 46. May 9 - May 10-30

                        } else if (monthTill > thisMonth) {
                            if (dayTill < thisDay) {
                                todaysDates.push(allDates[i]);
                                display(47, allDates[i], true);
                            } // 47. May 9 - June 1-8
                            else if (dayTill === thisDay) {
                                todaysDates.push(allDates[i]);
                                display(48, allDates[i], true);
                            } // 48. May 9 - June 9
                            else if (dayTill > thisDay) {
                                todaysDates.push(allDates[i]);
                                display(49, allDates[i], true);
                            } // 49. May 9 - June 10-30

                        }

                    } else if (dayFrom > thisDay) {
                        if (monthTill < thisMonth) {
                            if (dayTill < thisDay) { /*return 51; */ } // May 10-30 - April 1-8
                            else if (dayTill === thisDay) { /*return 52; */ } // May 10-30 - April 9
                            else if (dayTill > thisDay) { /*return 53; */ } // May 10-30 - April 10-30

                        } else if (monthTill === thisMonth) {
                            if (dayTill < thisDay) { /*return 54; */ } // May 10-30 - May 1-8
                            else if (dayTill === thisDay) { /*return 55; */ } // May 10-30 - May 9
                            else if (dayTill > thisDay) { /*return 56; */ } // May 10-30 - May 10-30 (Triple case)

                        } else if (monthTill > thisMonth) {
                            if (dayTill < thisDay) { /*return 57; */ } // May 10-30 - June 1-8
                            else if (dayTill === thisDay) { /*return 58; */ } // May 10-30 - June 9
                            else if (dayTill > thisDay) { /*return 59; */ } // May 10-30 - June 10-30

                        }

                    }

                } else if (monthFrom > thisMonth) {
                    if (dayFrom < thisDay) {
                        if (monthTill < thisMonth) {

                            if (dayTill < thisDay) { /*return 61; */ } // June 1-8 - April 1-8
                            else if (dayTill === thisDay) { /*return 62; */ } // June 1-8 - April 9
                            else if (dayTill > thisDay) { /*return 63; */ } // June 1-8 - April 10-30

                        } else if (monthTill === thisMonth) {
                            if (dayTill < thisDay) { /*return 64; */ } // June 1-8 - May 1-8
                            else if (dayTill === thisDay) { /*return 65; */ } // June 1-8 - May 9
                            else if (dayTill > thisDay) { /*return 66; */ } // June 1-8 - May 10-30

                        } else if (monthTill > thisMonth) {
                            if (dayTill < thisDay) { /*return 67; */ } // June 1-8 - June 1-8 (Triple Case)
                            else if (dayTill === thisDay) { /*return 68; */ } // June 1-8 - June 9
                            else if (dayTill > thisDay) { /*return 69; */ } // June 1-8 - June 10-30

                        }

                    } else if (dayFrom === thisDay) {
                        if (monthTill < thisMonth) {
                            if (dayTill < thisDay) { /*return 71; */ } // June 9 - April 1-8
                            else if (dayTill === thisDay) { /*return 72; */ } // June 9 - April 9
                            else if (dayTill > thisDay) { /*return 73; */ } // June 9 - April 10-30

                        } else if (monthTill === thisMonth) {
                            if (dayTill < thisDay) { /*return 74; */ } // June 9 - May 1-8
                            else if (dayTill === thisDay) { /*return 75; */ } // June 9 - May 9
                            else if (dayTill > thisDay) { /*return 76; */ } // June 9 - May 10-30

                        } else if (monthTill > thisMonth) {
                            if (dayTill < thisDay) { /*return 77; */ } // June 9 - June 1-8
                            else if (dayTill === thisDay) { /*return 78; */ } // June 9 - June 9 (Event X)
                            else if (dayTill > thisDay) { /*return 79; */ } // June 9 - June 10-30

                        }

                    } else if (dayFrom > thisDay) {
                        if (monthTill < thisMonth) {
                            if (dayTill < thisDay) { /*return 81; */ } // June 10-30 - April 1-8
                            else if (dayTill === thisDay) { /*return 82; */ } // June 10-30 - April 9
                            else if (dayTill > thisDay) { /*return 83; */ } // June 10-30 - April 10-30

                        } else if (monthTill === thisMonth) {
                            if (dayTill < thisDay) { /*return 84; */ } // June 10-30 - May 1-8
                            else if (dayTill === thisDay) { /*return 85; */ } // June 10-30 - May 9
                            else if (dayTill > thisDay) { /*return 86; */ } // June 10-30 - May 10-30

                        } else if (monthTill > thisMonth) {
                            if (dayTill < thisDay) { /*return 87; */ } // June 10-30 - June 1-8
                            else if (dayTill === thisDay) { /*return 88; */ } // June 10-30 - June 9
                            else if (dayTill > thisDay) { /*return 89; */ } // June 10-30 - June 10-30 (Triple case)

                        }
                    }
                }
            }
        } else {
            //  ode
            // console.log("---------- ode");
            allDates[i]["truefrom"] = eventFullStartDate;

            if (monthFrom < thisMonth) {
                if (dayFrom < thisDay) { /*return 91; */ } // April 1-8 
                else if (dayFrom === thisDay) { /*return 92; */ } // April 9 - Happened on this day last month
                else if (dayFrom > thisDay) { /*return 93; */ } // April 10-30

            } else if (monthFrom === thisMonth) {
                if (dayFrom < thisDay) { /*return 94; */ } // May 1-8
                else if (dayFrom === thisDay) {
                    todaysDates.push(allDates[i]);
                    display(95, allDates[i], true);
                } // 95. May 9 - Anniversary!
                else if (dayFrom > thisDay) { /*return 96; */ } // May 10-30

            } else if (monthFrom > thisMonth) {
                if (dayFrom < thisDay) { /*return 97; */ } // June 1-8
                else if (dayFrom === thisDay) { /*return 98; */ } // June 9 - Will happen on this day next month.
                else if (dayFrom > thisDay) { /*return 99; */ } // June 10-30

            }
        }
    }
    return todaysDates;
};