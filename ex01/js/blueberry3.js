var Mei = (function (name) {return name;}(Mei || {}));

Mei.Dates = (function () {

 // THE PRODUCTION 
    var allDates = [
       //  {
       //      from: "",
       //      till: "",
       //      title: "",
       //      whathappened: "",
       //      link: "",
       //      result: ""
       //  },
       //  {
       //      from: "",
       //      till: "",
       //      title: "",
       //      whathappened: "",
       //      link: "",
       //      result: ""
       //  },
       //  {
       //      from: "",
       //      till: "",
       //      title: "",
       //      whathappened: "",
       //      link: "",
       //      result: ""
       //  },
       //  {
       //      from: "",
       //      till: "",
       //      title: "",
       //      whathappened: "",
       //      link: "",
       //      result: ""
       //  },
       //  {
       //      from: "",
       //      till: "",
       //      title: "",
       //      whathappened: "",
       //      link: "",
       //      result: ""
       //  },
       //  {
       //      from: "",
       //      till: "",
       //      title: "",
       //      whathappened: "",
       //      link: "",
       //      result: ""
       //  },
            {
                from: "1941-10-30",
                till: "1942-07-09",
                title: "Оборона Севастополя",
                whathappened: "Войска Крыма",
                link: "https://ru.wikipedia.org/wiki/%D0%9E%D0%B1%D0%BE%D1%80%D0%BE%D0%BD%D0%B0_%D0%A1%D0%B5%D0%B2%D0%B0%D1%81%D1%82%D0%BE%D0%BF%D0%BE%D0%BB%D1%8F_(1941%E2%80%941942)",
                result: ""
            },
            {
                from: "1942-06-28",
                till: "1942-07-24",
                title: "Воронежско-Ворошиловградская операция",
                whathappened: "Брянский фронт, Юго-Западный фронт и Южный фронт",
                link: "https://ru.wikipedia.org/wiki/%D0%92%D0%BE%D1%80%D0%BE%D0%BD%D0%B5%D0%B6%D1%81%D0%BA%D0%BE-%D0%92%D0%BE%D1%80%D0%BE%D1%88%D0%B8%D0%BB%D0%BE%D0%B2%D0%B3%D1%80%D0%B0%D0%B4%D1%81%D0%BA%D0%B0%D1%8F_%D0%BE%D0%BF%D0%B5%D1%80%D0%B0%D1%86%D0%B8%D1%8F_(1942)",
                result: ""
            },
            {
                from: "1941-06-25",
                till: "",
                title: "Южный фронт",
                whathappened: "Южный фронт образован",
                link: "",
                result: ""
            },
            {
                from: "1941-06-22",
                till: "1941-07-06",
                title: "Львовско-Черновицкая стратегическая оборонительная операция",
                whathappened: "Юго-Западный фронт",
                link: "",
                result: ""
            },
            {
                from: "1941-06-22",
                till: "1941-07-09",
                title: "Белостокско-Минское сражение",
                whathappened: "Западный фронт",
                link: "",
                result: ""
            },
            {
                from: "1941-06-22",
                till: "1941-07-09",
                title: "Прибалтийская стратегическая оборонительная операция",
                whathappened: "Северо-Западный фронт",
                link: "",
                result: ""
            },
            {
                from: "1941-06-29",
                till: "1941-10-10",
                title: "Оборона Заполярья",
                whathappened: "Северный фронт",
                link: "",
                result: ""
            },
            {
                from: "1941-06-22",
                till: "1941-12-02",
                title: "Оборона Ханко",
                whathappened: "Северный фронт",
                link: "",
                result: ""
            },


            {
                from: "1945-05-22",
                till: "1945-05-28",
                title: "Something",
                whathappened: "lalala",
                link: "",
                result: "Result was interesting"

            },
            {
                from: "1945-05-22",
                till: "",
                title: "Operation Unthinkable",
                whathappened: "план готов",
                link: "https://ru.wikipedia.org/wiki/%D0%9E%D0%BF%D0%B5%D1%80%D0%B0%D1%86%D0%B8%D1%8F_%C2%AB%D0%9D%D0%B5%D0%BC%D1%8B%D1%81%D0%BB%D0%B8%D0%BC%D0%BE%D0%B5%C2%BB"

            },
            {
                from: "1942-02-19",
                till: "1942-05-18",
                title: "Немцы в демянском котле",
                whathappened: "основные силы 2-го армейского корпуса 16-й немецкой армии группы армий «Север»",
                link: ""
            },
            {
                from: "1943-01-18",
                till: "",
                title: "блокадное кольцо Ленинграда прорвано",
                whathappened: "",
                link: ""

            },
            {
                from: "1945-04-16",
                till: "1945-05-08",
                title: "Берлинская наступательная операция",
                whathappened: "2-й Белорусский фронт, 1-й Украинский фронт",
                link: "https://ru.wikipedia.org/wiki/%D0%91%D0%B5%D1%80%D0%BB%D0%B8%D0%BD%D1%81%D0%BA%D0%B0%D1%8F_%D0%BD%D0%B0%D1%81%D1%82%D1%83%D0%BF%D0%B0%D1%82%D0%B5%D0%BB%D1%8C%D0%BD%D0%B0%D1%8F_%D0%BE%D0%BF%D0%B5%D1%80%D0%B0%D1%86%D0%B8%D1%8F"
            },
            {
                from: "1945-03-10",
                till: "1945-05-05",
                title: "Моравска-Остравскую наступательную операцию",
                whathappened: "4-й Украинский фронт",
                link: "https://ru.wikipedia.org/wiki/%D0%9C%D0%BE%D1%80%D0%B0%D0%B2%D1%81%D0%BA%D0%BE-%D0%9E%D1%81%D1%82%D1%80%D0%B0%D0%B2%D1%81%D0%BA%D0%B0%D1%8F_%D0%BD%D0%B0%D1%81%D1%82%D1%83%D0%BF%D0%B0%D1%82%D0%B5%D0%BB%D1%8C%D0%BD%D0%B0%D1%8F_%D0%BE%D0%BF%D0%B5%D1%80%D0%B0%D1%86%D0%B8%D1%8F"
            },
            {
                from: "1945-03-25",
                till: "1945-05-05",
                title: "Братиславско-Брновскую наступательную операцию",
                whathappened: "2-й Украинский фронт",
                link: "https://ru.wikipedia.org/wiki/%D0%91%D1%80%D0%B0%D1%82%D0%B8%D1%81%D0%BB%D0%B0%D0%B2%D1%81%D0%BA%D0%BE-%D0%91%D1%80%D0%BD%D0%BE%D0%B2%D1%81%D0%BA%D0%B0%D1%8F_%D0%BD%D0%B0%D1%81%D1%82%D1%83%D0%BF%D0%B0%D1%82%D0%B5%D0%BB%D1%8C%D0%BD%D0%B0%D1%8F_%D0%BE%D0%BF%D0%B5%D1%80%D0%B0%D1%86%D0%B8%D1%8F"
            },
           
            {
                from: "1945-05-08",
                till: "",
                title: "капитуляция группировки противника",
                whathappened: "Принял: 3-й Белорусский фронт в районе устья реки Вислы, восточнее Данцига и на косе Путцигер-Нерунг северо-восточнее Гдыни"
            },
            {
                from: "1945-02-16",
                till: "1945-05-08",
                title: "Курляндская операция",
                whathappened: "Ленинградский фронт"
            },
            {
                from: "1942-05-28",
                till: "",
                title: "СТОП наступление",
                whathappened: "маршал С. К. Тимошенко приказал прекратить наступательную операцию"
            },
            {
                from: "1942-05-26",
                till: "",
                title: "барвенковская западня",
                whathappened: "наши окруженные части оказываются заперты на небольшом пространстве площадью примерно 15 кв. км. в районе Барвенково"
            },
            {
                from: "1942-05-25",
                till: "1942-05-31",
                title: "барвенковская западня",
                whathappened: "",
                result: "вырываются не более десятой части окружённых. Советские потери составили 270 тыс. человек, из них 171 тыс. — безвозвратно. В окружении погибли или пропали без вести: заместитель командующего Юго-Западным фронтом, командующий 6-й армией, командующий 57-й армией, командующий армейской группой и ряд генералов, командовавших попавшими в окружение дивизиями."

            }, 
            {
                from: "1942-05-23",
                till: "",
                title: "Наши попадают в окружение",
                whathappened: "значительная часть войск ударной группировки Красной Армии оказыается в окружении в треугольнике Мерефа-Лозовая-Балаклея."
            },
            {
                from: "1942-06-28",
                till: "",
                title: "фронт между Курском и Харьковом прорван",
                whathappened: "4-я танковая армия под командованием Германа Гота прорывает и устремляется к Дону"
            },
            {
                from: "1942-07-28",
                till: "",
                title: "«Ни шагу назад!»",
                whathappened: "издается знаменитый приказ № 227"
            },
            {
                from: "1942-07-23",
                till: "",
                title: "пал Ростов-на-Дону",
                whathappened: "2 харьковская битва. путь на Кавказ был открыт."
            },


            {
                from: "1941-09-08", //  till: "1944-01-27",
                till: "1944-06-27",
                title: "Блокада Ленинграда",
                whathappened: "872 дня. Погибших: 332 059 солдат (24 324 небоевых), , 111 142 пропавших без вести, горожане: 16 747 убито при артобстрелах и бомбардировках, 632 253 погибли от голода",
                link: "https://ru.wikipedia.org/wiki/%D0%91%D0%BB%D0%BE%D0%BA%D0%B0%D0%B4%D0%B0_%D0%9B%D0%B5%D0%BD%D0%B8%D0%BD%D0%B3%D1%80%D0%B0%D0%B4%D0%B0"
            },
            
            {
                from: "1945-04-05",
                till: "1945-05-20",
                title: "Грузинское восстание на острове Тексел",
                whathappened: "восстание грузинского батальона Вермахта (822-й пехотный батальон «Königin Tamara»; «Царица Тамара») из состава Грузинского легиона на острове Тексел Западно-Фризской гряды (Голландия) во время Второй мировой войны."
            },

            {
                from: "1942-05-15",
                till: "",
                title: "Закавказский фронт вновь сформирован",
                whathappened: "",
                link: ""
            },
            {
                from: "1941-10-30",
                till: "1942-07-09",
                title: " Оборона Севастополя.",
                whathappened: "Войска Крыма",
                link: ""
            },
            {
                from: "1943-02-09",
                till: "1943-05-24",
                title: "Краснодарская операция.",
                whathappened: "Северо-Кавказский фронт",
                link: ""
            },
            {
                from: "1943-04-17",
                till: "1943-06-07",
                title: "Воздушные сражения на Кубани",
                whathappened: "Северо-Кавказский фронт",
                link: "https://ru.wikipedia.org/wiki/%D0%92%D0%BE%D0%B7%D0%B4%D1%83%D1%88%D0%BD%D1%8B%D0%B5_%D1%81%D1%80%D0%B0%D0%B6%D0%B5%D0%BD%D0%B8%D1%8F_%D0%BD%D0%B0_%D0%9A%D1%83%D0%B1%D0%B0%D0%BD%D0%B8_(1943)"
            },
            {
                from: "1945-05-14",
                till: "1945-05-15",
                title: "Полянская битва",
                whathappened: "югославские партизаны и советские офицеры против 30 000 эсэсовцев и хорватских усташей, которые пытаются прорваться из Словении к союзникам в Италию.",
                link: "https://ru.wikipedia.org/wiki/%D0%9F%D0%BE%D0%BB%D1%8F%D0%BD%D1%81%D0%BA%D0%B0%D1%8F_%D0%B1%D0%B8%D1%82%D0%B2%D0%B0"
            },
            {
                from: "1942-05-20",
                till: "",
                title: "Северо-Кавказский фронт образован",
                whathappened: "",
                link: ""
            },
            {
                from: "1941-12-26",
                till: "1942-05-20",
                title: "Керченско-Феодосийская десантная операция",
                whathappened: "Крымский фронт",
                link: ""
            },
            {
                from: "1942-05-12",
                till: "1942-05-29",
                title: "Вторая харьковская битва",
                whathappened: "Брянский фронт, Юго-Западный фронт и Южный фронт.",
                link: "https://ru.wikipedia.org/wiki/%D0%A5%D0%B0%D1%80%D1%8C%D0%BA%D0%BE%D0%B2%D1%81%D0%BA%D0%B0%D1%8F_%D0%BE%D0%BF%D0%B5%D1%80%D0%B0%D1%86%D0%B8%D1%8F_(1942)",
                result: "Наступление советских войск началось как попытка стратегического наступления, но завершилось окружением и практически полным уничтожением наступающих сил Красной армии («операция Fredericus»). Из-за катастрофы под Харьковом стало возможным стремительное продвижение немцев на южном участке фронта на Воронеж и Ростов-на-Дону с последующим выходом к Волге и продвижением на Кавказ."
            },
            {
                from: "1942-01-07",
                till: "1942-05-20",
                title: "Демянская операция",
                whathappened: "Северо-Западный фронт",
                link: "https://ru.wikipedia.org/wiki/%D0%94%D0%B5%D0%BC%D1%8F%D0%BD%D1%81%D0%BA%D0%B0%D1%8F_%D0%BE%D0%BF%D0%B5%D1%80%D0%B0%D1%86%D0%B8%D1%8F_(1942)"
            },
            {
                from: "1942-04-28",
                till: "1942-05-13",
                title: "Murmansk Operation",
                whathappened: "by Karelian front",
                link: ""
            },
            {
                from: "1945-06-04",
                till: "",
                title: "test single-day event",
                whathappened: "testing"
            },
            {
                from: "1975-05-14",
                till: "1975-05-16",
                title: "Some multy-day event",
                whathappened: "Some multy-day event"
            },
            {
                from: "1975-05-11",
                till: "1975-05-14",
                title: "Some multy-day event",
                whathappened: "Some multy-day event"
            },
            


            {
                from: "1944-04-08",
                till: "1944-05-12",
                title: "Крымская наступательная операция",
                whathappened: "Наступательная операция советских войск с целью освобождения Крыма от войск нацистской Германии во время Великой Отечественной войны. 4-й Украинский фронт и Отдельная Приморская армия во взаимодействии с Черноморским флотом и Азовской военной флотилией.",
                link: "https://ru.wikipedia.org/wiki/%D0%9A%D1%80%D1%8B%D0%BC%D1%81%D0%BA%D0%B0%D1%8F_%D0%BD%D0%B0%D1%81%D1%82%D1%83%D0%BF%D0%B0%D1%82%D0%B5%D0%BB%D1%8C%D0%BD%D0%B0%D1%8F_%D0%BE%D0%BF%D0%B5%D1%80%D0%B0%D1%86%D0%B8%D1%8F",
                result: "Победа СССР, полное освобождение Крыма от нацистской оккупации"
            },

            {
                from: "1941-05-06",
                till: "",
                title: "Stalin is head of government",
                whathappened: "Stalin becomes the chairman of the Council of People's Commissars",
                link: ""
            },
            
            {
                from: "1945-05-06",
                till: "1945-05-11",
                title: "The Prague Offensive",
                whathappened: "The USSR troops - 3 Ukrainian Fronts (1st, 2nd, and 4th) - the offensive against the Hitlerites in the capital of Czechoslovakia.",
                link: ""
            },
            {
                from: "1945-05-07",
                till: "",
                title: "Nazis surrender",
                whathappened: "Hitlerites signed an unconditional surrender at Allied headquarters in Reims, France, to take effect the following day, ending the European conflict of World War II.",
                link: ""
            },
            {
                from: "1942-04-24",
                till: "1942-05-11",
                title: "Kestenga/Kiestinki operation",
                whathappened: "Karelian front - Kestenga (Kiestink i) operation",
                link: ""
            },
            
        ];

 // THE TESTING
 // var allDates = [
 //     { from: "1942-04-02", till: "1942-04-05", title: "type 1 - past"},
      


 // ];



    var dateObjectFromString = function( s ) {
        console.log("s is a " + typeof s + ": " + s + " - " + s );
        var arydate = s.split("-");
       //  console.log("--- arydate");

       //  create date object from parsed date
       //  var aryDateObject = new Date( arydate[0], arydate[1]-1, arydate[2]);
        var date = new Date();
        var year = parseInt(arydate[0]);
        var month = parseInt(arydate[1]);
        var day = parseInt(arydate[2]);
        console.log(year + "-" + month +"-" + day + " (" + typeof year + "-" + typeof month + "-" + typeof day + ")");
        date.setFullYear( year, month, day);

        return date;
    };

    function compare(x,y) {
        // var a = dateObjectFromString(x.from).getTime();
        // var b = dateObjectFromString(y.from).getTime();

        var a = moment(x.from).format("YYYY");
        var b = moment(y.from).format("YYYY");

        if (a < b)
            return -1;
        if (a > b)
            return 1;
        return 0;
    }



    function filterMultiDay(monthFrom, dayFrom, monthTill, dayTill ) {
        var today = moment();
        var thisMonth = today.format("MM");
        var thisDay = today.format("DD");

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
                    if(      dayTill <   thisDay ) { // April 1-8 - April 1-8 (Triple case)

                   //  TODO: CASE 3
                   //  if the from-date is earlier than the till-date

                        return 1; 

                    }    
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
    }

    function filterSingleDay(monthFrom, dayFrom ) {
        var today = moment();
        var thisMonth = today.format("MM");
        var thisDay = today.format("DD");


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

    }



    function display(date, add) {        
        var retval = date.title +": " 
            + moment(date.from).format("MMMM D") 
            + ( moment(date.till).isValid() ?  " - " + moment(date.till).format("MMMM D") : "")
            + ( add ? ". ADDING <---<<<" : ". Skipping");
        return retval;
    }

 // =====================================================

    function analyzeEvent( warEvent ) {
       //  "many-year event" = mye
       //  "many-day event" = mde
       //  "one-day event" = ode

        // var todaysDates = [];

        var today = moment();
        var thisMonth = today.format("MM");
        var thisDay = today.format("DD");

        var eventStartDate = moment(warEvent.from);
        var eventFullStartDate = eventStartDate.format("YYYY-MM-DD");
        var eventStartYear = eventStartDate.format("YYYY");
        var eventStartMonth = eventStartDate.format("MMMM");
        var eventStartDay = eventStartDate.format("DD");


        var eventEndDate = moment(warEvent.till);
        var eventFullEndDate = eventEndDate.format("YYYY-MM-DD");
        var eventEndYear = eventEndDate.format("YYYY");
        var eventEndMonth = eventEndDate.format("MMMM");
        var eventEndDay = eventEndDate.format("DD");

        var monthFrom = eventStartDate.format("MM");
        var dayFrom   = eventStartDate.format("DD");
        var monthTill = eventEndDate.format("MM");
        var dayTill   = eventEndDate.format("DD");


        //  console.log( moment(warEvent.from))//
        if( eventEndDate.isValid() ) {
       //  mye || mde
            

            var durationInYears = eventEndYear - eventStartYear;
            // console.log(" typeof durationInYears: " + typeof durationInYears);
            if( durationInYears > 0 ) { // e.g. 3 (1941-09-08 ~ 1944-01-27)
           //  mye
                console.log("---------- mye, " 
                    + durationInYears + "y"
                    + " " + eventFullStartDate  // 1941-09-08
                    + "..."   + eventFullEndDate 
                    + " " + warEvent.title ); // 1944-01-27 
                

                var dummyStartDate = moment().year(moment().format("YYYY")).month(eventStartMonth).day(eventStartDay);
                // console.log("^^^^^^^^^^^^^^^^" + dummyStartDate)
                // var dummyEndDate   = moment().year(2000).month(eventEndMonth).day(eventEndDay);


               // return 100;
               //  print the start date
               /*-----------------------------------------------------
               |    1. if the many-year event started before today or today
               |    i.e. if the -MM-DD of the event's start date are 
               |    earlier than or the same as those of today's -MM-DD 
               -------------------------------------------------------*/
                if( dummyStartDate.diff( moment() ) <= 0 ) { // 1
                    
                    /*---------------------------------------------------
                    |   1. create a clone of the event where 
                    |   2. "from" = eventFullStartDate
                    |   3. "till" = moment( eventStartYear, 12, 31)
                    |   4. fyc = first year's clone
                    |   add to array
                    -----------------------------------------------------*/
                    var wec = JSON.parse(JSON.stringify( warEvent )); // 1

                    wec.from = moment(warEvent.from).format("YYYY-MM-DD"); // 2
                    wec.till = moment().year(eventStartYear).month(12).day(31); // 3

                    console.log(
                        "Adding mye. fyc:" 
                        + " "  + moment(wec.from).format("YYYY-MM-DD") 
                        + "..."  + moment(wec.till).format("YYYY-MM-DD")
                        + " " + wec.title );
                    

                }

                /*---------------------------------
                |   1. the middle year, the year that gets incremented with every year
                |   when creating a new clone
                |       the year for the clones of the war event that is in the middle
                |   2. for the clone of the event that is the last one
                ----------------------------------*/

                var _middleDate = eventStartDate.clone(); // 1
                var _nextYear = "";
               //  var _endDate = eventStartDate;

                for (var i = 1; i < durationInYears; i++) {
               // console.log( " next "+ eventStartDate.add(1, 'years').format("YYYY")); // 1942, 1943
                    /*---------------------------------------------------
                    |   1. create a clone of the event where
                    |   2. "from" = moment( followingYear, 01, 01)
                    |   3. "till" = moment( followingYear, 12, 31)
                    |   
                    |   
                    |   4. wec = war event clone
                    |   add to array
                    -----------------------------------------------------*/
                    var wec = JSON.parse(JSON.stringify( warEvent )); // 1, 4
                    followingYear =  _middleDate.add(1, 'years').format("YYYY");
                    // console.log("followingYear: " + followingYear);

                    // wec.from = moment().year(followingYear).month(0).day(1); // 2
                    // wec.till = moment().year(followingYear).month(11).day(30); // 3

                    wec.from = moment([followingYear, 0,  1]);
                    wec.till = moment([followingYear, 11,31]);

                    console.log("Adding mye. myc " + i + "."
                        + " "    + moment(wec.from).format("YYYY-MM-DD") 
                        + "..."  + moment(wec.till).format("YYYY-MM-DD") 
                        + " "    + wec.title);
                    todaysDates.push( wec );
                    

                };



                if(dummyStartDate.diff( moment() ) > 0 ) {
                    
                    /*---------------------------------------------------
                    |   if the many-year event started after today
                    |   i.e. if the -MM-DD of the event's start date are 
                    |   later than those of today's -MM-DD
                    | 
                    |   1. creating a clone of the event where 
                    |   "from" = moment( event's last Year, 01, 01)
                    |   "till" = eventFullEndDate
                    |   2. add to array
                    |   4. lyc = last year's clone
                    -----------------------------------------------------*/
                    var wec = JSON.parse(JSON.stringify( warEvent )); // 1
                    wec.from = moment([eventEndYear, 0, 1]); // 2
                    wec.till = eventFullEndDate; // 3

                    console.log("Adding mye. lyc   " // 4
                        + " " + moment(wec.from).format("YYYY-MM-DD") 
                        + "..." + moment(wec.till).format("YYYY-MM-DD")
                        + " " + wec.title );
                    // todaysDates.push( wec );
                    return wec;


                }

                // return wec;

                
                
            }
            else {
           //  mde
                console.log("---------- mde");


           // ~~~~~~~~~~~~~~~~~~~~~~~
                if( monthFrom < thisMonth ) {                              
                    if( dayFrom < thisDay ) {        

                        if( monthTill < thisMonth ) { //                   
                            if(      dayTill <   thisDay ) { // April 1-8 - April 1-8 (Triple case)

                           //  TODO: CASE 3
                           //  if the from-date is earlier than the till-date

                                /*return 1; */ 

                            }    
                            else if( dayTill === thisDay ) { /*return 2; */ } // April 1-8 - April 9
                            else if( dayTill >   thisDay ) { /*return 3; */ } // April 1-8 - April 10-30               
                        }
                        else if( monthTill === thisMonth ) {           
                            if(      dayTill <   thisDay ) { /*return 4; */ } // April 1-8 - May 1-8
                            else if( dayTill === thisDay ) { return warEvent; } // 5. April 1-8 - May 9
                            else if( dayTill >   thisDay ) { return warEvent; } // 6. April 1-8 - May 10-30                    
                        }
                        else if( monthTill > thisMonth ) {              
                            if(      dayTill <   thisDay ) { return warEvent; } // 7. April 1-8 - June 1-8
                            else if( dayTill === thisDay ) { return warEvent; } // 8. April 1-8 - June 9
                            else if( dayTill >   thisDay ) { return warEvent; } // 9. April 1-8 - June 10-30                    
                        }
                        
                    }
                    else if( dayFrom === thisDay ) {  

                        if( monthTill < thisMonth ) {     
                            if(      dayTill <   thisDay ) { return warEvent; } // 11. April 9 - April 1-8
                            else if( dayTill === thisDay ) { return warEvent; } // 12. April 9 - April 9 (Event X)
                            else if( dayTill >   thisDay ) { return warEvent; } // 13. April 9 - April 10-30           
                        }
                        else if( monthTill === thisMonth ) {    
                            if(      dayTill <   thisDay ) { return warEvent; } // 14. April 9 - May 1-8
                            else if( dayTill === thisDay ) { return warEvent; } // 15. April 9 - May 9
                            else if( dayTill >   thisDay ) { return warEvent; } // 16. April 9 - May 10-30           
                        }
                        else if( monthTill > thisMonth ) {                  
                            if(      dayTill <   thisDay ) { return warEvent; } // 17. April 9 - June 1-8
                            else if( dayTill === thisDay ) { return warEvent; } // 18. April 9 - June 9
                            else if( dayTill >   thisDay ) { return warEvent; } // 19. April 9 - June 10-30               
                        }
                        
                    }
                    else if( dayFrom > thisDay ) {                        

                        if( monthTill < thisMonth ) {                       
                            if(      dayTill <   thisDay ) { return warEvent; } // 21. April 10-30 - April 1-8
                            else if( dayTill === thisDay ) { return warEvent; } // 22. April 10-30 - April 9
                            else if( dayTill >   thisDay ) { /*return 23; */ } // April 10-30 - April 10-30 (Triple-case)
                        }
                        else if( monthTill === thisMonth ) {
                            if(      dayTill <   thisDay ) { /*return 24; */ } // April 10-30 - May 1-8
                            else if( dayTill === thisDay ) { return warEvent; } // 25. April 10-30 - May 9
                            else if( dayTill >   thisDay ) { return warEvent; } // 26. April 10-30 - May 10-30
                            
                        }
                        else if( monthTill > thisMonth ) {              
                            if(      dayTill <   thisDay ) { return warEvent; } // 27. April 10-30 - June 1-8
                            else if( dayTill === thisDay ) { return warEvent; } // 28. April 10-30 - June 9
                            else if( dayTill >   thisDay ) { return warEvent; } // 29. April 10-30 - June 10-30 (Triple case)
                        }
                        
                    }
                    
                }

                else if( monthFrom === thisMonth ) {
                    if( dayFrom < thisDay ) {

                        if( monthTill < thisMonth ) {
                            if(      dayTill <   thisDay ) { return warEvent; } // 31. May 1-8 - April 1-8
                            else if( dayTill === thisDay ) { return warEvent; } // 32. May 1-8 - April 9
                            else if( dayTill >   thisDay ) { return warEvent; } // 33. May 1-8 - April 10-30
                            
                        }
                        
                        else if( monthTill === thisMonth ) {
                            if(      dayTill <   thisDay ) { /*return 34; */ } // May 1-8 - May 1-8 (Triple Case)
                            else if( dayTill === thisDay ) { return warEvent; } // 35. May 1-8 - May 9
                            else if( dayTill >   thisDay ) { return warEvent; } // 36. May 1-8 - May 10-30
                            
                        }
                        else if( monthTill > thisMonth ) {
                            if(      dayTill <   thisDay ) { return warEvent; } // 37. May 1-8 - June 1-8
                            else if( dayTill === thisDay ) { return warEvent; } // 38. May 1-8 - June 9
                            else if( dayTill >   thisDay ) { return warEvent; } // 39. May 1-8 - June 10-30
                            
                        }
                    }
                    else if( dayFrom === thisDay ) {

                        if( monthTill < thisMonth ) {
                            if(      dayTill <   thisDay ) { return warEvent; } // 41. May 9 - April 1-8
                            else if( dayTill === thisDay ) { return warEvent; } // 42. May 9 - April 9
                            else if( dayTill >   thisDay ) { return warEvent; } // 43. May 9 - April 10-30
                            
                        }
                        else if( monthTill === thisMonth ) {
                            if(      dayTill <   thisDay ) { /*return 44; */ } // May 9 - May 1-8
                            else if( dayTill === thisDay ) { /*return 45; */ } // May 9 - May 9 (Event X)
                            else if( dayTill >   thisDay ) { return warEvent; } // 46. May 9 - May 10-30
                            
                        }
                        else if( monthTill > thisMonth ) {
                            if(      dayTill <   thisDay ) { return warEvent; } // 47. May 9 - June 1-8
                            else if( dayTill === thisDay ) { return warEvent; } // 48. May 9 - June 9
                            else if( dayTill >   thisDay ) { return warEvent; } // 49. May 9 - June 10-30
                            
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
           // ~~~~~~~~~~~~~~~~~~~~~~~

            }
        }
        else {
       //  ode
            console.log("---------- ode");

            if( monthFrom < thisMonth ) {
                if(      dayFrom <   thisDay ) { /*return 91; */ } // April 1-8 
                else if( dayFrom === thisDay ) { /*return 92; */ } // April 9 - Happened on this day last month
                else if( dayFrom >   thisDay ) { /*return 93; */ } // April 10-30
                
            }
            else if( monthFrom === thisMonth ) {
                if(      dayFrom <   thisDay ) { /*return 94; */ } // May 1-8
                else if( dayFrom === thisDay ) { return warEvent; } // 95. May 9 - Anniversary!
                else if( dayFrom >   thisDay ) { /*return 96; */ } // May 10-30
                
            }
            else if( monthFrom > thisMonth ) {
                if(      dayFrom <   thisDay ) { /*return 97; */ } // June 1-8
                else if( dayFrom === thisDay ) { /*return 98; */ } // June 9 - Will happen on this day next month.
                else if( dayFrom >   thisDay ) { /*return 99; */ } // June 10-30
                
            }
        }  

        // return todaysDates;
    }
    // analyzeEvent
    
 // =====================================================

 // today 

    var now = moment();
    var thisMonth = now.format("MM");
    var thisDay = now.format("DD");

    var init = function() {

        
        $("#date").text(moment().format("YYYY MMMM D"));

        $todaysevents = $('#todays-events');
        var todaysDates = [];
       //  var now = moment();

       //  collect the relevant events (i.e. those that today happen, begin, continue, or end)

       // for every event in allDates
        for (var i = 0; i < allDates.length; i++) {
       // -------------------------------------
            var from = moment(allDates[i].from);
            

       //  var from = dateObjectFromString(allDates[i].from);
            var monthFrom = from.format("MM");
            var dayFrom = from.format("DD");

       //  if till != false
            if( moment(allDates[i].till).isValid()) {
                var till = moment(allDates[i].till);
                var monthTill = till.format("MM");
                var dayTill = till.format("DD");
            }
                
       // ------------------------------------
       // console.log('Filtering events ...');

            todaysDates.push( analyzeEvent( allDates[i] ) );

            // console.log(" Number of events today: " + _todaysEvents.length );
            
            /* TEMP
            if ( moment(allDates[i].till).isValid()) {// it's a many-day event
           //  console.log("------- found a many-day event");

                switch( filterMultiDay(monthFrom, dayFrom, monthTill, dayTill ) ) {
                    





                    case 1: console.log("case  1: " +  display(allDates[i], false)); break;
                    case 2: console.log("case  2: " +  display(allDates[i], false)); break;
                    case 3: console.log("case  3: " +  display(allDates[i], false)); break;
                    case 4: console.log("case  4: " +  display(allDates[i], false)); break;

                    case 5: console.log("case  5: " +  display(allDates[i], true )); todaysDates.push( allDates[i] ); break;
                    case 6: console.log("case  6: " +  display(allDates[i], true )); todaysDates.push( allDates[i] ); break;
                    case 7: console.log("case  7: " +  display(allDates[i], true )); todaysDates.push( allDates[i] ); break;
                    case 8: console.log("case  8: " +  display(allDates[i], true )); todaysDates.push( allDates[i] ); break;
                    case 9: console.log("case  9: " +  display(allDates[i], true )); todaysDates.push( allDates[i] ); break;


                    case 11: console.log("case 11: " + display(allDates[i], true )); todaysDates.push( allDates[i] ); break;
                    case 12: console.log("case 12: " + display(allDates[i], true )); todaysDates.push( allDates[i] ); break;
                    case 13: console.log("case 13: " + display(allDates[i], false)); break;
                    case 14: console.log("case 14: " + display(allDates[i], false)); break;
                    case 15: console.log("case 15: " + display(allDates[i], true )); todaysDates.push( allDates[i] ); break;
                    case 16: console.log("case 16: " + display(allDates[i], true )); todaysDates.push( allDates[i] ); break;
                    case 17: console.log("case 17: " + display(allDates[i], true )); todaysDates.push( allDates[i] ); break;
                    case 18: console.log("case 18: " + display(allDates[i], true )); todaysDates.push( allDates[i] ); break;
                    case 19: console.log("case 19: " + display(allDates[i], true )); todaysDates.push( allDates[i] ); break;


                    case 21: console.log("case 21: " + display(allDates[i], true )); todaysDates.push( allDates[i] ); break;
                    case 22: console.log("case 22: " + display(allDates[i], true )); todaysDates.push( allDates[i] ); break;
                    case 23: console.log("case 23: " + display(allDates[i], false)); break;
                    case 24: console.log("case 24: " + display(allDates[i], false)); break;
                    case 25: console.log("case 25: " + display(allDates[i], true )); todaysDates.push( allDates[i] ); break;
                    case 26: console.log("case 26: " + display(allDates[i], true )); todaysDates.push( allDates[i] ); break;
                    case 27: console.log("case 27: " + display(allDates[i], true )); todaysDates.push( allDates[i] ); break;
                    case 28: console.log("case 28: " + display(allDates[i], true )); todaysDates.push( allDates[i] ); break;
                    case 29: console.log("case 29: " + display(allDates[i], true )); todaysDates.push( allDates[i] ); break;

                    case 31: console.log("case 31: " + display(allDates[i], true )); todaysDates.push( allDates[i] ); break;
                    case 32: console.log("case 32: " + display(allDates[i], true )); todaysDates.push( allDates[i] ); break;
                    case 33: console.log("case 33: " + display(allDates[i], true )); todaysDates.push( allDates[i] ); break;
                    case 34: console.log("case 34: " + display(allDates[i], false)); break;
                    case 35: console.log("case 35: " + display(allDates[i], true )); todaysDates.push( allDates[i] ); break;
                    case 36: console.log("case 36: " + display(allDates[i], true )); todaysDates.push( allDates[i] ); break;
                    case 37: console.log("case 37: " + display(allDates[i], true )); todaysDates.push( allDates[i] ); break;
                    case 38: console.log("case 38: " + display(allDates[i], true )); todaysDates.push( allDates[i] ); break;
                    case 39: console.log("case 39: " + display(allDates[i], true )); todaysDates.push( allDates[i] ); break;

                    case 41: console.log("case 41: " + display(allDates[i], true )); todaysDates.push( allDates[i] ); break;
                    case 42: console.log("case 42: " + display(allDates[i], true )); todaysDates.push( allDates[i] ); break;
                    case 43: console.log("case 43: " + display(allDates[i], true )); todaysDates.push( allDates[i] ); break;
                    case 44: console.log("case 44: " + display(allDates[i], true )); todaysDates.push( allDates[i] ); break;
                    case 45: console.log("case 45: " + display(allDates[i], true )); todaysDates.push( allDates[i] ); break;
                    case 46: console.log("case 46: " + display(allDates[i], true )); todaysDates.push( allDates[i] ); break;
                    case 47: console.log("case 47: " + display(allDates[i], true )); todaysDates.push( allDates[i] ); break;
                    case 48: console.log("case 48: " + display(allDates[i], true )); todaysDates.push( allDates[i] ); break;
                    case 49: console.log("case 49: " + display(allDates[i], true )); todaysDates.push( allDates[i] ); break;

                    case 51: console.log("case 51: " + display(allDates[i], false)); break;
                    case 52: console.log("case 52: " + display(allDates[i], false)); break;
                    case 53: console.log("case 53: " + display(allDates[i], false)); break;
                    case 54: console.log("case 54: " + display(allDates[i], false)); break;
                    case 55: console.log("case 55: " + display(allDates[i], false)); break;
                    case 56: console.log("case 56: " + display(allDates[i], false)); break;
                    case 57: console.log("case 57: " + display(allDates[i], false)); break;
                    case 58: console.log("case 58: " + display(allDates[i], false)); break;
                    case 59: console.log("case 59: " + display(allDates[i], false)); break;

                    case 61: console.log("case 61: " + display(allDates[i], false)); break;
                    case 62: console.log("case 62: " + display(allDates[i], false)); break;
                    case 63: console.log("case 63: " + display(allDates[i], false)); break;
                    case 64: console.log("case 64: " + display(allDates[i], false)); break;
                    case 65: console.log("case 65: " + display(allDates[i], false)); break;
                    case 66: console.log("case 66: " + display(allDates[i], false)); break;
                    case 67: console.log("case 67: " + display(allDates[i], false)); break;
                    case 68: console.log("case 68: " + display(allDates[i], false)); break;
                    case 69: console.log("case 69: " + display(allDates[i], false)); break;

                    case 71: console.log("case 71: " + display(allDates[i], false)); break;
                    case 72: console.log("case 72: " + display(allDates[i], false)); break;
                    case 73: console.log("case 73: " + display(allDates[i], false)); break;
                    case 74: console.log("case 74: " + display(allDates[i], false)); break;
                    case 75: console.log("case 75: " + display(allDates[i], false)); break;
                    case 76: console.log("case 76: " + display(allDates[i], false)); break;
                    case 77: console.log("case 77: " + display(allDates[i], false)); break;
                    case 78: console.log("case 78: " + display(allDates[i], false)); break;
                    case 79: console.log("case 79: " + display(allDates[i], false)); break;

                    case 81: console.log("case 81: " + display(allDates[i], false)); break;
                    case 82: console.log("case 82: " + display(allDates[i], false)); break;
                    case 83: console.log("case 83: " + display(allDates[i], false)); break;
                    case 84: console.log("case 84: " + display(allDates[i], false)); break;
                    case 85: console.log("case 85: " + display(allDates[i], false)); break;
                    case 86: console.log("case 86: " + display(allDates[i], false)); break;
                    case 87: console.log("case 87: " + display(allDates[i], false)); break;
                    case 88: console.log("case 88: " + display(allDates[i], false)); break;
                    case 89: console.log("case 89: " + display(allDates[i], false)); break;



                }

 
            }
            else { // it's a one-day event
           //  console.log("------- found a single-day event");
                switch( filterSingleDay(monthFrom, dayFrom ) ) {
                    case 91: console.log("case 91: " + display(allDates[i], false)); break;
                    case 92: console.log("case 92: " + display(allDates[i], false)); break;
                    case 93: console.log("case 93: " + display(allDates[i], false)); break;
                    case 94: console.log("case 94: " + display(allDates[i], false)); break;
                    case 95: console.log("case 95: " + display(allDates[i], true )); todaysDates.push( allDates[i] ); break;
                    case 96: console.log("case 96: " + display(allDates[i], false)); break;
                    case 97: console.log("case 97: " + display(allDates[i], false)); break;
                    case 98: console.log("case 98: " + display(allDates[i], false)); break;
                    case 99: console.log("case 99: " + display(allDates[i], false)); break;
                }

            }
            */
        } // collect todays dates

        console.log( "Finished filtering. Dates to show: " + todaysDates.length);
        // console.log( "typeof " + typeof todaysDates[0])
        console.log('======================================');
        todaysDates.sort(compare);



        for (var i = 0; i < todaysDates.length; i++) {
            console.log("todaysDates[i].title: " + todaysDates[i].title);

            switch( moment(todaysDates[i].till).isValid() ) {
                case true:
                    console.log("** : " 
                        + moment(todaysDates[i].from).format("YYYY-MM-DD") 
                        + " to "  + todaysDates[i].till 
                        + ": "+ todaysDates[i].title);
                    break;
                default:
                    console.log("** : " 
                    + moment(todaysDates[i].from).format("YYYY-MM-DD")
                    + ": "+ todaysDates[i].title)
            }
                        
        };

        // console.log( "")


   //  Next: display the collected events
   //  for every event in todaysDates

        var newYear = "";
        for (var i = 0; i< todaysDates.length; i++) {



       // -------------------------------------
       //  var from = dateObjectFromString(todaysDates[i].from);
       //  var yearFrom = from.getFullYear();
       //  var monthFrom = from.getMonth();
       //  var dayFrom = from.getDate();

            var from = moment(todaysDates[i].from);
            

       //  var from = dateObjectFromString(allDates[i].from);
            var yearFrom = from.format("YYYY");
            var monthFrom = from.format("MM");
            var dayFrom = from.format("DD");

       //  if till != false
            if( moment(todaysDates[i].till).isValid()) {
           //  var till = dateObjectFromString(todaysDates[i].till);
                var till = moment(todaysDates[i].till);
                var yearTill = till.format("YYYY");
                var monthTill = till.format("MM");
                var dayTill = till.format("DD");
            }
                
           // ------------------------------------
           //  draw the year separator
                if(newYear != yearFrom ) {
               //  $yearSeparator = $('<div class="new-year">').text(yearFrom); TODO
                    $yearSeparator = $('<h3>').text(yearFrom);

                    $todaysevents.append( $yearSeparator);

                }
                newYear = yearFrom;
                console.log("newYear: " + newYear);





            /* TEMP
            if ( moment(todaysDates[i].till).isValid() ) {// it's a many-day event
                console.log("---- Printing out events - found a many-day event");

                switch( filterMultiDay(monthFrom, dayFrom, monthTill, dayTill ) ) {
                    case 51: case 52: case 53: case 54: case 55: case 56: case 57: case 58: case 59:
                    case 61: case 62: case 63: case 64: case 65: case 66: case 67: case 68: case 69:
                    case 71: case 72: case 73: case 74: case 75: case 76: case 77: case 78: case 79:
                    case 81: case 82: case 83: case 84: case 85: case 86: case 87: case 88: case 89:
                        console.log("this event is in the future");
                        break; 

                                                                 case 6:           case 8:  case 9:           
                    case 11: case 12: case 13:                   case 16: case 17: case 18: case 19:
                    case 21: case 22: case 23:                   case 26: case 27: case 28: case 29:
                    case 31: case 32: case 33: case 34:          case 36: case 37: case 38: case 39:

                   //  console.log("case  1: " + display(allDates[i])); 
                        console.log(monthFrom + "-" + dayFrom + " -> " + thisMonth +"-"+thisDay + " <- " + monthTill + "-" + dayTill);

                        console.log(todaysDates[i].title + " continues today");
                   //  create container for the date
                        var $datecontainer = $('<div>').attr('class','date').addClass("continues");
                   //  console.log ('~~~~~ class ' + $datecontainer.class);
                   //  create element for the event
                   //  console.log('YEAR: ' + aryDateObject.getFullYear());
                        var $pastperiod = $('<div>').attr('class','past-year').text(from.format("YYYY MMMM D")+" - "+ till.format("YYYY MMMM D"));
                        var $progress = $('<div>').attr('class','progress').text( "продолжается" );
                        
                        
                   //  with link
                   //  var $link = $('<a>').attr("href", todaysDates[i].link);
                   //  $link.text(todaysDates[i].title);
                   //  var $eventtitle = $('<div>').attr('class','event-title').append($link);

                   //  // with no link
                   //  // var $eventtitle = $('<div>').attr('class','event-title').text(todaysDates[i].title);

                        if(!!todaysDates[i].link) {
                            var $link = $('<a>').attr("href", todaysDates[i].link).attr("target", "_blank");
                            $link.text(todaysDates[i].title);
                            var $eventtitle = $('<div>').attr('class','event-title').append($link);
                        }
                        else {
                       //  with no link
                            var $eventtitle = $('<div>').attr('class','event-title').text(todaysDates[i].title);
                        }

                        var $eventonthisdate = $('<div>').attr('class','whathappened').text(todaysDates[i].whathappened);
                        $datecontainer.append( $pastperiod, $progress,  $eventtitle, $eventonthisdate);
                        $todaysevents.append($datecontainer);
                        break;
            
                    case 1: case 2: case 3: case 4:
                        console.log(" this event is past");
                        break;

                    case 5: case 15:  case 25: case 35:
                        console.log(" this event ends today");
                   //  create container for the date
                        var $datecontainer = $('<div>').attr('class','date').addClass("ends");
                   //  create element for the event
                        var $pastperiod = $('<div>').attr('class','past-year').text(from.format("YYYY MMMM D")+" - "+ till.format("YYYY MMMM D"));
                   //  var $eventtitle = $('<div>').attr('class','event-title').text(todaysDates[i].title + ": ends");
                        var $progress = $('<div>').attr('class','progress').text("сегодня оканчивается" );
                        if(!!todaysDates[i].link) {
                            var $link = $('<a>').attr("href", todaysDates[i].link).attr("target", "_blank");
                            $link.text(todaysDates[i].title);
                            var $eventtitle = $('<div>').attr('class','event-title').append($link);
                        }
                        else {
                       //  with no link
                            var $eventtitle = $('<div>').attr('class','event-title').text(todaysDates[i].title);
                        }
                        var $eventonthisdate = $('<div>').attr('class','whathappened').text(todaysDates[i].whathappened);

                        $datecontainer.append($pastperiod);
                        $datecontainer.append($progress);                    
                        $datecontainer.append($eventtitle);
                        $datecontainer.append($eventonthisdate);
                        if(!!todaysDates[i].result) {
                            var $eventresult = $('<div>').attr('class','event-result').text(todaysDates[i].result);
                            $datecontainer.append($eventresult);
                        }

                        $todaysevents.append($datecontainer);
                        break;

                    case 41: case 42: case 43: case 44: case 45: case 46: case 47: case 48: case 49:
                        console.log("Begins today");
                        var $datecontainer = $('<div>').attr('class','date').addClass("begins");
                   //  create element for the event
                        var $pastperiod = $('<div>').attr('class','past-year').text( from.format("YYYY-MM-DD"));

                        var $progress = $('<div>').attr('class','progress').text("сегодня начинается" );

                   //  with link
                   //  console.log("------" + !!todaysDates[i].link)
                        if(!!todaysDates[i].link) {
                            var $link = $('<a>').attr("href", todaysDates[i].link).attr("target", "_blank");
                            $link.text(todaysDates[i].title);
                            var $eventtitle = $('<div>').attr('class','event-title').append($link);
                        }
                        else {
                       //  with no link
                            var $eventtitle = $('<div>').attr('class','event-title').text(todaysDates[i].title);
                        }
                        

                        
                        var $eventonthisdate = $('<div>').attr('class','whathappened').text(todaysDates[i].whathappened);
                        $datecontainer.append($pastperiod); 
                        $datecontainer.append($progress);
                                           
                        $datecontainer.append($eventtitle);
                        $datecontainer.append($eventonthisdate);

                        $todaysevents.append($datecontainer);
                        break;
                        
                }
            }
            else {
                switch( filterSingleDay(monthFrom, dayFrom ) ) {
                    case 95: 
                   //  console.log("case  1: " + display(allDates[i])); 
                        console.log(monthFrom + "-" + dayFrom + " == " + thisMonth +"-"+thisDay );

                        console.log(todaysDates[i].title + " Happens today");
                   //  create container for the date
                        var $datecontainer = $('<div>').attr('class','date').addClass("today");
                   //  console.log ('~~~~~ class ' + $datecontainer.class);
                   //  create element for the event
                   //  console.log('YEAR: ' + aryDateObject.getFullYear());
                        var $pastperiod = $('<div>').attr('class','past-year').text(from.format("YYYY MMMM D")+"!!!");
                        var $progress = $('<div>').attr('class','progress').text( "сегодня" );
                        
                        
                   //  with link
                   //  var $link = $('<a>').attr("href", todaysDates[i].link);
                   //  $link.text(todaysDates[i].title);
                   //  var $eventtitle = $('<div>').attr('class','event-title').append($link);

                   //  // with no link
                   //  // var $eventtitle = $('<div>').attr('class','event-title').text(todaysDates[i].title);

                        if(!!todaysDates[i].link) {
                            var $link = $('<a>').attr("href", todaysDates[i].link).attr("target", "_blank");
                            $link.text(todaysDates[i].title);
                            var $eventtitle = $('<div>').attr('class','event-title').append($link);
                        }
                        else {
                       //  with no link
                            var $eventtitle = $('<div>').attr('class','event-title').text(todaysDates[i].title);
                        }

                        var $eventonthisdate = $('<div>').attr('class','whathappened').text(todaysDates[i].whathappened);
                        $datecontainer.append( $pastperiod, $progress,  $eventtitle, $eventonthisdate);
                        $todaysevents.append($datecontainer);
                        break;
                }
            }
            */
        }


        $('h3').each( function(){
      //  $(this).nextUntil('h3').wrapAll(document.createElement('div'));
           $(this).nextUntil('h3').wrapAll($('<div>').prop("class", "year-container"));

        });
    };

    return { init: init }

})();

window.onload = function () {
    Mei.Events.init();            

    Mei.Dates.init();
            
}