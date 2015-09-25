(function app_format(format, $) {

/**
 * @memberOf format
 */
format.traits = function traits(card) {
  text = '';
  switch(card.type_code) {
  case 'operation':
  case 'development':
    text += card.effect ? card.effect : '';
    break;
  case 'ship':
    text += card.module_one ? '<p class="ship-module">' + (card.modval_one ? card.modval_one + ' ' : '') + card.module_one + '</p>' : '';
    text += card.module_two ? '<p class="ship-module">' + (card.modval_two ? card.modval_two + ' ' : '') + card.module_two + '</p>' : '';
    text += card.module_three ? '<p class="ship-module">' + (card.modval_three ? card.modval_three + ' ' : '') + card.module_three + '</p>' : '';
    break;
  case 'sector':
    break;
  case 'core_world':
    break;
  }
	return text;
};

/**
 * @memberOf format
 */
format.name = function name(card) {
	return (card.is_unique ? '<span class="icon-unique"></span> ' : "") + card.name;
}

format.faction = function faction(card) {
	var text = card.faction_name + '.';
	return text;
}

/**
 * @memberOf format
 */
format.pack = function pack(card) {
	var text = card.pack_name; // + ' #' + card.position + '. ';
	return text;
}

/**
 * @memberOf format
 */
format.tech_type_pack = function pack(card) {
  var dots = '';
  for (i = 0; i < card.tech_level; i++) {
    dots += '<span class="bullet">&bull;</span>';
  }
  var text = dots + ' ' + card.type_name + ' - ' + card.pack_name; // + ' #' + card.position + '. ';
  return text;
}

/**
 * @memberOf format
 */
format.pack_faction = function pack_faction(card) {
	var text = card.pack_name /*+ ' #' + card.position*/ + '. ';
	text += card.faction_name + '. ';
	return text;
}

/**
 * @memberOf format
 */
format.info = function info(card) {
  var text = '<span class="card-costs">' + card.materials + '/' + card.research + '/' + card.energy + '</span>'
//   var text = '<span class="card-type">'+card.type_name+'. </span>';
	return text;
};

/**
 * @memberOf format
 */
format.text = function text(card) {
	var text = card.text || '';
	text = text.replace(/\[(\w+)\]/g, '<span class="icon-$1"></span>')
	text = text.split("\n").join('</p><p>');
	return '<p>'+text+'</p>';
};

})(app.format = {}, jQuery);
