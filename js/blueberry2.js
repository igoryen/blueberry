var Mei = (function (name) {return name;}(Mei || {}));

Mei.Dates = (function () {
    var allDates = [
        {
            from: "1941-04-02",
            till: "1941-06-30",
            title: "Ongoing, case 1",
            whathappened: "",
            link: ""
        },
        {
            from: "1941-04-05",
            till: "1941-05-28",
            title: "Ongoing, case 2",
            whathappened: "",
            link: ""
        },
        {
            from: "1941-05-05",
            till: "1941-05-30",
            title: "Ongoing, case 4",
            whathappened: "",
            link: ""
        },
        
        // {
        //     from: "1941-06-01",
        //     till: "1941-04-30",
        //     title: "Test case 5 not yet",
        //     whathappened: "",
        //     link: ""

        // },
        {
            from: "1941-04-20",
            till: "1941-05-21",
            title: "ENDS today, case 8",
            whathappened: "",
            link: ""
        },
        {
            from: "1941-04-10",
            till: "1941-05-01",
            title: "Past, case 9",
            whathappened: "",
            link: ""
        },
        
        {
            from: "1941-04-15",
            till: "1941-05-07",
            title: "Past, case 10",
            whathappened: "",
            link: ""
        },
        {
            from: "1941-04-22",
            till: "1941-04-28",
            title: "Past, case 11",
            whathappened: "",
            link: ""
        },
        {
            from: "1941-06-10",
            till: "1941-06-28",
            title: "Future, case 12",
            whathappened: "",
            link: ""
        },
        {
            from: "1941-05-21",
            till: "1941-06-28",
            title: "Starts today, case 13",
            whathappened: "",
            link: ""
        },
        {
            from: "1941-05-15",
            till: "1941-05-20",
            title: "Past, case 14",
            whathappened: "",
            link: ""
        },
        {
            from: "1941-05-12",
            till: "1941-05-21",
            title: "Ends today, case 15",
            whathappened: "",
            link: ""
        },
    ];

    // var allDates = [
    //     // {
    //     //     from: "",
    //     //     till: "",
    //     //     title: "",
    //     //     whathappened: "",
    //     //     link: ""

    //     // },
    //     {
    //         from: "1942-02-19",
    //         till: "1942-05-18",
    //         title: "Немцы в демянском котле",
    //         whathappened: "основные силы 2-го армейского корпуса 16-й немецкой армии группы армий «Север»",
    //         link: ""
    //     },
    //     {
    //         from: "1943-01-18",
    //         till: "",
    //         title: "блокадное кольцо Ленинграда прорвано",
    //         whathappened: "",
    //         link: ""

    //     },
    //     {
    //         from: "1945-04-16",
    //         till: "1945-05-08",
    //         title: "Берлинская наступательная операция",
    //         whathappened: "2-й Белорусский фронт, 1-й Украинский фронт",
    //         link: "https://ru.wikipedia.org/wiki/%D0%91%D0%B5%D1%80%D0%BB%D0%B8%D0%BD%D1%81%D0%BA%D0%B0%D1%8F_%D0%BD%D0%B0%D1%81%D1%82%D1%83%D0%BF%D0%B0%D1%82%D0%B5%D0%BB%D1%8C%D0%BD%D0%B0%D1%8F_%D0%BE%D0%BF%D0%B5%D1%80%D0%B0%D1%86%D0%B8%D1%8F"
    //     },
    //     {
    //         from: "1945-03-10",
    //         till: "1945-05-05",
    //         title: "Моравска-Остравскую наступательную операцию",
    //         whathappened: "4-й Украинский фронт",
    //         link: "https://ru.wikipedia.org/wiki/%D0%9C%D0%BE%D1%80%D0%B0%D0%B2%D1%81%D0%BA%D0%BE-%D0%9E%D1%81%D1%82%D1%80%D0%B0%D0%B2%D1%81%D0%BA%D0%B0%D1%8F_%D0%BD%D0%B0%D1%81%D1%82%D1%83%D0%BF%D0%B0%D1%82%D0%B5%D0%BB%D1%8C%D0%BD%D0%B0%D1%8F_%D0%BE%D0%BF%D0%B5%D1%80%D0%B0%D1%86%D0%B8%D1%8F"
    //     },
    //     {
    //         from: "1945-03-25",
    //         till: "1945-05-05",
    //         title: "Братиславско-Брновскую наступательную операцию",
    //         whathappened: "2-й Украинский фронт",
    //         link: "https://ru.wikipedia.org/wiki/%D0%91%D1%80%D0%B0%D1%82%D0%B8%D1%81%D0%BB%D0%B0%D0%B2%D1%81%D0%BA%D0%BE-%D0%91%D1%80%D0%BD%D0%BE%D0%B2%D1%81%D0%BA%D0%B0%D1%8F_%D0%BD%D0%B0%D1%81%D1%82%D1%83%D0%BF%D0%B0%D1%82%D0%B5%D0%BB%D1%8C%D0%BD%D0%B0%D1%8F_%D0%BE%D0%BF%D0%B5%D1%80%D0%B0%D1%86%D0%B8%D1%8F"
    //     },
       
    //     {
    //         from: "1945-05-08",
    //         till: "",
    //         title: "капитуляция группировки противника",
    //         whathappened: "Принял: 3-й Белорусский фронт в районе устья реки Вислы, восточнее Данцига и на косе Путцигер-Нерунг северо-восточнее Гдыни"
    //     },
    //     {
    //         from: "1945-02-16",
    //         till: "1945-05-08",
    //         title: "Курляндская операция",
    //         whathappened: "Ленинградский фронт"
    //     },
    //     {
    //         from: "1942-05-28",
    //         till: "",
    //         title: "СТОП наступление",
    //         whathappened: "маршала С. К. Тимошенко приказал прекратить наступательной операции"
    //     },
    //     {
    //         from: "1942-05-26",
    //         till: "",
    //         title: "барвенковская западня",
    //         whathappened: "окруженные части Красной Армии оказываются заперты на небольшом пространстве площадью примерно 15 кв. км. в районе Барвенково"
    //     },
    //     {
    //         from: "1942-05-25",
    //         till: "1942-05-31",
    //         title: "барвенковская западня",
    //         whathappened: "вырываются не более десятой части окружённых. Советские потери составили 270 тыс. человек, из них 171 тыс. — безвозвратно. В окружении погибли или пропали без вести: заместитель командующего Юго-Западным фронтом, командующий 6-й армией, командующий 57-й армией, командующий армейской группой и ряд генералов, командовавших попавшими в окружение дивизиями."
    //     }, 
    //     {
    //         from: "1942-05-23",
    //         till: "",
    //         title: "Наши попадают в окружение",
    //         whathappened: "значительная часть войск ударной группировки Красной Армии оказыается в окружении в треугольнике Мерефа-Лозовая-Балаклея."
    //     },
    //     {
    //         from: "1942-06-28",
    //         till: "",
    //         title: "фронт между Курском и Харьковом прорван",
    //         whathappened: "4-я танковая армия под командованием Германа Гота прорывает и устремляется к Дону"
    //     },
    //     {
    //         from: "1942-07-28",
    //         till: "",
    //         title: "«Ни шагу назад!»",
    //         whathappened: "издается знаменитый приказ № 227"
    //     },
    //     {
    //         from: "1942-07-23",
    //         till: "",
    //         title: "пал Ростов-на-Дону",
    //         whathappened: "2 харьковская битва. путь на Кавказ был открыт."
    //     },


    //     {
    //         from: "1941-09-08",
    //         till: "1944-01-27",
    //         title: "Блокада Ленинграда",
    //         whathappened: "872 дня. Погибших: 332 059 солдат (24 324 небоевых), , 111 142 пропавших без вести, горожане: 16 747 убито при артобстрелах и бомбардировках, 632 253 погибли от голода",
    //         link: "https://ru.wikipedia.org/wiki/%D0%91%D0%BB%D0%BE%D0%BA%D0%B0%D0%B4%D0%B0_%D0%9B%D0%B5%D0%BD%D0%B8%D0%BD%D0%B3%D1%80%D0%B0%D0%B4%D0%B0"
    //     },
        
    //     {
    //         from: "1945-05-11",
    //         till: "1945-06-26",
    //         title: "??Англичане вместе с нацистами против критских партизан",
    //         whathappened: "на греческом острове Крит англичане ввязываются в бой с партизанами-коммунистами. Не могут с ними справиться и вызывают на помощь… 28-ю пехотную бригаду вермахта. Личный автомобиль британского генерала Престона берут под охрану два танка «Тигр». Британцы вместе с гитлеровцами убивают партизан. только когда повстанцев удалось оттеснить в горы района Соуда, немцы были отправлены в лагеря военнопленных. Этот скандальный случай всегда замалчивался Британией - информация о нём появилась только в 2000 году благодаря исследованию германских историков Марлен фон Ксиландер и Петера Шенка. Впрочем, неудивительно: ещё раньше согласно плану операции «Немыслимое», разработанному Генштабом Великобритании за месяц до конца войны, в случае конфликта с СССР англичане собирались перебросить на Восточный фронт 12 дивизий, сформированных из пленных немецких солдат. Их ничуть не смущало, что придётся атаковать советских друзей вместе с нацистскими убийцами."
    //     },
    //     {
    //         from: "1945-04-05",
    //         till: "1945-05-20",
    //         title: "Грузинское восстание на острове Тексел",
    //         whathappened: "восстание грузинского батальона Вермахта (822-й пехотный батальон «Königin Tamara»; «Царица Тамара») из состава Грузинского легиона на острове Тексел Западно-Фризской гряды (Голландия) во время Второй мировой войны."
    //     },

    //     {
    //         from: "1942-05-15",
    //         till: "",
    //         title: "Закавказский фронт вновь сформирован",
    //         whathappened: "",
    //         link: ""
    //     },
    //     {
    //         from: "1941-10-30",
    //         till: "1942-07-09",
    //         title: " Оборона Севастополя.",
    //         whathappened: "Войска Крыма",
    //         link: ""
    //     },
    //     {
    //         from: "1943-02-09",
    //         till: "1943-05-24",
    //         title: "Краснодарская операция.",
    //         whathappened: "Северо-Кавказский фронт",
    //         link: ""
    //     },
    //     {
    //         from: "1943-04-17",
    //         till: "1943-06-07",
    //         title: "Воздушные сражения на Кубани",
    //         whathappened: "Северо-Кавказский фронт",
    //         link: "https://ru.wikipedia.org/wiki/%D0%92%D0%BE%D0%B7%D0%B4%D1%83%D1%88%D0%BD%D1%8B%D0%B5_%D1%81%D1%80%D0%B0%D0%B6%D0%B5%D0%BD%D0%B8%D1%8F_%D0%BD%D0%B0_%D0%9A%D1%83%D0%B1%D0%B0%D0%BD%D0%B8_(1943)"
    //     },
    //     {
    //         from: "1945-05-14",
    //         till: "1945-05-15",
    //         title: "Полянская битва",
    //         whathappened: "югославские партизаны и советские офицеры против 30 000 эсэсовцев и хорватских усташей, которые пытаются прорваться из Словении к союзникам в Италию.",
    //         link: "https://ru.wikipedia.org/wiki/%D0%9F%D0%BE%D0%BB%D1%8F%D0%BD%D1%81%D0%BA%D0%B0%D1%8F_%D0%B1%D0%B8%D1%82%D0%B2%D0%B0"
    //     },
    //     {
    //         from: "1942-05-20",
    //         till: "",
    //         title: "Северо-Кавказский фронт образован",
    //         whathappened: "",
    //         link: ""
    //     },
    //     {
    //         from: "1941-12-26",
    //         till: "1942-05-20",
    //         title: "Керченско-Феодосийская десантная операция",
    //         whathappened: "Крымский фронт",
    //         link: ""
    //     },
    //     {
    //         from: "1942-05-12",
    //         till: "1942-05-29",
    //         title: "Вторая харьковская битва",
    //         whathappened: "Брянский фронт, Юго-Западный фронт и Южный фронт. Наступление советских войск началось как попытка стратегического наступления, но завершилось окружением и практически полным уничтожением наступающих сил Красной армии («операция Fredericus»). Из-за катастрофы под Харьковом стало возможным стремительное продвижение немцев на южном участке фронта на Воронеж и Ростов-на-Дону с последующим выходом к Волге и продвижением на Кавказ",
    //         link: "https://ru.wikipedia.org/wiki/%D0%A5%D0%B0%D1%80%D1%8C%D0%BA%D0%BE%D0%B2%D1%81%D0%BA%D0%B0%D1%8F_%D0%BE%D0%BF%D0%B5%D1%80%D0%B0%D1%86%D0%B8%D1%8F_(1942)"
    //     },
    //     {
    //         from: "1942-01-07",
    //         till: "1942-05-20",
    //         title: "Демянская операция",
    //         whathappened: "Северо-Западный фронт",
    //         link: "https://ru.wikipedia.org/wiki/%D0%94%D0%B5%D0%BC%D1%8F%D0%BD%D1%81%D0%BA%D0%B0%D1%8F_%D0%BE%D0%BF%D0%B5%D1%80%D0%B0%D1%86%D0%B8%D1%8F_(1942)"
    //     },
    //     {
    //         from: "1942-04-28",
    //         till: "1942-05-13",
    //         title: "Murmansk Operation",
    //         whathappened: "by Karelian front",
    //         link: ""
    //     },
    //     {
    //         from: "1945-05-14",
    //         till: "",
    //         title: "test single-day event",
    //         whathappened: "testing"
    //     },
    //     {
    //         from: "1975-05-14",
    //         till: "1975-05-16",
    //         title: "Some multy-day event",
    //         whathappened: "Some multy-day event"
    //     },
    //     {
    //         from: "1975-05-11",
    //         till: "1975-05-14",
    //         title: "Some multy-day event",
    //         whathappened: "Some multy-day event"
    //     },
        


    //     {
    //         from: "1944-05-06",
    //         till: "1944-05-22",
    //         title: "Fight for Sevastopol",
    //         whathappened: "Soviet forces - final attack on Sevastopol with a massive artillery bombardment.",
    //         link: ""
    //     },

    //     {
    //         from: "1941-05-06",
    //         till: "",
    //         title: "Stalin is head of government",
    //         whathappened: "Stalin becomes the chairman of the Council of People's Commissars",
    //         link: ""
    //     },
        
    //     {
    //         from: "1945-05-06",
    //         till: "1945-05-11",
    //         title: "The Prague Offensive",
    //         whathappened: "The USSR troops - 3 Ukrainian Fronts (1st, 2nd, and 4th) - the offensive against the Hitlerites in the capital of Czechoslovakia.",
    //         link: ""
    //     },
    //     {
    //         from: "1945-05-07",
    //         till: "",
    //         title: "Nazis surrender",
    //         whathappened: "Hitlerites signed an unconditional surrender at Allied headquarters in Reims, France, to take effect the following day, ending the European conflict of World War II.",
    //         link: ""
    //     },
    //     {
    //         from: "1942-04-24",
    //         till: "1942-05-11",
    //         title: "Kestenga/Kiestinki operation",
    //         whathappened: "Karelian front - Kestenga (Kiestinki) operation",
    //         link: ""
    //     },
        
    // ];


    var dateObjectFromString = function( s ) {
        console.log("s is a " + typeof s + ": " + s + " - " + s );
        var arydate = s.split("-");
        // console.log("--- arydate");

        // create date object from parsed date
        // var aryDateObject = new Date( arydate[0], arydate[1]-1, arydate[2]);
        var date = new Date();
        var year = parseInt(arydate[0]);
        var month = parseInt(arydate[1]);
        var day = parseInt(arydate[2]);
        console.log(year + "-" + month +"-" + day + " (" + typeof year + "-" + typeof month + "-" + typeof day + ")");
        date.setFullYear( year, month, day);

        return date;
    };

    function compare(x,y) {
        var a = dateObjectFromString(x.from).getTime();
        var b = dateObjectFromString(y.from).getTime();

        if (a < b)
            return -1;
        if (a > b)
            return 1;
        return 0;
    }

    function ongoing(monthFrom, dayFrom, monthTill, dayTill ) {
        var today = moment();
        var thisMonth = today.format("MM");
        var thisDay = today.format("DD");


        if( monthFrom < thisMonth ) {
            if( dayFrom < thisDay ) {
                if( monthTill < thisMonth ) {
                    if( dayTill < thisDay ) {
                        return 1;
                    }
                    else if( dayTill > thisDay ) {
                        return 2;
                    }
                    else if( dayTill === thisDay ) {
                        return 3;
                    }
                }
                else if( monthTill > thisMonth ) {
                    if( dayTill < thisDay ) {
                        return 4;
                    }
                    else if( dayTill > thisDay ) {
                        return 5;
                    }
                    else if( dayTill === thisDay ) {
                        return 6;
                    }
                }
                else if( monthTill === thisMonth ) {
                    if( dayTill < thisDay ) {
                        return 7;
                    }
                    else if( dayTill > thisDay ) {
                        return 8;
                    }
                    else if( dayTill === thisDay ) {
                        return 9;
                    }
                }
            }
            else if( dayFrom > thisDay ) {
                if( monthTill < thisMonth ) {
                    if( dayTill < thisDay ) {
                        return 10;
                    }
                    else if( dayTill > thisDay ) {
                        return 11;
                    }
                    else if( dayTill === thisDay ) {
                        return 12;
                    }
                }
                else if( monthTill > thisMonth ) {
                    if( dayTill < thisDay ) {
                        return 13;
                    }
                    else if( dayTill > thisDay ) {
                        return 14;
                    }
                    else if( dayTill === thisDay ) {
                        return 15;
                    }
                }
                else if( monthTill === thisMonth ) {
                    if( dayTill < thisDay ) {
                        return 16;
                    }
                    else if( dayTill > thisDay ) {
                        return 17;
                    }
                    else if( dayTill === thisDay ) {
                        return 18;
                    }
                }
            }
            else if( dayFrom === thisDay ) {
                if( monthTill < thisMonth ) {
                    if( dayTill < thisDay ) {
                        return 19;
                    }
                    else if( dayTill > thisDay ) {
                        return 20;
                    }
                    else if( dayTill === thisDay ) {
                        return 21;
                    }
                }
                else if( monthTill > thisMonth ) {
                    if( dayTill < thisDay ) {
                        return 22;
                    }
                    else if( dayTill > thisDay ) {
                        return 23;
                    }
                    else if( dayTill === thisDay ) {
                        return 24;
                    }
                }
                else if( monthTill === thisMonth ) {
                    if( dayTill < thisDay ) {
                        return 25;
                    }
                    else if( dayTill > thisDay ) {
                        return 26;
                    }
                    else if( dayTill === thisDay ) {
                        return 27;
                    }
                }
            }
        }
        else if( monthFrom > thisMonth ) {
            if( dayFrom < thisDay ) {
                if( monthTill < thisMonth ) {
                    if( dayTill < thisDay ) {
                        return 28;
                    }
                    else if( dayTill > thisDay ) {
                        return 29;
                    }
                    else if( dayTill === thisDay ) {
                        return 30;
                    }
                }
                else if( monthTill > thisMonth ) {
                    if( dayTill < thisDay ) {
                        return 31;
                    }
                    else if( dayTill > thisDay ) {
                        return 32;
                    }
                    else if( dayTill === thisDay ) {
                        return 33;
                    }
                }
                else if( monthTill === thisMonth ) {
                    if( dayTill < thisDay ) {
                        return 34;
                    }
                    else if( dayTill > thisDay ) {
                        return 35;
                    }
                    else if( dayTill === thisDay ) {
                        return 36;
                    }
                }
            }
            else if( dayFrom > thisDay ) {
                if( monthTill < thisMonth ) {
                    if( dayTill < thisDay ) {
                        return 37;
                    }
                    else if( dayTill > thisDay ) {
                        return 38;
                    }
                    else if( dayTill === thisDay ) {
                        return 39;
                    }
                }
                else if( monthTill > thisMonth ) {
                    if( dayTill < thisDay ) {
                        return 40;
                    }
                    else if( dayTill > thisDay ) {
                        return 41;
                    }
                    else if( dayTill === thisDay ) {
                        return 42;
                    }
                }
                else if( monthTill === thisMonth ) {
                    if( dayTill < thisDay ) {
                        return 43;
                    }
                    else if( dayTill > thisDay ) {
                        return 44;
                    }
                    else if( dayTill === thisDay ) {
                        return 45;
                    }
                }
            }
            else if( dayFrom === thisDay ) {
                if( monthTill < thisMonth ) {
                    if( dayTill < thisDay ) {
                        return 46;
                    }
                    else if( dayTill > thisDay ) {
                        return 47;
                    }
                    else if( dayTill === thisDay ) {
                        return 48;
                    }
                }
                else if( monthTill > thisMonth ) {
                    if( dayTill < thisDay ) {
                        return 49;
                    }
                    else if( dayTill > thisDay ) {
                        return 50;
                    }
                    else if( dayTill === thisDay ) {
                        return 51;
                    }
                }
                else if( monthTill === thisMonth ) {
                    if( dayTill < thisDay ) {
                        return 52;
                    }
                    else if( dayTill > thisDay ) {
                        return 53;
                    }
                    else if( dayTill === thisDay ) {
                        return 54;
                    }
                }
            }
        }
        else if( monthFrom === thisMonth ) {
            if( dayFrom < thisDay ) {
                if( monthTill < thisMonth ) {
                    if( dayTill < thisDay ) {
                        return 55;
                    }
                    else if( dayTill > thisDay ) {
                        return 56;
                    }
                    else if( dayTill === thisDay ) {
                        return 57;
                    }
                }
                else if( monthTill > thisMonth ) {
                    if( dayTill < thisDay ) {
                        return 58;
                    }
                    else if( dayTill > thisDay ) {
                        return 59;
                    }
                    else if( dayTill === thisDay ) {
                        return 60;
                    }
                }
                else if( monthTill === thisMonth ) {
                    if( dayTill < thisDay ) {
                        return 61;
                    }
                    else if( dayTill > thisDay ) {
                        return 62;
                    }
                    else if( dayTill === thisDay ) {
                        return 63;
                    }
                }
            }
            else if( dayFrom > thisDay ) {
                if( monthTill < thisMonth ) {
                    if( dayTill < thisDay ) {
                        return 64;
                    }
                    else if( dayTill > thisDay ) {
                        return 65;
                    }
                    else if( dayTill === thisDay ) {
                        return 66;
                    }
                }
                else if( monthTill > thisMonth ) {
                    if( dayTill < thisDay ) {
                        return 67;
                    }
                    else if( dayTill > thisDay ) {
                        return 68;
                    }
                    else if( dayTill === thisDay ) {
                        return 69;
                    }
                }
                else if( monthTill === thisMonth ) {
                    if( dayTill < thisDay ) {
                        return 70;
                    }
                    else if( dayTill > thisDay ) {
                        return 71;
                    }
                    else if( dayTill === thisDay ) {
                        return 72;
                    }
                }
            }
            else if( dayFrom === thisDay ) {
                if( monthTill < thisMonth ) {
                    if( dayTill < thisDay ) {
                        return 73;
                    }
                    else if( dayTill > thisDay ) {
                        return 74;
                    }
                    else if( dayTill === thisDay ) {
                        return 75;
                    }
                }
                else if( monthTill > thisMonth ) {
                    if( dayTill < thisDay ) {
                        return 76;
                    }
                    else if( dayTill > thisDay ) {
                        return 77;
                    }
                    else if( dayTill === thisDay ) {
                        return 78;
                    }
                }
                else if( monthTill === thisMonth ) {
                    if( dayTill < thisDay ) {
                        return 79;
                    }
                    else if( dayTill > thisDay ) {
                        return 80;
                    }
                    else if( dayTill === thisDay ) {
                        return 81;
                    }
                }
            }
        }


        // if (monthFrom < thisMonth) {
        //     console.log('----- 1. Awesome! Its start month is BEFORE this month ('+ monthFrom + ')');

        //     if (    dayFrom < thisDay) {
        //         console.log('----- Awesome! Its start day is BEFORE this day ('+ dayFrom + ')');

        //         if(      monthTill < thisMonth ) {
        //             console.log("----- Oops! Its end month is BEFORE this month("+monthTill+").")
        //             console.log('----- It is case 11. Not Ongoing.');

        //             return false;
        //         } 

        //         else if( monthTill > thisMonth ) {
        //             console.log("----- Its end month is AFTER this month("+monthTill+").")

        //             if(dayTill < thisDay) {
        //                 console.log("----- Its end day is BEFORE this day("+dayTill+").")
        //                 return true;
        //             }
        //             else if(dayTill > thisDay) {
        //                 console.log("----- Its end day is AFTER this day("+dayTill+").")
        //                 return true;
        //             }
        //             else if(dayTill === thisDay) {
        //                 console.log("----- Its end day IS this day("+dayTill+").")
        //                 return true;
        //             }
        //         } 
        //         else if ( monthTill === thisMonth ) {
        //             console.log("----- Its end month is THIS month("+monthTill+").");

        //             if( dayTill < thisDay ) {
        //                 console.log("----- Its end day is BEFORE this day("+dayTill+").");
        //                 console.log('----- It is case 10. Not ongoing.');

        //                 return false;
        //             }
        //             else if( dayTill === thisDay ) {
        //                 console.log("----- Its end day IS this day("+dayTill+").");
        //                 console.log('----- It is case 8. Not ongoing.');

        //                 return false;
        //             }
        //             else if (dayTill > thisDay) {
        //                 console.log("----- Its end day is AFTER this day("+dayTill+").");
        //                 console.log('----- It is case 2. Ongoing.');

        //                 return true;
        //             }

        //         }
        //     }
        //     else if(dayFrom > thisDay){

        //     }
        //     else if(dayFrom == thisDay){
                
        //     }
            
            

        // }
        // else if ( monthFrom > thisMonth) {
        //     console.log('----- 2. Oops! Its start month is AFTER this month ('+ monthFrom + ')');
        //     console.log("----- It is case 12. Not ongoing.");
        //     return false;

        //     if (     dayFrom < thisDay) {

        //     }
        //     else if (dayFrom > thisDay) {
                
        //     }
        //     else if (dayFrom === thisDay) {
                
        //     }
        // }
        // else if (monthFrom === thisMonth) {
        //     console.log('----- 3. Its start month IS this month ('+ monthFrom + ')');

        //     if (    dayFrom < thisDay ) {
        //         console.log('----- Its start day is BEFORE this day ('+ dayFrom + ')');
                
        //         if( monthTill === thisMonth ) {
        //             console.log('----- Its end month IS this Month ('+ monthTill + ')');

        //             if ( dayTill < thisDay) {
        //                 console.log('----- Its end day BEFORE this day ('+ dayTill + ')');
        //                 console.log("----- It is case 14. Not ongoing.");
        //                 return false;

        //             }
        //             if ( dayTill === thisDay) {
        //                 console.log('----- Its end day IS this day ('+ dayTill + ')');
        //                 console.log("----- It is case 15. Not ongoing.");
        //                 return false;
        //             }
        //             if ( dayTill > thisDay) {
        //                 console.log('----- Its end day AFTER this day ('+ dayTill + ')');
        //                 console.log("----- It is case 4. ongoing.");
        //                 return true;
        //             }

        //         }

        //     }
        //     else if (dayFrom > thisDay) {
                
        //     }
        //     else if (dayFrom === thisDay) {
        //         console.log('----- But its start day IS this day ('+ dayFrom + ')');
        //         console.log('----- It is case 13. Not ongoing.');
        //         return false;
        //     }

        // }













        // else if (monthFrom < thisMonth) {
        //     console.log('----- Awesome! Its start month is BEFORE this month ('+ monthFrom + ')');

        //     if(dayFrom < thisDay) {
        //         console.log("----- Awesome! Its start day is BEFORE this day("+dayFrom+")");

        //         if(monthTill < thisMonth) {
        //             console.log("----- Oops! Its end month is BEFORE this month("+monthFrom+")");

        //             if (dayTill < thisDay) {
        //                 console.log("----- Oops! Its end day is BEFORE this day("+dayTill+")");
        //                 console.log("----- Not ongoing;")
        //                 return false;
        //             }
        //             else if (dayTill === thisDay) {
        //                 console.log("----- Though its end day IS this day("+dayTill+")");
        //                 console.log("----- Not ongoing;")
        //                 return false;
        //             }
        //             else if (dayTill > thisDay) {
        //                 console.log("----- Though its end day AFTER this day("+dayTill+")");
        //                 console.log("----- Not ongoing;")
        //                 return false;                        
        //             }
        //         }
        //     }
        //     else if(dayFrom === thisDay) {
        //         console.log("----- Its start day IS this day("+dayFrom+")");
        //         return false;

        //     } 
        //     else if(dayFrom > thisDay) {
        //         console.log("----- Its start day is AFTER this day("+dayFrom+")");
        //         return false;

        //     }
        // }

        // if(monthFrom < thisMonth && dayFrom < thisDay) {
        //     console.log('----- It started BEFORE this month ('+ monthFrom + '), BEFORE today (' + dayFrom + ').');
        //     if (monthTill > thisMonth && dayTill > dayFrom) {
        //         console.log('----- It ended AFTER this month ('+monthTill+'), AFTER today (' + dayTill + ').');
        //         console.log('----- It is case 1.');

        //         return true;
        //     }
        //     else if ( monthTill == thisMonth && dayTill > dayFrom ){ 
        //         console.log('----- It ended ON this month ('+ monthTill 
        //             + '), but AFTER today (' + dayTill + ').');
        //         console.log('----- It is case 9.')
        //         return false;
        //     }

        // } 

        // if(
        //     (monthFrom < thisMonth && dayFrom < thisDay && monthTill > thisMonth && dayTill > dayFrom) || // 1
        //     (monthFrom < thisMonth && dayFrom < thisDay && monthTill == thisMonth && dayTill > dayFrom) || // 2
        //     (monthFrom == thisMonth && dayFrom < thisDay && monthTill > thisMonth && dayTill > thisDay) || // 3
        //     (monthFrom == thisMonth && dayFrom < thisDay && monthTill == thisMonth && dayTill > thisDay) // 4
        // ) {
        //     console.log("----- Is this many-day event ongoing? TRUE: " 
        //         + "starts on " +      monthFrom + "-" + dayFrom 
        //         + ", past today (" +  thisMonth + "-" + thisDay 
        //         + "), and ends on " + monthTill + "-" + dayTill);
        //     return true;
        // } 
        else {
            console.log("----- Is this many-day event ongoing? FALSE: " 
                + "starts on " +      monthFrom + "-" + dayFrom 
                + ", today is (" +  thisMonth + "-" + thisDay 
                + "), and ends on " + monthTill + "-" + dayTill);
            return false;
        }

    }
    // function ongoing2( theEvent ) {
    //     var today = moment();
    //     var thisMonth = today.format("MM");
    //     var thisDay = today.format("DD");

    //     var till = moment(theEvent.till);
    //     var monthTill = till.format("MM");
    //     var dayTill = till.format("DD");


    //     console.log("in ongoing(): " + monthFrom + "-" + dayFrom + " --- " + monthTill + "-" + monthTill);

    //     if(
    //         (monthFrom < thisMonth && dayFrom < thisDay && monthTill > thisMonth && dayTill > dayFrom) || // 1
    //         (monthFrom < thisMonth && dayFrom < thisDay && monthTill == thisMonth && dayTill > dayFrom) || // 2
    //         (monthFrom == thisMonth && dayFrom < thisDay && monthTill > thisMonth && dayTill > thisDay) || // 3
    //         (monthFrom == thisMonth && dayFrom < thisDay && monthTill == thisMonth && dayTill > thisDay) // 4
    //     ) {
    //         return true
    //     } 

    // }
    function notyet() {

    }

    // today 

    var now = moment();
    var thisMonth = now.format("MM");
    var thisDay = now.format("DD");

    var init = function() {

        
        $("#date").text(moment().format("YYYY MMMM D"));

        $todaysevents = $('#todays-events');
        var todaysDates = [];
        // var now = moment();

        // collect the relevant events (i.e. those that today happen, begin, continue, or end)

        //for every event in allDates
        for (var i = 0; i < allDates.length; i++) {
            //-------------------------------------
            var from = moment(allDates[i].from);
            

            // var from = dateObjectFromString(allDates[i].from);
            var monthFrom = from.format("MM");
            var dayFrom = from.format("DD");

            // if till != false
            if( moment(allDates[i].till).isValid()) {
                var till = moment(allDates[i].till);
                var monthTill = till.format("MM");
                var dayTill = till.format("DD");
            }
                
            //------------------------------------
            console.log('Filtering events ...');
            
            
            if ( moment(allDates[i].till).isValid()) {// it's a many-day event
                // console.log("allDates[i].till:" + allDates[i].till);
                console.log("----- Found event titled \""  + allDates[i].title + "\".");
                console.log("----- Is this a many-day event? " + moment(allDates[i].till).isValid());
                // console.log(" -- found a many-day event");


                if (thisMonth == monthFrom && thisDay == dayFrom){
                    console.log("this many-day event begins today: " + thisMonth+"-"+thisDay + " vs " + monthFrom + "-" + dayFrom);
                    todaysDates.push( allDates[i] );
                }
                    
                else if (thisMonth == monthTill && thisDay == dayTill){
                    console.log("this many-day event ends today: " + thisMonth+"-"+thisDay + " vs " + monthTill + "-" + dayTill);
                    todaysDates.push( allDates[i] )
                }
                else if ( ongoing(monthFrom, dayFrom, monthTill, dayTill)  ){
                    console.log('----- This many-day event is ongoing, picking it up.');
                    todaysDates.push( allDates[i] )
                }
                else {
                    console.log("----- This many-day event is not ongoing. Discarding it: " 
                        + monthFrom+"-"+dayFrom + " vs " + monthTill + "-" + dayTill);
                }
            }
            else { // it's a one-day event
                console.log("found a single-day event");

                // console.log("allDates[i].till:" + allDates[i].till);
                // console.log(now.month() + "." + now.day() + " vs " + from.month() + "." + from.day());
                if (thisMonth == monthFrom && thisDay == dayFrom) {
                    todaysDates.push( allDates[i] );
                }
            }
        } // collect todays dates

        console.log( "Finished filtering. Dates to show: " + todaysDates.length);
        console.log('======================================');
        // todaysDates.sort(compare);
        todaysDates.sort(compare);


        // Next: display the collected events
        // for every event in todaysDates

        var newYear = "";
        for (var i = 0; i< todaysDates.length; i++) {



            //-------------------------------------
            // var from = dateObjectFromString(todaysDates[i].from);
            // var yearFrom = from.getFullYear();
            // var monthFrom = from.getMonth();
            // var dayFrom = from.getDate();

            var from = moment(todaysDates[i].from);
            

            // var from = dateObjectFromString(allDates[i].from);
            var yearFrom = from.format("YYYY");
            var monthFrom = from.format("MM");
            var dayFrom = from.format("DD");

            // if till != false
            if( moment(todaysDates[i].till).isValid()) {
                // var till = dateObjectFromString(todaysDates[i].till);
                var till = moment(todaysDates[i].till);
                var yearTill = till.format("YYYY");
                var monthTill = till.format("MM");
                var dayTill = till.format("DD");
            }
                
            //------------------------------------
            // draw the year separator
            if(newYear != yearFrom ) {
                $yearSeparator = $("<h3>").text(yearFrom);
                $todaysevents.append( $yearSeparator);

            }
            newYear = yearFrom;
            console.log("newYear: " + newYear);



            //------------------------------------
            if ( moment(todaysDates[i].till).isValid() ) {// it's a many-day event
                console.log("---- Printing out events - found a many-day event");

                // console.log("have TILL " + todaysDates[i].till);
                if (thisMonth === monthFrom && thisDay === dayFrom){
                    console.log("Begins today");
                    var $datecontainer = $('<div>').attr('class','date').addClass("begins");
                    // create element for the event
                    var $pastperiod = $('<div>').attr('class','past-year').text( from.format("YYYY-MM-DD"));

                    var $progress = $('<div>').attr('class','progress').text("Today begins" );

                    // with link
                    // console.log("------" + !!todaysDates[i].link)
                    if(!!todaysDates[i].link) {
                        var $link = $('<a>').attr("href", todaysDates[i].link).attr("target", "_blank");
                        $link.text(todaysDates[i].title);
                        var $eventtitle = $('<div>').attr('class','event-title').append($link);
                    }
                    else {
                        // with no link
                        var $eventtitle = $('<div>').attr('class','event-title').text(todaysDates[i].title);
                    }
                    

                    
                    var $eventonthisdate = $('<div>').attr('class','whathappened').text(todaysDates[i].whathappened);
                    $datecontainer.append($pastperiod); 
                    $datecontainer.append($progress);
                                       
                    $datecontainer.append($eventtitle);
                    $datecontainer.append($eventonthisdate);

                    $todaysevents.append($datecontainer);
                }
                else if ( ongoing(monthFrom, dayFrom, monthTill, dayTill) ) {
                    console.log(monthFrom + "-" + dayFrom + " -> " + thisMonth +"-"+thisDay + " <- " + monthTill + "-" + dayTill);

                    console.log(todaysDates[i].title + " continues today");
                    // create container for the date
                    var $datecontainer = $('<div>').attr('class','date').addClass("continues");
                    // console.log ('~~~~~ class ' + $datecontainer.class);
                    // create element for the event
                    // console.log('YEAR: ' + aryDateObject.getFullYear());
                    var $pastperiod = $('<div>').attr('class','past-year').text(from.format("YYYY MMMM D")+" - "+ till.format("YYYY MMMM D"));
                    var $progress = $('<div>').attr('class','progress').text( "continues" );
                    
                    
                    // with link
                    // var $link = $('<a>').attr("href", todaysDates[i].link);
                    // $link.text(todaysDates[i].title);
                    // var $eventtitle = $('<div>').attr('class','event-title').append($link);

                    // // with no link
                    // // var $eventtitle = $('<div>').attr('class','event-title').text(todaysDates[i].title);

                    if(!!todaysDates[i].link) {
                        var $link = $('<a>').attr("href", todaysDates[i].link).attr("target", "_blank");
                        $link.text(todaysDates[i].title);
                        var $eventtitle = $('<div>').attr('class','event-title').append($link);
                    }
                    else {
                        // with no link
                        var $eventtitle = $('<div>').attr('class','event-title').text(todaysDates[i].title);
                    }

                    var $eventonthisdate = $('<div>').attr('class','whathappened').text(todaysDates[i].whathappened);
                    $datecontainer.append( $pastperiod, $progress,  $eventtitle, $eventonthisdate);
                    $todaysevents.append($datecontainer);

                }
                else if (thisMonth == monthTill && thisDay == dayTill) {
                    console.log("ends today")
                    // create container for the date
                    var $datecontainer = $('<div>').attr('class','date').addClass("ends");
                    // create element for the event
                    var $pastperiod = $('<div>').attr('class','past-year').text(from.format("YYYY MMMM D")+" - "+ till.format("YYYY MMMM D"));
                    // var $eventtitle = $('<div>').attr('class','event-title').text(todaysDates[i].title + ": ends");
                    var $progress = $('<div>').attr('class','progress').text("ends today" );
                    if(!!todaysDates[i].link) {
                        var $link = $('<a>').attr("href", todaysDates[i].link).attr("target", "_blank");
                        $link.text(todaysDates[i].title);
                        var $eventtitle = $('<div>').attr('class','event-title').append($link);
                    }
                    else {
                        // with no link
                        var $eventtitle = $('<div>').attr('class','event-title').text(todaysDates[i].title);
                    }
                    var $eventonthisdate = $('<div>').attr('class','whathappened').text(todaysDates[i].whathappened);

                    $datecontainer.append($pastperiod);
                    $datecontainer.append($progress);                    
                    $datecontainer.append($eventtitle);
                    $datecontainer.append($eventonthisdate);

                    $todaysevents.append($datecontainer);
                }
            }
            else { // it's a one-day event
                if (thisMonth == monthFrom && thisDay == dayFrom) {
                    console.log("Happens today");
                    var $datecontainer = $('<div>').attr('class','date').addClass("today");
                    // create element for the event
                    var $pastperiod = $('<div>').attr('class','past-year').text(from.format("YYYY MMMM D"));
                    var $progress = $('<div>').attr('class','progress').text(" is today" );
                    var $eventtitle = $('<div>').attr('class','event-title').text(todaysDates[i].title);
                    var $eventonthisdate = $('<div>').attr('class','whathappened').text(todaysDates[i].whathappened);

                    $datecontainer.append($pastperiod);
                    $datecontainer.append($progress);

                    $datecontainer.append($eventtitle);
                    $datecontainer.append($eventonthisdate);

                    $todaysevents.append($datecontainer);
                }

            }
        }


        $('h3').each( function(){
           // $(this).nextUntil('h3').wrapAll(document.createElement('div'));
           $(this).nextUntil('h3').wrapAll($('<div>').prop("class", "year-container"));

        });
    };

    return { init: init }

})();

window.onload = function () {
    // Mei.Events.init();            

    Mei.Dates.init();
            
}