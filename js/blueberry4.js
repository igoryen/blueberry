var Mei = (function (name) {return name;}(Mei || {}));

Mei.Dates = (function () {

 // THE PRODUCTION 
    var allDates = [
        // {
        //     "from": "",
        //     "till": "",
        //     "title": "",
        //     "desc": "",
        //     "link": "",
        //     "result": ""
        // },
        // {
        //     "from": "",
        //     "till": "",
        //     "title": "",
        //     "desc": "",
        //     "link": "",
        //     "result": ""
        // },
        // {
        //     "from": "",
        //     "till": "",
        //     "title": "",
        //     "desc": "",
        //     "link": "",
        //     "result": ""
        // },
        // {
        //     "from": "",
        //     "till": "",
        //     "title": "",
        //     "desc": "",
        //     "link": "",
        //     "result": ""
        // },
        // {
        //     "from": "",
        //     "till": "",
        //     "title": "",
        //     "desc": "",
        //     "link": "",
        //     "result": ""
        // },
        // {
        //     "from": "",
        //     "till": "",
        //     "title": "",
        //     "desc": "",
        //     "link": "",
        //     "result": ""
        // },
        {
            "from": "1941-06-25",
            "till": "",
            "title": "DEU advances, we retreat",
            "desc": "DEU tanks advance at LVA, we retreat beyond Daugava River (West Dvina)",
            "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D0%B8%D1%8E%D0%BD%D1%8C_1941_%D0%B3%D0%BE%D0%B4%D0%B0)#25_.D0.B8.D1.8E.D0.BD.D1.8F_1941_.D0.B3.D0.BE.D0.B4.D0.B0._4-.D0.B9_.D0.B4.D0.B5.D0.BD.D1.8C_.D0.B2.D0.BE.D0.B9.D0.BD.D1.8B",
            "result": ""
        },
        {
            "from": "1941-07-17",
            "till": "",
            "title": "DEU creates Reichskommissariat Ostland",
            "desc": "A territory of Nazi DEU in Eastern Europe, consisting of DEU-occupied parts of SU Baltic republics and Western BLR ",
            "link": "https://ru.wikipedia.org/wiki/%D0%A0%D0%B5%D0%B9%D1%85%D1%81%D0%BA%D0%BE%D0%BC%D0%B8%D1%81%D1%81%D0%B0%D1%80%D0%B8%D0%B0%D1%82_%D0%9E%D1%81%D1%82%D0%BB%D0%B0%D0%BD%D0%B4",
            "result": ""
        },
        {
            "from": "1941-09-01",
            "till": "",
            "title": "DEU form Generalbezirk Weißruthenien",
            "desc": "A province in Reichskommissariat Ostland, a territory of Nazi DEU",
            "link": "https://ru.wikipedia.org/wiki/%D0%93%D0%B5%D0%BD%D0%B5%D1%80%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D0%B9_%D0%BE%D0%BA%D1%80%D1%83%D0%B3_%D0%91%D0%B5%D0%BB%D0%BE%D1%80%D1%83%D1%81%D1%81%D0%B8%D1%8F",
            "result": ""
        },
        {
            "from": "1941-06-28",
            "till": "",
            "title": "DEU takes Minsk (BLR)",
            "desc": "DEU occupies BLR capital and makes it center of Generalbezirk Weißruthenien.",
            "link": "https://ru.wikipedia.org/wiki/%D0%93%D0%B5%D0%BD%D0%B5%D1%80%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D0%B9_%D0%BE%D0%BA%D1%80%D1%83%D0%B3_%D0%91%D0%B5%D0%BB%D0%BE%D1%80%D1%83%D1%81%D1%81%D0%B8%D1%8F",
            "result": ""
        },
        {
            "from": "1943-02-27",
            "till": "",
            "title": "Alexander Matrosov dies a hero",
            "desc": "Alexander Matrosov dies blocking a German machine-gun in a concrete pillbox with his body.",
            "link": "https://ru.wikipedia.org/wiki/%D0%9C%D0%B0%D1%82%D1%80%D0%BE%D1%81%D0%BE%D0%B2,_%D0%90%D0%BB%D0%B5%D0%BA%D1%81%D0%B0%D0%BD%D0%B4%D1%80_%D0%9C%D0%B0%D1%82%D0%B2%D0%B5%D0%B5%D0%B2%D0%B8%D1%87",
            "result": ""
        },
        {
            "from": "1944-06-19",
            "till": "",
            "title": "Civillians rebuild and fund equipment",
            "desc": "Kursk oblast: restored and rebuilt farmers homes: 2,000. Restored all cultural and educational institutions. Personal savings spent to build army equipment: 2,381,144 Rubles.",
            "link": "http://thefireofthewar.ru/1418/index.php/1944/iyun/2459-19-06-1944",
            "result": ""
        },
        {
            "from": "1944-06-19",
            "till": "1944-06-29",
            "title": "Railroad War III",
            "desc": "Last 3rd stage of the Railroad War by Belarusian partisans.",
            "link": "http://thefireofthewar.ru/1418/index.php/1944/iyun/2459-19-06-1944",
            "result": ""
        },
        {
            "from": "1944-06-19",
            "till": "",
            "title": "We make Finns cry for help",
            "desc": "Leningrad front advances and clear the south shores of 2 lakes. Mannerheim asks Hitler for help.",
            "link": "http://thefireofthewar.ru/1418/index.php/1944/iyun/2459-19-06-1944",
            "result": ""
        },
        {
            "from": "1943-06-19",
            "till": "",
            "title": "Air raid at Volkhov",
            "desc": "Goal: Volkhov bridge that takes freight trains to Leningrad. Enemy lost 15 out of 60 warplanes.",
            "link": "http://thefireofthewar.ru/1418/index.php/1943/iyun/2093-19-06-1943",
            "result": ""
        },
        {
            "from": "1943-06-19",
            "till": "",
            "title": "Leningrad shelling",
            "desc": "Lasted for more than 4 hours. 300 shells at the city, including 119 at the Kirov plant. ",
            "link": "http://thefireofthewar.ru/1418/index.php/1943/iyun/2093-19-06-1943",
            "result": ""
        },
        {
            "from": "1943-06-19",
            "till": "",
            "title": "Alexander Matrosov hero posthumously",
            "desc": "A government decree passed.",
            "link": "http://thefireofthewar.ru/1418/index.php/1943/iyun/2093-19-06-1943",
            "result": ""
        },
        {
            "from": "1943-06-19",
            "till": "",
            "title": "Ukrainian partisans on raid",
            "desc": "Battles: 16. Troop trains derailed: 17. Metalled bridges blown up: 15.",
            "link": "http://thefireofthewar.ru/1418/index.php/1943/iyun/2093-19-06-1943",
            "result": ""
        },
        {
            "from": "1943-06-19",
            "till": "",
            "title": "Mining Danube",
            "desc": "Black Sea fleet aircraft are mining the Danube river.",
            "link": "http://thefireofthewar.ru/1418/index.php/1943/iyun/2093-19-06-1943",
            "result": ""
        },
        {
            "from": "1942-06-19",
            "till": "",
            "title": "Summer holidays helping farmers",
            "desc": "Decision: Leningrad public school students (G6-9) will form teams lead by their teachers and go to help farmers.",
            "link": "http://thefireofthewar.ru/1418/index.php/1942/iyun-1942/1064-19-06-1942",
            "result": ""
        },
        {
            "from": "1942-06-19",
            "till": "",
            "title": "Partisans start raid",
            "desc": "Latvian partisans with Leningrad partisans started on a raid to the west. Founded the Partisan Land.",
            "link": "http://thefireofthewar.ru/1418/index.php/1942/iyun-1942/1064-19-06-1942",
            "result": ""
        },
        {
            "from": "1942-06-19",
            "till": "",
            "title": "Yanks and Brits to fight Hitler",
            "desc": "Washington. Decide to send airborne troops to North Africa. Won't open the 2nd Front this year.",
            "link": "http://thefireofthewar.ru/1418/index.php/1942/iyun-1942/1064-19-06-1942",
            "result": ""
        },
        {
            "from": "1942-06-19",
            "till": "",
            "title": "We bomb Koenigsberg",
            "desc": "Our long-range aircraft make a first bomb strike at Koenigsberg.",
            "link": "http://thefireofthewar.ru/1418/index.php/1942/iyun-1942/1064-19-06-1942",
            "result": ""
        },
        {
            "from": "1942-06-19",
            "till": "",
            "title": "2nd army breaks free",
            "desc": "Our second attack army is helped by the 59th army breaks out of the entrapment and start moving out through a narrow passage.",
            "link": "http://thefireofthewar.ru/1418/index.php/1942/iyun-1942/1064-19-06-1942",
            "result": ""
        },
        {
            "from": "1944-06-20",
            "till": "1944-06-23",
            "title": "Railroad War III",
            "desc": "Belarusian partisans are raiding the railroads.",
            "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D0%B8%D1%8E%D0%BD%D1%8C_1944_%D0%B3%D0%BE%D0%B4%D0%B0)#20_.D0.B8.D1.8E.D0.BD.D1.8F_1944_.D0.B3.D0.BE.D0.B4.D0.B0._1095-.D0.B9_.D0.B4.D0.B5.D0.BD.D1.8C_.D0.B2.D0.BE.D0.B9.D0.BD.D1.8B",
            "result": "Partial paralysis of the German traffic in many roads in Belarus."
        },
        {
            "from": "1944-06-20",
            "till": "",
            "title": "We are at Svir River",
            "desc": "By evening our troops reach the south shore of Svir River.",
            "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D0%B8%D1%8E%D0%BD%D1%8C_1944_%D0%B3%D0%BE%D0%B4%D0%B0)#20_.D0.B8.D1.8E.D0.BD.D1.8F_1944_.D0.B3.D0.BE.D0.B4.D0.B0._1095-.D0.B9_.D0.B4.D0.B5.D0.BD.D1.8C_.D0.B2.D0.BE.D0.B9.D0.BD.D1.8B",
            "result": ""
        },
        {
            "from": "1944-06-20",
            "till": "",
            "title": "Vyborg is ours!",
            "desc": "Our troops assaulted and took Vyborg today at 7p.m. Over 60 localities are ours.",
            "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D0%B8%D1%8E%D0%BD%D1%8C_1944_%D0%B3%D0%BE%D0%B4%D0%B0)#20_.D0.B8.D1.8E.D0.BD.D1.8F_1944_.D0.B3.D0.BE.D0.B4.D0.B0._1095-.D0.B9_.D0.B4.D0.B5.D0.BD.D1.8C_.D0.B2.D0.BE.D0.B9.D0.BD.D1.8B",
            "result": ""
        },
        {
            "from": "1943-06-21",
            "till": "",
            "title": "Summary of the 2 years of war.",
            "desc": "Soviet Information Bureau: German/Soviet losses: soldiers and officers killed or taken captive: 6,400,000 / 4,200,000. Artillery: 56,500 / 35,000. Tanks: 42,400/30,000. warplanes: 43,000/23,000. German army is in crisis. Our army is stronger. Now is a perfect time for opening the Second Front.",
            "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D0%B8%D1%8E%D0%BD%D1%8C_1943_%D0%B3%D0%BE%D0%B4%D0%B0)#20_.D0.B8.D1.8E.D0.BD.D1.8F_1943_.D0.B3.D0.BE.D0.B4.D0.B0._729-.D0.B9_.D0.B4.D0.B5.D0.BD.D1.8C_.D0.B2.D0.BE.D0.B9.D0.BD.D1.8B",
            "result": ""
        },
        {
            "from": "1942-06-20",
            "till": "",
            "title": "Fierce fighting at Sevastopol",
            "desc": "Germans are having local successes near Sevastopol. ",
            "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D0%B8%D1%8E%D0%BD%D1%8C_1942_%D0%B3%D0%BE%D0%B4%D0%B0)",
            "result": ""
        },
        {
            "from": "1941-06-10",
            "till": "1941-06-19",
            "title": "German planes violate our borders",
            "desc": "Our border guards register border violations by German planes.",
            "link": "",
            "result": "Total 86 violations."
        },
        {
            "from": "1941-06-20",
            "till": "",
            "title": "Germans violate our borders",
            "desc": "Our state security tells German troops continue to concentrate. German planes violate our borders several times a day. Germans take off the barbed wire along the border.",
            "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D0%B8%D1%8E%D0%BD%D1%8C_1941_%D0%B3%D0%BE%D0%B4%D0%B0)",
            "result": ""
        },
        {
            "from": "1942-06-18",
            "till": "",
            "title": "5 athletes honored",
            "desc": "in Leningrad. Honored also as the city defenders. 3 of them saw 9000 people through universal military training. A professor of the Institute of Physical culture is a partisan detachment leader.",
            "link": "http://thefireofthewar.ru/1418/index.php/1942/iyun-1942/1063-18-06-1942",
            "result": ""
        },
        {
            "from": "1942-06-18",
            "till": "",
            "title": "Leningrad Shelled",
            "desc": "First time in the morning. Second at at 13:00. 132 shells fell in the city. 2 hit the Labor Palace. 1 hit a building on Nevsky Ave. Also hit the Hermitage and the Russian Museum.",
            "link": "http://thefireofthewar.ru/1418/index.php/1942/iyun-1942/1063-18-06-1942",
            "result": ""
        },
        {
            "from": "1942-06-18",
            "till": "",
            "title": "Art Exhibition",
            "desc": "Leningrad. Midday. Opened. At the House of Artists at Herzen Street. More than 300 works by Leningrad's artists during the Siege.",
            "link": "http://thefireofthewar.ru/1418/index.php/1942/iyun-1942/1063-18-06-1942",
            "result": ""
        },        
        {
            "from": "1942-06-18",
            "till": "",
            "title": "Icebreakers to the Kara Sea",
            "desc": "Started to convoy a large group of icebreakers from Arkhangelsk to provide navigation along the Northern Sea Route.",
            "link": "http://thefireofthewar.ru/1418/index.php/1942/iyun-1942/1063-18-06-1942",
            "result": ""
        },
        {
            "from": "1942-06-18",
            "till": "",
            "title": "Belostok's Last trip",
            "desc": "Транспорт «Белосток» возвратился в Новороссийск из последнего рейса в осажденный Севастополь, после чего рейсы транспортов были прекращены.",
            "link": "http://thefireofthewar.ru/1418/index.php/1942/iyun-1942/1063-18-06-1942",
            "result": ""
        },
        {
            "from": "1942-06-18",
            "till": "",
            "title": "British with USSR!",
            "desc": "СССР и англичане договорились, что будут вместе воевать с Гитлером и помогать друг другу после войны.",
            "link": "http://thefireofthewar.ru/1418/index.php/1942/iyun-1942/1063-18-06-1942",
            "result": ""
        }, 
        {
            "from": "1944-06-18",
            "till": "",
            "title": "Mannerheim Line broken",
            "desc": "Финский залив. Наши занимают более 100 нас. пунктов. Леонид Говоров (ком. Ленинградским фронтом) становится маршалом.",
            "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D0%B8%D1%8E%D0%BD%D1%8C_1944_%D0%B3%D0%BE%D0%B4%D0%B0)",
            "result": ""
        },
        {
            "from": "1944-06-17",
            "till": "",
            "title": "Finns lose > 120 localities",
            "desc": "Карельский перешеек. Наши занимают более 120 нас. пунктов. Финны с боями отходят.",
            "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D0%B8%D1%8E%D0%BD%D1%8C_1944_%D0%B3%D0%BE%D0%B4%D0%B0)",
            "result": ""
        },
        {
            "from": "1944-06-16",
            "till": "",
            "title": "Финны теряют > 100 нас пунктов.",
            "desc": "Карельский перешеек. Наши занимают более 100 населенных пунктов и отбрасывают финнов к водному рубежу Финский залив—озеро Куолемаярвй—озеро Каукярви—озеро Пэркярви. Маннергейм приказывает отступать.",
            "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D0%B8%D1%8E%D0%BD%D1%8C_1944_%D0%B3%D0%BE%D0%B4%D0%B0)",
            "result": ""
        },
        {
            "from": "1943-06-16",
            "till": "",
            "title": "Defective panthers.",
            "desc": "Germans find defects in their Panther tanks. Hitler receives a recommendation not to use them in Russia.",
            "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D0%B8%D1%8E%D0%BD%D1%8C_1943_%D0%B3%D0%BE%D0%B4%D0%B0)",
            "result": ""
        },
        {
            "from": "1943-06-16",
            "till": "",
            "title": "",
            "desc": "",
            "link": "",
            "result": ""
        },
        {
            "from": "1942-06-18",
            "till": "",
            "title": "Немцы идут по Крыму.",
            "desc": "Крым. Наши теряют Орлиную высоту, бухту Северная, ж.д. туннель, Гайтанские высоты, Федюхины высоты.",
            "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D0%B8%D1%8E%D0%BD%D1%8C_1942_%D0%B3%D0%BE%D0%B4%D0%B0)",
            "result": ""
        },
        {
            "from": "1942-06-17",
            "till": "",
            "title": "Наши отбиваются",
            "desc": "Группа армий Юг готовится к операции Фридерикус-II. Генерал Белов воюет западнее Кирова.",
            "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D0%B8%D1%8E%D0%BD%D1%8C_1942_%D0%B3%D0%BE%D0%B4%D0%B0)",
            "result": ""
        },
        {
            "from": "1942-06-17",
            "till": "",
            "title": "Немцы подходят к Сапун-Горе",
            "desc": "Гитлеровцы \"ошеломили\" наших и дошли до \"Орлиной высоты\" перед Сапун-Горой.",
            "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D0%B8%D1%8E%D0%BD%D1%8C_1942_%D0%B3%D0%BE%D0%B4%D0%B0)",
            "result": ""
        },
        {
            "from": "1942-06-17",
            "till": "",
            "title": "Максим Горький I пал",
            "desc": "Это - бронебатарея в несколько этажей под землей. Немцы подбили 2 наших орудия и убили командира-комиссара. Гарнизон сдался.",
            "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D0%B8%D1%8E%D0%BD%D1%8C_1942_%D0%B3%D0%BE%D0%B4%D0%B0)",
            "result": ""
        },
        {
            "from": "1942-06-17",
            "till": "",
            "title": "Наши держатся до последнего человека",
            "desc": "Немцы ожесточенно дерутся за каждый метр и вклиниваются на севере.",
            "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D0%B8%D1%8E%D0%BD%D1%8C_1942_%D0%B3%D0%BE%D0%B4%D0%B0)",
            "result": ""
        },
        {
            "from": "1942-06-16",
            "till": "",
            "title": "Наши прорываются через шоссе",
            "desc": "Ночью наши прорвались через Варшавское шоссе: дивизия Баранова и половина десантного корпуса.",
            "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D0%B8%D1%8E%D0%BD%D1%8C_1942_%D0%B3%D0%BE%D0%B4%D0%B0)",
            "result": ""
        },
        {
            "from": "1942-06-15",
            "till": "",
            "title": "Наши у Варшавского шоссе",
            "desc": "Наши десантники и кавалеристы прошли через болота и сосредоточились у Варшавского шоссе (Москва).",
            "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D0%B8%D1%8E%D0%BD%D1%8C_1942_%D0%B3%D0%BE%D0%B4%D0%B0)",
            "result": ""
        },
        {
            "from": "1941-06-19",
            "till": "",
            "title": "подготовка военных объектов",
            "desc": "Нарком обороны приказывает замаскировать аэродромы, воинские части и важные воен. объекты западных округов.",
            "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D0%B8%D1%8E%D0%BD%D1%8C_1941_%D0%B3%D0%BE%D0%B4%D0%B0)",
            "result": ""
        },
        {
            "from": "1941-06-18",
            "till": "",
            "title": "German embassy goes empty",
            "desc": "Security minister informs the government that the Embassy workers are leaving with families, destroying the embassy's archives.",
            "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D0%B8%D1%8E%D0%BD%D1%8C_1941_%D0%B3%D0%BE%D0%B4%D0%B0)",
            "result": ""
        },
        {
            "from": "1941-06-17",
            "till": "1941-06-21",
            "title": "Germans at the ready",
            "desc": "Their tanks are at the departure positions to advance across the West Bug River near the Brest fortress in Belarus.",
            "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D0%B8%D1%8E%D0%BD%D1%8C_1941_%D0%B3%D0%BE%D0%B4%D0%B0)",
            "result": ""
        },
        {
            "from": "1941-06-17",
            "till": "",
            "title": "Ударят в любое время",
            "desc": "Наш шпион сообщает, что немцы закончили готовиться и могут ударить в любое время. Сталин не верит.",
            "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D0%B8%D1%8E%D0%BD%D1%8C_1941_%D0%B3%D0%BE%D0%B4%D0%B0)",
            "result": ""
        },
        {
            "from": "1941-06-16",
            "till": "",
            "title": "Ускорение подготовки",
            "desc": "ЦК ВКП(б) и СНК СССР принял постановление «Об ускорении приведения в боевую готовность укреплённых районов».",
            "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D0%B8%D1%8E%D0%BD%D1%8C_1941_%D0%B3%D0%BE%D0%B4%D0%B0)",
            "result": "" 
        },
        {
            "from": "1942-06-17",
            "till": "",
            "title": "Смена каждый день!",
            "desc": "Ленинградская газета «Смена» начала выходить не три раза в неделю, а каждый день.Ее роль в воспитании молодежисслишком важна. Ее тираж увеличен с 10 до 15 тысяч экземпляров.",
            "link": "" ,
            "result": "" 
        },
        {
            "from": "1942-06-17",
            "till": "",
            "title": "Стреляют по ленинграду",
            "desc": "За 45 минут враг выпустил по городу 39 снарядов.",
            "link": "http://thefireofthewar.ru/1418/index.php/1942/iyun-1942/1062-17-06-1942",
            "result": ""
        },
        {
            "from": "1941-09-01",
            "till": "1941-12-31",
            "title": "250 взрывов в день",
            "desc": "Фашисты обстреливают Ленинград.",
            "link": "http://leningradpobeda.ru/vojjna-jazykom-tsifr/",
            "result": "свыше 30 тыс снарядов в сентябре-декабре 1941"
        },
        {
            "from": "1942-01-01",
            "till": "1942-01-31",
            "title": "19 ниже нуля",
            "desc": "средняя температура в Ленинграде",
            "link": "http://leningradpobeda.ru/vojjna-jazykom-tsifr/",
            "result": "8 дней температура была -30 и ниже."
        },
        {
            "from": "1941-12-01",
            "till": "1941-12-31",
            "title": "12-15 ниже нуля",
            "desc": "средняя температура в Ленинграде",
            "link": "http://leningradpobeda.ru/vojjna-jazykom-tsifr/",
            "result": ""
        },
        {
            "from": "1942-09-01",
            "till": "1942-09-30",
            "title": "230 в день",
            "desc": "... ленинградцев в среднем умирают в день. Примерно 10 человек в час.",
            "link": "http://leningradpobeda.ru/vojjna-jazykom-tsifr/",
            "result": "7 тыс человек умерли в сентябре."
        },
        {
            "from": "1942-07-01",
            "till": "1942-07-31",
            "title": "800 в день",
            "desc": "... ленинградцев в среднем умирают в день. Примерно 30 человек в час.",
            "link": "http://leningradpobeda.ru/vojjna-jazykom-tsifr/",
            "result": "25 тыс человек умерли в июле."
        },
        {
            "from": "1942-05-01",
            "till": "1942-05-31",
            "title": "1660 в день",
            "desc": "... ленинградцев в среднем умирают в день. Примерно 70 человек в час.",
            "link": "http://leningradpobeda.ru/vojjna-jazykom-tsifr/",
            "result": "50 тыс человек умерли в мае."
        },
        {
            "from": "1942-03-01",
            "till": "1942-03-31",
            "title": "3330 в день",
            "desc": "... ленинградцев в среднем умирают в день. Примерно 135 человек в час.",
            "link": "http://leningradpobeda.ru/vojjna-jazykom-tsifr/",
            "result": "100 тыс. человек умерло в первый месяц весны."
        },
        {
            "from": "1942-01-01",
            "till": "1942-02-28",
            "title": "4330 в день",
            "desc": "... ленинградцев в среднем умирают в день. Примерно 145 человек в час.",
            "link": "http://leningradpobeda.ru/vojjna-jazykom-tsifr/",
            "result": "260 тыс. человек не дожили до весны."
        },
        {
            "from": "1944-06-15",
            "till": "",
            "title": "Финны перегруппируются",
            "desc": "Маннергейм приказывает перегруппировать войска на Карельский перешеек. Финны едут туда на поезде.",
            "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D0%B8%D1%8E%D0%BD%D1%8C_1944_%D0%B3%D0%BE%D0%B4%D0%B0)",
            "result": ""
        },
        {
            "from": "1944-06-15",
            "till": "",
            "title": "Финны отступают",
            "desc": "чтобы не попасть в окружение. Наши овладели высотами у Куутерселькя.",
            "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D0%B8%D1%8E%D0%BD%D1%8C_1944_%D0%B3%D0%BE%D0%B4%D0%B0)",
            "result": ""
        },
        {
            "from": "1943-06-15",
            "till": "",
            "title": "население готовит оборону",
            "desc": "В результате в полосе наиболее вероятного наступления противника общая глубина инженерного оборудования местности достигала 300 километров.",
            "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D0%B8%D1%8E%D0%BD%D1%8C_1943_%D0%B3%D0%BE%D0%B4%D0%B0)",
            "result": ""
        },
        {
            "from": "1942-06-15",
            "till": "",
            "title": "Отбивают пехоту и танки",
            "desc": "На Харьковском направлении. Уничтожено танков: 180.",
            "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D0%B8%D1%8E%D0%BD%D1%8C_1942_%D0%B3%D0%BE%D0%B4%D0%B0)",
            "result": ""
        },
        {
            "from": "1941-06-15",
            "till": "",
            "title": "Гудериан вылетел в Варшаву",
            "desc": "осматривать танки перед наступлением",
            "link": "",
            "result": ""
        },
        {
            "from": "1941-06-15",
            "till": "",
            "title": "Скрытное накопление войск",
            "desc": "Более половины дивизий, составлявших второй эшелон и резерв западных военных округов, приведены в движение.",
            "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D0%B8%D1%8E%D0%BD%D1%8C_1941_%D0%B3%D0%BE%D0%B4%D0%B0)",
            "result": ""
        },
        {
            "from": "1944-06-14",
            "till": "",
            "title": "Наступление на Карельском перешейке",
            "desc": "Наши штурмуют финнов.",
            "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D0%B8%D1%8E%D0%BD%D1%8C_1944_%D0%B3%D0%BE%D0%B4%D0%B0)",
            "result": ""
        },
        {
            "from": "1942-06-14",
            "till": "",
            "title": "Немцы остановлены",
            "desc": "Маршал Семен Тимошенко остановил гитлеровцев в 35 км от Волчанска (Свердловск. обл.).",
            "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D0%B8%D1%8E%D0%BD%D1%8C_1942_%D0%B3%D0%BE%D0%B4%D0%B0)",
            "result": ""
        },
        {
            "from": "1941-06-14",
            "till": "",
            "title": "Подготовка Барбароссы",
            "desc": "Гитлер слущает доклады о готовящихся действиях в операции \"Барбаросса\". После обеда в речи объясняет почему хочет напасть на Россию. \"Разгромим Россию и Англия прекратит борьбу\"",
            "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D0%B8%D1%8E%D0%BD%D1%8C_1941_%D0%B3%D0%BE%D0%B4%D0%B0)",
            "result": ""
        },
        {
            "from": "1943-06-13",
            "till": "",
            "title": "Наступление на Карельском перешейке",
            "desc": "Наша авиация бьет финнов между Финским заливом и Куутерселькя. 23-я армия захватывают опорный пункт финнов на Мустоловских высотах.",
            "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D0%B8%D1%8E%D0%BD%D1%8C_1944_%D0%B3%D0%BE%D0%B4%D0%B0)",
            "result": ""
        },
        {
            "from": "1942-06-13",
            "till": "",
            "title": "Бомбардировка городского парка",
            "desc": "Воронежский Парк Пионеров. Массовое гуляние детей. Погибли от 100 до 300 погибших.",
            "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D0%B8%D1%8E%D0%BD%D1%8C_1942_%D0%B3%D0%BE%D0%B4%D0%B0)",
            "result": ""
        },
        {
            "from": "1942-06-13",
            "till": "",
            "title": "Окружение у Волчанска",
            "desc": "20 тыс наших попали в плен (Свердловск. обл.).",
            "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D0%B8%D1%8E%D0%BD%D1%8C_1942_%D0%B3%D0%BE%D0%B4%D0%B0)",
            "result": ""
        },
        {
            "from": "1942-06-13",
            "till": "",
            "title": "падение форта \"Сталин\"",
            "desc": "Крым: Фашисты овладели фортом\"Сталин\"",
            "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D0%B8%D1%8E%D0%BD%D1%8C_1942_%D0%B3%D0%BE%D0%B4%D0%B0)",
            "result": ""
        },
        {
            "from": "1941-06-13",
            "till": "",
            "title": "ТАСС опровергает слухи",
            "desc": "ТАСС говорит, что иностранные СМИ муссируют лживые и нелепые слухи, что СССР и Германия готовятся к войне",
            "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D0%B8%D1%8E%D0%BD%D1%8C_1941_%D0%B3%D0%BE%D0%B4%D0%B0)",
            "result": ""
        },
        {
            "from": "1941-06-13",
            "till": "",
            "title": "У нас - 303 дивизии",
            "desc": "Николай Ватутин (Заместитель Начальника Генерального штаба Красной Армии) подготовил Справку о развёртывании вооружённых сил СССР на случай войны на западе. В ней говорится, что всего в СССР имеется 303 дивизии, из них для развёртывания на западных границах в составе фронтов — 186 дивизий.",
            "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D0%B8%D1%8E%D0%BD%D1%8C_1941_%D0%B3%D0%BE%D0%B4%D0%B0)",
            "result": ""
        },
        {
            "from": "1941-06-13",
            "till": "",
            "title": "Директива",
            "desc": "«Для повышения боевой готовности войск округа к 1 июля 1941 г. все глубинные дивизии и управления корпусов с корпусными частями перевести ближе к госгранице в новые лагеря… Передвижения войск сохранить в полной тайне. Марш совершать с тактическими учениями, по ночам.» Семен Тимошенко (Нарком обороны СССР) и Георгий Жуков (начальник Генштаба Красной Армии). Директива Военному совету КОВО.",
            "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D0%B8%D1%8E%D0%BD%D1%8C_1941_%D0%B3%D0%BE%D0%B4%D0%B0)",
            "result": ""
        },
        {
            "from": "1944-06-12",
            "till": "",
            "title": "Бои у Ленинграда",
            "desc": "к 4 часам утра 109-й стрелковый корпус 21-й армии, наступая вдоль железной дороги на Выборг, выходит к линии Ваммелсуу—Тайпале. 30-й гвардейский стрелковый корпус занимает посёлок Кивеннапа. У побережья Финского залива в бой введён 108-й стрелковый корпус. Корпус пытается с ходу прорвать линию обороны в направлении Куутерселькя (Лебяжье), но успеха не имеет. Советские войска выходят на весь фронт обороны по линии Ваммелсуу—Тайпале, где закрепились отступившие 4-й и 3-й финские армейские корпуса. На центральную часть Карельского перешейка прибывают первые подразделения четвёртой финской дивизии из Восточной Карелии. Маннергейм отдаёт приказ о переброске на Карельский перешеек 17-й дивизии и 20-й бригады.",
            "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D0%B8%D1%8E%D0%BD%D1%8C_1944_%D0%B3%D0%BE%D0%B4%D0%B0)",
            "result": ""
        },
        {
            "from": "1942-06-12",
            "till": "",
            "title": "Наши обороняются и нападают",
            "desc": "На Харьковском направлении наши войска ведут оборонительные бои с наступающими танками и пехотой противника и сами наносят контрудары по немецко-фашистским войскам. На Севастопольском участке фронта продолжаются ожесточённые бои… На других участках фронта существенных изменений нет.",
            "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D0%B8%D1%8E%D0%BD%D1%8C_1942_%D0%B3%D0%BE%D0%B4%D0%B0)",
            "result": ""
        },
        {
            "from": "1941-06-12",
            "till": "",
            "title": "Наши начали скрытно готовиться",
            "desc": "командование приграничных военных округов под видом учений и изменения дислокации летних лагерей приступило к скрытному развёртыванию войск вторых эшелонов округов в соответствии с планами обороны государственной границы.",
            "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D0%B8%D1%8E%D0%BD%D1%8C_1941_%D0%B3%D0%BE%D0%B4%D0%B0)",
            "result": ""
        },
        {
            "from": "1941-06-12",
            "till": "1941-06-15",
            "title": "Скрытное подтягивание к границе",
            "desc": "По предписанию Григория Жуков (начальника Генерального штаба) западные приграничные округа скрытно выводят дивизии, расположенные в глубине, ближе к государственной границе. ",
            "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D0%B8%D1%8E%D0%BD%D1%8C_1941_%D0%B3%D0%BE%D0%B4%D0%B0)",
            "result": ""
        },
        {
            "from": "1941-06-12",
            "till": "",
            "title": "Запрет полетов у границы",
            "desc": "Семён Тимошенко (нарком обороны) приказывает «запретить полёты нашей авиации в приграничной полосе 10 км от госграницы.»",
            "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D0%B8%D1%8E%D0%BD%D1%8C_1941_%D0%B3%D0%BE%D0%B4%D0%B0)",
            "result": ""
        },
        {
            "from": "1944-01-22",
            "till": "",
            "title": "Последний обстрел",
            "desc": "Ленинграда",
            "link": "",
            "result": ""
        },
        {
            "from": "1944-01-01",
            "till": "1944-01-31",
            "title": "Январские обстрелы Ленинграда",
            "desc": "особенно жестокие",
            "link": "http://leningradpobeda.ru/vojjna-jazykom-tsifr/",
            "result": "по городу было выпущено 1 482 снаряда"
        },
        {
            "from": "1943-09-19",
            "till": "",
            "title": "самая тяжелая бомбардировка Ленинграда",
            "desc": "было сброшено 528 фугасных и 2 870 зажигательных бомб.",
            "link": "http://leningradpobeda.ru/vojjna-jazykom-tsifr/",
            "result": ""
        },
        {
            "from": "1943-07-31",
            "till": "",
            "title": "Итоговый подсчет обстрелов Ленинграда",
            "desc": "За июль 1943 года средняя ежедневная продолжительность обстрелов составила 9 час. 14 мин.",
            "link": "http://leningradpobeda.ru/vojjna-jazykom-tsifr/",
            "result": ""
        },
        {
            "from": "1943-08-17",
            "till": "",
            "title": "Самый Долгий артобстрел Ленинграда",
            "desc": "за все годы блокады, продолжительностью 13 час. 14 мин. В городе разорвалось более 2000 снарядов.",
            "link": "",
            "result": ""
        },
        {
            "from": "1942-09-02",
            "till": "1942-11-30",
            "title": "Бомбардировка Ленинграда",
            "desc": "Авианалеты и артобстрелы Ленинграда фашистами",
            "link": "http://leningradpobeda.ru/vojjna-jazykom-tsifr/",
            "result": "врагом было сделано 272 обстрела общей продолжительностью 430 часов. В этот же период немецкая авиация совершила около 100 налетов."
        },
        {
            "from": "1942-08-09",
            "till": "",
            "title": "В Ленинграде играет Шостакович",
            "desc": "90 минут по радио звучала «Седьмая Ленинградская симфония» Дмитрия Шостаковича. Это были минуты полного затишья: не стреляла ни одна вражеская батарея, не прорвался к городу ни один немецкий самолет.",
            "link": "",
            "result": ""
        },
        {
            "from": "1941-12-26",
            "till": "",
            "title": "Нормы выдачи хлеба в Ленинграде",
            "desc": "повышены до 350 граммов рабочим и до 200 граммов остальным жителям города (при этом до 60% хлеба составляли практически несъедобные примеси, добавлявшиеся вместо муки). Все остальные продукты почти перестали выдаваться.",
            "link": "http://leningradpobeda.ru/vojjna-jazykom-tsifr/",
            "result": ""
        },
        {
            "from": "1941-11-20",
            "till": "1941-12-25",
            "title": "Нормы выдачи хлеба в Ленинграде",
            "desc": "рабочим – 250 граммов, служащим и членам их семей – 125 граммов; личному составу военизированной охраны, пожарных команд, истребительных отрядов, ремесленных училищ и школ ФЗО, находившемуся на котловом довольствии – 300 грамм.",
            "link": "http://leningradpobeda.ru/vojjna-jazykom-tsifr/",
            "result": "Такие нормы привели к резкому скачку смертности от голода – за декабрь 1941 года умерло около 50 тысяч человек."
        },
        {
            "from": "1941-10-01",
            "till": "1941-11-13",
            "title": "Нормы выдачи хлеба в Ленинграде",
            "desc": "рабочим – 400 граммов; служащим – 200 граммов; иждивенцам и детям – 200 граммов.",
            "link": "http://leningradpobeda.ru/vojjna-jazykom-tsifr/",
            "result": ""
        },
        {
            "from": "1941-07-18",
            "till": "1941-09-30",
            "title": "Нормы выдачи хлеба в Ленинграде",
            "desc": "Рабочим – 800 граммов; служащим – 600 граммов; иждивенцам и детям – 400 граммов.",
            "link": "http://leningradpobeda.ru/vojjna-jazykom-tsifr/",
            "result": ""
        },
        {
            "from": "1941-07-13",
            "till": "",
            "title": "Гиммлер призвал истреблять русских как недочеловеков.",
            "desc": "Когда вы, друзья мои, сражаетесь на Востоке, вы продолжаете ту же борьбу против того же недочеловечества, против тех же низших рас, которые когда-то выступали под именем гуннов, позднее — 1000 лет назад во времена королей Генриха и Оттона I, — под именем венгров, а впоследствии под именем татар; затем они явились снова под именем Чингисхана и монголов. Сегодня они называются русскими под политическим знаменем большевизма.",
            "link": "https://ru.wikipedia.org/wiki/%D0%9D%D0%B0%D1%86%D0%B8%D1%81%D1%82%D1%81%D0%BA%D0%B0%D1%8F_%D1%80%D0%B0%D1%81%D0%BE%D0%B2%D0%B0%D1%8F_%D0%BF%D0%BE%D0%BB%D0%B8%D1%82%D0%B8%D0%BA%D0%B0",
            "result": ""
        },
        {
            "from": "1941-10-02",
            "till": "",
            "title": "Русский должен умереть",
            "desc": "Военнослужащие вермахта сделали коллективную фотографию в Брянской области. На школьной доске написано мелом: «Русский должен умереть, чтобы мы жили» (нем. Der Russe muβ sterben, damit wir leben).",
            "link": "https://ru.wikipedia.org/wiki/%D0%A4%D0%B0%D0%B9%D0%BB:Russe_muss_sterben.JPG",
            "result": ""
        },
        {
            "from": "1941-09-29",
            "till": "1941-09-30",
            "title": "Расстрелы убитых в Бабьем Яру",
            "desc": "Зондеркоманда «4а» под командованием штандартенфюрера Пауля Блобеля (входившая в состав айнзатцгруппы «С» под командованием бригаденфюрера СС и генерал-майора полиции Отто Раша) при участии двух команд полицейского полка «Юг» и украинской вспомогательной полиции расстреливают людей в овраге Бабий Яр ",
            "link": "https://ru.wikipedia.org/wiki/%D0%91%D0%B0%D0%B1%D0%B8%D0%B9_%D0%AF%D1%80",
            "result": "Было убито 33 771 человека (это количество не включает малолетних детей до 3-х лет, которых тоже убивали в эти два дня. На этом расстрелы не прекратились."
        },
        {
            "from": "1941-09-27",
            "till": "",
            "title": "Первый расстрел Бабьего Яра",
            "desc": "Фашисты расстреляли 752 пациента психиатрической больницы им. Ивана Павлова, которая находилась в непосредственной близости к оврагу Бабий Яр",
            "link": "https://ru.wikipedia.org/wiki/%D0%91%D0%B0%D0%B1%D0%B8%D0%B9_%D0%AF%D1%80",
            "result": ""
        },
        {
            "from": "1941-11-20",
            "till": "",
            "title": "В Ленинграде начинается голод",
            "desc": "В пятый раз населению и в третий раз войскам — пришлось сократить нормы выдачи хлеба. Воины на передовой стали получать 500 граммов в сутки; рабочие — 250 граммов; служащие, иждивенцы и воины, не находящиеся на передовой, — 125 граммов. И кроме хлеба, почти ничего. В блокированном Ленинграде начался голод.",
            "link": "https://ru.wikipedia.org/wiki/%D0%91%D0%BB%D0%BE%D0%BA%D0%B0%D0%B4%D0%B0_%D0%9B%D0%B5%D0%BD%D0%B8%D0%BD%D0%B3%D1%80%D0%B0%D0%B4%D0%B0#cite_note-.D0.94.D0.B0.D1.88.D0.B8.D1.87.D0.B5.D0.B2.2C.D0.A22.E2.80.941973.E2.80.94.E2.80.9447-8",
            "result": ""
        },
        {
            "from": "1941-09-12",
            "till": "",
            "title": "Еда в Ленинграде",
            "desc": "Хлебное зерно и мука на 35 суток. Крупа и макароны на 30 суток. Мясо и мясопродукты на 33 суток. Жиры на 45 суток. Сахар и кондитерские изделия на 60 суток.",
            "link": "https://ru.wikipedia.org/wiki/%D0%91%D0%BB%D0%BE%D0%BA%D0%B0%D0%B4%D0%B0_%D0%9B%D0%B5%D0%BD%D0%B8%D0%BD%D0%B3%D1%80%D0%B0%D0%B4%D0%B0#cite_note-.D0.94.D0.B0.D1.88.D0.B8.D1.87.D0.B5.D0.B2.2C.D0.A22.E2.80.941973.E2.80.94.E2.80.9447-8",
            "result": ""
        },
        {
            "from": "1944-06-10",
            "till": "",
            "title": "Массовое убийство в Орадур-сюр-Глан",
            "desc": "Рота «Ваффен-СС» разрушила деревню Орадур-сюр-Глан в департаменте Верхняя Вьенна в оккупированной нацистами части Франции и истребила 642 жителя деревни, в том числе женщин и детей.",
            "link": "https://ru.wikipedia.org/wiki/%D0%9C%D0%B0%D1%81%D1%81%D0%BE%D0%B2%D0%BE%D0%B5_%D1%83%D0%B1%D0%B8%D0%B9%D1%81%D1%82%D0%B2%D0%BE_%D0%B2_%D0%9E%D1%80%D0%B0%D0%B4%D1%83%D1%80-%D1%81%D1%8E%D1%80-%D0%93%D0%BB%D0%B0%D0%BD",
            "result": ""
        },
        {
            "from": "1944-06-06",
            "till": "1945-05-09",
            "title": "Второй (Западный) фронт",
            "desc": "Союзники помогают СССР громить Гитлера",
            "link": "",
            "result": ""
        },
        {
            "from": "1944-07-25",
            "till": "1944-07-31",
            "title": "Операция «Кобра»",
            "desc": "Генерал армии США Омаром Брэдли проводит операцию, целью которой является вывод военных действий из географических рамок нормандской зоны вторжения, занятой во время Нормандской операции и последующих затяжных боев. ",
            "link": "https://ru.wikipedia.org/wiki/%D0%9E%D0%BF%D0%B5%D1%80%D0%B0%D1%86%D0%B8%D1%8F_%C2%AB%D0%9A%D0%BE%D0%B1%D1%80%D0%B0%C2%BB",
            "result": "Большой успех союзнических войск. Создался Фалезский котёл, немцы потеряли позиции в северозападной Франции."
        },
        {
            "from": "1944-06-06",
            "till": "",
            "title": "День Д, высадка в Нормандии",
            "desc": "Бельгия, БИ, Греция, Нидерланды, Польша,  США, Франция, Чехословакия.",
            "link": "",
            "result": ""
        },
        {
            "from": "1944-06-06",
            "till": "1944-07-01",
            "title": "Операция «Нептун»",
            "desc": "Начальная фаза операции «Оверлорд». Цель: завоевание плацдарма на континенте",
            "link": "https://ru.wikipedia.org/wiki/%D0%9E%D0%BF%D0%B5%D1%80%D0%B0%D1%86%D0%B8%D1%8F_%C2%AB%D0%9D%D0%B5%D0%BF%D1%82%D1%83%D0%BD%C2%BB",
            "result": ""
        },
        {
            "from": "1944-06-06",
            "till": "1944-08-31",
            "title": "Нормандская операция (операция «Оверлорд»)",
            "desc": "Стратегическая операция союзников (США, БИ, Франция, Польша, Нидерланды, Бельгия, Чехословакия, Греция) по высадке войск в Нормандии (Франция)",
            "link": "https://ru.wikipedia.org/wiki/%D0%9D%D0%BE%D1%80%D0%BC%D0%B0%D0%BD%D0%B4%D1%81%D0%BA%D0%B0%D1%8F_%D0%BE%D0%BF%D0%B5%D1%80%D0%B0%D1%86%D0%B8%D1%8F",
            "result": "Операция открыла Западный (или т. н. «второй») фронт в Европе во Второй мировой войне."
        },
        {
            "from": "1944-06-11",
            "till": "",
            "title": "Наши наступают в Ленинградской области",
            "desc": "30-й гвардейский стрелковый корпус 21-й армии продолжает наступление вдоль Выборгского шоссе в сторону посёлка Кивеннапа (Первомайское). 109-й стрелковый корпус сегодня занял посёлки Терийоки (Зеленогорск) и Райвола (Рощино). Сегодня же в наступление на направлении Валкъярви перешла 23-я армия А. И. Черепанова. Из фронтового резерва для развития успеха 21-я и 23-я армии получили на усиление два стрелковых корпуса. Перед линией Ваммелсуу—Тайпале идут упорные бои. На участке южнее Кивеннапа наши разбили три финских егерских батальона. Под угрозой левому флангу дивизия финского 4-го армейского корпуса вынуждена отступить на линию Ваммелсуу—Тайпале. Финское командование начинает перебрасывать на Карельский перешеек войска из Южной Карелии и Северной Финляндии.",
            "link": "",
            "result": ""
        },
        {
            "from": "1943-06-11",
            "till": "",
            "title": "Письмо Черчиллю и Америке",
            "desc": "Сталин подчеркивает, что отсрочка открытия второго фронта (до 1944 года) создаёт исключительные трудности для Советского Союза, сражающегося «почти в единоборстве с ещё очень сильным и опасным врагом».",
            "link": "",
            "result": ""
        },
        {
            "from": "1942-06-11",
            "till": "",
            "title": "Наши наносят контрудар",
            "desc": "Утро. Войска Севастопольского оборонительного района нанесли контрудар по вклинившимся вражеским частям. Контрудар осуществляли войска третьего и четвёртого секторов. Их поддерживали все артиллерийские средства секторов, а также батареи береговой артиллерии и кораблей. Положение было восстановлено: наши части заняли полустанок Мекензиевы горы и продвинулись на 250—300 метров северо-восточнее его.",
            "link": "",
            "result": ""
        },
        {
            "from": "1942-06-12",
            "till": "",
            "title": "Опубликование англо-советско-американских коммюнике",
            "desc": "«достигнута полная договорённость в отношении неотложных задач создания второго фронта в Европе в 1942 г.».",
            "link": "",
            "result": ""
        },
        {
            "from": "1942-06-11",
            "till": "",
            "title": "Американцы обязались создать второй фронт",
            "desc": "В Вашингтоне подписано соглашение между СССР и США «О принципах, применимых к взаимной помощи в ведении войны против агрессии».",
            "link": "",
            "result": ""
        },
        {
            "from": "1941-06-29",
            "till": "",
            "title": "",
            "desc": "Начинается эвакуация ленинградцев",
            "link": "",
            "result": ""
        },
        {
            "from": "1941-06-11",
            "till": "",
            "title": "Директива № 32",
            "desc": "Гитлер определяет время завершения «победоносного похода на Восток» как конец осени",
            "link": "https://ru.wikipedia.org/wiki/%D0%91%D0%BB%D0%BE%D0%BA%D0%B0%D0%B4%D0%B0_%D0%9B%D0%B5%D0%BD%D0%B8%D0%BD%D0%B3%D1%80%D0%B0%D0%B4%D0%B0#cite_note-.D0.94.D0.B0.D1.88.D0.B8.D1.87.D0.B5.D0.B2.2C.D0.A22.E2.80.941973.E2.80.94.E2.80.9447-8",
            "result": ""
        },
        {
            "from": "1941-06-29",
            "till": "",
            "title": "Финны вторгаются в СССР",
            "desc": "Финские войска, перейдя государственную границу, начали сухопутную операцию против СССР.",
            "link": "",
            "result": ""
        },
        {
            "from": "1941-06-25",
            "till": "",
            "title": "Morning strike at FIN & NOR airfields",
            "desc": "Our airforce (Northern Fleet and Baltic fleet) - 500 planes - deal a massive but ineffective strike at FIN and NOR airfields, the base of FIN AF and DEU 5th Air Army. FIN parliament votes for a war against us.",
            "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D0%B8%D1%8E%D0%BD%D1%8C_1941_%D0%B3%D0%BE%D0%B4%D0%B0)#25_.D0.B8.D1.8E.D0.BD.D1.8F_1941_.D0.B3.D0.BE.D0.B4.D0.B0._4-.D0.B9_.D0.B4.D0.B5.D0.BD.D1.8C_.D0.B2.D0.BE.D0.B9.D0.BD.D1.8B",
            "result": ""
        },
        {
            "from": "1941-06-21",
            "till": "",
            "title": "FIN attacks USSR",
            "desc": "FIN begins military operations against USSR",
            "link": "",
            "result": ""
        },
        {
            "from": "1941-06-20",
            "till": "",
            "title": "Финны на границе",
            "desc": "отмобилизованная армия сосредоточилась на советско-финской границе.",
            "link": "",
            "result": ""
        },
        {
            "from": "1941-06-17",
            "till": "",
            "title": "Мобилизация в Финляндии",
            "desc": "в Финляндии был издан указ о мобилизации всей полевой армии",
            "link": "",
            "result": ""
        },
        {
            "from": "1941-06-22",
            "till": "",
            "title": "Великая Отечественная Война",
            "desc": "Война Союза Советских Социалистических Республик против вторгшихся на советскую территорию нацистской Германии и её европейских союзников (Венгрии, Италии, Румынии, Словакии, Финляндии, Хорватии).",
            "link": "https://ru.wikipedia.org/wiki/%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%B0%D1%8F_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%B0%D1%8F_%D0%B2%D0%BE%D0%B9%D0%BD%D0%B0",
            "result": "победа Красной Армии и безоговорочной капитуляцией вооружённых сил Германии"
        },
        {
            "from": "1941-06-22",
            "till": "1941-09-30",
            "title": "Operation Barbarossa",
            "desc": "План нападения на СССР. Рассчитан на молниеносную войну",
            "link": "https://ru.wikipedia.org/wiki/%D0%9E%D0%BF%D0%B5%D1%80%D0%B0%D1%86%D0%B8%D1%8F_%C2%AB%D0%91%D0%B0%D1%80%D0%B1%D0%B0%D1%80%D0%BE%D1%81%D1%81%D0%B0%C2%BB",
            "result": "оперативный — поражение советских войск в приграничных сражениях и отступление вглубь страны при относительно малых потерях вермахта и союзников Германии; стратегический итог — провал стратегии блицкрига, рассчитанной на разгром СССР в ходе кампании 1941 года."
        },
        {
            "from": "1943-03-22",
            "till": "",
            "title": "Хатынь",
            "desc": "Карательный отряд в качестве мести за убийство нескольких немецких военнослужащих, в соответствии с принципом коллективного наказания, за возможное оказание жителями деревни помощи партизанам сжёг заживо или расстрелял 149 жителей Хатыни. ",
            "link": "https://ru.wikipedia.org/wiki/%D0%A5%D0%B0%D1%82%D1%8B%D0%BD%D1%8C",
            "result": "В карательной операции участвовали «118-й шуцманшафт батальон» (118 Batalion Schutzmannschaft / SchutzmannschaftsBtl 118/Ukrainian Schuma) и особый батальон СС «Дирлевангер»"
        },
        {
            "from": "1944-05-31",
            "till": "",
            "title": "4-й Украинский фронт расформирован",
            "desc": "",
            "link": "",
            "result": ""
        },
        {
            "from": "1944-06-29",
            "till": "1944-07-04",
            "title": "Полоцкая операция",
            "desc": "1-й Прибалтийский фронт",
            "link": "",
            "result": ""
        },
        {
            "from": "1944-06-29",
            "till": "1944-07-04",
            "title": "Минская операция",
            "desc": "1-й Прибалтийский фронт, 3-й Белорусский фронт",
            "link": "https://ru.wikipedia.org/wiki/%D0%9C%D0%B8%D0%BD%D1%81%D0%BA%D0%B0%D1%8F_%D0%BE%D0%BF%D0%B5%D1%80%D0%B0%D1%86%D0%B8%D1%8F",
            "result": "Победа Красной армии, освобождение Минска."
        },
        {
            "from": "1944-06-23",
            "till": "1944-06-29",
            "title": "Bobruysk Offensive. Бобруйская операция",
            "desc": "1-й Белорусский фронт",
            "link": "https://ru.wikipedia.org/wiki/%D0%91%D0%BE%D0%B1%D1%80%D1%83%D0%B9%D1%81%D0%BA%D0%B0%D1%8F_%D0%BE%D0%BF%D0%B5%D1%80%D0%B0%D1%86%D0%B8%D1%8F",
            "result": "Победа СССР. Создание РККА условий для быстрого наступления на Минск и Барановичи."
        },
        {
            "from": "1944-06-24",
            "till": "1944-06-29",
            "title": "Могилёвская операция",
            "desc": "2-й Белорусский фронт. Стратегическая военная операция вооружённых сил СССР против немецких войск",
            "link": "https://ru.wikipedia.org/wiki/%D0%9C%D0%BE%D0%B3%D0%B8%D0%BB%D1%91%D0%B2%D1%81%D0%BA%D0%B0%D1%8F_%D0%BE%D0%BF%D0%B5%D1%80%D0%B0%D1%86%D0%B8%D1%8F",
            "result": "Победа СССР"
        },
        {
            "from": "1944-06-23",
            "till": "1944-06-28",
            "title": "Витебско-Оршанская операция",
            "desc": "1-й Прибалтийский фронт, 3-й Белорусский фронт",
            "link": "",
            "result": ""
        },
        {
            "from": "1944-06-23",
            "till": "1944-08-29",
            "title": "Белорусская операция",
            "desc": "Белорусская наступательная операция «Багратион» — крупномасштабная наступательная операция. 1-й Прибалтийский фронт, 3-й Белорусский фронт, 2-й Белорусский фронт, 1-й Белорусский фронт",
            "link": "https://ru.wikipedia.org/wiki/%D0%91%D0%B5%D0%BB%D0%BE%D1%80%D1%83%D1%81%D1%81%D0%BA%D0%B0%D1%8F_%D0%BE%D0%BF%D0%B5%D1%80%D0%B0%D1%86%D0%B8%D1%8F_(1944)",
            "result": "Одна из крупнейших военных операций за всю историю человечества. Освобождена территория Белорусии, восточной Польши и часть Прибалтики и практически полностью разгромлена германская группа армий «Центр». Вермахт понёс тяжелейшие потери, отчасти из-за того, что А. Гитлер запрещал любое отступление. Восполнить эти потери впоследствии Германия была уже не в состоянии."
        },
        {
            "from": "1941-06-25",
            "till": "1944-09-19",
            "title": "Soviet-Finnish war",
            "desc": "Finns are on the Axis side. Aim: seize USSR's lands up to Border of the Three Isthmi (Karelian, Olonets and White Sea isthmus)",
            "link": "https://ru.wikipedia.org/wiki/%D0%A1%D0%BE%D0%B2%D0%B5%D1%82%D1%81%D0%BA%D0%BE-%D1%84%D0%B8%D0%BD%D1%81%D0%BA%D0%B0%D1%8F_%D0%B2%D0%BE%D0%B9%D0%BD%D0%B0_(1941%E2%80%941944)",
            "result": "Победа СССР. Московское перемирие, Финляндия объявила войну нацистской Германии."
        },
        {
            "from": "1944-06-10",
            "till": "1944-08-09",
            "title": " Выборгско-Петрозаводская операция",
            "desc": "Карельский фронт и Ленинградский фронт. Наступление советских войск в Карелии, в ходе Советско-финской войны 1941—1944 с целью ликвидации угрозы Ленинграду, идущим из Мурманска в центральные районы СССР коммуникациям, а также выведение Финляндии из войны",
            "link": "https://ru.wikipedia.org/wiki/%D0%92%D1%8B%D0%B1%D0%BE%D1%80%D0%B3%D1%81%D0%BA%D0%BE-%D0%9F%D0%B5%D1%82%D1%80%D0%BE%D0%B7%D0%B0%D0%B2%D0%BE%D0%B4%D1%81%D0%BA%D0%B0%D1%8F_%D0%BE%D0%BF%D0%B5%D1%80%D0%B0%D1%86%D0%B8%D1%8F",
            "result": "Победа СССР. Финляндия выходит из войны."
        },
        {
            "from": "1942-05-13",
            "till": "",
            "title": "Умерла Мария Савичева",
            "desc": "53-летняя мать Тани Савичевой, Ленинград, 7.30 утра",
            "link": "",
            "result": "\"Савичевы умерли. Умерли все. Осталась одна Таня.\""
        },
        {
            "from": "1942-05-10",
            "till": "",
            "title": "Умер Алексей Савичев",
            "desc": "71-летний дядя Тани Савичевой, в Ленинграде, 4 часа дня",
            "link": "",
            "result": "третья степень алиментарной дистрофии"
        },
        {
            "from": "1942-04-13",
            "till": "",
            "title": "Смерть Василия Савичева",
            "desc": "56-летний дядя Тани Савичевой, в Ленинграде",
            "link": "",
            "result": "2 часа ночи, "
        },
        {
            "from": "1942-03-17",
            "till": "",
            "title": "Смерть Леонида Савичева",
            "desc": "Лёка, 24-летний брат Тани Савичевой, в Ленинграде.",
            "link": "",
            "result": "алиментарная дистрофия"
        },
        {
            "from": "1942-01-25",
            "till": "",
            "title": "Смерть Евдокии Арсеньевой",
            "desc": "бабушка Тани Савичевой в Ленинграде, 3 часа дня.",
            "link": "",
            "result": "третья степень алиментарной дистрофии"
        },
        {
            "from": "1941-12-28",
            "till": "",
            "title": "Смерть Жени Савичевой",
            "desc": "32-летняя сестра Тани Савичевой. Здоровье было подорвано из-за частой донорской сдачи крови, и из-за того, что ей приходилось идти от дома до завода пешком почти семь километров. Иногда она оставалась ночевать на заводе, чтобы сохранить силы для работы ещё на две смены. В этот Евгения не пришла на завод и обеспокоенная её отсутствием, утром в воскресенье, 28 декабря, Нина отпросилась с ночной смены и поспешила к сестре на Моховую улицу, где 32-летняя Евгения умерла у неё на руках",
            "link": "",
            "result": ""
        },
        {
            "from": "1944-07-01",
            "till": "",
            "title": "Смерть Тани Савичевой",
            "desc": "14-летняя ленинградская школьница умерла в эвакуации",
            "link": "https://ru.wikipedia.org/wiki/%D0%A1%D0%B0%D0%B2%D0%B8%D1%87%D0%B5%D0%B2%D0%B0,_%D0%A2%D0%B0%D1%82%D1%8C%D1%8F%D0%BD%D0%B0_%D0%9D%D0%B8%D0%BA%D0%BE%D0%BB%D0%B0%D0%B5%D0%B2%D0%BD%D0%B0",
            "result": ""
        },
        {
            "from": "1941-03-03",
            "till": "1941-07-11",
            "title": "TEST 2",
            "desc": "",
            "link": "",
            "result": ""
        },
        {
            "from": "1941-01-04",
            "till": "1941-07-07",
            "title": "TEST",
            "desc": "test test",
            "link": "",
            "result": ""
        },
        {
            "from": "1941-10-30",
            "till": "1942-07-09",
            "title": "Оборона Севастополя",
            "desc": "Войска Крыма",
            "link": "https://ru.wikipedia.org/wiki/%D0%9E%D0%B1%D0%BE%D1%80%D0%BE%D0%BD%D0%B0_%D0%A1%D0%B5%D0%B2%D0%B0%D1%81%D1%82%D0%BE%D0%BF%D0%BE%D0%BB%D1%8F_(1941%E2%80%941942)",
            "result": ""
        },
        {
            "from": "1942-06-28",
            "till": "1942-07-24",
            "title": "Воронежско-Ворошиловградская операция",
            "desc": "Брянский фронт, Юго-Западный фронт и Южный фронт",
            "link": "https://ru.wikipedia.org/wiki/%D0%92%D0%BE%D1%80%D0%BE%D0%BD%D0%B5%D0%B6%D1%81%D0%BA%D0%BE-%D0%92%D0%BE%D1%80%D0%BE%D1%88%D0%B8%D0%BB%D0%BE%D0%B2%D0%B3%D1%80%D0%B0%D0%B4%D1%81%D0%BA%D0%B0%D1%8F_%D0%BE%D0%BF%D0%B5%D1%80%D0%B0%D1%86%D0%B8%D1%8F_(1942)",
            "result": ""
        },
        {
            "from": "1941-06-21",
            "till": "",
            "title": "We created Southern Front",
            "desc": "Combatant Commander is General Ivan Tyulenev. Aim: a preventive strike against DEU forces near our border.",
            "link": "https://ru.wikipedia.org/wiki/%D0%AE%D0%B6%D0%BD%D1%8B%D0%B9_%D1%84%D1%80%D0%BE%D0%BD%D1%82_(%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%B0%D1%8F_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%B0%D1%8F_%D0%B2%D0%BE%D0%B9%D0%BD%D0%B0)",
            "result": ""
        },
        {
            "from": "1941-06-22",
            "till": "1941-07-06",
            "title": "Lvov-Chernovtsy defensive",
            "desc": "Our SW Front's Army and Navy are defending Western UKR, MDA and Black Sea.",
            "link": "",
            "result": "We slowed down DEU on route to Kiev and bought time for the main body of our SW Front to retreat and take defense at the old border. Then we carried out mobilization."
        },
        {
            "from": "1941-06-22",   
            "till": "1941-07-09",
            "title": "Battle of Białystok–Minsk",
            "desc": "A near-border battle at the central part of the front. ",
            "link": "https://ru.wikipedia.org/wiki/%D0%91%D0%B5%D0%BB%D0%BE%D1%81%D1%82%D0%BE%D0%BA%D1%81%D0%BA%D0%BE-%D0%9C%D0%B8%D0%BD%D1%81%D0%BA%D0%BE%D0%B5_%D1%81%D1%80%D0%B0%D0%B6%D0%B5%D0%BD%D0%B8%D0%B5",
            "result": "DEU surrounded and crushed the main body of our Western front."
        },
        {
            "from": "1941-06-22",
            "till": "1941-07-09",
            "title": "Baltic operation",
            "desc": "Our Army and Navy are defending LVA, LTU, our North-West regions and the Baltic Sea.",
            "link": "https://ru.wikipedia.org/wiki/%D0%9F%D1%80%D0%B8%D0%B1%D0%B0%D0%BB%D1%82%D0%B8%D0%B9%D1%81%D0%BA%D0%B0%D1%8F_%D1%81%D1%82%D1%80%D0%B0%D1%82%D0%B5%D0%B3%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%B0%D1%8F_%D0%BE%D0%B1%D0%BE%D1%80%D0%BE%D0%BD%D0%B8%D1%82%D0%B5%D0%BB%D1%8C%D0%BD%D0%B0%D1%8F_%D0%BE%D0%BF%D0%B5%D1%80%D0%B0%D1%86%D0%B8%D1%8F",
            "result": "DEU defeated us."
        },
        {
            "from": "1941-06-29",
            "till": "1941-10-10",
            "title": "Оборона Заполярья",
            "desc": "Северный фронт",
            "link": "",
            "result": ""
        },
        {
            "from": "1941-06-22",
            "till": "1941-12-02",
            "title": "Hanko defensive",
            "desc": "We defend our Naval base in the city of Hanko (FIN) against DEU Airforce and Navy",
            "link": "https://ru.wikipedia.org/wiki/%D0%9E%D0%B1%D0%BE%D1%80%D0%BE%D0%BD%D0%B0_%D0%A5%D0%B0%D0%BD%D0%BA%D0%BE",
            "result": "Our Naval base is evacuated to Leningrad"
        },
        {
            "from": "1945-05-22",
            "till": "1945-05-28",
            "title": "Something",
            "desc": "lalala",
            "link": "",
            "result": "Result was interesting"

        },
        {
            "from": "1945-05-22",
            "till": "",
            "title": "Operation Unthinkable",
            "desc": "план готов",
            "link": "https://ru.wikipedia.org/wiki/%D0%9E%D0%BF%D0%B5%D1%80%D0%B0%D1%86%D0%B8%D1%8F_%C2%AB%D0%9D%D0%B5%D0%BC%D1%8B%D1%81%D0%BB%D0%B8%D0%BC%D0%BE%D0%B5%C2%BB"

        },
        {
            "from": "1942-02-19",
            "till": "1942-05-18",
            "title": "Немцы в демянском котле",
            "desc": "основные силы 2-го армейского корпуса 16-й немецкой армии группы армий «Север»",
            "link": ""
        },
        {
            "from": "1943-01-18",
            "till": "",
            "title": "блокадное кольцо Ленинграда прорвано",
            "desc": "",
            "link": ""

        },
        {
            "from": "1945-04-16",
            "till": "1945-05-08",
            "title": "Берлинская наступательная операция",
            "desc": "2-й Белорусский фронт, 1-й Украинский фронт",
            "link": "https://ru.wikipedia.org/wiki/%D0%91%D0%B5%D1%80%D0%BB%D0%B8%D0%BD%D1%81%D0%BA%D0%B0%D1%8F_%D0%BD%D0%B0%D1%81%D1%82%D1%83%D0%BF%D0%B0%D1%82%D0%B5%D0%BB%D1%8C%D0%BD%D0%B0%D1%8F_%D0%BE%D0%BF%D0%B5%D1%80%D0%B0%D1%86%D0%B8%D1%8F"
        },
        {
            "from": "1945-03-10",
            "till": "1945-05-05",
            "title": "Моравска-Остравскую наступательную операцию",
            "desc": "4-й Украинский фронт",
            "link": "https://ru.wikipedia.org/wiki/%D0%9C%D0%BE%D1%80%D0%B0%D0%B2%D1%81%D0%BA%D0%BE-%D0%9E%D1%81%D1%82%D1%80%D0%B0%D0%B2%D1%81%D0%BA%D0%B0%D1%8F_%D0%BD%D0%B0%D1%81%D1%82%D1%83%D0%BF%D0%B0%D1%82%D0%B5%D0%BB%D1%8C%D0%BD%D0%B0%D1%8F_%D0%BE%D0%BF%D0%B5%D1%80%D0%B0%D1%86%D0%B8%D1%8F"
        },
        {
            "from": "1945-03-25",
            "till": "1945-05-05",
            "title": "Братиславско-Брновскую наступательную операцию",
            "desc": "2-й Украинский фронт",
            "link": "https://ru.wikipedia.org/wiki/%D0%91%D1%80%D0%B0%D1%82%D0%B8%D1%81%D0%BB%D0%B0%D0%B2%D1%81%D0%BA%D0%BE-%D0%91%D1%80%D0%BD%D0%BE%D0%B2%D1%81%D0%BA%D0%B0%D1%8F_%D0%BD%D0%B0%D1%81%D1%82%D1%83%D0%BF%D0%B0%D1%82%D0%B5%D0%BB%D1%8C%D0%BD%D0%B0%D1%8F_%D0%BE%D0%BF%D0%B5%D1%80%D0%B0%D1%86%D0%B8%D1%8F"
        },
       
        {
            "from": "1945-05-08",
            "till": "",
            "title": "капитуляция группировки противника",
            "desc": "Принял: 3-й Белорусский фронт в районе устья реки Вислы, восточнее Данцига и на косе Путцигер-Нерунг северо-восточнее Гдыни"
        },
        {
            "from": "1945-02-16",
            "till": "1945-05-08",
            "title": "Курляндская операция",
            "desc": "Ленинградский фронт"
        },
        {
            "from": "1942-05-28",
            "till": "",
            "title": "СТОП наступление",
            "desc": "маршал С. К. Тимошенко приказал прекратить наступательную операцию"
        },
        {
            "from": "1942-05-26",
            "till": "",
            "title": "барвенковская западня",
            "desc": "наши окруженные части оказываются заперты на небольшом пространстве площадью примерно 15 кв. км. в районе Барвенково"
        },
        {
            "from": "1942-05-25",
            "till": "1942-05-31",
            "title": "барвенковская западня",
            "desc": "",
            "result": "вырываются не более десятой части окружённых. Советские потери составили 270 тыс. человек, из них 171 тыс. — безвозвратно. В окружении погибли или пропали без вести: заместитель командующего Юго-Западным фронтом, командующий 6-й армией, командующий 57-й армией, командующий армейской группой и ряд генералов, командовавших попавшими в окружение дивизиями."

        }, 
        {
            "from": "1942-05-23",
            "till": "",
            "title": "Наши попадают в окружение",
            "desc": "значительная часть войск ударной группировки Красной Армии оказыается в окружении в треугольнике Мерефа-Лозовая-Балаклея."
        },
        {
            "from": "1942-06-28",
            "till": "",
            "title": "фронт между Курском и Харьковом прорван",
            "desc": "4-я танковая армия под командованием Германа Гота прорывает и устремляется к Дону"
        },
        {
            "from": "1942-07-28",
            "till": "",
            "title": "«Ни шагу назад!»",
            "desc": "издается знаменитый приказ № 227"
        },
        {
            "from": "1942-07-23",
            "till": "",
            "title": "пал Ростов-на-Дону",
            "desc": "2 харьковская битва. путь на Кавказ был открыт."
        },
        {
            "from": "1941-09-08",
            "till": "1944-01-27",
            "title": "Siege of Leningrad",
            "desc": "Germans, Finns, Spaniards are starving Leningraders to death",
            "link": "https://ru.wikipedia.org/wiki/%D0%91%D0%BB%D0%BE%D0%BA%D0%B0%D0%B4%D0%B0_%D0%9B%D0%B5%D0%BD%D0%B8%D0%BD%D0%B3%D1%80%D0%B0%D0%B4%D0%B0",
            "result": "872 дня. Погибших: 332 059 солдат (24 324 небоевых), , 111 142 пропавших без вести, горожане: 16 747 убито при артобстрелах и бомбардировках, 632 253 погибли от голода"
        },    
        {
            "from": "1945-04-05",
            "till": "1945-05-20",
            "title": "Грузинское восстание на острове Тексел",
            "desc": "восстание грузинского батальона Вермахта (822-й пехотный батальон «Königin Tamara»; «Царица Тамара») из состава Грузинского легиона на острове Тексел Западно-Фризской гряды (Голландия) во время Второй мировой войны."
        },
        {
            "from": "1942-05-15",
            "till": "",
            "title": "Закавказский фронт вновь сформирован",
            "desc": "",
            "link": ""
        },
        {
            "from": "1941-10-30",
            "till": "1942-07-09",
            "title": "Оборона Севастополя.",
            "desc": "Войска Крыма",
            "link": ""
        },
        {
            "from": "1943-02-09",
            "till": "1943-05-24",
            "title": "Краснодарская операция.",
            "desc": "Северо-Кавказский фронт",
            "link": ""
        },
        {
            "from": "1943-04-17",
            "till": "1943-06-07",
            "title": "Воздушные сражения на Кубани",
            "desc": "Северо-Кавказский фронт",
            "link": "https://ru.wikipedia.org/wiki/%D0%92%D0%BE%D0%B7%D0%B4%D1%83%D1%88%D0%BD%D1%8B%D0%B5_%D1%81%D1%80%D0%B0%D0%B6%D0%B5%D0%BD%D0%B8%D1%8F_%D0%BD%D0%B0_%D0%9A%D1%83%D0%B1%D0%B0%D0%BD%D0%B8_(1943)",
            "result": "Around 35,000 flying missions. Enemy lost 1,100 warplanes. 52 of our pilots were awarded the title of Hero of the Soviet Union."
        },
        {
            "from": "1945-05-14",
            "till": "1945-05-15",
            "title": "Полянская битва",
            "desc": "югославские партизаны и советские офицеры против 30 000 эсэсовцев и хорватских усташей, которые пытаются прорваться из Словении к союзникам в Италию.",
            "link": "https://ru.wikipedia.org/wiki/%D0%9F%D0%BE%D0%BB%D1%8F%D0%BD%D1%81%D0%BA%D0%B0%D1%8F_%D0%B1%D0%B8%D1%82%D0%B2%D0%B0"
        },
        {
            "from": "1942-05-20",
            "till": "",
            "title": "Северо-Кавказский фронт образован",
            "desc": "",
            "link": ""
        },
        {
            "from": "1941-12-26",
            "till": "1942-05-20",
            "title": "Керченско-Феодосийская десантная операция",
            "desc": "Крымский фронт",
            "link": ""
        },
        {
            "from": "1942-05-12",
            "till": "1942-05-29",
            "title": "Вторая харьковская битва",
            "desc": "Брянский фронт, Юго-Западный фронт и Южный фронт.",
            "link": "https://ru.wikipedia.org/wiki/%D0%A5%D0%B0%D1%80%D1%8C%D0%BA%D0%BE%D0%B2%D1%81%D0%BA%D0%B0%D1%8F_%D0%BE%D0%BF%D0%B5%D1%80%D0%B0%D1%86%D0%B8%D1%8F_(1942)",
            "result": "Наступление советских войск началось как попытка стратегического наступления, но завершилось окружением и практически полным уничтожением наступающих сил Красной армии («операция Fredericus»). Из-за катастрофы под Харьковом стало возможным стремительное продвижение немцев на южном участке фронта на Воронеж и Ростов-на-Дону с последующим выходом к Волге и продвижением на Кавказ."
        },
        {
            "from": "1942-01-07",
            "till": "1942-05-20",
            "title": "Демянская операция",
            "desc": "Северо-Западный фронт",
            "link": "https://ru.wikipedia.org/wiki/%D0%94%D0%B5%D0%BC%D1%8F%D0%BD%D1%81%D0%BA%D0%B0%D1%8F_%D0%BE%D0%BF%D0%B5%D1%80%D0%B0%D1%86%D0%B8%D1%8F_(1942)"
        },
        {
            "from": "1942-04-28",
            "till": "1942-05-13",
            "title": "Murmansk Operation",
            "desc": "by Karelian front",
            "link": ""
        },
        {
            "from": "1945-06-04",
            "till": "",
            "title": "test single-day event",
            "desc": "testing"
        },
        {
            "from": "1975-05-14",
            "till": "1975-05-16",
            "title": "Some multy-day event",
            "desc": "Some multy-day event"
        },
        {
            "from": "1975-05-11",
            "till": "1975-05-14",
            "title": "Some multy-day event",
            "desc": "Some multy-day event"
        },
        {
            "from": "1944-04-08",
            "till": "1944-05-12",
            "title": "Крымская наступательная операция",
            "desc": "Наступательная операция советских войск с целью освобождения Крыма от войск нацистской Германии во время Великой Отечественной войны. 4-й Украинский фронт и Отдельная Приморская армия во взаимодействии с Черноморским флотом и Азовской военной флотилией.",
            "link": "https://ru.wikipedia.org/wiki/%D0%9A%D1%80%D1%8B%D0%BC%D1%81%D0%BA%D0%B0%D1%8F_%D0%BD%D0%B0%D1%81%D1%82%D1%83%D0%BF%D0%B0%D1%82%D0%B5%D0%BB%D1%8C%D0%BD%D0%B0%D1%8F_%D0%BE%D0%BF%D0%B5%D1%80%D0%B0%D1%86%D0%B8%D1%8F",
            "result": "Победа СССР, полное освобождение Крыма от нацистской оккупации"
        },
        {
            "from": "1941-05-06",
            "till": "",
            "title": "Stalin is head of government",
            "desc": "Stalin becomes the chairman of the Council of People's Commissars",
            "link": ""
        },    
        {
            "from": "1945-05-06",
            "till": "1945-05-11",
            "title": "The Prague Offensive",
            "desc": "The USSR troops - 3 Ukrainian Fronts (1st, 2nd, and 4th) - the offensive against the Hitlerites in the capital of Czechoslovakia.",
            "link": ""
        },
        {
            "from": "1945-05-07",
            "till": "",
            "title": "Nazis surrender",
            "desc": "Hitlerites signed an unconditional surrender at Allied headquarters in Reims, France, to take effect the following day, ending the European conflict of World War II.",
            "link": ""
        },
        {
            "from": "1942-04-24",
            "till": "1942-05-11",
            "title": "Kestenga/Kiestinki operation",
            "desc": "Karelian front - Kestenga (Kiestink i) operation",
            "link": ""
        },
        {
            "from": "1942-06-18",
            "till": "",
            "title": "Leningrad partisans",
            "desc": "First conference. 56 attendees. For May of 1942 - more than 100 fights with the enemy, destroyed more than 2 thousand Nazi soldiers and officers.",
            "link": "http://thefireofthewar.ru/1418/index.php/1942/iyun-1942/1063-18-06-1942",
            "result": ""
        }

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
        // var a = dateObjectFromString(x["from"]).getTime();
        // var b = dateObjectFromString(y["from"]).getTime();

        var a = moment(x["from"]).format("YYYY");
        var b = moment(y["from"]).format("YYYY");

        if (a < b)
            return -1;
        if (a > b)
            return 1;
        return 0;
    }



    function filterMDE(theEvent ) {
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
    }

    function filterODE(theEvent ) {
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



    function display(_case, _event, add) {     

        var retval = 
              "Case " + _case.toString() + ". "
            + ( add ? "Adding: " : "Skipping: ")            
            + moment(_event["from"]).format("MMMM D") 
            + ( moment(_event["till"]).isValid() ?  " - " + moment(_event["till"]).format("MMMM D") : "")
            + ": " + _event["title"];
        console.log( retval );
    }


    // arg: todaysDates[i]
    function displayMDE( _event, phrase ) {
        console.log("- this MDE "+ phrase + " (" 
        + moment(_event["from"]).format("D MMMM") + " - " 
        + moment(_event["till"]).format("D MMMM") + " \""
        + _event["title"] + "\") " );
    }


    function displayODE( _event, phrase ) {
        console.log("- this ODE  (" 
        + moment(_event["from"]).format("D MMMM") + " \""
        + _event["title"] + "\") " + phrase);
    }


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

    var init = function() {

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

                        console.log(
                            "Adding mye. fyc:"  // 9
                            + " "  + moment(wec["from"]).format("YYYY-MM-DD") 
                            + "..."  + moment(wec["till"]).format("YYYY-MM-DD")
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

                        console.log("Adding mye. myc " + year + "."
                            + " "    + moment(wec["from"]).format("YYYY-MM-DD") 
                            + "..."  + moment(wec["till"]).format("YYYY-MM-DD") 
                            + " "    + wec["title"]);

                        todaysDates.push( wec ); // 16

                    };



                    if(dummyStartDate.diff( moment() ) > 0 ) { // 18
                        
                        var wec = JSON.parse(JSON.stringify( allDates[i] )); // 6
                        wec["from"] = moment([eventEndYear, 0, 1]); 
                        wec["till"] = eventFullEndDate;

                        console.log("Adding mye. lyc   " // 17
                            + " " + moment(wec["from"]).format("YYYY-MM-DD") 
                            + "..." + moment(wec["till"]).format("YYYY-MM-DD")
                            + " " + wec["title"] );
                        todaysDates.push( wec );
                    }

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
                                                                     case 6:           case 8:  case 9:           
                        /*case 11:*/ case 12: case 13:                   case 16: case 17: case 18: case 19:
                        case 21: case 22: case 23:                   case 26: case 27: case 28: case 29:
                        case 31: case 32: case 33: case 34:          case 36: case 37: case 38: case 39:

                            //  console.log("case  1: " + display(allDates[i])); 

                            // console.log(monthFrom + "-" + dayFrom + " -> " + thisMonth +"-"+thisDay + " <- " + monthTill + "-" + dayTill);

                            displayMDE( todaysDates[i], "continues today");
                            //  create container for the date
                            var $datecontainer = $('<div>').attr('class','date').addClass("continues");
                               //  console.log ('~~~~~ class ' + $datecontainer.class);
                               //  create element for the event
                               //  console.log('YEAR: ' + aryDateObject.getFullYear());
                            var $pastperiod = $('<div>').attr('class','past-year').text(moment(todaysDates[i]["from"]).format("D MMMM YYYY") +" - "+ moment(todaysDates[i]["till"]).format("D MMMM YYYY"));
                            var $progress = $('<div>').attr('class','progress').text( "continues"/* + " сегодня в " + moment().format("DD MMMM") + moment(todaysDates[i]["from"]).format("YYYY") + " г."*/ );
                            
                            
                            //  with link
                            //  var $link = $('<a>').attr("href", todaysDates[i]["link"]);
                            //  $link.text(todaysDates[i]["title"]);
                            //  var $eventtitle = $('<div>').attr('class','event-title').append($link);

                            //  // with no link
                            //  // var $eventtitle = $('<div>').attr('class','event-title').text(todaysDates[i]["title"]);

                            if(!!todaysDates[i]["link"]) {
                                var $link = $('<a>').attr("href", todaysDates[i]["link"]).attr("target", "_blank");
                                $link.text(todaysDates[i]["title"]);
                                var $eventtitle = $('<div>').attr('class','event-title').append($link);

                                //======================================
                                //======================================



                            }
                            else {
                                //  with no link
                                var $eventtitle = $('<div>').attr('class','event-title').text(todaysDates[i]["title"]);

                                //======================================
                                //======================================
                            }

                            var $lnk = $('<a>').attr("href", todaysDates[i]["link"]).attr("target", "_blank");
                            $lnk.text("Read more...");

                            var $eventonthisdate = $('<div>').attr('class','whathappened').text(todaysDates[i]["desc"]);
                            $eventonthisdate.append($('<hr>')).append($lnk);

                            $datecontainer.append($progress);
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
                            var $datecontainer = $('<div>').attr('class','date').addClass("ends");
                            //  create element for the event
                            var $pastperiod = $('<div>').attr('class','past-year').text(moment(todaysDates[i]["from"]).format("D MMMM YYYY") +" - "+ moment(todaysDates[i]["till"]).format("D MMMM YYYY"));
                            //  var $eventtitle = $('<div>').attr('class','event-title').text(todaysDates[i]["title"] + ": ends");
                            var $progress = $('<div>').attr('class','progress').text("оканчивается" /*+ " сегодня в " + moment(todaysDates[i]["till"]).format("YYYY") + " г." */);
                            if(!!todaysDates[i]["link"]) {
                                var $link = $('<a>').attr("href", todaysDates[i]["link"]).attr("target", "_blank");
                                $link.text(todaysDates[i]["title"]);
                                var $eventtitle = $('<div>').attr('class','event-title').append($link);
                            }
                            else {
                                //  with no link
                                var $eventtitle = $('<div>').attr('class','event-title').text(todaysDates[i]["title"]);
                            }

                            

                            $datecontainer.append($eventtitle);
                            $datecontainer.append($progress);
                            $datecontainer.append($pastperiod);
                                                
                            
                            


                            var $lnk = $('<a>').attr("href", todaysDates[i]["link"]).attr("target", "_blank");
                            $lnk.text("Read more...");
                            var $eventonthisdate = $('<div>').attr('class','whathappened').text(todaysDates[i]["desc"]);

                            if(!!todaysDates[i]["result"]) {
                                var $eventresult = $('<div>').attr('class','event-result').text("Result: " +todaysDates[i]["result"]);
                                // $datecontainer.append($eventresult);
                                $eventonthisdate.append($('<hr>')).append($eventresult).append($('<hr>')).append($lnk);
                            }
                            $datecontainer.append($eventonthisdate);

                            $todaysevents.append($datecontainer);
                            break;

                        case 41: case 42: case 43: case 44: case 45: case 46: case 47: case 48: case 49:
                            //--------------------------------------------------------
                            displayMDE( todaysDates[i], "   begins today");
                            var $datecontainer = $('<div>').attr('class','date').addClass("begins");
                            //  create element for the event
                            var $pastperiod = $('<div>').attr('class','past-year').text( from.format("DD MMMM YYYY"));

                            var $progress = $('<div>').attr('class','progress').text("the first day of" /* + "сегодня в " + from.format("YYYY") + " г." */);

                            //  with link
                            //  console.log("------" + !!todaysDates[i]["link"])
                            if(!!todaysDates[i]["link"]) {
                                var $link = $('<a>').attr("href", todaysDates[i]["link"]).attr("target", "_blank");
                                $link.text(todaysDates[i]["title"]);
                                var $eventtitle = $('<div>').attr('class','event-title').append($link);
                            }
                            else {
                                //  with no link
                                var $eventtitle = $('<div>').attr('class','event-title').text(todaysDates[i]["title"]);
                            }
                            
                            var $lnk = $('<a>').attr("href", todaysDates[i]["link"]).attr("target", "_blank");
                            $lnk.text("Read more...");
                            
                            var $eventonthisdate = $('<div>').attr('class','whathappened').text(todaysDates[i]["desc"]);
                            $eventonthisdate.append($('<hr>')).append($lnk);
                            $datecontainer.append($progress);
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
                            var $datecontainer = $('<div>').attr('class','date').addClass("today");
                            //  console.log ('~~~~~ class ' + $datecontainer.class);
                            //  create element for the event
                            //  console.log('YEAR: ' + aryDateObject.getFullYear());
                            var $pastperiod = $('<div>').attr('class','past-year').text(from.format("MMMM D, YYYY"));
                            var $progress = $('<div>').attr('class','progress').text( "today " /*+ from.format("YYYY") + " г."*/);
                            
                            
                            //  with link
                            //  var $link = $('<a>').attr("href", todaysDates[i]["link"]);
                            //  $link.text(todaysDates[i]["title"]);
                            //  var $eventtitle = $('<div>').attr('class','event-title').append($link);

                            //  // with no link
                            //  // var $eventtitle = $('<div>').attr('class','event-title').text(todaysDates[i]["title"]);

                            if(!!todaysDates[i]["link"]) {
                                var $link = $('<a>').attr("href", todaysDates[i]["link"]).attr("target", "_blank");
                                $link.text(todaysDates[i]["title"]);
                                var $eventtitle = $('<div>').attr('class','event-title').append($link);
                            }
                            else {
                            //  with no link
                                var $eventtitle = $('<div>').attr('class','event-title').text(todaysDates[i]["title"]);
                            }

                            var $eventonthisdate = $('<div>').attr('class','whathappened').text(todaysDates[i]["desc"]);
                            
                            // The order of presentation
                            $datecontainer.append( $progress );
                            $datecontainer.append( $eventtitle );
                            $datecontainer.append( $pastperiod );
                            $datecontainer.append( $eventonthisdate );

                            $todaysevents.append($datecontainer);
                            break;
                    }
                }
                
                //LLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLLL
        }


        $( ".event-title" ).on("click", function(){
            console.log("Hop!");
            

            // $(this).parents("#todays-events").children().children().children().next(".whathappened").slideUp();
            $(this).siblings(".whathappened").slideToggle( function() { });
            return false;
        });

        $( "#close_all").on("click", function(){
            $( ".whathappened" ).slideUp();
        });

        //============== UNFURL ========




        
    };

        

    return { init: init }

})();

window.onload = function () {
    Mei.Events.init();            

    Mei.Dates.init();
    $('h3').each(function(){
        console.log("wrap all works");
        $(this).nextUntil('h3').wrapAll( "<div class='year-container' />" );
    });


            
}

