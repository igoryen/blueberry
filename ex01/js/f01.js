// dateObjectFromString
window.scope02 = {};
scope02.dateObjectFromString = function (s) {
    console.log("s is a " + typeof s + ": " + s + " - " + s);
    var arydate = s.split("-");
    //  console.log("--- arydate");

    //  create date object from parsed date
    //  var aryDateObject = new Date( arydate[0], arydate[1]-1, arydate[2]);
    var date = new Date();
    var year = parseInt(arydate[0]);
    var month = parseInt(arydate[1]);
    var day = parseInt(arydate[2]);
    console.log(year + "-" + month + "-" + day + " (" + typeof year + "-" + typeof month + "-" + typeof day + ")");
    date.setFullYear(year, month, day);

    return date;
};