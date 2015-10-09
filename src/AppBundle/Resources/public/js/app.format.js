(function app_format(format, $) {

/**
 * @memberOf format
 */
format.traits = function traits(card) {
  text = '';
  switch(card.type_code) {
  case 'operation':
  case 'development':
    text += card.structure ? '<p><span class="icon-structure">' + card.structure + '</span></p>' : '';
    break;
  case 'ship':
    text += card.module_one ? '<div class="ship-module">' + (card.modval_one ? card.modval_one + ' ' : '') + card.module_one + '</div>' : '';
    text += card.module_two ? '<div class="ship-module">' + (card.modval_two ? card.modval_two + ' ' : '') + card.module_two + '</div>' : '';
    text += card.module_three ? '<div class="ship-module">' + (card.modval_three ? card.modval_three + ' ' : '') + card.module_three + '</div>' : '';
    text += card.attack ? '<span class="icon-attack">' + card.attack + '</span> ' : '';
    text += card.hull ? '<span class="icon-hull">' + card.hull + '</span> ' : '';
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
	var text = card.faction_name;
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
  var operation = ' ';
  if (card.oper_type === 'Infinite') {
    operation = '<span class="icon-infinite"><span>';
  }
  else if (card.oper_type === 'Void') {
    operation = '<span class="icon-void"><span>';
  }
  var text = dots + operation + card.type_name + ' - ' + card.pack_name; // + ' #' + card.position + '. ';
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
  var text = '<div>'
  text += card.materials ? '<span class="icon-materials">' + card.materials + '</span> ' : '';
  text += card.research ? '<span class="icon-research">' + card.research + '</span> ' : '';
  text += card.energy ? '<span class="icon-energy">' + card.energy + '</span> ' : '';
  text += '</div>';
  text += '<div>'
  text += card.engines ? '<span class="icon-engines">' + card.engines + '</span> ' : '';
  text += card.fuel_cost ? '<span class="icon-fuel-cost">' + card.fuel_cost + '</span> ' : '';
  text += '</div>';
	return text;
};

/**
 * @memberOf format
 */
format.text = function text(card) {
	var text = card.effect || '';
// 	text = text.replace(/\[(\w+)\]/g, '<span class="icon-$1"></span>')
	text = text.split("\n").join('</p><p>');
	return '<p>'+text+'</p>';
};

})(app.format = {}, jQuery);
