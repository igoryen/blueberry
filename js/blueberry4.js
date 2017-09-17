var Mei = (function (name) {return name;}(Mei || {}));

Mei.Dates = (function () {



 // THE PRODUCTION 
var allDates =   
[
 
 {
   "from": "1941-07-03",
   "till": "",
   "country": "lva",
   "province": "",
   "locality": "",
   "where": "LVA",
   "title": "DEU disected our NW Front",
   "desc": "1 city lost (Gulbene), NW Front is disected and retreats.",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D0%B8%D1%8E%D0%BB%D1%8C_1941_%D0%B3%D0%BE%D0%B4%D0%B0)#3_.D0.B8.D1.8E.D0.BB.D1.8F_1941_.D0.B3.D0.BE.D0.B4.D0.B0._12-.D0.B9_.D0.B4.D0.B5.D0.BD.D1.8C_.D0.B2.D0.BE.D0.B9.D0.BD.D1.8B"
 },
 {
   "from": "1941-07-03",
   "till": "",
   "country": "",
   "province": "",
   "locality": "",
   "where": "BLR",
   "title": "BLR: DEU advance",
   "desc": "BLR: DEU reached a river (Daugava), crossed another (Berezina).",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D0%B8%D1%8E%D0%BB%D1%8C_1941_%D0%B3%D0%BE%D0%B4%D0%B0)#3_.D0.B8.D1.8E.D0.BB.D1.8F_1941_.D0.B3.D0.BE.D0.B4.D0.B0._12-.D0.B9_.D0.B4.D0.B5.D0.BD.D1.8C_.D0.B2.D0.BE.D0.B9.D0.BD.D1.8B"
 },
 {
   "from": "1941-05-06",
   "till": "",
   "country": "russia",
   "province": "",
   "locality": "",
   "where": "Moscow, RUS",
   "title": "Stalin is head of government",
   "desc": "Stalin becomes the chairman of the Council of People's Commissars",
   "result": "",
   "link": ""
 },
 {
   "from": "1941-06-10",
   "till": "1941-06-19",
   "country": "",
   "province": "",
   "locality": "",
   "where": "",
   "title": "German planes violate our borders",
   "desc": "Our border guards register border violations by German planes.",
   "result": "Total 86 violations.",
   "link": ""
 },
 {
   "from": "1941-06-11",
   "till": "",
   "country": "",
   "province": "",
   "locality": "",
   "where": "",
   "title": "Директива № 32",
   "desc": "?????? ?????????? ????? ?????????? �????????????? ?????? ?? ??????� ??? ????? ?????",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%91%D0%BB%D0%BE%D0%BA%D0%B0%D0%B4%D0%B0_%D0%9B%D0%B5%D0%BD%D0%B8%D0%BD%D0%B3%D1%80%D0%B0%D0%B4%D0%B0#cite_note-.D0.94.D0.B0.D1.88.D0.B8.D1.87.D0.B5.D0.B2.2C.D0.A22.E2.80.941973.E2.80.94.E2.80.9447-8"
 },
 {
   "from": "1941-06-12",
   "till": "",
   "country": "",
   "province": "",
   "locality": "",
   "where": "",
   "title": "Наши начали скрытно готовиться",
   "desc": "командование приграничных военных округов под видом учений и изменения дислокации летних лагерей приступило к скрытному развёртыванию войск вторых эшелонов округов в соответствии с планами обороны государственной границы.",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D0%B8%D1%8E%D0%BD%D1%8C_1941_%D0%B3%D0%BE%D0%B4%D0%B0)"
 },
 {
   "from": "1941-06-12",
   "till": "1941-06-15",
   "country": "",
   "province": "",
   "locality": "",
   "where": "",
   "title": "Скрытное подтягивание к границе",
   "desc": "По предписанию Григория Жуков (начальника Генерального штаба) западные приграничные округа скрытно выводят дивизии, расположенные в глубине, ближе к государственной границе. ",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D0%B8%D1%8E%D0%BD%D1%8C_1941_%D0%B3%D0%BE%D0%B4%D0%B0)"
 },
 {
   "from": "1941-06-12",
   "till": "",
   "country": "",
   "province": "",
   "locality": "",
   "where": "",
   "title": "Запрет полетов у границы",
   "desc": "Семён Тимошенко (нарком обороны) приказывает «запретить полёты нашей авиации в приграничной полосе 10 км от госграницы.»",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D0%B8%D1%8E%D0%BD%D1%8C_1941_%D0%B3%D0%BE%D0%B4%D0%B0)"
 },
 {
   "from": "1941-06-13",
   "till": "",
   "country": "",
   "province": "",
   "locality": "",
   "where": "Moscow, RUS",
   "title": "ТАСС опровергает слухи",
   "desc": "ТАСС говорит, что иностранные СМИ муссируют лживые и нелепые слухи, что СССР и Германия готовятся к войне",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D0%B8%D1%8E%D0%BD%D1%8C_1941_%D0%B3%D0%BE%D0%B4%D0%B0)"
 },
 {
   "from": "1941-06-13",
   "till": "",
   "country": "",
   "province": "",
   "locality": "",
   "where": "",
   "title": "У нас - 303 дивизии",
   "desc": "Николай Ватутин (Заместитель Начальника Генерального штаба Красной Армии) подготовил Справку о развёртывании вооружённых сил СССР на случай войны на западе. В ней говорится, что всего в СССР имеется 303 дивизии, из них для развёртывания на западных границах в составе фронтов — 186 дивизий.",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D0%B8%D1%8E%D0%BD%D1%8C_1941_%D0%B3%D0%BE%D0%B4%D0%B0)"
 },
 {
   "from": "1941-06-13",
   "till": "",
   "country": "",
   "province": "",
   "locality": "",
   "where": "",
   "title": "Директива",
   "desc": "«Для повышения боевой готовности войск округа к 1 июля 1941 г. все глубинные дивизии и управления корпусов с корпусными частями перевести ближе к госгранице в новые лагеря… Передвижения войск сохранить в полной тайне. Марш совершать с тактическими учениями, по ночам.» Семен Тимошенко (Нарком обороны СССР) и Георгий Жуков (начальник Генштаба Красной Армии). Директива Военному совету КОВО.",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D0%B8%D1%8E%D0%BD%D1%8C_1941_%D0%B3%D0%BE%D0%B4%D0%B0)"
 },
 {
   "from": "1941-06-14",
   "till": "",
   "country": "",
   "province": "",
   "locality": "",
   "where": "",
   "title": "Подготовка Барбароссы",
   "desc": "Гитлер слушает доклады о готовящихся действиях в операции \"Барбаросса\". После обеда в речи объясняет почему хочет напасть на Россию. \"Разгромим Россию и Англия прекратит борьбу\"",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D0%B8%D1%8E%D0%BD%D1%8C_1941_%D0%B3%D0%BE%D0%B4%D0%B0)"
 },
 {
   "from": "1941-06-15",
   "till": "",
   "country": "poland",
   "province": "",
   "locality": "warsaw",
   "where": "",
   "title": "Гудериан вылетел в Варшаву",
   "desc": "осматривать танки перед наступлением",
   "result": "",
   "link": ""
 },
 {
   "from": "1941-06-15",
   "till": "",
   "country": "",
   "province": "",
   "locality": "",
   "where": "",
   "title": "Скрытное накопление войск",
   "desc": "Более половины дивизий, составлявших второй эшелон и резерв западных военных округов, приведены в движение.",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D0%B8%D1%8E%D0%BD%D1%8C_1941_%D0%B3%D0%BE%D0%B4%D0%B0)"
 },
 {
   "from": "1941-06-16",
   "till": "",
   "country": "russia",
   "province": "moscow",
   "locality": "moscow",
   "where": "",
   "title": "Ускорение подготовки",
   "desc": "ЦК ВКП(б) и СНК СССР принял постановление «Об ускорении приведения в боевую готовность укреплённых районов».",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D0%B8%D1%8E%D0%BD%D1%8C_1941_%D0%B3%D0%BE%D0%B4%D0%B0)"
 },
 {
   "from": "1941-06-17",
   "till": "1941-06-21",
   "country": "",
   "province": "",
   "locality": "",
   "where": "Brest Province, BLR",
   "title": "Germans at the ready",
   "desc": "Their tanks are at the departure positions to advance across the West Bug River near the Brest fortress in Belarus.",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D0%B8%D1%8E%D0%BD%D1%8C_1941_%D0%B3%D0%BE%D0%B4%D0%B0)"
 },
 {
   "from": "1941-06-17",
   "till": "",
   "country": "",
   "province": "",
   "locality": "",
   "where": "",
   "title": "Ударят в любое время",
   "desc": "Наш шпион сообщает, что немцы закончили готовиться и могут ударить в любое время. Сталин не верит.",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D0%B8%D1%8E%D0%BD%D1%8C_1941_%D0%B3%D0%BE%D0%B4%D0%B0)"
 },
 {
   "from": "1941-06-17",
   "till": "",
   "country": "",
   "province": "",
   "locality": "",
   "where": "FIN",
   "title": "Мобилизация в Финляндии",
   "desc": "в Финляндии был издан указ о мобилизации всей полевой армии",
   "result": "",
   "link": ""
 },
 {
   "from": "1941-06-18",
   "till": "",
   "country": "",
   "province": "",
   "locality": "",
   "where": "Moscow, RUS",
   "title": "German embassy goes empty",
   "desc": "Security minister informs the government that the Embassy workers are leaving with families, destroying the embassy's archives.",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D0%B8%D1%8E%D0%BD%D1%8C_1941_%D0%B3%D0%BE%D0%B4%D0%B0)"
 },
 {
   "from": "1941-06-19",
   "till": "",
   "country": "",
   "province": "",
   "locality": "",
   "where": "",
   "title": "подготовка военных объектов",
   "desc": "Нарком обороны приказывает замаскировать аэродромы, воинские части и важные воен. объекты западных округов.",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D0%B8%D1%8E%D0%BD%D1%8C_1941_%D0%B3%D0%BE%D0%B4%D0%B0)"
 },
 {
   "from": "1941-06-20",
   "till": "",
   "country": "",
   "province": "",
   "locality": "",
   "where": "",
   "title": "Germans violate our borders",
   "desc": "Our state security tells German troops continue to concentrate. German planes violate our borders several times a day. Germans take off the barbed wire along the border.",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D0%B8%D1%8E%D0%BD%D1%8C_1941_%D0%B3%D0%BE%D0%B4%D0%B0)"
 },
 {
   "from": "1941-06-20",
   "till": "",
   "country": "",
   "province": "",
   "locality": "",
   "where": "FIN",
   "title": "Финны на границе",
   "desc": "отмобилизованная армия сосредоточилась на советско-финской границе.",
   "result": "",
   "link": ""
 },
 {
   "from": "1941-06-21",
   "till": "",
   "country": "",
   "province": "",
   "locality": "",
   "where": "",
   "title": "FIN attacks USSR",
   "desc": "FIN begins military operations against USSR",
   "result": "",
   "link": ""
 },
 {
   "from": "1941-06-21",
   "till": "",
   "country": "",
   "province": "",
   "locality": "",
   "where": "",
   "title": "We created Southern Front",
   "desc": "Combatant Commander is General Ivan Tyulenev. Aim: a preventive strike against DEU forces near our border.",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%AE%D0%B6%D0%BD%D1%8B%D0%B9_%D1%84%D1%80%D0%BE%D0%BD%D1%82_(%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%B0%D1%8F_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%B0%D1%8F_%D0%B2%D0%BE%D0%B9%D0%BD%D0%B0)"
 },
 {
   "from": "1941-06-22",
   "till": "1941-07-26",
   "country": "",
   "province": "",
   "locality": "",
   "where": "MDA",
   "title": "MDA border battles.",
   "desc": "We defend Moldavia (Bessarabia and Severnaya Bukovina) against DEU and ROU.",
   "result": "We lose.",
   "link": "https://ru.wikipedia.org/wiki/%D0%9F%D1%80%D0%B8%D0%B3%D1%80%D0%B0%D0%BD%D0%B8%D1%87%D0%BD%D1%8B%D0%B5_%D1%81%D1%80%D0%B0%D0%B6%D0%B5%D0%BD%D0%B8%D1%8F_%D0%B2_%D0%9C%D0%BE%D0%BB%D0%B4%D0%B0%D0%B2%D0%B8%D0%B8"
 },
 {
   "from": "1941-06-22",
   "till": "1941-06-28",
   "country": "",
   "province": "",
   "locality": "",
   "where": "Minsk Province, BLR",
   "title": "BLR capital shelled",
   "desc": "Shelling of Minsk, from morning to 9 pm. at intervals of 20-30 min.",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%91%D0%BE%D0%BC%D0%B1%D0%B0%D1%80%D0%B4%D0%B8%D1%80%D0%BE%D0%B2%D0%BA%D0%B0_%D0%9C%D0%B8%D0%BD%D1%81%D0%BA%D0%B0"
 },
 {
   "from": "1941-06-22",
   "till": "",
   "country": "",
   "province": "",
   "locality": "",
   "where": "Brest Province, BLR",
   "title": "Though we die, we won't leave",
   "desc": "Brest Fortress. There were five of us. Sedov, Grutov, Bogolyub, Mikhailov, Selivanov. Our first fight was June 22, 1941. Though we die, we won't leave. We'll die but won't leave the Fortress.",
   "result": "",
   "link": "http://thefireofthewar.ru/1418/index.php/1941/iyun-1941/1412-22-06-1941"
 },
 {
   "from": "1941-06-22",
   "till": "",
   "country": "",
   "province": "",
   "locality": "",
   "where": "",
   "title": "First air ramming",
   "desc": "Dmitry Kokorev rammed a German fighter plane and survived.",
   "result": "",
   "link": "http://thefireofthewar.ru/1418/index.php/1941/iyun-1941/1412-22-06-1941"
 },
 {
   "from": "1941-06-22",
   "till": "",
   "country": "",
   "province": "",
   "locality": "",
   "where": "Wysokie Mazowieckie, POL",
   "title": "We bomb ROU naval bases",
   "desc": "Our Black See AF makes the first raid on Naval Base in Constanța (ROU), also in Sulina.",
   "result": "",
   "link": "http://thefireofthewar.ru/1418/index.php/1941/iyun-1941/1412-22-06-1941"
 },
 {
   "from": "1941-06-22",
   "till": "",
   "country": "",
   "province": "",
   "locality": "",
   "where": "",
   "title": "GBR is ready to help",
   "desc": "Prime minister Churchhill says GBR is ready to help us against DEU",
   "result": "",
   "link": "http://thefireofthewar.ru/1418/index.php/1941/iyun-1941/1412-22-06-1941"
 },
 {
   "from": "1941-06-22",
   "till": "",
   "country": "",
   "province": "",
   "locality": "",
   "where": "",
   "title": "Communist Internationale help",
   "desc": "YUG, BGR, FRA, USA, GBR  comunists call on people of their countries to help SU against DEU.",
   "result": "",
   "link": "http://thefireofthewar.ru/1418/index.php/1941/iyun-1941/1412-22-06-1941"
 },
 {
   "from": "1941-06-22",
   "till": "",
   "country": "",
   "province": "",
   "locality": "",
   "where": "Rome, ITA",
   "title": "Mussolini declares war on us",
   "desc": "He breaks the Pact signed with us in 1933.",
   "result": "",
   "link": "http://thefireofthewar.ru/1418/index.php/1941/iyun-1941/1412-22-06-1941"
 },
 {
   "from": "1941-06-22",
   "till": "",
   "country": "",
   "province": "",
   "locality": "",
   "where": "Moscow, RUS",
   "title": "Head of Church calls to defend",
   "desc": "Metropolitan Sergiy calls on Christians to come to the defense of the Motherland",
   "result": "",
   "link": "http://thefireofthewar.ru/1418/index.php/1941/iyun-1941/1412-22-06-1941"
 },
 {
   "from": "1941-06-22",
   "till": "",
   "country": "",
   "province": "",
   "locality": "",
   "where": "",
   "title": "Martial Law declared",
   "desc": "Martial Law declared in all western regions.",
   "result": "",
   "link": "http://thefireofthewar.ru/1418/index.php/1941/iyun-1941/1412-22-06-1941"
 },
 {
   "from": "1941-06-22",
   "till": "",
   "country": "",
   "province": "",
   "locality": "",
   "where": "Moscow, RUS",
   "title": "Mobilization decree passed",
   "desc": "Decree passed about mobilization of all reservists and all from 23 to 36 (born 1905-1918)",
   "result": "",
   "link": "http://thefireofthewar.ru/1418/index.php/1941/iyun-1941/1412-22-06-1941"
 },
 {
   "from": "1941-06-22",
   "till": "",
   "country": "",
   "province": "",
   "locality": "",
   "where": "Moscow, RUS",
   "title": "Radio announcement about War",
   "desc": "Foreign Minister Molotov announces the news of the Treacherous Attack of Germans on the radio. He ended with: \"Our cause is righteous. The enemy will be defeated. The victory will be ours!\"",
   "result": "",
   "link": "http://thefireofthewar.ru/1418/index.php/1941/iyun-1941/1412-22-06-1941"
 },
 {
   "from": "1941-06-22",
   "till": "",
   "country": "",
   "province": "",
   "locality": "",
   "where": "Brest Province, BLR",
   "title": "DEU attack Brest Fortress",
   "desc": "3:15 am: hammering fire. 3:23 am: DEU storming. 7:00 am: 8000 of ours retreat, 5000 stay trapped and fight. 9:00: fortress surrounded. Evening: DEU shelling offering surrender.",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%9E%D0%B1%D0%BE%D1%80%D0%BE%D0%BD%D0%B0_%D0%91%D1%80%D0%B5%D1%81%D1%82%D1%81%D0%BA%D0%BE%D0%B9_%D0%BA%D1%80%D0%B5%D0%BF%D0%BE%D1%81%D1%82%D0%B8"
 },
 {
   "from": "1941-06-22",
   "till": "1941-07-20",
   "country": "",
   "province": "",
   "locality": "",
   "where": "",
   "title": "Defense of Brest Fortress (BLR)",
   "desc": "7000 of our troops vs 22000 DEU",
   "result": "Our losses: ~2K killed, ~4K captured. DEU losses: ~1.4K killed, ~2.2K wounded. Germans think Kamikaze attacks were motivated by fear of firing squad.",
   "link": "https://ru.wikipedia.org/wiki/%D0%9E%D0%B1%D0%BE%D1%80%D0%BE%D0%BD%D0%B0_%D0%91%D1%80%D0%B5%D1%81%D1%82%D1%81%D0%BA%D0%BE%D0%B9_%D0%BA%D1%80%D0%B5%D0%BF%D0%BE%D1%81%D1%82%D0%B8#cite_note-10"
 },
 {
   "from": "1941-06-22",
   "till": "",
   "country": "",
   "province": "",
   "locality": "",
   "where": "",
   "title": "Treacherous attack",
   "desc": "4:00 am. DEU breakes the Non-Aggression Treaty and attacks us. DEU start with air raids and barbaric shelling of numerous cities in LVA, LTU, BLR, UKR, Crimea.",
   "result": "",
   "link": "http://thefireofthewar.ru/1418/index.php/1941/iyun-1941/1412-22-06-1941"
 },
 {
   "from": "1941-06-22",
   "till": "",
   "country": "",
   "province": "",
   "locality": "",
   "where": "",
   "title": "We are at high alert",
   "desc": "00:30 am. All firing points manned, cities dimmed-out, warplanes camouflaged, ",
   "result": "",
   "link": "http://thefireofthewar.ru/1418/index.php/1941/iyun-1941/1412-22-06-1941"
 },
 {
   "from": "1941-06-22",
   "till": "",
   "country": "",
   "province": "",
   "locality": "",
   "where": "",
   "title": "Великая Отечественная Война",
   "desc": "Война Союза Советских Социалистических Республик против вторгшихся на советскую территорию нацистской Германии и её европейских союзников (Венгрии, Италии, Румынии, Словакии, Финляндии, Хорватии).",
   "result": "победа Красной Армии и безоговорочной капитуляцией вооружённых сил Германии",
   "link": "https://ru.wikipedia.org/wiki/%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%B0%D1%8F_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%B0%D1%8F_%D0%B2%D0%BE%D0%B9%D0%BD%D0%B0"
 },
 {
   "from": "1941-06-22",
   "till": "1941-09-30",
   "country": "",
   "province": "",
   "locality": "",
   "where": "",
   "title": "Operation Barbarossa",
   "desc": "План нападения на СССР. Рассчитан на молниеносную войну",
   "result": "оперативный — поражение советских войск в приграничных сражениях и отступление вглубь страны при относительно малых потерях вермахта и союзников Германии; стратегический итог — провал стратегии блицкрига, рассчитанной на разгром СССР в ходе кампании 1941 года.",
   "link": "https://ru.wikipedia.org/wiki/%D0%9E%D0%BF%D0%B5%D1%80%D0%B0%D1%86%D0%B8%D1%8F_%C2%AB%D0%91%D0%B0%D1%80%D0%B1%D0%B0%D1%80%D0%BE%D1%81%D1%81%D0%B0%C2%BB"
 },
 {
   "from": "1941-06-22",
   "till": "1941-07-06",
   "country": "",
   "province": "",
   "locality": "",
   "where": "UKR",
   "title": "Lvov-Chernovtsy defensive",
   "desc": "Our SW Front's Army and Navy are defending Western UKR, MDA and Black Sea. We lose 16,106 lives a day.",
   "result": "Lasted 15 days. The front was 600-700km wide. We retreated 300-350km. We lost 19.9% of our troops. We slowed down DEU on route to Kiev and bought time for the main body of our SW Front to retreat and take defense at the old border. Then we carried out mobilization.",
   "link": ""
 },
 {
   "from": "1941-06-22",
   "till": "1941-07-09",
   "country": "",
   "province": "",
   "locality": "",
   "where": "BLR",
   "title": "Battle of Białystok–Minsk",
   "desc": "A near-border battle at the central part of the front.",
   "result": "DEU surrounded and crushed the main body of our Western front.",
   "link": "https://ru.wikipedia.org/wiki/%D0%91%D0%B5%D0%BB%D0%BE%D1%81%D1%82%D0%BE%D0%BA%D1%81%D0%BA%D0%BE-%D0%9C%D0%B8%D0%BD%D1%81%D0%BA%D0%BE%D0%B5_%D1%81%D1%80%D0%B0%D0%B6%D0%B5%D0%BD%D0%B8%D0%B5"
 },
 {
   "from": "1941-06-22",
   "till": "1941-07-09",
   "country": "",
   "province": "",
   "locality": "",
   "where": "LVA, LTU",
   "title": "Baltic operation",
   "desc": "Our Army and Navy are defending LVA, LTU, our North-West regions and the Baltic Sea. We lose 4,916 lives a day.",
   "result": "DEU defeated us. We slowed down DEU Army Group North. Lasted 18 days. Front was 350-450 km wide. We retreated 400-450 km. We lost 15.1% lives.",
   "link": "https://ru.wikipedia.org/wiki/%D0%9F%D1%80%D0%B8%D0%B1%D0%B0%D0%BB%D1%82%D0%B8%D0%B9%D1%81%D0%BA%D0%B0%D1%8F_%D1%81%D1%82%D1%80%D0%B0%D1%82%D0%B5%D0%B3%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%B0%D1%8F_%D0%BE%D0%B1%D0%BE%D1%80%D0%BE%D0%BD%D0%B8%D1%82%D0%B5%D0%BB%D1%8C%D0%BD%D0%B0%D1%8F_%D0%BE%D0%BF%D0%B5%D1%80%D0%B0%D1%86%D0%B8%D1%8F"
 },
 {
   "from": "1941-06-22",
   "till": "1941-12-02",
   "country": "",
   "province": "",
   "locality": "",
   "where": "Hanko, FIN",
   "title": "Hanko defensive",
   "desc": "We defend our Naval base in the city of Hanko against DEU Airforce and Navy",
   "result": "Our Naval base is evacuated to Leningrad",
   "link": "https://ru.wikipedia.org/wiki/%D0%9E%D0%B1%D0%BE%D1%80%D0%BE%D0%BD%D0%B0_%D0%A5%D0%B0%D0%BD%D0%BA%D0%BE"
 },
 {
   "from": "1941-06-23",
   "till": "",
   "country": "",
   "province": "",
   "locality": "",
   "where": "LVA, LTU, BLR, UKR.",
   "title": "11 cities lost",
   "desc": "DEU occupy multiple cities in LVA, LTU, BLR, UKR.",
   "result": "",
   "link": "http://thefireofthewar.ru/1418/index.php/1941/iyun-1941/1413-23-06-1941"
 },
 {
   "from": "1941-06-23",
   "till": "",
   "country": "",
   "province": "",
   "locality": "",
   "where": "",
   "title": "Komsomol to train",
   "desc": "All Komsomol members must undergo basic combat training.",
   "result": "",
   "link": "http://thefireofthewar.ru/1418/index.php/1941/iyun-1941/1413-23-06-1941"
 },
 {
   "from": "1941-06-23",
   "till": "",
   "country": "",
   "province": "",
   "locality": "",
   "where": "",
   "title": "Our Baltic fleet takes action",
   "desc": "installing mines and patrolling, to stop DEU entering our waters.",
   "result": "",
   "link": "http://thefireofthewar.ru/1418/index.php/1941/iyun-1941/1413-23-06-1941"
 },
 {
   "from": "1941-06-23",
   "till": "",
   "country": "",
   "province": "",
   "locality": "",
   "where": "Grodno Province, BLR",
   "title": "1 BLR city lost",
   "desc": "After multiple fierce attacks we leave Grodno and retreat 15 km east.",
   "result": "",
   "link": "http://thefireofthewar.ru/1418/index.php/1941/iyun-1941/1413-23-06-1941"
 },
 {
   "from": "1941-06-23",
   "till": "",
   "country": "",
   "province": "",
   "locality": "",
   "where": "BLR",
   "title": "First head-on tank battle",
   "desc": "BLR, on the line between Kamyenyets - Zhabinka - Velikie Radvanichi",
   "result": "",
   "link": "http://thefireofthewar.ru/1418/index.php/1941/iyun-1941/1413-23-06-1941"
 },
 {
   "from": "1941-06-23",
   "till": "",
   "country": "",
   "province": "",
   "locality": "",
   "where": "",
   "title": "First reservists at reporting centers",
   "desc": "",
   "result": "",
   "link": "http://thefireofthewar.ru/1418/index.php/1941/iyun-1941/1412-22-06-1941"
 },
 {
   "from": "1941-06-23",
   "till": "",
   "country": "",
   "province": "",
   "locality": "",
   "where": "Brest Province, BLR",
   "title": "Brest Fortress fights back",
   "desc": "remaining defenders join forces and counterattack DEU",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%9E%D0%B1%D0%BE%D1%80%D0%BE%D0%BD%D0%B0_%D0%91%D1%80%D0%B5%D1%81%D1%82%D1%81%D0%BA%D0%BE%D0%B9_%D0%BA%D1%80%D0%B5%D0%BF%D0%BE%D1%81%D1%82%D0%B8"
 },
 {
   "from": "1941-06-23",
   "till": "1941-06-25",
   "country": "",
   "province": "",
   "locality": "",
   "where": "Rovno Province, UKR",
   "title": "Defending 1 UKR city",
   "desc": "We are fighting DEU in Dubno",
   "result": "DEU takes the city. We retreat.",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D0%B8%D1%8E%D0%BD%D1%8C_1941_%D0%B3%D0%BE%D0%B4%D0%B0)#25_.D0.B8.D1.8E.D0.BD.D1.8F_1941_.D0.B3.D0.BE.D0.B4.D0.B0._4-.D0.B9_.D0.B4.D0.B5.D0.BD.D1.8C_.D0.B2.D0.BE.D0.B9.D0.BD.D1.8B"
 },
 {
   "from": "1941-06-24",
   "till": "",
   "country": "",
   "province": "",
   "locality": "",
   "where": "",
   "title": "DEU communists condemn war",
   "desc": "Central Committe of DEU communists addresses the DEU people and condemns the war",
   "result": "",
   "link": "http://thefireofthewar.ru/1418/index.php/1941/iyun-1941/1414-24-06-1941"
 },
 {
   "from": "1941-06-24",
   "till": "",
   "country": "",
   "province": "",
   "locality": "",
   "where": "Vilnyus, LTU",
   "title": "LTU capital lost",
   "desc": "Vilnyus defenders attacked and leave the city.",
   "result": "",
   "link": "http://thefireofthewar.ru/1418/index.php/1941/iyun-1941/1414-24-06-1941"
 },
 {
   "from": "1941-06-24",
   "till": "",
   "country": "",
   "province": "",
   "locality": "",
   "where": "",
   "title": "We Move industry away",
   "desc": "We adopted a bylaw to move industry from 6 cities in the west to the rear.",
   "result": "",
   "link": "http://thefireofthewar.ru/1418/index.php/1941/iyun-1941/1414-24-06-1941"
 },
 {
   "from": "1941-06-24",
   "till": "",
   "country": "",
   "province": "",
   "locality": "",
   "where": "Brest Province, BLR",
   "title": "Brest Fortress fights back",
   "desc": "Some defenders fight back, some try to break through but almost all get captured or killed. DEU captures 570 defenders.",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%9E%D0%B1%D0%BE%D1%80%D0%BE%D0%BD%D0%B0_%D0%91%D1%80%D0%B5%D1%81%D1%82%D1%81%D0%BA%D0%BE%D0%B9_%D0%BA%D1%80%D0%B5%D0%BF%D0%BE%D1%81%D1%82%D0%B8"
 },
 {
   "from": "1941-06-25",
   "till": "1941-07-01",
   "country": "",
   "province": "",
   "locality": "",
   "where": "FIN",
   "title": "Our first air offensive",
   "desc": "Our AF fighting FIN. Our goal: destroy DEU and FIN planes in FIN airfields.",
   "result": "DEU & FIN losses: 130 planes. Dubious?",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D0%B8%D1%8E%D0%BB%D1%8C_1941_%D0%B3%D0%BE%D0%B4%D0%B0)#1_.D0.B8.D1.8E.D0.BB.D1.8F_1941_.D0.B3.D0.BE.D0.B4.D0.B0._10-.D0.B9_.D0.B4.D0.B5.D0.BD.D1.8C_.D0.B2.D0.BE.D0.B9.D0.BD.D1.8B"
 },
 {
   "from": "1941-06-25",
   "till": "",
   "country": "",
   "province": "",
   "locality": "",
   "where": "",
   "title": "11 cities lost",
   "desc": "3 in BLR, 5 in LVA, 3 in UKR",
   "result": "",
   "link": "http://thefireofthewar.ru/1418/index.php/1941/iyun-1941/1415-25-06-1941"
 },
 {
   "from": "1941-06-25",
   "till": "",
   "country": "",
   "province": "",
   "locality": "",
   "where": "Moscow, RUS",
   "title": "Совинформбюро",
   "desc": "Совинформбюро makes its first announcement. It will continue daily.",
   "result": "",
   "link": "http://thefireofthewar.ru/1418/index.php/1941/iyun-1941/1415-25-06-1941"
 },
 {
   "from": "1941-06-25",
   "till": "",
   "country": "",
   "province": "",
   "locality": "",
   "where": "ROU",
   "title": "We won't let DEU cross river",
   "desc": "DEU tries to cross river Prut (ROU), we rebuff their attempts",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D0%B8%D1%8E%D0%BD%D1%8C_1941_%D0%B3%D0%BE%D0%B4%D0%B0)#25_.D0.B8.D1.8E.D0.BD.D1.8F_1941_.D0.B3.D0.BE.D0.B4.D0.B0._4-.D0.B9_.D0.B4.D0.B5.D0.BD.D1.8C_.D0.B2.D0.BE.D0.B9.D0.BD.D1.8B"
 },
 {
   "from": "1941-06-25",
   "till": "",
   "country": "",
   "province": "",
   "locality": "",
   "where": "Przemyśl, POL",
   "title": "We retake 1 POL city",
   "desc": "We make a counterstrike and retake the city",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D0%B8%D1%8E%D0%BD%D1%8C_1941_%D0%B3%D0%BE%D0%B4%D0%B0)#25_.D0.B8.D1.8E.D0.BD.D1.8F_1941_.D0.B3.D0.BE.D0.B4.D0.B0._4-.D0.B9_.D0.B4.D0.B5.D0.BD.D1.8C_.D0.B2.D0.BE.D0.B9.D0.BD.D1.8B"
 },
 {
   "from": "1941-06-25",
   "till": "",
   "country": "",
   "province": "",
   "locality": "",
   "where": "",
   "title": "We create Southern Front",
   "desc": "We create Odessa military region into Southern Front",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D0%B8%D1%8E%D0%BD%D1%8C_1941_%D0%B3%D0%BE%D0%B4%D0%B0)#25_.D0.B8.D1.8E.D0.BD.D1.8F_1941_.D0.B3.D0.BE.D0.B4.D0.B0._4-.D0.B9_.D0.B4.D0.B5.D0.BD.D1.8C_.D0.B2.D0.BE.D0.B9.D0.BD.D1.8B"
 },
 {
   "from": "1941-06-25",
   "till": "",
   "country": "",
   "province": "",
   "locality": "",
   "where": "",
   "title": "We form reserve armies",
   "desc": "Our High Command creates a a group of 4 reserve armies under Marshal Semyon Budyonny.",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D0%B8%D1%8E%D0%BD%D1%8C_1941_%D0%B3%D0%BE%D0%B4%D0%B0)#25_.D0.B8.D1.8E.D0.BD.D1.8F_1941_.D0.B3.D0.BE.D0.B4.D0.B0._4-.D0.B9_.D0.B4.D0.B5.D0.BD.D1.8C_.D0.B2.D0.BE.D0.B9.D0.BD.D1.8B"
 },
 {
   "from": "1941-06-25",
   "till": "",
   "country": "",
   "province": "",
   "locality": "",
   "where": "Minsk Province, BLR",
   "title": "We fight, retreat, beaten",
   "desc": "We start defensive action in Minsk fortified area. 2 armies are ordered to retreat. They don't make it through the 60km corridor and are overrun.",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D0%B8%D1%8E%D0%BD%D1%8C_1941_%D0%B3%D0%BE%D0%B4%D0%B0)#25_.D0.B8.D1.8E.D0.BD.D1.8F_1941_.D0.B3.D0.BE.D0.B4.D0.B0._4-.D0.B9_.D0.B4.D0.B5.D0.BD.D1.8C_.D0.B2.D0.BE.D0.B9.D0.BD.D1.8B"
 },
 {
   "from": "1941-06-25",
   "till": "",
   "country": "",
   "province": "",
   "locality": "",
   "where": "BLR",
   "title": "DEU tramples BLR",
   "desc": "DEU advance in BLR: 2 cities taken (Valozhyn & Slonim), 2 cities at threat (Minsk & Baranovichy)",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D0%B8%D1%8E%D0%BD%D1%8C_1941_%D0%B3%D0%BE%D0%B4%D0%B0)#25_.D0.B8.D1.8E.D0.BD.D1.8F_1941_.D0.B3.D0.BE.D0.B4.D0.B0._4-.D0.B9_.D0.B4.D0.B5.D0.BD.D1.8C_.D0.B2.D0.BE.D0.B9.D0.BD.D1.8B"
 },
 {
   "from": "1941-06-25",
   "till": "",
   "country": "",
   "province": "",
   "locality": "",
   "where": "LVA",
   "title": "DEU advances, we retreat",
   "desc": "DEU tanks advance at LVA, we retreat beyond Daugava River (West Dvina)",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D0%B8%D1%8E%D0%BD%D1%8C_1941_%D0%B3%D0%BE%D0%B4%D0%B0)#25_.D0.B8.D1.8E.D0.BD.D1.8F_1941_.D0.B3.D0.BE.D0.B4.D0.B0._4-.D0.B9_.D0.B4.D0.B5.D0.BD.D1.8C_.D0.B2.D0.BE.D0.B9.D0.BD.D1.8B"
 },
 {
   "from": "1941-06-25",
   "till": "",
   "country": "",
   "province": "",
   "locality": "",
   "where": "FIN, NOR",
   "title": "We bomb FIN & NOR airfields",
   "desc": "Our airforce (Northern Fleet and Baltic fleet) - 500 planes - deal a massive but ineffective strike at FIN and NOR airfields, the base of FIN AF and DEU 5th Air Army. FIN parliament votes for a war against us.",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D0%B8%D1%8E%D0%BD%D1%8C_1941_%D0%B3%D0%BE%D0%B4%D0%B0)#25_.D0.B8.D1.8E.D0.BD.D1.8F_1941_.D0.B3.D0.BE.D0.B4.D0.B0._4-.D0.B9_.D0.B4.D0.B5.D0.BD.D1.8C_.D0.B2.D0.BE.D0.B9.D0.BD.D1.8B"
 },
 {
   "from": "1941-06-25",
   "till": "1944-09-19",
   "country": "",
   "province": "",
   "locality": "",
   "where": "",
   "title": "Soviet-Finnish war",
   "desc": "Finns are on the Axis side. Aim: seize USSR's lands up to Border of the Three Isthmi (Karelian, Olonets and White Sea isthmus)",
   "result": "Победа СССР. Московское перемирие, Финляндия объявила войну нацистской Германии.",
   "link": "https://ru.wikipedia.org/wiki/%D0%A1%D0%BE%D0%B2%D0%B5%D1%82%D1%81%D0%BA%D0%BE-%D1%84%D0%B8%D0%BD%D1%81%D0%BA%D0%B0%D1%8F_%D0%B2%D0%BE%D0%B9%D0%BD%D0%B0_(1941%E2%80%941944)"
 },
 {
   "from": "1941-06-26",
   "till": "",
   "country": "",
   "province": "",
   "locality": "",
   "where": "",
   "title": "15 cities lost",
   "desc": "6 cities in BLR, 7 in LTU, 1 in LVA, 1 in UKR.",
   "result": "",
   "link": "http://thefireofthewar.ru/1418/index.php/1941/iyun-1941/1416-26-06-1941"
 },
 {
   "from": "1941-06-26",
   "till": "",
   "country": "",
   "province": "",
   "locality": "",
   "where": "Polesia Province, BLR.",
   "title": "Red October",
   "desc": " A first partisan detachment.",
   "result": "",
   "link": "http://thefireofthewar.ru/1418/index.php/1941/iyun-1941/1416-26-06-1941"
 },
 {
   "from": "1941-06-26",
   "till": "",
   "country": "",
   "province": "",
   "locality": "",
   "where": "Pinsk Province, BLR",
   "title": "Korzh's partisans",
   "desc": " One of the first BLR partisan detachment. Commander Vasily Korzh.",
   "result": "",
   "link": "http://thefireofthewar.ru/1418/index.php/1941/iyun-1941/1416-26-06-1941"
 },
 {
   "from": "1941-06-26",
   "till": "",
   "country": "",
   "province": "",
   "locality": "",
   "where": "Mogilev Province, BLR,",
   "title": "BLR people's militia begin",
   "desc": "Citizens in arms are organizing. First: 500-strong mopping-up detachment",
   "result": "",
   "link": "http://thefireofthewar.ru/1418/index.php/1941/iyun-1941/1416-26-06-1941"
 },
 {
   "from": "1941-06-26",
   "till": "",
   "country": "",
   "province": "",
   "locality": "",
   "where": "Łapy, POL",
   "title": "Tank ramming by 3 brothers",
   "desc": "In this village,  3 brothers Krichevtsov do tank ramming.",
   "result": "",
   "link": "http://thefireofthewar.ru/1418/index.php/1941/iyun-1941/1416-26-06-1941"
 },
 {
   "from": "1941-06-26",
   "till": "",
   "country": "",
   "province": "",
   "locality": "",
   "where": "",
   "title": "Our marines take river Danube",
   "desc": "Our Danube flotilla's marines.",
   "result": "",
   "link": "http://thefireofthewar.ru/1418/index.php/1941/iyun-1941/1416-26-06-1941"
 },
 {
   "from": "1941-06-26",
   "till": "",
   "country": "",
   "province": "",
   "locality": "",
   "where": "Baltic sea, Irbe Strait.",
   "title": "We sink 6 Nazi ships",
   "desc": "Our torpedo boat counterattack and destroy 2 battleships and 4 storeships.",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D0%B8%D1%8E%D0%BD%D1%8C_1941_%D0%B3%D0%BE%D0%B4%D0%B0)#27_.D0.B8.D1.8E.D0.BD.D1.8F_1941_.D0.B3.D0.BE.D0.B4.D0.B0._6-.D0.B9_.D0.B4.D0.B5.D0.BD.D1.8C_.D0.B2.D0.BE.D0.B9.D0.BD.D1.8B"
 },
 {
   "from": "1941-06-26",
   "till": "",
   "country": "",
   "province": "",
   "locality": "",
   "where": "",
   "title": "Income support cuts",
   "desc": "Reduced income support for servicemen's families 100-250 Rub monthly. 50% cut in the country.",
   "result": "",
   "link": "http://thefireofthewar.ru/1418/index.php/1941/iyun-1941/1416-26-06-1941"
 },
 {
   "from": "1941-06-26",
   "till": "",
   "country": "",
   "province": "",
   "locality": "",
   "where": "Moscow, RUS",
   "title": "Overtime work mandatory",
   "desc": "Govt: mandatory overtime work, 1-3 hours a day, 150% pay. Annual holidays to be replaced with money compensation.",
   "result": "",
   "link": "http://thefireofthewar.ru/1418/index.php/1941/iyun-1941/1416-26-06-1941"
 },
 {
   "from": "1941-06-26",
   "till": "",
   "country": "",
   "province": "",
   "locality": "",
   "where": "Bessarabia, MDA",
   "title": "We fighting for MDA",
   "desc": "We are holding on to our border fighting off Nazis and Romanians. We counterattack at village of Sculeni, MDA",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D0%B8%D1%8E%D0%BD%D1%8C_1941_%D0%B3%D0%BE%D0%B4%D0%B0)#26_.D0.B8.D1.8E.D0.BD.D1.8F_1941_.D0.B3.D0.BE.D0.B4.D0.B0._5-.D0.B9_.D0.B4.D0.B5.D0.BD.D1.8C_.D0.B2.D0.BE.D0.B9.D0.BD.D1.8B"
 },
 {
   "from": "1941-06-26",
   "till": "",
   "country": "",
   "province": "",
   "locality": "",
   "where": "Istanbul, TUR",
   "title": "We are neutral",
   "desc": "Turkey declare neutrality",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D0%B8%D1%8E%D0%BD%D1%8C_1941_%D0%B3%D0%BE%D0%B4%D0%B0)#26_.D0.B8.D1.8E.D0.BD.D1.8F_1941_.D0.B3.D0.BE.D0.B4.D0.B0._5-.D0.B9_.D0.B4.D0.B5.D0.BD.D1.8C_.D0.B2.D0.BE.D0.B9.D0.BD.D1.8B"
 },
 {
   "from": "1941-06-26",
   "till": "",
   "country": "",
   "province": "",
   "locality": "",
   "where": "Volyn Province, UKR",
   "title": "We strike, get hit, retreat",
   "desc": "Our 4 mechanized corps counterattack, DEU counterattack in the evening, we leave Lutsk, UKR, DEU drives us, we retreat with lots of casualties. ",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D0%B8%D1%8E%D0%BD%D1%8C_1941_%D0%B3%D0%BE%D0%B4%D0%B0)#26_.D0.B8.D1.8E.D0.BD.D1.8F_1941_.D0.B3.D0.BE.D0.B4.D0.B0._5-.D0.B9_.D0.B4.D0.B5.D0.BD.D1.8C_.D0.B2.D0.BE.D0.B9.D0.BD.D1.8B"
 },
 {
   "from": "1941-06-26",
   "till": "",
   "country": "",
   "province": "",
   "locality": "",
   "where": "BLR",
   "title": "Gastello dies a hero",
   "desc": "BLR: on the road between Maladzyechna and Radashkovichy our bomber pilot captain Nikolai Gastello (34) is hit, and brings down his burning plane on the Nazi tanks, gas tanks, and vehicles. Also Alexander Maslov.",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%93%D0%B0%D1%81%D1%82%D0%B5%D0%BB%D0%BB%D0%BE,_%D0%9D%D0%B8%D0%BA%D0%BE%D0%BB%D0%B0%D0%B9_%D0%A4%D1%80%D0%B0%D0%BD%D1%86%D0%B5%D0%B2%D0%B8%D1%87"
 },
 {
   "from": "1941-06-26",
   "till": "",
   "country": "",
   "province": "",
   "locality": "",
   "where": "BLR",
   "title": "4 cities lost in BLR",
   "desc": "DEU tanks took Maladzyechna, Valozhyn, Radashkovichy, Baranovichy, and go toward Barysaw, BLR",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D0%B8%D1%8E%D0%BD%D1%8C_1941_%D0%B3%D0%BE%D0%B4%D0%B0)#26_.D0.B8.D1.8E.D0.BD.D1.8F_1941_.D0.B3.D0.BE.D0.B4.D0.B0._5-.D0.B9_.D0.B4.D0.B5.D0.BD.D1.8C_.D0.B2.D0.BE.D0.B9.D0.BD.D1.8B"
 },
 {
   "from": "1941-06-26",
   "till": "",
   "country": "",
   "province": "",
   "locality": "",
   "where": "Daugavpils/Dvinsk, LTU,",
   "title": "Dvinsk lost",
   "desc": "DEU tanks take 2 bridges across Daugava near the city of Daugavpils, LTU.",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D0%B8%D1%8E%D0%BD%D1%8C_1941_%D0%B3%D0%BE%D0%B4%D0%B0)#26_.D0.B8.D1.8E.D0.BD.D1.8F_1941_.D0.B3.D0.BE.D0.B4.D0.B0._5-.D0.B9_.D0.B4.D0.B5.D0.BD.D1.8C_.D0.B2.D0.BE.D0.B9.D0.BD.D1.8B"
 },
 {
   "from": "1941-06-26",
   "till": "",
   "country": "",
   "province": "",
   "locality": "",
   "where": "Constanța, ROU",
   "title": "Our first strike at enemy land",
   "desc": "05:00. Our 2 battleships fire at the city and set their oil-tanks on fire, destroy a train with ammunition.",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D0%B8%D1%8E%D0%BD%D1%8C_1941_%D0%B3%D0%BE%D0%B4%D0%B0)#26_.D0.B8.D1.8E.D0.BD.D1.8F_1941_.D0.B3.D0.BE.D0.B4.D0.B0._5-.D0.B9_.D0.B4.D0.B5.D0.BD.D1.8C_.D0.B2.D0.BE.D0.B9.D0.BD.D1.8B"
 },
 {
   "from": "1941-06-26",
   "till": "",
   "country": "",
   "province": "",
   "locality": "",
   "where": "Brest Province, BLR",
   "title": "Brest Fortress' Citadel succumbs",
   "desc": "DEU use explosions, capture the last 450 defenders.",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%9E%D0%B1%D0%BE%D1%80%D0%BE%D0%BD%D0%B0_%D0%91%D1%80%D0%B5%D1%81%D1%82%D1%81%D0%BA%D0%BE%D0%B9_%D0%BA%D1%80%D0%B5%D0%BF%D0%BE%D1%81%D1%82%D0%B8"
 },
 {
   "from": "1941-06-26",
   "till": "1941-06-30",
   "country": "",
   "province": "",
   "locality": "",
   "where": "Minsk Province, BLR",
   "title": "Minsk fortified area (#63) fighting",
   "desc": "Our military base at Minsk fortified area (#63). Poorly equipped. Defended by battalions and 3 divisions",
   "result": "part was surrounded, part left beyond Berezina River",
   "link": "https://ru.wikipedia.org/wiki/63-%D0%B9_%D1%83%D0%BA%D1%80%D0%B5%D0%BF%D0%BB%D1%91%D0%BD%D0%BD%D1%8B%D0%B9_%D1%80%D0%B0%D0%B9%D0%BE%D0%BD"
 },
 {
   "from": "1941-06-27",
   "till": "",
   "country": "",
   "province": "",
   "locality": "",
   "where": "UKR",
   "title": "We are pursued",
   "desc": "UKR: DEU launch a counteroffensive and persue us as we are leaving from the Lvov outthrust(?).",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D0%B8%D1%8E%D0%BD%D1%8C_1941_%D0%B3%D0%BE%D0%B4%D0%B0)#27_.D0.B8.D1.8E.D0.BD.D1.8F_1941_.D0.B3.D0.BE.D0.B4.D0.B0._6-.D0.B9_.D0.B4.D0.B5.D0.BD.D1.8C_.D0.B2.D0.BE.D0.B9.D0.BD.D1.8B"
 },
 {
   "from": "1941-06-27",
   "till": "",
   "country": "",
   "province": "",
   "locality": "",
   "where": "Rovno Province, UKR",
   "title": "we counterattack, thrown back",
   "desc": "UKR: early morning: we counterattack and break through to Dubno, DEU counterattack and push us back. We lose Ostrog, URK.",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D0%B8%D1%8E%D0%BD%D1%8C_1941_%D0%B3%D0%BE%D0%B4%D0%B0)#27_.D0.B8.D1.8E.D0.BD.D1.8F_1941_.D0.B3.D0.BE.D0.B4.D0.B0._6-.D0.B9_.D0.B4.D0.B5.D0.BD.D1.8C_.D0.B2.D0.BE.D0.B9.D0.BD.D1.8B"
 },
 {
   "from": "1941-06-27",
   "till": "",
   "country": "",
   "province": "",
   "locality": "",
   "where": "BLR",
   "title": "2 cities lost, we retreat",
   "desc": "BLR: early morning: Nazi tanks took Smolevichi. Also taking Stowbtsy, DEU tanks in the outskirts of Minsk, BLR. We retreat leaving Białystok, POL.",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D0%B8%D1%8E%D0%BD%D1%8C_1941_%D0%B3%D0%BE%D0%B4%D0%B0)#27_.D0.B8.D1.8E.D0.BD.D1.8F_1941_.D0.B3.D0.BE.D0.B4.D0.B0._6-.D0.B9_.D0.B4.D0.B5.D0.BD.D1.8C_.D0.B2.D0.BE.D0.B9.D0.BD.D1.8B"
 },
 {
   "from": "1941-06-27",
   "till": "",
   "country": "",
   "province": "",
   "locality": "",
   "where": "LVA",
   "title": "Nazis entrench in LVA",
   "desc": "Nazis moving toward Daugava, and enlarge their foothold in Daugavpils, LVA. Afternoon: we counterattack.",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D0%B8%D1%8E%D0%BD%D1%8C_1941_%D0%B3%D0%BE%D0%B4%D0%B0)#27_.D0.B8.D1.8E.D0.BD.D1.8F_1941_.D0.B3.D0.BE.D0.B4.D0.B0._6-.D0.B9_.D0.B4.D0.B5.D0.BD.D1.8C_.D0.B2.D0.BE.D0.B9.D0.BD.D1.8B"
 },
 {
   "from": "1941-06-27",
   "till": "",
   "country": "",
   "province": "",
   "locality": "",
   "where": "Tehran, IRN",
   "title": "We are neutral!",
   "desc": "Iranian ambassador: Iran will be neutral.",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D0%B8%D1%8E%D0%BD%D1%8C_1941_%D0%B3%D0%BE%D0%B4%D0%B0)#26_.D0.B8.D1.8E.D0.BD.D1.8F_1941_.D0.B3.D0.BE.D0.B4.D0.B0._5-.D0.B9_.D0.B4.D0.B5.D0.BD.D1.8C_.D0.B2.D0.BE.D0.B9.D0.BD.D1.8B"
 },
 {
   "from": "1941-06-28",
   "till": "",
   "country": "",
   "province": "",
   "locality": "",
   "where": "Daugavpils/Dvinsk, LTU",
   "title": "LVA: retake and lose again",
   "desc": "LVA: We counterattack and re-enter a city (Daugavpils), but DEU counterattack and drive us out.",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D0%B8%D1%8E%D0%BD%D1%8C_1941_%D0%B3%D0%BE%D0%B4%D0%B0)#28_.D0.B8.D1.8E.D0.BD.D1.8F_1941_.D0.B3.D0.BE.D0.B4.D0.B0._7-.D0.B9_.D0.B4.D0.B5.D0.BD.D1.8C_.D0.B2.D0.BE.D0.B9.D0.BD.D1.8B"
 },
 {
   "from": "1941-06-28",
   "till": "",
   "country": "",
   "province": "",
   "locality": "",
   "where": "Minsk Province, BLR",
   "title": "DEU takes BLR capital",
   "desc": "DEU tanks break into Minsk from SW and S.",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D0%B8%D1%8E%D0%BD%D1%8C_1941_%D0%B3%D0%BE%D0%B4%D0%B0)#28_.D0.B8.D1.8E.D0.BD.D1.8F_1941_.D0.B3.D0.BE.D0.B4.D0.B0._7-.D0.B9_.D0.B4.D0.B5.D0.BD.D1.8C_.D0.B2.D0.BE.D0.B9.D0.BD.D1.8B"
 },
 {
   "from": "1941-06-28",
   "till": "",
   "country": "",
   "province": "",
   "locality": "",
   "where": "Bialostok, POL",
   "title": "BLR: We are surrounded",
   "desc": "We (W Front) retreat, leave Bialostok, POL. DEU surrounds part of our W Front E of Bialostok, POL. ",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D0%B8%D1%8E%D0%BD%D1%8C_1941_%D0%B3%D0%BE%D0%B4%D0%B0)#28_.D0.B8.D1.8E.D0.BD.D1.8F_1941_.D0.B3.D0.BE.D0.B4.D0.B0._7-.D0.B9_.D0.B4.D0.B5.D0.BD.D1.8C_.D0.B2.D0.BE.D0.B9.D0.BD.D1.8B"
 },
 {
   "from": "1941-06-28",
   "till": "",
   "country": "",
   "province": "",
   "locality": "",
   "where": "Rovno Province, UKR",
   "title": "UKR: ours retreat, get entrapped",
   "desc": "UKR: we leave the provincial capital (Rovno), retreat to a river (Goryn). DEU keep advancing, bring up reserves, surrounds some of ours.",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D0%B8%D1%8E%D0%BD%D1%8C_1941_%D0%B3%D0%BE%D0%B4%D0%B0)#28_.D0.B8.D1.8E.D0.BD.D1.8F_1941_.D0.B3.D0.BE.D0.B4.D0.B0._7-.D0.B9_.D0.B4.D0.B5.D0.BD.D1.8C_.D0.B2.D0.BE.D0.B9.D0.BD.D1.8B"
 },
 {
   "from": "1941-06-28",
   "till": "",
   "country": "",
   "province": "",
   "locality": "",
   "where": "Minsk Province, BLR",
   "title": "DEU takes Minsk (BLR)",
   "desc": "DEU occupies BLR capital and makes it center of Generalbezirk Weißruthenien.",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%93%D0%B5%D0%BD%D0%B5%D1%80%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D0%B9_%D0%BE%D0%BA%D1%80%D1%83%D0%B3_%D0%91%D0%B5%D0%BB%D0%BE%D1%80%D1%83%D1%81%D1%81%D0%B8%D1%8F"
 },
 {
   "from": "1941-06-29",
   "till": "1941-11-01",
   "country": "",
   "province": "",
   "locality": "",
   "where": "",
   "title": "Defending the Subarctic and Karelia",
   "desc": "North and Karelian Fronts. DEU want to ceise our railroad, annihilate our North Navy bases and take the Kola Bay.",
   "result": "We beat DEU and FIN.",
   "link": "https://ru.wikipedia.org/wiki/%D0%9E%D0%B1%D0%BE%D1%80%D0%BE%D0%BD%D0%B0_%D0%97%D0%B0%D0%BF%D0%BE%D0%BB%D1%8F%D1%80%D1%8C%D1%8F"
 },
 {
   "from": "1941-06-29",
   "till": "",
   "country": "",
   "province": "",
   "locality": "",
   "where": "Murmansk Province, RUS",
   "title": "DEU go into the offensive",
   "desc": "DEU strike toward our N province capital (Murmansk) and 2 other cities (Kandalaksha, Ukhta)",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D0%B8%D1%8E%D0%BD%D1%8C_1941_%D0%B3%D0%BE%D0%B4%D0%B0)#29_.D0.B8.D1.8E.D0.BD.D1.8F_1941_.D0.B3.D0.BE.D0.B4.D0.B0._8-.D0.B9_.D0.B4.D0.B5.D0.BD.D1.8C_.D0.B2.D0.BE.D0.B9.D0.BD.D1.8B"
 },
 {
   "from": "1941-06-29",
   "till": "",
   "country": "",
   "province": "",
   "locality": "",
   "where": "Riga, LVA",
   "title": "Losses in LVA",
   "desc": "LVA: DEU crosses a river (Daugava). We leave a coastal city (Liepāja) and lose the capital (Riga).",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D0%B8%D1%8E%D0%BD%D1%8C_1941_%D0%B3%D0%BE%D0%B4%D0%B0)#29_.D0.B8.D1.8E.D0.BD.D1.8F_1941_.D0.B3.D0.BE.D0.B4.D0.B0._8-.D0.B9_.D0.B4.D0.B5.D0.BD.D1.8C_.D0.B2.D0.BE.D0.B9.D0.BD.D1.8B"
 },
 {
   "from": "1941-06-29",
   "till": "",
   "country": "",
   "province": "",
   "locality": "",
   "where": "Minsk Province, BLR",
   "title": "BLR capital surrounded",
   "desc": "BLR: DEU tanks close the ring aroung the capital.",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D0%B8%D1%8E%D0%BD%D1%8C_1941_%D0%B3%D0%BE%D0%B4%D0%B0)#29_.D0.B8.D1.8E.D0.BD.D1.8F_1941_.D0.B3.D0.BE.D0.B4.D0.B0._8-.D0.B9_.D0.B4.D0.B5.D0.BD.D1.8C_.D0.B2.D0.BE.D0.B9.D0.BD.D1.8B"
 },
 {
   "from": "1941-06-29",
   "till": "",
   "country": "",
   "province": "",
   "locality": "",
   "where": "",
   "title": "\"We tossed it out the window\"",
   "desc": "Meeting with the commander-in-chief (Stalin). In the heat of passoin he yells at the chief of the general staff (Zhukov) reducing him to tears and says \"We screwed up Lenin's heritage\"  ",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D0%B8%D1%8E%D0%BD%D1%8C_1941_%D0%B3%D0%BE%D0%B4%D0%B0)#29_.D0.B8.D1.8E.D0.BD.D1.8F_1941_.D0.B3.D0.BE.D0.B4.D0.B0._8-.D0.B9_.D0.B4.D0.B5.D0.BD.D1.8C_.D0.B2.D0.BE.D0.B9.D0.BD.D1.8B"
 },
 {
   "from": "1941-06-29",
   "till": "",
   "country": "",
   "province": "",
   "locality": "",
   "where": "Rovno Province, UKR",
   "title": "UKR: we fight, rotate, get trapped.",
   "desc": "UKR: DEU receives backup. We We are fighing for one city (Dubno). Our tanks keep defending another (Ostrog). Some of our battered troops begin rotation, some get trapped (near Dubno).",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D0%B8%D1%8E%D0%BD%D1%8C_1941_%D0%B3%D0%BE%D0%B4%D0%B0)#29_.D0.B8.D1.8E.D0.BD.D1.8F_1941_.D0.B3.D0.BE.D0.B4.D0.B0._8-.D0.B9_.D0.B4.D0.B5.D0.BD.D1.8C_.D0.B2.D0.BE.D0.B9.D0.BD.D1.8B"
 },
 {
   "from": "1941-06-29",
   "till": "",
   "country": "",
   "province": "",
   "locality": "",
   "where": "Lvov Province, UKR",
   "title": "UKR: a provincial capital lost",
   "desc": "UKR: DEU break through to a provincial capital (Lvov), and we leave it.",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D0%B8%D1%8E%D0%BD%D1%8C_1941_%D0%B3%D0%BE%D0%B4%D0%B0)#29_.D0.B8.D1.8E.D0.BD.D1.8F_1941_.D0.B3.D0.BE.D0.B4.D0.B0._8-.D0.B9_.D0.B4.D0.B5.D0.BD.D1.8C_.D0.B2.D0.BE.D0.B9.D0.BD.D1.8B"
 },
 {
   "from": "1941-06-29",
   "till": "",
   "country": "",
   "province": "",
   "locality": "",
   "where": "Brest Province, BLR",
   "title": "Brest Fortress' Eastern Fort falls",
   "desc": "after DEU drop a 1800 kg bomb on them. A few make a desperate attempt to break out, but most are killed or captured. ",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%9E%D0%B1%D0%BE%D1%80%D0%BE%D0%BD%D0%B0_%D0%91%D1%80%D0%B5%D1%81%D1%82%D1%81%D0%BA%D0%BE%D0%B9_%D0%BA%D1%80%D0%B5%D0%BF%D0%BE%D1%81%D1%82%D0%B8"
 },
 {
   "from": "1941-06-29",
   "till": "",
   "country": "",
   "province": "",
   "locality": "",
   "where": "Leningrad Province, RUS",
   "title": "",
   "desc": "Начинается эвакуация ленинградцев",
   "result": "",
   "link": ""
 },
 {
   "from": "1941-06-29",
   "till": "",
   "country": "",
   "province": "",
   "locality": "",
   "where": "",
   "title": "Финны вторгаются в СССР",
   "desc": "Финские войска, перейдя государственную границу, начали сухопутную операцию против СССР.",
   "result": "",
   "link": ""
 },
 {
   "from": "1941-06-29",
   "till": "1941-10-10",
   "country": "",
   "province": "",
   "locality": "",
   "where": "",
   "title": "Оборона Заполярья",
   "desc": "Северный фронт",
   "result": "",
   "link": ""
 },
 {
   "from": "1941-06-30",
   "till": "",
   "country": "",
   "province": "",
   "locality": "",
   "where": "",
   "title": "SDC",
   "desc": "State Defense Committee is formed, chairman is Stalin",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D0%B8%D1%8E%D0%BD%D1%8C_1941_%D0%B3%D0%BE%D0%B4%D0%B0)#30_.D0.B8.D1.8E.D0.BD.D1.8F_1941_.D0.B3.D0.BE.D0.B4.D0.B0._9-.D0.B9_.D0.B4.D0.B5.D0.BD.D1.8C_.D0.B2.D0.BE.D0.B9.D0.BD.D1.8B"
 },
 {
   "from": "1941-06-30",
   "till": "",
   "country": "",
   "province": "",
   "locality": "",
   "where": "Moscow, RUS",
   "title": "Moscow evacuation",
   "desc": "People, businesses and institutions start to evacuate from SU capital",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D0%B8%D1%8E%D0%BD%D1%8C_1941_%D0%B3%D0%BE%D0%B4%D0%B0)#30_.D0.B8.D1.8E.D0.BD.D1.8F_1941_.D0.B3.D0.BE.D0.B4.D0.B0._9-.D0.B9_.D0.B4.D0.B5.D0.BD.D1.8C_.D0.B2.D0.BE.D0.B9.D0.BD.D1.8B"
 },
 {
   "from": "1941-06-30",
   "till": "",
   "country": "",
   "province": "",
   "locality": "",
   "where": "",
   "title": "Daugava defenders retreat",
   "desc": "NW front commander Kuznetsov orders our troops to retreat from defending Daugava.",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D0%B8%D1%8E%D0%BD%D1%8C_1941_%D0%B3%D0%BE%D0%B4%D0%B0)#30_.D0.B8.D1.8E.D0.BD.D1.8F_1941_.D0.B3.D0.BE.D0.B4.D0.B0._9-.D0.B9_.D0.B4.D0.B5.D0.BD.D1.8C_.D0.B2.D0.BE.D0.B9.D0.BD.D1.8B"
 },
 {
   "from": "1941-06-30",
   "till": "",
   "country": "",
   "province": "",
   "locality": "",
   "where": "Riga, LVA",
   "title": "LVA capital bridges",
   "desc": "DEU takes city bridges ",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D0%B8%D1%8E%D0%BD%D1%8C_1941_%D0%B3%D0%BE%D0%B4%D0%B0)#30_.D0.B8.D1.8E.D0.BD.D1.8F_1941_.D0.B3.D0.BE.D0.B4.D0.B0._9-.D0.B9_.D0.B4.D0.B5.D0.BD.D1.8C_.D0.B2.D0.BE.D0.B9.D0.BD.D1.8B"
 },
 {
   "from": "1941-06-30",
   "till": "",
   "country": "",
   "province": "",
   "locality": "",
   "where": "Minsk Province, BLR",
   "title": "Entrapped, die, break through",
   "desc": "DEU keep killing our troops surrounded west of BLR capital. Some of ours break out through DEU tanks.",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D0%B8%D1%8E%D0%BD%D1%8C_1941_%D0%B3%D0%BE%D0%B4%D0%B0)#30_.D0.B8.D1.8E.D0.BD.D1.8F_1941_.D0.B3.D0.BE.D0.B4.D0.B0._9-.D0.B9_.D0.B4.D0.B5.D0.BD.D1.8C_.D0.B2.D0.BE.D0.B9.D0.BD.D1.8B"
 },
 {
   "from": "1941-06-30",
   "till": "",
   "country": "",
   "province": "",
   "locality": "",
   "where": "BLR",
   "title": "DEU tanks move thru BLR",
   "desc": "Afternoon: German tanks threaten another BLR district center (Novo-Borisov), strike us north of another city (Bobruysk), cross a river (Berezina), secure a beachhead.",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D0%B8%D1%8E%D0%BD%D1%8C_1941_%D0%B3%D0%BE%D0%B4%D0%B0)#30_.D0.B8.D1.8E.D0.BD.D1.8F_1941_.D0.B3.D0.BE.D0.B4.D0.B0._9-.D0.B9_.D0.B4.D0.B5.D0.BD.D1.8C_.D0.B2.D0.BE.D0.B9.D0.BD.D1.8B"
 },
 {
   "from": "1941-06-30",
   "till": "",
   "country": "",
   "province": "",
   "locality": "",
   "where": "",
   "title": "W Front commander arrested",
   "desc": "Dmitry Padlov. For cowardice, reteat without permission, inactivity.",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D0%B8%D1%8E%D0%BD%D1%8C_1941_%D0%B3%D0%BE%D0%B4%D0%B0)#30_.D0.B8.D1.8E.D0.BD.D1.8F_1941_.D0.B3.D0.BE.D0.B4.D0.B0._9-.D0.B9_.D0.B4.D0.B5.D0.BD.D1.8C_.D0.B2.D0.BE.D0.B9.D0.BD.D1.8B"
 },
 {
   "from": "1941-06-30",
   "till": "",
   "country": "",
   "province": "",
   "locality": "",
   "where": "UKR",
   "title": "We retreat in UKR",
   "desc": "SW Front commander is ordered to retreat to put up a staunch defense",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D0%B8%D1%8E%D0%BD%D1%8C_1941_%D0%B3%D0%BE%D0%B4%D0%B0)#30_.D0.B8.D1.8E.D0.BD.D1.8F_1941_.D0.B3.D0.BE.D0.B4.D0.B0._9-.D0.B9_.D0.B4.D0.B5.D0.BD.D1.8C_.D0.B2.D0.BE.D0.B9.D0.BD.D1.8B"
 },
 {
   "from": "1941-06-30",
   "till": "",
   "country": "",
   "province": "",
   "locality": "",
   "where": "",
   "title": "UKR: 5 cities lost",
   "desc": "UKR: we lost 5 cities (Kovel, Lutsk, Rovno, Dubno, Lvov). Our troops get surrounded (near Dubno) and try to break out toward SW.",
   "result": "",
   "link": ""
 },
 {
   "from": "1941-07-01",
   "till": "",
   "country": "",
   "province": "",
   "locality": "",
   "where": "",
   "title": "The subarctic: DEU & FIN attack",
   "desc": "Their goal - to take a NW city (Kandalaksha).",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D0%B8%D1%8E%D0%BB%D1%8C_1941_%D0%B3%D0%BE%D0%B4%D0%B0)#1_.D0.B8.D1.8E.D0.BB.D1.8F_1941_.D0.B3.D0.BE.D0.B4.D0.B0._10-.D0.B9_.D0.B4.D0.B5.D0.BD.D1.8C_.D0.B2.D0.BE.D0.B9.D0.BD.D1.8B"
 },
 {
   "from": "1941-07-01",
   "till": "",
   "country": "",
   "province": "",
   "locality": "",
   "where": "Hanko, FIN",
   "title": "FIN attack our Naval base",
   "desc": "FIN storm our Naval base (Hanko peninsula, FIN) but we repel all their attacks. ",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D0%B8%D1%8E%D0%BB%D1%8C_1941_%D0%B3%D0%BE%D0%B4%D0%B0)#1_.D0.B8.D1.8E.D0.BB.D1.8F_1941_.D0.B3.D0.BE.D0.B4.D0.B0._10-.D0.B9_.D0.B4.D0.B5.D0.BD.D1.8C_.D0.B2.D0.BE.D0.B9.D0.BD.D1.8B"
 },
 {
   "from": "1941-07-01",
   "till": "",
   "country": "",
   "province": "",
   "locality": "",
   "where": "LVA",
   "title": "We retreat in LVA",
   "desc": "LVA: we retreat across Daugava.",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D0%B8%D1%8E%D0%BB%D1%8C_1941_%D0%B3%D0%BE%D0%B4%D0%B0)#1_.D0.B8.D1.8E.D0.BB.D1.8F_1941_.D0.B3.D0.BE.D0.B4.D0.B0._10-.D0.B9_.D0.B4.D0.B5.D0.BD.D1.8C_.D0.B2.D0.BE.D0.B9.D0.BD.D1.8B"
 },
 {
   "from": "1941-07-01",
   "till": "",
   "country": "",
   "province": "",
   "locality": "",
   "where": "Mogilev Province, BLR",
   "title": "BLR: 2 cities lost.",
   "desc": "DEU break into 2 cities (Staro-Borisov, Bobruysk)",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D0%B8%D1%8E%D0%BB%D1%8C_1941_%D0%B3%D0%BE%D0%B4%D0%B0)#1_.D0.B8.D1.8E.D0.BB.D1.8F_1941_.D0.B3.D0.BE.D0.B4.D0.B0._10-.D0.B9_.D0.B4.D0.B5.D0.BD.D1.8C_.D0.B2.D0.BE.D0.B9.D0.BD.D1.8B"
 },
 {
   "from": "1941-07-01",
   "till": "",
   "country": "",
   "province": "",
   "locality": "",
   "where": "UKR",
   "title": "UKR: We attack and retreat.",
   "desc": "Our SW Front attack DEU S flank, break through from the woods and advance. Our other troops retreat. ",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D0%B8%D1%8E%D0%BB%D1%8C_1941_%D0%B3%D0%BE%D0%B4%D0%B0)#1_.D0.B8.D1.8E.D0.BB.D1.8F_1941_.D0.B3.D0.BE.D0.B4.D0.B0._10-.D0.B9_.D0.B4.D0.B5.D0.BD.D1.8C_.D0.B2.D0.BE.D0.B9.D0.BD.D1.8B"
 },
 {
   "from": "1941-07-01",
   "till": "1941-07-26",
   "country": "",
   "province": "",
   "locality": "",
   "where": "MDA",
   "title": "Defending MDA",
   "desc": "Our S Front vs DEU and ROU",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%9F%D1%80%D0%B8%D0%B3%D1%80%D0%B0%D0%BD%D0%B8%D1%87%D0%BD%D1%8B%D0%B5_%D1%81%D1%80%D0%B0%D0%B6%D0%B5%D0%BD%D0%B8%D1%8F_%D0%B2_%D0%9C%D0%BE%D0%BB%D0%B4%D0%B0%D0%B2%D0%B8%D0%B8"
 },
 {
   "from": "1941-07-02",
   "till": "",
   "country": "",
   "province": "",
   "locality": "",
   "where": "",
   "title": "DEU strike a hole in our NW Front",
   "desc": "DEU tanks strike between our 2 armies of our NW Front. One of our armies start retreating, opening the way toward a RUS provincial center (Pskov)",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D0%B8%D1%8E%D0%BB%D1%8C_1941_%D0%B3%D0%BE%D0%B4%D0%B0)#2_.D0.B8.D1.8E.D0.BB.D1.8F_1941_.D0.B3.D0.BE.D0.B4.D0.B0._11-.D0.B9_.D0.B4.D0.B5.D0.BD.D1.8C_.D0.B2.D0.BE.D0.B9.D0.BD.D1.8B"
 },
 {
   "from": "1941-07-02",
   "till": "",
   "country": "",
   "province": "",
   "locality": "",
   "where": "BLR",
   "title": "we stand firm and push back",
   "desc": "BLR: our W Front are defending the banksides of a river (Berezina). We push back against DEU tanks but fail to drive them out of their beachhead.",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D0%B8%D1%8E%D0%BB%D1%8C_1941_%D0%B3%D0%BE%D0%B4%D0%B0)#2_.D0.B8.D1.8E.D0.BB.D1.8F_1941_.D0.B3.D0.BE.D0.B4.D0.B0._11-.D0.B9_.D0.B4.D0.B5.D0.BD.D1.8C_.D0.B2.D0.BE.D0.B9.D0.BD.D1.8B"
 },
 {
   "from": "1941-07-02",
   "till": "",
   "country": "",
   "province": "",
   "locality": "",
   "where": "",
   "title": "Our W Front reinforced",
   "desc": "Our High Command reinforces our W Front with 4 reserve armies",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D0%B8%D1%8E%D0%BB%D1%8C_1941_%D0%B3%D0%BE%D0%B4%D0%B0)#2_.D0.B8.D1.8E.D0.BB.D1.8F_1941_.D0.B3.D0.BE.D0.B4.D0.B0._11-.D0.B9_.D0.B4.D0.B5.D0.BD.D1.8C_.D0.B2.D0.BE.D0.B9.D0.BD.D1.8B"
 },
 {
   "from": "1941-07-02",
   "till": "",
   "country": "",
   "province": "",
   "locality": "",
   "where": "Ternopol Province, UKR",
   "title": "Ternopol lost.",
   "desc": "UKR: DEU cross a river (Goryn), keep advancing, take  a provincial capital (Ternopol), disect SW Front line.",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D0%B8%D1%8E%D0%BB%D1%8C_1941_%D0%B3%D0%BE%D0%B4%D0%B0)#2_.D0.B8.D1.8E.D0.BB.D1.8F_1941_.D0.B3.D0.BE.D0.B4.D0.B0._11-.D0.B9_.D0.B4.D0.B5.D0.BD.D1.8C_.D0.B2.D0.BE.D0.B9.D0.BD.D1.8B"
 },
 {
   "from": "1941-07-02",
   "till": "",
   "country": "",
   "province": "",
   "locality": "",
   "where": "MDA",
   "title": "We suffer a breach",
   "desc": "Morning: DEU & ROU break through the defense of S Front, advance 8-10 km.",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D0%B8%D1%8E%D0%BB%D1%8C_1941_%D0%B3%D0%BE%D0%B4%D0%B0)#2_.D0.B8.D1.8E.D0.BB.D1.8F_1941_.D0.B3.D0.BE.D0.B4.D0.B0._11-.D0.B9_.D0.B4.D0.B5.D0.BD.D1.8C_.D0.B2.D0.BE.D0.B9.D0.BD.D1.8B"
 },
 {
   "from": "1941-07-02",
   "till": "",
   "country": "",
   "province": "",
   "locality": "",
   "where": "Moscow, RUS",
   "title": "Volunteer army created in Moscow",
   "desc": "Moscow: citizens start forming a people's volunteer army (militia).",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D0%B8%D1%8E%D0%BB%D1%8C_1941_%D0%B3%D0%BE%D0%B4%D0%B0)#2_.D0.B8.D1.8E.D0.BB.D1.8F_1941_.D0.B3.D0.BE.D0.B4.D0.B0._11-.D0.B9_.D0.B4.D0.B5.D0.BD.D1.8C_.D0.B2.D0.BE.D0.B9.D0.BD.D1.8B"
 },
 {
   "from": "1941-07-03",
   "till": "",
   "country": "",
   "province": "",
   "locality": "",
   "where": "MDA",
   "title": "Nazis penetrate deeper",
   "desc": "MDA: DEU & ROU go 30 km deep through the hole in the S Front defense line made yesterday.",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D0%B8%D1%8E%D0%BB%D1%8C_1941_%D0%B3%D0%BE%D0%B4%D0%B0)#2_.D0.B8.D1.8E.D0.BB.D1.8F_1941_.D0.B3.D0.BE.D0.B4.D0.B0._11-.D0.B9_.D0.B4.D0.B5.D0.BD.D1.8C_.D0.B2.D0.BE.D0.B9.D0.BD.D1.8B"
 },
 {
   "from": "1941-07-03",
   "till": "",
   "country": "",
   "province": "",
   "locality": "",
   "where": "Moscow, RUS",
   "title": "Stalin speaks on radio",
   "desc": "6:30 Our Commander-in-Chief addresses us on the radio as \"Brothers and Sisters\". He says our motherland is in danger, but Germans will suffer the fate of Napoleo and Willhelm II. If not for the pact with Germany they would have attacked in 1939. This is a life and death situation. We must help not only ourselves but also free Europe from Hitler. The address had a profound mobilizing impact on us.",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%92%D1%8B%D1%81%D1%82%D1%83%D0%BF%D0%BB%D0%B5%D0%BD%D0%B8%D0%B5_%D0%A1%D1%82%D0%B0%D0%BB%D0%B8%D0%BD%D0%B0_%D0%BF%D0%BE_%D1%80%D0%B0%D0%B4%D0%B8%D0%BE_3_%D0%B8%D1%8E%D0%BB%D1%8F_1941_%D0%B3%D0%BE%D0%B4%D0%B0"
 },
 {
   "from": "1941-07-10",
   "till": "",
   "country": "",
   "province": "",
   "locality": "",
   "where": "Mogilev Province, BLR",
   "title": "> 12K BLR militia",
   "desc": "Mogilev people's volunteer corps is > 12000 men.",
   "result": "",
   "link": "http://thefireofthewar.ru/1418/index.php/1941/iyun-1941/1416-26-06-1941"
 },
 {
   "from": "1941-07-12",
   "till": "",
   "country": "",
   "province": "",
   "locality": "",
   "where": "Brest Province, BLR",
   "title": "Kamikaze Soviets",
   "desc": "A Brest Frotress defender with 2 grenades throws himself from tower on a group of bomb-technicians. 4 killed on the spot, 2 die later in the hospital.",
   "result": "",
   "link": "http://www.aif.ru/society/history/ya_umirayu_no_ne_sdayus_kogda_pogib_posledniy_zashchitnik_brestskoy_kreposti"
 },
 {
   "from": "1941-07-13",
   "till": "",
   "country": "",
   "province": "",
   "locality": "",
   "where": "Bălţi, MDA",
   "title": "Dmitry Ovcharenko's exploits",
   "desc": "In UKR, while on an errand, he runs into 50 Germans. Result: 2 officers beheaded with an axe, 21 soldiers killed by 3 grenades, the rest fled in panic.",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%9E%D0%B2%D1%87%D0%B0%D1%80%D0%B5%D0%BD%D0%BA%D0%BE,_%D0%94%D0%BC%D0%B8%D1%82%D1%80%D0%B8%D0%B9_%D0%A0%D0%BE%D0%BC%D0%B0%D0%BD%D0%BE%D0%B2%D0%B8%D1%87"
 },
 {
   "from": "1941-07-13",
   "till": "",
   "country": "",
   "province": "",
   "locality": "",
   "where": "Szczecin, POL",
   "title": "Гиммлер призвал истреблять русских как недочеловеков.",
   "desc": "Когда вы, друзья мои, сражаетесь на Востоке, вы продолжаете ту же борьбу против того же недочеловечества, против тех же низших рас, которые когда-то выступали под именем гуннов, позднее — 1000 лет назад во времена королей Генриха и Оттона I, — под именем венгров, а впоследствии под именем татар; затем они явились снова под именем Чингисхана и монголов. Сегодня они называются русскими под политическим знаменем большевизма.",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%9D%D0%B0%D1%86%D0%B8%D1%81%D1%82%D1%81%D0%BA%D0%B0%D1%8F_%D1%80%D0%B0%D1%81%D0%BE%D0%B2%D0%B0%D1%8F_%D0%BF%D0%BE%D0%BB%D0%B8%D1%82%D0%B8%D0%BA%D0%B0"
 },
 {
   "from": "1941-07-17",
   "till": "",
   "country": "",
   "province": "",
   "locality": "",
   "where": "",
   "title": "DEU creates Reichskommissariat Ostland",
   "desc": "A territory of Nazi DEU in Eastern Europe, consisting of DEU-occupied parts of SU Baltic republics and Western BLR ",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A0%D0%B5%D0%B9%D1%85%D1%81%D0%BA%D0%BE%D0%BC%D0%B8%D1%81%D1%81%D0%B0%D1%80%D0%B8%D0%B0%D1%82_%D0%9E%D1%81%D1%82%D0%BB%D0%B0%D0%BD%D0%B4"
 },
 {
   "from": "1941-07-18",
   "till": "1941-09-30",
   "country": "",
   "province": "",
   "locality": "",
   "where": "Leningrad Province, RUS",
   "title": "Нормы выдачи хлеба в Ленинграде",
   "desc": "Рабочим – 800 граммов; служащим – 600 граммов; иждивенцам и детям – 400 граммов.",
   "result": "",
   "link": "http://leningradpobeda.ru/vojjna-jazykom-tsifr/"
 },
 {
   "from": "1941-07-20",
   "till": "",
   "country": "",
   "province": "",
   "locality": "",
   "where": "Brest Province, BLR",
   "title": "Die, no surrender.",
   "desc": "Brest Fortress. \"I die but don't surrender. Farewell, Motherland.\" iconic inscription.",
   "result": "",
   "link": "http://www.aif.ru/society/history/ya_umirayu_no_ne_sdayus_kogda_pogib_posledniy_zashchitnik_brestskoy_kreposti"
 },
 {
   "from": "1941-07-21",
   "till": "",
   "country": "",
   "province": "",
   "locality": "",
   "where": "Brest Province, BLR",
   "title": "Belt vs Nazi neck",
   "desc": "Brest Frotress. A corporal goes out to get cigarettes. Gets strangled by a belt.",
   "result": "",
   "link": "http://www.aif.ru/society/history/ya_umirayu_no_ne_sdayus_kogda_pogib_posledniy_zashchitnik_brestskoy_kreposti"
 },
 {
   "from": "1941-07-23",
   "till": "",
   "country": "",
   "province": "",
   "locality": "",
   "where": "Brest Province, BLR",
   "title": "Major Gavrilov captured",
   "desc": "Major Piotr Gavrilov captured after shooting 2 Germans. He was hiding in the basements for 3 weeks making night raids with another soldier until he was killed.",
   "result": "",
   "link": "http://www.aif.ru/society/history/ya_umirayu_no_ne_sdayus_kogda_pogib_posledniy_zashchitnik_brestskoy_kreposti"
 },
 {
   "from": "1941-08-01",
   "till": "",
   "country": "",
   "province": "",
   "locality": "",
   "where": "Brest Province, BLR",
   "title": "Die-hards in Brest",
   "desc": "A half-dead defender kills 2 Germans with a knife.",
   "result": "",
   "link": ""
 },
 {
   "from": "1941-08-15",
   "till": "",
   "country": "",
   "province": "",
   "locality": "",
   "where": "Brest Province, BLR",
   "title": "Brest Fortress still standing",
   "desc": "Nazi press publish a photo of soldiers with flamethrowers trying to smoke out Brest Fortress defenders from basements. Half-blind, hungry, thirsty, bleeding,  ",
   "result": "",
   "link": ""
 },
 {
   "from": "1941-08-20",
   "till": "",
   "country": "",
   "province": "",
   "locality": "",
   "where": "Brest Province, BLR",
   "title": "Brest Fortress finally succumbs",
   "desc": "After DEU spent 3 day on a clearing operation",
   "result": "",
   "link": "http://www.aif.ru/society/history/ya_umirayu_no_ne_sdayus_kogda_pogib_posledniy_zashchitnik_brestskoy_kreposti"
 },
 {
   "from": "1941-08-26",
   "till": "",
   "country": "",
   "province": "",
   "locality": "",
   "where": "Brest Province, BLR",
   "title": "Hitler and Mussolini visit Brest Fortress",
   "desc": "The last defender is vanquished and it's now safe to host the Fascist leaders.",
   "result": "",
   "link": "http://www.aif.ru/society/history/ya_umirayu_no_ne_sdayus_kogda_pogib_posledniy_zashchitnik_brestskoy_kreposti"
 },
 {
   "from": "1941-09-01",
   "till": "",
   "country": "",
   "province": "",
   "locality": "",
   "where": "",
   "title": "DEU form Generalbezirk Weißruthenien",
   "desc": "A province in Reichskommissariat Ostland, a territory of Nazi DEU",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%93%D0%B5%D0%BD%D0%B5%D1%80%D0%B0%D0%BB%D1%8C%D0%BD%D1%8B%D0%B9_%D0%BE%D0%BA%D1%80%D1%83%D0%B3_%D0%91%D0%B5%D0%BB%D0%BE%D1%80%D1%83%D1%81%D1%81%D0%B8%D1%8F"
 },
 {
   "from": "1941-09-01",
   "till": "1941-12-31",
   "country": "",
   "province": "",
   "locality": "",
   "where": "Leningrad Province, RUS",
   "title": "250 взрывов в день",
   "desc": "Фашисты обстреливают Ленинград.",
   "result": "свыше 30 тыс снарядов в сентябре-декабре 1941",
   "link": "http://leningradpobeda.ru/vojjna-jazykom-tsifr/"
 },
 {
   "from": "1941-09-07",
   "till": "1941-10-22",
   "country": "",
   "province": "",
   "locality": "",
   "where": "",
   "title": "GBR piltos fight alongside us",
   "desc": "GBR No. 151 Wing RAF is helping us defend the Subarctic",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%9E%D0%B1%D0%BE%D1%80%D0%BE%D0%BD%D0%B0_%D0%97%D0%B0%D0%BF%D0%BE%D0%BB%D1%8F%D1%80%D1%8C%D1%8F"
 },
 {
   "from": "1941-09-08",
   "till": "1944-01-27",
   "country": "russia",
   "province": "leningrad",
   "locality": "leningrad",
   "where": "",
   "title": "Осада Ленинграда",
   "desc": "Germans, Finns, Spaniards are starving Leningraders to death",
   "result": "872 дня. Погибших: 332 059 солдат (24 324 небоевых), , 111 142 пропавших без вести, горожане: 16 747 убито при артобстрелах и бомбардировках, 632 253 погибли от голода",
   "link": "https://ru.wikipedia.org/wiki/%D0%91%D0%BB%D0%BE%D0%BA%D0%B0%D0%B4%D0%B0_%D0%9B%D0%B5%D0%BD%D0%B8%D0%BD%D0%B3%D1%80%D0%B0%D0%B4%D0%B0"
 },
 {
   "from": "1941-09-12",
   "till": "",
   "country": "",
   "province": "",
   "locality": "",
   "where": "Leningrad Province, RUS",
   "title": "Еда в Ленинграде",
   "desc": "Хлебное зерно и мука на 35 суток. Крупа и макароны на 30 суток. Мясо и мясопродукты на 33 суток. Жиры на 45 суток. Сахар и кондитерские изделия на 60 суток.",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%91%D0%BB%D0%BE%D0%BA%D0%B0%D0%B4%D0%B0_%D0%9B%D0%B5%D0%BD%D0%B8%D0%BD%D0%B3%D1%80%D0%B0%D0%B4%D0%B0#cite_note-.D0.94.D0.B0.D1.88.D0.B8.D1.87.D0.B5.D0.B2.2C.D0.A22.E2.80.941973.E2.80.94.E2.80.9447-8"
 },
 {
   "from": "1941-09-27",
   "till": "",
   "country": "",
   "province": "",
   "locality": "",
   "where": "Kiev Province, UKR",
   "title": "Первый расстрел Бабьего Яра",
   "desc": "Фашисты расстреляли 752 пациента психиатрической больницы им. Ивана Павлова, которая находилась в непосредственной близости к оврагу Бабий Яр",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%91%D0%B0%D0%B1%D0%B8%D0%B9_%D0%AF%D1%80"
 },
 {
   "from": "1941-09-29",
   "till": "1941-09-30",
   "country": "",
   "province": "",
   "locality": "",
   "where": "Kiev Province, UKR",
   "title": "Расстрелы убитых в Бабьем Яру",
   "desc": "Зондеркоманда «4а» под командованием штандартенфюрера Пауля Блобеля (входившая в состав айнзатцгруппы «С» под командованием бригаденфюрера СС и генерал-майора полиции Отто Раша) при участии двух команд полицейского полка «Юг» и украинской вспомогательной полиции расстреливают людей в овраге Бабий Яр",
   "result": "Было убито 33 771 человека (это количество не включает малолетних детей до 3-х лет, которых тоже убивали в эти два дня. На этом расстрелы не прекратились.",
   "link": "https://ru.wikipedia.org/wiki/%D0%91%D0%B0%D0%B1%D0%B8%D0%B9_%D0%AF%D1%80"
 },
 {
   "from": "1941-10-01",
   "till": "1941-11-13",
   "country": "",
   "province": "",
   "locality": "",
   "where": "Leningrad Province, RUS",
   "title": "Нормы выдачи хлеба в Ленинграде",
   "desc": "рабочим – 400 граммов; служащим – 200 граммов; иждивенцам и детям – 200 граммов.",
   "result": "",
   "link": "http://leningradpobeda.ru/vojjna-jazykom-tsifr/"
 },
 {
   "from": "1941-10-02",
   "till": "",
   "country": "",
   "province": "",
   "locality": "",
   "where": "Bryansk Province, RUS",
   "title": "Русский должен умереть",
   "desc": "Военнослужащие вермахта сделали коллективную фотографию в Брянской области. На школьной доске написано мелом: «Русский должен умереть, чтобы мы жили» (нем. Der Russe muβ sterben, damit wir leben).",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A4%D0%B0%D0%B9%D0%BB:Russe_muss_sterben.JPG"
 },
 {
   "from": "1941-10-30",
   "till": "1942-07-09",
   "country": "",
   "province": "",
   "locality": "",
   "where": "Sevastopol, RUS",
   "title": "Оборона Севастополя",
   "desc": "Войска Крыма",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%9E%D0%B1%D0%BE%D1%80%D0%BE%D0%BD%D0%B0_%D0%A1%D0%B5%D0%B2%D0%B0%D1%81%D1%82%D0%BE%D0%BF%D0%BE%D0%BB%D1%8F_(1941%E2%80%941942)"
 },
 {
   "from": "1941-11-20",
   "till": "1941-12-25",
   "country": "",
   "province": "",
   "locality": "",
   "where": "Leningrad Province, RUS",
   "title": "Нормы выдачи хлеба в Ленинграде",
   "desc": "рабочим – 250 граммов, служащим и членам их семей – 125 граммов; личному составу военизированной охраны, пожарных команд, истребительных отрядов, ремесленных училищ и школ ФЗО, находившемуся на котловом довольствии – 300 грамм.",
   "result": "Такие нормы привели к резкому скачку смертности от голода – за декабрь 1941 года умерло около 50 тысяч человек.",
   "link": "http://leningradpobeda.ru/vojjna-jazykom-tsifr/"
 },
 {
   "from": "1941-11-20",
   "till": "",
   "country": "",
   "province": "",
   "locality": "",
   "where": "Leningrad Province, RUS",
   "title": "В Ленинграде начинается голод",
   "desc": "В пятый раз населению и в третий раз войскам — пришлось сократить нормы выдачи хлеба. Воины на передовой стали получать 500 граммов в сутки; рабочие — 250 граммов; служащие, иждивенцы и воины, не находящиеся на передовой, — 125 граммов. И кроме хлеба, почти ничего. В блокированном Ленинграде начался голод.",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%91%D0%BB%D0%BE%D0%BA%D0%B0%D0%B4%D0%B0_%D0%9B%D0%B5%D0%BD%D0%B8%D0%BD%D0%B3%D1%80%D0%B0%D0%B4%D0%B0#cite_note-.D0.94.D0.B0.D1.88.D0.B8.D1.87.D0.B5.D0.B2.2C.D0.A22.E2.80.941973.E2.80.94.E2.80.9447-8"
 },
 {
   "from": "1941-12-01",
   "till": "1941-12-31",
   "country": "",
   "province": "",
   "locality": "",
   "where": "Leningrad Province, RUS",
   "title": "12-15 ниже нуля",
   "desc": "средняя температура в Ленинграде",
   "result": "",
   "link": "http://leningradpobeda.ru/vojjna-jazykom-tsifr/"
 },
 {
   "from": "1941-12-26",
   "till": "",
   "country": "",
   "province": "",
   "locality": "",
   "where": "Leningrad Province, RUS",
   "title": "Нормы выдачи хлеба в Ленинграде",
   "desc": "повышены до 350 граммов рабочим и до 200 граммов остальным жителям города (при этом до 60% хлеба составляли практически несъедобные примеси, добавлявшиеся вместо муки). Все остальные продукты почти перестали выдаваться.",
   "result": "",
   "link": "http://leningradpobeda.ru/vojjna-jazykom-tsifr/"
 },
 {
   "from": "1941-12-26",
   "till": "1942-05-20",
   "country": "",
   "province": "",
   "locality": "",
   "where": "Crimea, RUS",
   "title": "Керченско-Феодосийская десантная операция",
   "desc": "Крымский фронт",
   "result": "",
   "link": ""
 },
 {
   "from": "1941-12-28",
   "till": "",
   "country": "",
   "province": "",
   "locality": "",
   "where": "Leningrad Province, RUS",
   "title": "Смерть Жени Савичевой",
   "desc": "32-летняя сестра Тани Савичевой. Здоровье было подорвано из-за частой донорской сдачи крови, и из-за того, что ей приходилось идти от дома до завода пешком почти семь километров. Иногда она оставалась ночевать на заводе, чтобы сохранить силы для работы ещё на две смены. В этот Евгения не пришла на завод и обеспокоенная её отсутствием, утром в воскресенье, 28 декабря, Нина отпросилась с ночной смены и поспешила к сестре на Моховую улицу, где 32-летняя Евгения умерла у неё на руках",
   "result": "",
   "link": ""
 },
 {
   "from": "1942-01-01",
   "till": "1942-01-31",
   "country": "",
   "province": "",
   "locality": "",
   "where": "Leningrad Province, RUS",
   "title": "19 ниже нуля",
   "desc": "средняя температура в Ленинграде",
   "result": "8 дней температура была -30 и ниже.",
   "link": "http://leningradpobeda.ru/vojjna-jazykom-tsifr/"
 },
 {
   "from": "1942-01-01",
   "till": "1942-02-28",
   "country": "",
   "province": "",
   "locality": "",
   "where": "Leningrad Province, RUS",
   "title": "4330 в день",
   "desc": "... ленинградцев в среднем умирают в день. Примерно 145 человек в час.",
   "result": "260 тыс. человек не дожили до весны.",
   "link": "http://leningradpobeda.ru/vojjna-jazykom-tsifr/"
 },
 {
   "from": "1942-01-07",
   "till": "1942-05-20",
   "country": "",
   "province": "",
   "locality": "",
   "where": "Novgorod Province, RUS",
   "title": "Демянская операция",
   "desc": "Северо-Западный фронт",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%94%D0%B5%D0%BC%D1%8F%D0%BD%D1%81%D0%BA%D0%B0%D1%8F_%D0%BE%D0%BF%D0%B5%D1%80%D0%B0%D1%86%D0%B8%D1%8F_(1942)"
 },
 {
   "from": "1942-01-25",
   "till": "",
   "country": "",
   "province": "",
   "locality": "",
   "where": "Leningrad Province, RUS",
   "title": "Смерть Евдокии Арсеньевой",
   "desc": "бабушка Тани Савичевой в Ленинграде, 3 часа дня.",
   "result": "третья степень алиментарной дистрофии",
   "link": ""
 },
 {
   "from": "1942-02-19",
   "till": "1942-05-18",
   "country": "",
   "province": "",
   "locality": "",
   "where": "Novgorod Province, RUS",
   "title": "Немцы в демянском котле",
   "desc": "основные силы 2-го армейского корпуса 16-й немецкой армии группы армий «Север»",
   "result": "",
   "link": ""
 },
 {
   "from": "1942-03-01",
   "till": "1942-03-31",
   "country": "",
   "province": "",
   "locality": "",
   "where": "Leningrad Province, RUS",
   "title": "3330 в день",
   "desc": "... ленинградцев в среднем умирают в день. Примерно 135 человек в час.",
   "result": "100 тыс. человек умерло в первый месяц весны.",
   "link": "http://leningradpobeda.ru/vojjna-jazykom-tsifr/"
 },
 {
   "from": "1942-03-17",
   "till": "",
   "country": "",
   "province": "",
   "locality": "",
   "where": "Leningrad Province, RUS",
   "title": "Смерть Леонида Савичева",
   "desc": "Лёка, 24-летний брат Тани Савичевой, в Ленинграде.",
   "result": "алиментарная дистрофия",
   "link": ""
 },
 {
   "from": "1942-04-13",
   "till": "",
   "country": "",
   "province": "",
   "locality": "",
   "where": "Leningrad Province, RUS",
   "title": "Смерть Василия Савичева",
   "desc": "56-летний дядя Тани Савичевой, в Ленинграде",
   "result": "2 часа ночи, ",
   "link": ""
 },
 {
   "from": "1942-04-24",
   "till": "1942-05-11",
   "country": "",
   "province": "",
   "locality": "",
   "where": "",
   "title": "Kestenga/Kiestinki operation",
   "desc": "Karelian front - Kestenga (Kiestink i) operation",
   "result": "",
   "link": ""
 },
 {
   "from": "1942-04-28",
   "till": "1942-05-13",
   "country": "",
   "province": "",
   "locality": "",
   "where": "",
   "title": "Murmansk Operation",
   "desc": "by Karelian front",
   "result": "",
   "link": ""
 },
 {
   "from": "1942-05-01",
   "till": "1942-05-31",
   "country": "",
   "province": "",
   "locality": "",
   "where": "Leningrad Province, RUS",
   "title": "1660 в день",
   "desc": "... ленинградцев в среднем умирают в день. Примерно 70 человек в час.",
   "result": "50 тыс человек умерли в мае.",
   "link": "http://leningradpobeda.ru/vojjna-jazykom-tsifr/"
 },
 {
   "from": "1942-05-10",
   "till": "",
   "country": "",
   "province": "",
   "locality": "",
   "where": "Leningrad Province, RUS",
   "title": "Умер Алексей Савичев",
   "desc": "71-летний дядя Тани Савичевой, в Ленинграде, 4 часа дня",
   "result": "третья степень алиментарной дистрофии",
   "link": ""
 },
 {
   "from": "1942-05-12",
   "till": "1942-05-29",
   "country": "",
   "province": "",
   "locality": "",
   "where": "",
   "title": "Вторая харьковская битва",
   "desc": "Брянский фронт, Юго-Западный фронт и Южный фронт.",
   "result": "Наступление советских войск началось как попытка стратегического наступления, но завершилось окружением и практически полным уничтожением наступающих сил Красной армии («операция Fredericus»). Из-за катастрофы под Харьковом стало возможным стремительное продвижение немцев на южном участке фронта на Воронеж и Ростов-на-Дону с последующим выходом к Волге и продвижением на Кавказ.",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D0%B0%D1%80%D1%8C%D0%BA%D0%BE%D0%B2%D1%81%D0%BA%D0%B0%D1%8F_%D0%BE%D0%BF%D0%B5%D1%80%D0%B0%D1%86%D0%B8%D1%8F_(1942)"
 },
 {
   "from": "1942-05-13",
   "till": "",
   "country": "",
   "province": "",
   "locality": "",
   "where": "Leningrad Province, RUS",
   "title": "Умерла Мария Савичева",
   "desc": "53-летняя мать Тани Савичевой, Ленинград, 7.30 утра",
   "result": "\"Савичевы умерли. Умерли все. Осталась одна Таня.\"",
   "link": ""
 },
 {
   "from": "1942-05-15",
   "till": "",
   "country": "",
   "province": "",
   "locality": "",
   "where": "",
   "title": "Закавказский фронт вновь сформирован",
   "desc": "",
   "result": "",
   "link": ""
 },
 {
   "from": "1942-05-20",
   "till": "",
   "country": "",
   "province": "",
   "locality": "",
   "where": "",
   "title": "Северо-Кавказский фронт образован",
   "desc": "",
   "result": "",
   "link": ""
 },
 {
   "from": "1942-05-23",
   "till": "",
   "country": "",
   "province": "",
   "locality": "",
   "where": "",
   "title": "Наши попадают в окружение",
   "desc": "значительная часть войск ударной группировки Красной Армии оказыается в окружении в треугольнике Мерефа-Лозовая-Балаклея.",
   "result": "",
   "link": ""
 },
 {
   "from": "1942-05-25",
   "till": "1942-05-31",
   "country": "",
   "province": "",
   "locality": "",
   "where": "Kharkov Province, UKR",
   "title": "барвенковская западня",
   "desc": "",
   "result": "вырываются не более десятой части окружённых. Советские потери составили 270 тыс. человек, из них 171 тыс. — безвозвратно. В окружении погибли или пропали без вести: заместитель командующего Юго-Западным фронтом, командующий 6-й армией, командующий 57-й армией, командующий армейской группой и ряд генералов, командовавших попавшими в окружение дивизиями.",
   "link": ""
 },
 {
   "from": "1942-05-26",
   "till": "",
   "country": "",
   "province": "",
   "locality": "",
   "where": "Kharkov Province, UKR",
   "title": "барвенковская западня",
   "desc": "наши окруженные части оказываются заперты на небольшом пространстве площадью примерно 15 кв. км. в районе Барвенково",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D0%B0%D1%80%D1%8C%D0%BA%D0%BE%D0%B2%D1%81%D0%BA%D0%B0%D1%8F_%D0%BE%D0%BF%D0%B5%D1%80%D0%B0%D1%86%D0%B8%D1%8F_(1942)"
 },
 {
   "from": "1942-05-28",
   "till": "",
   "country": "",
   "province": "",
   "locality": "",
   "where": "",
   "title": "СТОП наступление",
   "desc": "маршал С. К. Тимошенко приказал прекратить наступательную операцию",
   "result": "",
   "link": ""
 },
 {
   "from": "1942-06-11",
   "till": "",
   "country": "",
   "province": "",
   "locality": "",
   "where": "",
   "title": "Наши наносят контрудар",
   "desc": "Утро. Войска Севастопольского оборонительного района нанесли контрудар по вклинившимся вражеским частям. Контрудар осуществляли войска третьего и четвёртого секторов. Их поддерживали все артиллерийские средства секторов, а также батареи береговой артиллерии и кораблей. Положение было восстановлено: наши части заняли полустанок Мекензиевы горы и продвинулись на 250—300 метров северо-восточнее его.",
   "result": "",
   "link": ""
 },
 {
   "from": "1942-06-11",
   "till": "",
   "country": "",
   "province": "",
   "locality": "",
   "where": "",
   "title": "Американцы обязались создать второй фронт",
   "desc": "В Вашингтоне подписано соглашение между СССР и США «О принципах, применимых к взаимной помощи в ведении войны против агрессии».",
   "result": "",
   "link": ""
 },
 {
   "from": "1942-06-12",
   "till": "",
   "country": "",
   "province": "",
   "locality": "",
   "where": "",
   "title": "Наши обороняются и нападают",
   "desc": "На Харьковском направлении наши войска ведут оборонительные бои с наступающими танками и пехотой противника и сами наносят контрудары по немецко-фашистским войскам. На Севастопольском участке фронта продолжаются ожесточённые бои… На других участках фронта существенных изменений нет.",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D0%B8%D1%8E%D0%BD%D1%8C_1942_%D0%B3%D0%BE%D0%B4%D0%B0)"
 },
 {
   "from": "1942-06-12",
   "till": "",
   "country": "",
   "province": "",
   "locality": "",
   "where": "",
   "title": "Опубликование англо-советско-американских коммюнике",
   "desc": "«достигнута полная договорённость в отношении неотложных задач создания второго фронта в Европе в 1942 г.».",
   "result": "",
   "link": ""
 },
 {
   "from": "1942-06-13",
   "till": "",
   "country": "",
   "province": "",
   "locality": "",
   "where": "Voronezh Province, RUS",
   "title": "Бомбардировка городского парка",
   "desc": "Воронежский Парк Пионеров. Массовое гуляние детей. Погибли от 100 до 300 погибших.",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D0%B8%D1%8E%D0%BD%D1%8C_1942_%D0%B3%D0%BE%D0%B4%D0%B0)"
 },
 {
   "from": "1942-06-13",
   "till": "",
   "country": "",
   "province": "",
   "locality": "",
   "where": "Sverdlovsk Province, RUS",
   "title": "Окружение у Волчанска",
   "desc": "20 тыс наших попали в плен (Свердловск. обл.).",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D0%B8%D1%8E%D0%BD%D1%8C_1942_%D0%B3%D0%BE%D0%B4%D0%B0)"
 },
 {
   "from": "1942-06-13",
   "till": "",
   "country": "",
   "province": "",
   "locality": "",
   "where": "Crimea, RUS",
   "title": "падение форта \"Сталин\"",
   "desc": "Крым: Фашисты овладели фортом\"Сталин\"",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D0%B8%D1%8E%D0%BD%D1%8C_1942_%D0%B3%D0%BE%D0%B4%D0%B0)"
 },
 {
   "from": "1942-06-14",
   "till": "",
   "country": "",
   "province": "",
   "locality": "",
   "where": "Sverdlovsk Province, RUS",
   "title": "Немцы остановлены",
   "desc": "Маршал Семен Тимошенко остановил гитлеровцев в 35 км от Волчанска (Свердловск. обл.).",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D0%B8%D1%8E%D0%BD%D1%8C_1942_%D0%B3%D0%BE%D0%B4%D0%B0)"
 },
 {
   "from": "1942-06-15",
   "till": "",
   "country": "",
   "province": "",
   "locality": "",
   "where": "Moscow Province, RUS",
   "title": "Наши у Варшавского шоссе",
   "desc": "Наши десантники и кавалеристы прошли через болота и сосредоточились у Варшавского шоссе (Москва).",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D0%B8%D1%8E%D0%BD%D1%8C_1942_%D0%B3%D0%BE%D0%B4%D0%B0)"
 },
 {
   "from": "1942-06-15",
   "till": "",
   "country": "",
   "province": "",
   "locality": "",
   "where": "",
   "title": "Отбивают пехоту и танки",
   "desc": "На Харьковском направлении. Уничтожено танков: 180.",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D0%B8%D1%8E%D0%BD%D1%8C_1942_%D0%B3%D0%BE%D0%B4%D0%B0)"
 },
 {
   "from": "1942-06-16",
   "till": "",
   "country": "",
   "province": "",
   "locality": "",
   "where": "Moscow Province, RUS",
   "title": "Наши прорываются через шоссе",
   "desc": "Ночью наши прорвались через Варшавское шоссе: дивизия Баранова и половина десантного корпуса.",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D0%B8%D1%8E%D0%BD%D1%8C_1942_%D0%B3%D0%BE%D0%B4%D0%B0)"
 },
 {
   "from": "1942-06-17",
   "till": "",
   "country": "",
   "province": "",
   "locality": "",
   "where": "Kirov Province, RUS",
   "title": "Наши отбиваются",
   "desc": "Группа армий Юг готовится к операции Фридерикус-II. Генерал Белов воюет западнее Кирова.",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D0%B8%D1%8E%D0%BD%D1%8C_1942_%D0%B3%D0%BE%D0%B4%D0%B0)"
 },
 {
   "from": "1942-06-17",
   "till": "",
   "country": "",
   "province": "",
   "locality": "",
   "where": "Crimea, RUS",
   "title": "Немцы подходят к Сапун-Горе",
   "desc": "Гитлеровцы \"ошеломили\" наших и дошли до \"Орлиной высоты\" перед Сапун-Горой.",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D0%B8%D1%8E%D0%BD%D1%8C_1942_%D0%B3%D0%BE%D0%B4%D0%B0)"
 },
 {
   "from": "1942-06-17",
   "till": "",
   "country": "",
   "province": "",
   "locality": "",
   "where": "Crimea, RUS",
   "title": "Максим Горький I пал",
   "desc": "Это - бронебатарея в несколько этажей под землей. Немцы подбили 2 наших орудия и убили командира-комиссара. Гарнизон сдался.",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D0%B8%D1%8E%D0%BD%D1%8C_1942_%D0%B3%D0%BE%D0%B4%D0%B0)"
 },
 {
   "from": "1942-06-17",
   "till": "",
   "country": "",
   "province": "",
   "locality": "",
   "where": "",
   "title": "Наши держатся до последнего человека",
   "desc": "Немцы ожесточенно дерутся за каждый метр и вклиниваются на севере.",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D0%B8%D1%8E%D0%BD%D1%8C_1942_%D0%B3%D0%BE%D0%B4%D0%B0)"
 },
 {
   "from": "1942-06-17",
   "till": "",
   "country": "",
   "province": "",
   "locality": "",
   "where": "Leningrad Province, RUS",
   "title": "Смена каждый день!",
   "desc": "Ленинградская газета «Смена» начала выходить не три раза в неделю, а каждый день.Ее роль в воспитании молодежисслишком важна. Ее тираж увеличен с 10 до 15 тысяч экземпляров.",
   "result": "",
   "link": ""
 },
 {
   "from": "1942-06-17",
   "till": "",
   "country": "",
   "province": "",
   "locality": "",
   "where": "Leningrad Province, RUS",
   "title": "Стреляют по ленинграду",
   "desc": "За 45 минут враг выпустил по городу 39 снарядов.",
   "result": "",
   "link": "http://thefireofthewar.ru/1418/index.php/1942/iyun-1942/1062-17-06-1942"
 },
 {
   "from": "1942-06-18",
   "till": "",
   "country": "",
   "province": "",
   "locality": "",
   "where": "Leningrad Province, RUS",
   "title": "5 athletes honored",
   "desc": "in Leningrad. Honored also as the city defenders. 3 of them saw 9000 people through universal military training. A professor of the Institute of Physical culture is a partisan detachment leader.",
   "result": "",
   "link": "http://thefireofthewar.ru/1418/index.php/1942/iyun-1942/1063-18-06-1942"
 },
 {
   "from": "1942-06-18",
   "till": "",
   "country": "",
   "province": "",
   "locality": "",
   "where": "Leningrad Province, RUS",
   "title": "Leningrad Shelled",
   "desc": "First time in the morning. Second at at 13:00. 132 shells fell in the city. 2 hit the Labor Palace. 1 hit a building on Nevsky Ave. Also hit the Hermitage and the Russian Museum.",
   "result": "",
   "link": "http://thefireofthewar.ru/1418/index.php/1942/iyun-1942/1063-18-06-1942"
 },
 {
   "from": "1942-06-18",
   "till": "",
   "country": "",
   "province": "",
   "locality": "",
   "where": "Leningrad Province, RUS",
   "title": "Art Exhibition",
   "desc": "Leningrad. Midday. Opened. At the House of Artists at Herzen Street. More than 300 works by Leningrad's artists during the Siege.",
   "result": "",
   "link": "http://thefireofthewar.ru/1418/index.php/1942/iyun-1942/1063-18-06-1942"
 },
 {
   "from": "1942-06-18",
   "till": "",
   "country": "",
   "province": "",
   "locality": "",
   "where": "",
   "title": "Icebreakers to the Kara Sea",
   "desc": "Started to convoy a large group of icebreakers from Arkhangelsk to provide navigation along the Northern Sea Route.",
   "result": "",
   "link": "http://thefireofthewar.ru/1418/index.php/1942/iyun-1942/1063-18-06-1942"
 },
 {
   "from": "1942-06-18",
   "till": "",
   "country": "",
   "province": "",
   "locality": "",
   "where": "",
   "title": "Belostok's Last trip",
   "desc": "Транспорт «Белосток» возвратился в Новороссийск из последнего рейса в осажденный Севастополь, после чего рейсы транспортов были прекращены.",
   "result": "",
   "link": "http://thefireofthewar.ru/1418/index.php/1942/iyun-1942/1063-18-06-1942"
 },
 {
   "from": "1942-06-18",
   "till": "",
   "country": "",
   "province": "",
   "locality": "",
   "where": "",
   "title": "British with USSR!",
   "desc": "СССР и англичане договорились, что будут вместе воевать с Гитлером и помогать друг другу после войны.",
   "result": "",
   "link": "http://thefireofthewar.ru/1418/index.php/1942/iyun-1942/1063-18-06-1942"
 },
 {
   "from": "1942-06-18",
   "till": "",
   "country": "",
   "province": "",
   "locality": "",
   "where": "",
   "title": "Немцы идут по Крыму.",
   "desc": "Крым. Наши теряют Орлиную высоту, бухту Северная, ж.д. туннель, Гайтанские высоты, Федюхины высоты.",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D0%B8%D1%8E%D0%BD%D1%8C_1942_%D0%B3%D0%BE%D0%B4%D0%B0)"
 },
 {
   "from": "1942-06-18",
   "till": "",
   "country": "",
   "province": "",
   "locality": "",
   "where": "",
   "title": "Leningrad partisans",
   "desc": "First conference. 56 attendees. For May of 1942 - more than 100 fights with the enemy, destroyed more than 2 thousand Nazi soldiers and officers.",
   "result": "",
   "link": "http://thefireofthewar.ru/1418/index.php/1942/iyun-1942/1063-18-06-1942"
 },
 {
   "from": "1942-06-19",
   "till": "",
   "country": "",
   "province": "",
   "locality": "",
   "where": "",
   "title": "Summer holidays helping farmers",
   "desc": "Decision: Leningrad public school students (G6-9) will form teams lead by their teachers and go to help farmers.",
   "result": "",
   "link": "http://thefireofthewar.ru/1418/index.php/1942/iyun-1942/1064-19-06-1942"
 },
 {
   "from": "1942-06-19",
   "till": "",
   "country": "",
   "province": "",
   "locality": "",
   "where": "",
   "title": "Partisans start raid",
   "desc": "Latvian partisans with Leningrad partisans started on a raid to the west. Founded the Partisan Land.",
   "result": "",
   "link": "http://thefireofthewar.ru/1418/index.php/1942/iyun-1942/1064-19-06-1942"
 },
 {
   "from": "1942-06-19",
   "till": "",
   "country": "",
   "province": "",
   "locality": "",
   "where": "",
   "title": "Yanks and Brits to fight Hitler",
   "desc": "Washington. Decide to send airborne troops to North Africa. Won't open the 2nd Front this year.",
   "result": "",
   "link": "http://thefireofthewar.ru/1418/index.php/1942/iyun-1942/1064-19-06-1942"
 },
 {
   "from": "1942-06-19",
   "till": "",
   "country": "",
   "province": "",
   "locality": "",
   "where": "",
   "title": "We bomb Koenigsberg",
   "desc": "Our long-range aircraft make a first bomb strike at Koenigsberg.",
   "result": "",
   "link": "http://thefireofthewar.ru/1418/index.php/1942/iyun-1942/1064-19-06-1942"
 },
 {
   "from": "1942-06-19",
   "till": "",
   "country": "",
   "province": "",
   "locality": "",
   "where": "",
   "title": "2nd army breaks free",
   "desc": "Our second attack army is helped by the 59th army breaks out of the entrapment and start moving out through a narrow passage.",
   "result": "",
   "link": "http://thefireofthewar.ru/1418/index.php/1942/iyun-1942/1064-19-06-1942"
 },
 {
   "from": "1942-06-20",
   "till": "",
   "country": "",
   "province": "",
   "locality": "",
   "where": "",
   "title": "Fierce fighting at Sevastopol",
   "desc": "Germans are having local successes near Sevastopol.",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D0%B8%D1%8E%D0%BD%D1%8C_1942_%D0%B3%D0%BE%D0%B4%D0%B0)"
 },
 {
   "from": "1942-06-28",
   "till": "1942-07-24",
   "country": "",
   "province": "",
   "locality": "",
   "where": "",
   "title": "Воронежско-Ворошиловградская операция",
   "desc": "Брянский фронт, Юго-Западный фронт и Южный фронт",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%92%D0%BE%D1%80%D0%BE%D0%BD%D0%B5%D0%B6%D1%81%D0%BA%D0%BE-%D0%92%D0%BE%D1%80%D0%BE%D1%88%D0%B8%D0%BB%D0%BE%D0%B2%D0%B3%D1%80%D0%B0%D0%B4%D1%81%D0%BA%D0%B0%D1%8F_%D0%BE%D0%BF%D0%B5%D1%80%D0%B0%D1%86%D0%B8%D1%8F_(1942)"
 },
 {
   "from": "1942-06-28",
   "till": "",
   "country": "",
   "province": "",
   "locality": "",
   "where": "",
   "title": "фронт между Курском и Харьковом прорван",
   "desc": "4-я танковая армия под командованием Германа Гота прорывает и устремляется к Дону",
   "result": "",
   "link": ""
 },
 {
   "from": "1942-07-01",
   "till": "1942-07-31",
   "country": "",
   "province": "",
   "locality": "",
   "where": "",
   "title": "800 в день",
   "desc": "... ленинградцев в среднем умирают в день. Примерно 30 человек в час.",
   "result": "25 тыс человек умерли в июле.",
   "link": "http://leningradpobeda.ru/vojjna-jazykom-tsifr/"
 },
 {
   "from": "1942-07-23",
   "till": "",
   "country": "",
   "province": "",
   "locality": "",
   "where": "",
   "title": "пал Ростов-на-Дону",
   "desc": "2 харьковская битва. путь на Кавказ был открыт.",
   "result": "",
   "link": ""
 },
 {
   "from": "1942-07-28",
   "till": "",
   "country": "",
   "province": "",
   "locality": "",
   "where": "",
   "title": "«Ни шагу назад!»",
   "desc": "издается знаменитый приказ № 227",
   "result": "",
   "link": ""
 },
 {
   "from": "1942-08-09",
   "till": "",
   "country": "",
   "province": "",
   "locality": "",
   "where": "",
   "title": "В Ленинграде играет Шостакович",
   "desc": "90 минут по радио звучала «Седьмая Ленинградская симфония» Дмитрия Шостаковича. Это были минуты полного затишья: не стреляла ни одна вражеская батарея, не прорвался к городу ни один немецкий самолет.",
   "result": "",
   "link": ""
 },
 {
   "from": "1942-09-01",
   "till": "1942-09-30",
   "country": "",
   "province": "",
   "locality": "",
   "where": "",
   "title": "230 в день",
   "desc": "... ленинградцев в среднем умирают в день. Примерно 10 человек в час.",
   "result": "7 тыс человек умерли в сентябре.",
   "link": "http://leningradpobeda.ru/vojjna-jazykom-tsifr/"
 },
 {
   "from": "1942-09-02",
   "till": "1942-11-30",
   "country": "",
   "province": "",
   "locality": "",
   "where": "",
   "title": "Бомбардировка Ленинграда",
   "desc": "Авианалеты и артобстрелы Ленинграда фашистами",
   "result": "врагом было сделано 272 обстрела общей продолжительностью 430 часов. В этот же период немецкая авиация совершила около 100 налетов.",
   "link": "http://leningradpobeda.ru/vojjna-jazykom-tsifr/"
 },
 {
   "from": "1943-01-18",
   "till": "",
   "country": "",
   "province": "",
   "locality": "",
   "where": "",
   "title": "блокадное кольцо Ленинграда прорвано",
   "desc": "",
   "result": "",
   "link": ""
 },
 {
   "from": "1943-02-09",
   "till": "1943-05-24",
   "country": "",
   "province": "",
   "locality": "",
   "where": "",
   "title": "Краснодарская операция.",
   "desc": "Северо-Кавказский фронт",
   "result": "",
   "link": ""
 },
 {
   "from": "1943-02-27",
   "till": "",
   "country": "",
   "province": "",
   "locality": "",
   "where": "",
   "title": "Alexander Matrosov dies a hero",
   "desc": "Alexander Matrosov dies blocking a German machine-gun in a concrete pillbox with his body.",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%9C%D0%B0%D1%82%D1%80%D0%BE%D1%81%D0%BE%D0%B2,_%D0%90%D0%BB%D0%B5%D0%BA%D1%81%D0%B0%D0%BD%D0%B4%D1%80_%D0%9C%D0%B0%D1%82%D0%B2%D0%B5%D0%B5%D0%B2%D0%B8%D1%87"
 },
 {
   "from": "1943-03-22",
   "till": "",
   "country": "",
   "province": "",
   "locality": "",
   "where": "",
   "title": "Хатынь",
   "desc": "Карательный отряд в качестве мести за убийство нескольких немецких военнослужащих, в соответствии с принципом коллективного наказания, за возможное оказание жителями деревни помощи партизанам сжёг заживо или расстрелял 149 жителей Хатыни. ",
   "result": "В карательной операции участвовали «118-й шуцманшафт батальон» (118 Batalion Schutzmannschaft / SchutzmannschaftsBtl 118/Ukrainian Schuma) и особый батальон СС «Дирлевангер»",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D0%B0%D1%82%D1%8B%D0%BD%D1%8C"
 },
 {
   "from": "1943-04-17",
   "till": "1943-06-07",
   "country": "",
   "province": "",
   "locality": "",
   "where": "",
   "title": "Воздушные сражения на Кубани",
   "desc": "Северо-Кавказский фронт",
   "result": "Around 35,000 flying missions. Enemy lost 1,100 warplanes. 52 of our pilots were awarded the title of Hero of the Soviet Union.",
   "link": "https://ru.wikipedia.org/wiki/%D0%92%D0%BE%D0%B7%D0%B4%D1%83%D1%88%D0%BD%D1%8B%D0%B5_%D1%81%D1%80%D0%B0%D0%B6%D0%B5%D0%BD%D0%B8%D1%8F_%D0%BD%D0%B0_%D0%9A%D1%83%D0%B1%D0%B0%D0%BD%D0%B8_(1943)"
 },
 {
   "from": "1943-06-11",
   "till": "",
   "country": "",
   "province": "",
   "locality": "",
   "where": "",
   "title": "Письмо Черчиллю и Америке",
   "desc": "Сталин подчеркивает, что отсрочка открытия второго фронта (до 1944 года) создаёт исключительные трудности для Советского Союза, сражающегося «почти в единоборстве с ещё очень сильным и опасным врагом».",
   "result": "",
   "link": ""
 },
 {
   "from": "1943-06-13",
   "till": "",
   "country": "",
   "province": "",
   "locality": "",
   "where": "",
   "title": "Наступление на Карельском перешейке",
   "desc": "Наша авиация бьет финнов между Финским заливом и Куутерселькя. 23-я армия захватывают опорный пункт финнов на Мустоловских высотах.",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D0%B8%D1%8E%D0%BD%D1%8C_1944_%D0%B3%D0%BE%D0%B4%D0%B0)"
 },
 {
   "from": "1943-06-15",
   "till": "",
   "country": "",
   "province": "",
   "locality": "",
   "where": "",
   "title": "население готовит оборону",
   "desc": "В результате в полосе наиболее вероятного наступления противника общая глубина инженерного оборудования местности достигала 300 километров.",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D0%B8%D1%8E%D0%BD%D1%8C_1943_%D0%B3%D0%BE%D0%B4%D0%B0)"
 },
 {
   "from": "1943-06-16",
   "till": "",
   "country": "",
   "province": "",
   "locality": "",
   "where": "",
   "title": "Defective panthers.",
   "desc": "Germans find defects in their Panther tanks. Hitler receives a recommendation not to use them in Russia.",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D0%B8%D1%8E%D0%BD%D1%8C_1943_%D0%B3%D0%BE%D0%B4%D0%B0)"
 },
 {
   "from": "1943-06-16",
   "till": "",
   "country": "",
   "province": "",
   "locality": "",
   "where": "",
   "title": "",
   "desc": "",
   "result": "",
   "link": ""
 },
 {
   "from": "1943-06-19",
   "till": "",
   "country": "",
   "province": "",
   "locality": "",
   "where": "",
   "title": "Air raid at Volkhov",
   "desc": "Goal: Volkhov bridge that takes freight trains to Leningrad. Enemy lost 15 out of 60 warplanes.",
   "result": "",
   "link": "http://thefireofthewar.ru/1418/index.php/1943/iyun/2093-19-06-1943"
 },
 {
   "from": "1943-06-19",
   "till": "",
   "country": "",
   "province": "",
   "locality": "",
   "where": "",
   "title": "Leningrad shelling",
   "desc": "Lasted for more than 4 hours. 300 shells at the city, including 119 at the Kirov plant. ",
   "result": "",
   "link": "http://thefireofthewar.ru/1418/index.php/1943/iyun/2093-19-06-1943"
 },
 {
   "from": "1943-06-19",
   "till": "",
   "country": "",
   "province": "",
   "locality": "",
   "where": "",
   "title": "Alexander Matrosov hero posthumously",
   "desc": "A government decree passed.",
   "result": "",
   "link": "http://thefireofthewar.ru/1418/index.php/1943/iyun/2093-19-06-1943"
 },
 {
   "from": "1943-06-19",
   "till": "",
   "country": "",
   "province": "",
   "locality": "",
   "where": "",
   "title": "Ukrainian partisans on raid",
   "desc": "Battles: 16. Troop trains derailed: 17. Metalled bridges blown up: 15.",
   "result": "",
   "link": "http://thefireofthewar.ru/1418/index.php/1943/iyun/2093-19-06-1943"
 },
 {
   "from": "1943-06-19",
   "till": "",
   "country": "",
   "province": "",
   "locality": "",
   "where": "",
   "title": "Mining Danube",
   "desc": "Black Sea fleet aircraft are mining the Danube river.",
   "result": "",
   "link": "http://thefireofthewar.ru/1418/index.php/1943/iyun/2093-19-06-1943"
 },
 {
   "from": "1943-06-21",
   "till": "",
   "country": "",
   "province": "",
   "locality": "",
   "where": "",
   "title": "Summary of the 2 years of war.",
   "desc": "Soviet Information Bureau: German/Soviet losses: soldiers and officers killed or taken captive: 6,400,000 / 4,200,000. Artillery: 56,500 / 35,000. Tanks: 42,400/30,000. warplanes: 43,000/23,000. German army is in crisis. Our army is stronger. Now is a perfect time for opening the Second Front.",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D0%B8%D1%8E%D0%BD%D1%8C_1943_%D0%B3%D0%BE%D0%B4%D0%B0)#20_.D0.B8.D1.8E.D0.BD.D1.8F_1943_.D0.B3.D0.BE.D0.B4.D0.B0._729-.D0.B9_.D0.B4.D0.B5.D0.BD.D1.8C_.D0.B2.D0.BE.D0.B9.D0.BD.D1.8B"
 },
 {
   "from": "1943-07-31",
   "till": "",
   "country": "",
   "province": "",
   "locality": "",
   "where": "",
   "title": "Итоговый подсчет обстрелов Ленинграда",
   "desc": "За июль 1943 года средняя ежедневная продолжительность обстрелов составила 9 час. 14 мин.",
   "result": "",
   "link": "http://leningradpobeda.ru/vojjna-jazykom-tsifr/"
 },
 {
   "from": "1943-08-17",
   "till": "",
   "country": "",
   "province": "",
   "locality": "",
   "where": "",
   "title": "Самый Долгий артобстрел Ленинграда",
   "desc": "за все годы блокады, продолжительностью 13 час. 14 мин. В городе разорвалось более 2000 снарядов.",
   "result": "",
   "link": ""
 },
 {
   "from": "1943-09-19",
   "till": "",
   "country": "",
   "province": "",
   "locality": "",
   "where": "",
   "title": "самая тяжелая бомбардировка Ленинграда",
   "desc": "было сброшено 528 фугасных и 2 870 зажигательных бомб.",
   "result": "",
   "link": "http://leningradpobeda.ru/vojjna-jazykom-tsifr/"
 },
 {
   "from": "1944-01-01",
   "till": "1944-01-31",
   "country": "",
   "province": "",
   "locality": "",
   "where": "",
   "title": "Январские обстрелы Ленинграда",
   "desc": "особенно жестокие",
   "result": "по городу было выпущено 1 482 снаряда",
   "link": "http://leningradpobeda.ru/vojjna-jazykom-tsifr/"
 },
 {
   "from": "1944-01-22",
   "till": "",
   "country": "",
   "province": "",
   "locality": "",
   "where": "",
   "title": "Последний обстрел",
   "desc": "Ленинграда",
   "result": "",
   "link": ""
 },
 {
   "from": "1944-04-08",
   "till": "1944-05-12",
   "country": "",
   "province": "",
   "locality": "",
   "where": "",
   "title": "Крымская наступательная операция",
   "desc": "Наступательная операция советских войск с целью освобождения Крыма от войск нацистской Германии во время Великой Отечественной войны. 4-й Украинский фронт и Отдельная Приморская армия во взаимодействии с Черноморским флотом и Азовской военной флотилией.",
   "result": "Победа СССР, полное освобождение Крыма от нацистской оккупации",
   "link": "https://ru.wikipedia.org/wiki/%D0%9A%D1%80%D1%8B%D0%BC%D1%81%D0%BA%D0%B0%D1%8F_%D0%BD%D0%B0%D1%81%D1%82%D1%83%D0%BF%D0%B0%D1%82%D0%B5%D0%BB%D1%8C%D0%BD%D0%B0%D1%8F_%D0%BE%D0%BF%D0%B5%D1%80%D0%B0%D1%86%D0%B8%D1%8F"
 },
 {
   "from": "1944-05-31",
   "till": "",
   "country": "",
   "province": "",
   "locality": "",
   "where": "",
   "title": "4-й Украинский фронт расформирован",
   "desc": "",
   "result": "",
   "link": ""
 },
 {
   "from": "1944-06-06",
   "till": "1945-05-09",
   "country": "",
   "province": "",
   "locality": "",
   "where": "",
   "title": "Второй (Западный) фронт",
   "desc": "Союзники помогают СССР громить Гитлера",
   "result": "",
   "link": ""
 },
 {
   "from": "1944-06-06",
   "till": "",
   "country": "",
   "province": "",
   "locality": "",
   "where": "",
   "title": "День Д, высадка в Нормандии",
   "desc": "Бельгия, БИ, Греция, Нидерланды, Польша,  США, Франция, Чехословакия.",
   "result": "",
   "link": ""
 },
 {
   "from": "1944-06-06",
   "till": "1944-07-01",
   "country": "",
   "province": "",
   "locality": "",
   "where": "",
   "title": "Операция «Нептун»",
   "desc": "Начальная фаза операции «Оверлорд». Цель: завоевание плацдарма на континенте",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%9E%D0%BF%D0%B5%D1%80%D0%B0%D1%86%D0%B8%D1%8F_%C2%AB%D0%9D%D0%B5%D0%BF%D1%82%D1%83%D0%BD%C2%BB"
 },
 {
   "from": "1944-06-06",
   "till": "1944-08-31",
   "country": "",
   "province": "",
   "locality": "",
   "where": "",
   "title": "Нормандская операция (операция «Оверлорд»)",
   "desc": "Стратегическая операция союзников (США, БИ, Франция, Польша, Нидерланды, Бельгия, Чехословакия, Греция) по высадке войск в Нормандии (Франция)",
   "result": "Операция открыла Западный (или т. н. «второй») фронт в Европе во Второй мировой войне.",
   "link": "https://ru.wikipedia.org/wiki/%D0%9D%D0%BE%D1%80%D0%BC%D0%B0%D0%BD%D0%B4%D1%81%D0%BA%D0%B0%D1%8F_%D0%BE%D0%BF%D0%B5%D1%80%D0%B0%D1%86%D0%B8%D1%8F"
 },
 {
   "from": "1944-06-10",
   "till": "",
   "country": "",
   "province": "",
   "locality": "",
   "where": "",
   "title": "Массовое убийство в Орадур-сюр-Глан",
   "desc": "Рота «Ваффен-СС» разрушила деревню Орадур-сюр-Глан в департаменте Верхняя Вьенна в оккупированной нацистами части Франции и истребила 642 жителя деревни, в том числе женщин и детей.",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%9C%D0%B0%D1%81%D1%81%D0%BE%D0%B2%D0%BE%D0%B5_%D1%83%D0%B1%D0%B8%D0%B9%D1%81%D1%82%D0%B2%D0%BE_%D0%B2_%D0%9E%D1%80%D0%B0%D0%B4%D1%83%D1%80-%D1%81%D1%8E%D1%80-%D0%93%D0%BB%D0%B0%D0%BD"
 },
 {
   "from": "1944-06-10",
   "till": "1944-08-09",
   "country": "",
   "province": "",
   "locality": "",
   "where": "",
   "title": "Выборгско-Петрозаводская операция",
   "desc": "Карельский фронт и Ленинградский фронт. Наступление советских войск в Карелии, в ходе Советско-финской войны 1941—1944 с целью ликвидации угрозы Ленинграду, идущим из Мурманска в центральные районы СССР коммуникациям, а также выведение Финляндии из войны",
   "result": "Победа СССР. Финляндия выходит из войны.",
   "link": "https://ru.wikipedia.org/wiki/%D0%92%D1%8B%D0%B1%D0%BE%D1%80%D0%B3%D1%81%D0%BA%D0%BE-%D0%9F%D0%B5%D1%82%D1%80%D0%BE%D0%B7%D0%B0%D0%B2%D0%BE%D0%B4%D1%81%D0%BA%D0%B0%D1%8F_%D0%BE%D0%BF%D0%B5%D1%80%D0%B0%D1%86%D0%B8%D1%8F"
 },
 {
   "from": "1944-06-11",
   "till": "",
   "country": "",
   "province": "",
   "locality": "",
   "where": "",
   "title": "Наши наступают в Ленинградской области",
   "desc": "30-й гвардейский стрелковый корпус 21-й армии продолжает наступление вдоль Выборгского шоссе в сторону посёлка Кивеннапа (Первомайское). 109-й стрелковый корпус сегодня занял посёлки Терийоки (Зеленогорск) и Райвола (Рощино). Сегодня же в наступление на направлении Валкъярви перешла 23-я армия А. И. Черепанова. Из фронтового резерва для развития успеха 21-я и 23-я армии получили на усиление два стрелковых корпуса. Перед линией Ваммелсуу—Тайпале идут упорные бои. На участке южнее Кивеннапа наши разбили три финских егерских батальона. Под угрозой левому флангу дивизия финского 4-го армейского корпуса вынуждена отступить на линию Ваммелсуу—Тайпале. Финское командование начинает перебрасывать на Карельский перешеек войска из Южной Карелии и Северной Финляндии.",
   "result": "",
   "link": ""
 },
 {
   "from": "1944-06-12",
   "till": "",
   "country": "",
   "province": "",
   "locality": "",
   "where": "",
   "title": "Бои у Ленинграда",
   "desc": "к 4 часам утра 109-й стрелковый корпус 21-й армии, наступая вдоль железной дороги на Выборг, выходит к линии Ваммелсуу—Тайпале. 30-й гвардейский стрелковый корпус занимает посёлок Кивеннапа. У побережья Финского залива в бой введён 108-й стрелковый корпус. Корпус пытается с ходу прорвать линию обороны в направлении Куутерселькя (Лебяжье), но успеха не имеет. Советские войска выходят на весь фронт обороны по линии Ваммелсуу—Тайпале, где закрепились отступившие 4-й и 3-й финские армейские корпуса. На центральную часть Карельского перешейка прибывают первые подразделения четвёртой финской дивизии из Восточной Карелии. Маннергейм отдаёт приказ о переброске на Карельский перешеек 17-й дивизии и 20-й бригады.",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D0%B8%D1%8E%D0%BD%D1%8C_1944_%D0%B3%D0%BE%D0%B4%D0%B0)"
 },
 {
   "from": "1944-06-14",
   "till": "",
   "country": "",
   "province": "",
   "locality": "",
   "where": "",
   "title": "Наступление на Карельском перешейке",
   "desc": "Наши штурмуют финнов.",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D0%B8%D1%8E%D0%BD%D1%8C_1944_%D0%B3%D0%BE%D0%B4%D0%B0)"
 },
 {
   "from": "1944-06-15",
   "till": "",
   "country": "",
   "province": "",
   "locality": "",
   "where": "",
   "title": "Финны перегруппируются",
   "desc": "Маннергейм приказывает перегруппировать войска на Карельский перешеек. Финны едут туда на поезде.",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D0%B8%D1%8E%D0%BD%D1%8C_1944_%D0%B3%D0%BE%D0%B4%D0%B0)"
 },
 {
   "from": "1944-06-15",
   "till": "",
   "country": "",
   "province": "",
   "locality": "",
   "where": "",
   "title": "Финны отступают",
   "desc": "чтобы не попасть в окружение. Наши овладели высотами у Куутерселькя.",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D0%B8%D1%8E%D0%BD%D1%8C_1944_%D0%B3%D0%BE%D0%B4%D0%B0)"
 },
 {
   "from": "1944-06-16",
   "till": "",
   "country": "",
   "province": "",
   "locality": "",
   "where": "",
   "title": "Финны теряют > 100 нас пунктов.",
   "desc": "Карельский перешеек. Наши занимают более 100 населенных пунктов и отбрасывают финнов к водному рубежу Финский залив—озеро Куолемаярвй—озеро Каукярви—озеро Пэркярви. Маннергейм приказывает отступать.",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D0%B8%D1%8E%D0%BD%D1%8C_1944_%D0%B3%D0%BE%D0%B4%D0%B0)"
 },
 {
   "from": "1944-06-17",
   "till": "",
   "country": "",
   "province": "",
   "locality": "",
   "where": "",
   "title": "Finns lose > 120 localities",
   "desc": "Карельский перешеек. Наши занимают более 120 нас. пунктов. Финны с боями отходят.",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D0%B8%D1%8E%D0%BD%D1%8C_1944_%D0%B3%D0%BE%D0%B4%D0%B0)"
 },
 {
   "from": "1944-06-18",
   "till": "",
   "country": "",
   "province": "",
   "locality": "",
   "where": "",
   "title": "Mannerheim Line broken",
   "desc": "Финский залив. Наши занимают более 100 нас. пунктов. Леонид Говоров (ком. Ленинградским фронтом) становится маршалом.",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D0%B8%D1%8E%D0%BD%D1%8C_1944_%D0%B3%D0%BE%D0%B4%D0%B0)"
 },
 {
   "from": "1944-06-19",
   "till": "",
   "country": "",
   "province": "",
   "locality": "",
   "where": "",
   "title": "Civillians rebuild and fund equipment",
   "desc": "Kursk oblast: restored and rebuilt farmers homes: 2,000. Restored all cultural and educational institutions. Personal savings spent to build army equipment: 2,381,144 Rubles.",
   "result": "",
   "link": "http://thefireofthewar.ru/1418/index.php/1944/iyun/2459-19-06-1944"
 },
 {
   "from": "1944-06-19",
   "till": "1944-06-29",
   "country": "",
   "province": "",
   "locality": "",
   "where": "",
   "title": "Railroad War III",
   "desc": "Last 3rd stage of the Railroad War by Belarusian partisans.",
   "result": "",
   "link": "http://thefireofthewar.ru/1418/index.php/1944/iyun/2459-19-06-1944"
 },
 {
   "from": "1944-06-19",
   "till": "",
   "country": "",
   "province": "",
   "locality": "",
   "where": "",
   "title": "We make Finns cry for help",
   "desc": "Leningrad front advances and clear the south shores of 2 lakes. Mannerheim asks Hitler for help.",
   "result": "",
   "link": "http://thefireofthewar.ru/1418/index.php/1944/iyun/2459-19-06-1944"
 },
 {
   "from": "1944-06-20",
   "till": "1944-06-23",
   "country": "",
   "province": "",
   "locality": "",
   "where": "",
   "title": "Railroad War III",
   "desc": "Belarusian partisans are raiding the railroads.",
   "result": "Partial paralysis of the German traffic in many roads in Belarus.",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D0%B8%D1%8E%D0%BD%D1%8C_1944_%D0%B3%D0%BE%D0%B4%D0%B0)#20_.D0.B8.D1.8E.D0.BD.D1.8F_1944_.D0.B3.D0.BE.D0.B4.D0.B0._1095-.D0.B9_.D0.B4.D0.B5.D0.BD.D1.8C_.D0.B2.D0.BE.D0.B9.D0.BD.D1.8B"
 },
 {
   "from": "1944-06-20",
   "till": "",
   "country": "",
   "province": "",
   "locality": "",
   "where": "",
   "title": "We are at Svir River",
   "desc": "By evening our troops reach the south shore of Svir River.",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D0%B8%D1%8E%D0%BD%D1%8C_1944_%D0%B3%D0%BE%D0%B4%D0%B0)#20_.D0.B8.D1.8E.D0.BD.D1.8F_1944_.D0.B3.D0.BE.D0.B4.D0.B0._1095-.D0.B9_.D0.B4.D0.B5.D0.BD.D1.8C_.D0.B2.D0.BE.D0.B9.D0.BD.D1.8B"
 },
 {
   "from": "1944-06-20",
   "till": "",
   "country": "",
   "province": "",
   "locality": "",
   "where": "",
   "title": "Vyborg is ours!",
   "desc": "Our troops assaulted and took Vyborg today at 7p.m. Over 60 localities are ours.",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D0%B8%D1%8E%D0%BD%D1%8C_1944_%D0%B3%D0%BE%D0%B4%D0%B0)#20_.D0.B8.D1.8E.D0.BD.D1.8F_1944_.D0.B3.D0.BE.D0.B4.D0.B0._1095-.D0.B9_.D0.B4.D0.B5.D0.BD.D1.8C_.D0.B2.D0.BE.D0.B9.D0.BD.D1.8B"
 },
 {
   "from": "1944-06-23",
   "till": "1944-06-29",
   "country": "",
   "province": "",
   "locality": "",
   "where": "",
   "title": "Бобруйская операция",
   "desc": "1-й Белорусский фронт",
   "result": "Победа СССР. Создание РККА условий для быстрого наступления на Минск и Барановичи.",
   "link": "https://ru.wikipedia.org/wiki/%D0%91%D0%BE%D0%B1%D1%80%D1%83%D0%B9%D1%81%D0%BA%D0%B0%D1%8F_%D0%BE%D0%BF%D0%B5%D1%80%D0%B0%D1%86%D0%B8%D1%8F"
 },
 {
   "from": "1944-06-23",
   "till": "1944-06-28",
   "country": "",
   "province": "",
   "locality": "",
   "where": "",
   "title": "Витебско-Оршанская операция",
   "desc": "1-й Прибалтийский фронт, 3-й Белорусский фронт",
   "result": "",
   "link": ""
 },
 {
   "from": "1944-06-23",
   "till": "1944-08-29",
   "country": "",
   "province": "",
   "locality": "",
   "where": "",
   "title": "Белорусская операция",
   "desc": "Белорусская наступательная операция «Багратион» — крупномасштабная наступательная операция. 1-й Прибалтийский фронт, 3-й Белорусский фронт, 2-й Белорусский фронт, 1-й Белорусский фронт",
   "result": "Одна из крупнейших военных операций за всю историю человечества. Освобождена территория Белорусии, восточной Польши и часть Прибалтики и практически полностью разгромлена германская группа армий «Центр». Вермахт понёс тяжелейшие потери, отчасти из-за того, что А. Гитлер запрещал любое отступление. Восполнить эти потери впоследствии Германия была уже не в состоянии.",
   "link": "https://ru.wikipedia.org/wiki/%D0%91%D0%B5%D0%BB%D0%BE%D1%80%D1%83%D1%81%D1%81%D0%BA%D0%B0%D1%8F_%D0%BE%D0%BF%D0%B5%D1%80%D0%B0%D1%86%D0%B8%D1%8F_(1944)"
 },
 {
   "from": "1944-06-24",
   "till": "1944-06-29",
   "country": "",
   "province": "",
   "locality": "",
   "where": "",
   "title": "Могилёвская операция",
   "desc": "2-й Белорусский фронт. Стратегическая военная операция вооружённых сил СССР против немецких войск",
   "result": "Победа СССР",
   "link": "https://ru.wikipedia.org/wiki/%D0%9C%D0%BE%D0%B3%D0%B8%D0%BB%D1%91%D0%B2%D1%81%D0%BA%D0%B0%D1%8F_%D0%BE%D0%BF%D0%B5%D1%80%D0%B0%D1%86%D0%B8%D1%8F"
 },
 {
   "from": "1944-06-29",
   "till": "1944-07-04",
   "country": "",
   "province": "",
   "locality": "",
   "where": "",
   "title": "Полоцкая операция",
   "desc": "1-й Прибалтийский фронт",
   "result": "",
   "link": ""
 },
 {
   "from": "1944-06-29",
   "till": "1944-07-04",
   "country": "",
   "province": "",
   "locality": "",
   "where": "",
   "title": "Минская операция",
   "desc": "1-й Прибалтийский фронт, 3-й Белорусский фронт",
   "result": "Победа Красной армии, освобождение Минска.",
   "link": "https://ru.wikipedia.org/wiki/%D0%9C%D0%B8%D0%BD%D1%81%D0%BA%D0%B0%D1%8F_%D0%BE%D0%BF%D0%B5%D1%80%D0%B0%D1%86%D0%B8%D1%8F"
 },
 {
   "from": "1944-07-01",
   "till": "",
   "country": "",
   "province": "",
   "locality": "",
   "where": "",
   "title": "Смерть Тани Савичевой",
   "desc": "14-летняя ленинградская школьница умерла в эвакуации",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A1%D0%B0%D0%B2%D0%B8%D1%87%D0%B5%D0%B2%D0%B0,_%D0%A2%D0%B0%D1%82%D1%8C%D1%8F%D0%BD%D0%B0_%D0%9D%D0%B8%D0%BA%D0%BE%D0%BB%D0%B0%D0%B5%D0%B2%D0%BD%D0%B0"
 },
 {
   "from": "1944-07-25",
   "till": "1944-07-31",
   "country": "",
   "province": "",
   "locality": "",
   "where": "",
   "title": "Операция «Кобра»",
   "desc": "??????? ????? ??? ?????? ?????? ???????? ????????, ????? ??????? ???????? ????? ??????? ???????? ?? ?????????????? ????? ??????????? ???? ?????????, ??????? ?? ????? ??????????? ???????? ? ??????????? ???????? ????.",
   "result": "Большой успех союзнических войск. Создался Фалезский котёл, немцы потеряли позиции в северозападной Франции.",
   "link": "https://ru.wikipedia.org/wiki/%D0%9E%D0%BF%D0%B5%D1%80%D0%B0%D1%86%D0%B8%D1%8F_%C2%AB%D0%9A%D0%BE%D0%B1%D1%80%D0%B0%C2%BB"
 },
 {
   "from": "1945-02-16",
   "till": "1945-05-08",
   "country": "",
   "province": "",
   "locality": "",
   "where": "",
   "title": "",
   "desc": "????????????? ?????",
   "result": "",
   "link": ""
 },
 {
   "from": "1945-03-10",
   "till": "1945-05-05",
   "country": "",
   "province": "",
   "locality": "",
   "where": "",
   "title": "????????-?????????? ?????????????? ????????",
   "desc": "4-? ?????????? ?????",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%9C%D0%BE%D1%80%D0%B0%D0%B2%D1%81%D0%BA%D0%BE-%D0%9E%D1%81%D1%82%D1%80%D0%B0%D0%B2%D1%81%D0%BA%D0%B0%D1%8F_%D0%BD%D0%B0%D1%81%D1%82%D1%83%D0%BF%D0%B0%D1%82%D0%B5%D0%BB%D1%8C%D0%BD%D0%B0%D1%8F_%D0%BE%D0%BF%D0%B5%D1%80%D0%B0%D1%86%D0%B8%D1%8F"
 },
 {
   "from": "1945-03-25",
   "till": "1945-05-05",
   "country": "",
   "province": "",
   "locality": "",
   "where": "",
   "title": "????????????-????????? ?????????????? ????????",
   "desc": "2-? ?????????? ?????",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%91%D1%80%D0%B0%D1%82%D0%B8%D1%81%D0%BB%D0%B0%D0%B2%D1%81%D0%BA%D0%BE-%D0%91%D1%80%D0%BD%D0%BE%D0%B2%D1%81%D0%BA%D0%B0%D1%8F_%D0%BD%D0%B0%D1%81%D1%82%D1%83%D0%BF%D0%B0%D1%82%D0%B5%D0%BB%D1%8C%D0%BD%D0%B0%D1%8F_%D0%BE%D0%BF%D0%B5%D1%80%D0%B0%D1%86%D0%B8%D1%8F"
 },
 {
   "from": "1945-04-05",
   "till": "1945-05-20",
   "country": "",
   "province": "",
   "locality": "",
   "where": "",
   "title": "?????????? ????????? ?? ??????? ??????",
   "desc": "????????? ??????????? ????????? ???????? (822-? ???????? ???????? �K�nigin Tamara�; �?????? ??????�) ?? ??????? ??????????? ??????? ?? ??????? ?????? ???????-???????? ????? (?????????) ?? ????? ?????? ??????? ?????.",
   "result": "",
   "link": ""
 },
 {
   "from": "1945-04-16",
   "till": "1945-05-08",
   "country": "",
   "province": "",
   "locality": "",
   "where": "",
   "title": "?????????? ?????????????? ????????",
   "desc": "2-? ??????????? ?????, 1-? ?????????? ?????",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%91%D0%B5%D1%80%D0%BB%D0%B8%D0%BD%D1%81%D0%BA%D0%B0%D1%8F_%D0%BD%D0%B0%D1%81%D1%82%D1%83%D0%BF%D0%B0%D1%82%D0%B5%D0%BB%D1%8C%D0%BD%D0%B0%D1%8F_%D0%BE%D0%BF%D0%B5%D1%80%D0%B0%D1%86%D0%B8%D1%8F"
 },
 {
   "from": "1945-05-06",
   "till": "1945-05-11",
   "country": "",
   "province": "",
   "locality": "",
   "where": "",
   "title": "The Prague Offensive",
   "desc": "The USSR troops - 3 Ukrainian Fronts (1st, 2nd, and 4th) - the offensive against the Hitlerites in the capital of Czechoslovakia.",
   "result": "",
   "link": ""
 },
 {
   "from": "1945-05-07",
   "till": "",
   "country": "",
   "province": "",
   "locality": "",
   "where": "",
   "title": "Nazis surrender",
   "desc": "Hitlerites signed an unconditional surrender at Allied headquarters in Reims, France, to take effect the following day, ending the European conflict of World War II.",
   "result": "",
   "link": ""
 },
 {
   "from": "1945-05-08",
   "till": "",
   "country": "",
   "province": "",
   "locality": "",
   "where": "",
   "title": "??????????? ??????????? ??????????",
   "desc": "??????: 3-? ??????????? ????? ? ?????? ????? ???? ?????, ????????? ??????? ? ?? ???? ????????-?????? ??????-????????? ?????",
   "result": "",
   "link": ""
 },
 {
   "from": "1945-05-14",
   "till": "1945-05-15",
   "country": "",
   "province": "",
   "locality": "",
   "where": "",
   "title": "????????? ?????",
   "desc": "??????????? ????????? ? ????????? ??????? ?????? 30 000 ????????? ? ?????????? ???????, ??????? ???????? ?????????? ?? ???????? ? ????????? ? ??????.",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%9F%D0%BE%D0%BB%D1%8F%D0%BD%D1%81%D0%BA%D0%B0%D1%8F_%D0%B1%D0%B8%D1%82%D0%B2%D0%B0"
 },
 {
   "from": "1945-05-22",
   "till": "1945-05-28",
   "country": "",
   "province": "",
   "locality": "",
   "where": "",
   "title": "Something",
   "desc": "lalala",
   "result": "Result was interesting",
   "link": ""
 },
 {
   "from": "1945-05-22",
   "till": "",
   "country": "",
   "province": "",
   "locality": "",
   "where": "",
   "title": "Operation Unthinkable",
   "desc": "",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%9E%D0%BF%D0%B5%D1%80%D0%B0%D1%86%D0%B8%D1%8F_%C2%AB%D0%9D%D0%B5%D0%BC%D1%8B%D1%81%D0%BB%D0%B8%D0%BC%D0%BE%D0%B5%C2%BB"
 },
 {
   "from": "1945-06-04",
   "till": "",
   "country": "",
   "province": "",
   "locality": "",
   "where": "",
   "title": "test single-day event",
   "desc": "testing",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D0%B8%D1%8E%D0%BB%D1%8C_1941_%D0%B3%D0%BE%D0%B4%D0%B0)#3_.D0.B8.D1.8E.D0.BB.D1.8F_1941_.D0.B3.D0.BE.D0.B4.D0.B0._12-.D0.B9_.D0.B4.D0.B5.D0.BD.D1.8C_.D0.B2.D0.BE.D0.B9.D0.BD.D1.8B"
 },
 {
   "from": "1941-07-03",
   "till": "",
   "country": "",
   "province": "",
   "locality": "",
   "where": "",
   "title": "URK: DEU is in Rovno prov.",
   "desc": "UKR: DEU advance through the Rovno province",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D0%B8%D1%8E%D0%BB%D1%8C_1941_%D0%B3%D0%BE%D0%B4%D0%B0)#3_.D0.B8.D1.8E.D0.BB.D1.8F_1941_.D0.B3.D0.BE.D0.B4.D0.B0._12-.D0.B9_.D0.B4.D0.B5.D0.BD.D1.8C_.D0.B2.D0.BE.D0.B9.D0.BD.D1.8B"
 },
 {
   "from": "1941-07-03",
   "till": "",
   "country": "",
   "province": "",
   "locality": "",
   "where": "",
   "title": "MDA: DEU advances NE",
   "desc": "DEU take left bank of river (Prut), start advancing toward NE in the breach between SW Front and S Front.",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D0%B8%D1%8E%D0%BB%D1%8C_1941_%D0%B3%D0%BE%D0%B4%D0%B0)#3_.D0.B8.D1.8E.D0.BB.D1.8F_1941_.D0.B3.D0.BE.D0.B4.D0.B0._12-.D0.B9_.D0.B4.D0.B5.D0.BD.D1.8C_.D0.B2.D0.BE.D0.B9.D0.BD.D1.8B"
 },
 {
   "from": "1941-07-03",
   "till": "",
   "country": "",
   "province": "",
   "locality": "",
   "where": "",
   "title": "DEU: Russia fell in 14 days",
   "desc": "DEU: Chief of General Staff of the DEU Army says Hitler can consider the campaign against Russia won in 14 days. But we would still have to deal with the Russians for many weeks.",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D0%B8%D1%8E%D0%BB%D1%8C_1941_%D0%B3%D0%BE%D0%B4%D0%B0)#3_.D0.B8.D1.8E.D0.BB.D1.8F_1941_.D0.B3.D0.BE.D0.B4.D0.B0._12-.D0.B9_.D0.B4.D0.B5.D0.BD.D1.8C_.D0.B2.D0.BE.D0.B9.D0.BD.D1.8B"
 },
 {
   "from": "1941-06-30",
   "till": "",
   "country": "",
   "province": "",
   "locality": "",
   "where": "",
   "title": "DEU losses: 1.63%",
   "desc": "June 22 - June 30: DEU losses: 1.64% (41,087). KIA: officers - 524, non-commissioned officers and privates: 8,362. Wounded: officers: 966, non-comms and privates: 28,528.",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D0%B8%D1%8E%D0%BB%D1%8C_1941_%D0%B3%D0%BE%D0%B4%D0%B0)#3_.D0.B8.D1.8E.D0.BB.D1.8F_1941_.D0.B3.D0.BE.D0.B4.D0.B0._12-.D0.B9_.D0.B4.D0.B5.D0.BD.D1.8C_.D0.B2.D0.BE.D0.B9.D0.BD.D1.8B"
 },
 {
   "from": "1941-07-03",
   "till": "",
   "country": "",
   "province": "",
   "locality": "",
   "where": "",
   "title": "DEU fears SU jabs",
   "desc": "Sovinformbureau: Enemy can't stand our bayonet jabs.",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D0%B8%D1%8E%D0%BB%D1%8C_1941_%D0%B3%D0%BE%D0%B4%D0%B0)#3_.D0.B8.D1.8E.D0.BB.D1.8F_1941_.D0.B3.D0.BE.D0.B4.D0.B0._12-.D0.B9_.D0.B4.D0.B5.D0.BD.D1.8C_.D0.B2.D0.BE.D0.B9.D0.BD.D1.8B"
 },
 {
   "from": "1941-06-30",
   "till": "",
   "country": "",
   "province": "",
   "locality": "",
   "where": "",
   "title": "UKR: Nazis enter Lvov prov. capital",
   "desc": "NKVD shoots prison inmates that include UKR nationalists.",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%9B%D1%8C%D0%B2%D0%BE%D0%B2%D1%81%D0%BA%D0%B8%D0%B9_%D0%BF%D0%BE%D0%B3%D1%80%D0%BE%D0%BC_(1941)"
 },
 {
   "from": "1941-07-01",
   "till": "1941-07-02",
   "country": "",
   "province": "",
   "locality": "",
   "where": "",
   "title": "Lvov pogrom",
   "desc": "by OUN police and citizens",
   "result": "Nearly 4,000 jews killed",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D0%BE%D0%BB%D0%BE%D0%BA%D0%BE%D1%81%D1%82_%D0%B2%D0%BE_%D0%9B%D1%8C%D0%B2%D0%BE%D0%B2%D0%B5"
 },
 {
   "from": "1941-07-08",
   "till": "",
   "country": "",
   "province": "",
   "locality": "",
   "where": "",
   "title": "UKR: star of David",
   "desc": "Nazis order all jews in Lvov to wear the star of David.",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D0%BE%D0%BB%D0%BE%D0%BA%D0%BE%D1%81%D1%82_%D0%B2%D0%BE_%D0%9B%D1%8C%D0%B2%D0%BE%D0%B2%D0%B5"
 },
 {
   "from": "1941-07-04",
   "till": "",
   "country": "",
   "province": "",
   "locality": "",
   "where": "",
   "title": "2 cities lost in LVA and RUS",
   "desc": "DEU seized and occupied one city in LVA (R?zekne), another in RUS Pskov Prov (Ostrov).",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D0%B8%D1%8E%D0%BB%D1%8C_1941_%D0%B3%D0%BE%D0%B4%D0%B0)#4_.D0.B8.D1.8E.D0.BB.D1.8F_1941_.D0.B3.D0.BE.D0.B4.D0.B0._13-.D0.B9_.D0.B4.D0.B5.D0.BD.D1.8C_.D0.B2.D0.BE.D0.B9.D0.BD.D1.8B"
 },
 {
   "from": "1941-07-10",
   "till": "1941-09-10",
   "country": "",
   "province": "",
   "locality": "",
   "where": "",
   "title": "Battle of Smolensk",
   "desc": "RUS, Smolensk Prov. Capital",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D0%B8%D1%8E%D0%BB%D1%8C_1941_%D0%B3%D0%BE%D0%B4%D0%B0)#4_.D0.B8.D1.8E.D0.BB.D1.8F_1941_.D0.B3.D0.BE.D0.B4.D0.B0._13-.D0.B9_.D0.B4.D0.B5.D0.BD.D1.8C_.D0.B2.D0.BE.D0.B9.D0.BD.D1.8B"
 },
 {
   "from": "1941-07-04",
   "till": "",
   "country": "",
   "province": "",
   "locality": "",
   "where": "",
   "title": "DEU are in BLR, Vitebsk prov and Gomel Prov. ",
   "desc": "Our W Front strike DEU and stopped them from crossing the river (Dnieper). Some do cross Dnieper and Berezina",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D0%B8%D1%8E%D0%BB%D1%8C_1941_%D0%B3%D0%BE%D0%B4%D0%B0)#4_.D0.B8.D1.8E.D0.BB.D1.8F_1941_.D0.B3.D0.BE.D0.B4.D0.B0._13-.D0.B9_.D0.B4.D0.B5.D0.BD.D1.8C_.D0.B2.D0.BE.D0.B9.D0.BD.D1.8B"
 },
 {
   "from": "1941-07-04",
   "till": "",
   "country": "",
   "province": "",
   "locality": "",
   "where": "",
   "title": "UKR, Khmelnitsky Prov.",
   "desc": "DEU occupies a city (Shepetovka). SW Front retreats to the Stalin Line.",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D0%B8%D1%8E%D0%BB%D1%8C_1941_%D0%B3%D0%BE%D0%B4%D0%B0)#4_.D0.B8.D1.8E.D0.BB.D1.8F_1941_.D0.B3.D0.BE.D0.B4.D0.B0._13-.D0.B9_.D0.B4.D0.B5.D0.BD.D1.8C_.D0.B2.D0.BE.D0.B9.D0.BD.D1.8B"
 },
 {
   "from": "1941-07-01",
   "till": "1944-07-27",
   "country": "",
   "province": "",
   "locality": "",
   "where": "",
   "title": "Occupation of Lwow",
   "desc": "Jews are killed",
   "result": "Jewish population is reduced from more than 10,000 to less than 300 hiding in the city and in the sewage system.",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D0%BE%D0%BB%D0%BE%D0%BA%D0%BE%D1%81%D1%82_%D0%B2%D0%BE_%D0%9B%D1%8C%D0%B2%D0%BE%D0%B2%D0%B5"
 },
 {
   "from": "1941-07-05",
   "till": "",
   "country": "",
   "province": "",
   "locality": "",
   "where": "",
   "title": "RUS, Pskov province: we counterattack and retake a city.",
   "desc": "We kick DEU out of a city (Ostrov).",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D0%B8%D1%8E%D0%BB%D1%8C_1941_%D0%B3%D0%BE%D0%B4%D0%B0)#5_.D0.B8.D1.8E.D0.BB.D1.8F_1941_.D0.B3.D0.BE.D0.B4.D0.B0._14-.D0.B9_.D0.B4.D0.B5.D0.BD.D1.8C_.D0.B2.D0.BE.D0.B9.D0.BD.D1.8B"
 },
 {
   "from": "1941-07-05",
   "till": "",
   "country": "",
   "province": "",
   "locality": "",
   "where": "",
   "title": "BLR: Vitebsk and Gomel provinces: DEU are winning",
   "desc": "BLR. Vitebsk province: DEU cross a river and gain a foothold on its N bank. Gomel province: DEU slowly advance.",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D0%B8%D1%8E%D0%BB%D1%8C_1941_%D0%B3%D0%BE%D0%B4%D0%B0)#5_.D0.B8.D1.8E.D0.BB.D1.8F_1941_.D0.B3.D0.BE.D0.B4.D0.B0._14-.D0.B9_.D0.B4.D0.B5.D0.BD.D1.8C_.D0.B2.D0.BE.D0.B9.D0.BD.D1.8B"
 },
 {
   "from": "1941-07-05",
   "till": "",
   "country": "ukraine",
   "province": "zhitomir",
   "locality": "zhitomir",
   "where": "",
   "title": "",
   "desc": "DEU resume advancing and manage to seize a fortified line.",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D0%B8%D1%8E%D0%BB%D1%8C_1941_%D0%B3%D0%BE%D0%B4%D0%B0)#5_.D0.B8.D1.8E.D0.BB.D1.8F_1941_.D0.B3.D0.BE.D0.B4.D0.B0._14-.D0.B9_.D0.B4.D0.B5.D0.BD.D1.8C_.D0.B2.D0.BE.D0.B9.D0.BD.D1.8B"
 },
 {
   "from": "1941-07-05",
   "till": "",
   "country": "",
   "province": "",
   "locality": "",
   "where": "",
   "title": "UKR: Chernovtsi province.",
   "desc": "ROU occupies the provincial capital.",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D0%B8%D1%8E%D0%BB%D1%8C_1941_%D0%B3%D0%BE%D0%B4%D0%B0)#5_.D0.B8.D1.8E.D0.BB.D1.8F_1941_.D0.B3.D0.BE.D0.B4.D0.B0._14-.D0.B9_.D0.B4.D0.B5.D0.BD.D1.8C_.D0.B2.D0.BE.D0.B9.D0.BD.D1.8B"
 },
 {
   "from": "1941-07-05",
   "till": "",
   "country": "",
   "province": "",
   "locality": "",
   "where": "",
   "title": "MDA: DOU advance toward the capital",
   "desc": "After crossing the border river",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D0%B8%D1%8E%D0%BB%D1%8C_1941_%D0%B3%D0%BE%D0%B4%D0%B0)#5_.D0.B8.D1.8E.D0.BB.D1.8F_1941_.D0.B3.D0.BE.D0.B4.D0.B0._14-.D0.B9_.D0.B4.D0.B5.D0.BD.D1.8C_.D0.B2.D0.BE.D0.B9.D0.BD.D1.8B"
 },
 {
   "from": "1941-07-06",
   "till": "",
   "country": "",
   "province": "",
   "locality": "",
   "where": "",
   "title": "Our government passed a decree against false rumors",
   "desc": "Responsibility for false rumors in the war time that incite anxiety among population.",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D0%B8%D1%8E%D0%BB%D1%8C_1941_%D0%B3%D0%BE%D0%B4%D0%B0)#6_.D0.B8.D1.8E.D0.BB.D1.8F_1941_.D0.B3.D0.BE.D0.B4.D0.B0._15-.D0.B9_.D0.B4.D0.B5.D0.BD.D1.8C_.D0.B2.D0.BE.D0.B9.D0.BD.D1.8B"
 },
 {
   "from": "1941-07-06",
   "till": "",
   "country": "",
   "province": "",
   "locality": "",
   "where": "",
   "title": "DEU retake a BLR city, threaten EST.",
   "desc": "DEU retakes BLR city (Ostrov). DEU are trying to take EST.",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D0%B8%D1%8E%D0%BB%D1%8C_1941_%D0%B3%D0%BE%D0%B4%D0%B0)#6_.D0.B8.D1.8E.D0.BB.D1.8F_1941_.D0.B3.D0.BE.D0.B4.D0.B0._15-.D0.B9_.D0.B4.D0.B5.D0.BD.D1.8C_.D0.B2.D0.BE.D0.B9.D0.BD.D1.8B"
 },
 {
   "from": "1941-07-06",
   "till": "1941-07-10",
   "country": "",
   "province": "",
   "locality": "",
   "where": "",
   "title": "BLR: Vitebsk battle",
   "desc": "BLR, Vitebsk Province. A tank battle. ",
   "result": "DEU wins",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D0%B8%D1%8E%D0%BB%D1%8C_1941_%D0%B3%D0%BE%D0%B4%D0%B0)#6_.D0.B8.D1.8E.D0.BB.D1.8F_1941_.D0.B3.D0.BE.D0.B4.D0.B0._15-.D0.B9_.D0.B4.D0.B5.D0.BD.D1.8C_.D0.B2.D0.BE.D0.B9.D0.BD.D1.8B"
 },
 {
   "from": "1941-07-06",
   "till": "",
   "country": "",
   "province": "",
   "locality": "",
   "where": "",
   "title": "Start of the Vitebsk Battle",
   "desc": "BLR, Vitebsk Province. We counterattack DEU's flank, advance 50-60 km.",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D0%B8%D1%8E%D0%BB%D1%8C_1941_%D0%B3%D0%BE%D0%B4%D0%B0)#6_.D0.B8.D1.8E.D0.BB.D1.8F_1941_.D0.B3.D0.BE.D0.B4.D0.B0._15-.D0.B9_.D0.B4.D0.B5.D0.BD.D1.8C_.D0.B2.D0.BE.D0.B9.D0.BD.D1.8B"
 },
 {
   "from": "1941-07-06",
   "till": "1941-07-09",
   "country": "",
   "province": "",
   "locality": "",
   "where": "",
   "title": "BLR: Lepel counterattack aka Senno Battle",
   "desc": "We counterattack against Lepel, Vitebsk Province, BLR, trying to stop DEU advancing toward Moscow.",
   "result": "We lose 832 tanks, DEU wins.",
   "link": "https://ru.wikipedia.org/wiki/%D0%9B%D0%B5%D0%BF%D0%B5%D0%BB%D1%8C%D1%81%D0%BA%D0%B8%D0%B9_%D0%BA%D0%BE%D0%BD%D1%82%D1%80%D1%83%D0%B4%D0%B0%D1%80"
 },
 {
   "from": "1941-07-06",
   "till": "",
   "country": "",
   "province": "",
   "locality": "",
   "where": "",
   "title": "BLR: We're figthing and attacking.",
   "desc": "We're fighting DEU near Rogachev, Gomel Province, BLR. We're attacking DEU near Gomel (Gomel Province, BLR). DEU approach river Dnieper.",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D0%B8%D1%8E%D0%BB%D1%8C_1941_%D0%B3%D0%BE%D0%B4%D0%B0)#6_.D0.B8.D1.8E.D0.BB.D1.8F_1941_.D0.B3.D0.BE.D0.B4.D0.B0._15-.D0.B9_.D0.B4.D0.B5.D0.BD.D1.8C_.D0.B2.D0.BE.D0.B9.D0.BD.D1.8B"
 },
 {
   "from": "1941-07-06",
   "till": "",
   "country": "",
   "province": "",
   "locality": "",
   "where": "",
   "title": "UKR: they turn us to flight",
   "desc": "DEU deal a strong strike on a fortified area; we turn and run. They start advancing on capital of Zhitomir Province and the UKR capital.",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D0%B8%D1%8E%D0%BB%D1%8C_1941_%D0%B3%D0%BE%D0%B4%D0%B0)#6_.D0.B8.D1.8E.D0.BB.D1.8F_1941_.D0.B3.D0.BE.D0.B4.D0.B0._15-.D0.B9_.D0.B4.D0.B5.D0.BD.D1.8C_.D0.B2.D0.BE.D0.B9.D0.BD.D1.8B"
 },
 {
   "from": "1941-07-06",
   "till": "",
   "country": "",
   "province": "",
   "locality": "",
   "where": "",
   "title": "Moldova: We retread beyond river and strike Germans from the south.",
   "desc": "Our South Front begins retreating to the eastern shore of river Dniester toward our fortified areas. We strike the southern flank of DEU.",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D0%B8%D1%8E%D0%BB%D1%8C_1941_%D0%B3%D0%BE%D0%B4%D0%B0)#6_.D0.B8.D1.8E.D0.BB.D1.8F_1941_.D0.B3.D0.BE.D0.B4.D0.B0._15-.D0.B9_.D0.B4.D0.B5.D0.BD.D1.8C_.D0.B2.D0.BE.D0.B9.D0.BD.D1.8B"
 },
 {
   "from": "1941-07-03",
   "till": "",
   "country": "",
   "province": "",
   "locality": "",
   "where": "",
   "title": "DEU's losses summed up so far.",
   "desc": "DEU's losses: 2.15%. That's 4,500 lives a day.",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D0%B8%D1%8E%D0%BB%D1%8C_1941_%D0%B3%D0%BE%D0%B4%D0%B0)#6_.D0.B8.D1.8E.D0.BB.D1.8F_1941_.D0.B3.D0.BE.D0.B4.D0.B0._15-.D0.B9_.D0.B4.D0.B5.D0.BD.D1.8C_.D0.B2.D0.BE.D0.B9.D0.BD.D1.8B"
 },
 {
   "from": "1941-07-07",
   "till": "",
   "country": "",
   "province": "",
   "locality": "",
   "where": "",
   "title": "We stop Germans moving toward the capital of Murmansk Province.",
   "desc": "our Northern Front stops Germans moving toward the capital of Murmansk Province, gain a foothold on West Litsa River. ",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D0%B8%D1%8E%D0%BB%D1%8C_1941_%D0%B3%D0%BE%D0%B4%D0%B0)#7_.D0.B8.D1.8E.D0.BB.D1.8F_1941_.D0.B3.D0.BE.D0.B4.D0.B0._16-.D0.B9_.D0.B4.D0.B5.D0.BD.D1.8C_.D0.B2.D0.BE.D0.B9.D0.BD.D1.8B"
 },
 {
   "from": "1941-07-07",
   "till": "",
   "country": "",
   "province": "",
   "locality": "",
   "where": "",
   "title": "BLR: Vitebsk Battle",
   "desc": "We fend off German attacks on river Chornogostnitsa. Left flank: they break through our defense.",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D0%B8%D1%8E%D0%BB%D1%8C_1941_%D0%B3%D0%BE%D0%B4%D0%B0)#7_.D0.B8.D1.8E.D0.BB.D1.8F_1941_.D0.B3.D0.BE.D0.B4.D0.B0._16-.D0.B9_.D0.B4.D0.B5.D0.BD.D1.8C_.D0.B2.D0.BE.D0.B9.D0.BD.D1.8B"
 },
 {
   "from": "1941-07-07",
   "till": "1941-09-26",
   "country": "",
   "province": "",
   "locality": "",
   "where": "",
   "title": "UKR: Kiev Defensive",
   "desc": "Our South-Western Front is fighting the Germans \"South\" armies.",
   "result": "Germans win. Catastrophic defeat of our South-Western Front",
   "link": "https://ru.wikipedia.org/wiki/%D0%9A%D0%B8%D0%B5%D0%B2%D1%81%D0%BA%D0%B0%D1%8F_%D1%81%D1%82%D1%80%D0%B0%D1%82%D0%B5%D0%B3%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%B0%D1%8F_%D0%BE%D0%B1%D0%BE%D1%80%D0%BE%D0%BD%D0%B8%D1%82%D0%B5%D0%BB%D1%8C%D0%BD%D0%B0%D1%8F_%D0%BE%D0%BF%D0%B5%D1%80%D0%B0%D1%86%D0%B8%D1%8F"
 },
 {
   "from": "1941-07-07",
   "till": "",
   "country": "",
   "province": "",
   "locality": "",
   "where": "",
   "title": "UKR: Kiev Defensive",
   "desc": "Southern flank: German tanks wedge deep into our defense line west of Zhitomir (Zhitomir Province). Northern flank: they are trying to break through our fortified areas.",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%9A%D0%B8%D0%B5%D0%B2%D1%81%D0%BA%D0%B0%D1%8F_%D1%81%D1%82%D1%80%D0%B0%D1%82%D0%B5%D0%B3%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%B0%D1%8F_%D0%BE%D0%B1%D0%BE%D1%80%D0%BE%D0%BD%D0%B8%D1%82%D0%B5%D0%BB%D1%8C%D0%BD%D0%B0%D1%8F_%D0%BE%D0%BF%D0%B5%D1%80%D0%B0%D1%86%D0%B8%D1%8F"
 },
 {
   "from": "1941-07-07",
   "till": "",
   "country": "",
   "province": "",
   "locality": "",
   "where": "",
   "title": "Mogilev-Podolsky occupied.",
   "desc": "Vinnitsa Province: Germans cross river Dniester and take Mogilev-Podolsky. Our Western Front retreat from a cul-de-sac .",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%9A%D0%B8%D0%B5%D0%B2%D1%81%D0%BA%D0%B0%D1%8F_%D1%81%D1%82%D1%80%D0%B0%D1%82%D0%B5%D0%B3%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%B0%D1%8F_%D0%BE%D0%B1%D0%BE%D1%80%D0%BE%D0%BD%D0%B8%D1%82%D0%B5%D0%BB%D1%8C%D0%BD%D0%B0%D1%8F_%D0%BE%D0%BF%D0%B5%D1%80%D0%B0%D1%86%D0%B8%D1%8F"
 },
 {
   "from": "1941-07-07",
   "till": "",
   "country": "",
   "province": "",
   "locality": "",
   "where": "",
   "title": "Yugoslavia uprising",
   "desc": "Yugoslavia rises against the Nazi invaders",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D0%B8%D1%8E%D0%BB%D1%8C_1941_%D0%B3%D0%BE%D0%B4%D0%B0)#7_.D0.B8.D1.8E.D0.BB.D1.8F_1941_.D0.B3.D0.BE.D0.B4.D0.B0._16-.D0.B9_.D0.B4.D0.B5.D0.BD.D1.8C_.D0.B2.D0.BE.D0.B9.D0.BD.D1.8B"
 },
 {
   "from": "1941-07-08",
   "till": "",
   "country": "",
   "province": "",
   "locality": "",
   "where": "",
   "title": "Western Pskov taken",
   "desc": "Pskov Province: Germans cross river and take Western part of the provincial capital (Pskov). Our South-western front begin to defend their fortified area there.",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D0%B8%D1%8E%D0%BB%D1%8C_1941_%D0%B3%D0%BE%D0%B4%D0%B0)#8_.D0.B8.D1.8E.D0.BB.D1.8F_1941_.D0.B3.D0.BE.D0.B4.D0.B0._17-.D0.B9_.D0.B4.D0.B5.D0.BD.D1.8C_.D0.B2.D0.BE.D0.B9.D0.BD.D1.8B"
 },
 {
   "from": "1941-07-08",
   "till": "",
   "country": "",
   "province": "",
   "locality": "",
   "where": "",
   "title": "They finish off the Minsk pocket",
   "desc": "The German Army Group Center finish off our troops trapped in the Minsk pocket",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D0%B8%D1%8E%D0%BB%D1%8C_1941_%D0%B3%D0%BE%D0%B4%D0%B0)#8_.D0.B8.D1.8E.D0.BB.D1.8F_1941_.D0.B3.D0.BE.D0.B4.D0.B0._17-.D0.B9_.D0.B4.D0.B5.D0.BD.D1.8C_.D0.B2.D0.BE.D0.B9.D0.BD.D1.8B"
 },
 {
   "from": "1941-07-08",
   "till": "",
   "country": "",
   "province": "",
   "locality": "",
   "where": "",
   "title": "BLR: Vitebsk Province",
   "desc": "Senno is occupied. Germans cross Daugava and approach Vitebsk. We retreat toward Orsha and mount counterattacks from Orsha.",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D0%B8%D1%8E%D0%BB%D1%8C_1941_%D0%B3%D0%BE%D0%B4%D0%B0)#8_.D0.B8.D1.8E.D0.BB.D1.8F_1941_.D0.B3.D0.BE.D0.B4.D0.B0._17-.D0.B9_.D0.B4.D0.B5.D0.BD.D1.8C_.D0.B2.D0.BE.D0.B9.D0.BD.D1.8B"
 },
 {
   "from": "1941-07-08",
   "till": "",
   "country": "",
   "province": "",
   "locality": "",
   "where": "",
   "title": "UKR: Berdichev is occupied.",
   "desc": "Zhitomir Province.",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D0%B8%D1%8E%D0%BB%D1%8C_1941_%D0%B3%D0%BE%D0%B4%D0%B0)#8_.D0.B8.D1.8E.D0.BB.D1.8F_1941_.D0.B3.D0.BE.D0.B4.D0.B0._17-.D0.B9_.D0.B4.D0.B5.D0.BD.D1.8C_.D0.B2.D0.BE.D0.B9.D0.BD.D1.8B"
 },
 {
   "from": "1941-07-08",
   "till": "",
   "country": "",
   "province": "",
   "locality": "",
   "where": "",
   "title": "MDA: we counterattack DEU",
   "desc": "We counterattack DEU near the capital of MDA (Chisinau)",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D0%B8%D1%8E%D0%BB%D1%8C_1941_%D0%B3%D0%BE%D0%B4%D0%B0)"
 },
 {
   "from": "1941-07-09",
   "till": "",
   "country": "",
   "province": "",
   "locality": "",
   "where": "",
   "title": "DEU move approach Leningrad Province",
   "desc": "We leave Pskov (Pskov Province, RU). DEU pass Pskov from the east and move toward Luga (Leningrad Province, RU).",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D0%B8%D1%8E%D0%BB%D1%8C_1941_%D0%B3%D0%BE%D0%B4%D0%B0)#9_.D0.B8.D1.8E.D0.BB.D1.8F_1941_.D0.B3.D0.BE.D0.B4.D0.B0._18-.D0.B9_.D0.B4.D0.B5.D0.BD.D1.8C_.D0.B2.D0.BE.D0.B9.D0.BD.D1.8B"
 },
 {
   "from": "1941-06-22",
   "till": "1941-07-09",
   "country": "",
   "province": "",
   "locality": "",
   "where": "",
   "title": "Belarusian Defensive",
   "desc": "Our Western Front together with the Pinsk flotilla. Lives lost a day: 23,210.",
   "result": "We lose but we have slowed down their advance toward Smolensk (Smolensk Province, RUS). Duration: 18 days. Front: 450-800 km wide. Depth of retreat: 450-600 km. Lost lives: 54.4%.",
   "link": "https://ru.wikipedia.org/wiki/%D0%91%D0%B5%D0%BB%D0%BE%D1%80%D1%83%D1%81%D1%81%D0%BA%D0%B0%D1%8F_%D1%81%D1%82%D1%80%D0%B0%D1%82%D0%B5%D0%B3%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%B0%D1%8F_%D0%BE%D0%B1%D0%BE%D1%80%D0%BE%D0%BD%D0%B8%D1%82%D0%B5%D0%BB%D1%8C%D0%BD%D0%B0%D1%8F_%D0%BE%D0%BF%D0%B5%D1%80%D0%B0%D1%86%D0%B8%D1%8F"
 },
 {
   "from": "1941-07-09",
   "till": "",
   "country": "",
   "province": "",
   "locality": "",
   "where": "",
   "title": "BLR: Vitebsk occupied.",
   "desc": "DEU breaches the line between our 2 Western Front armies, occupy Vitebsk (Vitebsk Province, BLR), secure a bridgehead on north shore of Daugava.",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D0%B8%D1%8E%D0%BB%D1%8C_1941_%D0%B3%D0%BE%D0%B4%D0%B0)#9_.D0.B8.D1.8E.D0.BB.D1.8F_1941_.D0.B3.D0.BE.D0.B4.D0.B0._18-.D0.B9_.D0.B4.D0.B5.D0.BD.D1.8C_.D0.B2.D0.BE.D0.B9.D0.BD.D1.8B"
 },
 {
   "from": "1941-07-09",
   "till": "",
   "country": "",
   "province": "",
   "locality": "",
   "where": "",
   "title": "UKR: Zhitomir is occupied.",
   "desc": "Afternoon: DEU occupy Zhitomir and rush toward UKR capital (Kiev) along the highway. Main body of the South-Western front are in danger of being surrounded.",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D0%B8%D1%8E%D0%BB%D1%8C_1941_%D0%B3%D0%BE%D0%B4%D0%B0)#9_.D0.B8.D1.8E.D0.BB.D1.8F_1941_.D0.B3.D0.BE.D0.B4.D0.B0._18-.D0.B9_.D0.B4.D0.B5.D0.BD.D1.8C_.D0.B2.D0.BE.D0.B9.D0.BD.D1.8B"
 },
 {
   "from": "1941-07-09",
   "till": "",
   "country": "",
   "province": "",
   "locality": "",
   "where": "",
   "title": "UKR: Zhitomir Province.",
   "desc": "Our South-Western Front is counterattacking the occupied Berdichev. We also counterattack from the North near Zhitomir.",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D0%B8%D1%8E%D0%BB%D1%8C_1941_%D0%B3%D0%BE%D0%B4%D0%B0)#9_.D0.B8.D1.8E.D0.BB.D1.8F_1941_.D0.B3.D0.BE.D0.B4.D0.B0._18-.D0.B9_.D0.B4.D0.B5.D0.BD.D1.8C_.D0.B2.D0.BE.D0.B9.D0.BD.D1.8B"
 },
 {
   "from": "1941-07-14",
   "till": "1942-09-19",
   "country": "",
   "province": "",
   "locality": "",
   "where": "",
   "title": "Mass murder of Jews in the Nazi-occupied Zhitomir",
   "desc": "by shooting",
   "result": "",
   "link": "http://alfred-griber.com/proizvedeniya/povest-istoki-i-korni/zhitomir-v-ogne-vojny"
 },
 {
   "from": "1941-07-09",
   "till": "1943-12-31",
   "country": "ukraine",
   "province": "zhitomir",
   "locality": "zhitomir",
   "where": "",
   "title": "Оккупация Житомира",
   "desc": "Germans are demolishing and depopulating the city: killing citizens, destroying industrial facilities, dwelling buildings, hospitals, schools, cultural institutions, administrative building, reducing downtown to ruins.",
   "result": "Уничтожено свыше 110 000 советских граждан",
   "link": "http://www.calend.ru/event/7223/"
 },
 {
   "from": "1941-07-10",
   "till": "",
   "country": "",
   "province": "",
   "locality": "",
   "where": "",
   "title": "RUS: Karelian Province: FIN are advancing north of Lake Ladoga. Our Northern Front is retreating.",
   "desc": "",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D0%B8%D1%8E%D0%BB%D1%8C_1941_%D0%B3%D0%BE%D0%B4%D0%B0)#10_.D0.B8.D1.8E.D0.BB.D1.8F_1941_.D0.B3.D0.BE.D0.B4.D0.B0._19-.D0.B9_.D0.B4.D0.B5.D0.BD.D1.8C_.D0.B2.D0.BE.D0.B9.D0.BD.D1.8B"
 },
 {
   "from": "1941-07-10",
   "till": "1941-09-30",
   "country": "",
   "province": "",
   "locality": "",
   "where": "",
   "title": "Leningrad Strategic Defensive",
   "desc": "Our North-Western front and Northern Front.",
   "result": "Победа Германии",
   "link": "https://ru.wikipedia.org/wiki/%D0%9B%D0%B5%D0%BD%D0%B8%D0%BD%D0%B3%D1%80%D0%B0%D0%B4%D1%81%D0%BA%D0%B0%D1%8F_%D1%81%D1%82%D1%80%D0%B0%D1%82%D0%B5%D0%B3%D0%B8%D1%87%D0%B5%D1%81%D0%BA%D0%B0%D1%8F_%D0%BE%D0%B1%D0%BE%D1%80%D0%BE%D0%BD%D0%B8%D1%82%D0%B5%D0%BB%D1%8C%D0%BD%D0%B0%D1%8F_%D0%BE%D0%BF%D0%B5%D1%80%D0%B0%D1%86%D0%B8%D1%8F"
 },
 {
   "from": "1941-07-10",
   "till": "",
   "country": "",
   "province": "",
   "locality": "",
   "where": "",
   "title": "DEU advancing toward Leningrad",
   "desc": "DEU is advancing toward Leningrad in the general direction of Novgorod (Novgorod Province, RUS)",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D0%B8%D1%8E%D0%BB%D1%8C_1941_%D0%B3%D0%BE%D0%B4%D0%B0)#10_.D0.B8.D1.8E.D0.BB.D1.8F_1941_.D0.B3.D0.BE.D0.B4.D0.B0._19-.D0.B9_.D0.B4.D0.B5.D0.BD.D1.8C_.D0.B2.D0.BE.D0.B9.D0.BD.D1.8B"
 },
 {
   "from": "1941-07-10",
   "till": "1941-09-10",
   "country": "",
   "province": "",
   "locality": "",
   "where": "",
   "title": "Battle of Smolensk",
   "desc": "We are fighing DEU on an enormous territory: 600-650 km wide, 200-250km deep.",
   "result": "DEU wins tactically. We win strategically. We disrupted their blitz-krieg.",
   "link": "https://ru.wikipedia.org/wiki/%D0%A1%D0%BC%D0%BE%D0%BB%D0%B5%D0%BD%D1%81%D0%BA%D0%BE%D0%B5_%D1%81%D1%80%D0%B0%D0%B6%D0%B5%D0%BD%D0%B8%D0%B5_(1941)"
 },
 {
   "from": "1941-07-10",
   "till": "",
   "country": "",
   "province": "",
   "locality": "",
   "where": "",
   "title": "Battle of Smolensk begins",
   "desc": "DEU advance from Vitebsk Province, BLR, and from Smolensk Province, RUS.",
   "result": "",
   "link": ""
 },
 {
   "from": "1941-07-10",
   "till": "",
   "country": "",
   "province": "",
   "locality": "",
   "where": "",
   "title": "Our South-Western front counterattacks and seize the highway obstructing deliveries of DEU.",
   "desc": "",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D0%B8%D1%8E%D0%BB%D1%8C_1941_%D0%B3%D0%BE%D0%B4%D0%B0)#10_.D0.B8.D1.8E.D0.BB.D1.8F_1941_.D0.B3.D0.BE.D0.B4.D0.B0._19-.D0.B9_.D0.B4.D0.B5.D0.BD.D1.8C_.D0.B2.D0.BE.D0.B9.D0.BD.D1.8B"
 },
 {
   "from": "1941-07-10",
   "till": "",
   "country": "",
   "province": "",
   "locality": "",
   "where": "",
   "title": "UKR, Zhitomir Province, south of Berdichev. We strike DEU and reach south-west of the city.",
   "desc": "",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D0%B8%D1%8E%D0%BB%D1%8C_1941_%D0%B3%D0%BE%D0%B4%D0%B0)#10_.D0.B8.D1.8E.D0.BB.D1.8F_1941_.D0.B3.D0.BE.D0.B4.D0.B0._19-.D0.B9_.D0.B4.D0.B5.D0.BD.D1.8C_.D0.B2.D0.BE.D0.B9.D0.BD.D1.8B"
 },
 {
   "from": "1941-07-11",
   "till": "",
   "country": "",
   "province": "",
   "locality": "",
   "where": "",
   "title": "BLR Vitebsk Province. DEU breake through our defence between the armies of the Western Front and ceize Vitebsk.",
   "desc": "",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D0%B8%D1%8E%D0%BB%D1%8C_1941_%D0%B3%D0%BE%D0%B4%D0%B0)#11_.D0.B8.D1.8E.D0.BB.D1.8F_1941_.D0.B3.D0.BE.D0.B4.D0.B0._20-.D0.B9_.D0.B4.D0.B5.D0.BD.D1.8C_.D0.B2.D0.BE.D0.B9.D0.BD.D1.8B"
 },
 {
   "from": "1941-07-11",
   "till": "",
   "country": "",
   "province": "",
   "locality": "",
   "where": "",
   "title": "BLR, Mogilev Province. DEU cross river Dnieper south and north of Mogilev.",
   "desc": "",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D0%B8%D1%8E%D0%BB%D1%8C_1941_%D0%B3%D0%BE%D0%B4%D0%B0)#11_.D0.B8.D1.8E.D0.BB.D1.8F_1941_.D0.B3.D0.BE.D0.B4.D0.B0._20-.D0.B9_.D0.B4.D0.B5.D0.BD.D1.8C_.D0.B2.D0.BE.D0.B9.D0.BD.D1.8B"
 },
 {
   "from": "1941-07-11",
   "till": "",
   "country": "",
   "province": "",
   "locality": "",
   "where": "",
   "title": "UKR, Kiev Province. DEU come to river Irpen. South Western Front are split in two.",
   "desc": "",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D0%B8%D1%8E%D0%BB%D1%8C_1941_%D0%B3%D0%BE%D0%B4%D0%B0)#11_.D0.B8.D1.8E.D0.BB.D1.8F_1941_.D0.B3.D0.BE.D0.B4.D0.B0._20-.D0.B9_.D0.B4.D0.B5.D0.BD.D1.8C_.D0.B2.D0.BE.D0.B9.D0.BD.D1.8B"
 },
 {
   "from": "1941-07-25",
   "till": "1941-12-31",
   "country": "",
   "province": "",
   "locality": "",
   "where": "",
   "title": "Vitebsk Ghetto",
   "desc": "BLR, Vitebsk Province.",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%92%D0%B8%D1%82%D0%B5%D0%B1%D1%81%D0%BA%D0%BE%D0%B5_%D0%B3%D0%B5%D1%82%D1%82%D0%BE"
 },
 {
   "from": "1941-07-11",
   "till": "1944-06-26",
   "country": "",
   "province": "",
   "locality": "",
   "where": "",
   "title": "Vitebsk Occupation",
   "desc": "BLR, Vitebsk Province. Germans are killing peaceful citizens, and raiding Jews. They throw the bodies into the Ilovsky pit.",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%92%D0%B8%D1%82%D0%B5%D0%B1%D1%81%D0%BA%D0%BE%D0%B5_%D0%B3%D0%B5%D1%82%D1%82%D0%BE"
 },
 {
   "from": "1941-07-17",
   "till": "",
   "country": "",
   "province": "",
   "locality": "",
   "where": "",
   "title": "",
   "desc": "BLR, Vitebsk Province, Vitebsk. Germans order all Jews to get registered.",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%92%D0%B8%D1%82%D0%B5%D0%B1%D1%81%D0%BA%D0%BE%D0%B5_%D0%B3%D0%B5%D1%82%D1%82%D0%BE"
 },
 {
   "from": "1941-07-11",
   "till": "1941-07-14",
   "country": "",
   "province": "",
   "locality": "",
   "where": "",
   "title": "Germans are shooting Jews caught during round downs.",
   "desc": "BLR, Vitebsk Province, Vitebsk. Germans are catching Jews everywhere.",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%92%D0%B8%D1%82%D0%B5%D0%B1%D1%81%D0%BA%D0%BE%D0%B5_%D0%B3%D0%B5%D1%82%D1%82%D0%BE"
 },
 {
   "from": "1941-07-20",
   "till": "",
   "country": "",
   "province": "",
   "locality": "",
   "where": "",
   "title": "Mass execution of Jews by Nazis.",
   "desc": "BLR. Vitebsk Province.",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%92%D0%B8%D1%82%D0%B5%D0%B1%D1%81%D0%BA%D0%BE%D0%B5_%D0%B3%D0%B5%D1%82%D1%82%D0%BE"
 },
 {
   "from": "1941-07-24",
   "till": "",
   "country": "",
   "province": "",
   "locality": "",
   "where": "",
   "title": "Nazis shoot a group of 400 Jewish men.",
   "desc": "BLR. Vitebsk Province. Reason: \"Arson of the city\"",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%92%D0%B8%D1%82%D0%B5%D0%B1%D1%81%D0%BA%D0%BE%D0%B5_%D0%B3%D0%B5%D1%82%D1%82%D0%BE"
 },
 {
   "from": "1941-07-20",
   "till": "1941-07-25",
   "country": "",
   "province": "",
   "locality": "",
   "where": "",
   "title": "Nazis are killing ghetto prisoners",
   "desc": "BLR. Vitebsk Province. Reason: \"Fighting an epidemic\".",
   "result": "3000 prisoners are killed",
   "link": "https://ru.wikipedia.org/wiki/%D0%92%D0%B8%D1%82%D0%B5%D0%B1%D1%81%D0%BA%D0%BE%D0%B5_%D0%B3%D0%B5%D1%82%D1%82%D0%BE"
 },
 {
   "from": "1941-09-04",
   "till": "",
   "country": "",
   "province": "",
   "locality": "",
   "where": "",
   "title": "Nazi einsatzkommando 9 shoot 149 Jews.",
   "desc": "BLR, Vitebsk Province. ",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%92%D0%B8%D1%82%D0%B5%D0%B1%D1%81%D0%BA%D0%BE%D0%B5_%D0%B3%D0%B5%D1%82%D1%82%D0%BE"
 },
 {
   "from": "1941-07-12",
   "till": "",
   "country": "",
   "province": "",
   "locality": "",
   "where": "",
   "title": "Moscow, RUS. USSR and GBR sign an agreement",
   "desc": "on joint actions in the war against Germany",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D0%B8%D1%8E%D0%BB%D1%8C_1941_%D0%B3%D0%BE%D0%B4%D0%B0)#12_.D0.B8.D1.8E.D0.BB.D1.8F_1941_.D0.B3.D0.BE.D0.B4.D0.B0._21-.D0.B9_.D0.B4.D0.B5.D0.BD.D1.8C_.D0.B2.D0.BE.D0.B9.D0.BD.D1.8B"
 },
 {
   "from": "1941-07-12",
   "till": "",
   "country": "",
   "province": "",
   "locality": "",
   "where": "",
   "title": "",
   "desc": "Vitebsk Province, BLR: our Western Front launches an offensive to liberate Vitebsk.",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D0%B8%D1%8E%D0%BB%D1%8C_1941_%D0%B3%D0%BE%D0%B4%D0%B0)#12_.D0.B8.D1.8E.D0.BB.D1.8F_1941_.D0.B3.D0.BE.D0.B4.D0.B0._21-.D0.B9_.D0.B4.D0.B5.D0.BD.D1.8C_.D0.B2.D0.BE.D0.B9.D0.BD.D1.8B"
 },
 {
   "from": "1941-07-12",
   "till": "",
   "country": "",
   "province": "",
   "locality": "",
   "where": "",
   "title": "",
   "desc": "Vitebsk Province, BLR: We are attacking DEU from North and East. DEU crash into our defense south of Polotsk and rush toward Nevel (Pskov Province, RUS).",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D0%B8%D1%8E%D0%BB%D1%8C_1941_%D0%B3%D0%BE%D0%B4%D0%B0)#12_.D0.B8.D1.8E.D0.BB.D1.8F_1941_.D0.B3.D0.BE.D0.B4.D0.B0._21-.D0.B9_.D0.B4.D0.B5.D0.BD.D1.8C_.D0.B2.D0.BE.D0.B9.D0.BD.D1.8B"
 },
 {
   "from": "1941-07-12",
   "till": "",
   "country": "",
   "province": "",
   "locality": "",
   "where": "",
   "title": "",
   "desc": "BLR, Smolensk and Mogilev Provinces: DEU advance, surrounding our Army 13.",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D0%B8%D1%8E%D0%BB%D1%8C_1941_%D0%B3%D0%BE%D0%B4%D0%B0)#12_.D0.B8.D1.8E.D0.BB.D1.8F_1941_.D0.B3.D0.BE.D0.B4.D0.B0._21-.D0.B9_.D0.B4.D0.B5.D0.BD.D1.8C_.D0.B2.D0.BE.D0.B9.D0.BD.D1.8B"
 },
 {
   "from": "1941-07-12",
   "till": "",
   "country": "",
   "province": "",
   "locality": "",
   "where": "",
   "title": "",
   "desc": "UKR, Zhitomir Province: we are attacking DEU from South-East, South, South-West.",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D0%B8%D1%8E%D0%BB%D1%8C_1941_%D0%B3%D0%BE%D0%B4%D0%B0)#12_.D0.B8.D1.8E.D0.BB.D1.8F_1941_.D0.B3.D0.BE.D0.B4.D0.B0._21-.D0.B9_.D0.B4.D0.B5.D0.BD.D1.8C_.D0.B2.D0.BE.D0.B9.D0.BD.D1.8B"
 },
 {
   "from": "1941-07-12",
   "till": "",
   "country": "",
   "province": "",
   "locality": "",
   "where": "",
   "title": "",
   "desc": "UKR, Kiev Province: DEU are advancing toward Belaya Tserkov, surrounding Kiev from south",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D0%B8%D1%8E%D0%BB%D1%8C_1941_%D0%B3%D0%BE%D0%B4%D0%B0)#12_.D0.B8.D1.8E.D0.BB.D1.8F_1941_.D0.B3.D0.BE.D0.B4.D0.B0._21-.D0.B9_.D0.B4.D0.B5.D0.BD.D1.8C_.D0.B2.D0.BE.D0.B9.D0.BD.D1.8B"
 },
 {
   "from": "1941-07-12",
   "till": "",
   "country": "",
   "province": "",
   "locality": "",
   "where": "",
   "title": "",
   "desc": "MDA: Our Southern Front retreats beyond Dniester river.",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D0%B8%D1%8E%D0%BB%D1%8C_1941_%D0%B3%D0%BE%D0%B4%D0%B0)#12_.D0.B8.D1.8E.D0.BB.D1.8F_1941_.D0.B3.D0.BE.D0.B4.D0.B0._21-.D0.B9_.D0.B4.D0.B5.D0.BD.D1.8C_.D0.B2.D0.BE.D0.B9.D0.BD.D1.8B"
 },
 {
   "from": "1941-12-19",
   "till": "",
   "country": "",
   "province": "",
   "locality": "",
   "where": "",
   "title": "Germans kill the last prisoners of Vitebsk Ghetto.",
   "desc": "BLR, Vitebsk Province, Vitebsk: Einsatzgruppe B kills off the last 4090 prisoners of Vitebsk Ghetto. SD reports about complete liquidation of the Ghetto.",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%92%D0%B8%D1%82%D0%B5%D0%B1%D1%81%D0%BA%D0%BE%D0%B5_%D0%B3%D0%B5%D1%82%D1%82%D0%BE"
 },
 {
   "from": "1941-07-13",
   "till": "",
   "country": "",
   "province": "",
   "locality": "",
   "where": "",
   "title": "",
   "desc": "RUS, Smolensk Province: Armour group 3 advancing toward Smolensk from North-West reach Demidov, Velish. ",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D0%B8%D1%8E%D0%BB%D1%8C_1941_%D0%B3%D0%BE%D0%B4%D0%B0)#13_.D0.B8.D1.8E.D0.BB.D1.8F_1941_.D0.B3.D0.BE.D0.B4.D0.B0._22-.D0.B9_.D0.B4.D0.B5.D0.BD.D1.8C_.D0.B2.D0.BE.D0.B9.D0.BD.D1.8B"
 },
 {
   "from": "1941-07-13",
   "till": "",
   "country": "",
   "province": "",
   "locality": "",
   "where": "",
   "title": "",
   "desc": "BLR, Mogilyov Province: Western Front's army 21 (F.I.Kuznetsov) launches an offensive with the mission of taking Bykhov and Bobruysk and come to the enemy rear in the Mogilyov-Smolensk direction. DEU armor division 3 attack our infantry division 172 defending Mogilyov, but after a 10-hour battle it was stopped. Motorized corps 24's armor division 4 repel all our attacks near Stary Bykhov, break through in the direction of Krichev. ",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D0%B8%D1%8E%D0%BB%D1%8C_1941_%D0%B3%D0%BE%D0%B4%D0%B0)#13_.D0.B8.D1.8E.D0.BB.D1.8F_1941_.D0.B3.D0.BE.D0.B4.D0.B0._22-.D0.B9_.D0.B4.D0.B5.D0.BD.D1.8C_.D0.B2.D0.BE.D0.B9.D0.BD.D1.8B"
 },
 {
   "from": "1941-07-13",
   "till": "",
   "country": "",
   "province": "",
   "locality": "",
   "where": "",
   "title": "",
   "desc": "Rifle corps 63 (Petrovsky) cross Dnieper and come to the western outskirts of Rogachev and Zhlobin, throwing the germans 20-30 km away. To south: Corps 66' division 232 moved forward 80 km and ceize bank sides on rivers Berezina and Ptich. ",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D0%B8%D1%8E%D0%BB%D1%8C_1941_%D0%B3%D0%BE%D0%B4%D0%B0)#13_.D0.B8.D1.8E.D0.BB.D1.8F_1941_.D0.B3.D0.BE.D0.B4.D0.B0._22-.D0.B9_.D0.B4.D0.B5.D0.BD.D1.8C_.D0.B2.D0.BE.D0.B9.D0.BD.D1.8B"
 },
 {
   "from": "1941-07-13",
   "till": "",
   "country": "",
   "province": "",
   "locality": "",
   "where": "",
   "title": "",
   "desc": "UKR, Zhitomir Province: DEU army 6 and armor group 1 are repelling our attacks near Berdichev. ",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D0%B8%D1%8E%D0%BB%D1%8C_1941_%D0%B3%D0%BE%D0%B4%D0%B0)#13_.D0.B8.D1.8E.D0.BB.D1.8F_1941_.D0.B3.D0.BE.D0.B4.D0.B0._22-.D0.B9_.D0.B4.D0.B5.D0.BD.D1.8C_.D0.B2.D0.BE.D0.B9.D0.BD.D1.8B"
 },
 {
   "from": "1941-07-13",
   "till": "",
   "country": "",
   "province": "",
   "locality": "",
   "where": "",
   "title": "",
   "desc": "UKR, Kiev Province: DEU Armor group 1's armor divisions 13 and 14 reach regions west of and south of Kiev.",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D0%B8%D1%8E%D0%BB%D1%8C_1941_%D0%B3%D0%BE%D0%B4%D0%B0)#13_.D0.B8.D1.8E.D0.BB.D1.8F_1941_.D0.B3.D0.BE.D0.B4.D0.B0._22-.D0.B9_.D0.B4.D0.B5.D0.BD.D1.8C_.D0.B2.D0.BE.D0.B9.D0.BD.D1.8B"
 },
 {
   "from": "1941-07-13",
   "till": "",
   "country": "",
   "province": "",
   "locality": "",
   "where": "",
   "title": "DEU chief of general staff of army Franz Halder",
   "desc": "The losses of the DEU army are 3.68% (92,120), daily average: 4,187.",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D0%B8%D1%8E%D0%BB%D1%8C_1941_%D0%B3%D0%BE%D0%B4%D0%B0)#13_.D0.B8.D1.8E.D0.BB.D1.8F_1941_.D0.B3.D0.BE.D0.B4.D0.B0._22-.D0.B9_.D0.B4.D0.B5.D0.BD.D1.8C_.D0.B2.D0.BE.D0.B9.D0.BD.D1.8B"
 },
 {
   "from": "1941-07-13",
   "till": "",
   "country": "",
   "province": "",
   "locality": "",
   "where": "",
   "title": "",
   "desc": "",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D0%B8%D1%8E%D0%BB%D1%8C_1941_%D0%B3%D0%BE%D0%B4%D0%B0)#13_.D0.B8.D1.8E.D0.BB.D1.8F_1941_.D0.B3.D0.BE.D0.B4.D0.B0._22-.D0.B9_.D0.B4.D0.B5.D0.BD.D1.8C_.D0.B2.D0.BE.D0.B9.D0.BD.D1.8B"
 },
 {
   "from": "1941-07-13",
   "till": "",
   "country": "",
   "province": "",
   "locality": "",
   "where": "",
   "title": "",
   "desc": "BLR, Vitebsk Province: DEU armor group 3 breaks through to the Smolensk highway and take Rudnya.",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D0%B8%D1%8E%D0%BB%D1%8C_1941_%D0%B3%D0%BE%D0%B4%D0%B0)#23_.D0.B8.D1.8E.D0.BB.D1.8F_1941_.D0.B3.D0.BE.D0.B4.D0.B0._32-.D0.B9_.D0.B4.D0.B5.D0.BD.D1.8C_.D0.B2.D0.BE.D0.B9.D0.BD.D1.8B"
 },
 {
   "from": "1941-07-23",
   "till": "",
   "country": "",
   "province": "",
   "locality": "",
   "where": "",
   "title": "",
   "desc": "Советские войска атакуют со всех сторон наступающую на Умань 1-ю танковую группу. Немецкие войска ведут наступление против 26-й армии Юго-Западного фронта.",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D0%B8%D1%8E%D0%BB%D1%8C_1941_%D0%B3%D0%BE%D0%B4%D0%B0)#23_.D0.B8.D1.8E.D0.BB.D1.8F_1941_.D0.B3.D0.BE.D0.B4.D0.B0._32-.D0.B9_.D0.B4.D0.B5.D0.BD.D1.8C_.D0.B2.D0.BE.D0.B9.D0.BD.D1.8B"
 },
 {
   "from": "1941-07-22",
   "till": "",
   "country": "",
   "province": "",
   "locality": "",
   "where": "",
   "title": "",
   "desc": "By decision of the Military Collegium of the USSR Supreme Court, for the defeat of the Western Front troops in the initial period of the war these persons are sentenced to be shot: the commander of the Western Front Dmitry Pavlov, Chief of Staff Vladimir Klimovskih, communications officer Andrey Grigoriev, the commander of Army 4  Alexander Korobkov.",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D0%B8%D1%8E%D0%BB%D1%8C_1941_%D0%B3%D0%BE%D0%B4%D0%B0)#22_.D0.B8.D1.8E.D0.BB.D1.8F_1941_.D0.B3.D0.BE.D0.B4.D0.B0._31-.D0.B9_.D0.B4.D0.B5.D0.BD.D1.8C_.D0.B2.D0.BE.D0.B9.D0.BD.D1.8B"
 },
 {
   "from": "1941-07-22",
   "till": "",
   "country": "",
   "province": "",
   "locality": "",
   "where": "",
   "title": "",
   "desc": "BLR, Gomel Province: На бобруйском направлении 21-я армия Западного фронта отошла к Днепру на участке от Рогачёва до Жлобина.",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D0%B8%D1%8E%D0%BB%D1%8C_1941_%D0%B3%D0%BE%D0%B4%D0%B0)#22_.D0.B8.D1.8E.D0.BB.D1.8F_1941_.D0.B3.D0.BE.D0.B4.D0.B0._31-.D0.B9_.D0.B4.D0.B5.D0.BD.D1.8C_.D0.B2.D0.BE.D0.B9.D0.BD.D1.8B"
 },
 {
   "from": "1941-07-22",
   "till": "",
   "country": "",
   "province": "",
   "locality": "",
   "where": "",
   "title": "",
   "desc": "UKR, Kiev Province: 26-я армия Юго-Западного фронта оставила Фастов.",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D0%B8%D1%8E%D0%BB%D1%8C_1941_%D0%B3%D0%BE%D0%B4%D0%B0)#22_.D0.B8.D1.8E.D0.BB.D1.8F_1941_.D0.B3.D0.BE.D0.B4.D0.B0._31-.D0.B9_.D0.B4.D0.B5.D0.BD.D1.8C_.D0.B2.D0.BE.D0.B9.D0.BD.D1.8B"
 },
 {
   "from": "1941-07-21",
   "till": "",
   "country": "",
   "province": "",
   "locality": "",
   "where": "",
   "title": "",
   "desc": "В ответ на послание И. В. Сталина от 18 июля У. Черчилль сообщил о невозможности открытия второго фронта против Германии на севере Франции и на севере Норвегии в 1941 году.",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D0%B8%D1%8E%D0%BB%D1%8C_1941_%D0%B3%D0%BE%D0%B4%D0%B0)#21_.D0.B8.D1.8E.D0.BB.D1.8F_1941_.D0.B3.D0.BE.D0.B4.D0.B0._30-.D0.B9_.D0.B4.D0.B5.D0.BD.D1.8C_.D0.B2.D0.BE.D0.B9.D0.BD.D1.8B"
 },
 {
   "from": "1941-07-21",
   "till": "",
   "country": "",
   "province": "",
   "locality": "",
   "where": "",
   "title": "",
   "desc": "отражён первый налет немецкой авиации на Москву.",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D0%B8%D1%8E%D0%BB%D1%8C_1941_%D0%B3%D0%BE%D0%B4%D0%B0)#21_.D0.B8.D1.8E.D0.BB.D1.8F_1941_.D0.B3.D0.BE.D0.B4.D0.B0._30-.D0.B9_.D0.B4.D0.B5.D0.BD.D1.8C_.D0.B2.D0.BE.D0.B9.D0.BD.D1.8B"
 },
 {
   "from": "1941-07-21",
   "till": "",
   "country": "",
   "province": "",
   "locality": "",
   "where": "",
   "title": "",
   "desc": "RUS, Pskov Province: Войска Западного фронта в результате контрудара освободили город Великие Луки и отбросили соединения 3-й танковой группы к юго-западу. Началась 33-дневная героическая оборона города. | Ставка ВГК приняла решение о нанесении ударов 5 армейскими оперативными группами, созданными на базе 29, 30, 24 и 28-й армий фронта резервных армий, из районов Белого, Ярцева и Рославля по сходящимся направлениям на Смоленск в целях уничтожения смоленской группировки противника.",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D0%B8%D1%8E%D0%BB%D1%8C_1941_%D0%B3%D0%BE%D0%B4%D0%B0)#21_.D0.B8.D1.8E.D0.BB.D1.8F_1941_.D0.B3.D0.BE.D0.B4.D0.B0._30-.D0.B9_.D0.B4.D0.B5.D0.BD.D1.8C_.D0.B2.D0.BE.D0.B9.D0.BD.D1.8B"
 },
 {
   "from": "1941-07-21",
   "till": "1941-08-23",
   "country": "",
   "province": "",
   "locality": "",
   "where": "",
   "title": "",
   "desc": "RUS, Pskov Province: The defence of the city of Velikie Luki",
   "result": "The 33 days of defense. The city is virtually rased to the ground.",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D0%B8%D1%8E%D0%BB%D1%8C_1941_%D0%B3%D0%BE%D0%B4%D0%B0)#21_.D0.B8.D1.8E.D0.BB.D1.8F_1941_.D0.B3.D0.BE.D0.B4.D0.B0._30-.D0.B9_.D0.B4.D0.B5.D0.BD.D1.8C_.D0.B2.D0.BE.D0.B9.D0.BD.D1.8B"
 },
 {
   "from": "1941-07-21",
   "till": "",
   "country": "",
   "province": "",
   "locality": "",
   "where": "",
   "title": "",
   "desc": "UKR, Kiev Province: Механизированные соединения Юго-Западного фронта, перегруппированные с южного фронта в район Умани, нанесли контрудар по войскам противника и отбросили их на 40 километров к северу.",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D0%B8%D1%8E%D0%BB%D1%8C_1941_%D0%B3%D0%BE%D0%B4%D0%B0)#21_.D0.B8.D1.8E.D0.BB.D1.8F_1941_.D0.B3.D0.BE.D0.B4.D0.B0._30-.D0.B9_.D0.B4.D0.B5.D0.BD.D1.8C_.D0.B2.D0.BE.D0.B9.D0.BD.D1.8B"
 },
 {
   "from": "1941-07-21",
   "till": "",
   "country": "",
   "province": "",
   "locality": "",
   "where": "",
   "title": "",
   "desc": "MDA: Советские войска оставили Бельцы.",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D0%B8%D1%8E%D0%BB%D1%8C_1941_%D0%B3%D0%BE%D0%B4%D0%B0)#21_.D0.B8.D1.8E.D0.BB.D1.8F_1941_.D0.B3.D0.BE.D0.B4.D0.B0._30-.D0.B9_.D0.B4.D0.B5.D0.BD.D1.8C_.D0.B2.D0.BE.D0.B9.D0.BD.D1.8B"
 },
 {
   "from": "1941-07-21",
   "till": "",
   "country": "",
   "province": "",
   "locality": "",
   "where": "",
   "title": "Совинформбюро",
   "desc": " В течение 21 июля развивались упорные бои на ПОЛОЦКО-НЕВЕЛЬСКОМ, СМОЛЕНСКОМ и НОВОГРАД-ВОЛЫНСКОМ направлениях.",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D0%B8%D1%8E%D0%BB%D1%8C_1941_%D0%B3%D0%BE%D0%B4%D0%B0)#21_.D0.B8.D1.8E.D0.BB.D1.8F_1941_.D0.B3.D0.BE.D0.B4.D0.B0._30-.D0.B9_.D0.B4.D0.B5.D0.BD.D1.8C_.D0.B2.D0.BE.D0.B9.D0.BD.D1.8B"
 },
 {
   "from": "1941-07-20",
   "till": "",
   "country": "",
   "province": "",
   "locality": "",
   "where": "",
   "title": "RUS, Pskov Province",
   "desc": "Части 22-й армии Западного фронта прорвали кольцо окружения в районе Невеля. 3-я танковая группа заняла Великие Луки.",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D0%B8%D1%8E%D0%BB%D1%8C_1941_%D0%B3%D0%BE%D0%B4%D0%B0)#20_.D0.B8.D1.8E.D0.BB.D1.8F_1941_.D0.B3.D0.BE.D0.B4.D0.B0._29-.D0.B9_.D0.B4.D0.B5.D0.BD.D1.8C_.D0.B2.D0.BE.D0.B9.D0.BD.D1.8B"
 },
 {
   "from": "1941-07-20",
   "till": "",
   "country": "",
   "province": "",
   "locality": "",
   "where": "",
   "title": "",
   "desc": "Ставка ВГК издала директиву о вводе в сражение на Западном направлении эшелона резервных армий. 29-я, 30-я, 24-я, 28-я армии сосредоточенны на линии Осташков—Брянск.",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D0%B8%D1%8E%D0%BB%D1%8C_1941_%D0%B3%D0%BE%D0%B4%D0%B0)#20_.D0.B8.D1.8E.D0.BB.D1.8F_1941_.D0.B3.D0.BE.D0.B4.D0.B0._29-.D0.B9_.D0.B4.D0.B5.D0.BD.D1.8C_.D0.B2.D0.BE.D0.B9.D0.BD.D1.8B"
 },
 {
   "from": "1941-07-20",
   "till": "",
   "country": "",
   "province": "",
   "locality": "",
   "where": "",
   "title": "UKR, Kiev Province",
   "desc": " 1-я танковая группа отражает атаки 26-й армии Юго-Западного фронта на рубеже Фастов, Белая Церковь, Тараща.",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D0%B8%D1%8E%D0%BB%D1%8C_1941_%D0%B3%D0%BE%D0%B4%D0%B0)#20_.D0.B8.D1.8E.D0.BB.D1.8F_1941_.D0.B3.D0.BE.D0.B4.D0.B0._29-.D0.B9_.D0.B4.D0.B5.D0.BD.D1.8C_.D0.B2.D0.BE.D0.B9.D0.BD.D1.8B"
 },
 {
   "from": "1941-07-20",
   "till": "",
   "country": "",
   "province": "",
   "locality": "",
   "where": "",
   "title": "Совинформбюро",
   "desc": "В течение 20 июля продолжались напряжённые бои на ПСКОВСКОМ, ПОЛОЦКО-НЕВЕЛЬСКОМ, СМОЛЕНСКОМ И НОВОГРАД-ВОЛЫНСКОМ направлениях.",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D0%B8%D1%8E%D0%BB%D1%8C_1941_%D0%B3%D0%BE%D0%B4%D0%B0)#20_.D0.B8.D1.8E.D0.BB.D1.8F_1941_.D0.B3.D0.BE.D0.B4.D0.B0._29-.D0.B9_.D0.B4.D0.B5.D0.BD.D1.8C_.D0.B2.D0.BE.D0.B9.D0.BD.D1.8B"
 },
 {
   "from": "1941-07-19",
   "till": "",
   "country": "",
   "province": "",
   "locality": "",
   "where": "",
   "title": "",
   "desc": "И. В. Сталин назначен наркомом обороны СССР.",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D0%B8%D1%8E%D0%BB%D1%8C_1941_%D0%B3%D0%BE%D0%B4%D0%B0)#19_.D0.B8.D1.8E.D0.BB.D1.8F_1941_.D0.B3.D0.BE.D0.B4.D0.B0._28-.D0.B9_.D0.B4.D0.B5.D0.BD.D1.8C_.D0.B2.D0.BE.D0.B9.D0.BD.D1.8B"
 },
 {
   "from": "1941-07-19",
   "till": "",
   "country": "",
   "province": "",
   "locality": "",
   "where": "",
   "title": "",
   "desc": "Гитлер издал директиву № 33, в которой предписывалось передать 3-ю танковую группу в распоряжение Группы армий «Север», а 2-ю танковую группу —Группы армий «Юг». Наступление на Москву предписывалось продолжать силами пехотных соединений группы армий «Центр».",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D0%B8%D1%8E%D0%BB%D1%8C_1941_%D0%B3%D0%BE%D0%B4%D0%B0)#19_.D0.B8.D1.8E.D0.BB.D1.8F_1941_.D0.B3.D0.BE.D0.B4.D0.B0._28-.D0.B9_.D0.B4.D0.B5.D0.BD.D1.8C_.D0.B2.D0.BE.D0.B9.D0.BD.D1.8B"
 },
 {
   "from": "1941-07-19",
   "till": "",
   "country": "",
   "province": "",
   "locality": "",
   "where": "",
   "title": "",
   "desc": "Группа армий «Север» прекратила наступление на Ленинград до подхода к Лужскому рубежу 18-й армии и приведения в порядок частей 4-й танковой группы.",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D0%B8%D1%8E%D0%BB%D1%8C_1941_%D0%B3%D0%BE%D0%B4%D0%B0)#19_.D0.B8.D1.8E.D0.BB.D1.8F_1941_.D0.B3.D0.BE.D0.B4.D0.B0._28-.D0.B9_.D0.B4.D0.B5.D0.BD.D1.8C_.D0.B2.D0.BE.D0.B9.D0.BD.D1.8B"
 },
 {
   "from": "1941-07-19",
   "till": "",
   "country": "",
   "province": "",
   "locality": "",
   "where": "",
   "title": "RUS, Smolensk Province",
   "desc": "Немецкая 10-я танковая дивизия продвинулась на юго-восток от Смоленска и заняла Ельню.",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D0%B8%D1%8E%D0%BB%D1%8C_1941_%D0%B3%D0%BE%D0%B4%D0%B0)#19_.D0.B8.D1.8E.D0.BB.D1.8F_1941_.D0.B3.D0.BE.D0.B4.D0.B0._28-.D0.B9_.D0.B4.D0.B5.D0.BD.D1.8C_.D0.B2.D0.BE.D0.B9.D0.BD.D1.8B"
 },
 {
   "from": "1941-07-19",
   "till": "",
   "country": "",
   "province": "",
   "locality": "",
   "where": "",
   "title": "RUS, Smolensk Province",
   "desc": "19-я армия освободила город Ярцево. Это первый город, отбитый у немецких войск.",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D0%B8%D1%8E%D0%BB%D1%8C_1941_%D0%B3%D0%BE%D0%B4%D0%B0)#19_.D0.B8.D1.8E.D0.BB.D1.8F_1941_.D0.B3.D0.BE.D0.B4.D0.B0._28-.D0.B9_.D0.B4.D0.B5.D0.BD.D1.8C_.D0.B2.D0.BE.D0.B9.D0.BD.D1.8B"
 },
 {
   "from": "1941-07-19",
   "till": "",
   "country": "",
   "province": "",
   "locality": "",
   "where": "",
   "title": "UKR, Kiev Province",
   "desc": "26-я армия Юго-Западного фронта нанесла удар во фланг 1-й танковой группе.",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D0%B8%D1%8E%D0%BB%D1%8C_1941_%D0%B3%D0%BE%D0%B4%D0%B0)#19_.D0.B8.D1.8E.D0.BB.D1.8F_1941_.D0.B3.D0.BE.D0.B4.D0.B0._28-.D0.B9_.D0.B4.D0.B5.D0.BD.D1.8C_.D0.B2.D0.BE.D0.B9.D0.BD.D1.8B"
 },
 {
   "from": "1941-07-19",
   "till": "",
   "country": "",
   "province": "",
   "locality": "",
   "where": "",
   "title": "MDA",
   "desc": "9-я и Приморская армии с 19 июля начали отход за Днестр.",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D0%B8%D1%8E%D0%BB%D1%8C_1941_%D0%B3%D0%BE%D0%B4%D0%B0)#19_.D0.B8.D1.8E.D0.BB.D1.8F_1941_.D0.B3.D0.BE.D0.B4.D0.B0._28-.D0.B9_.D0.B4.D0.B5.D0.BD.D1.8C_.D0.B2.D0.BE.D0.B9.D0.BD.D1.8B"
 },
 {
   "from": "1941-07-19",
   "till": "",
   "country": "",
   "province": "",
   "locality": "",
   "where": "",
   "title": "",
   "desc": "Корабли Дунайской военной флотилии эвакуировали войска с плацдармов на румынской территории, захваченных 24—25 июня Дунайскими десантами, и перебазировались в Одессу.",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D0%B8%D1%8E%D0%BB%D1%8C_1941_%D0%B3%D0%BE%D0%B4%D0%B0)#19_.D0.B8.D1.8E.D0.BB.D1.8F_1941_.D0.B3.D0.BE.D0.B4.D0.B0._28-.D0.B9_.D0.B4.D0.B5.D0.BD.D1.8C_.D0.B2.D0.BE.D0.B9.D0.BD.D1.8B"
 },
 {
   "from": "1941-07-19",
   "till": "",
   "country": "",
   "province": "",
   "locality": "",
   "where": "",
   "title": "Совинформбюро",
   "desc": " В течение 19 июля шли ожесточённые бои на ПСКОВСКОМ, ПОЛОЦКО-НЕВЕЛЬСКОМ, СМОЛЕНСКОМ И НОВОГРАД-ВОЛЫНСКОМ направлениях.",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D0%B8%D1%8E%D0%BB%D1%8C_1941_%D0%B3%D0%BE%D0%B4%D0%B0)#19_.D0.B8.D1.8E.D0.BB.D1.8F_1941_.D0.B3.D0.BE.D0.B4.D0.B0._28-.D0.B9_.D0.B4.D0.B5.D0.BD.D1.8C_.D0.B2.D0.BE.D0.B9.D0.BD.D1.8B"
 },
 {
   "from": "1941-07-18",
   "till": "",
   "country": "",
   "province": "",
   "locality": "",
   "where": "",
   "title": "RUS, Moscow",
   "desc": "The CC of the AUCP(b) [Central Committee of the All-Union Communist Party of the Bolsheviks] adopt a regulation \"On organizing the fight in the German troops' rear\"",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D0%B8%D1%8E%D0%BB%D1%8C_1941_%D0%B3%D0%BE%D0%B4%D0%B0)#18_.D0.B8.D1.8E.D0.BB.D1.8F_1941_.D0.B3.D0.BE.D0.B4.D0.B0._27-.D0.B9_.D0.B4.D0.B5.D0.BD.D1.8C_.D0.B2.D0.BE.D0.B9.D0.BD.D1.8B"
 },
 {
   "from": "1941-07-18",
   "till": "",
   "country": "",
   "province": "",
   "locality": "",
   "where": "",
   "title": "RUS, Moscow",
   "desc": "USSR CPR [Council of People's Commissars] adopt a regulation «О введение карточек на некоторые продовольственные и промышленные товары в городах Москве, Ленинграде и в отдельных городах и пригородах Московской и Ленинградской областей», «О сдаче государству сушёных овощей и сушёного картофеля колхозами, колхозными дворами и единоличными хозяйствами по обязательным поставкам».",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D0%B8%D1%8E%D0%BB%D1%8C_1941_%D0%B3%D0%BE%D0%B4%D0%B0)#18_.D0.B8.D1.8E.D0.BB.D1.8F_1941_.D0.B3.D0.BE.D0.B4.D0.B0._27-.D0.B9_.D0.B4.D0.B5.D0.BD.D1.8C_.D0.B2.D0.BE.D0.B9.D0.BD.D1.8B"
 },
 {
   "from": "1941-07-18",
   "till": "",
   "country": "",
   "province": "",
   "locality": "",
   "where": "",
   "title": "GBR, London",
   "desc": "В Лондоне подписано соглашение «О совместных действиях в войне против фашистской Германии» между правительством СССР и эмигрантским правительством Чехословацкой Республики.",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D0%B8%D1%8E%D0%BB%D1%8C_1941_%D0%B3%D0%BE%D0%B4%D0%B0)#18_.D0.B8.D1.8E.D0.BB.D1.8F_1941_.D0.B3.D0.BE.D0.B4.D0.B0._27-.D0.B9_.D0.B4.D0.B5.D0.BD.D1.8C_.D0.B2.D0.BE.D0.B9.D0.BD.D1.8B"
 },
 {
   "from": "1941-07-18",
   "till": "",
   "country": "",
   "province": "",
   "locality": "",
   "where": "",
   "title": "RUS, Moscow",
   "desc": "И. В. Сталин направил У. Черчиллю послание с предложением о создании второго фронта против фашистской Германии на севере Франции и на севере Норвегии в 1941 году.",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D0%B8%D1%8E%D0%BB%D1%8C_1941_%D0%B3%D0%BE%D0%B4%D0%B0)#18_.D0.B8.D1.8E.D0.BB.D1.8F_1941_.D0.B3.D0.BE.D0.B4.D0.B0._27-.D0.B9_.D0.B4.D0.B5.D0.BD.D1.8C_.D0.B2.D0.BE.D0.B9.D0.BD.D1.8B"
 },
 {
   "from": "1941-07-18",
   "till": "",
   "country": "",
   "province": "",
   "locality": "",
   "where": "",
   "title": "RUS, Leningrad Province",
   "desc": "Кольцо окружения вокруг 56-го мотокорпуса 4-й танковой группы было прорвано дивизией СС «Мёртвая голова». В итоге контрудара 11-й армии в районе Сольцы противник был отброшен на 40 км. Фронт восстановлен на рубеже Дно.",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D0%B8%D1%8E%D0%BB%D1%8C_1941_%D0%B3%D0%BE%D0%B4%D0%B0)#18_.D0.B8.D1.8E.D0.BB.D1.8F_1941_.D0.B3.D0.BE.D0.B4.D0.B0._27-.D0.B9_.D0.B4.D0.B5.D0.BD.D1.8C_.D0.B2.D0.BE.D0.B9.D0.BD.D1.8B"
 },
 {
   "from": "1941-07-18",
   "till": "",
   "country": "",
   "province": "",
   "locality": "",
   "where": "",
   "title": "RUS, Smolensk Province",
   "desc": "Войска Группы армий «Центр» производят перегруппировку с целью создания сплошного фронта в северо-восточном и юго-восточном направлениях.",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D0%B8%D1%8E%D0%BB%D1%8C_1941_%D0%B3%D0%BE%D0%B4%D0%B0)#18_.D0.B8.D1.8E.D0.BB.D1.8F_1941_.D0.B3.D0.BE.D0.B4.D0.B0._27-.D0.B9_.D0.B4.D0.B5.D0.BD.D1.8C_.D0.B2.D0.BE.D0.B9.D0.BD.D1.8B"
 },
 {
   "from": "1941-07-18",
   "till": "",
   "country": "",
   "province": "",
   "locality": "",
   "where": "",
   "title": "",
   "desc": "Ставка ВГК сформировала фронт Можайской линии обороны в составе 32-й, 33-й и 34-й армий. Командование фронтом было возложено на командующего Московским военным округом П. А. Артемьева.",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D0%B8%D1%8E%D0%BB%D1%8C_1941_%D0%B3%D0%BE%D0%B4%D0%B0)#18_.D0.B8.D1.8E.D0.BB.D1.8F_1941_.D0.B3.D0.BE.D0.B4.D0.B0._27-.D0.B9_.D0.B4.D0.B5.D0.BD.D1.8C_.D0.B2.D0.BE.D0.B9.D0.BD.D1.8B"
 },
 {
   "from": "1941-07-18",
   "till": "",
   "country": "",
   "province": "",
   "locality": "",
   "where": "",
   "title": "UKR, Kiev Province",
   "desc": "1-я танковая группа ведет бои в районе Бердичева и Белой Церкви.",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D0%B8%D1%8E%D0%BB%D1%8C_1941_%D0%B3%D0%BE%D0%B4%D0%B0)#18_.D0.B8.D1.8E.D0.BB.D1.8F_1941_.D0.B3.D0.BE.D0.B4.D0.B0._27-.D0.B9_.D0.B4.D0.B5.D0.BD.D1.8C_.D0.B2.D0.BE.D0.B9.D0.BD.D1.8B"
 },
 {
   "from": "1941-07-18",
   "till": "",
   "country": "",
   "province": "",
   "locality": "",
   "where": "",
   "title": "Совинформбюро",
   "desc": "В течение 18 июля происходили большие бои на Псковеко-Порховском, Полоцко-Невельском и Смоленском направлениях. Обе стороны несут большие потери. Танковая группа Гота в сопровождении разведчиков на мотоциклах ворвались с южной стороны в Великие Луки и с ходу захватили город.",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D0%B8%D1%8E%D0%BB%D1%8C_1941_%D0%B3%D0%BE%D0%B4%D0%B0)#18_.D0.B8.D1.8E.D0.BB.D1.8F_1941_.D0.B3.D0.BE.D0.B4.D0.B0._27-.D0.B9_.D0.B4.D0.B5.D0.BD.D1.8C_.D0.B2.D0.BE.D0.B9.D0.BD.D1.8B"
 },
 {
   "from": "1941-07-17",
   "till": "",
   "country": "",
   "province": "",
   "locality": "",
   "where": "",
   "title": "RUS, Smolensk Province",
   "desc": "Оперативная группа войск под командованием К. К. Рокоссовского остановила 7-ю танковую дивизию противника под Ярцево. Город неоднократно переходил из рук в руки.",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D0%B8%D1%8E%D0%BB%D1%8C_1941_%D0%B3%D0%BE%D0%B4%D0%B0)#17_.D0.B8.D1.8E.D0.BB.D1.8F_1941_.D0.B3.D0.BE.D0.B4.D0.B0._26-.D0.B9_.D0.B4.D0.B5.D0.BD.D1.8C_.D0.B2.D0.BE.D0.B9.D0.BD.D1.8B"
 },
 {
   "from": "1941-07-17",
   "till": "",
   "country": "",
   "province": "",
   "locality": "",
   "where": "",
   "title": "UKR, Kiev Province",
   "desc": "1-я танковая группа, прорвавшись в район Белой Церкви и западнее, создала угрозу выхода в тыл 6-й и 12-й армиям Юго-Западного фронта. 17-я немецкая армия прорвалась в стыке Юго-Западного и Южного фронтов на жмеринском направлении. 11-я армия противника, форсировавшая Днестр в районе Могилев-Подольского, угрожала левому флангу нашей 18-й армии.",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D0%B8%D1%8E%D0%BB%D1%8C_1941_%D0%B3%D0%BE%D0%B4%D0%B0)#17_.D0.B8.D1.8E.D0.BB.D1.8F_1941_.D0.B3.D0.BE.D0.B4.D0.B0._26-.D0.B9_.D0.B4.D0.B5.D0.BD.D1.8C_.D0.B2.D0.BE.D0.B9.D0.BD.D1.8B"
 },
 {
   "from": "1941-07-17",
   "till": "",
   "country": "",
   "province": "",
   "locality": "",
   "where": "",
   "title": "Совинформбюро",
   "desc": "During the day our troops were battling на ПСКОВСКО-ПОРХОВСКОМ, ПОЛОЦКОМ, СМОЛЕНСКОМ, НОВОГРАД-ВОЛЫНСКОМ направлениях и на БЕССАРАБСКОМ участке фронта.",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D0%B8%D1%8E%D0%BB%D1%8C_1941_%D0%B3%D0%BE%D0%B4%D0%B0)#17_.D0.B8.D1.8E.D0.BB.D1.8F_1941_.D0.B3.D0.BE.D0.B4.D0.B0._26-.D0.B9_.D0.B4.D0.B5.D0.BD.D1.8C_.D0.B2.D0.BE.D0.B9.D0.BD.D1.8B"
 },
 {
   "from": "1941-07-16",
   "till": "",
   "country": "",
   "province": "",
   "locality": "",
   "where": "",
   "title": "",
   "desc": "The Presidium of the Supreme Council of the USSR passed an Ordinance \"On reorganizing the political propaganda agencies and introduction of the institution of chief enlistment officers (военных комиссаров) in the WPRA (Workers and Peasants' Red Army)\"",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D0%B8%D1%8E%D0%BB%D1%8C_1941_%D0%B3%D0%BE%D0%B4%D0%B0)#16_.D0.B8.D1.8E.D0.BB.D1.8F_1941_.D0.B3.D0.BE.D0.B4.D0.B0._25-.D0.B9_.D0.B4.D0.B5.D0.BD.D1.8C_.D0.B2.D0.BE.D0.B9.D0.BD.D1.8B"
 },
 {
   "from": "1941-07-16",
   "till": "",
   "country": "",
   "province": "",
   "locality": "",
   "where": "",
   "title": "",
   "desc": "The SDC (State Defence Committee) принял решение о строительстве Можайской линии обороны и Постановление № 169 от 16 июля 1941 г. об аресте и предании суду военного трибунала бывшего командующего Западным фронтом генерала армии Павлова.",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D0%B8%D1%8E%D0%BB%D1%8C_1941_%D0%B3%D0%BE%D0%B4%D0%B0)#16_.D0.B8.D1.8E.D0.BB.D1.8F_1941_.D0.B3.D0.BE.D0.B4.D0.B0._25-.D0.B9_.D0.B4.D0.B5.D0.BD.D1.8C_.D0.B2.D0.BE.D0.B9.D0.BD.D1.8B"
 },
 {
   "from": "1941-07-16",
   "till": "",
   "country": "",
   "province": "",
   "locality": "",
   "where": "",
   "title": "RUS, Pskov Province",
   "desc": "57-й мотокорпус 3-й танковой группы захватил Невель.",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D0%B8%D1%8E%D0%BB%D1%8C_1941_%D0%B3%D0%BE%D0%B4%D0%B0)#16_.D0.B8.D1.8E.D0.BB.D1.8F_1941_.D0.B3.D0.BE.D0.B4.D0.B0._25-.D0.B9_.D0.B4.D0.B5.D0.BD.D1.8C_.D0.B2.D0.BE.D0.B9.D0.BD.D1.8B"
 },
 {
   "from": "1941-07-16",
   "till": "",
   "country": "",
   "province": "",
   "locality": "",
   "where": "",
   "title": "RUS, Smolensk Province",
   "desc": "2-я танковая группа ворвалась в Смоленск (см. Оборона Смоленска (1941)).",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D0%B8%D1%8E%D0%BB%D1%8C_1941_%D0%B3%D0%BE%D0%B4%D0%B0)#16_.D0.B8.D1.8E.D0.BB.D1.8F_1941_.D0.B3.D0.BE.D0.B4.D0.B0._25-.D0.B9_.D0.B4.D0.B5.D0.BD.D1.8C_.D0.B2.D0.BE.D0.B9.D0.BD.D1.8B"
 },
 {
   "from": "1941-07-16",
   "till": "",
   "country": "",
   "province": "",
   "locality": "",
   "where": "",
   "title": "UKR, Kiev Province",
   "desc": "5-я армия нанесла ещё один удар во фланг вражеской группировке из районов Малина и Бородянки. 1-я танковая группа заняла Белую Церковь.",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D0%B8%D1%8E%D0%BB%D1%8C_1941_%D0%B3%D0%BE%D0%B4%D0%B0)#16_.D0.B8.D1.8E.D0.BB.D1.8F_1941_.D0.B3.D0.BE.D0.B4.D0.B0._25-.D0.B9_.D0.B4.D0.B5.D0.BD.D1.8C_.D0.B2.D0.BE.D0.B9.D0.BD.D1.8B"
 },
 {
   "from": "1941-07-16",
   "till": "1941-08-07",
   "country": "",
   "province": "",
   "locality": "",
   "where": "",
   "title": "RUS, Pskov Province",
   "desc": "Уманская операция войск левого крыла Юго-Западного и правого крыла Южного фронтов",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D0%B8%D1%8E%D0%BB%D1%8C_1941_%D0%B3%D0%BE%D0%B4%D0%B0)#16_.D0.B8.D1.8E.D0.BB.D1.8F_1941_.D0.B3.D0.BE.D0.B4.D0.B0._25-.D0.B9_.D0.B4.D0.B5.D0.BD.D1.8C_.D0.B2.D0.BE.D0.B9.D0.BD.D1.8B"
 },
 {
   "from": "1941-07-16",
   "till": "",
   "country": "",
   "province": "",
   "locality": "",
   "where": "",
   "title": "MDA",
   "desc": "советские войска оставили Кишинёв.",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D0%B8%D1%8E%D0%BB%D1%8C_1941_%D0%B3%D0%BE%D0%B4%D0%B0)#16_.D0.B8.D1.8E.D0.BB.D1.8F_1941_.D0.B3.D0.BE.D0.B4.D0.B0._25-.D0.B9_.D0.B4.D0.B5.D0.BD.D1.8C_.D0.B2.D0.BE.D0.B9.D0.BD.D1.8B"
 },
 {
   "from": "1941-07-16",
   "till": "",
   "country": "",
   "province": "",
   "locality": "",
   "where": "",
   "title": "Franz Halder",
   "desc": "Потери немецкой армии на 16 июля составляют около 102588 человек. Среднесуточные потери — 4104.",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D0%B8%D1%8E%D0%BB%D1%8C_1941_%D0%B3%D0%BE%D0%B4%D0%B0)#16_.D0.B8.D1.8E.D0.BB.D1.8F_1941_.D0.B3.D0.BE.D0.B4.D0.B0._25-.D0.B9_.D0.B4.D0.B5.D0.BD.D1.8C_.D0.B2.D0.BE.D0.B9.D0.BD.D1.8B"
 },
 {
   "from": "1941-07-16",
   "till": "",
   "country": "",
   "province": "",
   "locality": "",
   "where": "",
   "title": "Совинформбюро",
   "desc": "В течение 16 июля продолжались крупные бои на ПСКОВСКОМ, СМОЛЕНСКОМ, БОБРУЙСКОМ И НОВОГРАД-ВОЛЫНСКОМ направлениях.",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D0%B8%D1%8E%D0%BB%D1%8C_1941_%D0%B3%D0%BE%D0%B4%D0%B0)#16_.D0.B8.D1.8E.D0.BB.D1.8F_1941_.D0.B3.D0.BE.D0.B4.D0.B0._25-.D0.B9_.D0.B4.D0.B5.D0.BD.D1.8C_.D0.B2.D0.BE.D0.B9.D0.BD.D1.8B"
 },
 {
   "from": "1941-07-16",
   "till": "",
   "country": "",
   "province": "",
   "locality": "",
   "where": "",
   "title": "BLR, Vitebsk Province",
   "desc": "22-я армия оказалась в полуокружении и оставила Полоцк (см. Оборона Полоцка 1941). ",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D0%B8%D1%8E%D0%BB%D1%8C_1941_%D0%B3%D0%BE%D0%B4%D0%B0)#16_.D0.B8.D1.8E.D0.BB.D1.8F_1941_.D0.B3.D0.BE.D0.B4.D0.B0._25-.D0.B9_.D0.B4.D0.B5.D0.BD.D1.8C_.D0.B2.D0.BE.D0.B9.D0.BD.D1.8B"
 },
 {
   "from": "1941-07-16",
   "till": "",
   "country": "",
   "province": "",
   "locality": "",
   "where": "",
   "title": "RUS, Smolensk Province",
   "desc": "39-й мотокорпус занял Ярцево, перерезал автомагистраль Москва—Минск.",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D0%B8%D1%8E%D0%BB%D1%8C_1941_%D0%B3%D0%BE%D0%B4%D0%B0)#16_.D0.B8.D1.8E.D0.BB.D1.8F_1941_.D0.B3.D0.BE.D0.B4.D0.B0._25-.D0.B9_.D0.B4.D0.B5.D0.BD.D1.8C_.D0.B2.D0.BE.D0.B9.D0.BD.D1.8B"
 },
 {
   "from": "1941-07-02",
   "till": "1941-07-16",
   "country": "",
   "province": "",
   "locality": "",
   "where": "",
   "title": "BLR, Vitebsk Province",
   "desc": "Polotsk Defensive",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%9F%D0%BE%D0%BB%D0%BE%D1%86%D0%BA%D0%B0%D1%8F_%D0%BE%D0%B1%D0%BE%D1%80%D0%BE%D0%BD%D0%B0_(1941)"
 },
 {
   "from": "1941-07-15",
   "till": "",
   "country": "",
   "province": "",
   "locality": "",
   "where": "",
   "title": "",
   "desc": "The Northern Front troops stop the offensive of the German and Finnish troops in the Murmansk direction.",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D0%B8%D1%8E%D0%BB%D1%8C_1941_%D0%B3%D0%BE%D0%B4%D0%B0)#15_.D0.B8.D1.8E.D0.BB.D1.8F_1941_.D0.B3.D0.BE.D0.B4.D0.B0._24-.D0.B9_.D0.B4.D0.B5.D0.BD.D1.8C_.D0.B2.D0.BE.D0.B9.D0.BD.D1.8B"
 },
 {
   "from": "1941-07-15",
   "till": "",
   "country": "",
   "province": "",
   "locality": "",
   "where": "",
   "title": "RUS, Smolensk Province",
   "desc": "Противник выдвинулся в район севернее Ярцево, занял Демидов и захватил южную часть Смоленска.",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D0%B8%D1%8E%D0%BB%D1%8C_1941_%D0%B3%D0%BE%D0%B4%D0%B0)#15_.D0.B8.D1.8E.D0.BB.D1.8F_1941_.D0.B3.D0.BE.D0.B4.D0.B0._24-.D0.B9_.D0.B4.D0.B5.D0.BD.D1.8C_.D0.B2.D0.BE.D0.B9.D0.BD.D1.8B"
 },
 {
   "from": "1941-07-15",
   "till": "",
   "country": "",
   "province": "",
   "locality": "",
   "where": "",
   "title": "BLR, Vitebsk Province",
   "desc": "Немецкий 23-й армейский корпус занял левобережную часть Полоцка.",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D0%B8%D1%8E%D0%BB%D1%8C_1941_%D0%B3%D0%BE%D0%B4%D0%B0)#15_.D0.B8.D1.8E.D0.BB.D1.8F_1941_.D0.B3.D0.BE.D0.B4.D0.B0._24-.D0.B9_.D0.B4.D0.B5.D0.BD.D1.8C_.D0.B2.D0.BE.D0.B9.D0.BD.D1.8B"
 },
 {
   "from": "1941-07-15",
   "till": "",
   "country": "",
   "province": "",
   "locality": "",
   "where": "",
   "title": "UKR, Kiev Province",
   "desc": "Отразив контрудар советских войск в районе Бердичева 1-я танковая группа начала наступление от Бердичева и Житомира в направлении Белой Церкви.",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D0%B8%D1%8E%D0%BB%D1%8C_1941_%D0%B3%D0%BE%D0%B4%D0%B0)#15_.D0.B8.D1.8E.D0.BB.D1.8F_1941_.D0.B3.D0.BE.D0.B4.D0.B0._24-.D0.B9_.D0.B4.D0.B5.D0.BD.D1.8C_.D0.B2.D0.BE.D0.B9.D0.BD.D1.8B"
 },
 {
   "from": "1941-07-15",
   "till": "",
   "country": "",
   "province": "",
   "locality": "",
   "where": "",
   "title": "Директива Ставки ГК по опыту войны",
   "desc": "Опыт войны показал, что наши механизированные корпуса, как слишком громоздкие соединения, мало подвижны, неповоротливы и не приспособлены для маневрирования, не говоря уже о том, что они являются очень легко уязвимой целью для неприятельской авиации. Ставка считает, что при первой возможности в обстановке военных операций следует расформировать мехкорпуса, выделить из них танковые дивизии как отдельные единицы с подчинением их командованию армии, а мотодивизии превратить в обычные стрелковые дивизии…",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D0%B8%D1%8E%D0%BB%D1%8C_1941_%D0%B3%D0%BE%D0%B4%D0%B0)#15_.D0.B8.D1.8E.D0.BB.D1.8F_1941_.D0.B3.D0.BE.D0.B4.D0.B0._24-.D0.B9_.D0.B4.D0.B5.D0.BD.D1.8C_.D0.B2.D0.BE.D0.B9.D0.BD.D1.8B"
 },
 {
   "from": "1941-07-15",
   "till": "",
   "country": "",
   "province": "",
   "locality": "",
   "where": "",
   "title": "Совинформбюро",
   "desc": "На ПСКОВСКО-ПОРХОВСКОМ направлении с утра в ходе боёв наши войска окружили группу мотомехчастей противника и уничтожили её по частям, захватив значительное количество танков, машин и разного оружия. Остатки противника отбрасываются на запад. | На ВИТЕБСКОМ направлении весь день шли ожесточённые бои против мотомехчастей противника, безуспешно пытавшихся прорваться на восток. Бои продолжаются. Обе стороны несут тяжёлые потери. | На НОВОГРАД-ВОЛЫНСКОМ направлении наши войска вели упорные бои, противодействуя попыткам пехоты противника прорваться на восток и соединиться с его танками, попавшими в тяжёлое положение.",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D0%B8%D1%8E%D0%BB%D1%8C_1941_%D0%B3%D0%BE%D0%B4%D0%B0)#15_.D0.B8.D1.8E.D0.BB.D1.8F_1941_.D0.B3.D0.BE.D0.B4.D0.B0._24-.D0.B9_.D0.B4.D0.B5.D0.BD.D1.8C_.D0.B2.D0.BE.D0.B9.D0.BD.D1.8B"
 },
 {
   "from": "1941-07-14",
   "till": "",
   "country": "",
   "province": "",
   "locality": "",
   "where": "",
   "title": "RUS, Murmansk Province",
   "desc": "На побережье губы Большая Западная Лица кораблями Северного флота высажен морской десант.",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D0%B8%D1%8E%D0%BB%D1%8C_1941_%D0%B3%D0%BE%D0%B4%D0%B0)#14_.D0.B8.D1.8E.D0.BB.D1.8F_1941_.D0.B3.D0.BE.D0.B4.D0.B0._23-.D0.B9_.D0.B4.D0.B5.D0.BD.D1.8C_.D0.B2.D0.BE.D0.B9.D0.BD.D1.8B"
 },
 {
   "from": "1941-07-14",
   "till": "",
   "country": "",
   "province": "",
   "locality": "",
   "where": "",
   "title": "RUS, Leningrad Province",
   "desc": "41-й мотокорпус 4-й танковой группы вышел к реке Луга в 20—35 километрах восточнее города Кингисеппа, захватил переправы у Ивановского и Большого Сабска. 56-й мотокорпус наступал на Новгород и вышел передовыми частями в район западнее Шимска. 11-я армия нанесла двусторонний контрудар из районов Уторгош и Дно на Ситню — Сольцы и окружила противника.",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D0%B8%D1%8E%D0%BB%D1%8C_1941_%D0%B3%D0%BE%D0%B4%D0%B0)#14_.D0.B8.D1.8E.D0.BB.D1.8F_1941_.D0.B3.D0.BE.D0.B4.D0.B0._23-.D0.B9_.D0.B4.D0.B5.D0.BD.D1.8C_.D0.B2.D0.BE.D0.B9.D0.BD.D1.8B"
 },
 {
   "from": "1941-07-14",
   "till": "",
   "country": "",
   "province": "",
   "locality": "",
   "where": "",
   "title": "RUS, Smolensk Province",
   "desc": "2-я танковая группа подошла к Смоленску с юга.",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D0%B8%D1%8E%D0%BB%D1%8C_1941_%D0%B3%D0%BE%D0%B4%D0%B0)#14_.D0.B8.D1.8E.D0.BB.D1.8F_1941_.D0.B3.D0.BE.D0.B4.D0.B0._23-.D0.B9_.D0.B4.D0.B5.D0.BD.D1.8C_.D0.B2.D0.BE.D0.B9.D0.BD.D1.8B"
 },
 {
   "from": "1941-07-14",
   "till": "",
   "country": "",
   "province": "",
   "locality": "",
   "where": "",
   "title": "BLR, Gomel Province",
   "desc": "Передовой отряд немецкой 3-й танковой дивизии обошёл Могилёв и без особого сопротивления взял Чаусы. Таким образом, окружение Могилёва было завершено. Город был блокирован полком «Великая Германия» и частями 3-й танковой дивизии. Советская 13-я армия оказалась рассечена, штаб армии оказался под ударом, командарм генерал-лейтенант Ф. Н. Ремезов был тяжело ранен и эвакуирован, управление войсками было нарушено.",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D0%B8%D1%8E%D0%BB%D1%8C_1941_%D0%B3%D0%BE%D0%B4%D0%B0)#14_.D0.B8.D1.8E.D0.BB.D1.8F_1941_.D0.B3.D0.BE.D0.B4.D0.B0._23-.D0.B9_.D0.B4.D0.B5.D0.BD.D1.8C_.D0.B2.D0.BE.D0.B9.D0.BD.D1.8B"
 },
 {
   "from": "1941-07-14",
   "till": "",
   "country": "",
   "province": "",
   "locality": "",
   "where": "",
   "title": "BLR, Gomel Province",
   "desc": "21-я армия Западного фронта вышла в район 25—40 километров южнее и юго-западнее города Бобруйска.",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D0%B8%D1%8E%D0%BB%D1%8C_1941_%D0%B3%D0%BE%D0%B4%D0%B0)#14_.D0.B8.D1.8E.D0.BB.D1.8F_1941_.D0.B3.D0.BE.D0.B4.D0.B0._23-.D0.B9_.D0.B4.D0.B5.D0.BD.D1.8C_.D0.B2.D0.BE.D0.B9.D0.BD.D1.8B"
 },
 {
   "from": "1941-07-14",
   "till": "",
   "country": "",
   "province": "",
   "locality": "",
   "where": "",
   "title": "",
   "desc": "В тылу Западного фронта был развёрнут фронт резервных армий И. А. Богданова, в который вошли 6 армий из резерва Ставки ВГК. Новый фронт получил задачу к исходу 14 июля занять оборону на рубеже Старая Русса, Осташков, Белый, Истомино, Ельня, Брянск.",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D0%B8%D1%8E%D0%BB%D1%8C_1941_%D0%B3%D0%BE%D0%B4%D0%B0)#14_.D0.B8.D1.8E.D0.BB.D1.8F_1941_.D0.B3.D0.BE.D0.B4.D0.B0._23-.D0.B9_.D0.B4.D0.B5.D0.BD.D1.8C_.D0.B2.D0.BE.D0.B9.D0.BD.D1.8B"
 },
 {
   "from": "1941-07-14",
   "till": "",
   "country": "",
   "province": "",
   "locality": "",
   "where": "",
   "title": "UKR, Kiev Province",
   "desc": "Механизированные части 5-й армии Юго-западного фронта перерезали шоссе между городами Житомир и Новоград-Волынский.",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D0%B8%D1%8E%D0%BB%D1%8C_1941_%D0%B3%D0%BE%D0%B4%D0%B0)#14_.D0.B8.D1.8E.D0.BB.D1.8F_1941_.D0.B3.D0.BE.D0.B4.D0.B0._23-.D0.B9_.D0.B4.D0.B5.D0.BD.D1.8C_.D0.B2.D0.BE.D0.B9.D0.BD.D1.8B"
 },
 {
   "from": "1941-07-14",
   "till": "",
   "country": "",
   "province": "",
   "locality": "",
   "where": "",
   "title": "Совинформбюро",
   "desc": "В течение 14 июля продолжались бои на СЕВЕРО-ЗАПАДНОМ, ЗАПАДНОМ и ЮГО-ЗАПАДНОМ направлениях. Наши войска противодействовали наступлению танковых и моторизованных частей противника и неоднократными контратаками наносили врагу тяжёлые потери. | На ЗАПАДНОМ направлении в результате действий наших войск и авиации уничтожено до 100 танков и много автомашин противника. | На ЮГО-ЗАПАДНОМ направлении наши войска разгромили крупную часть противника, численностью до 3.000 человек. Захвачено много орудий, пулемётов, автоматов и другого вооружения.",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D0%B8%D1%8E%D0%BB%D1%8C_1941_%D0%B3%D0%BE%D0%B4%D0%B0)#14_.D0.B8.D1.8E.D0.BB.D1.8F_1941_.D0.B3.D0.BE.D0.B4.D0.B0._23-.D0.B9_.D0.B4.D0.B5.D0.BD.D1.8C_.D0.B2.D0.BE.D0.B9.D0.BD.D1.8B"
 },
 {
   "from": "1941-03-13",
   "till": "1941-03-14",
   "country": "",
   "province": "",
   "locality": "",
   "where": "",
   "title": "POL, Krakow",
   "desc": "The final 'liquidation' of the ghetto carried out under the command of SS-Untersturmführer Amon Göth. ",
   "result": "Eight thousand Jews deemed able to work are transported to the Płaszów labor camp. Those deemed unfit for work – some 2,000 Jews – were killed in the streets of the ghetto on those days with the use of \"Trawniki men\" police auxiliaries. Any remaining were sent to Auschwitz.",
   "link": "https://en.wikipedia.org/wiki/Krak%C3%B3w_Ghetto"
 },
 {
   "from": "1942-09-03",
   "till": "",
   "country": "",
   "province": "",
   "locality": "",
   "where": "",
   "title": "",
   "desc": "Адольф Гитлер отдает приказ привезти в Германию 500 тысяч украинок для того, чтобы освободить от ведения домашнего хозяйства германских женщин. Всего 15 000 девушек были взяты в Германию для работ по дому.",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%9E%D1%81%D1%82%D0%B0%D1%80%D0%B1%D0%B0%D0%B9%D1%82%D0%B5%D1%80%D1%8B"
 },
 {
   "from": "1944-09-06",
   "till": "",
   "country": "",
   "province": "",
   "locality": "",
   "where": "",
   "title": "",
   "desc": "Рейхсминистр внутренних дел Германии Генрих Гиммлер издал приказ, согласно которому в ряде психиатрических больниц рейха проводились уничтожения всех находившихся там остарбайтеров",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%9E%D1%81%D1%82%D0%B0%D1%80%D0%B1%D0%B0%D0%B9%D1%82%D0%B5%D1%80%D1%8B"
 },
 {
   "from": "1941-07-23",
   "till": "",
   "country": "",
   "province": "",
   "locality": "",
   "where": "",
   "title": "Совинформбюро",
   "desc": "В течение 23 июля велись упорные бои с противником на Полоцко-Невельском, Смоленском, Житомирском направлениях и Бессарабском участке фронта.",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D0%B8%D1%8E%D0%BB%D1%8C_1941_%D0%B3%D0%BE%D0%B4%D0%B0)#23_.D0.B8.D1.8E.D0.BB.D1.8F_1941_.D0.B3.D0.BE.D0.B4.D0.B0._32-.D0.B9_.D0.B4.D0.B5.D0.BD.D1.8C_.D0.B2.D0.BE.D0.B9.D0.BD.D1.8B"
 },
 {
   "from": "1941-07-24",
   "till": "",
   "country": "",
   "province": "",
   "locality": "",
   "where": "",
   "title": "Karelo-Finnish ASSR",
   "desc": "Кораблями Ладожской флотилии высажен десант на острове Лункулансари у северо-восточного побережья Ладожского озера, в тылу наступавших финских войск. На следующий день остатки десанта эвакуированы.",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D0%B8%D1%8E%D0%BB%D1%8C_1941_%D0%B3%D0%BE%D0%B4%D0%B0)#24_.D0.B8.D1.8E.D0.BB.D1.8F_1941_.D0.B3.D0.BE.D0.B4.D0.B0._33-.D0.B9_.D0.B4.D0.B5.D0.BD.D1.8C_.D0.B2.D0.BE.D0.B9.D0.BD.D1.8B"
 },
 {
   "from": "1941-07-24",
   "till": "1941-07-27",
   "country": "",
   "province": "",
   "locality": "",
   "where": "",
   "title": "Десант на острова Лункулансаари и Мантсинсаари",
   "desc": "десантная операция советской Ладожской флотилии в ходе оборонительной операции в Карелии Великой Отечественной войны.",
   "result": "Гибель десантов",
   "link": "https://ru.wikipedia.org/wiki/%D0%94%D0%B5%D1%81%D0%B0%D0%BD%D1%82_%D0%BD%D0%B0_%D0%BE%D1%81%D1%82%D1%80%D0%BE%D0%B2%D0%B0_%D0%9B%D1%83%D0%BD%D0%BA%D1%83%D0%BB%D0%B0%D0%BD%D1%81%D0%B0%D0%B0%D1%80%D0%B8_%D0%B8_%D0%9C%D0%B0%D0%BD%D1%82%D1%81%D0%B8%D0%BD%D1%81%D0%B0%D0%B0%D1%80%D0%B8"
 },
 {
   "from": "1941-07-24",
   "till": "",
   "country": "",
   "province": "",
   "locality": "",
   "where": "",
   "title": "Leningrad Province, RU",
   "desc": "Группа армий «Север» продолжает производить перегруппировку сил для дальнейшего наступления.",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D0%B8%D1%8E%D0%BB%D1%8C_1941_%D0%B3%D0%BE%D0%B4%D0%B0)#24_.D0.B8.D1.8E.D0.BB.D1.8F_1941_.D0.B3.D0.BE.D0.B4.D0.B0._33-.D0.B9_.D0.B4.D0.B5.D0.BD.D1.8C_.D0.B2.D0.BE.D0.B9.D0.BD.D1.8B"
 },
 {
   "from": "1941-07-24",
   "till": "",
   "country": "",
   "province": "",
   "locality": "",
   "where": "",
   "title": "Smolensk Province, RU",
   "desc": "Войска Западного фронта остановили наступление группы армий «Центр» на великолукском направлении и под Ельней. Группа армий «Центр» подтягивает полевые армии.",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D0%B8%D1%8E%D0%BB%D1%8C_1941_%D0%B3%D0%BE%D0%B4%D0%B0)#24_.D0.B8.D1.8E.D0.BB.D1.8F_1941_.D0.B3.D0.BE.D0.B4.D0.B0._33-.D0.B9_.D0.B4.D0.B5.D0.BD.D1.8C_.D0.B2.D0.BE.D0.B9.D0.BD.D1.8B"
 },
 {
   "from": "1941-07-24",
   "till": "",
   "country": "",
   "province": "",
   "locality": "",
   "where": "",
   "title": "",
   "desc": "Ставка Верховного Командования выделила из состава Западного фронта 13-ю и 21-ю армии и 24 июля создала из них Центральный фронт Ф. И. Кузнецова.",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D0%B8%D1%8E%D0%BB%D1%8C_1941_%D0%B3%D0%BE%D0%B4%D0%B0)#24_.D0.B8.D1.8E.D0.BB.D1.8F_1941_.D0.B3.D0.BE.D0.B4.D0.B0._33-.D0.B9_.D0.B4.D0.B5.D0.BD.D1.8C_.D0.B2.D0.BE.D0.B9.D0.BD.D1.8B"
 },
 {
   "from": "1941-07-24",
   "till": "",
   "country": "",
   "province": "",
   "locality": "",
   "where": "",
   "title": "Kiev Province, Kiev",
   "desc": "Советские войска отошли на Коростеньский УР и восточнее его — на рубеж Малин, Бородянка.",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D0%B8%D1%8E%D0%BB%D1%8C_1941_%D0%B3%D0%BE%D0%B4%D0%B0)#24_.D0.B8.D1.8E.D0.BB.D1.8F_1941_.D0.B3.D0.BE.D0.B4.D0.B0._33-.D0.B9_.D0.B4.D0.B5.D0.BD.D1.8C_.D0.B2.D0.BE.D0.B9.D0.BD.D1.8B"
 },
 {
   "from": "1941-07-24",
   "till": "",
   "country": "",
   "province": "",
   "locality": "",
   "where": "",
   "title": "Совинформбюро",
   "desc": "В течение 24 июля развивались упорные бои на ПОРХОВСКОМ, СМОЛЕНСКОМ и ЖИТОМИРСКОМ направлениях.",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D0%B8%D1%8E%D0%BB%D1%8C_1941_%D0%B3%D0%BE%D0%B4%D0%B0)#24_.D0.B8.D1.8E.D0.BB.D1.8F_1941_.D0.B3.D0.BE.D0.B4.D0.B0._33-.D0.B9_.D0.B4.D0.B5.D0.BD.D1.8C_.D0.B2.D0.BE.D0.B9.D0.BD.D1.8B"
 },
 {
   "from": "1941-07-25",
   "till": "",
   "country": "",
   "province": "",
   "locality": "",
   "where": "",
   "title": "Smolensk Province, RU",
   "desc": "войска Западного фронта перешли в наступление из района южнее города Белый в общем направлении на Смоленск.",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D0%B8%D1%8E%D0%BB%D1%8C_1941_%D0%B3%D0%BE%D0%B4%D0%B0)#25_.D0.B8.D1.8E.D0.BB.D1.8F_1941_.D0.B3.D0.BE.D0.B4.D0.B0._34-.D0.B9_.D0.B4.D0.B5.D0.BD.D1.8C_.D0.B2.D0.BE.D0.B9.D0.BD.D1.8B"
 },
 {
   "from": "1941-07-25",
   "till": "",
   "country": "",
   "province": "",
   "locality": "",
   "where": "",
   "title": "Kiev Province, Kiev",
   "desc": "Охваченные противником с запада, севера и востока 6-я и 12-я армий отходят к правому флангу Южного фронта и сегодня по решению Ставки они становятся подчинены Южному фронту.",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D0%B8%D1%8E%D0%BB%D1%8C_1941_%D0%B3%D0%BE%D0%B4%D0%B0)#25_.D0.B8.D1.8E.D0.BB.D1.8F_1941_.D0.B3.D0.BE.D0.B4.D0.B0._34-.D0.B9_.D0.B4.D0.B5.D0.BD.D1.8C_.D0.B2.D0.BE.D0.B9.D0.BD.D1.8B"
 },
 {
   "from": "1941-07-25",
   "till": "",
   "country": "",
   "province": "",
   "locality": "",
   "where": "",
   "title": "Совинформбюро",
   "desc": "В течение 25 июля наши войска вели бои с противником на ПОРХОВСКОМ, ПОЛОЦКО-НЕВЕЛЬСКОМ, СМОЛЕНСКОМ и ЖИТОМИРСКОМ направлениях.",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D0%B8%D1%8E%D0%BB%D1%8C_1941_%D0%B3%D0%BE%D0%B4%D0%B0)#25_.D0.B8.D1.8E.D0.BB.D1.8F_1941_.D0.B3.D0.BE.D0.B4.D0.B0._34-.D0.B9_.D0.B4.D0.B5.D0.BD.D1.8C_.D0.B2.D0.BE.D0.B9.D0.BD.D1.8B"
 },
 {
   "from": "1941-07-26",
   "till": "",
   "country": "",
   "province": "",
   "locality": "",
   "where": "",
   "title": "Karelo-Finnish ASSR",
   "desc": "Кораблями Ладожской военной флотилии высажен новый десант на остров Мансинсаари, в том же районе, что и высаженный 24 июля. Эта высадка также окончилась неудачей, остатки десанта эвакуированы.",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D0%B8%D1%8E%D0%BB%D1%8C_1941_%D0%B3%D0%BE%D0%B4%D0%B0)#26_.D0.B8.D1.8E.D0.BB.D1.8F_1941_.D0.B3.D0.BE.D0.B4.D0.B0._35-.D0.B9_.D0.B4.D0.B5.D0.BD.D1.8C_.D0.B2.D0.BE.D0.B9.D0.BD.D1.8B"
 },
 {
   "from": "1941-07-26",
   "till": "",
   "country": "",
   "province": "",
   "locality": "",
   "where": "",
   "title": "Smolensk Province, RU",
   "desc": "из района южнее города Ярцево войска Западного фронта перешли в наступление в направлении на Смоленск.",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D0%B8%D1%8E%D0%BB%D1%8C_1941_%D0%B3%D0%BE%D0%B4%D0%B0)#26_.D0.B8.D1.8E.D0.BB.D1.8F_1941_.D0.B3.D0.BE.D0.B4.D0.B0._35-.D0.B9_.D0.B4.D0.B5.D0.BD.D1.8C_.D0.B2.D0.BE.D0.B9.D0.BD.D1.8B"
 },
 {
   "from": "1941-07-26",
   "till": "",
   "country": "",
   "province": "",
   "locality": "",
   "where": "",
   "title": "",
   "desc": "советские войска оставили Могилёв (см. Оборона Могилёва).",
   "result": "",
   "link": ""
 },
 {
   "from": "1941-07-03",
   "till": "1941-07-26",
   "country": "belarus",
   "province": "mogilyov",
   "locality": "mogilyov",
   "where": "",
   "title": "Осада Могилева",
   "desc": "боевые действия советских войск в ВОВ в июле 1941 года в районе Могилева (БССР).",
   "result": "Tactical victory of Germany",
   "link": "https://ru.wikipedia.org/wiki/%D0%9C%D0%BE%D0%B3%D0%B8%D0%BB%D1%91%D0%B2%D1%81%D0%BA%D0%B0%D1%8F_%D0%BE%D0%B1%D0%BE%D1%80%D0%BE%D0%BD%D0%B0"
 },
 {
   "from": "1941-07-26",
   "till": "1944-07-28",
   "country": "belarus",
   "province": "mogilyov",
   "locality": "mogilyov",
   "where": "",
   "title": "",
   "desc": "Germans create 5 death camps (including Grebenev, Lupolovo), 341 transit camps, a ghetto near Dubrovenka.",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%9C%D0%BE%D0%B3%D0%B8%D0%BB%D1%91%D0%B2_%D0%B2_%D0%B3%D0%BE%D0%B4%D1%8B_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B"
 },
 {
   "from": "1943-04-06",
   "till": "",
   "country": "belarus",
   "province": "mogilyov",
   "locality": "mogilyov",
   "where": "",
   "title": "",
   "desc": "Mogilev partisan movement is formed",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%9C%D0%BE%D0%B3%D0%B8%D0%BB%D1%91%D0%B2_%D0%B2_%D0%B3%D0%BE%D0%B4%D1%8B_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B"
 },
 {
   "from": "1941-08-01",
   "till": "1943-12-31",
   "country": "",
   "province": "",
   "locality": "",
   "where": "",
   "title": "Mogilev Province, BLR",
   "desc": "Lupolovo death camp for the Soviet POWs. Killed more than 40,000 people. Only 389 names are known.",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%9B%D1%83%D0%BF%D0%BE%D0%BB%D0%BE%D0%B2%D1%81%D0%BA%D0%B8%D0%B9_%D0%BB%D0%B0%D0%B3%D0%B5%D1%80%D1%8C_%D0%B2%D0%BE%D0%B5%D0%BD%D0%BD%D0%BE%D0%BF%D0%BB%D0%B5%D0%BD%D0%BD%D1%8B%D1%85"
 },
 {
   "from": "1941-08-08",
   "till": "",
   "country": "",
   "province": "",
   "locality": "",
   "where": "",
   "title": "Mogilev Province, BLR",
   "desc": "General Dmitry Karbyshev (aged 60) is shell-shocked and captured.",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%9A%D0%B0%D1%80%D0%B1%D1%8B%D1%88%D0%B5%D0%B2,_%D0%94%D0%BC%D0%B8%D1%82%D1%80%D0%B8%D0%B9_%D0%9C%D0%B8%D1%85%D0%B0%D0%B9%D0%BB%D0%BE%D0%B2%D0%B8%D1%87"
 },
 {
   "from": "1945-02-18",
   "till": "",
   "country": "",
   "province": "",
   "locality": "",
   "where": "",
   "title": "Mauthausen, Austria",
   "desc": "General Dmitry Karbyshev (aged 64) who was captured on 1941-08-08 is tortured, taken outside with other 500 prisoners, dowsed with water in -12C, and killed. Germans burn his body in the death camp's furnace",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%9A%D0%B0%D1%80%D0%B1%D1%8B%D1%88%D0%B5%D0%B2,_%D0%94%D0%BC%D0%B8%D1%82%D1%80%D0%B8%D0%B9_%D0%9C%D0%B8%D1%85%D0%B0%D0%B9%D0%BB%D0%BE%D0%B2%D0%B8%D1%87"
 },
 {
   "from": "1941-07-26",
   "till": "",
   "country": "",
   "province": "",
   "locality": "",
   "where": "",
   "title": "MDA",
   "desc": "Завершились Приграничные сражения в Молдавии, проходившие с 1 по 26 июля 1941 г. Численность войск к началу операции — 364700 человек. Безвозвратные потери — 8519. Санитарные — 9374. Всего — 17893. Среднесуточные — 688.",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D0%B8%D1%8E%D0%BB%D1%8C_1941_%D0%B3%D0%BE%D0%B4%D0%B0)#26_.D0.B8.D1.8E.D0.BB.D1.8F_1941_.D0.B3.D0.BE.D0.B4.D0.B0._35-.D0.B9_.D0.B4.D0.B5.D0.BD.D1.8C_.D0.B2.D0.BE.D0.B9.D0.BD.D1.8B"
 },
 {
   "from": "1941-07-26",
   "till": "",
   "country": "",
   "province": "",
   "locality": "",
   "where": "",
   "title": "Совинформбюро",
   "desc": "В течение 26 июля наши войска продолжали вести ожесточённые бои на ПОРХОВСКОМ, НЕВЕЛЬСКОМ, СМОЛЕНСКОМ и ЖИТОМИРСКОМ направлениях.",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D0%B8%D1%8E%D0%BB%D1%8C_1941_%D0%B3%D0%BE%D0%B4%D0%B0)#26_.D0.B8.D1.8E.D0.BB.D1.8F_1941_.D0.B3.D0.BE.D0.B4.D0.B0._35-.D0.B9_.D0.B4.D0.B5.D0.BD.D1.8C_.D0.B2.D0.BE.D0.B9.D0.BD.D1.8B"
 },
 {
   "from": "1941-07-27",
   "till": "",
   "country": "",
   "province": "",
   "locality": "",
   "where": "",
   "title": "Smolensk Province, RU",
   "desc": "22-я армия Западного фронта закрепились на рубеже верхнего течения реки Ловать, Великие Луки, озеро Двинье и удерживала этот рубеж до конца августа.  | 16-я армия, наступавшая на Смоленск с севера, захватила вокзал и вела бои в северной части города. 27 июля 3-я танковая группа нанесла удар в тыл 16-й и 20-й армиям и окружила их в районе севернее и западнее города.",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D0%B8%D1%8E%D0%BB%D1%8C_1941_%D0%B3%D0%BE%D0%B4%D0%B0)#27_.D0.B8.D1.8E.D0.BB.D1.8F_1941_.D0.B3.D0.BE.D0.B4.D0.B0._36-.D0.B9_.D0.B4.D0.B5.D0.BD.D1.8C_.D0.B2.D0.BE.D0.B9.D0.BD.D1.8B"
 },
 {
   "from": "1941-07-27",
   "till": "",
   "country": "",
   "province": "",
   "locality": "",
   "where": "",
   "title": "Совинформбюро",
   "desc": "В течение 27 июля наши войска вели бои с противником на Невельском, Смоленском и Житомирском направлениях.",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D0%B8%D1%8E%D0%BB%D1%8C_1941_%D0%B3%D0%BE%D0%B4%D0%B0)#27_.D0.B8.D1.8E.D0.BB.D1.8F_1941_.D0.B3.D0.BE.D0.B4.D0.B0._36-.D0.B9_.D0.B4.D0.B5.D0.BD.D1.8C_.D0.B2.D0.BE.D0.B9.D0.BD.D1.8B"
 },
 {
   "from": "1941-07-28",
   "till": "",
   "country": "",
   "province": "",
   "locality": "",
   "where": "",
   "title": "Smolensk Province, RU",
   "desc": "В 40 километрах восточнее Смоленска 3-я танковая группа перерезала дорогу на Дорогобуж. 16-я и 20-я армии Западного фронта начали бои в окружении.",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D0%B8%D1%8E%D0%BB%D1%8C_1941_%D0%B3%D0%BE%D0%B4%D0%B0)#28_.D0.B8.D1.8E.D0.BB.D1.8F_1941_.D0.B3.D0.BE.D0.B4.D0.B0._37-.D0.B9_.D0.B4.D0.B5.D0.BD.D1.8C_.D0.B2.D0.BE.D0.B9.D0.BD.D1.8B"
 },
 {
   "from": "1941-07-28",
   "till": "",
   "country": "",
   "province": "",
   "locality": "",
   "where": "",
   "title": "Kiev Province, UKR",
   "desc": " 6-я и 12-я армии Южного фронта отходят на восток.",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D0%B8%D1%8E%D0%BB%D1%8C_1941_%D0%B3%D0%BE%D0%B4%D0%B0)#28_.D0.B8.D1.8E.D0.BB.D1.8F_1941_.D0.B3.D0.BE.D0.B4.D0.B0._37-.D0.B9_.D0.B4.D0.B5.D0.BD.D1.8C_.D0.B2.D0.BE.D0.B9.D0.BD.D1.8B"
 },
 {
   "from": "1941-07-28",
   "till": "",
   "country": "",
   "province": "",
   "locality": "",
   "where": "",
   "title": "Совинформбюро",
   "desc": " В течение 28 июля наши войска продолжали вести бои на Смоленском и Житомирском направлениях. Наступление противника на этих направлениях разбивается о стойкость и упорство наших войск. Наши войска местами переходят в решительные контратаки и наносят противнику тяжёлые потери.",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D0%B8%D1%8E%D0%BB%D1%8C_1941_%D0%B3%D0%BE%D0%B4%D0%B0)#28_.D0.B8.D1.8E.D0.BB.D1.8F_1941_.D0.B3.D0.BE.D0.B4.D0.B0._37-.D0.B9_.D0.B4.D0.B5.D0.BD.D1.8C_.D0.B2.D0.BE.D0.B9.D0.BD.D1.8B"
 },
 {
   "from": "1941-07-29",
   "till": "",
   "country": "",
   "province": "",
   "locality": "",
   "where": "",
   "title": "Moscow, RUS",
   "desc": "состоялись переговоры личного представителя президента США Harry Lloyd Hopkins с И. В. Сталиным и другими руководителями Советского правительства и Вооружённых Сил СССР по вопросам военных поставок США в СССР.",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D0%B8%D1%8E%D0%BB%D1%8C_1941_%D0%B3%D0%BE%D0%B4%D0%B0)#29_.D0.B8.D1.8E.D0.BB.D1.8F_1941_.D0.B3.D0.BE.D0.B4.D0.B0._38-.D0.B9_.D0.B4.D0.B5.D0.BD.D1.8C_.D0.B2.D0.BE.D0.B9.D0.BD.D1.8B"
 },
 {
   "from": "1941-07-29",
   "till": "",
   "country": "",
   "province": "",
   "locality": "",
   "where": "",
   "title": "London, GBR",
   "desc": "подписано соглашение между Советским правительством и польским эмигрантским правительством. Правительство СССР согласилось на создание на советской территории польской армии под командованием, назначенным польским правительством с согласия Советского правительства. На территории СССР эта армия должна была действовать в оперативном отношении под руководством Верховного командования, в состав которого входил и представитель польской армии.",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D0%B8%D1%8E%D0%BB%D1%8C_1941_%D0%B3%D0%BE%D0%B4%D0%B0)#29_.D0.B8.D1.8E.D0.BB.D1.8F_1941_.D0.B3.D0.BE.D0.B4.D0.B0._38-.D0.B9_.D0.B4.D0.B5.D0.BD.D1.8C_.D0.B2.D0.BE.D0.B9.D0.BD.D1.8B"
 },
 {
   "from": "1941-07-29",
   "till": "",
   "country": "",
   "province": "",
   "locality": "",
   "where": "",
   "title": "Smolensk Province, RU",
   "desc": "В течение 29 июля наши войска вели бои с противником на НОВОРЖЕВСКОМ, НЕВЕЛЬСКОМ, СМОЛЕНСКОМ и ЖИТОМИРСКОМ направлениях. Особенно ожесточённые бои происходили на СМОЛЕНСКОМ направлении, где наши части рядом последовательных контрударов сбивали противника с занятых им позиций, наносили ему тяжёлые потери.",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D0%B8%D1%8E%D0%BB%D1%8C_1941_%D0%B3%D0%BE%D0%B4%D0%B0)#29_.D0.B8.D1.8E.D0.BB.D1.8F_1941_.D0.B3.D0.BE.D0.B4.D0.B0._38-.D0.B9_.D0.B4.D0.B5.D0.BD.D1.8C_.D0.B2.D0.BE.D0.B9.D0.BD.D1.8B"
 },
 {
   "from": "1941-07-30",
   "till": "",
   "country": "",
   "province": "",
   "locality": "",
   "where": "",
   "title": "Karelia",
   "desc": "Войска 7-й армии Северного фронта остановили наступление финской Карельской армии на рубеже Порос-озеро (70 километров северо-восточнее Суоярви), река Тулокса (25 километров северо-западнее города Олонец).",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D0%B8%D1%8E%D0%BB%D1%8C_1941_%D0%B3%D0%BE%D0%B4%D0%B0)#30_.D0.B8.D1.8E.D0.BB.D1.8F_1941_.D0.B3.D0.BE.D0.B4.D0.B0._39-.D0.B9_.D0.B4.D0.B5.D0.BD.D1.8C_.D0.B2.D0.BE.D0.B9.D0.BD.D1.8B"
 },
 {
   "from": "1941-07-30",
   "till": "",
   "country": "",
   "province": "",
   "locality": "",
   "where": "",
   "title": "Smolensk Province, RU",
   "desc": "Ставка ВК образовало на базе Фронта резервных армий и Фронта Можайской линии обороны Резервный фронт Г. К. Жукова. | 30 июля немецким командованием была отдана директива № 34, в которой группе армий «Центр» приказывалось прекратить наступление на Москву и перейти к обороне.",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D0%B8%D1%8E%D0%BB%D1%8C_1941_%D0%B3%D0%BE%D0%B4%D0%B0)#30_.D0.B8.D1.8E.D0.BB.D1.8F_1941_.D0.B3.D0.BE.D0.B4.D0.B0._39-.D0.B9_.D0.B4.D0.B5.D0.BD.D1.8C_.D0.B2.D0.BE.D0.B9.D0.BD.D1.8B"
 },
 {
   "from": "1941-07-30",
   "till": "",
   "country": "",
   "province": "",
   "locality": "",
   "where": "",
   "title": "Cherkasy Province, UKR",
   "desc": "1-й танковая группа перешла в наступление через Шполу на юг.",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D0%B8%D1%8E%D0%BB%D1%8C_1941_%D0%B3%D0%BE%D0%B4%D0%B0)#30_.D0.B8.D1.8E.D0.BB.D1.8F_1941_.D0.B3.D0.BE.D0.B4.D0.B0._39-.D0.B9_.D0.B4.D0.B5.D0.BD.D1.8C_.D0.B2.D0.BE.D0.B9.D0.BD.D1.8B"
 },
 {
   "from": "1941-07-30",
   "till": "",
   "country": "",
   "province": "",
   "locality": "",
   "where": "",
   "title": "Совинформбюро",
   "desc": "В течение 30 июля наши войска продолжали вести бои с противником на НОВОРЖЕВСКОМ, НЕВЕЛЬСКОМ и особенно упорные на СМОЛЕНСКОМ и ЖИТОМИРСКОМ направлениях.",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D0%B8%D1%8E%D0%BB%D1%8C_1941_%D0%B3%D0%BE%D0%B4%D0%B0)#30_.D0.B8.D1.8E.D0.BB.D1.8F_1941_.D0.B3.D0.BE.D0.B4.D0.B0._39-.D0.B9_.D0.B4.D0.B5.D0.BD.D1.8C_.D0.B2.D0.BE.D0.B9.D0.BD.D1.8B"
 },
 {
   "from": "1941-07-31",
   "till": "",
   "country": "",
   "province": "",
   "locality": "",
   "where": "",
   "title": "Cherkasy Province, UKR",
   "desc": "5-я армия Юго-Западного фронта покинула юго-западный и южный секторы Коростеньского укрепрайона. 6-я и 12-я армии оставили город Умань. 1-я танковая группа заняла Шполу.",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D0%B8%D1%8E%D0%BB%D1%8C_1941_%D0%B3%D0%BE%D0%B4%D0%B0)#31_.D0.B8.D1.8E.D0.BB.D1.8F_1941_.D0.B3.D0.BE.D0.B4.D0.B0._40-.D0.B9_.D0.B4.D0.B5.D0.BD.D1.8C_.D0.B2.D0.BE.D0.B9.D0.BD.D1.8B"
 },
 {
   "from": "1941-07-31",
   "till": "",
   "country": "",
   "province": "",
   "locality": "",
   "where": "",
   "title": "Совинформбюро",
   "desc": "В течение 31 июля наши войска вели бои с противником на указанных в утренней сводке направлениях. Особенно упорные бои развернулись на СМОЛЕНСКОМ направлении, где наши войска контрударами отбрасывали противника с занимаемых им позиций и наносили ему тяжёлые потери, захватывая пленных и трофеи.",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D0%B8%D1%8E%D0%BB%D1%8C_1941_%D0%B3%D0%BE%D0%B4%D0%B0)#31_.D0.B8.D1.8E.D0.BB.D1.8F_1941_.D0.B3.D0.BE.D0.B4.D0.B0._40-.D0.B9_.D0.B4.D0.B5.D0.BD.D1.8C_.D0.B2.D0.BE.D0.B9.D0.BD.D1.8B"
 },
 {
   "from": "1941-08-01",
   "till": "",
   "country": "",
   "province": "",
   "locality": "",
   "where": "",
   "title": "",
   "desc": "Приказом наркома обороны вводится должность начальника Тыла Красной Армии и образовано Главное управление Тыла Красной Армии.",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D0%B0%D0%B2%D0%B3%D1%83%D1%81%D1%82_1941_%D0%B3%D0%BE%D0%B4%D0%B0)#1_.D0.B0.D0.B2.D0.B3.D1.83.D1.81.D1.82.D0.B0_1941_.D0.B3.D0.BE.D0.B4.D0.B0._41-.D0.B9_.D0.B4.D0.B5.D0.BD.D1.8C_.D0.B2.D0.BE.D0.B9.D0.BD.D1.8B"
 },
 {
   "from": "1941-08-01",
   "till": "",
   "country": "",
   "province": "",
   "locality": "",
   "where": "",
   "title": "Smolensk Province, RUS",
   "desc": "Одновременным ударом группы войск под командованием К. К. Рокоссовского и частей 16-й и 20-й армий в районе Смоленска прорван фронт окружения советских войск. (см. карту — Смоленская оборонительная операция. 10 июля — 10 сентября 1941 г.).",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D0%B0%D0%B2%D0%B3%D1%83%D1%81%D1%82_1941_%D0%B3%D0%BE%D0%B4%D0%B0)#1_.D0.B0.D0.B2.D0.B3.D1.83.D1.81.D1.82.D0.B0_1941_.D0.B3.D0.BE.D0.B4.D0.B0._41-.D0.B9_.D0.B4.D0.B5.D0.BD.D1.8C_.D0.B2.D0.BE.D0.B9.D0.BD.D1.8B"
 },
 {
   "from": "1941-08-01",
   "till": "",
   "country": "",
   "province": "",
   "locality": "",
   "where": "",
   "title": "Smolensk Province, RUS",
   "desc": "Группа войск 28-й армии под командованием В. Я. Качалова 1 августа развернула наступление из района Рославля на Смоленск. Противник бросил на Рославль 7-й, 9-й армейские и 24-й моторизованный корпуса, овладел городом и окружил советские части.",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D0%B0%D0%B2%D0%B3%D1%83%D1%81%D1%82_1941_%D0%B3%D0%BE%D0%B4%D0%B0)#1_.D0.B0.D0.B2.D0.B3.D1.83.D1.81.D1.82.D0.B0_1941_.D0.B3.D0.BE.D0.B4.D0.B0._41-.D0.B9_.D0.B4.D0.B5.D0.BD.D1.8C_.D0.B2.D0.BE.D0.B9.D0.BD.D1.8B"
 },
 {
   "from": "1941-08-01",
   "till": "",
   "country": "",
   "province": "",
   "locality": "",
   "where": "",
   "title": "Mogilev Province, RUS",
   "desc": "Наступающий из района Гомеля на Бобруйск 63-й стрелковый корпус Петровского вышел к реке Березина.",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D0%B0%D0%B2%D0%B3%D1%83%D1%81%D1%82_1941_%D0%B3%D0%BE%D0%B4%D0%B0)#1_.D0.B0.D0.B2.D0.B3.D1.83.D1.81.D1.82.D0.B0_1941_.D0.B3.D0.BE.D0.B4.D0.B0._41-.D0.B9_.D0.B4.D0.B5.D0.BD.D1.8C_.D0.B2.D0.BE.D0.B9.D0.BD.D1.8B"
 },
 {
   "from": "1941-08-01",
   "till": "",
   "country": "",
   "province": "",
   "locality": "",
   "where": "",
   "title": "Kiev Province, UKR",
   "desc": "на фронте Киевского УРа немцы провели разведку боем. Передовые отряды немецкой 6-й армии вышли к Днепру южнее Киева. Наступающая на юго-восток 1-я танковая группа Клейста заняла Ново-Миргород (см. карту — Киевская оборонительная операция 7 августа — 26 сентября 1941 г.).",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D0%B0%D0%B2%D0%B3%D1%83%D1%81%D1%82_1941_%D0%B3%D0%BE%D0%B4%D0%B0)#1_.D0.B0.D0.B2.D0.B3.D1.83.D1.81.D1.82.D0.B0_1941_.D0.B3.D0.BE.D0.B4.D0.B0._41-.D0.B9_.D0.B4.D0.B5.D0.BD.D1.8C_.D0.B2.D0.BE.D0.B9.D0.BD.D1.8B"
 },
 {
   "from": "1941-08-01",
   "till": "",
   "country": "",
   "province": "",
   "locality": "",
   "where": "",
   "title": "Franz Halder",
   "desc": "Потери немецкой армии с 22 июня по 31 июля 1941 года составили 205 175 унтер-офицеров и рядовых и 8126 офицеров.",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D0%B0%D0%B2%D0%B3%D1%83%D1%81%D1%82_1941_%D0%B3%D0%BE%D0%B4%D0%B0)#1_.D0.B0.D0.B2.D0.B3.D1.83.D1.81.D1.82.D0.B0_1941_.D0.B3.D0.BE.D0.B4.D0.B0._41-.D0.B9_.D0.B4.D0.B5.D0.BD.D1.8C_.D0.B2.D0.BE.D0.B9.D0.BD.D1.8B"
 },
 {
   "from": "1941-08-01",
   "till": "",
   "country": "",
   "province": "",
   "locality": "",
   "where": "",
   "title": "Совинформбюро",
   "desc": "В течение 1 августа наши войска вели бои с противником на Порховском, Невельском, Смоленском и Житомирском направлениях.",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D0%B0%D0%B2%D0%B3%D1%83%D1%81%D1%82_1941_%D0%B3%D0%BE%D0%B4%D0%B0)#1_.D0.B0.D0.B2.D0.B3.D1.83.D1.81.D1.82.D0.B0_1941_.D0.B3.D0.BE.D0.B4.D0.B0._41-.D0.B9_.D0.B4.D0.B5.D0.BD.D1.8C_.D0.B2.D0.BE.D0.B9.D0.BD.D1.8B"
 },
 {
   "from": "1941-08-02",
   "till": "",
   "country": "",
   "province": "",
   "locality": "",
   "where": "Washington, USA",
   "title": "",
   "desc": "В Вашингтоне заключено Соглашение о продлении сроком на 1 год (до 6 августа 1942 года) действующего между СССР и США торгового соглашения.",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D0%B0%D0%B2%D0%B3%D1%83%D1%81%D1%82_1941_%D0%B3%D0%BE%D0%B4%D0%B0)#2_.D0.B0.D0.B2.D0.B3.D1.83.D1.81.D1.82.D0.B0_1941_.D0.B3.D0.BE.D0.B4.D0.B0._42-.D0.B9_.D0.B4.D0.B5.D0.BD.D1.8C_.D0.B2.D0.BE.D0.B9.D0.BD.D1.8B"
 },
 {
   "from": "1941-08-02",
   "till": "",
   "country": "",
   "province": "",
   "locality": "",
   "where": "Murmansk Province, RUS",
   "title": "",
   "desc": "Корабли Северного флота провели успешную операцию по эвакуации высаженного 14 июля в губе Большая Западная Лица морского десанта.",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D0%B0%D0%B2%D0%B3%D1%83%D1%81%D1%82_1941_%D0%B3%D0%BE%D0%B4%D0%B0)#2_.D0.B0.D0.B2.D0.B3.D1.83.D1.81.D1.82.D0.B0_1941_.D0.B3.D0.BE.D0.B4.D0.B0._42-.D0.B9_.D0.B4.D0.B5.D0.BD.D1.8C_.D0.B2.D0.BE.D0.B9.D0.BD.D1.8B"
 },
 {
   "from": "1941-08-02",
   "till": "",
   "country": "",
   "province": "",
   "locality": "",
   "where": "Nikolayevsk Province, UKR",
   "title": "",
   "desc": "1-я танковая группа прорвалась к Первомайску, в тыл 6-й и 12-й армиям. К этому времени туда же вышла 17-я немецкая армия, наступавшая на Первомайск с северо-запада вдоль Южного Буга. Часть сил 6-й и 12-й армий, не успевшая отойти из района Умани, оказалась окружённой.",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D0%B0%D0%B2%D0%B3%D1%83%D1%81%D1%82_1941_%D0%B3%D0%BE%D0%B4%D0%B0)#2_.D0.B0.D0.B2.D0.B3.D1.83.D1.81.D1.82.D0.B0_1941_.D0.B3.D0.BE.D0.B4.D0.B0._42-.D0.B9_.D0.B4.D0.B5.D0.BD.D1.8C_.D0.B2.D0.BE.D0.B9.D0.BD.D1.8B"
 },
 {
   "from": "1941-08-02",
   "till": "",
   "country": "",
   "province": "",
   "locality": "",
   "where": "",
   "title": "Совинформбюро",
   "desc": "В течение 2 августа наши войска вели бои с противником на Порховском, Смоленском, Коростенском, Белоцерковском направлениях и на Эстонском участке фронта.",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D0%B0%D0%B2%D0%B3%D1%83%D1%81%D1%82_1941_%D0%B3%D0%BE%D0%B4%D0%B0)#2_.D0.B0.D0.B2.D0.B3.D1.83.D1.81.D1.82.D0.B0_1941_.D0.B3.D0.BE.D0.B4.D0.B0._42-.D0.B9_.D0.B4.D0.B5.D0.BD.D1.8C_.D0.B2.D0.BE.D0.B9.D0.BD.D1.8B"
 },
 {
   "from": "1944-07-22",
   "till": "",
   "country": "",
   "province": "",
   "locality": "",
   "where": "Kętrzyn, POL",
   "title": "",
   "desc": "Claus von Stauffenberg and other conspirators attempted to assassinate Adolf Hitler, Führer of Nazi Germany, inside his Wolf's Lair field headquarters near then Rastenburg, East Prussia. ",
   "result": "",
   "link": "https://en.wikipedia.org/wiki/20_July_plot"
 },
 {
   "from": "1942-12-27",
   "till": "1945-05-12",
   "country": "",
   "province": "",
   "locality": "",
   "where": "",
   "title": "\"Русская освободительная армия\"",
   "desc": "Русская освободительная армия - вооружённые силы Комитета освобождения народов России, а также совокупность большинства русских антисоветских частей и подразделений из русских коллаборационистов в составе Вермахта. Преимущественно используется на уровне отдельных батальонов и рот, и сформированных различными немецкими военными структурами.",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A0%D1%83%D1%81%D1%81%D0%BA%D0%B0%D1%8F_%D0%BE%D1%81%D0%B2%D0%BE%D0%B1%D0%BE%D0%B4%D0%B8%D1%82%D0%B5%D0%BB%D1%8C%D0%BD%D0%B0%D1%8F_%D0%B0%D1%80%D0%BC%D0%B8%D1%8F"
 },
 {
   "from": "1942-12-17",
   "till": "",
   "country": "",
   "province": "",
   "locality": "",
   "where": "Berlin, DEU.",
   "title": " Смоленское воззвание",
   "desc": "Андрей Власов и Василий Малышкин, как руководители «Русского освободительного комитета», расположенного в Смоленске, подписывают воззвание к советскому народу на \"борьбу против большевизма\"",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A1%D0%BC%D0%BE%D0%BB%D0%B5%D0%BD%D1%81%D0%BA%D0%B0%D1%8F_%D0%B4%D0%B5%D0%BA%D0%BB%D0%B0%D1%80%D0%B0%D1%86%D0%B8%D1%8F"
 },
 {
   "from": "1941-08-03",
   "till": "",
   "country": "",
   "province": "",
   "locality": "",
   "where": "Nikolayev Province, UKR",
   "title": "",
   "desc": "German armor group 1 заняла Первомайск и отразила контрудар 17-го стрелкового корпуса.",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D0%B0%D0%B2%D0%B3%D1%83%D1%81%D1%82_1941_%D0%B3%D0%BE%D0%B4%D0%B0)#3_.D0.B0.D0.B2.D0.B3.D1.83.D1.81.D1.82.D0.B0_1941_.D0.B3.D0.BE.D0.B4.D0.B0._43-.D0.B9_.D0.B4.D0.B5.D0.BD.D1.8C_.D0.B2.D0.BE.D0.B9.D0.BD.D1.8B"
 },
 {
   "from": "1941-08-03",
   "till": "",
   "country": "",
   "province": "",
   "locality": "",
   "where": "",
   "title": "Franz Halder",
   "desc": "Потери немецких войск с 22 июня по 3 августа 1941 года составили около 242 тыс. человек. Среднесуточные потери — 5628 человек.",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D0%B0%D0%B2%D0%B3%D1%83%D1%81%D1%82_1941_%D0%B3%D0%BE%D0%B4%D0%B0)#3_.D0.B0.D0.B2.D0.B3.D1.83.D1.81.D1.82.D0.B0_1941_.D0.B3.D0.BE.D0.B4.D0.B0._43-.D0.B9_.D0.B4.D0.B5.D0.BD.D1.8C_.D0.B2.D0.BE.D0.B9.D0.BD.D1.8B"
 },
 {
   "from": "1941-08-03",
   "till": "",
   "country": "",
   "province": "",
   "locality": "",
   "where": "",
   "title": "Совинформбюро",
   "desc": "В течение 3 августа наши войска продолжали вести бои с противником на СМОЛЕНСКОМ, КОРОСТЕНСКОМ, БЕЛОЦЕРКОВСКОМ направлениях и на ЭСТОНСКОМ участке фронта.",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D0%B0%D0%B2%D0%B3%D1%83%D1%81%D1%82_1941_%D0%B3%D0%BE%D0%B4%D0%B0)#3_.D0.B0.D0.B2.D0.B3.D1.83.D1.81.D1.82.D0.B0_1941_.D0.B3.D0.BE.D0.B4.D0.B0._43-.D0.B9_.D0.B4.D0.B5.D0.BD.D1.8C_.D0.B2.D0.BE.D0.B9.D0.BD.D1.8B"
 },
 {
   "from": "1941-08-04",
   "till": "",
   "country": "",
   "province": "",
   "locality": "",
   "where": "",
   "title": "Leningrad Defensive",
   "desc": "Директивой Генерального штаба КА Новгородская армейская оперативная группа была преобразована в 48-ю армию С. Д. Акимова ",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D0%B0%D0%B2%D0%B3%D1%83%D1%81%D1%82_1941_%D0%B3%D0%BE%D0%B4%D0%B0)#4_.D0.B0.D0.B2.D0.B3.D1.83.D1.81.D1.82.D0.B0_1941_.D0.B3.D0.BE.D0.B4.D0.B0._44-.D0.B9_.D0.B4.D0.B5.D0.BD.D1.8C_.D0.B2.D0.BE.D0.B9.D0.BD.D1.8B"
 },
 {
   "from": "1941-08-04",
   "till": "",
   "country": "",
   "province": "",
   "locality": "",
   "where": "Cherkassy Province, UKR",
   "title": "",
   "desc": "Для обороны черкасского плацдарма на фронте Белозерье — Степанки — Худяки сформирована 38-я армия. ",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D0%B0%D0%B2%D0%B3%D1%83%D1%81%D1%82_1941_%D0%B3%D0%BE%D0%B4%D0%B0)#4_.D0.B0.D0.B2.D0.B3.D1.83.D1.81.D1.82.D0.B0_1941_.D0.B3.D0.BE.D0.B4.D0.B0._44-.D0.B9_.D0.B4.D0.B5.D0.BD.D1.8C_.D0.B2.D0.BE.D0.B9.D0.BD.D1.8B"
 },
 {
   "from": "1941-08-04",
   "till": "",
   "country": "",
   "province": "",
   "locality": "",
   "where": "Kirovograd Province, UKR",
   "title": "",
   "desc": "Советские войска оставили город Кировоград.",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D0%B0%D0%B2%D0%B3%D1%83%D1%81%D1%82_1941_%D0%B3%D0%BE%D0%B4%D0%B0)#4_.D0.B0.D0.B2.D0.B3.D1.83.D1.81.D1.82.D0.B0_1941_.D0.B3.D0.BE.D0.B4.D0.B0._44-.D0.B9_.D0.B4.D0.B5.D0.BD.D1.8C_.D0.B2.D0.BE.D0.B9.D0.BD.D1.8B"
 },
 {
   "from": "1941-08-04",
   "till": "",
   "country": "",
   "province": "",
   "locality": "",
   "where": "Odessa Province, UKR",
   "title": "",
   "desc": "Советские войска оставили город Котовск.",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D0%B0%D0%B2%D0%B3%D1%83%D1%81%D1%82_1941_%D0%B3%D0%BE%D0%B4%D0%B0)#4_.D0.B0.D0.B2.D0.B3.D1.83.D1.81.D1.82.D0.B0_1941_.D0.B3.D0.BE.D0.B4.D0.B0._44-.D0.B9_.D0.B4.D0.B5.D0.BD.D1.8C_.D0.B2.D0.BE.D0.B9.D0.BD.D1.8B"
 },
 {
   "from": "1941-08-04",
   "till": "",
   "country": "",
   "province": "",
   "locality": "",
   "where": "Odessa Province, UKR",
   "title": "",
   "desc": "Войска Южного фронта начали отход за реку Днестр. 4 августа главнокомандующий Военно-Морского Флота адмирал Н. Г. Кузнецов дал указания Военному совету Черноморского флота по организации и ведению обороны Одессы.",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D0%B0%D0%B2%D0%B3%D1%83%D1%81%D1%82_1941_%D0%B3%D0%BE%D0%B4%D0%B0)#4_.D0.B0.D0.B2.D0.B3.D1.83.D1.81.D1.82.D0.B0_1941_.D0.B3.D0.BE.D0.B4.D0.B0._44-.D0.B9_.D0.B4.D0.B5.D0.BD.D1.8C_.D0.B2.D0.BE.D0.B9.D0.BD.D1.8B"
 },
 {
   "from": "1941-07-27",
   "till": "1941-09-28",
   "country": "",
   "province": "",
   "locality": "",
   "where": "",
   "title": "Tiraspol-Melitopol Defensive",
   "desc": "оборонительная операция Южного фронта на Юге Украины",
   "result": "Победа стран Оси. Немецко-румынские войска оккупировали территории Одесской, Николаевской, Херсонской областей Украинской ССР, советские войска отошли на линию Перекоп — Мелитополь — Никополь — Запорожье",
   "link": "https://ru.wikipedia.org/wiki/%D0%A2%D0%B8%D1%80%D0%B0%D1%81%D0%BF%D0%BE%D0%BB%D1%8C%D1%81%D0%BA%D0%BE-%D0%9C%D0%B5%D0%BB%D0%B8%D1%82%D0%BE%D0%BF%D0%BE%D0%BB%D1%8C%D1%81%D0%BA%D0%B0%D1%8F_%D0%BE%D0%B1%D0%BE%D1%80%D0%BE%D0%BD%D0%B8%D1%82%D0%B5%D0%BB%D1%8C%D0%BD%D0%B0%D1%8F_%D0%BE%D0%BF%D0%B5%D1%80%D0%B0%D1%86%D0%B8%D1%8F"
 },
 {
   "from": "1941-08-04",
   "till": "",
   "country": "",
   "province": "",
   "locality": "",
   "where": "",
   "title": "Совинформбюро",
   "desc": "В течение 4 августа происходили ожесточённые бои на Холмском, Смоленском и Белоцерковском направлениях.",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D0%B0%D0%B2%D0%B3%D1%83%D1%81%D1%82_1941_%D0%B3%D0%BE%D0%B4%D0%B0)#4_.D0.B0.D0.B2.D0.B3.D1.83.D1.81.D1.82.D0.B0_1941_.D0.B3.D0.BE.D0.B4.D0.B0._44-.D0.B9_.D0.B4.D0.B5.D0.BD.D1.8C_.D0.B2.D0.BE.D0.B9.D0.BD.D1.8B"
 },
 {
   "from": "1941-08-05",
   "till": "1941-08-28",
   "country": "",
   "province": "",
   "locality": "",
   "where": "Tallinn, EST",
   "title": "Таллиннская оборона",
   "desc": "оборона столицы Эстонской ССР и главной базы Балтийского флота Красной Армией от немецких войск.",
   "result": "Тактическая и оперативная победа Германии. Переход КБФ из Таллина в Кронштадт",
   "link": "https://ru.wikipedia.org/wiki/%D0%A2%D0%B0%D0%BB%D0%BB%D0%B8%D0%BD%D1%81%D0%BA%D0%B0%D1%8F_%D0%BE%D0%B1%D0%BE%D1%80%D0%BE%D0%BD%D0%B0_(1941)"
 },
 {
   "from": "1941-08-05",
   "till": "",
   "country": "",
   "province": "",
   "locality": "",
   "where": "Smolensk Province, RUS",
   "title": "",
   "desc": "Germans liquidate a group of our troops surrounded near Smolensk",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D0%B0%D0%B2%D0%B3%D1%83%D1%81%D1%82_1941_%D0%B3%D0%BE%D0%B4%D0%B0)#5_.D0.B0.D0.B2.D0.B3.D1.83.D1.81.D1.82.D0.B0_1941_.D0.B3.D0.BE.D0.B4.D0.B0._45-.D0.B9_.D0.B4.D0.B5.D0.BD.D1.8C_.D0.B2.D0.BE.D0.B9.D0.BD.D1.8B"
 },
 {
   "from": "1941-08-05",
   "till": "",
   "country": "",
   "province": "",
   "locality": "",
   "where": "Cherkassy Province, UKR",
   "title": "",
   "desc": "The rest the group of Major General Pavel Ponedelin capitulate near Uman.",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D0%B0%D0%B2%D0%B3%D1%83%D1%81%D1%82_1941_%D0%B3%D0%BE%D0%B4%D0%B0)#5_.D0.B0.D0.B2.D0.B3.D1.83.D1.81.D1.82.D0.B0_1941_.D0.B3.D0.BE.D0.B4.D0.B0._45-.D0.B9_.D0.B4.D0.B5.D0.BD.D1.8C_.D0.B2.D0.BE.D0.B9.D0.BD.D1.8B"
 },
 {
   "from": "1941-08-05",
   "till": "",
   "country": "",
   "province": "",
   "locality": "",
   "where": "Cherkassy Province, UKR",
   "title": "",
   "desc": "Ставки ВГК направила командованию Южного фронта директиву об отводе войск фронта на рубеж Чигирин — Вознесенск — Днестровский лиман. Одновременно командующий Южным фронтом получил приказ оборонять Одессу до последней возможности.",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D0%B0%D0%B2%D0%B3%D1%83%D1%81%D1%82_1941_%D0%B3%D0%BE%D0%B4%D0%B0)#5_.D0.B0.D0.B2.D0.B3.D1.83.D1.81.D1.82.D0.B0_1941_.D0.B3.D0.BE.D0.B4.D0.B0._45-.D0.B9_.D0.B4.D0.B5.D0.BD.D1.8C_.D0.B2.D0.BE.D0.B9.D0.BD.D1.8B"
 },
 {
   "from": "1941-07-16",
   "till": "1941-08-10",
   "country": "",
   "province": "",
   "locality": "",
   "where": "Cherkassy Province, UKR",
   "title": "Battle of Uman",
   "desc": "В ходе наступления группы армий «Юг» вермахта на территории СССР. ",
   "result": "The battle lead to the entrapment (so called Uman Pocket / уманский котёл) и последующей гибели войск 6-й и 12-й армий Юго-Западного фронта и отдельных частей Южного фронта Красной армии. В окружение попали около 65 тыс. человек, 242 танка. С 1 по 8 августа из окружения вышло до 11 000 человек и 1015 автомашин с боевым имуществом. Acc to Germans, захвачено 103 тыс. пленных, 317 танков и 858 единиц артиллерии.",
   "link": "https://ru.wikipedia.org/wiki/%D0%A1%D1%80%D0%B0%D0%B6%D0%B5%D0%BD%D0%B8%D0%B5_%D0%BF%D0%BE%D0%B4_%D0%A3%D0%BC%D0%B0%D0%BD%D1%8C%D1%8E"
 },
 {
   "from": "1941-08-05",
   "till": "1941-10-16",
   "country": "",
   "province": "",
   "locality": "",
   "where": "Odessa Province, UKR",
   "title": "Odessa Defensive",
   "desc": "оборона Одессы войсками Приморской армии Г. П. Софронова.",
   "result": "Плановая эвакуация всех оборонявшихся. В ходе обороны города сравнительно небольшим силам обороняющихся удалось отражать удары значительно превосходящих сил противника. Снабжение города осуществлялось транспортными судами и боевыми кораблями Черноморского флота. Последние также поддерживали оборону огнём своих орудий.",
   "link": "https://ru.wikipedia.org/wiki/%D0%9E%D0%B4%D0%B5%D1%81%D1%81%D0%BA%D0%B0%D1%8F_%D0%BE%D0%B1%D0%BE%D1%80%D0%BE%D0%BD%D0%B0_(1941)"
 },
 {
   "from": "1941-08-05",
   "till": "",
   "country": "",
   "province": "",
   "locality": "",
   "where": "Moscow, RUS",
   "title": "Совинформбюро",
   "desc": "В течение 5 августа наши войска продолжали вести бои с противником на СМОЛЕНСКОМ, КОРОСТЕНСКОМ, БЕЛОЦЕРКОВСКОМ направлениях и на ЭСТОНСКОМ участке фронта.",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D0%B0%D0%B2%D0%B3%D1%83%D1%81%D1%82_1941_%D0%B3%D0%BE%D0%B4%D0%B0)#5_.D0.B0.D0.B2.D0.B3.D1.83.D1.81.D1.82.D0.B0_1941_.D0.B3.D0.BE.D0.B4.D0.B0._45-.D0.B9_.D0.B4.D0.B5.D0.BD.D1.8C_.D0.B2.D0.BE.D0.B9.D0.BD.D1.8B"
 },
 {
   "from": "1941-08-05",
   "till": "",
   "country": "",
   "province": "",
   "locality": "",
   "where": "Novgorod Province, RUS",
   "title": "",
   "desc": "Войска группы армий «Север» ворвались в Старую Руссу.",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D0%B0%D0%B2%D0%B3%D1%83%D1%81%D1%82_1941_%D0%B3%D0%BE%D0%B4%D0%B0)#6_.D0.B0.D0.B2.D0.B3.D1.83.D1.81.D1.82.D0.B0_1941_.D0.B3.D0.BE.D0.B4.D0.B0._46-.D0.B9_.D0.B4.D0.B5.D0.BD.D1.8C_.D0.B2.D0.BE.D0.B9.D0.BD.D1.8B"
 },
 {
   "from": "1941-08-09",
   "till": "1944-02-18",
   "country": "",
   "province": "",
   "locality": "",
   "where": "Novgorod Province, RUS",
   "title": "Occupation of Staraya Russa",
   "desc": "",
   "result": "",
   "link": "http://diplomba.ru/work/82223"
 },
 {
   "from": "1941-08-06",
   "till": "",
   "country": "",
   "province": "",
   "locality": "",
   "where": "",
   "title": "Franz Halder",
   "desc": "Потери немецких войск с 22 июня по 6 августа 1941 года составили около 266 352 человека. Среднесуточные потери — 5790 человек.",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D0%B0%D0%B2%D0%B3%D1%83%D1%81%D1%82_1941_%D0%B3%D0%BE%D0%B4%D0%B0)#6_.D0.B0.D0.B2.D0.B3.D1.83.D1.81.D1.82.D0.B0_1941_.D0.B3.D0.BE.D0.B4.D0.B0._46-.D0.B9_.D0.B4.D0.B5.D0.BD.D1.8C_.D0.B2.D0.BE.D0.B9.D0.BD.D1.8B"
 },
 {
   "from": "1941-08-06",
   "till": "",
   "country": "",
   "province": "",
   "locality": "",
   "where": "Moscow, RUS",
   "title": "Совинформбюро",
   "desc": "В течение 6 августа наши войска вели упорные бои с противником на КЕКСГОЛЬМСКОМ, СМОЛЕНСКОМ, БЕЛОЦЕРКОВСКОМ направлениях и на ЭСТОНСКОМ участке фронта.",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D0%B0%D0%B2%D0%B3%D1%83%D1%81%D1%82_1941_%D0%B3%D0%BE%D0%B4%D0%B0)#6_.D0.B0.D0.B2.D0.B3.D1.83.D1.81.D1.82.D0.B0_1941_.D0.B3.D0.BE.D0.B4.D0.B0._46-.D0.B9_.D0.B4.D0.B5.D0.BD.D1.8C_.D0.B2.D0.BE.D0.B9.D0.BD.D1.8B"
 },
 {
   "from": "1941-08-07",
   "till": "",
   "country": "",
   "province": "",
   "locality": "",
   "where": "Moscow, RUS",
   "title": "",
   "desc": "SDC (the State Defense Committe / ГКО) принял постановление о перебазировании на Урал цехов металлургических заводов «Серп и молот» и «Электросталь»; «О порядке размещения эвакуируемых предприятий».",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D0%B0%D0%B2%D0%B3%D1%83%D1%81%D1%82_1941_%D0%B3%D0%BE%D0%B4%D0%B0)#7_.D0.B0.D0.B2.D0.B3.D1.83.D1.81.D1.82.D0.B0_1941_.D0.B3.D0.BE.D0.B4.D0.B0._47-.D0.B9_.D0.B4.D0.B5.D0.BD.D1.8C_.D0.B2.D0.BE.D0.B9.D0.BD.D1.8B"
 },
 {
   "from": "1941-08-07",
   "till": "",
   "country": "",
   "province": "",
   "locality": "",
   "where": "Moscow Province, RUS",
   "title": "",
   "desc": "Лётчик-истребитель В. В. Талалихин при обороне воздушных подступов к Москве совершил ночной таран и уничтожил вражеский бомбардировщик.",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D0%B0%D0%B2%D0%B3%D1%83%D1%81%D1%82_1941_%D0%B3%D0%BE%D0%B4%D0%B0)#7_.D0.B0.D0.B2.D0.B3.D1.83.D1.81.D1.82.D0.B0_1941_.D0.B3.D0.BE.D0.B4.D0.B0._47-.D0.B9_.D0.B4.D0.B5.D0.BD.D1.8C_.D0.B2.D0.BE.D0.B9.D0.BD.D1.8B"
 },
 {
   "from": "1941-08-07",
   "till": "",
   "country": "",
   "province": "",
   "locality": "",
   "where": "EST",
   "title": "",
   "desc": "На правом фланге Северо-Западного направления, в Эстонии, 18-я армия группы армий «Север» прорвала фронт обороны 8-й армии и 7 августа вышла на побережье Финского залива в районе Кунда, перерезав железную и шоссейную дорогу Ленинград — Таллин. Советские войска, сражавшиеся в Эстонии, оказались рассечёнными на две части: 11-й стрелковый корпус начал с боями отходить к Нарве, а 10-й стрелковый корпус — к Таллину.",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D0%B0%D0%B2%D0%B3%D1%83%D1%81%D1%82_1941_%D0%B3%D0%BE%D0%B4%D0%B0)#7_.D0.B0.D0.B2.D0.B3.D1.83.D1.81.D1.82.D0.B0_1941_.D0.B3.D0.BE.D0.B4.D0.B0._47-.D0.B9_.D0.B4.D0.B5.D0.BD.D1.8C_.D0.B2.D0.BE.D0.B9.D0.BD.D1.8B"
 },
 {
   "from": "1941-08-07",
   "till": "",
   "country": "",
   "province": "",
   "locality": "",
   "where": "Kiev Province, UKR",
   "title": "",
   "desc": "5-я армия Юго-западного фронта остановила наступление войск противника на линии железной дороги Коростень — Киев. 26-я армия Юго-Западного фронта нанесла контрудар в направлении на Богуслав и на следующий день освободила город, создав угрозу тылу 1-й танковой группы противника. Кроме того, войска армии форсировали Днепр севернее Богуслава и образовали плацдарм у Триполья.",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D0%B0%D0%B2%D0%B3%D1%83%D1%81%D1%82_1941_%D0%B3%D0%BE%D0%B4%D0%B0)#7_.D0.B0.D0.B2.D0.B3.D1.83.D1.81.D1.82.D0.B0_1941_.D0.B3.D0.BE.D0.B4.D0.B0._47-.D0.B9_.D0.B4.D0.B5.D0.BD.D1.8C_.D0.B2.D0.BE.D0.B9.D0.BD.D1.8B"
 },
 {
   "from": "1941-08-07",
   "till": "",
   "country": "",
   "province": "",
   "locality": "",
   "where": "Moscow, RUS",
   "title": "Совинформбюро",
   "desc": "В течение 7 августа наши войска продолжали вести упорные бои с противником на КЕКСГОЛЬМСКОМ, ХОЛМСКОМ, СМОЛЕНСКОМ и БЕЛОЦЕРКОВСКОМ направлениях. Арабские сказки немецкого верховного командования или шестинедельные итоги войны...",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D0%B0%D0%B2%D0%B3%D1%83%D1%81%D1%82_1941_%D0%B3%D0%BE%D0%B4%D0%B0)#7_.D0.B0.D0.B2.D0.B3.D1.83.D1.81.D1.82.D0.B0_1941_.D0.B3.D0.BE.D0.B4.D0.B0._47-.D0.B9_.D0.B4.D0.B5.D0.BD.D1.8C_.D0.B2.D0.BE.D0.B9.D0.BD.D1.8B"
 },
 {
   "from": "1941-08-08",
   "till": "",
   "country": "",
   "province": "",
   "locality": "",
   "where": "Moscow, RUS",
   "title": "",
   "desc": "Постановлением Государственного Комитета Обороны и Центрального Комитета партии Ставка Верховного Командования была преобразована в Ставку Верховного Главнокомандования. Верховным Главнокомандующим Вооружёнными Силами СССР назначен И. В. Сталин.",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D0%B0%D0%B2%D0%B3%D1%83%D1%81%D1%82_1941_%D0%B3%D0%BE%D0%B4%D0%B0)#8_.D0.B0.D0.B2.D0.B3.D1.83.D1.81.D1.82.D0.B0_1941_.D0.B3.D0.BE.D0.B4.D0.B0._48-.D0.B9_.D0.B4.D0.B5.D0.BD.D1.8C_.D0.B2.D0.BE.D0.B9.D0.BD.D1.8B"
 },
 {
   "from": "1941-08-08",
   "till": "",
   "country": "",
   "province": "",
   "locality": "",
   "where": "Berlin, DEU",
   "title": "Berlin Bombardment #1",
   "desc": "Спецгруппа 1-го минно-торпедного полка Балтийского флота под командованием полковника Е. Н. Преображенского на 12 самолётах ДБ-3 осуществила в ночь на 8 августа первую бомбардировку Берлина. По 4 сентября с острова Сааремаа на Берлин совершило 9 налётов, 81 самолёто-вылет (55 завершились ударами по городу, остальные — по другим военным объектам).",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D0%B0%D0%B2%D0%B3%D1%83%D1%81%D1%82_1941_%D0%B3%D0%BE%D0%B4%D0%B0)#8_.D0.B0.D0.B2.D0.B3.D1.83.D1.81.D1.82.D0.B0_1941_.D0.B3.D0.BE.D0.B4.D0.B0._48-.D0.B9_.D0.B4.D0.B5.D0.BD.D1.8C_.D0.B2.D0.BE.D0.B9.D0.BD.D1.8B"
 },
 {
   "from": "1941-08-08",
   "till": "",
   "country": "",
   "province": "",
   "locality": "",
   "where": "Leningrad Province, RUS",
   "title": "",
   "desc": "41-й мотокорпус 4-й танковой группы начал наступление на Красногвардейском направлении.",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D0%B0%D0%B2%D0%B3%D1%83%D1%81%D1%82_1941_%D0%B3%D0%BE%D0%B4%D0%B0)#8_.D0.B0.D0.B2.D0.B3.D1.83.D1.81.D1.82.D0.B0_1941_.D0.B3.D0.BE.D0.B4.D0.B0._48-.D0.B9_.D0.B4.D0.B5.D0.BD.D1.8C_.D0.B2.D0.BE.D0.B9.D0.BD.D1.8B"
 },
 {
   "from": "1941-08-08",
   "till": "",
   "country": "",
   "province": "",
   "locality": "",
   "where": "Smolensk Province, RUS",
   "title": "",
   "desc": "В районе Рославля 43-я армия остановила наступление немецких частей на рубеже Десны.",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D0%B0%D0%B2%D0%B3%D1%83%D1%81%D1%82_1941_%D0%B3%D0%BE%D0%B4%D0%B0)#8_.D0.B0.D0.B2.D0.B3.D1.83.D1.81.D1.82.D0.B0_1941_.D0.B3.D0.BE.D0.B4.D0.B0._48-.D0.B9_.D0.B4.D0.B5.D0.BD.D1.8C_.D0.B2.D0.BE.D0.B9.D0.BD.D1.8B"
 },
 {
   "from": "1941-08-08",
   "till": "",
   "country": "",
   "province": "",
   "locality": "",
   "where": "Gomel Province, BLR",
   "title": "",
   "desc": "2-я немецкая армия и 2-я танковая группа перешли в наступление в направлении на Гомель и Стародуб. Войска Центрального фронта не выдержали внезапных сильных ударов и начали отступать в южном и юго-восточном направлениях.",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D0%B0%D0%B2%D0%B3%D1%83%D1%81%D1%82_1941_%D0%B3%D0%BE%D0%B4%D0%B0)#8_.D0.B0.D0.B2.D0.B3.D1.83.D1.81.D1.82.D0.B0_1941_.D0.B3.D0.BE.D0.B4.D0.B0._48-.D0.B9_.D0.B4.D0.B5.D0.BD.D1.8C_.D0.B2.D0.BE.D0.B9.D0.BD.D1.8B"
 },
 {
   "from": "1941-08-08",
   "till": "",
   "country": "",
   "province": "",
   "locality": "",
   "where": "Dnepropetrovsk Province, UKR",
   "title": "",
   "desc": "1-я танковая группа вышла к Кривому Рогу и в район Кременчуга.",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D0%B0%D0%B2%D0%B3%D1%83%D1%81%D1%82_1941_%D0%B3%D0%BE%D0%B4%D0%B0)#8_.D0.B0.D0.B2.D0.B3.D1.83.D1.81.D1.82.D0.B0_1941_.D0.B3.D0.BE.D0.B4.D0.B0._48-.D0.B9_.D0.B4.D0.B5.D0.BD.D1.8C_.D0.B2.D0.BE.D0.B9.D0.BD.D1.8B"
 },
 {
   "from": "1941-08-08",
   "till": "",
   "country": "",
   "province": "",
   "locality": "",
   "where": "",
   "title": "",
   "desc": "Сломив сопротивление 6-й и 12-й армии, немецкие войска получили возможность беспрепятственно продвигаться к Днепру и в тыл войскам Южного фронта. В связи с этим начался отвод всех армий на левый берег р. Южный Буг.",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D0%B0%D0%B2%D0%B3%D1%83%D1%81%D1%82_1941_%D0%B3%D0%BE%D0%B4%D0%B0)#8_.D0.B0.D0.B2.D0.B3.D1.83.D1.81.D1.82.D0.B0_1941_.D0.B3.D0.BE.D0.B4.D0.B0._48-.D0.B9_.D0.B4.D0.B5.D0.BD.D1.8C_.D0.B2.D0.BE.D0.B9.D0.BD.D1.8B"
 },
 {
   "from": "1941-08-08",
   "till": "",
   "country": "",
   "province": "",
   "locality": "",
   "where": "South UKR",
   "title": "",
   "desc": "противник нанёс удар по стыку 9-й и Приморской армий в районе Жовтень и вынудил Приморскую армию отходить на юг к Одессе, а 9-ю и 18-ю армии — на восток к Николаеву. Today немцы перерезали шоссейную дорогу Одесса—Николаев.",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D0%B0%D0%B2%D0%B3%D1%83%D1%81%D1%82_1941_%D0%B3%D0%BE%D0%B4%D0%B0)#8_.D0.B0.D0.B2.D0.B3.D1.83.D1.81.D1.82.D0.B0_1941_.D0.B3.D0.BE.D0.B4.D0.B0._48-.D0.B9_.D0.B4.D0.B5.D0.BD.D1.8C_.D0.B2.D0.BE.D0.B9.D0.BD.D1.8B"
 },
 {
   "from": "1941-08-08",
   "till": "",
   "country": "",
   "province": "",
   "locality": "",
   "where": "Moscow, RUS",
   "title": "Совинформбюро",
   "desc": "В течение 8 августа наши войска продолжали вести бои с противником на КЕКСГОЛЬМСКОМ, СМОЛЕНСКОМ, КОРОСТЕНСКОМ, БЕЛОЦЕРКОВСКОМ направлениях и на ЭСТОНСКОМ участке фронта. | Nazi Atrocities in Lvov",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D0%B0%D0%B2%D0%B3%D1%83%D1%81%D1%82_1941_%D0%B3%D0%BE%D0%B4%D0%B0)#8_.D0.B0.D0.B2.D0.B3.D1.83.D1.81.D1.82.D0.B0_1941_.D0.B3.D0.BE.D0.B4.D0.B0._48-.D0.B9_.D0.B4.D0.B5.D0.BD.D1.8C_.D0.B2.D0.BE.D0.B9.D0.BD.D1.8B"
 },
 {
   "from": "1941-08-09",
   "till": "",
   "country": "",
   "province": "",
   "locality": "",
   "where": "",
   "title": "",
   "desc": "СССР и Великобритания выступили с декларацией правительству Турции о готовности соблюдать её территориальную целостность и оказать ей помощь в случае нападения на неё какой-либо европейской державы.",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D0%B0%D0%B2%D0%B3%D1%83%D1%81%D1%82_1941_%D0%B3%D0%BE%D0%B4%D0%B0)#9_.D0.B0.D0.B2.D0.B3.D1.83.D1.81.D1.82.D0.B0_1941_.D0.B3.D0.BE.D0.B4.D0.B0._49-.D0.B9_.D0.B4.D0.B5.D0.BD.D1.8C_.D0.B2.D0.BE.D0.B9.D0.BD.D1.8B"
 },
 {
   "from": "1941-08-09",
   "till": "",
   "country": "",
   "province": "",
   "locality": "",
   "where": "Berlin, DEU",
   "title": "",
   "desc": "Самолёты 81-й авиадивизии под командованием комбрига М. В. Водопьянова бомбардировали Берлин.",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D0%B0%D0%B2%D0%B3%D1%83%D1%81%D1%82_1941_%D0%B3%D0%BE%D0%B4%D0%B0)#9_.D0.B0.D0.B2.D0.B3.D1.83.D1.81.D1.82.D0.B0_1941_.D0.B3.D0.BE.D0.B4.D0.B0._49-.D0.B9_.D0.B4.D0.B5.D0.BD.D1.8C_.D0.B2.D0.BE.D0.B9.D0.BD.D1.8B"
 },
 {
   "from": "1941-08-09",
   "till": "",
   "country": "",
   "province": "",
   "locality": "",
   "where": "Lahdenpohja, Karelia",
   "title": "",
   "desc": "Финны заняли город Лахденпохья и расчленили прижатые к северному берегу Ладожского озера войска 23-й армии на две изолированные группировки.",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D0%B0%D0%B2%D0%B3%D1%83%D1%81%D1%82_1941_%D0%B3%D0%BE%D0%B4%D0%B0)#9_.D0.B0.D0.B2.D0.B3.D1.83.D1.81.D1.82.D0.B0_1941_.D0.B3.D0.BE.D0.B4.D0.B0._49-.D0.B9_.D0.B4.D0.B5.D0.BD.D1.8C_.D0.B2.D0.BE.D0.B9.D0.BD.D1.8B"
 },
 {
   "from": "1941-08-09",
   "till": "",
   "country": "",
   "province": "",
   "locality": "",
   "where": "Tallinn, EST",
   "title": "",
   "desc": "Немецкая 18-я армия вышла к побережью Финского залива, расчленила группировку советских войск и ведёт преследование отходящих частей на восток и Таллин.",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D0%B0%D0%B2%D0%B3%D1%83%D1%81%D1%82_1941_%D0%B3%D0%BE%D0%B4%D0%B0)#9_.D0.B0.D0.B2.D0.B3.D1.83.D1.81.D1.82.D0.B0_1941_.D0.B3.D0.BE.D0.B4.D0.B0._49-.D0.B9_.D0.B4.D0.B5.D0.BD.D1.8C_.D0.B2.D0.BE.D0.B9.D0.BD.D1.8B"
 },
 {
   "from": "1941-08-09",
   "till": "",
   "country": "",
   "province": "",
   "locality": "",
   "where": "Leningrad Province, RUS",
   "title": "Leningrad Offensive by DEU",
   "desc": "Началось наступление противника на Ленинград на Лужском и Чудовском направлениях.",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D0%B0%D0%B2%D0%B3%D1%83%D1%81%D1%82_1941_%D0%B3%D0%BE%D0%B4%D0%B0)#9_.D0.B0.D0.B2.D0.B3.D1.83.D1.81.D1.82.D0.B0_1941_.D0.B3.D0.BE.D0.B4.D0.B0._49-.D0.B9_.D0.B4.D0.B5.D0.BD.D1.8C_.D0.B2.D0.BE.D0.B9.D0.BD.D1.8B"
 },
 {
   "from": "1941-08-09",
   "till": "",
   "country": "",
   "province": "",
   "locality": "",
   "where": "Novgorod Province, RUS",
   "title": "",
   "desc": "Советские войска оставили город Старая Русса.",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D0%B0%D0%B2%D0%B3%D1%83%D1%81%D1%82_1941_%D0%B3%D0%BE%D0%B4%D0%B0)#9_.D0.B0.D0.B2.D0.B3.D1.83.D1.81.D1.82.D0.B0_1941_.D0.B3.D0.BE.D0.B4.D0.B0._49-.D0.B9_.D0.B4.D0.B5.D0.BD.D1.8C_.D0.B2.D0.BE.D0.B9.D0.BD.D1.8B"
 },
 {
   "from": "1941-08-09",
   "till": "",
   "country": "",
   "province": "",
   "locality": "",
   "where": "Gomel Province, BLR",
   "title": "",
   "desc": "Группа армий «Центр» перешла в наступление на Рогачев.",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D0%B0%D0%B2%D0%B3%D1%83%D1%81%D1%82_1941_%D0%B3%D0%BE%D0%B4%D0%B0)#9_.D0.B0.D0.B2.D0.B3.D1.83.D1.81.D1.82.D0.B0_1941_.D0.B3.D0.BE.D0.B4.D0.B0._49-.D0.B9_.D0.B4.D0.B5.D0.BD.D1.8C_.D0.B2.D0.BE.D0.B9.D0.BD.D1.8B"
 },
 {
   "from": "1941-08-09",
   "till": "",
   "country": "",
   "province": "",
   "locality": "",
   "where": "Kiev Province, UKR",
   "title": "",
   "desc": "37-я армия отбросила ворвавшиеся в юго-западные пригороды Киева части противника. Группа армий «Юг» на центральном участке фронта продолжает борьбу с советскими войсками, прорвавшимися к Богуславу, на южном фланге преследуют противника. ",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D0%B0%D0%B2%D0%B3%D1%83%D1%81%D1%82_1941_%D0%B3%D0%BE%D0%B4%D0%B0)#9_.D0.B0.D0.B2.D0.B3.D1.83.D1.81.D1.82.D0.B0_1941_.D0.B3.D0.BE.D0.B4.D0.B0._49-.D0.B9_.D0.B4.D0.B5.D0.BD.D1.8C_.D0.B2.D0.BE.D0.B9.D0.BD.D1.8B"
 },
 {
   "from": "1941-08-09",
   "till": "",
   "country": "",
   "province": "",
   "locality": "",
   "where": "Odessa Province, UKR",
   "title": "",
   "desc": "Войска Приморской армии отошли на передовой рубеж обороны Одессы в 20—25 километров от города.",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D0%B0%D0%B2%D0%B3%D1%83%D1%81%D1%82_1941_%D0%B3%D0%BE%D0%B4%D0%B0)#9_.D0.B0.D0.B2.D0.B3.D1.83.D1.81.D1.82.D0.B0_1941_.D0.B3.D0.BE.D0.B4.D0.B0._49-.D0.B9_.D0.B4.D0.B5.D0.BD.D1.8C_.D0.B2.D0.BE.D0.B9.D0.BD.D1.8B"
 },
 {
   "from": "1941-08-09",
   "till": "",
   "country": "",
   "province": "",
   "locality": "",
   "where": "Moscow, RUS",
   "title": "Совинформбюро",
   "desc": "В течение 9 августа наши войска вели ожесточённые бои с противником на КЕКСГОЛЬМСКОМ, СМОЛЕНСКОМ, КОРОСТЕНСКОМ И БЕЛОЦЕРКОВСКОМ направлениях. :: Nazi atrocities in Brest and Minsk",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D0%B0%D0%B2%D0%B3%D1%83%D1%81%D1%82_1941_%D0%B3%D0%BE%D0%B4%D0%B0)#9_.D0.B0.D0.B2.D0.B3.D1.83.D1.81.D1.82.D0.B0_1941_.D0.B3.D0.BE.D0.B4.D0.B0._49-.D0.B9_.D0.B4.D0.B5.D0.BD.D1.8C_.D0.B2.D0.BE.D0.B9.D0.BD.D1.8B"
 },
 {
   "from": "1941-08-10",
   "till": "",
   "country": "",
   "province": "",
   "locality": "",
   "where": "Novgorod Province, RUS",
   "title": "",
   "desc": "Войска группы армий «Север» перешли в наступление в направлении на Новгород и Лугу.",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D0%B0%D0%B2%D0%B3%D1%83%D1%81%D1%82_1941_%D0%B3%D0%BE%D0%B4%D0%B0)#10_.D0.B0.D0.B2.D0.B3.D1.83.D1.81.D1.82.D0.B0_1941_.D0.B3.D0.BE.D0.B4.D0.B0._50-.D0.B9_.D0.B4.D0.B5.D0.BD.D1.8C_.D0.B2.D0.BE.D0.B9.D0.BD.D1.8B"
 },
 {
   "from": "1941-08-10",
   "till": "",
   "country": "ukraine",
   "province": "kiev",
   "locality": "",
   "where": "",
   "title": "",
   "desc": "6-я немецкая армия прекратила наступление на Киев и перешла к обороне на рубеже Триполье, Киев, Коростень.",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D0%B0%D0%B2%D0%B3%D1%83%D1%81%D1%82_1941_%D0%B3%D0%BE%D0%B4%D0%B0)#10_.D0.B0.D0.B2.D0.B3.D1.83.D1.81.D1.82.D0.B0_1941_.D0.B3.D0.BE.D0.B4.D0.B0._50-.D0.B9_.D0.B4.D0.B5.D0.BD.D1.8C_.D0.B2.D0.BE.D0.B9.D0.BD.D1.8B"
 },
 {
   "from": "1941-08-10",
   "till": "",
   "country": "russia",
   "province": "moscow",
   "locality": "moscow",
   "where": "",
   "title": "Совинформбюро",
   "desc": "В течение 10 августа наши войска продолжали вести с противником упорные бои на СОЛЬЦСКОМ, ХОЛМСКОМ, СМОЛЕНСКОМ, БЕЛОЦЕРКОВСКОМ и УМАНСКОМ направлениях.",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D0%B0%D0%B2%D0%B3%D1%83%D1%81%D1%82_1941_%D0%B3%D0%BE%D0%B4%D0%B0)#10_.D0.B0.D0.B2.D0.B3.D1.83.D1.81.D1.82.D0.B0_1941_.D0.B3.D0.BE.D0.B4.D0.B0._50-.D0.B9_.D0.B4.D0.B5.D0.BD.D1.8C_.D0.B2.D0.BE.D0.B9.D0.BD.D1.8B"
 },
 {
   "from": "1941-08-11",
   "till": "",
   "country": "russia",
   "province": "novgorod",
   "locality": "",
   "where": "",
   "title": "",
   "desc": "Немецкий 1-й армейский корпус занял Шимск",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D0%B0%D0%B2%D0%B3%D1%83%D1%81%D1%82_1941_%D0%B3%D0%BE%D0%B4%D0%B0)#11_.D0.B0.D0.B2.D0.B3.D1.83.D1.81.D1.82.D0.B0_1941_.D0.B3.D0.BE.D0.B4.D0.B0._51-.D0.B9_.D0.B4.D0.B5.D0.BD.D1.8C_.D0.B2.D0.BE.D0.B9.D0.BD.D1.8B"
 },
 {
   "from": "1941-08-11",
   "till": "",
   "country": "belarus",
   "province": "smolensk",
   "locality": "",
   "where": "",
   "title": "",
   "desc": "Войска Западного фронта, развёрнутые от реки Западная Двина до города Ярцево, вынудили противника перейти к обороне на московском направлении.",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D0%B0%D0%B2%D0%B3%D1%83%D1%81%D1%82_1941_%D0%B3%D0%BE%D0%B4%D0%B0)#11_.D0.B0.D0.B2.D0.B3.D1.83.D1.81.D1.82.D0.B0_1941_.D0.B3.D0.BE.D0.B4.D0.B0._51-.D0.B9_.D0.B4.D0.B5.D0.BD.D1.8C_.D0.B2.D0.BE.D0.B9.D0.BD.D1.8B"
 },
 {
   "from": "1941-08-11",
   "till": "",
   "country": "germany",
   "province": "",
   "locality": "berlin",
   "where": "",
   "title": "Franz Halder",
   "desc": "We have underestimated Russia",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D0%B0%D0%B2%D0%B3%D1%83%D1%81%D1%82_1941_%D0%B3%D0%BE%D0%B4%D0%B0)#11_.D0.B0.D0.B2.D0.B3.D1.83.D1.81.D1.82.D0.B0_1941_.D0.B3.D0.BE.D0.B4.D0.B0._51-.D0.B9_.D0.B4.D0.B5.D0.BD.D1.8C_.D0.B2.D0.BE.D0.B9.D0.BD.D1.8B"
 },
 {
   "from": "1941-08-11",
   "till": "",
   "country": "russia",
   "province": "moscow",
   "locality": "moscow",
   "where": "",
   "title": "Совинформбюро",
   "desc": "В течение 11 августа наши войска продолжали бои с противником на СОЛЬЦСКОМ, СМОЛЕНСКОМ, БЕЛОЦЕРКОВСКОМ и УМАНСКОМ направлениях.",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D0%B0%D0%B2%D0%B3%D1%83%D1%81%D1%82_1941_%D0%B3%D0%BE%D0%B4%D0%B0)#11_.D0.B0.D0.B2.D0.B3.D1.83.D1.81.D1.82.D0.B0_1941_.D0.B3.D0.BE.D0.B4.D0.B0._51-.D0.B9_.D0.B4.D0.B5.D0.BD.D1.8C_.D0.B2.D0.BE.D0.B9.D0.BD.D1.8B"
 },
 {
   "from": "1941-08-12",
   "till": "",
   "country": "russia",
   "province": "leningrad",
   "locality": "",
   "where": "",
   "title": "",
   "desc": "Выйдя на линию железной дороги Нарва — Пушкин, противник повернул 12 августа часть своих сил на Кингисепп, рассчитывая отрезать наши войска, которые с тяжёлыми оборонительными боями отступали из Эстонии за реку Нарву.",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D0%B0%D0%B2%D0%B3%D1%83%D1%81%D1%82_1941_%D0%B3%D0%BE%D0%B4%D0%B0)#12_.D0.B0.D0.B2.D0.B3.D1.83.D1.81.D1.82.D0.B0_1941_.D0.B3.D0.BE.D0.B4.D0.B0._52-.D0.B9_.D0.B4.D0.B5.D0.BD.D1.8C_.D0.B2.D0.BE.D0.B9.D0.BD.D1.8B"
 },
 {
   "from": "1941-08-12",
   "till": "",
   "country": "",
   "province": "",
   "locality": "",
   "where": "",
   "title": "",
   "desc": "34-я армия К. М. Качанова Северо-Западного фронта перешла в наступление во фланг наступающей на Ленинград группе армий «Север».",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D0%B0%D0%B2%D0%B3%D1%83%D1%81%D1%82_1941_%D0%B3%D0%BE%D0%B4%D0%B0)#12_.D0.B0.D0.B2.D0.B3.D1.83.D1.81.D1.82.D0.B0_1941_.D0.B3.D0.BE.D0.B4.D0.B0._52-.D0.B9_.D0.B4.D0.B5.D0.BD.D1.8C_.D0.B2.D0.BE.D0.B9.D0.BD.D1.8B"
 },
 {
   "from": "1941-08-12",
   "till": "1941-08-15",
   "country": "russia",
   "province": "novgorod",
   "locality": "v-novgorod",
   "where": "",
   "title": "Counterstrike at Staraya Russa",
   "desc": "боевые действия советских войск Северо-Западного фронта против наступающей на Ленинград группировки немецкой группы армий «Север». ",
   "result": "контрудар завершился неудачей, однако способствовал отвлечению части сил немецкой группы армий «Север» от наступления на ленинградском направлении.",
   "link": "https://ru.wikipedia.org/wiki/%D0%9A%D0%BE%D0%BD%D1%82%D1%80%D1%83%D0%B4%D0%B0%D1%80_%D0%BF%D0%BE%D0%B4_%D0%A1%D1%82%D0%B0%D1%80%D0%BE%D0%B9_%D0%A0%D1%83%D1%81%D1%81%D0%BE%D0%B9"
 },
 {
   "from": "1941-08-12",
   "till": "",
   "country": "russia",
   "province": "nikolayev",
   "locality": "nikolayev",
   "where": "",
   "title": "",
   "desc": "Передовые отряды 11-й армии Группы армий «Юг» остановились перед Николаевом.",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D0%B0%D0%B2%D0%B3%D1%83%D1%81%D1%82_1941_%D0%B3%D0%BE%D0%B4%D0%B0)#12_.D0.B0.D0.B2.D0.B3.D1.83.D1.81.D1.82.D0.B0_1941_.D0.B3.D0.BE.D0.B4.D0.B0._52-.D0.B9_.D0.B4.D0.B5.D0.BD.D1.8C_.D0.B2.D0.BE.D0.B9.D0.BD.D1.8B"
 },
 {
   "from": "1941-08-12",
   "till": "",
   "country": "russia",
   "province": "moscow",
   "locality": "moscow",
   "where": "",
   "title": "Совинформбюро",
   "desc": "В течение ночи на 12 августа наши войска продолжали вести бои с противником на КЕКСГОЛЬМСКОМ, СОЛЬЦСКОМ, СМОЛЕНСКОМ, КОРОСТЕНСКОМ и УМАНСКОМ направлениях.",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D0%B0%D0%B2%D0%B3%D1%83%D1%81%D1%82_1941_%D0%B3%D0%BE%D0%B4%D0%B0)#12_.D0.B0.D0.B2.D0.B3.D1.83.D1.81.D1.82.D0.B0_1941_.D0.B3.D0.BE.D0.B4.D0.B0._52-.D0.B9_.D0.B4.D0.B5.D0.BD.D1.8C_.D0.B2.D0.BE.D0.B9.D0.BD.D1.8B"
 },
 {
   "from": "1942-06-04",
   "till": "",
   "country": "",
   "province": "",
   "locality": "",
   "where": "",
   "title": "",
   "desc": "Ударим с рубежа Полисть в 20 часов 4 июня. Действий войск 59-й армии с востока не слышим, нет дальнего действия арт.огня.",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%92%D0%BB%D0%B0%D1%81%D0%BE%D0%B2,_%D0%90%D0%BD%D0%B4%D1%80%D0%B5%D0%B9_%D0%90%D0%BD%D0%B4%D1%80%D0%B5%D0%B5%D0%B2%D0%B8%D1%87"
 },
 {
   "from": "1942-06-21",
   "till": "",
   "country": "",
   "province": "",
   "locality": "",
   "where": "",
   "title": "",
   "desc": "General Vlasov reports that it's been 3 weeks since the army started receiving 50 grams of rusks. Finish eating the last of the horses. Men are extremely emaciated. Men are dying of starvation. No ammunition...",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%92%D0%BB%D0%B0%D1%81%D0%BE%D0%B2,_%D0%90%D0%BD%D0%B4%D1%80%D0%B5%D0%B9_%D0%90%D0%BD%D0%B4%D1%80%D0%B5%D0%B5%D0%B2%D0%B8%D1%87"
 },
 {
   "from": "1942-07-11",
   "till": "",
   "country": "russia",
   "province": "leningrad",
   "locality": "",
   "where": "",
   "title": "",
   "desc": "General Andrey Vlasov is captured by the Hipo while searching for food.",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%92%D0%BB%D0%B0%D1%81%D0%BE%D0%B2,_%D0%90%D0%BD%D0%B4%D1%80%D0%B5%D0%B9_%D0%90%D0%BD%D0%B4%D1%80%D0%B5%D0%B5%D0%B2%D0%B8%D1%87"
 },
 {
   "from": "1942-07-21",
   "till": "1943-02-12",
   "country": "russia",
   "province": "rostov",
   "locality": "rostov-on-don",
   "where": "",
   "title": "POW camp",
   "desc": "City of Shakhty. School #10 is a POW camp.",
   "result": "",
   "link": "http://www.donvrem.dspl.ru/Files/article/m7/0/art.aspx?art_id=157"
 },
 {
   "from": "1941-10-03",
   "till": "1943-08-05",
   "country": "russia",
   "province": "orel",
   "locality": "orel",
   "where": "",
   "title": "POW camp",
   "desc": "City of Orel. POW camp",
   "result": "> 5000 Soviet citizens",
   "link": "http://www.gosarchiv-orel.ru/index.php?id=61&option=com_content&Itemid=30"
 },
 {
   "from": "1945-08-09",
   "till": "1945-09-02",
   "country": "china",
   "province": "manchuria",
   "locality": "",
   "where": "",
   "title": "Manchuria Operation",
   "desc": "Cтратегическая наступательная операция Советских Вооружённых Сил и войск Монгольской народно-революционной армии, с целью разгрома японской Квантунской армии, занятия Маньчжурии и северной Кореи и ликвидации военно-экономической базы Японии на Азиатском континенте.",
   "result": "Разгром Квантунской армии Японии, захват советскими войсками Манчжурии",
   "link": "https://ru.wikipedia.org/wiki/%D0%9C%D0%B0%D0%BD%D1%8C%D1%87%D0%B6%D1%83%D1%80%D1%81%D0%BA%D0%B0%D1%8F_%D0%BE%D0%BF%D0%B5%D1%80%D0%B0%D1%86%D0%B8%D1%8F_(1945)"
 },
 {
   "from": "1941-08-13",
   "till": "",
   "country": "russia",
   "province": "leningrad",
   "locality": "",
   "where": "",
   "title": "",
   "desc": "8-я армия под прикрытием кораблей Чудской военной флотилии под командованием капитана 1 ранга Н. Ю. Авраамова отошла на Копорское плато. Сегодня противник занял оба берега Нарвы и корабли Чудской военной флотилии были затоплены у истока реки. Противник завершил прорыв обороны 48-й армии на новгородском направлении.",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D0%B0%D0%B2%D0%B3%D1%83%D1%81%D1%82_1941_%D0%B3%D0%BE%D0%B4%D0%B0)#13_.D0.B0.D0.B2.D0.B3.D1.83.D1.81.D1.82.D0.B0_1941_.D0.B3.D0.BE.D0.B4.D0.B0._53-.D0.B9_.D0.B4.D0.B5.D0.BD.D1.8C_.D0.B2.D0.BE.D0.B9.D0.BD.D1.8B"
 },
 {
   "from": "1941-08-13",
   "till": "",
   "country": "belarus",
   "province": "gomel",
   "locality": "",
   "where": "",
   "title": "",
   "desc": "немецкие войска форсировали Днепр на рогачевском направлении и обошли 61-й стрелковый корпус Петровского, оставшийся на рубеже под Рогачевым и Жлобином.",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D0%B0%D0%B2%D0%B3%D1%83%D1%81%D1%82_1941_%D0%B3%D0%BE%D0%B4%D0%B0)#13_.D0.B0.D0.B2.D0.B3.D1.83.D1.81.D1.82.D0.B0_1941_.D0.B3.D0.BE.D0.B4.D0.B0._53-.D0.B9_.D0.B4.D0.B5.D0.BD.D1.8C_.D0.B2.D0.BE.D0.B9.D0.BD.D1.8B"
 },
 {
   "from": "1941-08-13",
   "till": "",
   "country": "ukraine",
   "province": "nikolayev",
   "locality": "",
   "where": "",
   "title": "",
   "desc": "Немецкая 11-я армия, 48-й моторизованный и венгерский корпуса окружили 9-ю армию Южного фронта в районе Николаева.",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D0%B0%D0%B2%D0%B3%D1%83%D1%81%D1%82_1941_%D0%B3%D0%BE%D0%B4%D0%B0)#13_.D0.B0.D0.B2.D0.B3.D1.83.D1.81.D1.82.D0.B0_1941_.D0.B3.D0.BE.D0.B4.D0.B0._53-.D0.B9_.D0.B4.D0.B5.D0.BD.D1.8C_.D0.B2.D0.BE.D0.B9.D0.BD.D1.8B"
 },
 {
   "from": "1941-08-13",
   "till": "",
   "country": "ukraine",
   "province": "odessa",
   "locality": "",
   "where": "",
   "title": "",
   "desc": "Войска противника блокировали Одессу с суши.",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D0%B0%D0%B2%D0%B3%D1%83%D1%81%D1%82_1941_%D0%B3%D0%BE%D0%B4%D0%B0)#13_.D0.B0.D0.B2.D0.B3.D1.83.D1.81.D1.82.D0.B0_1941_.D0.B3.D0.BE.D0.B4.D0.B0._53-.D0.B9_.D0.B4.D0.B5.D0.BD.D1.8C_.D0.B2.D0.BE.D0.B9.D0.BD.D1.8B"
 },
 {
   "from": "1941-08-13",
   "till": "",
   "country": "germany",
   "province": "",
   "locality": "berlin",
   "where": "",
   "title": "Franz Halder",
   "desc": "Потери немецкой армии с 22 июня по 13 августа 1941 года составили 389924 человека.",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D0%B0%D0%B2%D0%B3%D1%83%D1%81%D1%82_1941_%D0%B3%D0%BE%D0%B4%D0%B0)#13_.D0.B0.D0.B2.D0.B3.D1.83.D1.81.D1.82.D0.B0_1941_.D0.B3.D0.BE.D0.B4.D0.B0._53-.D0.B9_.D0.B4.D0.B5.D0.BD.D1.8C_.D0.B2.D0.BE.D0.B9.D0.BD.D1.8B"
 },
 {
   "from": "1941-08-13",
   "till": "",
   "country": "russia",
   "province": "moscow",
   "locality": "moscow",
   "where": "",
   "title": "Совинформбюро",
   "desc": "В течение 13 августа наши войска вели бои с противником на КЕКСГОЛЬМСКОМ, СТАРОРУССКОМ, СМОЛЕНСКОМ, БЕЛОЦЕРКОВСКОМ направлениях. Несколько дней назад наши войска оставили гор. Смоленск.",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D0%B0%D0%B2%D0%B3%D1%83%D1%81%D1%82_1941_%D0%B3%D0%BE%D0%B4%D0%B0)#13_.D0.B0.D0.B2.D0.B3.D1.83.D1.81.D1.82.D0.B0_1941_.D0.B3.D0.BE.D0.B4.D0.B0._53-.D0.B9_.D0.B4.D0.B5.D0.BD.D1.8C_.D0.B2.D0.BE.D0.B9.D0.BD.D1.8B"
 },
 {
   "from": "1941-08-14",
   "till": "",
   "country": "canada",
   "province": "nl",
   "locality": "",
   "where": "",
   "title": "Atlantic Charter",
   "desc": "Подписана англо-американская декларация о целях войны, получившая наименование «Атлантической хартии».",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D0%B0%D0%B2%D0%B3%D1%83%D1%81%D1%82_1941_%D0%B3%D0%BE%D0%B4%D0%B0)#14_.D0.B0.D0.B2.D0.B3.D1.83.D1.81.D1.82.D0.B0_1941_.D0.B3.D0.BE.D0.B4.D0.B0._54-.D0.B9_.D0.B4.D0.B5.D0.BD.D1.8C_.D0.B2.D0.BE.D0.B9.D0.BD.D1.8B"
 },
 {
   "from": "1941-08-14",
   "till": "",
   "country": "russia",
   "province": "leningrad",
   "locality": "",
   "where": "",
   "title": "",
   "desc": "Немецкий 41-й мотокорпус вышел к дороге Красногвардейск—Кингисепп.",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D0%B0%D0%B2%D0%B3%D1%83%D1%81%D1%82_1941_%D0%B3%D0%BE%D0%B4%D0%B0)#14_.D0.B0.D0.B2.D0.B3.D1.83.D1.81.D1.82.D0.B0_1941_.D0.B3.D0.BE.D0.B4.D0.B0._54-.D0.B9_.D0.B4.D0.B5.D0.BD.D1.8C_.D0.B2.D0.BE.D0.B9.D0.BD.D1.8B"
 },
 {
   "from": "1941-08-14",
   "till": "",
   "country": "russia",
   "province": "novgorod",
   "locality": "v-novgorod",
   "where": "",
   "title": "",
   "desc": "34-я армия и часть сил 11-й армии Северо-Западного фронта нанесли контрудар из района юго-восточнее Старой Руссы в северо-западном направлении. К вечеру 14 августа советские войска продвинулись на этом участке почти на 60 километров, глубоко охватили правый фланг старорусской группировки противника и создали угрозу удара в тыл группировке, вышедшей в район Новгорода.",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D0%B0%D0%B2%D0%B3%D1%83%D1%81%D1%82_1941_%D0%B3%D0%BE%D0%B4%D0%B0)#14_.D0.B0.D0.B2.D0.B3.D1.83.D1.81.D1.82.D0.B0_1941_.D0.B3.D0.BE.D0.B4.D0.B0._54-.D0.B9_.D0.B4.D0.B5.D0.BD.D1.8C_.D0.B2.D0.BE.D0.B9.D0.BD.D1.8B"
 },
 {
   "from": "1941-08-14",
   "till": "",
   "country": "russia",
   "province": "smolensk",
   "locality": "smolensk",
   "where": "",
   "title": "",
   "desc": "Ставка ВГК приняла решение создать Брянский фронт в составе 50-й и 13-й армий. Командующим фронтом был назначен А. И. Ерёменко.",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D0%B0%D0%B2%D0%B3%D1%83%D1%81%D1%82_1941_%D0%B3%D0%BE%D0%B4%D0%B0)#14_.D0.B0.D0.B2.D0.B3.D1.83.D1.81.D1.82.D0.B0_1941_.D0.B3.D0.BE.D0.B4.D0.B0._54-.D0.B9_.D0.B4.D0.B5.D0.BD.D1.8C_.D0.B2.D0.BE.D0.B9.D0.BD.D1.8B"
 },
 {
   "from": "1941-08-14",
   "till": "",
   "country": "russia",
   "province": "smolensk",
   "locality": "yelnya",
   "where": "",
   "title": "",
   "desc": "Советские войска продолжают атаковать 46-й моторизованный корпус Фиттингофа, занимающий ельнинский выступ.",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D0%B0%D0%B2%D0%B3%D1%83%D1%81%D1%82_1941_%D0%B3%D0%BE%D0%B4%D0%B0)#14_.D0.B0.D0.B2.D0.B3.D1.83.D1.81.D1.82.D0.B0_1941_.D0.B3.D0.BE.D0.B4.D0.B0._54-.D0.B9_.D0.B4.D0.B5.D0.BD.D1.8C_.D0.B2.D0.BE.D0.B9.D0.BD.D1.8B"
 },
 {
   "from": "1941-08-14",
   "till": "",
   "country": "ukraine",
   "province": "dnepropetrovsk",
   "locality": "krivoy-rog",
   "where": "",
   "title": "",
   "desc": "14-й моторизованный корпус 1-й танковой группы занял Кривой Рог.",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D0%B0%D0%B2%D0%B3%D1%83%D1%81%D1%82_1941_%D0%B3%D0%BE%D0%B4%D0%B0)#14_.D0.B0.D0.B2.D0.B3.D1.83.D1.81.D1.82.D0.B0_1941_.D0.B3.D0.BE.D0.B4.D0.B0._54-.D0.B9_.D0.B4.D0.B5.D0.BD.D1.8C_.D0.B2.D0.BE.D0.B9.D0.BD.D1.8B"
 },
 {
   "from": "1941-08-14",
   "till": "",
   "country": "russia",
   "province": "moscow",
   "locality": "moscow",
   "where": "",
   "title": "",
   "desc": "В течение 14 августа наши войска вели ожесточённые бои с противником на всём фронте от Ледовитого океана до Чёрного моря. На южном направлении наши войска оставили гг. Кировоград и Первомайск.",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D0%B0%D0%B2%D0%B3%D1%83%D1%81%D1%82_1941_%D0%B3%D0%BE%D0%B4%D0%B0)#14_.D0.B0.D0.B2.D0.B3.D1.83.D1.81.D1.82.D0.B0_1941_.D0.B3.D0.BE.D0.B4.D0.B0._54-.D0.B9_.D0.B4.D0.B5.D0.BD.D1.8C_.D0.B2.D0.BE.D0.B9.D0.BD.D1.8B"
 },
 {
   "from": "1941-08-15",
   "till": "1944-02-22",
   "country": "ukraine",
   "province": "dnepropetrovsk",
   "locality": "krivoy-rog",
   "where": "",
   "title": "Occupation of Krivoy Rog",
   "desc": "",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%9A%D1%80%D0%B8%D0%B2%D0%BE%D0%B9_%D0%A0%D0%BE%D0%B3#.D0.92.D0.B5.D0.BB.D0.B8.D0.BA.D0.B0.D1.8F_.D0.9E.D1.82.D0.B5.D1.87.D0.B5.D1.81.D1.82.D0.B2.D0.B5.D0.BD.D0.BD.D0.B0.D1.8F_.D0.B2.D0.BE.D0.B9.D0.BD.D0.B0"
 },
 {
   "from": "1941-08-15",
   "till": "1944-02-29",
   "country": "ukraine",
   "province": "dnepropetrovsk",
   "locality": "krivoy-rog",
   "where": "",
   "title": "Stalag 338",
   "desc": "Региональный (Кривой Рог, УССР) административный, транзитный (пересыльный) и распределительное место и организация для учёта и использования дармовой рабочей силы, выявления противников германской оккупационной власти и геноцида советского народа.",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A8%D1%82%D0%B0%D0%BB%D0%B0%D0%B3_338"
 },
 {
   "from": "1941-08-15",
   "till": "",
   "country": "russia",
   "province": "novgorod",
   "locality": "v-novgorod",
   "where": "",
   "title": "",
   "desc": "Немецкий 1-й армейский корпус ворвался в Новгород.",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D0%B0%D0%B2%D0%B3%D1%83%D1%81%D1%82_1941_%D0%B3%D0%BE%D0%B4%D0%B0)#15_.D0.B0.D0.B2.D0.B3.D1.83.D1.81.D1.82.D0.B0_1941_.D0.B3.D0.BE.D0.B4.D0.B0._55-.D0.B9_.D0.B4.D0.B5.D0.BD.D1.8C_.D0.B2.D0.BE.D0.B9.D0.BD.D1.8B"
 },
 {
   "from": "1941-08-15",
   "till": "",
   "country": "ukraine",
   "province": "kiev",
   "locality": "kiev",
   "where": "",
   "title": "",
   "desc": "Противник перешёл к обороне на фронте 5-й армии. 37-я армия почти полностью восстановили прежнее положение. 26-я армия отошла за Днепр.",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D0%B0%D0%B2%D0%B3%D1%83%D1%81%D1%82_1941_%D0%B3%D0%BE%D0%B4%D0%B0)#15_.D0.B0.D0.B2.D0.B3.D1.83.D1.81.D1.82.D0.B0_1941_.D0.B3.D0.BE.D0.B4.D0.B0._55-.D0.B9_.D0.B4.D0.B5.D0.BD.D1.8C_.D0.B2.D0.BE.D0.B9.D0.BD.D1.8B"
 },
 {
   "from": "1941-08-15",
   "till": "",
   "country": "russia",
   "province": "",
   "locality": "",
   "where": "",
   "title": "",
   "desc": "Опубликованы сообщения: коллективы рабочих ленинградских заводов «Большевик», «Электросила» имени Кирова, московского завода «Динамо» и некоторых других решили отчислять ежемесячно в Фонд обороны однодневный заработок.",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D0%B0%D0%B2%D0%B3%D1%83%D1%81%D1%82_1941_%D0%B3%D0%BE%D0%B4%D0%B0)#15_.D0.B0.D0.B2.D0.B3.D1.83.D1.81.D1.82.D0.B0_1941_.D0.B3.D0.BE.D0.B4.D0.B0._55-.D0.B9_.D0.B4.D0.B5.D0.BD.D1.8C_.D0.B2.D0.BE.D0.B9.D0.BD.D1.8B"
 },
 {
   "from": "1941-08-15",
   "till": "",
   "country": "russia",
   "province": "crimea",
   "locality": "",
   "where": "",
   "title": "",
   "desc": "Для обороны Крыма создана 51-я армия Ф. И. Кузнецова.",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D0%B0%D0%B2%D0%B3%D1%83%D1%81%D1%82_1941_%D0%B3%D0%BE%D0%B4%D0%B0)#15_.D0.B0.D0.B2.D0.B3.D1.83.D1.81.D1.82.D0.B0_1941_.D0.B3.D0.BE.D0.B4.D0.B0._55-.D0.B9_.D0.B4.D0.B5.D0.BD.D1.8C_.D0.B2.D0.BE.D0.B9.D0.BD.D1.8B"
 },
 {
   "from": "1941-08-15",
   "till": "",
   "country": "russia",
   "province": "moscow",
   "locality": "moscow",
   "where": "",
   "title": "",
   "desc": "В течение ночи на 15 августа наши войска вели упорные бои с противником на Кексгольмском, Старорусском, Смоленском направлениях и на Эстонском участке фронта.",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D0%B0%D0%B2%D0%B3%D1%83%D1%81%D1%82_1941_%D0%B3%D0%BE%D0%B4%D0%B0)#15_.D0.B0.D0.B2.D0.B3.D1.83.D1.81.D1.82.D0.B0_1941_.D0.B3.D0.BE.D0.B4.D0.B0._55-.D0.B9_.D0.B4.D0.B5.D0.BD.D1.8C_.D0.B2.D0.BE.D0.B9.D0.BD.D1.8B"
 },
 {
   "from": "1941-08-16",
   "till": "",
   "country": "russia",
   "province": "moscow",
   "locality": "moscow",
   "where": "",
   "title": "",
   "desc": "Состоялось заседание ЦК ВКП(б) и Совнаркома СССР. ЦК ВКП(б) и СНК СССР приняли «Военно-хозяйственный план на IV квартал 1941 года и на 1942 год по районам Поволжья, Урала, Западной Сибири, Казахстана и Средней Азии». Также принято решение о строительстве железнодорожной линии от Астрахани до Кизляра.",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D0%B0%D0%B2%D0%B3%D1%83%D1%81%D1%82_1941_%D0%B3%D0%BE%D0%B4%D0%B0)#16_.D0.B0.D0.B2.D0.B3.D1.83.D1.81.D1.82.D0.B0_1941_.D0.B3.D0.BE.D0.B4.D0.B0._56-.D0.B9_.D0.B4.D0.B5.D0.BD.D1.8C_.D0.B2.D0.BE.D0.B9.D0.BD.D1.8B"
 },
 {
   "from": "1941-08-16",
   "till": "",
   "country": "russia",
   "province": "moscow",
   "locality": "moscow",
   "where": "",
   "title": "",
   "desc": "заключено соглашение между СССР и Великобританией о товарообороте, кредите и клиринге.",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D0%B0%D0%B2%D0%B3%D1%83%D1%81%D1%82_1941_%D0%B3%D0%BE%D0%B4%D0%B0)#16_.D0.B0.D0.B2.D0.B3.D1.83.D1.81.D1.82.D0.B0_1941_.D0.B3.D0.BE.D0.B4.D0.B0._56-.D0.B9_.D0.B4.D0.B5.D0.BD.D1.8C_.D0.B2.D0.BE.D0.B9.D0.BD.D1.8B"
 },
 {
   "from": "1941-08-16",
   "till": "",
   "country": "russia",
   "province": "moscow",
   "locality": "moscow",
   "where": "",
   "title": "Order 270",
   "desc": "Принят Приказ № 270 Ставки ВГК о борьбе с трусами, дезертирами и паникёрами. В нём отмечалось, что, наряду с высокой стойкостью советских войск, имеют место позорные факты сдачи в плен не только среди красноармейцев, но и среди начальствующего состава. В приказной части требовалось драться до последней возможности, а сдающихся в плен уничтожать всеми средствами. Семьи сдавшихся в плен красноармейцев приказывалось лишать государственного пособия и помощи.",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D0%B0%D0%B2%D0%B3%D1%83%D1%81%D1%82_1941_%D0%B3%D0%BE%D0%B4%D0%B0)#16_.D0.B0.D0.B2.D0.B3.D1.83.D1.81.D1.82.D0.B0_1941_.D0.B3.D0.BE.D0.B4.D0.B0._56-.D0.B9_.D0.B4.D0.B5.D0.BD.D1.8C_.D0.B2.D0.BE.D0.B9.D0.BD.D1.8B"
 },
 {
   "from": "1941-08-16",
   "till": "",
   "country": "russia",
   "province": "leningrad",
   "locality": "kingisepp",
   "where": "",
   "title": "",
   "desc": "Немецкие 26-й и 38-й армейские корпуса начали штурм Нарвы. 41-й мотокорпус занял станцию Волосово в 40 км от Красногвардейска. Советские войска оставили город Кингисепп.",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D0%B0%D0%B2%D0%B3%D1%83%D1%81%D1%82_1941_%D0%B3%D0%BE%D0%B4%D0%B0)#16_.D0.B0.D0.B2.D0.B3.D1.83.D1.81.D1.82.D0.B0_1941_.D0.B3.D0.BE.D0.B4.D0.B0._56-.D0.B9_.D0.B4.D0.B5.D0.BD.D1.8C_.D0.B2.D0.BE.D0.B9.D0.BD.D1.8B"
 },
 {
   "from": "1941-08-16",
   "till": "",
   "country": "russia",
   "province": "smolensk",
   "locality": "",
   "where": "",
   "title": "",
   "desc": "Начались оборонительные бои на черниговском и конотопском направлениях против 2-й немецкой танковой группы и 2-й армии. Ставка ВГК создала Брянский фронт и приказала ему нанести контрудар по 2-й танковой группе врага и разгромить её.",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D0%B0%D0%B2%D0%B3%D1%83%D1%81%D1%82_1941_%D0%B3%D0%BE%D0%B4%D0%B0)#16_.D0.B0.D0.B2.D0.B3.D1.83.D1.81.D1.82.D0.B0_1941_.D0.B3.D0.BE.D0.B4.D0.B0._56-.D0.B9_.D0.B4.D0.B5.D0.BD.D1.8C_.D0.B2.D0.BE.D0.B9.D0.BD.D1.8B"
 },
 {
   "from": "1941-08-16",
   "till": "",
   "country": "ukraine",
   "province": "nikolayev",
   "locality": "nikolayev",
   "where": "",
   "title": "",
   "desc": "Части 9-й армии вырвались из окружения в районе Николаева и отошли за реку Ингулец",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D0%B0%D0%B2%D0%B3%D1%83%D1%81%D1%82_1941_%D0%B3%D0%BE%D0%B4%D0%B0)#16_.D0.B0.D0.B2.D0.B3.D1.83.D1.81.D1.82.D0.B0_1941_.D0.B3.D0.BE.D0.B4.D0.B0._56-.D0.B9_.D0.B4.D0.B5.D0.BD.D1.8C_.D0.B2.D0.BE.D0.B9.D0.BD.D1.8B"
 },
 {
   "from": "1941-08-16",
   "till": "",
   "country": "russia",
   "province": "moscow",
   "locality": "moscow",
   "where": "",
   "title": "Совинформбюро",
   "desc": "В течение 16 августа наши войска продолжали вести бои с противником на всём фронте.",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D0%B0%D0%B2%D0%B3%D1%83%D1%81%D1%82_1941_%D0%B3%D0%BE%D0%B4%D0%B0)#16_.D0.B0.D0.B2.D0.B3.D1.83.D1.81.D1.82.D0.B0_1941_.D0.B3.D0.BE.D0.B4.D0.B0._56-.D0.B9_.D0.B4.D0.B5.D0.BD.D1.8C_.D0.B2.D0.BE.D0.B9.D0.BD.D1.8B"
 },
 {
   "from": "1941-08-17",
   "till": "",
   "country": "estonia",
   "province": "",
   "locality": "narva",
   "where": "",
   "title": "",
   "desc": "Немецкие войска заняли Нарву.",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D0%B0%D0%B2%D0%B3%D1%83%D1%81%D1%82_1941_%D0%B3%D0%BE%D0%B4%D0%B0)#17_.D0.B0.D0.B2.D0.B3.D1.83.D1.81.D1.82.D0.B0_1941_.D0.B3.D0.BE.D0.B4.D0.B0._57-.D0.B9_.D0.B4.D0.B5.D0.BD.D1.8C_.D0.B2.D0.BE.D0.B9.D0.BD.D1.8B"
 },
 {
   "from": "1941-08-17",
   "till": "",
   "country": "ukraine",
   "province": "nikolayev",
   "locality": "nikolayev",
   "where": "",
   "title": "",
   "desc": "Войска Группы армий «Юг» заняли Николаев. 17 августа начались бои на подступах к Днепропетровску.",
   "result": "",
   "link": ""
 },
 {
   "from": "1941-08-16",
   "till": "1944-03-28",
   "country": "ukraine",
   "province": "nikolayev",
   "locality": "nikolayev",
   "where": "",
   "title": "Occupation of Nikolayev",
   "desc": "",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%98%D1%81%D1%82%D0%BE%D1%80%D0%B8%D1%8F_%D0%9D%D0%B8%D0%BA%D0%BE%D0%BB%D0%B0%D0%B5%D0%B2%D0%B0#.D0.92.D0.B5.D0.BB.D0.B8.D0.BA.D0.B0.D1.8F_.D0.9E.D1.82.D0.B5.D1.87.D0.B5.D1.81.D1.82.D0.B2.D0.B5.D0.BD.D0.BD.D0.B0.D1.8F_.D0.B2.D0.BE.D0.B9.D0.BD.D0.B0"
 },
 {
   "from": "1941-08-17",
   "till": "1944-07-26",
   "country": "estonia",
   "province": "",
   "locality": "narva",
   "where": "",
   "title": "Occupation of Narva",
   "desc": "",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%9D%D0%B0%D1%80%D0%B2%D0%B0#.D0.98.D1.81.D1.82.D0.BE.D1.80.D0.B8.D1.8F"
 },
 {
   "from": "1941-08-17",
   "till": "",
   "country": "russia",
   "province": "moscow",
   "locality": "moscow",
   "where": "",
   "title": "",
   "desc": "В течение 17 августа наши войска продолжали вести ожесточённые бои с противником на всем фронте. После упорных боев наши войска оставили города Николаев и Кривой Рог. Николаевские верфи взорваны.",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%9D%D0%B0%D1%80%D0%B2%D0%B0#.D0.98.D1.81.D1.82.D0.BE.D1.80.D0.B8.D1.8F"
 },
 {
   "from": "1941-08-18",
   "till": "",
   "country": "belarus",
   "province": "gomel",
   "locality": "gomel",
   "where": "",
   "title": "",
   "desc": "Группа армий «Центр» обошла Гомель с востока.",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D0%B0%D0%B2%D0%B3%D1%83%D1%81%D1%82_1941_%D0%B3%D0%BE%D0%B4%D0%B0)#18_.D0.B0.D0.B2.D0.B3.D1.83.D1.81.D1.82.D0.B0_1941_.D0.B3.D0.BE.D0.B4.D0.B0_58-.D0.B9_.D0.B4.D0.B5.D0.BD.D1.8C_.D0.B2.D0.BE.D0.B9.D0.BD.D1.8B"
 },
 {
   "from": "1941-08-18",
   "till": "",
   "country": "ukraine",
   "province": "nikolayev",
   "locality": "ochakov",
   "where": "",
   "title": "",
   "desc": "Группа армий «Юг» вышла на Черноморское побережье у Очакова. 1-я танковая группа продвигается к Никополю.",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D0%B0%D0%B2%D0%B3%D1%83%D1%81%D1%82_1941_%D0%B3%D0%BE%D0%B4%D0%B0)#18_.D0.B0.D0.B2.D0.B3.D1.83.D1.81.D1.82.D0.B0_1941_.D0.B3.D0.BE.D0.B4.D0.B0_58-.D0.B9_.D0.B4.D0.B5.D0.BD.D1.8C_.D0.B2.D0.BE.D0.B9.D0.BD.D1.8B"
 },
 {
   "from": "1941-08-18",
   "till": "",
   "country": "germany",
   "province": "",
   "locality": "berlin",
   "where": "",
   "title": "",
   "desc": "«У противника появилось оружие массированного огня, подобное нашему шестиствольному миномету. Калибр — 12,5 см, дальность стрельбы — 2—3 км. Может быть, это ракеты (так называемые „сталинские органы“)».",
   "result": "",
   "link": ""
 },
 {
   "from": "1941-07-14",
   "till": "",
   "country": "belarus",
   "province": "vitebsk",
   "locality": "orsha",
   "where": "",
   "title": "Katyusha test 1",
   "desc": "Батарея капитана Флёрова обстреляла вражеские войска и технику на железнодорожном узле города Орша",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%9A%D0%B0%D1%82%D1%8E%D1%88%D0%B0_(%D0%BF%D1%80%D0%BE%D0%B7%D0%B2%D0%B8%D1%89%D0%B5_%D0%BE%D1%80%D1%83%D0%B6%D0%B8%D1%8F)"
 },
 {
   "from": "1941-06-21",
   "till": "",
   "country": "russia",
   "province": "",
   "locality": "",
   "where": "",
   "title": "Кayusha is put into service",
   "desc": "Реактивный снаряд РС-132 калибра 132 мм и пусковая установка на базе грузового автомобиля ЗИС-6 БМ-13 были приняты на вооружение 21 июня 1941 года;",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%9A%D0%B0%D1%82%D1%8E%D1%88%D0%B0_(%D0%BF%D1%80%D0%BE%D0%B7%D0%B2%D0%B8%D1%89%D0%B5_%D0%BE%D1%80%D1%83%D0%B6%D0%B8%D1%8F)"
 },
 {
   "from": "1941-08-18",
   "till": "",
   "country": "ukraine",
   "province": "zaporozhye",
   "locality": "zaporozhye",
   "where": "",
   "title": "",
   "desc": "Вечером 18 августа была взорвана плотина ДнепроГЭСа.",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D0%B0%D0%B2%D0%B3%D1%83%D1%81%D1%82_1941_%D0%B3%D0%BE%D0%B4%D0%B0)#18_.D0.B0.D0.B2.D0.B3.D1.83.D1.81.D1.82.D0.B0_1941_.D0.B3.D0.BE.D0.B4.D0.B0_58-.D0.B9_.D0.B4.D0.B5.D0.BD.D1.8C_.D0.B2.D0.BE.D0.B9.D0.BD.D1.8B"
 },
 {
   "from": "1941-08-18",
   "till": "",
   "country": "russia",
   "province": "moscow",
   "locality": "moscow",
   "where": "",
   "title": "Совинформбюро",
   "desc": "В течение 18 августа наши войска продолжали вести ожесточённые бои с противником на всём фронте. После упорных боёв наши войска оставили гор. Кингисепп.",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D0%B0%D0%B2%D0%B3%D1%83%D1%81%D1%82_1941_%D0%B3%D0%BE%D0%B4%D0%B0)#18_.D0.B0.D0.B2.D0.B3.D1.83.D1.81.D1.82.D0.B0_1941_.D0.B3.D0.BE.D0.B4.D0.B0_58-.D0.B9_.D0.B4.D0.B5.D0.BD.D1.8C_.D0.B2.D0.BE.D0.B9.D0.BD.D1.8B"
 },
 {
   "from": "1941-08-19",
   "till": "",
   "country": "russia",
   "province": "novgorod",
   "locality": "v-novgorod",
   "where": "",
   "title": "",
   "desc": "Советские войска оставили Новгород и отошли за реку Малый Волховец.",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D0%B0%D0%B2%D0%B3%D1%83%D1%81%D1%82_1941_%D0%B3%D0%BE%D0%B4%D0%B0)#19_.D0.B0.D0.B2.D0.B3.D1.83.D1.81.D1.82.D0.B0_1941_.D0.B3.D0.BE.D0.B4.D0.B0._59-.D0.B9_.D0.B4.D0.B5.D0.BD.D1.8C_.D0.B2.D0.BE.D0.B9.D0.BD.D1.8B"
 },
 {
   "from": "1941-08-15",
   "till": "1944-01-20",
   "country": "russia",
   "province": "novgorod",
   "locality": "v-novgorod",
   "where": "",
   "title": "Occupation of Novgorod",
   "desc": "Germans are raising the city to the ground",
   "result": "",
   "link": "http://expo.novarchiv.org/v-plameni-vojny/72-1-1-okkupacia"
 },
 {
   "from": "1941-08-19",
   "till": "1943-11-26",
   "country": "belarus",
   "province": "gomel",
   "locality": "gomel",
   "where": "",
   "title": "Occupation of Gomel",
   "desc": "Germans are demolishing the city.",
   "result": "Nearly 80% of the city is demolished",
   "link": "https://ru.wikipedia.org/wiki/%D0%93%D0%BE%D0%BC%D0%B5%D0%BB%D1%8C#.D0.A1.D0.BE.D0.B2.D0.B5.D1.82.D1.81.D0.BA.D0.B8.D0.B9_.D0.BF.D0.B5.D1.80.D0.B8.D0.BE.D0.B4"
 },
 {
   "from": "1941-09-01",
   "till": "1943-11-26",
   "country": "belarus",
   "province": "gomel",
   "locality": "gomel",
   "where": "",
   "title": "Gomel ghetto",
   "desc": "",
   "result": "10,000 dead (Jews)",
   "link": "https://ru.wikipedia.org/wiki/%D0%93%D0%BE%D0%BC%D0%B5%D0%BB%D1%8C%D1%81%D0%BA%D0%BE%D0%B5_%D0%B3%D0%B5%D1%82%D1%82%D0%BE"
 },
 {
   "from": "1941-08-19",
   "till": "",
   "country": "ukraine",
   "province": "kiev",
   "locality": "",
   "where": "",
   "title": "",
   "desc": "Ставка ВГК разрешила отвести 5-ю армию Юго-Западного фронта за Днепр.",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D0%B0%D0%B2%D0%B3%D1%83%D1%81%D1%82_1941_%D0%B3%D0%BE%D0%B4%D0%B0)#19_.D0.B0.D0.B2.D0.B3.D1.83.D1.81.D1.82.D0.B0_1941_.D0.B3.D0.BE.D0.B4.D0.B0._59-.D0.B9_.D0.B4.D0.B5.D0.BD.D1.8C_.D0.B2.D0.BE.D0.B9.D0.BD.D1.8B"
 },
 {
   "from": "1941-08-19",
   "till": "",
   "country": "ukraine",
   "province": "zaporozhye",
   "locality": "zaporozhye",
   "where": "",
   "title": "",
   "desc": "1-я танковая группа вышла в район 1 км западнее плотины у Запорожья.",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D0%B0%D0%B2%D0%B3%D1%83%D1%81%D1%82_1941_%D0%B3%D0%BE%D0%B4%D0%B0)#19_.D0.B0.D0.B2.D0.B3.D1.83.D1.81.D1.82.D0.B0_1941_.D0.B3.D0.BE.D0.B4.D0.B0._59-.D0.B9_.D0.B4.D0.B5.D0.BD.D1.8C_.D0.B2.D0.BE.D0.B9.D0.BD.D1.8B"
 },
 {
   "from": "1941-08-12",
   "till": "1941-09-29",
   "country": "ukraine",
   "province": "dnepropetrovsk",
   "locality": "dnepropetrovsk",
   "where": "",
   "title": "Dnepropetrovsk defensive",
   "desc": "",
   "result": "the city is taken",
   "link": "https://ru.wikipedia.org/wiki/%D0%9E%D0%B1%D0%BE%D1%80%D0%BE%D0%BD%D0%B0_%D0%94%D0%BD%D0%B5%D0%BF%D1%80%D0%BE%D0%BF%D0%B5%D1%82%D1%80%D0%BE%D0%B2%D1%81%D0%BA%D0%B0"
 },
 {
   "from": "1941-08-19",
   "till": "",
   "country": "ukraine",
   "province": "dnepropetrovsk",
   "locality": "dnepropetrovsk",
   "where": "",
   "title": "",
   "desc": "Войска Резервной армии Южного фронта начали отражения атак 3 мк вермахта под Днепропетровском.",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D0%B0%D0%B2%D0%B3%D1%83%D1%81%D1%82_1941_%D0%B3%D0%BE%D0%B4%D0%B0)#19_.D0.B0.D0.B2.D0.B3.D1.83.D1.81.D1.82.D0.B0_1941_.D0.B3.D0.BE.D0.B4.D0.B0._59-.D0.B9_.D0.B4.D0.B5.D0.BD.D1.8C_.D0.B2.D0.BE.D0.B9.D0.BD.D1.8B"
 },
 {
   "from": "1941-08-19",
   "till": "1944-03-13",
   "country": "ukraine",
   "province": "herson",
   "locality": "herson",
   "where": "",
   "title": "Оккупация Херсона",
   "desc": "",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D0%B5%D1%80%D1%81%D0%BE%D0%BD#1918.E2.80.941991"
 },
 {
   "from": "1941-08-19",
   "till": "",
   "country": "ukraine",
   "province": "herson",
   "locality": "herson",
   "where": "",
   "title": "",
   "desc": "Войска 9-й и 18-й армий Южного фронта отступили за реку Днепр на фронте Никополь, Херсон, удержав на правом берегу реки плацдармы в районах Берислава и Херсона. Войска противника оккупировали город Херсон.",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D0%B0%D0%B2%D0%B3%D1%83%D1%81%D1%82_1941_%D0%B3%D0%BE%D0%B4%D0%B0)#19_.D0.B0.D0.B2.D0.B3.D1.83.D1.81.D1.82.D0.B0_1941_.D0.B3.D0.BE.D0.B4.D0.B0._59-.D0.B9_.D0.B4.D0.B5.D0.BD.D1.8C_.D0.B2.D0.BE.D0.B9.D0.BD.D1.8B"
 },
 {
   "from": "1941-08-19",
   "till": "",
   "country": "russia",
   "province": "moscow",
   "locality": "moscow",
   "where": "",
   "title": "",
   "desc": "19 августа Ставка образовала Одесский оборонительный район, включив в него войска Приморской армии и Одесской военно-морской базы. Командующим оборонительным районом был назначен командир Одесской военно-морской базы контр-адмирал Г. В. Жуков.",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D0%B0%D0%B2%D0%B3%D1%83%D1%81%D1%82_1941_%D0%B3%D0%BE%D0%B4%D0%B0)#19_.D0.B0.D0.B2.D0.B3.D1.83.D1.81.D1.82.D0.B0_1941_.D0.B3.D0.BE.D0.B4.D0.B0._59-.D0.B9_.D0.B4.D0.B5.D0.BD.D1.8C_.D0.B2.D0.BE.D0.B9.D0.BD.D1.8B"
 },
 {
   "from": "1941-08-19",
   "till": "",
   "country": "russia",
   "province": "moscow",
   "locality": "moscow",
   "where": "",
   "title": "",
   "desc": " В течение 19 августа наши войска вели бои с противником на всём фронте, особенно упорные на Кингисеппском, Новгородском, Гомельском и Одесском направлениях.",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D0%B0%D0%B2%D0%B3%D1%83%D1%81%D1%82_1941_%D0%B3%D0%BE%D0%B4%D0%B0)#19_.D0.B0.D0.B2.D0.B3.D1.83.D1.81.D1.82.D0.B0_1941_.D0.B3.D0.BE.D0.B4.D0.B0._59-.D0.B9_.D0.B4.D0.B5.D0.BD.D1.8C_.D0.B2.D0.BE.D0.B9.D0.BD.D1.8B"
 },
 {
   "from": "1941-08-20",
   "till": "",
   "country": "russia",
   "province": "leningrad",
   "locality": "leningrad",
   "where": "",
   "title": "",
   "desc": "Войска противника возобновили наступление на Таллин и вышли к его пригородам. Немецкий 1-й армейский корпус занял Чудово, перерезав московское направление Октябрьской железной дороги. 41-й германский моторизированный корпус, взяв станции Войсковицы(Илькино) и Суйда, перерезал Кингисеппское и Киевское направления Октябрьской железной дороги и окружил лужскую группировку советских войск. Советские войска оставили г. Луга. Органами НКВД произведено экстренное плановое уничтожение промышленных предприятий г. Красногвардейск(Гатчина).",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D0%B0%D0%B2%D0%B3%D1%83%D1%81%D1%82_1941_%D0%B3%D0%BE%D0%B4%D0%B0)#20_.D0.B0.D0.B2.D0.B3.D1.83.D1.81.D1.82.D0.B0_1941_.D0.B3.D0.BE.D0.B4.D0.B0._60-.D0.B9_.D0.B4.D0.B5.D0.BD.D1.8C_.D0.B2.D0.BE.D0.B9.D0.BD.D1.8B"
 },
 {
   "from": "1941-08-20",
   "till": "",
   "country": "belarus",
   "province": "gomel",
   "locality": "gomel",
   "where": "",
   "title": "",
   "desc": "Войска противника вышли на рубеж Гомель, Стародуб и создали угрозу флангу и тылу Юго-западного фронта.",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D0%B0%D0%B2%D0%B3%D1%83%D1%81%D1%82_1941_%D0%B3%D0%BE%D0%B4%D0%B0)#20_.D0.B0.D0.B2.D0.B3.D1.83.D1.81.D1.82.D0.B0_1941_.D0.B3.D0.BE.D0.B4.D0.B0._60-.D0.B9_.D0.B4.D0.B5.D0.BD.D1.8C_.D0.B2.D0.BE.D0.B9.D0.BD.D1.8B"
 },
 {
   "from": "1941-08-20",
   "till": "",
   "country": "ukraine",
   "province": "cherkasy",
   "locality": "cherkasy",
   "where": "",
   "title": "",
   "desc": "Советские войска начали отход за реку Днепр с плацдармов севернее и южнее Киева и у Черкасс.",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D0%B0%D0%B2%D0%B3%D1%83%D1%81%D1%82_1941_%D0%B3%D0%BE%D0%B4%D0%B0)#20_.D0.B0.D0.B2.D0.B3.D1.83.D1.81.D1.82.D0.B0_1941_.D0.B3.D0.BE.D0.B4.D0.B0._60-.D0.B9_.D0.B4.D0.B5.D0.BD.D1.8C_.D0.B2.D0.BE.D0.B9.D0.BD.D1.8B"
 },
 {
   "from": "1941-08-20",
   "till": "",
   "country": "russia",
   "province": "moscow",
   "locality": "moscow",
   "where": "",
   "title": "",
   "desc": "В течение 20 августа наши войска вели упорные бои с противником на Кингисеппском, Новгородском, Старорусском, Гомельском и Одесском направлениях.",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D0%B0%D0%B2%D0%B3%D1%83%D1%81%D1%82_1941_%D0%B3%D0%BE%D0%B4%D0%B0)#20_.D0.B0.D0.B2.D0.B3.D1.83.D1.81.D1.82.D0.B0_1941_.D0.B3.D0.BE.D0.B4.D0.B0._60-.D0.B9_.D0.B4.D0.B5.D0.BD.D1.8C_.D0.B2.D0.BE.D0.B9.D0.BD.D1.8B"
 },
 {
   "from": "1941-08-21",
   "till": "",
   "country": "russia",
   "province": "leningrad",
   "locality": "leningrad",
   "where": "",
   "title": "",
   "desc": "Началась оборона Ленинграда на ближних подступах. Войска 42-й армии В. И. Щербакова, развёрнутые на позициях Красногвардейского укрепрайона, вели бои с противником, вышедшим к Красногвардейску и перерезавшим южнее города шоссе и железную дорогу Ленинград — Луга. Немецкий 1-й армейский корпус захватил в исправности железнодорожный мост и виадук у Чудово.",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D0%B0%D0%B2%D0%B3%D1%83%D1%81%D1%82_1941_%D0%B3%D0%BE%D0%B4%D0%B0)#21_.D0.B0.D0.B2.D0.B3.D1.83.D1.81.D1.82.D0.B0_1941_.D0.B3.D0.BE.D0.B4.D0.B0._61-.D0.B9_.D0.B4.D0.B5.D0.BD.D1.8C_.D0.B2.D0.BE.D0.B9.D0.BD.D1.8B"
 },
 {
   "from": "1941-08-21",
   "till": "",
   "country": "russia",
   "province": "bryansk",
   "locality": "pochep",
   "where": "",
   "title": "",
   "desc": "47-й мотокорпус 2-й танковой группы занял Почеп. Немецкие войска вышли на рубеж Новозыбков, Стародуб и глубоко охватили с востока и запада 21-ю армию. Связь между Брянским и Центральным фронтами нарушилась.",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D0%B0%D0%B2%D0%B3%D1%83%D1%81%D1%82_1941_%D0%B3%D0%BE%D0%B4%D0%B0)#21_.D0.B0.D0.B2.D0.B3.D1.83.D1.81.D1.82.D0.B0_1941_.D0.B3.D0.BE.D0.B4.D0.B0._61-.D0.B9_.D0.B4.D0.B5.D0.BD.D1.8C_.D0.B2.D0.BE.D0.B9.D0.BD.D1.8B"
 },
 {
   "from": "1941-08-21",
   "till": "",
   "country": "russia",
   "province": "moscow",
   "locality": "moscow",
   "where": "",
   "title": "",
   "desc": "В течение 21 августа наши войска вели упорные бои с противником на всём фронте и особенно ожесточённые на КИНГИСЕППСКОМ, НОВГОРОДСКОМ, ГОМЕЛЬСКОМ направлениях. После ожесточённых боёв наши войска оставили город Гомель.",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D0%B0%D0%B2%D0%B3%D1%83%D1%81%D1%82_1941_%D0%B3%D0%BE%D0%B4%D0%B0)#21_.D0.B0.D0.B2.D0.B3.D1.83.D1.81.D1.82.D0.B0_1941_.D0.B3.D0.BE.D0.B4.D0.B0._61-.D0.B9_.D0.B4.D0.B5.D0.BD.D1.8C_.D0.B2.D0.BE.D0.B9.D0.BD.D1.8B"
 },
 {
   "from": "1941-08-22",
   "till": "",
   "country": "russia",
   "province": "leningrad",
   "locality": "leningrad",
   "where": "",
   "title": "",
   "desc": "На Ораниенбаумском направлении советские войска остановили противника северо-восточнее Копорья.",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D0%B0%D0%B2%D0%B3%D1%83%D1%81%D1%82_1941_%D0%B3%D0%BE%D0%B4%D0%B0)#22_.D0.B0.D0.B2.D0.B3.D1.83.D1.81.D1.82.D0.B0_1941_.D0.B3.D0.BE.D0.B4.D0.B0._62-.D0.B9_.D0.B4.D0.B5.D0.BD.D1.8C_.D0.B2.D0.BE.D0.B9.D0.BD.D1.8B"
 },
 {
   "from": "1941-08-22",
   "till": "",
   "country": "russia",
   "province": "pskov",
   "locality": "velikije-luki",
   "where": "",
   "title": "",
   "desc": "Противник нанес удар в стыке 22-й и 29-й армий с целью выхода в тыл нашим войскам, оборонявшимся в районе Великих Лук. Начались оборонительные действия 22-й армии Западного фронта на Торопецком направлении. | В ходе завершающего этапа Смоленского сражения, начавшегося 22 августа, Ставка ВГК предприняла очередную попытку организовать и провести наступление силами группы фронтов на Западном направлении.",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D0%B0%D0%B2%D0%B3%D1%83%D1%81%D1%82_1941_%D0%B3%D0%BE%D0%B4%D0%B0)#22_.D0.B0.D0.B2.D0.B3.D1.83.D1.81.D1.82.D0.B0_1941_.D0.B3.D0.BE.D0.B4.D0.B0._62-.D0.B9_.D0.B4.D0.B5.D0.BD.D1.8C_.D0.B2.D0.BE.D0.B9.D0.BD.D1.8B"
 },
 {
   "from": "1941-08-22",
   "till": "",
   "country": "ukraine",
   "province": "dnepropetrovsk",
   "locality": "dnepropetrovsk",
   "where": "",
   "title": "",
   "desc": "Группа армий «Юг» ведёт упорные бои у Днепропетровска и Черкасс.",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D0%B0%D0%B2%D0%B3%D1%83%D1%81%D1%82_1941_%D0%B3%D0%BE%D0%B4%D0%B0)#22_.D0.B0.D0.B2.D0.B3.D1.83.D1.81.D1.82.D0.B0_1941_.D0.B3.D0.BE.D0.B4.D0.B0._62-.D0.B9_.D0.B4.D0.B5.D0.BD.D1.8C_.D0.B2.D0.BE.D0.B9.D0.BD.D1.8B"
 },
 {
   "from": "1941-08-22",
   "till": "",
   "country": "germany",
   "province": "",
   "locality": "berlin",
   "where": "",
   "title": "",
   "desc": "Получена директива фюрера от 21.8 (исх. № 441412/41). Эта директива имеет решающее значение для всей Восточной кампании. Директива гласит: «1. Важнейшей задачей до наступления зимы является не захват Москвы, а захват Крыма, промышленных и угольных районов на реке Донец и блокирование путей подвоза русскими нефти с Кавказа. На севере такой задачей является окружение Ленинграда и соединение с финскими войсками…»",
   "result": "",
   "link": ""
 },
 {
   "from": "1941-08-22",
   "till": "",
   "country": "russia",
   "province": "moscow",
   "locality": "moscow",
   "where": "",
   "title": "Совинформбюро",
   "desc": "В течение 22 августа наши войска вели упорные бои с противником на всём фронте… | Двухмесячные итоги войны между гитлеровской Германией и Советским Союзом",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D0%B0%D0%B2%D0%B3%D1%83%D1%81%D1%82_1941_%D0%B3%D0%BE%D0%B4%D0%B0)#22_.D0.B0.D0.B2.D0.B3.D1.83.D1.81.D1.82.D0.B0_1941_.D0.B3.D0.BE.D0.B4.D0.B0._62-.D0.B9_.D0.B4.D0.B5.D0.BD.D1.8C_.D0.B2.D0.BE.D0.B9.D0.BD.D1.8B"
 },
 {
   "from": "1941-08-23",
   "till": "",
   "country": "russia",
   "province": "moscow",
   "locality": "moscow",
   "where": "",
   "title": "",
   "desc": "23 августа Ставка Верховного Главнокомандования разделила Северный фронт на Карельский в составе 7-й и 14-й армий под командованием В. А. Фролова и Ленинградский в составе 23, 8 и 48-й армий под командованием М. М. Попова. Ставка ВГК приняла решение о развёртывании восточнее Волхова 52-й резервной армии Н. К. Клыкова и вновь формируемой 54-й армии Г. К. Кулика.",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D0%B0%D0%B2%D0%B3%D1%83%D1%81%D1%82_1941_%D0%B3%D0%BE%D0%B4%D0%B0)#23_.D0.B0.D0.B2.D0.B3.D1.83.D1.81.D1.82.D0.B0_1941_.D0.B3.D0.BE.D0.B4.D0.B0._63-.D0.B9_.D0.B4.D0.B5.D0.BD.D1.8C_.D0.B2.D0.BE.D0.B9.D0.BD.D1.8B"
 },
 {
   "from": "1941-08-23",
   "till": "",
   "country": "russia",
   "province": "pskov",
   "locality": "velikije-luki",
   "where": "",
   "title": "",
   "desc": "Противник в районе Великих Лук окружил основные силы 22-й армии, которым пришлось пробиваться из окружения и отойти на восток. Отступили и войска 29-й армии. В последующем продвижение противника в полосе этих армий было остановлено на рубеже Западной Двины, в её верхнем течении.",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D0%B0%D0%B2%D0%B3%D1%83%D1%81%D1%82_1941_%D0%B3%D0%BE%D0%B4%D0%B0)#23_.D0.B0.D0.B2.D0.B3.D1.83.D1.81.D1.82.D0.B0_1941_.D0.B3.D0.BE.D0.B4.D0.B0._63-.D0.B9_.D0.B4.D0.B5.D0.BD.D1.8C_.D0.B2.D0.BE.D0.B9.D0.BD.D1.8B"
 },
 {
   "from": "1941-08-23",
   "till": "",
   "country": "russia",
   "province": "moscow",
   "locality": "moscow",
   "where": "",
   "title": "Совинформбюро",
   "desc": "В течение 23 августа наши войска продолжали вести бои с противником на всём фронте и особенно упорные на Кингисеппском, Смоленском, Новгородском и Одесском направлениях. Советские войска после упорных оборонительных боёв оставили Великие Луки.",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D0%B0%D0%B2%D0%B3%D1%83%D1%81%D1%82_1941_%D0%B3%D0%BE%D0%B4%D0%B0)#23_.D0.B0.D0.B2.D0.B3.D1.83.D1.81.D1.82.D0.B0_1941_.D0.B3.D0.BE.D0.B4.D0.B0._63-.D0.B9_.D0.B4.D0.B5.D0.BD.D1.8C_.D0.B2.D0.BE.D0.B9.D0.BD.D1.8B"
 },
 {
   "from": "1941-08-24",
   "till": "",
   "country": "estonia",
   "province": "",
   "locality": "tallinn",
   "where": "",
   "title": "",
   "desc": "К исходу 24 августа противник вышел на непосредственные подступы к Таллину.",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D0%B0%D0%B2%D0%B3%D1%83%D1%81%D1%82_1941_%D0%B3%D0%BE%D0%B4%D0%B0)#24_.D0.B0.D0.B2.D0.B3.D1.83.D1.81.D1.82.D0.B0_1941_.D0.B3.D0.BE.D0.B4.D0.B0._64-.D0.B9_.D0.B4.D0.B5.D0.BD.D1.8C_.D0.B2.D0.BE.D0.B9.D0.BD.D1.8B"
 },
 {
   "from": "1941-08-24",
   "till": "",
   "country": "russia",
   "province": "leningrad",
   "locality": "luga",
   "where": "",
   "title": "",
   "desc": "В районе ЛУги Полицейская дивизия СС обошла советские войска с востока и 24 августа полностью заняла город. Части Лужской оперативной группы попали в окружение.",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D0%B0%D0%B2%D0%B3%D1%83%D1%81%D1%82_1941_%D0%B3%D0%BE%D0%B4%D0%B0)#24_.D0.B0.D0.B2.D0.B3.D1.83.D1.81.D1.82.D0.B0_1941_.D0.B3.D0.BE.D0.B4.D0.B0._64-.D0.B9_.D0.B4.D0.B5.D0.BD.D1.8C_.D0.B2.D0.BE.D0.B9.D0.BD.D1.8B"
 },
 {
   "from": "1941-08-24",
   "till": "",
   "country": "russia",
   "province": "moscow",
   "locality": "moscow",
   "where": "",
   "title": "",
   "desc": "ВГК приняло решение о целесообразности объединения усилий войск, действовавших против немецких 2-й полевой армии и 2-й танковой группы, наступавших на Конотоп и гомельском направлении. Для этого Центральный фронт был расформирован, его армии переданы Брянскому фронту, который теперь включал 50-ю, 3-ю, 13-ю и 21-ю армии. На командующего Брянским фронтом генерал-лейтенанта А. И. Ерёменко была возложена ответственность за разгром группировки врага, наступавшей на юг.",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D0%B0%D0%B2%D0%B3%D1%83%D1%81%D1%82_1941_%D0%B3%D0%BE%D0%B4%D0%B0)#24_.D0.B0.D0.B2.D0.B3.D1.83.D1.81.D1.82.D0.B0_1941_.D0.B3.D0.BE.D0.B4.D0.B0._64-.D0.B9_.D0.B4.D0.B5.D0.BD.D1.8C_.D0.B2.D0.BE.D0.B9.D0.BD.D1.8B"
 },
 {
   "from": "1941-08-24",
   "till": "",
   "country": "ukraine",
   "province": "sumy",
   "locality": "konotop",
   "where": "",
   "title": "",
   "desc": "2-я танковая группа начала наступление в направлении Конотопа. Немецкая 11-я танковая дивизия овладела мостом через Днепр у Окуниново и прорвалась на восток до переправы через Десну у Остера.",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D0%B0%D0%B2%D0%B3%D1%83%D1%81%D1%82_1941_%D0%B3%D0%BE%D0%B4%D0%B0)#24_.D0.B0.D0.B2.D0.B3.D1.83.D1.81.D1.82.D0.B0_1941_.D0.B3.D0.BE.D0.B4.D0.B0._64-.D0.B9_.D0.B4.D0.B5.D0.BD.D1.8C_.D0.B2.D0.BE.D0.B9.D0.BD.D1.8B"
 },
 {
   "from": "1941-08-24",
   "till": "",
   "country": "ukraine",
   "province": "dnepropetrovsk",
   "locality": "dnepropetrovsk",
   "where": "",
   "title": "",
   "desc": "Немецкие войска захватили господствующие высоты перед Днепропетровском. К концу дня части Резервной армии вели ожесточённые бои на подступах к Днепропетровску.",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D0%B0%D0%B2%D0%B3%D1%83%D1%81%D1%82_1941_%D0%B3%D0%BE%D0%B4%D0%B0)#24_.D0.B0.D0.B2.D0.B3.D1.83.D1.81.D1.82.D0.B0_1941_.D0.B3.D0.BE.D0.B4.D0.B0._64-.D0.B9_.D0.B4.D0.B5.D0.BD.D1.8C_.D0.B2.D0.BE.D0.B9.D0.BD.D1.8B"
 },
 {
   "from": "1941-08-24",
   "till": "",
   "country": "russia",
   "province": "moscow",
   "locality": "moscow",
   "where": "",
   "title": "Совинформбюро",
   "desc": "В течение 24 августа наши войска вели бои с противником на всём фронте и особенно упорные на Кексгольмском, Смоленском, Гомельском и Днепропетровском направлениях.",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D0%B0%D0%B2%D0%B3%D1%83%D1%81%D1%82_1941_%D0%B3%D0%BE%D0%B4%D0%B0)#24_.D0.B0.D0.B2.D0.B3.D1.83.D1.81.D1.82.D0.B0_1941_.D0.B3.D0.BE.D0.B4.D0.B0._64-.D0.B9_.D0.B4.D0.B5.D0.BD.D1.8C_.D0.B2.D0.BE.D0.B9.D0.BD.D1.8B"
 },
 {
   "from": "1941-08-25",
   "till": "",
   "country": "russia",
   "province": "novgorod",
   "locality": "chudovo",
   "where": "",
   "title": "",
   "desc": "Немецкие войска из района Чудова возобновили наступление на Ленинград. 48-я армия начала отступать на Кириши и Пушкино. Направление на Тосно и Мгу оказалось открытым.",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D0%B0%D0%B2%D0%B3%D1%83%D1%81%D1%82_1941_%D0%B3%D0%BE%D0%B4%D0%B0)#25_.D0.B0.D0.B2.D0.B3.D1.83.D1.81.D1.82.D0.B0_1941_.D0.B3.D0.BE.D0.B4.D0.B0._65-.D0.B9_.D0.B4.D0.B5.D0.BD.D1.8C_.D0.B2.D0.BE.D0.B9.D0.BD.D1.8B"
 },
 {
   "from": "1941-08-25",
   "till": "",
   "country": "ukraine",
   "province": "dnepropetrovsk",
   "locality": "dnepropetrovsk",
   "where": "",
   "title": "",
   "desc": "Ставка ВГК 25 августа поставила войскам Западного, Резервного и Брянского фронтов задачу по разгрому противостоящей группировки противника. | Вследствие тяжёлых боев Красная Армия оставила правобережную часть Днепропетровска.",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D0%B0%D0%B2%D0%B3%D1%83%D1%81%D1%82_1941_%D0%B3%D0%BE%D0%B4%D0%B0)#25_.D0.B0.D0.B2.D0.B3.D1.83.D1.81.D1.82.D0.B0_1941_.D0.B3.D0.BE.D0.B4.D0.B0._65-.D0.B9_.D0.B4.D0.B5.D0.BD.D1.8C_.D0.B2.D0.BE.D0.B9.D0.BD.D1.8B"
 },
 {
   "from": "1941-08-25",
   "till": "",
   "country": "ukraine",
   "province": "dnepropetrovsk",
   "locality": "dnepropetrovsk",
   "where": "",
   "title": "",
   "desc": "Вследствие тяжёлых боев немецкие войска заняли Днепропетровск, переправились на левый берег Днепра, овладели Ломовкой и создали плацдарм на левом берегу реки.",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D0%B0%D0%B2%D0%B3%D1%83%D1%81%D1%82_1941_%D0%B3%D0%BE%D0%B4%D0%B0)#25_.D0.B0.D0.B2.D0.B3.D1.83.D1.81.D1.82.D0.B0_1941_.D0.B3.D0.BE.D0.B4.D0.B0._65-.D0.B9_.D0.B4.D0.B5.D0.BD.D1.8C_.D0.B2.D0.BE.D0.B9.D0.BD.D1.8B"
 },
 {
   "from": "1941-08-25",
   "till": "",
   "country": "iran",
   "province": "",
   "locality": "",
   "where": "",
   "title": "",
   "desc": "Правительству Ирана вручена нота Советского правительства о вводе советских войск в Иран в связи с широкой антисоветской деятельностью германских агентов и создавшейся угрозой СССР. В тот же день, 25 августа, советские войска вступили в Иран. Одновременно согласно договорённости между правительствами СССР и Англии в южную часть Ирана вошли английские войска.",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D0%B0%D0%B2%D0%B3%D1%83%D1%81%D1%82_1941_%D0%B3%D0%BE%D0%B4%D0%B0)#25_.D0.B0.D0.B2.D0.B3.D1.83.D1.81.D1.82.D0.B0_1941_.D0.B3.D0.BE.D0.B4.D0.B0._65-.D0.B9_.D0.B4.D0.B5.D0.BD.D1.8C_.D0.B2.D0.BE.D0.B9.D0.BD.D1.8B"
 },
 {
   "from": "1941-08-25",
   "till": "1941-09-17",
   "country": "iran",
   "province": "",
   "locality": "",
   "where": "",
   "title": "Иранская операция",
   "desc": "Также Англо-советское вторжение в Иран. | кодовое наименование — «Операция „Согласие“» (англ. Operation Countenance)) . вооружённый конфликт между Британской империей и её колониями Индией и Австралией и СССР с одной стороны и Шаханшахским Государством Иран с другой стороны. Цель: обеспечение безопасности нефтяных месторождений и налаживания путей снабжения Советского Союза («Персидский коридор»).",
   "result": "Несмотря на занятое Ираном положение нейтралитета, Реза Пехлеви, считающийся Антигитлеровской коалицией союзником Третьего рейха, свергнут, и титул шахиншаха получил его младший сын Мохаммед.",
   "link": "https://ru.wikipedia.org/wiki/%D0%98%D1%80%D0%B0%D0%BD%D1%81%D0%BA%D0%B0%D1%8F_%D0%BE%D0%BF%D0%B5%D1%80%D0%B0%D1%86%D0%B8%D1%8F"
 },
 {
   "from": "1941-08-25",
   "till": "",
   "country": "russia",
   "province": "moscow",
   "locality": "moscow",
   "where": "",
   "title": "Совинформбюро",
   "desc": "В течение 25 августа наши войска вели упорные бои с противником на всем фронте. После упорных боёв наши войска оставили Новгород.",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D0%B0%D0%B2%D0%B3%D1%83%D1%81%D1%82_1941_%D0%B3%D0%BE%D0%B4%D0%B0)#25_.D0.B0.D0.B2.D0.B3.D1.83.D1.81.D1.82.D0.B0_1941_.D0.B3.D0.BE.D0.B4.D0.B0._65-.D0.B9_.D0.B4.D0.B5.D0.BD.D1.8C_.D0.B2.D0.BE.D0.B9.D0.BD.D1.8B"
 },
 {
   "from": "1941-08-26",
   "till": "",
   "country": "russia",
   "province": "moscow",
   "locality": "moscow",
   "where": "",
   "title": "",
   "desc": "Ставка ВГК приняла решение перебазировать флот и гарнизон Таллина в Кронштадт и Ленинград.",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D0%B0%D0%B2%D0%B3%D1%83%D1%81%D1%82_1941_%D0%B3%D0%BE%D0%B4%D0%B0)#26_.D0.B0.D0.B2.D0.B3.D1.83.D1.81.D1.82.D0.B0_1941_.D0.B3.D0.BE.D0.B4.D0.B0._66-.D0.B9_.D0.B4.D0.B5.D0.BD.D1.8C_.D0.B2.D0.BE.D0.B9.D0.BD.D1.8B"
 },
 {
   "from": "1941-08-26",
   "till": "",
   "country": "russia",
   "province": "moscow",
   "locality": "moscow",
   "where": "",
   "title": "",
   "desc": "В течение 26 августа наши войска вели упорные бои с противником на всём фронте.",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D0%B0%D0%B2%D0%B3%D1%83%D1%81%D1%82_1941_%D0%B3%D0%BE%D0%B4%D0%B0)#26_.D0.B0.D0.B2.D0.B3.D1.83.D1.81.D1.82.D0.B0_1941_.D0.B3.D0.BE.D0.B4.D0.B0._66-.D0.B9_.D0.B4.D0.B5.D0.BD.D1.8C_.D0.B2.D0.BE.D0.B9.D0.BD.D1.8B"
 },
 {
   "from": "1941-08-01",
   "till": "",
   "country": "russia",
   "province": "krasnodar",
   "locality": "sochi",
   "where": "",
   "title": "",
   "desc": "В Сочи заработало 24 госпиталя с 11 980 койко-мест.",
   "result": "",
   "link": "http://sochi.scapp.ru/scapp-gorod/sochi-v-gody-vov/"
 },
 {
   "from": "1941-08-05",
   "till": "",
   "country": "russia",
   "province": "krasnodar",
   "locality": "sochi",
   "where": "",
   "title": "",
   "desc": "В Сочи прибыли первые раненые.",
   "result": "",
   "link": "http://sochi.scapp.ru/scapp-gorod/sochi-v-gody-vov/"
 },
 {
   "from": "1942-01-01",
   "till": "",
   "country": "russia",
   "province": "krasnodar",
   "locality": "sochi",
   "where": "",
   "title": "",
   "desc": "в Сочи действовует 50 госпиталей, рассчитанных на 20 500 коек",
   "result": "",
   "link": "http://sochi.scapp.ru/scapp-gorod/sochi-v-gody-vov/"
 },
 {
   "from": "1942-09-25",
   "till": "",
   "country": "russia",
   "province": "krasnodar",
   "locality": "sochi",
   "where": "",
   "title": "",
   "desc": "У побережья Хосты произошел бой теплохода \"Львов\" с 16-ю самолетами противника. Один самолет сбит, один поврежден. \"Львов\", получив пробоину, выбросился на прибрежную отмель (позже вернулся в строй). ",
   "result": "",
   "link": "http://inet-sochi.ru/history/?year=1942&domain=6"
 },
 {
   "from": "1942-03-19",
   "till": "",
   "country": "russia",
   "province": "krasnodar",
   "locality": "sochi",
   "where": "",
   "title": "",
   "desc": "В Сочи в условиях военного времени организована станция переливания крови.",
   "result": "",
   "link": "http://inet-sochi.ru/history/?year=1942&domain=6"
 },
 {
   "from": "1942-01-15",
   "till": "",
   "country": "russia",
   "province": "krasnodar",
   "locality": "sochi",
   "where": "",
   "title": "",
   "desc": "Бальнеологический институт выпустил 300 врачей и 300 медсестёр. Врачей и медсестёр готовили и переподготавливали по методам лечения раненых в условиях военного времени. ",
   "result": "",
   "link": "http://inet-sochi.ru/history/?year=1942&domain=6"
 },
 {
   "from": "1942-07-09",
   "till": "",
   "country": "russia",
   "province": "krasnodar",
   "locality": "sochi",
   "where": "",
   "title": "",
   "desc": "Первый налет немецкой авиации на Сочи. 2 самолета сбросили 4-5 бомб, упавших в городе, и еще несколько, упавших в море. Несколько человек было ранено, убитых нет.",
   "result": "",
   "link": "http://inet-sochi.ru/history/?year=1942&domain=6"
 },
 {
   "from": "1941-08-05",
   "till": "1945-07-01",
   "country": "russia",
   "province": "krasnodar",
   "locality": "sochi",
   "where": "",
   "title": "Сочи - город-госпиталь",
   "desc": "Сегодня в Сочи прибыло еще 235 раненых красноармейцев (среднее число). ",
   "result": "Всего 335 955 раненых побывали в Сочи. Процент выживших в госпиталях Сочи - самый высокий в Советском Союзе.",
   "link": "http://sochi.scapp.ru/scapp-gorod/sochi-v-gody-vov/"
 },
 {
   "from": "1942-09-25",
   "till": "1942-12-20",
   "country": "russia",
   "province": "krasnodar",
   "locality": "tuapse",
   "where": "",
   "title": "Туапсинская операция",
   "desc": "Оборонительная операция Черноморской группы войск Закавказского фронта.",
   "result": "Сорвана попытка прорыва немецко-фашистских войск к Туапсе, блокированию Военно-Грузинской дороги и прорыву к Каспийскому морю.",
   "link": "https://ru.wikipedia.org/wiki/%D0%A2%D1%83%D0%B0%D0%BF%D1%81%D0%B8%D0%BD%D1%81%D0%BA%D0%B0%D1%8F_%D0%BE%D0%BF%D0%B5%D1%80%D0%B0%D1%86%D0%B8%D1%8F"
 },
 {
   "from": "1942-07-25",
   "till": "1943-10-09",
   "country": "russia",
   "province": "",
   "locality": "",
   "where": "",
   "title": "Битва за Кавказ",
   "desc": "Сражение вооружённых сил нацистской Германии, Румынии и Словакии против СССР за контроль над Кавказом.",
   "result": "Первый этап: Немецким войскам не удаётся прорваться в Закавказье. | Второй этап: Красной Армии не удаётся окружить войска противника на Кубани и нанести им решительное поражение. После полугодовой обороны на Таманском полуострове немецкие войска эвакуируются в Крым.",
   "link": "https://ru.wikipedia.org/wiki/%D0%91%D0%B8%D1%82%D0%B2%D0%B0_%D0%B7%D0%B0_%D0%9A%D0%B0%D0%B2%D0%BA%D0%B0%D0%B7_(1942%E2%80%941943)"
 },
 {
   "from": "1942-08-09",
   "till": "1943-02-12",
   "country": "russia",
   "province": "krasnodar",
   "locality": "krasnodar",
   "where": "",
   "title": "Оккупация Краснодара",
   "desc": "Сегодня фашисты уничтожили еще 70 советских граждан. Используют также душегубки.",
   "result": "Всего погибло более 13 тыс советских граждан.",
   "link": "https://ru.wikipedia.org/wiki/%D0%9A%D1%80%D0%B0%D1%81%D0%BD%D0%BE%D0%B4%D0%B0%D1%80#.D0.A1.D0.BE.D0.B2.D0.B5.D1.82.D1.81.D0.BA.D0.B8.D0.B9_.D0.BF.D0.B5.D1.80.D0.B8.D0.BE.D0.B4"
 },
 {
   "from": "1941-08-27",
   "till": "",
   "country": "estonia",
   "province": "",
   "locality": "tallinn",
   "where": "",
   "title": "",
   "desc": "Противник ворвался в город Таллин. Завязались бои на улицах города.",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D0%B0%D0%B2%D0%B3%D1%83%D1%81%D1%82_1941_%D0%B3%D0%BE%D0%B4%D0%B0)#27_.D0.B0.D0.B2.D0.B3.D1.83.D1.81.D1.82.D0.B0_1941_.D0.B3.D0.BE.D0.B4.D0.B0._67-.D0.B9_.D0.B4.D0.B5.D0.BD.D1.8C_.D0.B2.D0.BE.D0.B9.D0.BD.D1.8B"
 },
 {
   "from": "1941-08-27",
   "till": "",
   "country": "russia",
   "province": "moscow",
   "locality": "moscow",
   "where": "",
   "title": "Совинформбюро",
   "desc": " В течение 27 августа наши войска вели упорные бои с противником на КИНГИСЕППСКОМ, СМОЛЕНСКОМ, ГОМЕЛЬСКОМ, ДНЕПРОПЕТРОВСКОМ и ОДЕССКОМ направлениях.",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D0%B0%D0%B2%D0%B3%D1%83%D1%81%D1%82_1941_%D0%B3%D0%BE%D0%B4%D0%B0)#27_.D0.B0.D0.B2.D0.B3.D1.83.D1.81.D1.82.D0.B0_1941_.D0.B3.D0.BE.D0.B4.D0.B0._67-.D0.B9_.D0.B4.D0.B5.D0.BD.D1.8C_.D0.B2.D0.BE.D0.B9.D0.BD.D1.8B"
 },
 {
   "from": "1941-08-28",
   "till": "",
   "country": "russia",
   "province": "leningrad",
   "locality": "vyborg",
   "where": "",
   "title": "",
   "desc": "Финские войска заняли Выборг.",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D0%B0%D0%B2%D0%B3%D1%83%D1%81%D1%82_1941_%D0%B3%D0%BE%D0%B4%D0%B0)#28_.D0.B0.D0.B2.D0.B3.D1.83.D1.81.D1.82.D0.B0_1941_.D0.B3.D0.BE.D0.B4.D0.B0._68-.D0.B9_.D0.B4.D0.B5.D0.BD.D1.8C_.D0.B2.D0.BE.D0.B9.D0.BD.D1.8B"
 },
 {
   "from": "1941-08-28",
   "till": "",
   "country": "estonia",
   "province": "",
   "locality": "tallinn",
   "where": "",
   "title": "",
   "desc": "Противник занял Таллин. Начался Таллинский переход кораблей Балтийского флота из Таллина в Кронштадт.",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D0%B0%D0%B2%D0%B3%D1%83%D1%81%D1%82_1941_%D0%B3%D0%BE%D0%B4%D0%B0)#28_.D0.B0.D0.B2.D0.B3.D1.83.D1.81.D1.82.D0.B0_1941_.D0.B3.D0.BE.D0.B4.D0.B0._68-.D0.B9_.D0.B4.D0.B5.D0.BD.D1.8C_.D0.B2.D0.BE.D0.B9.D0.BD.D1.8B"
 },
 {
   "from": "1941-08-28",
   "till": "",
   "country": "ukraine",
   "province": "kiev",
   "locality": "kiev",
   "where": "",
   "title": "",
   "desc": "Войска противника форсировали Десну и захватили плацдармы на южном берегу.",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D0%B0%D0%B2%D0%B3%D1%83%D1%81%D1%82_1941_%D0%B3%D0%BE%D0%B4%D0%B0)#28_.D0.B0.D0.B2.D0.B3.D1.83.D1.81.D1.82.D0.B0_1941_.D0.B3.D0.BE.D0.B4.D0.B0._68-.D0.B9_.D0.B4.D0.B5.D0.BD.D1.8C_.D0.B2.D0.BE.D0.B9.D0.BD.D1.8B"
 },
 {
   "from": "1941-08-28",
   "till": "",
   "country": "russia",
   "province": "moscow",
   "locality": "moscow",
   "where": "",
   "title": "",
   "desc": "Принят указ о переселении немцев из Поволжья.",
   "result": "",
   "link": "https://ru.wikisource.org/wiki/%D0%A3%D0%BA%D0%B0%D0%B7_%D0%9F%D1%80%D0%B5%D0%B7%D0%B8%D0%B4%D0%B8%D1%83%D0%BC%D0%B0_%D0%92%D0%A1_%D0%A1%D0%A1%D0%A1%D0%A0_%D0%BE%D1%82_28.08.1941_%D0%BE_%D0%BF%D0%B5%D1%80%D0%B5%D1%81%D0%B5%D0%BB%D0%B5%D0%BD%D0%B8%D0%B8_%D0%BD%D0%B5%D0%BC%D1%86%D0%B5%D0%B2,_%D0%BF%D1%80%D0%BE%D0%B6%D0%B8%D0%B2%D0%B0%D1%8E%D1%89%D0%B8%D1%85_%D0%B2_%D1%80%D0%B0%D0%B9%D0%BE%D0%BD%D0%B0%D1%85_%D0%9F%D0%BE%D0%B2%D0%BE%D0%BB%D0%B6%D1%8C%D1%8F"
 },
 {
   "from": "1941-08-28",
   "till": "",
   "country": "russia",
   "province": "moscow",
   "locality": "moscow",
   "where": "",
   "title": "Совинформбюро",
   "desc": "В течение 28 августа наши войска вели упорные бои с противником на всём фронте. После ожесточённых боёв наши войска оставили Днепропетровск.",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D0%B0%D0%B2%D0%B3%D1%83%D1%81%D1%82_1941_%D0%B3%D0%BE%D0%B4%D0%B0)#28_.D0.B0.D0.B2.D0.B3.D1.83.D1.81.D1.82.D0.B0_1941_.D0.B3.D0.BE.D0.B4.D0.B0._68-.D0.B9_.D0.B4.D0.B5.D0.BD.D1.8C_.D0.B2.D0.BE.D0.B9.D0.BD.D1.8B"
 },
 {
   "from": "1941-08-29",
   "till": "",
   "country": "russia",
   "province": "leningrad",
   "locality": "kolpino",
   "where": "",
   "title": "",
   "desc": "29 августа противник вышел к Колпину, но был остановлен в Слуцко-Колпинском укреплённом районе частями 55-й армии И. Г. Лазарева.",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D0%B0%D0%B2%D0%B3%D1%83%D1%81%D1%82_1941_%D0%B3%D0%BE%D0%B4%D0%B0)#29_.D0.B0.D0.B2.D0.B3.D1.83.D1.81.D1.82.D0.B0_1941_.D0.B3.D0.BE.D0.B4.D0.B0._69-.D0.B9_.D0.B4.D0.B5.D0.BD.D1.8C_.D0.B2.D0.BE.D0.B9.D0.BD.D1.8B"
 },
 {
   "from": "1941-08-29",
   "till": "",
   "country": "russia",
   "province": "smolensk",
   "locality": "",
   "where": "",
   "title": "",
   "desc": "по 2-й танковой группе были нанесены контрудары с востока, юга и запада.",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D0%B0%D0%B2%D0%B3%D1%83%D1%81%D1%82_1941_%D0%B3%D0%BE%D0%B4%D0%B0)#29_.D0.B0.D0.B2.D0.B3.D1.83.D1.81.D1.82.D0.B0_1941_.D0.B3.D0.BE.D0.B4.D0.B0._69-.D0.B9_.D0.B4.D0.B5.D0.BD.D1.8C_.D0.B2.D0.BE.D0.B9.D0.BD.D1.8B"
 },
 {
   "from": "1941-08-29",
   "till": "",
   "country": "iran",
   "province": "",
   "locality": "",
   "where": "",
   "title": "",
   "desc": "вооружённые силы Ирана сложили оружие перед англичанами, ",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D0%B0%D0%B2%D0%B3%D1%83%D1%81%D1%82_1941_%D0%B3%D0%BE%D0%B4%D0%B0)#29_.D0.B0.D0.B2.D0.B3.D1.83.D1.81.D1.82.D0.B0_1941_.D0.B3.D0.BE.D0.B4.D0.B0._69-.D0.B9_.D0.B4.D0.B5.D0.BD.D1.8C_.D0.B2.D0.BE.D0.B9.D0.BD.D1.8B"
 },
 {
   "from": "1941-08-30",
   "till": "",
   "country": "iran",
   "province": "",
   "locality": "",
   "where": "",
   "title": "",
   "desc": "вооружённые силы Ирана сложили оружие перед Красной армией.",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D0%B0%D0%B2%D0%B3%D1%83%D1%81%D1%82_1941_%D0%B3%D0%BE%D0%B4%D0%B0)#29_.D0.B0.D0.B2.D0.B3.D1.83.D1.81.D1.82.D0.B0_1941_.D0.B3.D0.BE.D0.B4.D0.B0._69-.D0.B9_.D0.B4.D0.B5.D0.BD.D1.8C_.D0.B2.D0.BE.D0.B9.D0.BD.D1.8B"
 },
 {
   "from": "1941-08-29",
   "till": "",
   "country": "russia",
   "province": "moscow",
   "locality": "moscow",
   "where": "",
   "title": "Совинформбюро",
   "desc": "В течение 29 августа наши войска вели упорные бои с противником на всём фронте.",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D0%B0%D0%B2%D0%B3%D1%83%D1%81%D1%82_1941_%D0%B3%D0%BE%D0%B4%D0%B0)#29_.D0.B0.D0.B2.D0.B3.D1.83.D1.81.D1.82.D0.B0_1941_.D0.B3.D0.BE.D0.B4.D0.B0._69-.D0.B9_.D0.B4.D0.B5.D0.BD.D1.8C_.D0.B2.D0.BE.D0.B9.D0.BD.D1.8B"
 },
 {
   "from": "1941-08-30",
   "till": "",
   "country": "russia",
   "province": "leningrad",
   "locality": "petersburg",
   "where": "",
   "title": "",
   "desc": "Войска противника вышли к Неве и перерезали последние железные дороги, связывавшие Ленинград со страной.",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D0%B0%D0%B2%D0%B3%D1%83%D1%81%D1%82_1941_%D0%B3%D0%BE%D0%B4%D0%B0)#30_.D0.B0.D0.B2.D0.B3.D1.83.D1.81.D1.82.D0.B0_1941_.D0.B3.D0.BE.D0.B4.D0.B0._70-.D0.B9_.D0.B4.D0.B5.D0.BD.D1.8C_.D0.B2.D0.BE.D0.B9.D0.BD.D1.8B"
 },
 {
   "from": "1941-08-30",
   "till": "",
   "country": "russia",
   "province": "smolensk",
   "locality": "",
   "where": "",
   "title": "",
   "desc": "Войска Резервного и Брянского фронтов перешли в наступление, начав соответственно Ельнинскую и Рославльско-Новозыбковскую наступательные операции.",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D0%B0%D0%B2%D0%B3%D1%83%D1%81%D1%82_1941_%D0%B3%D0%BE%D0%B4%D0%B0)#30_.D0.B0.D0.B2.D0.B3.D1.83.D1.81.D1.82.D0.B0_1941_.D0.B3.D0.BE.D0.B4.D0.B0._70-.D0.B9_.D0.B4.D0.B5.D0.BD.D1.8C_.D0.B2.D0.BE.D0.B9.D0.BD.D1.8B"
 },
 {
   "from": "1941-08-30",
   "till": "1941-09-08",
   "country": "russia",
   "province": "smolensk",
   "locality": "yelnya",
   "where": "",
   "title": "Ельнинская операция",
   "desc": "наступательная операция РККА. Началась наступлением двух армий (24-й и 43-й) советского Резервного фронта (командующий — генерал армии Г. К. Жуков). ",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D0%B0%D0%B2%D0%B3%D1%83%D1%81%D1%82_1941_%D0%B3%D0%BE%D0%B4%D0%B0)#30_.D0.B0.D0.B2.D0.B3.D1.83.D1.81.D1.82.D0.B0_1941_.D0.B3.D0.BE.D0.B4.D0.B0._70-.D0.B9_.D0.B4.D0.B5.D0.BD.D1.8C_.D0.B2.D0.BE.D0.B9.D0.BD.D1.8B"
 },
 {
   "from": "1941-08-30",
   "till": "1941-09-12",
   "country": "russia",
   "province": "",
   "locality": "",
   "where": "",
   "title": "Рославльско-Новозыбковская наступательная операция",
   "desc": "Наступательная операция на рославльском и новозыбковском направлениях — наступательная операция советских войск Брянского фронта с целью разгрома 2-й танковой группы вермахта, составная часть Смоленского сражения Великой Отечественной войны.",
   "result": "Продвижение войск к концу операции составило до 20-25 километров, но задача по разгрому 2-й танковой группы вермахта решена не была.",
   "link": "https://ru.wikipedia.org/wiki/%D0%A0%D0%BE%D1%81%D0%BB%D0%B0%D0%B2%D0%BB%D1%8C%D1%81%D0%BA%D0%BE-%D0%9D%D0%BE%D0%B2%D0%BE%D0%B7%D1%8B%D0%B1%D0%BA%D0%BE%D0%B2%D1%81%D0%BA%D0%B0%D1%8F_%D0%BD%D0%B0%D1%81%D1%82%D1%83%D0%BF%D0%B0%D1%82%D0%B5%D0%BB%D1%8C%D0%BD%D0%B0%D1%8F_%D0%BE%D0%BF%D0%B5%D1%80%D0%B0%D1%86%D0%B8%D1%8F"
 },
 {
   "from": "1941-08-30",
   "till": "",
   "country": "russia",
   "province": "moscow",
   "locality": "moscow",
   "where": "",
   "title": "Совинформбюро",
   "desc": "В течение 30 августа наши войска вели упорные бои с противником на всём фронте.",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A0%D0%BE%D1%81%D0%BB%D0%B0%D0%B2%D0%BB%D1%8C%D1%81%D0%BA%D0%BE-%D0%9D%D0%BE%D0%B2%D0%BE%D0%B7%D1%8B%D0%B1%D0%BA%D0%BE%D0%B2%D1%81%D0%BA%D0%B0%D1%8F_%D0%BD%D0%B0%D1%81%D1%82%D1%83%D0%BF%D0%B0%D1%82%D0%B5%D0%BB%D1%8C%D0%BD%D0%B0%D1%8F_%D0%BE%D0%BF%D0%B5%D1%80%D0%B0%D1%86%D0%B8%D1%8F"
 },
 {
   "from": "1941-08-31",
   "till": "",
   "country": "russia",
   "province": "arkhangelsk",
   "locality": "arkhangelsk",
   "where": "",
   "title": "",
   "desc": "В Архангельск прибыл первый английский конвой. Начались совместные действия Северного флота и военно-морских сил союзников.",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D0%B0%D0%B2%D0%B3%D1%83%D1%81%D1%82_1941_%D0%B3%D0%BE%D0%B4%D0%B0)#31_.D0.B0.D0.B2.D0.B3.D1.83.D1.81.D1.82.D0.B0_1941_.D0.B3.D0.BE.D0.B4.D0.B0._71-.D0.B9_.D0.B4.D0.B5.D0.BD.D1.8C_.D0.B2.D0.BE.D0.B9.D0.BD.D1.8B"
 },
 {
   "from": "1941-08-31",
   "till": "",
   "country": "russia",
   "province": "leningrad",
   "locality": "",
   "where": "",
   "title": "",
   "desc": "На Карельском перешейке войска Ленинградского фронта отошли на старую государственную границу (1939 год) и закрепились на рубеже Карельского УР. Немецкие войска заняли станцию Мга.",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D0%B0%D0%B2%D0%B3%D1%83%D1%81%D1%82_1941_%D0%B3%D0%BE%D0%B4%D0%B0)#31_.D0.B0.D0.B2.D0.B3.D1.83.D1.81.D1.82.D0.B0_1941_.D0.B3.D0.BE.D0.B4.D0.B0._71-.D0.B9_.D0.B4.D0.B5.D0.BD.D1.8C_.D0.B2.D0.BE.D0.B9.D0.BD.D1.8B"
 },
 {
   "from": "1941-08-31",
   "till": "",
   "country": "ukraine",
   "province": "poltava",
   "locality": "kremenchuk",
   "where": "",
   "title": "",
   "desc": "Войска левого фланга Юго-западного фронта вели бои с ударной группировкой противника, начавшей форсирование Днепра юго-восточнее Кременчуга.",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D0%B0%D0%B2%D0%B3%D1%83%D1%81%D1%82_1941_%D0%B3%D0%BE%D0%B4%D0%B0)#31_.D0.B0.D0.B2.D0.B3.D1.83.D1.81.D1.82.D0.B0_1941_.D0.B3.D0.BE.D0.B4.D0.B0._71-.D0.B9_.D0.B4.D0.B5.D0.BD.D1.8C_.D0.B2.D0.BE.D0.B9.D0.BD.D1.8B"
 },
 {
   "from": "1941-08-31",
   "till": "",
   "country": "russia",
   "province": "moscow",
   "locality": "moscow",
   "where": "",
   "title": "",
   "desc": "В течение 31 августа наши войска вели бои с противником на всём фронте.",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D0%B0%D0%B2%D0%B3%D1%83%D1%81%D1%82_1941_%D0%B3%D0%BE%D0%B4%D0%B0)#31_.D0.B0.D0.B2.D0.B3.D1.83.D1.81.D1.82.D0.B0_1941_.D0.B3.D0.BE.D0.B4.D0.B0._71-.D0.B9_.D0.B4.D0.B5.D0.BD.D1.8C_.D0.B2.D0.BE.D0.B9.D0.BD.D1.8B"
 },
 {
   "from": "1941-09-01",
   "till": "",
   "country": "russia",
   "province": "leningrad",
   "locality": "petersburg",
   "where": "",
   "title": "",
   "desc": "23-я армия остановила наступление финских войск в Карельском укрепрайоне, у государственной границы 1939 г. Фронт на северных подступах к Ленинграду стабилизировался до июня 1944 г. ",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D1%81%D0%B5%D0%BD%D1%82%D1%8F%D0%B1%D1%80%D1%8C_1941_%D0%B3%D0%BE%D0%B4%D0%B0)#1_.D1.81.D0.B5.D0.BD.D1.82.D1.8F.D0.B1.D1.80.D1.8F_1941_.D0.B3.D0.BE.D0.B4.D0.B0._72-.D0.B9_.D0.B4.D0.B5.D0.BD.D1.8C_.D0.B2.D0.BE.D0.B9.D0.BD.D1.8B"
 },
 {
   "from": "1941-09-01",
   "till": "",
   "country": "russia",
   "province": "smolensk",
   "locality": "smolensk",
   "where": "",
   "title": "",
   "desc": "22-я армия Западного фронта остановила наступление противника западнее и севернее г. Андреаполь. 30-я, 19-я, 16-я и 20-я армии Западного фронта перешли в наступление под Смоленском. В ночь на 1 сентября войска 16-й армии форсировали Вопь и прорвали оборону противника.",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D1%81%D0%B5%D0%BD%D1%82%D1%8F%D0%B1%D1%80%D1%8C_1941_%D0%B3%D0%BE%D0%B4%D0%B0)#1_.D1.81.D0.B5.D0.BD.D1.82.D1.8F.D0.B1.D1.80.D1.8F_1941_.D0.B3.D0.BE.D0.B4.D0.B0._72-.D0.B9_.D0.B4.D0.B5.D0.BD.D1.8C_.D0.B2.D0.BE.D0.B9.D0.BD.D1.8B"
 },
 {
   "from": "1941-09-01",
   "till": "",
   "country": "ukraine",
   "province": "sumy",
   "locality": "konotop",
   "where": "",
   "title": "",
   "desc": "2-я танковая группа Гудериана группы армий «Центр», наступая в направлении на Конотоп, 1 сентября прорвалась к Десне и захватила на её левом берегу плацдарм у Шостки.",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D1%81%D0%B5%D0%BD%D1%82%D1%8F%D0%B1%D1%80%D1%8C_1941_%D0%B3%D0%BE%D0%B4%D0%B0)#1_.D1.81.D0.B5.D0.BD.D1.82.D1.8F.D0.B1.D1.80.D1.8F_1941_.D0.B3.D0.BE.D0.B4.D0.B0._72-.D0.B9_.D0.B4.D0.B5.D0.BD.D1.8C_.D0.B2.D0.BE.D0.B9.D0.BD.D1.8B"
 },
 {
   "from": "1941-09-01",
   "till": "",
   "country": "ukraine",
   "province": "chernigov",
   "locality": "chernigov",
   "where": "",
   "title": "",
   "desc": "40-я армия отошла в юго-восточном направлении. 21-я армия, обойденная с востока войсками 2-й танковой группы, а с запада — 2-й немецкой армией, подошедшей к Чернигову, оказалась под угрозой окружения и начала поспешно отступать на юг к Десне.",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D1%81%D0%B5%D0%BD%D1%82%D1%8F%D0%B1%D1%80%D1%8C_1941_%D0%B3%D0%BE%D0%B4%D0%B0)#1_.D1.81.D0.B5.D0.BD.D1.82.D1.8F.D0.B1.D1.80.D1.8F_1941_.D0.B3.D0.BE.D0.B4.D0.B0._72-.D0.B9_.D0.B4.D0.B5.D0.BD.D1.8C_.D0.B2.D0.BE.D0.B9.D0.BD.D1.8B"
 },
 {
   "from": "1941-09-01",
   "till": "",
   "country": "ukraine",
   "province": "herson",
   "locality": "berislav",
   "where": "",
   "title": "",
   "desc": "11-я армия группы армий «Юг» ведет бои по расширению плацдарма у Берислава под Каховкой. Войска армии продвигаются также в районе плацдарма у Днепропетровска ",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D1%81%D0%B5%D0%BD%D1%82%D1%8F%D0%B1%D1%80%D1%8C_1941_%D0%B3%D0%BE%D0%B4%D0%B0)#1_.D1.81.D0.B5.D0.BD.D1.82.D1.8F.D0.B1.D1.80.D1.8F_1941_.D0.B3.D0.BE.D0.B4.D0.B0._72-.D0.B9_.D0.B4.D0.B5.D0.BD.D1.8C_.D0.B2.D0.BE.D0.B9.D0.BD.D1.8B"
 },
 {
   "from": "1941-09-01",
   "till": "",
   "country": "germany",
   "province": "",
   "locality": "berlin",
   "where": "",
   "title": "",
   "desc": "Войска 11-й армии успешно ведут бои по расширению плацдарма у Берислава. (На плацдарме уже пять полков.) Войска армии продвигаются также в районе плацдарма у Днепропетровска, где они, предположительно, овладели разрушенным железнодорожным мостом. Форсирование реки 100-й и 97-й легкими пехотными дивизиями даст возможность переправить на тот берег (у Кременчуга) ещё три полка. Однако из-за превосходства противника в воздухе пока невозможно навести мост.",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D1%81%D0%B5%D0%BD%D1%82%D1%8F%D0%B1%D1%80%D1%8C_1941_%D0%B3%D0%BE%D0%B4%D0%B0)#1_.D1.81.D0.B5.D0.BD.D1.82.D1.8F.D0.B1.D1.80.D1.8F_1941_.D0.B3.D0.BE.D0.B4.D0.B0._72-.D0.B9_.D0.B4.D0.B5.D0.BD.D1.8C_.D0.B2.D0.BE.D0.B9.D0.BD.D1.8B"
 },
 {
   "from": "1941-09-01",
   "till": "",
   "country": "russia",
   "province": "moscow",
   "locality": "moscow",
   "where": "",
   "title": "Совинформбюро",
   "desc": "В течение 1 сентября наши войска вели бои с противником на всём фронте.",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D1%81%D0%B5%D0%BD%D1%82%D1%8F%D0%B1%D1%80%D1%8C_1941_%D0%B3%D0%BE%D0%B4%D0%B0)#1_.D1.81.D0.B5.D0.BD.D1.82.D1.8F.D0.B1.D1.80.D1.8F_1941_.D0.B3.D0.BE.D0.B4.D0.B0._72-.D0.B9_.D0.B4.D0.B5.D0.BD.D1.8C_.D0.B2.D0.BE.D0.B9.D0.BD.D1.8B"
 },
 {
   "from": "1941-09-02",
   "till": "",
   "country": "russia",
   "province": "leningrad",
   "locality": "petersburg",
   "where": "",
   "title": "",
   "desc": "В Ленинграде произведено первое снижение продовольственных норм по карточкам: рабочим и ИТР стали выдавать по 600 г хлеба в день, служащим — 400 г, иждивенцам и детям до 12 лет — 300 г.",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D1%81%D0%B5%D0%BD%D1%82%D1%8F%D0%B1%D1%80%D1%8C_1941_%D0%B3%D0%BE%D0%B4%D0%B0)#2_.D1.81.D0.B5.D0.BD.D1.82.D1.8F.D0.B1.D1.80.D1.8F_1941_.D0.B3.D0.BE.D0.B4.D0.B0._73-.D0.B9_.D0.B4.D0.B5.D0.BD.D1.8C_.D0.B2.D0.BE.D0.B9.D0.BD.D1.8B"
 },
 {
   "from": "1941-09-02",
   "till": "",
   "country": "russia",
   "province": "smolensk",
   "locality": "",
   "where": "",
   "title": "",
   "desc": "Резервный фронт продолжал наступление на ельнинском направлении. 2 сентября Брянский фронт во взаимодействии с 40-й армией Юго-Западного фронта нанес удары в направлениях Рославль, Стародуб и Новгород-Северский. | 2-я танковая группа на флангах отражала контрудары советских войск, а 24-й моторизованный корпус продолжал продвигаться на юг.",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D1%81%D0%B5%D0%BD%D1%82%D1%8F%D0%B1%D1%80%D1%8C_1941_%D0%B3%D0%BE%D0%B4%D0%B0)#2_.D1.81.D0.B5.D0.BD.D1.82.D1.8F.D0.B1.D1.80.D1.8F_1941_.D0.B3.D0.BE.D0.B4.D0.B0._73-.D0.B9_.D0.B4.D0.B5.D0.BD.D1.8C_.D0.B2.D0.BE.D0.B9.D0.BD.D1.8B"
 },
 {
   "from": "1941-09-02",
   "till": "",
   "country": "russia",
   "province": "moscow",
   "locality": "moscow",
   "where": "",
   "title": "",
   "desc": "Ставка ВГК потребовала от главнокомандующего Юго-Западного направления во что бы то ни стало удержать Чернигов. К этому времени сплошной организованной обороны советских войск во всей полосе наступления противника от Шостки до Чернигова уже не было, а резервов для закрытия образовавшихся брешей командование Юго-Западного фронта не имело.",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D1%81%D0%B5%D0%BD%D1%82%D1%8F%D0%B1%D1%80%D1%8C_1941_%D0%B3%D0%BE%D0%B4%D0%B0)#2_.D1.81.D0.B5.D0.BD.D1.82.D1.8F.D0.B1.D1.80.D1.8F_1941_.D0.B3.D0.BE.D0.B4.D0.B0._73-.D0.B9_.D0.B4.D0.B5.D0.BD.D1.8C_.D0.B2.D0.BE.D0.B9.D0.BD.D1.8B"
 },
 {
   "from": "1941-09-02",
   "till": "",
   "country": "estonia",
   "province": "",
   "locality": "tallinn",
   "where": "",
   "title": "",
   "desc": "В течение 2 сентября наши войска продолжали вести упорные бои с противником на всём фронте. После ожесточённых боёв наши войска эвакуировали г. Таллин.",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D1%81%D0%B5%D0%BD%D1%82%D1%8F%D0%B1%D1%80%D1%8C_1941_%D0%B3%D0%BE%D0%B4%D0%B0)#2_.D1.81.D0.B5.D0.BD.D1.82.D1.8F.D0.B1.D1.80.D1.8F_1941_.D0.B3.D0.BE.D0.B4.D0.B0._73-.D0.B9_.D0.B4.D0.B5.D0.BD.D1.8C_.D0.B2.D0.BE.D0.B9.D0.BD.D1.8B"
 },
 {
   "from": "1941-08-29",
   "till": "1944-06-20",
   "country": "russia",
   "province": "leningrad",
   "locality": "vyborg",
   "where": "",
   "title": "Окуппация Выборга",
   "desc": "Гитлеровцы превращают город в укрепрайон.",
   "result": "",
   "link": "http://vvyborg.ru/vyborg-vo-vtoruyu-mirovuyu-voynu-0"
 },
 {
   "from": "1945-07-26",
   "till": "",
   "country": "",
   "province": "",
   "locality": "",
   "where": "",
   "title": "",
   "desc": "Cоюзники по антияпонской коалиции: Китай, США и Англия выдвинули условия капитуляции Японии в документе под названием «Потсдамская декларация». В случае отказа союзные державы угрожали Японии «быстрым и полным уничтожением», «снести Японию с лица земли».",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%90%D0%BA%D1%82_%D0%BE_%D0%BA%D0%B0%D0%BF%D0%B8%D1%82%D1%83%D0%BB%D1%8F%D1%86%D0%B8%D0%B8_%D0%AF%D0%BF%D0%BE%D0%BD%D0%B8%D0%B8"
 },
 {
   "from": "1945-07-28",
   "till": "",
   "country": "",
   "province": "",
   "locality": "",
   "where": "",
   "title": "",
   "desc": "Япония официально отказалась от условий ультиматума",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%90%D0%BA%D1%82_%D0%BE_%D0%BA%D0%B0%D0%BF%D0%B8%D1%82%D1%83%D0%BB%D1%8F%D1%86%D0%B8%D0%B8_%D0%AF%D0%BF%D0%BE%D0%BD%D0%B8%D0%B8"
 },
 {
   "from": "1945-08-06",
   "till": "",
   "country": "",
   "province": "",
   "locality": "",
   "where": "",
   "title": "",
   "desc": "В соответствии с угрозой, заявленной в «Потсдамской декларации», США взорвали атомную бомбу над Хиросимой.",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%90%D0%BA%D1%82_%D0%BE_%D0%BA%D0%B0%D0%BF%D0%B8%D1%82%D1%83%D0%BB%D1%8F%D1%86%D0%B8%D0%B8_%D0%AF%D0%BF%D0%BE%D0%BD%D0%B8%D0%B8"
 },
 {
   "from": "1945-08-08",
   "till": "",
   "country": "",
   "province": "",
   "locality": "",
   "where": "",
   "title": "",
   "desc": "Вечером СССР объявил войну Японии",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%90%D0%BA%D1%82_%D0%BE_%D0%BA%D0%B0%D0%BF%D0%B8%D1%82%D1%83%D0%BB%D1%8F%D1%86%D0%B8%D0%B8_%D0%AF%D0%BF%D0%BE%D0%BD%D0%B8%D0%B8"
 },
 {
   "from": "1945-08-09",
   "till": "",
   "country": "",
   "province": "",
   "locality": "",
   "where": "",
   "title": "",
   "desc": "США взорвали атомную бомбу над Нагасаки.",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%90%D0%BA%D1%82_%D0%BE_%D0%BA%D0%B0%D0%BF%D0%B8%D1%82%D1%83%D0%BB%D1%8F%D1%86%D0%B8%D0%B8_%D0%AF%D0%BF%D0%BE%D0%BD%D0%B8%D0%B8"
 },
 {
   "from": "1945-08-10",
   "till": "",
   "country": "",
   "province": "",
   "locality": "",
   "where": "",
   "title": "",
   "desc": "Япония официально заявила о готовности принять Потсдамские условия капитуляции с оговоркой относительно сохранения структуры императорской власти в стране.",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%90%D0%BA%D1%82_%D0%BE_%D0%BA%D0%B0%D0%BF%D0%B8%D1%82%D1%83%D0%BB%D1%8F%D1%86%D0%B8%D0%B8_%D0%AF%D0%BF%D0%BE%D0%BD%D0%B8%D0%B8"
 },
 {
   "from": "1945-08-11",
   "till": "",
   "country": "",
   "province": "",
   "locality": "",
   "where": "",
   "title": "",
   "desc": "США отвергли японскую поправку, настаивая на формуле Потсдамской конференции",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%90%D0%BA%D1%82_%D0%BE_%D0%BA%D0%B0%D0%BF%D0%B8%D1%82%D1%83%D0%BB%D1%8F%D1%86%D0%B8%D0%B8_%D0%AF%D0%BF%D0%BE%D0%BD%D0%B8%D0%B8"
 },
 {
   "from": "1945-08-14",
   "till": "",
   "country": "",
   "province": "",
   "locality": "",
   "where": "",
   "title": "",
   "desc": "Япония официально приняла (с оговоркой о личной неприкосновенности Императора) условия капитуляции и сообщила об этом союзникам.",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%90%D0%BA%D1%82_%D0%BE_%D0%BA%D0%B0%D0%BF%D0%B8%D1%82%D1%83%D0%BB%D1%8F%D1%86%D0%B8%D0%B8_%D0%AF%D0%BF%D0%BE%D0%BD%D0%B8%D0%B8"
 },
 {
   "from": "1945-08-19",
   "till": "",
   "country": "",
   "province": "",
   "locality": "",
   "where": "",
   "title": "",
   "desc": "В Маньчжурии японцы начали массовую сдачу советским войскам после полного окружения",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%90%D0%BA%D1%82_%D0%BE_%D0%BA%D0%B0%D0%BF%D0%B8%D1%82%D1%83%D0%BB%D1%8F%D1%86%D0%B8%D0%B8_%D0%AF%D0%BF%D0%BE%D0%BD%D0%B8%D0%B8"
 },
 {
   "from": "1945-08-28",
   "till": "",
   "country": "",
   "province": "",
   "locality": "",
   "where": "",
   "title": "",
   "desc": "Началась фактическая оккупация Японии  американцами.",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%90%D0%BA%D1%82_%D0%BE_%D0%BA%D0%B0%D0%BF%D0%B8%D1%82%D1%83%D0%BB%D1%8F%D1%86%D0%B8%D0%B8_%D0%AF%D0%BF%D0%BE%D0%BD%D0%B8%D0%B8"
 },
 {
   "from": "1945-09-02",
   "till": "",
   "country": "",
   "province": "",
   "locality": "",
   "where": "",
   "title": "",
   "desc": "формальная капитуляция Японии подписана в 9:02 по токийскому времени на борту американского линкора «Миссури» в Токийском заливе.",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%90%D0%BA%D1%82_%D0%BE_%D0%BA%D0%B0%D0%BF%D0%B8%D1%82%D1%83%D0%BB%D1%8F%D1%86%D0%B8%D0%B8_%D0%AF%D0%BF%D0%BE%D0%BD%D0%B8%D0%B8"
 },
 {
   "from": "1944-08-18",
   "till": "1945-05-09",
   "country": "",
   "province": "",
   "locality": "",
   "where": "",
   "title": "Операция \"Березино\"",
   "desc": "Операция советской разведки, основанная на радиоигре и являющаяся логическим продолжением операции «Монастырь».  Идею операции подсказал разведчикам И. В. Сталин. В английских источниках операция называется «Операция Шерхорн».",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%9E%D0%BF%D0%B5%D1%80%D0%B0%D1%86%D0%B8%D1%8F_%C2%AB%D0%91%D0%B5%D1%80%D0%B5%D0%B7%D0%B8%D0%BD%D0%BE%C2%BB"
 },
 {
   "from": "1941-12-31",
   "till": "1944-08-18",
   "country": "",
   "province": "",
   "locality": "",
   "where": "",
   "title": "Операция \"Монастырь\"",
   "desc": "Одну из самых успешных операций советских спецслужб во время Великой Отечественной войны. Операция была основана на радиоигре, которую группа оперативных работников НКВД вела со структурами Абвера. ",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%9C%D0%BE%D0%BD%D0%B0%D1%81%D1%82%D1%8B%D1%80%D1%8C_(%D0%BE%D0%BF%D0%B5%D1%80%D0%B0%D1%86%D0%B8%D1%8F_%D1%81%D0%BE%D0%B2%D0%B5%D1%82%D1%81%D0%BA%D0%BE%D0%B9_%D1%80%D0%B0%D0%B7%D0%B2%D0%B5%D0%B4%D0%BA%D0%B8)"
 },
 {
   "from": "1941-12-07",
   "till": "",
   "country": "",
   "province": "",
   "locality": "",
   "where": "",
   "title": "",
   "desc": "Япония напала на США, начав войну на Тихом океане",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A1%D0%BE%D0%B2%D0%B5%D1%82%D1%81%D0%BA%D0%BE-%D1%8F%D0%BF%D0%BE%D0%BD%D1%81%D0%BA%D0%B0%D1%8F_%D0%B2%D0%BE%D0%B9%D0%BD%D0%B0"
 },
 {
   "from": "1941-07-02",
   "till": "",
   "country": "",
   "province": "",
   "locality": "",
   "where": "",
   "title": "",
   "desc": "План кампании по агрессии против СССР представлен японцами, была проведена скрытая мобилизация в Маньчжурии, а Квантунская армия увеличена вдвое.",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A1%D0%BE%D0%B2%D0%B5%D1%82%D1%81%D0%BA%D0%BE-%D1%8F%D0%BF%D0%BE%D0%BD%D1%81%D0%BA%D0%B0%D1%8F_%D0%B2%D0%BE%D0%B9%D0%BD%D0%B0"
 },
 {
   "from": "1941-09-15",
   "till": "",
   "country": "",
   "province": "",
   "locality": "",
   "where": "",
   "title": "",
   "desc": "СССР усилил свои восточные границы, создав к уже существующему Дальневосточному фронту Забайкальский фронт.",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A1%D0%BE%D0%B2%D0%B5%D1%82%D1%81%D0%BA%D0%BE-%D1%8F%D0%BF%D0%BE%D0%BD%D1%81%D0%BA%D0%B0%D1%8F_%D0%B2%D0%BE%D0%B9%D0%BD%D0%B0"
 },
 {
   "from": "1941-09-03",
   "till": "",
   "country": "russia",
   "province": "moscow",
   "locality": "moscow",
   "where": "",
   "title": "",
   "desc": "И. В. Сталин направил второе послание У. Черчиллю с предложением «создать уже в этом году второй фронт где-либо на Балканах или во Франции, могущий оттянуть с восточного фронта 30—40 немецких дивизий, и одновременно обеспечить Советскому Союзу 30 тысяч тонн алюминия к началу октября с.г. и ежемесячную минимальную помощь в количестве 400 самолётов и 500 танков (малых или средних). Без этой помощи Советский Союз либо потерпит поражение, либо будет ослаблен настолько, что надолго потеряет способность помогать союзникам активными действиями на фронте против гитлеризма».",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D1%81%D0%B5%D0%BD%D1%82%D1%8F%D0%B1%D1%80%D1%8C_1941_%D0%B3%D0%BE%D0%B4%D0%B0)#3_.D1.81.D0.B5.D0.BD.D1.82.D1.8F.D0.B1.D1.80.D1.8F_1941_.D0.B3.D0.BE.D0.B4.D0.B0._74-.D0.B9_.D0.B4.D0.B5.D0.BD.D1.8C_.D0.B2.D0.BE.D0.B9.D0.BD.D1.8B"
 },
 {
   "from": "1941-09-03",
   "till": "",
   "country": "russia",
   "province": "",
   "locality": "",
   "where": "",
   "title": "",
   "desc": "К исходу дня советские войска сузили горловину ельнинского выступа до 6—8 км. Под угрозой окружения противник начал отвод своих сил из ельнинского мешка, прикрываясь сильными арьергардами по всему фронту выступа",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D1%81%D0%B5%D0%BD%D1%82%D1%8F%D0%B1%D1%80%D1%8C_1941_%D0%B3%D0%BE%D0%B4%D0%B0)#3_.D1.81.D0.B5.D0.BD.D1.82.D1.8F.D0.B1.D1.80.D1.8F_1941_.D0.B3.D0.BE.D0.B4.D0.B0._74-.D0.B9_.D0.B4.D0.B5.D0.BD.D1.8C_.D0.B2.D0.BE.D0.B9.D0.BD.D1.8B"
 },
 {
   "from": "1941-09-03",
   "till": "",
   "country": "germany",
   "province": "",
   "locality": "berlin",
   "where": "",
   "title": "Франц Гальдер",
   "desc": "Потери немецкой армии с 22 июня по 31 августа 1941 года составили 409 998 человек. Среднесуточные — 5775.",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D1%81%D0%B5%D0%BD%D1%82%D1%8F%D0%B1%D1%80%D1%8C_1941_%D0%B3%D0%BE%D0%B4%D0%B0)#3_.D1.81.D0.B5.D0.BD.D1.82.D1.8F.D0.B1.D1.80.D1.8F_1941_.D0.B3.D0.BE.D0.B4.D0.B0._74-.D0.B9_.D0.B4.D0.B5.D0.BD.D1.8C_.D0.B2.D0.BE.D0.B9.D0.BD.D1.8B"
 },
 {
   "from": "1941-09-03",
   "till": "",
   "country": "russia",
   "province": "moscow",
   "locality": "moscow",
   "where": "",
   "title": "Совинформбюро",
   "desc": "В течение 3 сентября наши войска вели упорные бои с противником на всём фронте.",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D1%81%D0%B5%D0%BD%D1%82%D1%8F%D0%B1%D1%80%D1%8C_1941_%D0%B3%D0%BE%D0%B4%D0%B0)#3_.D1.81.D0.B5.D0.BD.D1.82.D1.8F.D0.B1.D1.80.D1.8F_1941_.D0.B3.D0.BE.D0.B4.D0.B0._74-.D0.B9_.D0.B4.D0.B5.D0.BD.D1.8C_.D0.B2.D0.BE.D0.B9.D0.BD.D1.8B"
 },
 {
   "from": "1941-09-04",
   "till": "",
   "country": "",
   "province": "",
   "locality": "",
   "where": "",
   "title": "",
   "desc": "Утром финские войска перешли в наступление против советской 7-й отдельной армии.",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D1%81%D0%B5%D0%BD%D1%82%D1%8F%D0%B1%D1%80%D1%8C_1941_%D0%B3%D0%BE%D0%B4%D0%B0)#4_.D1.81.D0.B5.D0.BD.D1.82.D1.8F.D0.B1.D1.80.D1.8F_1941_.D0.B3.D0.BE.D0.B4.D0.B0._75-.D0.B9_.D0.B4.D0.B5.D0.BD.D1.8C_.D0.B2.D0.BE.D0.B9.D0.BD.D1.8B"
 },
 {
   "from": "1941-09-04",
   "till": "",
   "country": "russia",
   "province": "leningrad",
   "locality": "tosno",
   "where": "",
   "title": "",
   "desc": "Противник начал систематический артиллерийский обстрел Ленинграда из района Тосно (63 км к юго-востоку от Ленинграда).",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D1%81%D0%B5%D0%BD%D1%82%D1%8F%D0%B1%D1%80%D1%8C_1941_%D0%B3%D0%BE%D0%B4%D0%B0)#4_.D1.81.D0.B5.D0.BD.D1.82.D1.8F.D0.B1.D1.80.D1.8F_1941_.D0.B3.D0.BE.D0.B4.D0.B0._75-.D0.B9_.D0.B4.D0.B5.D0.BD.D1.8C_.D0.B2.D0.BE.D0.B9.D0.BD.D1.8B"
 },
 {
   "from": "1941-09-04",
   "till": "",
   "country": "russia",
   "province": "moscow",
   "locality": "moscow",
   "where": "",
   "title": "Совинформбюро",
   "desc": "В течение 4 сентября наши войска продолжали вести бои с противником на всём фронте.",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D1%81%D0%B5%D0%BD%D1%82%D1%8F%D0%B1%D1%80%D1%8C_1941_%D0%B3%D0%BE%D0%B4%D0%B0)#4_.D1.81.D0.B5.D0.BD.D1.82.D1.8F.D0.B1.D1.80.D1.8F_1941_.D0.B3.D0.BE.D0.B4.D0.B0._75-.D0.B9_.D0.B4.D0.B5.D0.BD.D1.8C_.D0.B2.D0.BE.D0.B9.D0.BD.D1.8B"
 },
 {
   "from": "1941-09-05",
   "till": "",
   "country": "russia",
   "province": "smolensk",
   "locality": "yelnya",
   "where": "",
   "title": "",
   "desc": "Советские войска севернее Ельни заняли Чапцово и ворвались в Ельню.",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D1%81%D0%B5%D0%BD%D1%82%D1%8F%D0%B1%D1%80%D1%8C_1941_%D0%B3%D0%BE%D0%B4%D0%B0)#5_.D1.81.D0.B5.D0.BD.D1.82.D1.8F.D0.B1.D1.80.D1.8F_1941_.D0.B3.D0.BE.D0.B4.D0.B0._76-.D0.B9_.D0.B4.D0.B5.D0.BD.D1.8C_.D0.B2.D0.BE.D0.B9.D0.BD.D1.8B"
 },
 {
   "from": "1941-09-05",
   "till": "",
   "country": "germany",
   "province": "",
   "locality": "berlin",
   "where": "",
   "title": "Франц Гальдер",
   "desc": "«Наши части сдали противнику дугу фронта у Ельни. Противник ещё долгое время, после того как наши части уже были выведены, вёл огонь по этим оставленным нами позициям и только тогда осторожно занял их пехотой. Скрытый отвод войск с этой дуги является неплохим достижением командования.»",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D1%81%D0%B5%D0%BD%D1%82%D1%8F%D0%B1%D1%80%D1%8C_1941_%D0%B3%D0%BE%D0%B4%D0%B0)#5_.D1.81.D0.B5.D0.BD.D1.82.D1.8F.D0.B1.D1.80.D1.8F_1941_.D0.B3.D0.BE.D0.B4.D0.B0._76-.D0.B9_.D0.B4.D0.B5.D0.BD.D1.8C_.D0.B2.D0.BE.D0.B9.D0.BD.D1.8B"
 },
 {
   "from": "1941-09-05",
   "till": "",
   "country": "russia",
   "province": "",
   "locality": "",
   "where": "",
   "title": "",
   "desc": "Войска 2-й армии и 2-й танковой группы Группы армий «Центр» медленно с боями продвигаются на юг.",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D1%81%D0%B5%D0%BD%D1%82%D1%8F%D0%B1%D1%80%D1%8C_1941_%D0%B3%D0%BE%D0%B4%D0%B0)#5_.D1.81.D0.B5.D0.BD.D1.82.D1.8F.D0.B1.D1.80.D1.8F_1941_.D0.B3.D0.BE.D0.B4.D0.B0._76-.D0.B9_.D0.B4.D0.B5.D0.BD.D1.8C_.D0.B2.D0.BE.D0.B9.D0.BD.D1.8B"
 },
 {
   "from": "1941-09-05",
   "till": "",
   "country": "",
   "province": "",
   "locality": "",
   "where": "",
   "title": "",
   "desc": "17-я армия и 1-я танковая группа Группы армий «Юг» расширили захваченные на Днепре плацдармы.",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D1%81%D0%B5%D0%BD%D1%82%D1%8F%D0%B1%D1%80%D1%8C_1941_%D0%B3%D0%BE%D0%B4%D0%B0)#5_.D1.81.D0.B5.D0.BD.D1.82.D1.8F.D0.B1.D1.80.D1.8F_1941_.D0.B3.D0.BE.D0.B4.D0.B0._76-.D0.B9_.D0.B4.D0.B5.D0.BD.D1.8C_.D0.B2.D0.BE.D0.B9.D0.BD.D1.8B"
 },
 {
   "from": "1941-09-05",
   "till": "",
   "country": "russia",
   "province": "moscow",
   "locality": "moscow",
   "where": "",
   "title": "",
   "desc": "В Москве объявлена эвакуация всех детей возрастом до 12 лет",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D1%81%D0%B5%D0%BD%D1%82%D1%8F%D0%B1%D1%80%D1%8C_1941_%D0%B3%D0%BE%D0%B4%D0%B0)#5_.D1.81.D0.B5.D0.BD.D1.82.D1.8F.D0.B1.D1.80.D1.8F_1941_.D0.B3.D0.BE.D0.B4.D0.B0._76-.D0.B9_.D0.B4.D0.B5.D0.BD.D1.8C_.D0.B2.D0.BE.D0.B9.D0.BD.D1.8B"
 },
 {
   "from": "1941-09-05",
   "till": "",
   "country": "russia",
   "province": "moscow",
   "locality": "moscow",
   "where": "",
   "title": "",
   "desc": "В течение 5 сентября наши войска вели бои с противником на всём фронте.",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D1%81%D0%B5%D0%BD%D1%82%D1%8F%D0%B1%D1%80%D1%8C_1941_%D0%B3%D0%BE%D0%B4%D0%B0)#5_.D1.81.D0.B5.D0.BD.D1.82.D1.8F.D0.B1.D1.80.D1.8F_1941_.D0.B3.D0.BE.D0.B4.D0.B0._76-.D0.B9_.D0.B4.D0.B5.D0.BD.D1.8C_.D0.B2.D0.BE.D0.B9.D0.BD.D1.8B"
 },
 {
   "from": "1941-09-06",
   "till": "",
   "country": "russia",
   "province": "moscow",
   "locality": "moscow",
   "where": "",
   "title": "",
   "desc": "В ответе на послание И. В. Сталина от 3 сентября 1941 У. Черчилль сообщал, что «в настоящее время нет никакой возможности осуществить такую британскую акцию на Западе (кроме акции в воздухе), которая позволила бы до зимы отвлечь германские силы с восточного фронта. Нет также никакой возможности создать второй фронт на Балканах без помощи Турции».",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D1%81%D0%B5%D0%BD%D1%82%D1%8F%D0%B1%D1%80%D1%8C_1941_%D0%B3%D0%BE%D0%B4%D0%B0)#5_.D1.81.D0.B5.D0.BD.D1.82.D1.8F.D0.B1.D1.80.D1.8F_1941_.D0.B3.D0.BE.D0.B4.D0.B0._76-.D0.B9_.D0.B4.D0.B5.D0.BD.D1.8C_.D0.B2.D0.BE.D0.B9.D0.BD.D1.8B"
 },
 {
   "from": "1941-09-06",
   "till": "",
   "country": "russia",
   "province": "leningrad",
   "locality": "leningrad",
   "where": "",
   "title": "",
   "desc": "Войска 8-й армии к 6 сентября отступили на рубеж Копорский залив — Ропша (15 километров южнее Петергофа). Здесь они при поддержке морской пехоты, артиллерийского огня фортов береговой обороны и кораблей Балтийского флота остановили наступление противника.",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D1%81%D0%B5%D0%BD%D1%82%D1%8F%D0%B1%D1%80%D1%8C_1941_%D0%B3%D0%BE%D0%B4%D0%B0)#5_.D1.81.D0.B5.D0.BD.D1.82.D1.8F.D0.B1.D1.80.D1.8F_1941_.D0.B3.D0.BE.D0.B4.D0.B0._76-.D0.B9_.D0.B4.D0.B5.D0.BD.D1.8C_.D0.B2.D0.BE.D0.B9.D0.BD.D1.8B"
 },
 {
   "from": "1941-09-06",
   "till": "",
   "country": "estonia",
   "province": "",
   "locality": "",
   "where": "",
   "title": "",
   "desc": "Началась оборона Моонзундских островов войсками 8-й армии Ленинградского фронта и частью сил Балтийского флота, продолжавшаяся до 22 октября. Немецкие войска с побережья Эстонии начали боевые действия по захвату Моонзундских островов.",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D1%81%D0%B5%D0%BD%D1%82%D1%8F%D0%B1%D1%80%D1%8C_1941_%D0%B3%D0%BE%D0%B4%D0%B0)#5_.D1.81.D0.B5.D0.BD.D1.82.D1.8F.D0.B1.D1.80.D1.8F_1941_.D0.B3.D0.BE.D0.B4.D0.B0._76-.D0.B9_.D0.B4.D0.B5.D0.BD.D1.8C_.D0.B2.D0.BE.D0.B9.D0.BD.D1.8B"
 },
 {
   "from": "1941-09-06",
   "till": "",
   "country": "",
   "province": "",
   "locality": "",
   "where": "",
   "title": "",
   "desc": "Начались оборонительные бои войск Северо-Западного фронта на демянском направлении.",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D1%81%D0%B5%D0%BD%D1%82%D1%8F%D0%B1%D1%80%D1%8C_1941_%D0%B3%D0%BE%D0%B4%D0%B0)#5_.D1.81.D0.B5.D0.BD.D1.82.D1.8F.D0.B1.D1.80.D1.8F_1941_.D0.B3.D0.BE.D0.B4.D0.B0._76-.D0.B9_.D0.B4.D0.B5.D0.BD.D1.8C_.D0.B2.D0.BE.D0.B9.D0.BD.D1.8B"
 },
 {
   "from": "1941-09-06",
   "till": "",
   "country": "russia",
   "province": "smolensk",
   "locality": "yelnya",
   "where": "",
   "title": "",
   "desc": "Войска Резервного фронта освободили Ельню.",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D1%81%D0%B5%D0%BD%D1%82%D1%8F%D0%B1%D1%80%D1%8C_1941_%D0%B3%D0%BE%D0%B4%D0%B0)#5_.D1.81.D0.B5.D0.BD.D1.82.D1.8F.D0.B1.D1.80.D1.8F_1941_.D0.B3.D0.BE.D0.B4.D0.B0._76-.D0.B9_.D0.B4.D0.B5.D0.BD.D1.8C_.D0.B2.D0.BE.D0.B9.D0.BD.D1.8B"
 },
 {
   "from": "1941-09-06",
   "till": "",
   "country": "",
   "province": "",
   "locality": "",
   "where": "",
   "title": "",
   "desc": "21-я армия включена в состав Юго-Западного фронта и получила задачу прочно оборонять Десну.",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D1%81%D0%B5%D0%BD%D1%82%D1%8F%D0%B1%D1%80%D1%8C_1941_%D0%B3%D0%BE%D0%B4%D0%B0)#5_.D1.81.D0.B5.D0.BD.D1.82.D1.8F.D0.B1.D1.80.D1.8F_1941_.D0.B3.D0.BE.D0.B4.D0.B0._76-.D0.B9_.D0.B4.D0.B5.D0.BD.D1.8C_.D0.B2.D0.BE.D0.B9.D0.BD.D1.8B"
 },
 {
   "from": "1941-09-06",
   "till": "",
   "country": "russia",
   "province": "moscow",
   "locality": "moscow",
   "where": "",
   "title": "",
   "desc": "«Правда» впервые назвала партизан «народными мстителями».",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D1%81%D0%B5%D0%BD%D1%82%D1%8F%D0%B1%D1%80%D1%8C_1941_%D0%B3%D0%BE%D0%B4%D0%B0)#5_.D1.81.D0.B5.D0.BD.D1.82.D1.8F.D0.B1.D1.80.D1.8F_1941_.D0.B3.D0.BE.D0.B4.D0.B0._76-.D0.B9_.D0.B4.D0.B5.D0.BD.D1.8C_.D0.B2.D0.BE.D0.B9.D0.BD.D1.8B"
 },
 {
   "from": "1941-09-06",
   "till": "",
   "country": "",
   "province": "",
   "locality": "",
   "where": "",
   "title": "",
   "desc": "В директиве немецкого верховного главнокомандования № 35 от 6 сентября 1941 г. была изложена общая идея завершающих осенних операций на советско-германском фронте. Группе армий «Север» предлагалось совместно с финскими соединениями окружить советские войска в районе Ленинграда. Группе армий «Центр» приказывалось не позднее конца сентября перейти в решительное наступление на московском направлении. Группа армий «Юг» получила указание главными силами завершить начатую против Юго-Западного фронта операцию.",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D1%81%D0%B5%D0%BD%D1%82%D1%8F%D0%B1%D1%80%D1%8C_1941_%D0%B3%D0%BE%D0%B4%D0%B0)#5_.D1.81.D0.B5.D0.BD.D1.82.D1.8F.D0.B1.D1.80.D1.8F_1941_.D0.B3.D0.BE.D0.B4.D0.B0._76-.D0.B9_.D0.B4.D0.B5.D0.BD.D1.8C_.D0.B2.D0.BE.D0.B9.D0.BD.D1.8B"
 },
 {
   "from": "1941-09-06",
   "till": "",
   "country": "russia",
   "province": "moscow",
   "locality": "moscow",
   "where": "",
   "title": "Совинформбюро",
   "desc": "В течение 6 сентября наши войска вели бои с противником на всём фронте.",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D1%81%D0%B5%D0%BD%D1%82%D1%8F%D0%B1%D1%80%D1%8C_1941_%D0%B3%D0%BE%D0%B4%D0%B0)#5_.D1.81.D0.B5.D0.BD.D1.82.D1.8F.D0.B1.D1.80.D1.8F_1941_.D0.B3.D0.BE.D0.B4.D0.B0._76-.D0.B9_.D0.B4.D0.B5.D0.BD.D1.8C_.D0.B2.D0.BE.D0.B9.D0.BD.D1.8B"
 },
 {
   "from": "1941-09-07",
   "till": "",
   "country": "russia",
   "province": "murmansk",
   "locality": "murmansk",
   "where": "",
   "title": "",
   "desc": "Немецкие войска возобновили наступление на Мурманск, но натолкнулись на упорное сопротивление 14-й армии.",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D1%81%D0%B5%D0%BD%D1%82%D1%8F%D0%B1%D1%80%D1%8C_1941_%D0%B3%D0%BE%D0%B4%D0%B0)#7_.D1.81.D0.B5.D0.BD.D1.82.D1.8F.D0.B1.D1.80.D1.8F_1941_.D0.B3.D0.BE.D0.B4.D0.B0._78-.D0.B9_.D0.B4.D0.B5.D0.BD.D1.8C_.D0.B2.D0.BE.D0.B9.D0.BD.D1.8B"
 },
 {
   "from": "1941-09-07",
   "till": "",
   "country": "russia",
   "province": "karelia",
   "locality": "",
   "where": "",
   "title": "",
   "desc": "Финская армия начала захват острова Рахмансаари.",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D1%81%D0%B5%D0%BD%D1%82%D1%8F%D0%B1%D1%80%D1%8C_1941_%D0%B3%D0%BE%D0%B4%D0%B0)#7_.D1.81.D0.B5.D0.BD.D1.82.D1.8F.D0.B1.D1.80.D1.8F_1941_.D0.B3.D0.BE.D0.B4.D0.B0._78-.D0.B9_.D0.B4.D0.B5.D0.BD.D1.8C_.D0.B2.D0.BE.D0.B9.D0.BD.D1.8B"
 },
 {
   "from": "1941-09-07",
   "till": "",
   "country": "russia",
   "province": "leningrad",
   "locality": "lomonosov",
   "where": "",
   "title": "",
   "desc": "Немецкие войска остановлены на подступах к Ораниенбауму. Силами 8-й армии, 2-й и 5-й бригадами морской пехоты создана устойчивая оборона — Ораниенбаумский плацдарм.",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D1%81%D0%B5%D0%BD%D1%82%D1%8F%D0%B1%D1%80%D1%8C_1941_%D0%B3%D0%BE%D0%B4%D0%B0)#7_.D1.81.D0.B5.D0.BD.D1.82.D1.8F.D0.B1.D1.80.D1.8F_1941_.D0.B3.D0.BE.D0.B4.D0.B0._78-.D0.B9_.D0.B4.D0.B5.D0.BD.D1.8C_.D0.B2.D0.BE.D0.B9.D0.BD.D1.8B"
 },
 {
   "from": "1941-09-07",
   "till": "",
   "country": "russia",
   "province": "sumy",
   "locality": "konotop",
   "where": "",
   "title": "",
   "desc": "2-я танковая группа заняла Конотоп, а 2-я немецкая армия завязала бои в Чернигове.",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D1%81%D0%B5%D0%BD%D1%82%D1%8F%D0%B1%D1%80%D1%8C_1941_%D0%B3%D0%BE%D0%B4%D0%B0)#7_.D1.81.D0.B5.D0.BD.D1.82.D1.8F.D0.B1.D1.80.D1.8F_1941_.D0.B3.D0.BE.D0.B4.D0.B0._78-.D0.B9_.D0.B4.D0.B5.D0.BD.D1.8C_.D0.B2.D0.BE.D0.B9.D0.BD.D1.8B"
 },
 {
   "from": "1941-09-07",
   "till": "",
   "country": "russia",
   "province": "smolensk",
   "locality": "",
   "where": "",
   "title": "",
   "desc": "43-я армия форсировала Стряну и развила наступление на запад.",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D1%81%D0%B5%D0%BD%D1%82%D1%8F%D0%B1%D1%80%D1%8C_1941_%D0%B3%D0%BE%D0%B4%D0%B0)#7_.D1.81.D0.B5.D0.BD.D1.82.D1.8F.D0.B1.D1.80.D1.8F_1941_.D0.B3.D0.BE.D0.B4.D0.B0._78-.D0.B9_.D0.B4.D0.B5.D0.BD.D1.8C_.D0.B2.D0.BE.D0.B9.D0.BD.D1.8B"
 },
 {
   "from": "1941-09-07",
   "till": "",
   "country": "russia",
   "province": "moscow",
   "locality": "moscow",
   "where": "",
   "title": "Совинформбюро",
   "desc": "В течение 7 сентября наши войска продолжали вести упорные бои с противником на всём фронте.",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D1%81%D0%B5%D0%BD%D1%82%D1%8F%D0%B1%D1%80%D1%8C_1941_%D0%B3%D0%BE%D0%B4%D0%B0)#7_.D1.81.D0.B5.D0.BD.D1.82.D1.8F.D0.B1.D1.80.D1.8F_1941_.D0.B3.D0.BE.D0.B4.D0.B0._78-.D0.B9_.D0.B4.D0.B5.D0.BD.D1.8C_.D0.B2.D0.BE.D0.B9.D0.BD.D1.8B"
 },
 {
   "from": "1941-09-08",
   "till": "",
   "country": "estonia",
   "province": "laanemaa",
   "locality": "",
   "where": "",
   "title": "",
   "desc": "немцам удалось высадиться на острове Вормси.",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D1%81%D0%B5%D0%BD%D1%82%D1%8F%D0%B1%D1%80%D1%8C_1941_%D0%B3%D0%BE%D0%B4%D0%B0)#7_.D1.81.D0.B5.D0.BD.D1.82.D1.8F.D0.B1.D1.80.D1.8F_1941_.D0.B3.D0.BE.D0.B4.D0.B0._78-.D0.B9_.D0.B4.D0.B5.D0.BD.D1.8C_.D0.B2.D0.BE.D0.B9.D0.BD.D1.8B"
 },
 {
   "from": "1941-09-08",
   "till": "",
   "country": "russia",
   "province": "leningrad",
   "locality": "shlisselburg",
   "where": "",
   "title": "",
   "desc": "Немецкие войска заняли Шлиссельбург и замкнули кольцо блокады вокруг Ленинграда.",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D1%81%D0%B5%D0%BD%D1%82%D1%8F%D0%B1%D1%80%D1%8C_1941_%D0%B3%D0%BE%D0%B4%D0%B0)#7_.D1.81.D0.B5.D0.BD.D1.82.D1.8F.D0.B1.D1.80.D1.8F_1941_.D0.B3.D0.BE.D0.B4.D0.B0._78-.D0.B9_.D0.B4.D0.B5.D0.BD.D1.8C_.D0.B2.D0.BE.D0.B9.D0.BD.D1.8B"
 },
 {
   "from": "1941-09-08",
   "till": "",
   "country": "russia",
   "province": "",
   "locality": "",
   "where": "",
   "title": "",
   "desc": "К исходу 8 сентября 24-я армия полностью ликвидировала ельнинский плацдарм и вышла к оборонительному рубежу по линии Новые Яковлевичи, Ново-Тишово, Кукуево. Завершилась Ельнинская операция.",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D1%81%D0%B5%D0%BD%D1%82%D1%8F%D0%B1%D1%80%D1%8C_1941_%D0%B3%D0%BE%D0%B4%D0%B0)#7_.D1.81.D0.B5.D0.BD.D1.82.D1.8F.D0.B1.D1.80.D1.8F_1941_.D0.B3.D0.BE.D0.B4.D0.B0._78-.D0.B9_.D0.B4.D0.B5.D0.BD.D1.8C_.D0.B2.D0.BE.D0.B9.D0.BD.D1.8B"
 },
 {
   "from": "1941-09-08",
   "till": "",
   "country": "russia",
   "province": "moscow",
   "locality": "moscow",
   "where": "",
   "title": "Совинформбюро",
   "desc": "В течение 8 сентября наши войска вели бои с противником на всём фронте.",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D1%81%D0%B5%D0%BD%D1%82%D1%8F%D0%B1%D1%80%D1%8C_1941_%D0%B3%D0%BE%D0%B4%D0%B0)#7_.D1.81.D0.B5.D0.BD.D1.82.D1.8F.D0.B1.D1.80.D1.8F_1941_.D0.B3.D0.BE.D0.B4.D0.B0._78-.D0.B9_.D0.B4.D0.B5.D0.BD.D1.8C_.D0.B2.D0.BE.D0.B9.D0.BD.D1.8B"
 },
 {
   "from": "1941-09-09",
   "till": "",
   "country": "russia",
   "province": "leningrad",
   "locality": "gatchina",
   "where": "",
   "title": "",
   "desc": "в 9.30 утра Группа армий «Север» начала новое наступление в обход Красногвардейска c запада, а Красного Села с юга и востока. Наступавшая в первом эшелоне 41-го корпуса 36-я моторизованная дивизия прорвала оборону 3-й ДНО и продвинулась к концу дня на 10 км в глубину обороны советских войск.",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D1%81%D0%B5%D0%BD%D1%82%D1%8F%D0%B1%D1%80%D1%8C_1941_%D0%B3%D0%BE%D0%B4%D0%B0)#7_.D1.81.D0.B5.D0.BD.D1.82.D1.8F.D0.B1.D1.80.D1.8F_1941_.D0.B3.D0.BE.D0.B4.D0.B0._78-.D0.B9_.D0.B4.D0.B5.D0.BD.D1.8C_.D0.B2.D0.BE.D0.B9.D0.BD.D1.8B"
 },
 {
   "from": "1941-09-09",
   "till": "",
   "country": "russia",
   "province": "moscow",
   "locality": "moscow",
   "where": "",
   "title": "",
   "desc": "по просьбе командования Юго-Западного фронта Ставка разрешила отвести 5-ю армию и правый фланг 37-й армии на Десну с целью прикрытия правого крыла фронта. Противник, наступавший с севера, оттеснил 5-ю армию от Десны и продвинулся от Чернигова к Нежину.| 17-я немецкая армия, форсировав Днепр юго-восточнее Кременчуга, к 9 сентября захватила крупный плацдарм. На этом плацдарме сосредоточились основные силы армии и 1-й танковой группы. Попытки командования Юго-Западного направления отбросить противника за Днепр остались безрезультатными.",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D1%81%D0%B5%D0%BD%D1%82%D1%8F%D0%B1%D1%80%D1%8C_1941_%D0%B3%D0%BE%D0%B4%D0%B0)#7_.D1.81.D0.B5.D0.BD.D1.82.D1.8F.D0.B1.D1.80.D1.8F_1941_.D0.B3.D0.BE.D0.B4.D0.B0._78-.D0.B9_.D0.B4.D0.B5.D0.BD.D1.8C_.D0.B2.D0.BE.D0.B9.D0.BD.D1.8B"
 },
 {
   "from": "1941-09-09",
   "till": "",
   "country": "ukraine",
   "province": "herson",
   "locality": "kahovka",
   "where": "",
   "title": "",
   "desc": "Утром 11-я немецкая армия возобновила наступление, нанося главный удар с каховского плацдарма. Войска 9-й армии Южного фронта трое суток сдерживали атаки противника.",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D1%81%D0%B5%D0%BD%D1%82%D1%8F%D0%B1%D1%80%D1%8C_1941_%D0%B3%D0%BE%D0%B4%D0%B0)#7_.D1.81.D0.B5.D0.BD.D1.82.D1.8F.D0.B1.D1.80.D1.8F_1941_.D0.B3.D0.BE.D0.B4.D0.B0._78-.D0.B9_.D0.B4.D0.B5.D0.BD.D1.8C_.D0.B2.D0.BE.D0.B9.D0.BD.D1.8B"
 },
 {
   "from": "1941-09-09",
   "till": "",
   "country": "iran",
   "province": "",
   "locality": "",
   "where": "",
   "title": "",
   "desc": "Иранский меджлис одобрил принятие правительством Ирана предложения правительств СССР и Великобритании об условиях ликвидации конфликта между СССР и Великобританией, с одной стороны, и Ираном — с другой.",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D1%81%D0%B5%D0%BD%D1%82%D1%8F%D0%B1%D1%80%D1%8C_1941_%D0%B3%D0%BE%D0%B4%D0%B0)#7_.D1.81.D0.B5.D0.BD.D1.82.D1.8F.D0.B1.D1.80.D1.8F_1941_.D0.B3.D0.BE.D0.B4.D0.B0._78-.D0.B9_.D0.B4.D0.B5.D0.BD.D1.8C_.D0.B2.D0.BE.D0.B9.D0.BD.D1.8B"
 },
 {
   "from": "1941-09-09",
   "till": "",
   "country": "russia",
   "province": "moscow",
   "locality": "moscow",
   "where": "",
   "title": "Совинформбюро",
   "desc": "В течение 9 сентября наши войска вели упорные бои с противником на всём фронте.",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D1%81%D0%B5%D0%BD%D1%82%D1%8F%D0%B1%D1%80%D1%8C_1941_%D0%B3%D0%BE%D0%B4%D0%B0)#7_.D1.81.D0.B5.D0.BD.D1.82.D1.8F.D0.B1.D1.80.D1.8F_1941_.D0.B3.D0.BE.D0.B4.D0.B0._78-.D0.B9_.D0.B4.D0.B5.D0.BD.D1.8C_.D0.B2.D0.BE.D0.B9.D0.BD.D1.8B"
 },
 {
   "from": "1941-09-10",
   "till": "",
   "country": "russia",
   "province": "leningrad",
   "locality": "sigolovo",
   "where": "",
   "title": "1-я Синявинская операция",
   "desc": "Началась Синявинская наступательная операция 54-й армии и Невской оперативной группы Ленинградского фронта (10—26 сентября) с целью прорыва блокады Ленинграда. 54-я армия перешла в наступление из района Сиголово (80 км к юго-востоку от Ленинграда) в направлении на Мгу. Со стороны Ленинграда перешла в наступление Невская оперативная группа.",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/1-%D1%8F_%D0%A1%D0%B8%D0%BD%D1%8F%D0%B2%D0%B8%D0%BD%D1%81%D0%BA%D0%B0%D1%8F_%D0%BE%D0%BF%D0%B5%D1%80%D0%B0%D1%86%D0%B8%D1%8F_(1941)"
 },
 {
   "from": "1941-09-10",
   "till": "",
   "country": "russia",
   "province": "smolensk",
   "locality": "",
   "where": "",
   "title": "",
   "desc": "Войска Западного, Резервного и Брянского фронтов, исчерпавшие наступательные возможности, по приказу Ставки перешли к обороне. Завершилось Смоленское сражение. Советские войска нанесли тяжёлый урон группе армий «Центр». Продолжительность сражения — 63 суток. Ширина фронта боевых действий — 600—650 км. Глубина отхода советских войск — 200—250 км. Численность войск — 581600 чел. Безвозвратные потери — 486171 (83,6 %). Санитарные — 273803. Всего — 759974. Среднесуточные — 12063.",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/1-%D1%8F_%D0%A1%D0%B8%D0%BD%D1%8F%D0%B2%D0%B8%D0%BD%D1%81%D0%BA%D0%B0%D1%8F_%D0%BE%D0%BF%D0%B5%D1%80%D0%B0%D1%86%D0%B8%D1%8F_(1941)"
 },
 {
   "from": "1941-09-10",
   "till": "",
   "country": "ukraine",
   "province": "",
   "locality": "",
   "where": "",
   "title": "",
   "desc": "К 10 сентября немецкие войска форсировали Десну и вышел на рубеж Конотоп, Чернигов. 5-я армия Юго-Западного фронта продолжает отходить на юг вдоль шоссе Чернигов — Киев. 2-я танковая группа, нанеся удар в стык 40-й и 21-й армии, 10 сентября прорвалась в район Ромны, а 17-я армия захватила плацдарм в районе Кременчуга. На нём для удара на север сосредоточилась 1-я танковая группа. 38-я армия отошла на рубеж Максимовка, Ульяновка, Перевалочная. | Командующий Юго-Западным фронтом М. П. Кирпонос, увидев реальную угрозу окружения своих войск, доложил в Москву о том, что 40-я и 21-я армии не в состоянии ликвидировать танковую группу противника, прорвавшуюся к Ромнам и попросил разрешения на немедленную переброску войск из Киевского укрепрайона на пути движения 2-й танковой группы и общий отход войск фронта на рубеж реки Псел. В ответ начальник Генерального штаба Шапошников брать войска из КиУР запретил и дал указание вывести из состава 26-й армии две дивизии и использовать их для ликвидации противника. Отвод войск на восток Ставка Верховного Главнокомандования считала преждевременным.",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/1-%D1%8F_%D0%A1%D0%B8%D0%BD%D1%8F%D0%B2%D0%B8%D0%BD%D1%81%D0%BA%D0%B0%D1%8F_%D0%BE%D0%BF%D0%B5%D1%80%D0%B0%D1%86%D0%B8%D1%8F_(1941)"
 },
 {
   "from": "1941-09-10",
   "till": "",
   "country": "germany",
   "province": "",
   "locality": "berlin",
   "where": "",
   "title": "",
   "desc": "Группа армий «Центр». 2-я армия форсировала Десну, разгромила ряд частей противника и продвигается в юго-восточном направлении. 2-я танковая группа заняла Ромны и двигается навстречу своему партнёру — группе Клейста, Странно, что противник не предпринял контратак против восточного крыла 2-й танковой группы. / Потери немецкой армии с 22 июня по 26 августа 1941 года составили 441 100 человек. Среднесуточные — 6683.",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/1-%D1%8F_%D0%A1%D0%B8%D0%BD%D1%8F%D0%B2%D0%B8%D0%BD%D1%81%D0%BA%D0%B0%D1%8F_%D0%BE%D0%BF%D0%B5%D1%80%D0%B0%D1%86%D0%B8%D1%8F_(1941)"
 },
 {
   "from": "1941-09-10",
   "till": "",
   "country": "russia",
   "province": "moscow",
   "locality": "moscow",
   "where": "",
   "title": "Совинформбюро",
   "desc": "В течение 10 сентября наши войска продолжали вести упорные бои с противником на всём фронте.",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/1-%D1%8F_%D0%A1%D0%B8%D0%BD%D1%8F%D0%B2%D0%B8%D0%BD%D1%81%D0%BA%D0%B0%D1%8F_%D0%BE%D0%BF%D0%B5%D1%80%D0%B0%D1%86%D0%B8%D1%8F_(1941)"
 },
 {
   "from": "1941-09-11",
   "till": "",
   "country": "russia",
   "province": "leningrad",
   "locality": "krasnoe_selo",
   "where": "",
   "title": "",
   "desc": "Немецкий 41-й мотокорпус занял Дудергоф. В ходе массированного воздушного налета на Ленинград были подожжены Бадаевские продовольственные склады. Вечером 11 сентября директивой Ставки ВГК К. Е. Ворошилов освобождался от обязанностей командующего Ленинградским фронтом, а на его место назначался Г. К. Жуков.",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D1%81%D0%B5%D0%BD%D1%82%D1%8F%D0%B1%D1%80%D1%8C_1941_%D0%B3%D0%BE%D0%B4%D0%B0)#11_.D1.81.D0.B5.D0.BD.D1.82.D1.8F.D0.B1.D1.80.D1.8F_1941_.D0.B3.D0.BE.D0.B4.D0.B0._82-.D0.B9_.D0.B4.D0.B5.D0.BD.D1.8C_.D0.B2.D0.BE.D0.B9.D0.BD.D1.8B"
 },
 {
   "from": "1941-09-11",
   "till": "",
   "country": "russia",
   "province": "moscow",
   "locality": "moscow",
   "where": "",
   "title": "Буденный уволен",
   "desc": "главком Юго-Западного направления С. М. Буденный обратился в Ставку ВГК с просьбой отвести войска фронта за р. Псёл. Ставка не разрешила отход до создания фронтом обороны на этой реке, приказав удерживать Киев и совместно с Брянским фронтом задержать наступление конотопской группировки врага. Считая, что главнокомандующий Юго-Западного направления при резких расхождениях со Ставкой во взглядах на оценку создавшейся обстановки не сможет далее руководить войсками направления, И. В. Сталин освободил С. М. Буденного от занимаемой должности.",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D1%81%D0%B5%D0%BD%D1%82%D1%8F%D0%B1%D1%80%D1%8C_1941_%D0%B3%D0%BE%D0%B4%D0%B0)#11_.D1.81.D0.B5.D0.BD.D1.82.D1.8F.D0.B1.D1.80.D1.8F_1941_.D0.B3.D0.BE.D0.B4.D0.B0._82-.D0.B9_.D0.B4.D0.B5.D0.BD.D1.8C_.D0.B2.D0.BE.D0.B9.D0.BD.D1.8B"
 },
 {
   "from": "1941-09-11",
   "till": "",
   "country": "russia",
   "province": "moscow",
   "locality": "moscow",
   "where": "",
   "title": "Совинформбюро",
   "desc": "В течение 11 сентября наши войска вели упорные бои с противником на всём фронте.",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D1%81%D0%B5%D0%BD%D1%82%D1%8F%D0%B1%D1%80%D1%8C_1941_%D0%B3%D0%BE%D0%B4%D0%B0)#11_.D1.81.D0.B5.D0.BD.D1.82.D1.8F.D0.B1.D1.80.D1.8F_1941_.D0.B3.D0.BE.D0.B4.D0.B0._82-.D0.B9_.D0.B4.D0.B5.D0.BD.D1.8C_.D0.B2.D0.BE.D0.B9.D0.BD.D1.8B"
 },
 {
   "from": "1941-09-12",
   "till": "",
   "country": "russia",
   "province": "leningrad",
   "locality": "krasnoe_selo",
   "where": "",
   "title": "",
   "desc": "Немецкий 41-й мотокорпус занял Красное Село и двигался к Пушкину, выходя на тылы 55-й армии.",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D1%81%D0%B5%D0%BD%D1%82%D1%8F%D0%B1%D1%80%D1%8C_1941_%D0%B3%D0%BE%D0%B4%D0%B0)#12_.D1.81.D0.B5.D0.BD.D1.82.D1.8F.D0.B1.D1.80.D1.8F_1941_.D0.B3.D0.BE.D0.B4.D0.B0._83-.D0.B9_.D0.B4.D0.B5.D0.BD.D1.8C_.D0.B2.D0.BE.D0.B9.D0.BD.D1.8B"
 },
 {
   "from": "1941-09-12",
   "till": "",
   "country": "",
   "province": "",
   "locality": "",
   "where": "",
   "title": "",
   "desc": "Завершилась Рославльско-Новозыбковская операция войск Брянского фронта. Продвижение советских войск составило до 25 километров на отдельных направлениях, но разгромить или остановить продвижение 2-й танковой группы вермахта в тыл войскам Юго-Западного фронта они не смогли.",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D1%81%D0%B5%D0%BD%D1%82%D1%8F%D0%B1%D1%80%D1%8C_1941_%D0%B3%D0%BE%D0%B4%D0%B0)#12_.D1.81.D0.B5.D0.BD.D1.82.D1.8F.D0.B1.D1.80.D1.8F_1941_.D0.B3.D0.BE.D0.B4.D0.B0._83-.D0.B9_.D0.B4.D0.B5.D0.BD.D1.8C_.D0.B2.D0.BE.D0.B9.D0.BD.D1.8B"
 },
 {
   "from": "1941-09-12",
   "till": "",
   "country": "ukraine",
   "province": "poltava",
   "locality": "khorol",
   "where": "",
   "title": "",
   "desc": "1-я танковая группа и 17-я армия нанесли удар с кременчугского плацдарма на север навстречу войскам 2-й танковой группы и захватили Хорол и Лубны. 38-я армия Юго-Западного фронта, отсеченная от 26-й армии, отходила к Полтаве.",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D1%81%D0%B5%D0%BD%D1%82%D1%8F%D0%B1%D1%80%D1%8C_1941_%D0%B3%D0%BE%D0%B4%D0%B0)#12_.D1.81.D0.B5.D0.BD.D1.82.D1.8F.D0.B1.D1.80.D1.8F_1941_.D0.B3.D0.BE.D0.B4.D0.B0._83-.D0.B9_.D0.B4.D0.B5.D0.BD.D1.8C_.D0.B2.D0.BE.D0.B9.D0.BD.D1.8B"
 },
 {
   "from": "1941-09-12",
   "till": "",
   "country": "russia",
   "province": "crimea",
   "locality": "",
   "where": "",
   "title": "",
   "desc": "К исходу 12 сентября передовые части 11-й немецкой армии прорвались к Перекопскому перешейку.",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D1%81%D0%B5%D0%BD%D1%82%D1%8F%D0%B1%D1%80%D1%8C_1941_%D0%B3%D0%BE%D0%B4%D0%B0)#12_.D1.81.D0.B5.D0.BD.D1.82.D1.8F.D0.B1.D1.80.D1.8F_1941_.D0.B3.D0.BE.D0.B4.D0.B0._83-.D0.B9_.D0.B4.D0.B5.D0.BD.D1.8C_.D0.B2.D0.BE.D0.B9.D0.BD.D1.8B"
 },
 {
   "from": "1941-09-12",
   "till": "",
   "country": "russia",
   "province": "moscow",
   "locality": "moscow",
   "where": "",
   "title": "Совинформбюро",
   "desc": "В течение 12 сентября наши войска вели бои с противником на всём фронте. После упорных боёв наши войска оставили город Чернигов.",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D1%81%D0%B5%D0%BD%D1%82%D1%8F%D0%B1%D1%80%D1%8C_1941_%D0%B3%D0%BE%D0%B4%D0%B0)#12_.D1.81.D0.B5.D0.BD.D1.82.D1.8F.D0.B1.D1.80.D1.8F_1941_.D0.B3.D0.BE.D0.B4.D0.B0._83-.D0.B9_.D0.B4.D0.B5.D0.BD.D1.8C_.D0.B2.D0.BE.D0.B9.D0.BD.D1.8B"
 },
 {
   "from": "1941-09-13",
   "till": "",
   "country": "russia",
   "province": "leningrad",
   "locality": "gatchina",
   "where": "",
   "title": "",
   "desc": "немецкие войска заняли Красногвардейск.",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D1%81%D0%B5%D0%BD%D1%82%D1%8F%D0%B1%D1%80%D1%8C_1941_%D0%B3%D0%BE%D0%B4%D0%B0)#13_.D1.81.D0.B5.D0.BD.D1.82.D1.8F.D0.B1.D1.80.D1.8F_1941_.D0.B3.D0.BE.D0.B4.D0.B0._84-.D0.B9_.D0.B4.D0.B5.D0.BD.D1.8C_.D0.B2.D0.BE.D0.B9.D0.BD.D1.8B"
 },
 {
   "from": "1941-09-13",
   "till": "",
   "country": "ukraine",
   "province": "poltava",
   "locality": "lohvitsa",
   "where": "",
   "title": "",
   "desc": "К 13 сентября 3-я танковая дивизия Моделя из 2-й танковой группы подошла к Лохвице с севера. Расстояние до 1-й танковой группы, между Лохвицей и Лубнами, составляло 30—40 километров. :: Главнокомандующим Юго-Западного направления назначен С. К. Тимошенко.",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D1%81%D0%B5%D0%BD%D1%82%D1%8F%D0%B1%D1%80%D1%8C_1941_%D0%B3%D0%BE%D0%B4%D0%B0)#13_.D1.81.D0.B5.D0.BD.D1.82.D1.8F.D0.B1.D1.80.D1.8F_1941_.D0.B3.D0.BE.D0.B4.D0.B0._84-.D0.B9_.D0.B4.D0.B5.D0.BD.D1.8C_.D0.B2.D0.BE.D0.B9.D0.BD.D1.8B"
 },
 {
   "from": "1941-09-13",
   "till": "",
   "country": "russia",
   "province": "moscow",
   "locality": "moscow",
   "where": "",
   "title": "Совинформбюро",
   "desc": "В течение 13 сентября наши войска вели упорные бои с противником на всём фронте.",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D1%81%D0%B5%D0%BD%D1%82%D1%8F%D0%B1%D1%80%D1%8C_1941_%D0%B3%D0%BE%D0%B4%D0%B0)#13_.D1.81.D0.B5.D0.BD.D1.82.D1.8F.D0.B1.D1.80.D1.8F_1941_.D0.B3.D0.BE.D0.B4.D0.B0._84-.D0.B9_.D0.B4.D0.B5.D0.BD.D1.8C_.D0.B2.D0.BE.D0.B9.D0.BD.D1.8B"
 },
 {
   "from": "1941-09-06",
   "till": "1941-10-22",
   "country": "estonia",
   "province": "",
   "locality": "",
   "where": "",
   "title": "Моонзундская оборонительная операция",
   "desc": "14 сентября началась высадка войск противника на остров Муху.",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%9C%D0%BE%D0%BE%D0%BD%D0%B7%D1%83%D0%BD%D0%B4%D1%81%D0%BA%D0%B0%D1%8F_%D0%BE%D0%B1%D0%BE%D1%80%D0%BE%D0%BD%D0%B8%D1%82%D0%B5%D0%BB%D1%8C%D0%BD%D0%B0%D1%8F_%D0%BE%D0%BF%D0%B5%D1%80%D0%B0%D1%86%D0%B8%D1%8F"
 },
 {
   "from": "1941-09-14",
   "till": "",
   "country": "russia",
   "province": "leningrad",
   "locality": "",
   "where": "",
   "title": "",
   "desc": "Г. К. Жуков вступил в должность командующего Ленинградским фронтом.",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D1%81%D0%B5%D0%BD%D1%82%D1%8F%D0%B1%D1%80%D1%8C_1941_%D0%B3%D0%BE%D0%B4%D0%B0)#14_.D1.81.D0.B5.D0.BD.D1.82.D1.8F.D0.B1.D1.80.D1.8F_1941_.D0.B3.D0.BE.D0.B4.D0.B0._85-.D0.B9_.D0.B4.D0.B5.D0.BD.D1.8C_.D0.B2.D0.BE.D0.B9.D0.BD.D1.8B"
 },
 {
   "from": "1941-09-14",
   "till": "",
   "country": "ukraine",
   "province": "",
   "locality": "",
   "where": "",
   "title": "",
   "desc": "14 сентября начальник штаба Юго-Западного фронта В. И. Тупиков информировал начальника Генерального штаба Б. М. Шапошникова о катастрофическом положении войск фронта. Начальник Генерального штаба назвал доклад В. И. Тупикова паническим, потребовал от командования направления и фронта сохранять хладнокровие.",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D1%81%D0%B5%D0%BD%D1%82%D1%8F%D0%B1%D1%80%D1%8C_1941_%D0%B3%D0%BE%D0%B4%D0%B0)#14_.D1.81.D0.B5.D0.BD.D1.82.D1.8F.D0.B1.D1.80.D1.8F_1941_.D0.B3.D0.BE.D0.B4.D0.B0._85-.D0.B9_.D0.B4.D0.B5.D0.BD.D1.8C_.D0.B2.D0.BE.D0.B9.D0.BD.D1.8B"
 },
 {
   "from": "1941-09-14",
   "till": "",
   "country": "germany",
   "province": "",
   "locality": "berlin",
   "where": "",
   "title": "Franz Halder",
   "desc": "Потери немецкой армии с 22 июня по 10 сентября 1941 года составили 459 511 человек. Среднесуточные — 5673.",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D1%81%D0%B5%D0%BD%D1%82%D1%8F%D0%B1%D1%80%D1%8C_1941_%D0%B3%D0%BE%D0%B4%D0%B0)#14_.D1.81.D0.B5.D0.BD.D1.82.D1.8F.D0.B1.D1.80.D1.8F_1941_.D0.B3.D0.BE.D0.B4.D0.B0._85-.D0.B9_.D0.B4.D0.B5.D0.BD.D1.8C_.D0.B2.D0.BE.D0.B9.D0.BD.D1.8B"
 },
 {
   "from": "1941-09-14",
   "till": "",
   "country": "russia",
   "province": "moscow",
   "locality": "moscow",
   "where": "",
   "title": "Совинформбюро",
   "desc": "В течение 14 сентября наши войска продолжали вести упорные бои с противником на всём фронте. После многодневных и ожесточённых боёв наши войска оставили г. Кременчуг.",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D1%81%D0%B5%D0%BD%D1%82%D1%8F%D0%B1%D1%80%D1%8C_1941_%D0%B3%D0%BE%D0%B4%D0%B0)#14_.D1.81.D0.B5.D0.BD.D1.82.D1.8F.D0.B1.D1.80.D1.8F_1941_.D0.B3.D0.BE.D0.B4.D0.B0._85-.D0.B9_.D0.B4.D0.B5.D0.BD.D1.8C_.D0.B2.D0.BE.D0.B9.D0.BD.D1.8B"
 },
 {
   "from": "1941-09-15",
   "till": "",
   "country": "ukraine",
   "province": "poltava",
   "locality": "lohvitsa",
   "where": "",
   "title": "",
   "desc": "1-я танковая группа соединилась в районе Лохвицы со 2-й танковой группой, завершив окружение 5, 21, 26 и 37-й армий Юго-Западного фронта.",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D1%81%D0%B5%D0%BD%D1%82%D1%8F%D0%B1%D1%80%D1%8C_1941_%D0%B3%D0%BE%D0%B4%D0%B0)#15_.D1.81.D0.B5.D0.BD.D1.82.D1.8F.D0.B1.D1.80.D1.8F_1941_.D0.B3.D0.BE.D0.B4.D0.B0._86-.D0.B9_.D0.B4.D0.B5.D0.BD.D1.8C_.D0.B2.D0.BE.D0.B9.D0.BD.D1.8B"
 },
 {
   "from": "1941-09-15",
   "till": "",
   "country": "ukraine",
   "province": "odessa",
   "locality": "odessa",
   "where": "",
   "title": "",
   "desc": "В Одессе введены карточки на отпуск воды для нужд населения.",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D1%81%D0%B5%D0%BD%D1%82%D1%8F%D0%B1%D1%80%D1%8C_1941_%D0%B3%D0%BE%D0%B4%D0%B0)#15_.D1.81.D0.B5.D0.BD.D1.82.D1.8F.D0.B1.D1.80.D1.8F_1941_.D0.B3.D0.BE.D0.B4.D0.B0._86-.D0.B9_.D0.B4.D0.B5.D0.BD.D1.8C_.D0.B2.D0.BE.D0.B9.D0.BD.D1.8B"
 },
 {
   "from": "1941-09-15",
   "till": "",
   "country": "russia",
   "province": "moscow",
   "locality": "moscow",
   "where": "",
   "title": "Совинформбюро",
   "desc": "В течение 15 сентября наши войска вели упорные бои с противником на всём фронте.",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D1%81%D0%B5%D0%BD%D1%82%D1%8F%D0%B1%D1%80%D1%8C_1941_%D0%B3%D0%BE%D0%B4%D0%B0)#15_.D1.81.D0.B5.D0.BD.D1.82.D1.8F.D0.B1.D1.80.D1.8F_1941_.D0.B3.D0.BE.D0.B4.D0.B0._86-.D0.B9_.D0.B4.D0.B5.D0.BD.D1.8C_.D0.B2.D0.BE.D0.B9.D0.BD.D1.8B"
 },
 {
   "from": "1941-09-16",
   "till": "",
   "country": "russia",
   "province": "leningrad",
   "locality": "lomonosov",
   "where": "",
   "title": "",
   "desc": "38-й армейский корпус вышел к Финскому заливу на фронте шириной 4—5 км и отрезал 8-ю армию от основных сил Ленинградского фронта в районе Ораниенбаума. Образовался так называемый Ораниенбаумский плацдарм.",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D1%81%D0%B5%D0%BD%D1%82%D1%8F%D0%B1%D1%80%D1%8C_1941_%D0%B3%D0%BE%D0%B4%D0%B0)#16_.D1.81.D0.B5.D0.BD.D1.82.D1.8F.D0.B1.D1.80.D1.8F_1941_.D0.B3.D0.BE.D0.B4.D0.B0._87-.D0.B9_.D0.B4.D0.B5.D0.BD.D1.8C_.D0.B2.D0.BE.D0.B9.D0.BD.D1.8B"
 },
 {
   "from": "1941-09-16",
   "till": "1944-01-15",
   "country": "russia",
   "province": "leningrad",
   "locality": "lomonosov",
   "where": "",
   "title": "Ораниенбаумский плацдарм",
   "desc": "Также известен как Ораниенба́умский пятачо́к, Примо́рский плацда́рм, Таменго́нтская респу́блика, Лебя́жинская респу́блика, Ма́лая земля́) — область на южном побережье Финского залива, отрезана от основных советских сил, и играет значительную роль в обороне Ленинграда.",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%9E%D1%80%D0%B0%D0%BD%D0%B8%D0%B5%D0%BD%D0%B1%D0%B0%D1%83%D0%BC%D1%81%D0%BA%D0%B8%D0%B9_%D0%BF%D0%BB%D0%B0%D1%86%D0%B4%D0%B0%D1%80%D0%BC"
 },
 {
   "from": "1941-09-16",
   "till": "",
   "country": "russia",
   "province": "leningrad",
   "locality": "",
   "where": "",
   "title": "",
   "desc": "Закончились оборонительные бои войск Северо-Западного фронта на демянском направлении против войск группы армий «Север». Советские войска отошли на рубеж Ростань, Лычково, Сухая Нива, Большое Замошье, оз Селигер.",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D1%81%D0%B5%D0%BD%D1%82%D1%8F%D0%B1%D1%80%D1%8C_1941_%D0%B3%D0%BE%D0%B4%D0%B0)#16_.D1.81.D0.B5.D0.BD.D1.82.D1.8F.D0.B1.D1.80.D1.8F_1941_.D0.B3.D0.BE.D0.B4.D0.B0._87-.D0.B9_.D0.B4.D0.B5.D0.BD.D1.8C_.D0.B2.D0.BE.D0.B9.D0.BD.D1.8B"
 },
 {
   "from": "1941-09-16",
   "till": "",
   "country": "ukraine",
   "province": "",
   "locality": "",
   "where": "",
   "title": "",
   "desc": "16 сентября С. К. Тимошенко устно через начальника оперативного управления штаба Юго-Западного фронта И. Х. Баграмяна передал М. П. Кирпоносу распоряжение об отводе войск фронта на рубеж р. Псел. M. П. Кирпонос усомнился в его достоверности, поскольку оно противоречило приказу И. В. Сталина.",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D1%81%D0%B5%D0%BD%D1%82%D1%8F%D0%B1%D1%80%D1%8C_1941_%D0%B3%D0%BE%D0%B4%D0%B0)#16_.D1.81.D0.B5.D0.BD.D1.82.D1.8F.D0.B1.D1.80.D1.8F_1941_.D0.B3.D0.BE.D0.B4.D0.B0._87-.D0.B9_.D0.B4.D0.B5.D0.BD.D1.8C_.D0.B2.D0.BE.D0.B9.D0.BD.D1.8B"
 },
 {
   "from": "1941-09-16",
   "till": "",
   "country": "ukraine",
   "province": "kiev",
   "locality": "kiev",
   "where": "",
   "title": "",
   "desc": "Началось наступление на Киев 29-го армейского корпуса. Одновременно южнее Киева, в районе Ржищева, Днепр форсировали соединения 34-го армейского корпуса 6-й армии.",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D1%81%D0%B5%D0%BD%D1%82%D1%8F%D0%B1%D1%80%D1%8C_1941_%D0%B3%D0%BE%D0%B4%D0%B0)#16_.D1.81.D0.B5.D0.BD.D1.82.D1.8F.D0.B1.D1.80.D1.8F_1941_.D0.B3.D0.BE.D0.B4.D0.B0._87-.D0.B9_.D0.B4.D0.B5.D0.BD.D1.8C_.D0.B2.D0.BE.D0.B9.D0.BD.D1.8B"
 },
 {
   "from": "1941-09-16",
   "till": "",
   "country": "ukraine",
   "province": "herson",
   "locality": "",
   "where": "",
   "title": "",
   "desc": "Немецкие войска вышли к Чонгарскому мосту и Арабатской стрелке.",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D1%81%D0%B5%D0%BD%D1%82%D1%8F%D0%B1%D1%80%D1%8C_1941_%D0%B3%D0%BE%D0%B4%D0%B0)#16_.D1.81.D0.B5.D0.BD.D1.82.D1.8F.D0.B1.D1.80.D1.8F_1941_.D0.B3.D0.BE.D0.B4.D0.B0._87-.D0.B9_.D0.B4.D0.B5.D0.BD.D1.8C_.D0.B2.D0.BE.D0.B9.D0.BD.D1.8B"
 },
 {
   "from": "1941-09-16",
   "till": "",
   "country": "russia",
   "province": "moscow",
   "locality": "moscow",
   "where": "",
   "title": "Совинформбюро",
   "desc": "В течение 16 сентября наши войска вели бои с противником на всём фронте.",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D1%81%D0%B5%D0%BD%D1%82%D1%8F%D0%B1%D1%80%D1%8C_1941_%D0%B3%D0%BE%D0%B4%D0%B0)#16_.D1.81.D0.B5.D0.BD.D1.82.D1.8F.D0.B1.D1.80.D1.8F_1941_.D0.B3.D0.BE.D0.B4.D0.B0._87-.D0.B9_.D0.B4.D0.B5.D0.BD.D1.8C_.D0.B2.D0.BE.D0.B9.D0.BD.D1.8B"
 },
 {
   "from": "1941-09-17",
   "till": "",
   "country": "estonia",
   "province": "",
   "locality": "",
   "where": "",
   "title": "",
   "desc": "Противник высадился на острове Сааремаа.",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D1%81%D0%B5%D0%BD%D1%82%D1%8F%D0%B1%D1%80%D1%8C_1941_%D0%B3%D0%BE%D0%B4%D0%B0)#17_.D1.81.D0.B5.D0.BD.D1.82.D1.8F.D0.B1.D1.80.D1.8F_1941_.D0.B3.D0.BE.D0.B4.D0.B0._88-.D0.B9_.D0.B4.D0.B5.D0.BD.D1.8C_.D0.B2.D0.BE.D0.B9.D0.BD.D1.8B"
 },
 {
   "from": "",
   "till": "",
   "country": "russia",
   "province": "leningrad",
   "locality": "pushkin",
   "where": "",
   "title": "",
   "desc": "Немецкие войска захватили Пушкин. 1-я танковая дивизия противника вышла к конечной остановке ленинградского трамвая в 12 км от центра города. 17 сентября соединения 4-й танковой группы снимаются с фронта и отправляются в тыл. Фронт покидают 41-й моторизованный корпус вместе со штабом 4-й танковой группы.",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D1%81%D0%B5%D0%BD%D1%82%D1%8F%D0%B1%D1%80%D1%8C_1941_%D0%B3%D0%BE%D0%B4%D0%B0)#17_.D1.81.D0.B5.D0.BD.D1.82.D1.8F.D0.B1.D1.80.D1.8F_1941_.D0.B3.D0.BE.D0.B4.D0.B0._88-.D0.B9_.D0.B4.D0.B5.D0.BD.D1.8C_.D0.B2.D0.BE.D0.B9.D0.BD.D1.8B"
 },
 {
   "from": "1941-09-18",
   "till": "1944-01-24",
   "country": "russia",
   "province": "leningrad",
   "locality": "pushkin",
   "where": "",
   "title": "Оккупация Пушкина",
   "desc": "Немцы уничтожают сооружения ансамбля, расхищают произведения искусства (в том числе убранство Янтарной комнаты Большого дворца). ",
   "result": "",
   "link": "http://gorod-pushkin.info/gorod-pushkin-v-gody-vojny"
 },
 {
   "from": "1941-09-17",
   "till": "",
   "country": "ukraine",
   "province": "kiev",
   "locality": "kiev",
   "where": "",
   "title": "",
   "desc": "В 5 часов утра М. П. Кирпонос обратился в Москву за подтверждением решения главкома, так как связи со штабом С. К. Тимошенко он не имел. В 23 часов 40 минут вечера Б. М. Шапошников по поручению Ставки ответил, что Верховное Главнокомандование разрешает оставить Киев, но о выводе войск на реку Псел ничего не было сказано. Глубокой ночью М. П. Кирпонос отдал всем армиям фронта приказ с боем выходить из окружения.",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D1%81%D0%B5%D0%BD%D1%82%D1%8F%D0%B1%D1%80%D1%8C_1941_%D0%B3%D0%BE%D0%B4%D0%B0)#17_.D1.81.D0.B5.D0.BD.D1.82.D1.8F.D0.B1.D1.80.D1.8F_1941_.D0.B3.D0.BE.D0.B4.D0.B0._88-.D0.B9_.D0.B4.D0.B5.D0.BD.D1.8C_.D0.B2.D0.BE.D0.B9.D0.BD.D1.8B"
 },
 {
   "from": "1941-09-17",
   "till": "",
   "country": "ukraine",
   "province": "sumy",
   "locality": "romny",
   "where": "",
   "title": "",
   "desc": "2-й кавалерийский корпус перешёл в наступление на Ромны для оказания помощи войскам Юго-Западного фронта в выходе из окружения.",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D1%81%D0%B5%D0%BD%D1%82%D1%8F%D0%B1%D1%80%D1%8C_1941_%D0%B3%D0%BE%D0%B4%D0%B0)#17_.D1.81.D0.B5.D0.BD.D1.82.D1.8F.D0.B1.D1.80.D1.8F_1941_.D0.B3.D0.BE.D0.B4.D0.B0._88-.D0.B9_.D0.B4.D0.B5.D0.BD.D1.8C_.D0.B2.D0.BE.D0.B9.D0.BD.D1.8B"
 },
 {
   "from": "1941-09-17",
   "till": "",
   "country": "russia",
   "province": "moscow",
   "locality": "moscow",
   "where": "",
   "title": "",
   "desc": "ГКО принял постановление «О всеобщем обязательном обучении военному делу граждан СССР», которое вводилось с 1 октября 1941 для граждан мужского пола в возрасте от 16 до 50 лет.",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D1%81%D0%B5%D0%BD%D1%82%D1%8F%D0%B1%D1%80%D1%8C_1941_%D0%B3%D0%BE%D0%B4%D0%B0)#17_.D1.81.D0.B5.D0.BD.D1.82.D1.8F.D0.B1.D1.80.D1.8F_1941_.D0.B3.D0.BE.D0.B4.D0.B0._88-.D0.B9_.D0.B4.D0.B5.D0.BD.D1.8C_.D0.B2.D0.BE.D0.B9.D0.BD.D1.8B"
 },
 {
   "from": "1941-09-17",
   "till": "",
   "country": "germany",
   "province": "",
   "locality": "berlin",
   "where": "",
   "title": "Франц Гальдер",
   "desc": "Потери немецкой армии с 22 июня по 16 сентября 1941 года составили 447 552 человек. Среднесуточные — 5144.",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D1%81%D0%B5%D0%BD%D1%82%D1%8F%D0%B1%D1%80%D1%8C_1941_%D0%B3%D0%BE%D0%B4%D0%B0)#17_.D1.81.D0.B5.D0.BD.D1.82.D1.8F.D0.B1.D1.80.D1.8F_1941_.D0.B3.D0.BE.D0.B4.D0.B0._88-.D0.B9_.D0.B4.D0.B5.D0.BD.D1.8C_.D0.B2.D0.BE.D0.B9.D0.BD.D1.8B"
 },
 {
   "from": "1941-09-17",
   "till": "",
   "country": "russia",
   "province": "moscow",
   "locality": "moscow",
   "where": "",
   "title": "Совинформбюро",
   "desc": "Удар по танковой группе Гудериана :: Ещё одна гитлеровская ложь",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D1%81%D0%B5%D0%BD%D1%82%D1%8F%D0%B1%D1%80%D1%8C_1941_%D0%B3%D0%BE%D0%B4%D0%B0)#17_.D1.81.D0.B5.D0.BD.D1.82.D1.8F.D0.B1.D1.80.D1.8F_1941_.D0.B3.D0.BE.D0.B4.D0.B0._88-.D0.B9_.D0.B4.D0.B5.D0.BD.D1.8C_.D0.B2.D0.BE.D0.B9.D0.BD.D1.8B"
 },
 {
   "from": "1941-09-18",
   "till": "",
   "country": "russia",
   "province": "moscow",
   "locality": "moscow",
   "where": "",
   "title": "",
   "desc": "Приказом Народного комиссара обороны СССР 100, 161, 127 и 153-я дивизии Западного направления получили наименование 1, 2, 3 и 4-й гвардейских стрелковых дивизий.",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D1%81%D0%B5%D0%BD%D1%82%D1%8F%D0%B1%D1%80%D1%8C_1941_%D0%B3%D0%BE%D0%B4%D0%B0)#18_.D1.81.D0.B5.D0.BD.D1.82.D1.8F.D0.B1.D1.80.D1.8F_1941_.D0.B3.D0.BE.D0.B4.D0.B0_89-.D0.B9_.D0.B4.D0.B5.D0.BD.D1.8C_.D0.B2.D0.BE.D0.B9.D0.BD.D1.8B"
 },
 {
   "from": "1941-09-18",
   "till": "",
   "country": "russia",
   "province": "leningrad",
   "locality": "",
   "where": "",
   "title": "",
   "desc": "Войска Ленинградского фронта остановили наступление противника на рубеже Лигово, Нижнее Кайрово, Пулково.",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D1%81%D0%B5%D0%BD%D1%82%D1%8F%D0%B1%D1%80%D1%8C_1941_%D0%B3%D0%BE%D0%B4%D0%B0)#18_.D1.81.D0.B5.D0.BD.D1.82.D1.8F.D0.B1.D1.80.D1.8F_1941_.D0.B3.D0.BE.D0.B4.D0.B0_89-.D0.B9_.D0.B4.D0.B5.D0.BD.D1.8C_.D0.B2.D0.BE.D0.B9.D0.BD.D1.8B"
 },
 {
   "from": "1941-09-18",
   "till": "",
   "country": "ukraine",
   "province": "kiev",
   "locality": "kiev",
   "where": "",
   "title": "",
   "desc": "Наступление на Ромны с востока вслед за 2-м кавалерийским корпусом начала 129-я танковая бригада. Удар 5-й армии направлялся на Лохвицу. 26-й армии предстояло выходить через Лубны. Не имея связи с фронтом, войска 37-й армии продолжали упорную борьбу за Киев. Вскоре связь была потеряна и со штабами остальных армий. :: Командующий фронтом М. П. Кирпонос принял решение отходить вместе с отступавшими частями на восток. В Пирятине при переправе через реку Удай группа штаба Юго-Западного фронта вместе с 289-й стрелковой дивизией подверглась ударам вражеской авиации и понесла большой урон. К утру 18 сентября в районе Городище удалось собрать около 3 тысяч бойцов и командиров и объединить их в несколько отрядов.",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D1%81%D0%B5%D0%BD%D1%82%D1%8F%D0%B1%D1%80%D1%8C_1941_%D0%B3%D0%BE%D0%B4%D0%B0)#18_.D1.81.D0.B5.D0.BD.D1.82.D1.8F.D0.B1.D1.80.D1.8F_1941_.D0.B3.D0.BE.D0.B4.D0.B0_89-.D0.B9_.D0.B4.D0.B5.D0.BD.D1.8C_.D0.B2.D0.BE.D0.B9.D0.BD.D1.8B"
 },
 {
   "from": "1941-09-18",
   "till": "",
   "country": "ukraine",
   "province": "kiev",
   "locality": "kiev",
   "where": "",
   "title": "",
   "desc": "По приказу Ставки ВГК взорваны корабли Пинской военной флотилии, участвовавшие в обороне Киева.",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D1%81%D0%B5%D0%BD%D1%82%D1%8F%D0%B1%D1%80%D1%8C_1941_%D0%B3%D0%BE%D0%B4%D0%B0)#18_.D1.81.D0.B5.D0.BD.D1.82.D1.8F.D0.B1.D1.80.D1.8F_1941_.D0.B3.D0.BE.D0.B4.D0.B0_89-.D0.B9_.D0.B4.D0.B5.D0.BD.D1.8C_.D0.B2.D0.BE.D0.B9.D0.BD.D1.8B"
 },
 {
   "from": "1941-09-18",
   "till": "",
   "country": "russia",
   "province": "moscow",
   "locality": "moscow",
   "where": "",
   "title": "Совинформбюро",
   "desc": "Ожесточённые бои под Киевом :: Жульничество гитлеровцев",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D1%81%D0%B5%D0%BD%D1%82%D1%8F%D0%B1%D1%80%D1%8C_1941_%D0%B3%D0%BE%D0%B4%D0%B0)#18_.D1.81.D0.B5.D0.BD.D1.82.D1.8F.D0.B1.D1.80.D1.8F_1941_.D0.B3.D0.BE.D0.B4.D0.B0_89-.D0.B9_.D0.B4.D0.B5.D0.BD.D1.8C_.D0.B2.D0.BE.D0.B9.D0.BD.D1.8B"
 },
 {
   "from": "1941-09-19",
   "till": "",
   "country": "",
   "province": "",
   "locality": "",
   "where": "",
   "title": "",
   "desc": "37-я армия оставила Киев и начала пробиваться из окружения. Военный совет и штаб Юго-Западного фронта под прикрытием отдельных частей 289-й стрелковой дивизии продолжали двигаться на восток в направлении Сенчи.",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D1%81%D0%B5%D0%BD%D1%82%D1%8F%D0%B1%D1%80%D1%8C_1941_%D0%B3%D0%BE%D0%B4%D0%B0)#19_.D1.81.D0.B5.D0.BD.D1.82.D1.8F.D0.B1.D1.80.D1.8F_1941_.D0.B3.D0.BE.D0.B4.D0.B0._90-.D0.B9_.D0.B4.D0.B5.D0.BD.D1.8C_.D0.B2.D0.BE.D0.B9.D0.BD.D1.8B"
 },
 {
   "from": "1941-08-20",
   "till": "1944-11-10",
   "country": "ukraine",
   "province": "",
   "locality": "",
   "where": "",
   "title": "Рейхскомиссариат Украина",
   "desc": "Административно-территориальная единица в составе нацистской Германии (Третьего рейха) под немецкой администрацией на оккупированной немецкими войсками территории Украинской ССР.",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A0%D0%B5%D0%B9%D1%85%D1%81%D0%BA%D0%BE%D0%BC%D0%B8%D1%81%D1%81%D0%B0%D1%80%D0%B8%D0%B0%D1%82_%D0%A3%D0%BA%D1%80%D0%B0%D0%B8%D0%BD%D0%B0"
 },
 {
   "from": "1941-09-19",
   "till": "",
   "country": "",
   "province": "",
   "locality": "",
   "where": "",
   "title": "Франц Гальдер",
   "desc": "Восточнее Киева создано три котла, которые блокированы нашими крупными силами. Танковая группа Гудериана постепенно выводится из района боевых действий и уже может начать перегруппировку для выполнения новой задачи.",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D1%81%D0%B5%D0%BD%D1%82%D1%8F%D0%B1%D1%80%D1%8C_1941_%D0%B3%D0%BE%D0%B4%D0%B0)#19_.D1.81.D0.B5.D0.BD.D1.82.D1.8F.D0.B1.D1.80.D1.8F_1941_.D0.B3.D0.BE.D0.B4.D0.B0._90-.D0.B9_.D0.B4.D0.B5.D0.BD.D1.8C_.D0.B2.D0.BE.D0.B9.D0.BD.D1.8B"
 },
 {
   "from": "1941-09-19",
   "till": "",
   "country": "",
   "province": "",
   "locality": "",
   "where": "",
   "title": "",
   "desc": "Немецкая 17-я армия с ходу заняла Полтаву.",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D1%81%D0%B5%D0%BD%D1%82%D1%8F%D0%B1%D1%80%D1%8C_1941_%D0%B3%D0%BE%D0%B4%D0%B0)#19_.D1.81.D0.B5.D0.BD.D1.82.D1.8F.D0.B1.D1.80.D1.8F_1941_.D0.B3.D0.BE.D0.B4.D0.B0._90-.D0.B9_.D0.B4.D0.B5.D0.BD.D1.8C_.D0.B2.D0.BE.D0.B9.D0.BD.D1.8B"
 },
 {
   "from": "1942-06-01",
   "till": "",
   "country": "ukraine",
   "province": "poltava",
   "locality": "poltava",
   "where": "",
   "title": "",
   "desc": "Визит Гитлера в Полтаву",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%9F%D0%BE%D0%BB%D1%82%D0%B0%D0%B2%D0%B0#1918.E2.80.941991"
 },
 {
   "from": "1941-09-19",
   "till": "1943-09-22",
   "country": "ukraine",
   "province": "poltava",
   "locality": "poltava",
   "where": "",
   "title": "Оккупация Полтавы",
   "desc": "В соответствии с планами колонизации «восточного пространства», по распоряжению немецких оккупационных властей количество школ в городе было сокращено с 37 до 2, а количество учащихся уменьшено с 18259 до 150. В городе действует подпольный обком под руководством С. Ф. Кондратенко.",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%9F%D0%BE%D0%BB%D1%82%D0%B0%D0%B2%D0%B0#1918.E2.80.941991"
 },
 {
   "from": "1943-09-01",
   "till": "",
   "country": "ukraine",
   "province": "poltava",
   "locality": "poltava",
   "where": "",
   "title": "",
   "desc": "С приближением к Полтаве советских войск немецкие войска начали расстреливать жителей города, сжигать здания и не подлежащие эвакуации материальные ценности, устанавливать минно-взрывные заграждения",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%9F%D0%BE%D0%BB%D1%82%D0%B0%D0%B2%D0%B0#1918.E2.80.941991"
 },
 {
   "from": "1943-09-22",
   "till": "",
   "country": "ukraine",
   "province": "poltava",
   "locality": "poltava",
   "where": "",
   "title": "",
   "desc": "23:00 командир 201-го стрелкового полка 84-й стрелковой дивизии майор Ермишин, на центральной площади города установил Красное знамя. ",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%9F%D0%BE%D0%BB%D1%82%D0%B0%D0%B2%D0%B0#1918.E2.80.941991"
 },
 {
   "from": "1941-09-19",
   "till": "",
   "country": "russia",
   "province": "moscow",
   "locality": "moscow",
   "where": "",
   "title": "Совинформбюро",
   "desc": "В течение 19 сентября наши войска вели бои с противником на всём фронте и особенно ожесточённые под Киевом.",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D1%81%D0%B5%D0%BD%D1%82%D1%8F%D0%B1%D1%80%D1%8C_1941_%D0%B3%D0%BE%D0%B4%D0%B0)#19_.D1.81.D0.B5.D0.BD.D1.82.D1.8F.D0.B1.D1.80.D1.8F_1941_.D0.B3.D0.BE.D0.B4.D0.B0._90-.D0.B9_.D0.B4.D0.B5.D0.BD.D1.8C_.D0.B2.D0.BE.D0.B9.D0.BD.D1.8B"
 },
 {
   "from": "1941-09-20",
   "till": "",
   "country": "russia",
   "province": "leningrad",
   "locality": "dubrovka",
   "where": "",
   "title": "",
   "desc": "В ночь с 19 на 20 сентября началась операция по деблокаде Ленинграда со стороны Ленинградского фронта. Переправившиеся через Неву части 115-й стрелковой дивизии захватили плацдарм в районе Дубровки, прозванный вскоре «невский пятачок»).",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D1%81%D0%B5%D0%BD%D1%82%D1%8F%D0%B1%D1%80%D1%8C_1941_%D0%B3%D0%BE%D0%B4%D0%B0)#20_.D1.81.D0.B5.D0.BD.D1.82.D1.8F.D0.B1.D1.80.D1.8F_1941_.D0.B3.D0.BE.D0.B4.D0.B0._91-.D0.B9_.D0.B4.D0.B5.D0.BD.D1.8C_.D0.B2.D0.BE.D0.B9.D0.BD.D1.8B"
 },
 {
   "from": "1941-09-20",
   "till": "1942-04-29",
   "country": "russia",
   "province": "leningrad",
   "locality": "dubrovka",
   "where": "",
   "title": "Невский пятачок",
   "desc": "Плацдарм на левом (восточном) берегу Невы напротив Невской Дубровки, захваченного и удерживаемого советскими войсками Ленинградского фронта в ходе битвы за Ленинград.",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%9D%D0%B5%D0%B2%D1%81%D0%BA%D0%B8%D0%B9_%D0%BF%D1%8F%D1%82%D0%B0%D1%87%D0%BE%D0%BA"
 },
 {
   "from": "1941-09-20",
   "till": "",
   "country": "ukraine",
   "province": "",
   "locality": "",
   "where": "",
   "title": "",
   "desc": "К утру отряд, которым командовал И. Х. Баграмян, с боями прорвался в район Сенчи. Следовавшие за отрядом штаб фронта был окружен противником у хутора Дрюковщина, Сенчанского района. В ходе боя осколком снаряда был смертельно ранен командующий фронтом М. П. Кирпонос. Незначительной части работников штаба удалось пробиться к реке Суле. :: Часть войск Юго-Западного фронта севернее Оржицы прорвала кольцо окружения и вышла на северо-восток. Наступление на Ромны с востока вслед за 2-м кавалерийским корпусом начала 1-я танковая бригада. :: С целью образования внешнего фронта окружения немецкие войска атаковали 40-ю армию от Путивля на Бурынь. 40-я армия начала отходить на рубеж Весёлое — Ворожба — Белополье — Терны, закрепившись к 26 сентября на этом рубеже. :: 38-я армия пыталась выбить немецкие части из Полтавы, но успеха не имела и стала отходить на восток. 20 сентября немецкая 295-я пехотная дивизия 17-й армии заняла Красноград.",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D1%81%D0%B5%D0%BD%D1%82%D1%8F%D0%B1%D1%80%D1%8C_1941_%D0%B3%D0%BE%D0%B4%D0%B0)#20_.D1.81.D0.B5.D0.BD.D1.82.D1.8F.D0.B1.D1.80.D1.8F_1941_.D0.B3.D0.BE.D0.B4.D0.B0._91-.D0.B9_.D0.B4.D0.B5.D0.BD.D1.8C_.D0.B2.D0.BE.D0.B9.D0.BD.D1.8B"
 },
 {
   "from": "1941-09-20",
   "till": "",
   "country": "ukraine",
   "province": "herson",
   "locality": "",
   "where": "",
   "title": "",
   "desc": "Войска 18-й и 9-й армий Южного фронта к 20 сентября отошли на фронт Днепровские плавни (к югу от Запорожья) — озеро Молочное и здесь задержали дальнейшее продвижение немецких войск. Попытка противника с ходу прорваться в Крым была сорвана 51-й Отдельной армией.",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D1%81%D0%B5%D0%BD%D1%82%D1%8F%D0%B1%D1%80%D1%8C_1941_%D0%B3%D0%BE%D0%B4%D0%B0)#20_.D1.81.D0.B5.D0.BD.D1.82.D1.8F.D0.B1.D1.80.D1.8F_1941_.D0.B3.D0.BE.D0.B4.D0.B0._91-.D0.B9_.D0.B4.D0.B5.D0.BD.D1.8C_.D0.B2.D0.BE.D0.B9.D0.BD.D1.8B"
 },
 {
   "from": "1941-09-20",
   "till": "",
   "country": "russia",
   "province": "moscow",
   "locality": "moscow",
   "where": "",
   "title": "Совинформбюро",
   "desc": "Гитлеровские обманщики скрывают свои потери",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D1%81%D0%B5%D0%BD%D1%82%D1%8F%D0%B1%D1%80%D1%8C_1941_%D0%B3%D0%BE%D0%B4%D0%B0)#20_.D1.81.D0.B5.D0.BD.D1.82.D1.8F.D0.B1.D1.80.D1.8F_1941_.D0.B3.D0.BE.D0.B4.D0.B0._91-.D0.B9_.D0.B4.D0.B5.D0.BD.D1.8C_.D0.B2.D0.BE.D0.B9.D0.BD.D1.8B"
 },
 {
   "from": "1941-09-21",
   "till": "1941-09-24",
   "country": "russia",
   "province": "leningrad",
   "locality": "",
   "where": "",
   "title": "",
   "desc": "Немецкий 39-й мотокорпус наступает через Неву навстречу финским войскам.",
   "result": "остановлен и отброшен назад",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D1%81%D0%B5%D0%BD%D1%82%D1%8F%D0%B1%D1%80%D1%8C_1941_%D0%B3%D0%BE%D0%B4%D0%B0)#21_.D1.81.D0.B5.D0.BD.D1.82.D1.8F.D0.B1.D1.80.D1.8F_1941_.D0.B3.D0.BE.D0.B4.D0.B0._92-.D0.B9_.D0.B4.D0.B5.D0.BD.D1.8C_.D0.B2.D0.BE.D0.B9.D0.BD.D1.8B"
 },
 {
   "from": "1941-09-21",
   "till": "",
   "country": "russia",
   "province": "leningrad",
   "locality": "leningrad",
   "where": "",
   "title": "",
   "desc": "Ю-87 2-й эскадры пикирующих бомбардировщиков VIII авиакорпуса добились попадания в линкор «Октябрьская революция», находившийся в Морском канале. ",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D1%81%D0%B5%D0%BD%D1%82%D1%8F%D0%B1%D1%80%D1%8C_1941_%D0%B3%D0%BE%D0%B4%D0%B0)#21_.D1.81.D0.B5.D0.BD.D1.82.D1.8F.D0.B1.D1.80.D1.8F_1941_.D0.B3.D0.BE.D0.B4.D0.B0._92-.D0.B9_.D0.B4.D0.B5.D0.BD.D1.8C_.D0.B2.D0.BE.D0.B9.D0.BD.D1.8B"
 },
 {
   "from": "1941-09-23",
   "till": "",
   "country": "russia",
   "province": "leningrad",
   "locality": "leningrad",
   "where": "",
   "title": "",
   "desc": "Ю-87 2-й эскадры пикирующих бомбардировщиков VIII авиакорпуса добились попадания в линкор «Марат», стоявший в Петровской гавани в Кронштадте.",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D1%81%D0%B5%D0%BD%D1%82%D1%8F%D0%B1%D1%80%D1%8C_1941_%D0%B3%D0%BE%D0%B4%D0%B0)#21_.D1.81.D0.B5.D0.BD.D1.82.D1.8F.D0.B1.D1.80.D1.8F_1941_.D0.B3.D0.BE.D0.B4.D0.B0._92-.D0.B9_.D0.B4.D0.B5.D0.BD.D1.8C_.D0.B2.D0.BE.D0.B9.D0.BD.D1.8B"
 },
 {
   "from": "1941-09-21",
   "till": "",
   "country": "ukraine",
   "province": "sumy",
   "locality": "romny",
   "where": "",
   "title": "",
   "desc": "Наступление на Ромны с востока вслед за 2-м кавалерийским корпусом начала 100-я стрелковая дивизия И. Н. Руссиянова.",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D1%81%D0%B5%D0%BD%D1%82%D1%8F%D0%B1%D1%80%D1%8C_1941_%D0%B3%D0%BE%D0%B4%D0%B0)#21_.D1.81.D0.B5.D0.BD.D1.82.D1.8F.D0.B1.D1.80.D1.8F_1941_.D0.B3.D0.BE.D0.B4.D0.B0._92-.D0.B9_.D0.B4.D0.B5.D0.BD.D1.8C_.D0.B2.D0.BE.D0.B9.D0.BD.D1.8B"
 },
 {
   "from": "1941-09-21",
   "till": "",
   "country": "russia",
   "province": "moscow",
   "locality": "moscow",
   "where": "",
   "title": "Совинформбюро",
   "desc": "В течение 21 сентября наши войска вели бои с противником на всём фронте. После многодневных, ожесточённых боёв наши войска оставили Киев.",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D1%81%D0%B5%D0%BD%D1%82%D1%8F%D0%B1%D1%80%D1%8C_1941_%D0%B3%D0%BE%D0%B4%D0%B0)#21_.D1.81.D0.B5.D0.BD.D1.82.D1.8F.D0.B1.D1.80.D1.8F_1941_.D0.B3.D0.BE.D0.B4.D0.B0._92-.D0.B9_.D0.B4.D0.B5.D0.BD.D1.8C_.D0.B2.D0.BE.D0.B9.D0.BD.D1.8B"
 },
 {
   "from": "1941-09-22",
   "till": "",
   "country": "ukraine",
   "province": "odessa",
   "locality": "",
   "where": "",
   "title": "",
   "desc": "Морской и парашютный десанты, высаженные кораблями и авиацией Черноморского флота в районе Григорьевки, нанесли по немецко-румынским войскам удар с тыла. В это же время части одесского гарнизона перешли в наступление с фронта. Румынские войска с большими потерями отступили на 5—8 километров к северо-востоку. Артиллерия, обстреливавшая Одессу, оказалась в руках советских войск.",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D1%81%D0%B5%D0%BD%D1%82%D1%8F%D0%B1%D1%80%D1%8C_1941_%D0%B3%D0%BE%D0%B4%D0%B0)#22_.D1.81.D0.B5.D0.BD.D1.82.D1.8F.D0.B1.D1.80.D1.8F_1941_.D0.B3.D0.BE.D0.B4.D0.B0._93-.D0.B9_.D0.B4.D0.B5.D0.BD.D1.8C_.D0.B2.D0.BE.D0.B9.D0.BD.D1.8B"
 },
 {
   "from": "1941-09-22",
   "till": "",
   "country": "ukraine",
   "province": "odessa",
   "locality": "",
   "where": "",
   "title": "Григорьевский десант",
   "desc": "Первый морским десантом ВМФ СССР на Чёрном море. Тактический морской десант, высаженный Черноморским флотом в ночь на 22 сентября 1941 года на побережье Чёрного моря в районе деревни Григорьевка Коминтерновского района Одесской области для содействия контрудару оборонявшихся под Одессой советских войск. :: Победа советского десанта",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%93%D1%80%D0%B8%D0%B3%D0%BE%D1%80%D1%8C%D0%B5%D0%B2%D1%81%D0%BA%D0%B8%D0%B9_%D0%B4%D0%B5%D1%81%D0%B0%D0%BD%D1%82"
 },
 {
   "from": "1941-09-22",
   "till": "",
   "country": "russia",
   "province": "moscow",
   "locality": "moscow",
   "where": "",
   "title": "Совинформбюро",
   "desc": "В течение ночи на 22 сентября наши войска вели бои с противникам на всём фронте.",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D1%81%D0%B5%D0%BD%D1%82%D1%8F%D0%B1%D1%80%D1%8C_1941_%D0%B3%D0%BE%D0%B4%D0%B0)#22_.D1.81.D0.B5.D0.BD.D1.82.D1.8F.D0.B1.D1.80.D1.8F_1941_.D0.B3.D0.BE.D0.B4.D0.B0._93-.D0.B9_.D0.B4.D0.B5.D0.BD.D1.8C_.D0.B2.D0.BE.D0.B9.D0.BD.D1.8B"
 },
 {
   "from": "1941-09-23",
   "till": "",
   "country": "russia",
   "province": "murmansk",
   "locality": "",
   "where": "",
   "title": "",
   "desc": "14-я армия Карельского фронта и части морской пехоты при поддержке кораблей и авиации Северного флота нанесли контрудар против соединений армии «Норвегия» на мурманском направлении.",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D1%81%D0%B5%D0%BD%D1%82%D1%8F%D0%B1%D1%80%D1%8C_1941_%D0%B3%D0%BE%D0%B4%D0%B0)#23_.D1.81.D0.B5.D0.BD.D1.82.D1.8F.D0.B1.D1.80.D1.8F_1941_.D0.B3.D0.BE.D0.B4.D0.B0._94-.D0.B9_.D0.B4.D0.B5.D0.BD.D1.8C_.D0.B2.D0.BE.D0.B9.D0.BD.D1.8B"
 },
 {
   "from": "1941-09-23",
   "till": "",
   "country": "russia",
   "province": "moscow",
   "locality": "moscow",
   "where": "",
   "title": "Совинформбюро",
   "desc": "В течение 23 сентября наши войска вели бои с противником на всём фронте.",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D1%81%D0%B5%D0%BD%D1%82%D1%8F%D0%B1%D1%80%D1%8C_1941_%D0%B3%D0%BE%D0%B4%D0%B0)#23_.D1.81.D0.B5.D0.BD.D1.82.D1.8F.D0.B1.D1.80.D1.8F_1941_.D0.B3.D0.BE.D0.B4.D0.B0._94-.D0.B9_.D0.B4.D0.B5.D0.BD.D1.8C_.D0.B2.D0.BE.D0.B9.D0.BD.D1.8B"
 },
 {
   "from": "1941-09-24",
   "till": "",
   "country": "uk",
   "province": "",
   "locality": "london",
   "where": "",
   "title": "",
   "desc": "На международной конференции в Лондоне СССР присоединился к «Атлантической хартии».",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D1%81%D0%B5%D0%BD%D1%82%D1%8F%D0%B1%D1%80%D1%8C_1941_%D0%B3%D0%BE%D0%B4%D0%B0)#24_.D1.81.D0.B5.D0.BD.D1.82.D1.8F.D0.B1.D1.80.D1.8F_1941_.D0.B3.D0.BE.D0.B4.D0.B0._95-.D0.B9_.D0.B4.D0.B5.D0.BD.D1.8C_.D0.B2.D0.BE.D0.B9.D0.BD.D1.8B"
 },
 {
   "from": "1941-09-24",
   "till": "",
   "country": "ukraine",
   "province": "sumny",
   "locality": "romny",
   "where": "",
   "title": "",
   "desc": "5-я кавалерийская дивизия 2-го кавалерийского корпуса перешла в наступление на юг в направлении Лохвицы, но там она встретилась с авангардом 9-й немецкой танковой дивизии и вынуждена была остановиться. Противник со стороны Ромн атаковал 100-ю стрелковую дивизию и 9-ю кавалерийскую дивизию, которые стали отходить на восток.",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D1%81%D0%B5%D0%BD%D1%82%D1%8F%D0%B1%D1%80%D1%8C_1941_%D0%B3%D0%BE%D0%B4%D0%B0)#24_.D1.81.D0.B5.D0.BD.D1.82.D1.8F.D0.B1.D1.80.D1.8F_1941_.D0.B3.D0.BE.D0.B4.D0.B0._95-.D0.B9_.D0.B4.D0.B5.D0.BD.D1.8C_.D0.B2.D0.BE.D0.B9.D0.BD.D1.8B"
 },
 {
   "from": "1941-09-24",
   "till": "",
   "country": "russia",
   "province": "moscow",
   "locality": "moscow",
   "where": "",
   "title": "Совинформбюро",
   "desc": "Фашистская брехня о советских потерях",
   "result": "",
   "link": "https://ru.wikipedia.org/wiki/%D0%A5%D1%80%D0%BE%D0%BD%D0%B8%D0%BA%D0%B0_%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%BE%D0%B9_%D0%9E%D1%82%D0%B5%D1%87%D0%B5%D1%81%D1%82%D0%B2%D0%B5%D0%BD%D0%BD%D0%BE%D0%B9_%D0%B2%D0%BE%D0%B9%D0%BD%D1%8B_(%D1%81%D0%B5%D0%BD%D1%82%D1%8F%D0%B1%D1%80%D1%8C_1941_%D0%B3%D0%BE%D0%B4%D0%B0)#24_.D1.81.D0.B5.D0.BD.D1.82.D1.8F.D0.B1.D1.80.D1.8F_1941_.D0.B3.D0.BE.D0.B4.D0.B0._95-.D0.B9_.D0.B4.D0.B5.D0.BD.D1.8C_.D0.B2.D0.BE.D0.B9.D0.BD.D1.8B"
 }

]

;

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



                    // if(dummyStartDate.diff( moment() ) > 0 ) { // 18
                        
                        var wec = JSON.parse(JSON.stringify( allDates[i] )); // 6
                        wec["from"] = moment([eventEndYear, 0, 1]); 
                        wec["till"] = eventFullEndDate;

                        console.log("Adding mye. lyc   " // 17
                            + " " + moment(wec["from"]).format("YYYY-MM-DD") 
                            + "..." + moment(wec["till"]).format("YYYY-MM-DD")
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
                            var $pastperiod = $('<span>').attr('class','past-year').text(moment(todaysDates[i]["from"]).format("D MMMM YYYY") +" - "+ moment(todaysDates[i]["till"]).format("D MMMM YYYY"));
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
                            var $pastperiod = $('<span>').attr('class','past-year').text(moment(todaysDates[i]["from"]).format("D MMMM YYYY") +" - "+ moment(todaysDates[i]["till"]).format("D MMMM YYYY"));
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
                            var $pastperiod = $('<span>').attr('class','past-year').text( from.format("D MMMM YYYY"));

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
                            var $pastperiod = $('<span>').attr('class','past-year').text(from.format("D MMMM YYYY"));
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
    Mei.Events.init();            

    Mei.Dates.init();
    $('h3').each(function(){
        console.log("wrap all works");
        $(this).nextUntil('h3').wrapAll( "<div class='year-container' />" );
    });


            
}

