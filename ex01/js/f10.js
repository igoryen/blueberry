var selectPhrase = scope11.selectPhrase;

window.scope10 = {};
scope10.renderDate = function (todaysDate, phraseid) {

    console.log( "~ ~ ~ ~ " + selectPhrase( phraseid ));
    var $datecontainer = $('<div>').attr('class', 'date').addClass( selectPhrase( phraseid ) );
    //  console.log ('~~~~~ class ' + $datecontainer.class);
    //  create element for the event
    //  console.log('YEAR: ' + aryDateObject.getFullYear());
    if(phraseid == 4) { // if it's a ODE
        var $pastperiod = $('<span>').attr('class', 'past-year').text("(" + moment(todaysDate["truefrom"]).format("D MMMM YYYY") + ")");
    }
    else {
        var $pastperiod = $('<span>').attr('class', 'past-year').text("(" + moment(todaysDate["truefrom"]).format("D MMMM YYYY") + " - " + moment(todaysDate["truetill"]).format("D MMMM YYYY") + ")");
    }
    
    var $progress = $('<span>').attr('class', 'progress');
    //.text( /*"continues" + " сегодня в " + moment().format("DD MMMM") + moment(todaysDate["from"]).format("YYYY") + " г."*/ );
    $progress.append($('<img src="img/' + selectPhrase( phraseid ) + '.gif" />'));


    //  with link
    //  var $link = $('<a>').attr("href", todaysDate["link"]);
    //  $link.text(todaysDate["title"]);
    //  var $eventtitle = $('<div>').attr('class','event-title').append($link);

    //  // with no link
    //  // var $eventtitle = $('<div>').attr('class','event-title').text(todaysDate["title"]);

    var $where = $('<span>').attr('class', 'geo').text(todaysDate["where"]);
    //-----------------------------------------
    // to add the link to the event title
        // if (!!todaysDate["link"]) {
        //     var $link = $('<a>').attr("href", todaysDate["link"]).attr("target", "_blank");
        //     $link.text(todaysDate["title"]);
        //     var $eventtitle = $('<span>').attr('class', 'event-title').append($link);

        //     //======================================
        //     //======================================


        // } else {
        //     //  with no link
        //     var $eventtitle = $('<span>').attr('class', 'event-title').text(todaysDate["title"]);

        //     //======================================
        //     //======================================
        // }
    //--------------------------------------------------

    var $eventtitle = $('<span>').attr('class', 'event-title').text(todaysDate["title"]);

    var $lnk = $('<a>').attr("href", todaysDate["link"]).attr("target", "_blank");
    $lnk.text("Источник");

    var $eventheader = $('<div>').attr('class', 'event-header');

    // var $country = $('<span>').attr('class', 'coa ' + todaysDate["country"]).attr('title', todaysDate["country"]);
    // var $province = $('<span>').attr('class', 'coa p-' + todaysDate["province"]).attr('title', todaysDate["province"]);
    // var $locality = $('<span>').attr('class', 'coa l-' + todaysDate["locality"]).attr('title', todaysDate["locality"]);    

    $eventheader.append($progress);

    // $eventheader.append($country);
    // $eventheader.append($province);
    // $eventheader.append($locality);

    // $datecontainer.append($where);

    var $eventnamedate = $('<div>').attr('class', 'event-name-date');
    $eventnamedate.append($eventtitle);
    $eventnamedate.append($pastperiod);    
    $eventheader.append( $eventnamedate );
    //------- EVENT DESC ---------------------------
    var $eventonthisdate = $('<div>').attr('class', 'whathappened hidden');
    
    var $nutshell = $('<div>').attr("class", "event-nutshell").text(todaysDate["desc"]);
    $eventonthisdate.append($nutshell);

    if( phraseid == 2 || phraseid == 4) {
        if(!!todaysDate["result"]) {
            var $eventresult = $('<div>').attr('class','event-result');
            var $result_word = $("<span>").attr("class", "result-word").text("Итоги: ");
            var $result_desc = $("<span>").attr("class", "result-desc").text(todaysDate["result"]);
            $eventresult.append($result_word, $result_desc);
            $eventonthisdate.append($eventresult);
        }
    }

    $eventonthisdate.append($lnk);
    //-----------------------------------------
    $datecontainer.append($eventheader);
    $datecontainer.append($eventonthisdate);    

    $todaysevents.append($datecontainer);
}