window.scope12 = {};
scope12.compareGeo = function (x, y) {
    // var a = dateObjectFromString(x["from"]).getTime();
    // var b = dateObjectFromString(y["from"]).getTime();
    // var that = this;

    var a = moment(x["where"]);
    var b = moment(y["where"]);

    console.log(" >>>>> " + x["where"]);

    if (a < b)
        return -1;
    if (a > b)
        return 1;
    return 0;
};