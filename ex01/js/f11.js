window.scope11 = {};
scope11.selectPhrase = function ( phraseid) {
	console.log( "_____ " + phraseid);

	switch( phraseid ) {
		case 1:
			return "continues";
			break;
		case 2:
			return "end";
			break;
		case 3:
			return "begin";
			break;
		case 4:
			return "today";
			break;
	}
}