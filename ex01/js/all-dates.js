var Mei = (function (name) {return name;}(Mei || {}));

Mei.Events = (function () {

    // var allDates = [
    //         // {
    //         //     from: "",
    //         //     till: "",
    //         //     title: "",
    //         //     whathappened: ""
    //         // },
    //         {
    //             from: "1941-09-08",
    //             till: "1944-01-27",
    //             title: "Блокада Ленинграда",
    //             whathappened: "Погибло: 332 059 солдат (24 324 небоевых), , 111 142 пропавших без вести, горожане: 16 747 убито при артобстрелах и бомбардировках, 632 253 погибли от голода"
    //         },
            
    //         // {
    //         //     from: "1945-05-11",
    //         //     till: "1945-06-26",
    //         //     title: "Англичане вместе с нацистами против критских партизан",
    //         //     whathappened: "на греческом острове Крит англичане ввязываются в бой с партизанами-коммунистами. Не могут с ними справиться и вызывают на помощь… 28-ю пехотную бригаду вермахта. Личный автомобиль британского генерала Престона берут под охрану два танка «Тигр». Британцы вместе с гитлеровцами убивают партизан. только когда повстанцев удалось оттеснить в горы района Соуда, немцы были отправлены в лагеря военнопленных. Этот скандальный случай всегда замалчивался Британией - информация о нём появилась только в 2000 году благодаря исследованию германских историков Марлен фон Ксиландер и Петера Шенка. Впрочем, неудивительно: ещё раньше согласно плану операции «Немыслимое», разработанному Генштабом Великобритании за месяц до конца войны, в случае конфликта с СССР англичане собирались перебросить на Восточный фронт 12 дивизий, сформированных из пленных немецких солдат. Их ничуть не смущало, что придётся атаковать советских друзей вместе с нацистскими убийцами."
    //         // },
    //         {
    //             from: "1945-04-05",
    //             till: "1945-05-20",
    //             title: "Грузинское восстание на острове Тексел",
    //             whathappened: "восстание грузинского батальона Вермахта (822-й пехотный батальон «Königin Tamara»; «Царица Тамара») из состава Грузинского легиона на острове Тексел Западно-Фризской гряды (Голландия) во время Второй мировой войны."
    //         },

    //         {
    //             from: "1942-05-15",
    //             till: "",
    //             title: "Закавказский фронт вновь сформирован",
    //             whathappened: ""
    //         },
    //         {
    //             from: "1941-10-30",
    //             till: "1942-07-09",
    //             title: " Оборона Севастополя.",
    //             whathappened: "Войска Крыма"
    //         },
    //         {
    //             from: "1943-02-09",
    //             till: "1943-05-24",
    //             title: "Краснодарская операция.",
    //             whathappened: "Северо-Кавказский фронт"
    //         },
    //         {
    //             from: "1943-04-17",
    //             till: "1943-06-07",
    //             title: "Воздушные сражения на Кубани",
    //             whathappened: "Северо-Кавказский фронт",
    //             link: "https://ru.wikipedia.org/wiki/%D0%92%D0%BE%D0%B7%D0%B4%D1%83%D1%88%D0%BD%D1%8B%D0%B5_%D1%81%D1%80%D0%B0%D0%B6%D0%B5%D0%BD%D0%B8%D1%8F_%D0%BD%D0%B0_%D0%9A%D1%83%D0%B1%D0%B0%D0%BD%D0%B8_(1943)"
    //         },
    //         {
    //             from: "1945-05-14",
    //             till: "1945-05-15",
    //             title: "Полянская битва в Словении",
    //             whathappened: "30 000 эсэсовцев и хорватских усташей пытаются прорваться к союзникам в Италию. Им противостоят югославские партизаны с помощью советских офицеров."
    //         },
    //         {
    //             from: "1942-05-20",
    //             till: "",
    //             title: "Северо-Кавказский фронт образован",
    //             whathappened: ""
    //         },
    //         {
    //             from: "1941-12-26",
    //             till: "1942-05-20",
    //             title: "Керченско-Феодосийская десантная операция",
    //             whathappened: "Крымский фронт"
    //         },
    //         {
    //             from: "1942-05-12",
    //             till: "1942-05-29",
    //             title: "Харьковская операция",
    //             whathappened: "Брянский фронт, Юго-Западный фронт и Южный фронт"
    //         },
    //         {
    //             from: "1942-01-07",
    //             till: "1942-05-20",
    //             title: "Демянская операция",
    //             whathappened: "Северо-Западный фронт"
    //         },
    //         {
    //             from: "1942-04-28",
    //             till: "1942-05-13",
    //             title: "Murmansk Operation",
    //             whathappened: "by Karelian front"
    //         },
    //         // {
    //         //     from: "1945-05-14",
    //         //     till: "",
    //         //     title: "test single-day event",
    //         //     whathappened: "testing"
    //         // },
    //         // {
    //         //     from: "1975-05-14",
    //         //     till: "1975-05-16",
    //         //     title: "Some multy-day event",
    //         //     whathappened: "Some multy-day event"
    //         // },
    //         // {
    //         //     from: "1975-05-11",
    //         //     till: "1975-05-14",
    //         //     title: "Some multy-day event",
    //         //     whathappened: "Some multy-day event"
    //         // },
            


    //         {
    //             from: "1944-05-06",
    //             till: "1944-05-22",
    //             title: "Fight for Sevastopol",
    //             whathappened: "Soviet forces - final attack on Sevastopol with a massive artillery bombardment."
    //         },

    //         {
    //             from: "1941-05-06",
    //             till: "",
    //             title: "Stalin is head of government",
    //             whathappened: "Stalin becomes the chairman of the Council of People's Commissars"
    //         },
            
    //         {
    //             from: "1945-05-06",
    //             till: "1945-05-11",
    //             title: "The Prague Offensive",
    //             whathappened: "The USSR troops - 3 Ukrainian Fronts (1st, 2nd, and 4th) - the offensive against the Hitlerites in the capital of Czechoslovakia."
    //         },
    //         {
    //             from: "1945-05-07",
    //             till: "",
    //             title: "Nazis surrender",
    //             whathappened: "Hitlerites signed an unconditional surrender at Allied headquarters in Reims, France, to take effect the following day, ending the European conflict of World War II."
    //         },
    //         {
    //             from: "1942-04-24",
    //             till: "1942-05-11",
    //             title: "Kestenga/Kiestinki operation",
    //             whathappened: "Karelian front - Kestenga (Kiestinki) operation"
    //         },
            
    //     ];

    var init = function() {

        // console.log("events init");

        // var allDates = [
        //     // {
        //     //     from: "",
        //     //     till: "",
        //     //     title: "",
        //     //     whathappened: ""
        //     // },
        //     {
        //         from: "1941-09-08",
        //         till: "1944-01-27",
        //         title: "Блокада Ленинграда",
        //         whathappened: "Погибло: 332 059 солдат (24 324 небоевых), , 111 142 пропавших без вести, горожане: 16 747 убито при артобстрелах и бомбардировках, 632 253 погибли от голода"
        //     },
            
        //     // {
        //     //     from: "1945-05-11",
        //     //     till: "1945-06-26",
        //     //     title: "Англичане вместе с нацистами против критских партизан",
        //     //     whathappened: "на греческом острове Крит англичане ввязываются в бой с партизанами-коммунистами. Не могут с ними справиться и вызывают на помощь… 28-ю пехотную бригаду вермахта. Личный автомобиль британского генерала Престона берут под охрану два танка «Тигр». Британцы вместе с гитлеровцами убивают партизан. только когда повстанцев удалось оттеснить в горы района Соуда, немцы были отправлены в лагеря военнопленных. Этот скандальный случай всегда замалчивался Британией - информация о нём появилась только в 2000 году благодаря исследованию германских историков Марлен фон Ксиландер и Петера Шенка. Впрочем, неудивительно: ещё раньше согласно плану операции «Немыслимое», разработанному Генштабом Великобритании за месяц до конца войны, в случае конфликта с СССР англичане собирались перебросить на Восточный фронт 12 дивизий, сформированных из пленных немецких солдат. Их ничуть не смущало, что придётся атаковать советских друзей вместе с нацистскими убийцами."
        //     // },
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
        //         whathappened: ""
        //     },
        //     {
        //         from: "1941-10-30",
        //         till: "1942-07-09",
        //         title: " Оборона Севастополя.",
        //         whathappened: "Войска Крыма"
        //     },
        //     {
        //         from: "1943-02-09",
        //         till: "1943-05-24",
        //         title: "Краснодарская операция.",
        //         whathappened: "Северо-Кавказский фронт"
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
        //         title: "Полянская битва в Словении",
        //         whathappened: "30 000 эсэсовцев и хорватских усташей пытаются прорваться к союзникам в Италию. Им противостоят югославские партизаны с помощью советских офицеров."
        //     },
        //     {
        //         from: "1942-05-20",
        //         till: "",
        //         title: "Северо-Кавказский фронт образован",
        //         whathappened: ""
        //     },
        //     {
        //         from: "1941-12-26",
        //         till: "1942-05-20",
        //         title: "Керченско-Феодосийская десантная операция",
        //         whathappened: "Крымский фронт"
        //     },
        //     {
        //         from: "1942-05-12",
        //         till: "1942-05-29",
        //         title: "Харьковская операция",
        //         whathappened: "Брянский фронт, Юго-Западный фронт и Южный фронт"
        //     },
        //     {
        //         from: "1942-01-07",
        //         till: "1942-05-20",
        //         title: "Демянская операция",
        //         whathappened: "Северо-Западный фронт"
        //     },
        //     {
        //         from: "1942-04-28",
        //         till: "1942-05-13",
        //         title: "Murmansk Operation",
        //         whathappened: "by Karelian front"
        //     },
        //     // {
        //     //     from: "1945-05-14",
        //     //     till: "",
        //     //     title: "test single-day event",
        //     //     whathappened: "testing"
        //     // },
        //     // {
        //     //     from: "1975-05-14",
        //     //     till: "1975-05-16",
        //     //     title: "Some multy-day event",
        //     //     whathappened: "Some multy-day event"
        //     // },
        //     // {
        //     //     from: "1975-05-11",
        //     //     till: "1975-05-14",
        //     //     title: "Some multy-day event",
        //     //     whathappened: "Some multy-day event"
        //     // },
            


        //     {
        //         from: "1944-05-06",
        //         till: "1944-05-22",
        //         title: "Fight for Sevastopol",
        //         whathappened: "Soviet forces - final attack on Sevastopol with a massive artillery bombardment."
        //     },

        //     {
        //         from: "1941-05-06",
        //         till: "",
        //         title: "Stalin is head of government",
        //         whathappened: "Stalin becomes the chairman of the Council of People's Commissars"
        //     },
            
        //     {
        //         from: "1945-05-06",
        //         till: "1945-05-11",
        //         title: "The Prague Offensive",
        //         whathappened: "The USSR troops - 3 Ukrainian Fronts (1st, 2nd, and 4th) - the offensive against the Hitlerites in the capital of Czechoslovakia."
        //     },
        //     {
        //         from: "1945-05-07",
        //         till: "",
        //         title: "Nazis surrender",
        //         whathappened: "Hitlerites signed an unconditional surrender at Allied headquarters in Reims, France, to take effect the following day, ending the European conflict of World War II."
        //     },
        //     {
        //         from: "1942-04-24",
        //         till: "1942-05-11",
        //         title: "Kestenga/Kiestinki operation",
        //         whathappened: "Karelian front - Kestenga (Kiestinki) operation"
        //     },
            
        // ];
    };


    return { init: init }

})();

window.onload = function () {
    console.log("Events loaded")
               
}