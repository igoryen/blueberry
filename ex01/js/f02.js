window.scope02b = {};
scope02b.compare = function (x, y) {
    // var a = dateObjectFromString(x["from"]).getTime();
    // var b = dateObjectFromString(y["from"]).getTime();
    // var that = this;

    var a = moment(x["from"]).format("YYYY");
    var b = moment(y["from"]).format("YYYY");

    console.log(" >>>>> " + x["truefrom"] + " " + x["title"]);

    if (a < b)
        return -1;
    if (a > b)
        return 1;
    return 0;
};