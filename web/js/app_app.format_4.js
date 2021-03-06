(function app_format(format, $) {

/**
* @memberOf format
*/
format.modules = function modules(card) {
  var text = card.module_one ? '<div class="ship-module">' + card.module_one + (card.modval_one ? ' ' + card.modval_one: '') + '</div>' : '';
  text += card.module_two ? '<div class="ship-module">' + card.module_two + (card.modval_two ? ' ' + card.modval_two : '') + '</div>' : '';
  text += card.module_three ? '<div class="ship-module">' + card.module_three + (card.modval_three ? ' ' + card.modval_three : '') + '</div>' : '';
  return text;
};

/**
* @memberOf format
*/
format.name = function name(card) {
  return card.name;
}

/**
 * @memberOf format
 */
format.faction = function faction(card) {
  return card.faction_name;
}

/**
* @memberOf format
*/
format.pack = function pack(card) {
  return card.pack_name + ' Set #' + card.code;
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
  var text = card.is_unique ? '<span class="icon-unique"> &bull; </span>' : '';
  text += card.is_hq ? '<span class="icon-hq"> &bull; </span>' : '';
  text += '<span class="' + ((card.oper_type == 'Infinite') ? 'icon-infinite' : ((card.oper_type == 'Void') ? 'icon-void' : '')) + '"></span>';
  text += '<span class="card-type">' + card.type_name + ' &bull; </span>';
  text += card.size ? '<span class="ship-size">' + card.size + ' &bull; </span>' : '';
  text += '<span class="card-tech-level">Tech Level: ' + card.tech_level + '</span>';
  return text;
}

/**
* @memberOf format
*/
format.resources = function resources(card) {
  var text = card.materials ? '<span class="icon-materials">' + card.materials + '</span> ' : '';
  text += card.research ? '<span class="icon-research">' + card.research + '</span> ' : '';
  text += card.energy ? '<span class="icon-energy">' + card.energy + '</span> ' : '';
  return text;
}

/**
 * @memberOf format
 */
format.moves = function moves(card) {
  var text = '';

  if (card.type_code == 'ship') {
    text += '<p class="card-move">';
    text += '<span class="icon-engines block">' + card.engines + '</span>';
    text += '<span class="icon-fuel-cost block">' + card.fuel_cost + '</span>';
    text += '</p>';
  }

  return text;
};

/**
* @memberOf format
*/
format.aspects = function aspects(card) {
  var text = '';
  
  if (card.type_code == 'ship') {
    text += '<span class="icon-attack block">' + card.attack + '</span>';
    text += '<span class="icon-hull block">' + card.hull + '</span>';
  }
  
  if ($.inArray(card.type_code, ['development', 'sector', 'commander']) >= 0) {
    text += '<span class="icon-stars">' + card.stars + '</span>';
  }
  
  text += card.space_attack ? '<span class="icon-attack">' + card.space_attack + '</span> ' : '';
  text += card.tech_slots ? '<span class="icon-tech-slots">' + card.tech_slots + '</span> ' : '';
  text += card.build_slot ? '<span class="icon-build-slots">' + card.build_slot + '</span> ' : '';
  text += card.infantry ? '<span class="icon-infantry">' + card.infantry + '</span> ' : '';
  
  if (card.type_code == 'development') {
    text += '<span class="icon-structure">' + card.structure + '</span>';
  }
  return text;
};

/**
* @memberOf format
*/
format.effect = function effect(card) {
  return card.effect || '';
};

})(app.format = {}, jQuery);
