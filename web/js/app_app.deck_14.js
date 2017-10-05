(function app_deck(deck, $) {

deck.json = {};

var date_creation,
  date_update,
  description_md,
  history,
  id,
  name,
  slots,
  tags,
  faction_code,
  faction_name,
  unsaved,
  user_id,
  coreworld_code,
  problem_labels = {
    too_many_flex_points: "Contains too many flex points",
    too_few_cards: "Your deck needs at least 30 cards",
    invalid_cards: "Contains forbidden cards",
    too_many_tech_slots: "Contains too many tech slots",
    too_few_tech_slots: "Contains too few tech slots"
  },
  header_tpl = _.template('<h5><span class="icon icon-<%= code %>"></span> <%= name %> (<%= quantity %>)</h5>'),
  card_line_tpl = _.template('<span class="icon icon-<%= card.type_code %> fg-<%= card.faction_code %>"></span> <a href="<%= card.url %>" class="card card-tip" data-toggle="modal" data-remote="false" data-target="#cardModal" data-code="<%= card.code %>"><%= card.name %></a>');

var deck_min_cards = 30;
var flex_points_max = 12;
var tech_pool_slots = 15;

/**
 * @memberOf deck
 */
deck.init = function init(json) {
  if (json) deck.json = json;
  date_creation = deck.json.date_creation;
  date_update = deck.json.date_update;
  description_md = deck.json.description_md;
  history = deck.json.history;
  id = deck.json.id;
  name = deck.json.name;
  slots = deck.json.slots;
  mainDeck = deck.json.main_deck;
  techPool = deck.json.tech_pool;
  tags = deck.json.tags;
  unsaved = deck.json.unsaved;
  user_id = deck.json.user_id;
  coreworld_code = deck.json.coreworld_code;
  // flex points
  coreworld = deck.get_coreworld();
  faction_code = coreworld.faction_code;
  faction_name = coreworld.faction_name;
  deck_min_cards = coreworld.min_deck;
  flex_points_max = coreworld.flex_points;
  tech_pool_slots = coreworld.tech_slots;

  app.data.cards.update({}, {
    indeck: 0,
    main_deck: 0,
    tech_pool: 0,
    flex_points: 0
  });

  for (code in slots) {
    if (slots.hasOwnProperty(code)) {
      var currentcard = app.data.cards.findById(code);
      app.data.cards.updateById(code, {
        indeck: slots[code],
        main_deck: mainDeck[code],
        tech_pool: techPool[code],
        flex_points: (faction_code == currentcard.faction_code) ? 0 : (techPool[code] * currentcard.tech_level),
      });
    }
  }
}

/**
 * @memberOf deck
 * @returns string
 */
deck.get_id = function get_id() {
  return id;
}

/**
 * @memberOf deck
 * @returns string
 */
deck.get_name = function get_name() {
  return name;
}

/**
 * @memberOf deck
 * @returns string
 */
deck.get_faction_code = function get_faction_code() {
  return faction_code;
}

/**
 * @memberOf deck
 * @returns string
 */
deck.get_description_md = function get_description_md() {
  return description_md;
}

/**
 * @memberOf deck
 */
deck.get_agendas = function get_agendas() {
  return deck.get_cards(null, {
    type_code: 'agenda'
  });
}

/**
 * @memberOf deck
 */
deck.get_agenda = function get_agenda() {
  var agendas = deck.get_agendas();
  return agendas.length ? agendas[0] : null;
}

/**
 * @memberOf deck
 */
deck.get_coreworld = function get_coreworld() {
  return app.data.cards.findById(coreworld_code);
}

/**
 * @memberOf deck
 */
deck.get_history = function get_history() {
  return history;
}

/**
 * @memberOf deck
 */
deck.get_cards = function get_cards(sort, query) {
  sort = sort || {};
  sort['code'] = 1;

  query = query || {};
  query.indeck = {
    '$gt': 0
  };

  return app.data.cards.find(query, {
    '$orderBy': sort
  });
}

/**
 * @memberOf deck
 */
deck.get_main_deck = function get_main_deck(sort) {
  return deck.get_cards(sort, {
    main_deck: {
      '$gt': 0
    }
  });
}

/**
 * @memberOf deck
 */
deck.get_tech_pool = function get_tech_pool(sort) {
  return deck.get_cards(sort, {
    tech_pool: {
      '$gt': 0
    }
  });
}
/**
 * @memberOf deck
 * @returns the number of tech pool cards
 */
deck.get_tech_pool_size = function get_tech_pool_size(sort) {
  var tech_pool = deck.get_tech_pool();
  return tech_pool.length;
}

/**
 * @memberOf deck
 */
deck.get_draw_deck = function get_draw_deck(sort) {
  return deck.get_cards(sort, {
    type_code: {
      '$nin' : ['agenda','plot']
    }
  });
}
/**
 * @memberOf deck
 * @returns the number of main cards
 */
deck.get_main_deck_size = function get_main_deck_size(sort) {
  var main_deck = deck.get_main_deck();
  window.main_deck = main_deck;
  window.deckdeck = deck;
  console.dir(deck.get_nb_cards(main_deck, 'main_deck'));
  return deck.get_nb_cards(main_deck, 'main_deck');
}

/**
 * @memberOf deck
 */
deck.get_total_deck_size = function get_total_deck_size(sort) {
  var total_deck = deck.get_cards();
  return deck.get_nb_cards(total_deck);
}

/**
 * @memberOf deck
 */
deck.get_flex_points = function get_flex_points() {
  var points = 0;
return points;

  var cards = deck.get_cards(null, { faction_code: { '$ne': deck.get_faction_code() }, tech_pool: { '$gt': 0 }});
  cards.forEach(function (card) {
    if (card.tech_pool > 0) {
      points += card.tech_pool * card.tech_level;
    }
  });

  return points;
}

/**
 * @memberOf deck
 */
deck.get_plot_deck = function get_plot_deck(sort) {
  return deck.get_cards(sort, {
    type_code: 'plot'
  });
}

/**
 * @memberOf deck
 * @returns the number of plot cards
 */
deck.get_plot_deck_size = function get_plot_deck_size(sort) {
  var plot_deck = deck.get_plot_deck();
  return deck.get_nb_cards(plot_deck);
}

/**
 * @memberOf deck
 * @returns the number of different plot cards
 */
deck.get_plot_deck_variety = function get_plot_deck_variety(sort) {
  var plot_deck = deck.get_plot_deck();
  return plot_deck.length;
}

deck.get_nb_cards = function get_nb_cards(cards, deck) {
  if (!cards) cards = deck.get_cards();
  if (!deck) deck = 'indeck';
  var quantities = _.pluck(cards, deck);
  return _.reduce(quantities, function(memo, num) { return memo + num; }, 0);
}

/**
 * @memberOf deck
 */
deck.get_included_packs = function get_included_packs() {
  var cards = deck.get_cards();
  var nb_packs = {};
  cards.forEach(function (card) {
    nb_packs[card.pack_code] = Math.max(nb_packs[card.pack_code] || 0, card.indeck / card.quantity);
  });
  var pack_codes = _.uniq(_.pluck(cards, 'pack_code'));
  var packs = app.data.packs.find({
    'code': {
      '$in': pack_codes
    }
  }, {
    '$orderBy': {
      'available': 1
    }
  });
  packs.forEach(function (pack) {
    pack.quantity = nb_packs[pack.code] || 0;
  })
  return packs;
}

/**
 * @memberOf deck
 */
deck.display = function display(container, sort) {
  var elements;

  if (sort === 'type') {
    elements = deck.display_by_type();
  }
  else {
    elements = deck.display_by_other();
  }

  $(container)
    .removeClass('deck-loading')
    .empty();

  elements.forEach(function (element) {
    $(container).append(element);
  })
}

deck.display_by_other = function display_by_other() {
  /* to sort cards, we need:
   * name of the key to sort upon
   * label to display for each key
   * order of the values
   */
  var sortKey = '', displayLabel = '', valuesOrder = [];
  switch(sort) {
  case 'faction':
    sortKey = 'faction_code';
    displayLabel = 'faction_name';
    valuesOrder = app.data.cards.distinct('faction_code').sort();
    break;
  }

  var deck_content = $('<div class="deck-content">');

  valuesOrder.forEach(function (sortValue) {
    var query = {
      indeck: {
        '$gt': 0
      }
    };
    query[sortKey] = sortValue;
    var cards = app.data.cards.find(query, {
      '$orderBy': { name: 1 }
    });
    if(!cards.length) return;

    $(header_tpl({name:cards[0][displayLabel], quantity: cards.length})).appendTo(deck_content);
    cards.forEach(function (card) {
      var flex_dots = '';
      for (i = 0; i < card.flex_points; i++) {
        flex_dots += '<span class="flex-points fg-' + card.faction_code +'">&bull;</span>';
      }
      $('<div>').addClass(deck.can_include_card(card) ? '' : 'invalid-card').append($(card_line_tpl({card:card}))).append(flex_dots).prepend(card.indeck+'x ').appendTo(deck_content);
    })
  });
}

deck.display_by_type = function display_by_type() {
  var coreworld = deck.get_coreworld();
  var problem = deck.get_problem();

  var deck_content = $('<div class="deck-content">');
  var deck_content_first_row = $('<div class="row">').appendTo(deck_content);

  var deck_intro_images = $('<div class="col-xs-4">').appendTo(deck_content_first_row);

  if (coreworld) {
    deck_intro_images.append('<div><img src="'+coreworld.imagesrc+'" class="img-responsive">');
  }

  var deck_intro_meta = $('<div class="col-sm-8">').appendTo(deck_content_first_row);
  deck_intro_meta.append('<h4 style="font-weight:bold" class="icon-'+deck.get_faction_code()+'">'+faction_name+'</h4>');
  if (coreworld) {
    $('<h5>').append($(card_line_tpl({card:coreworld}))).appendTo(deck_intro_meta).find('.icon').remove();
  }
//   $('<div>Total Cards: ' + deck.get_total_deck_size() + ' cards of ' + deck_min_cards + '</div>').addClass(deck.get_total_deck_size() < deck_min_cards ? 'text-danger': '').appendTo(deck_intro_meta);
  $('<div>Tech Pool Slots: ' + deck.get_tech_pool_size() + ' of ' + tech_pool_slots + '</div>').addClass(deck.get_tech_pool_size() != tech_pool_slots ? 'text-danger': '').appendTo(deck_intro_meta);
//  $('<div>Flex Points: ' + deck.get_flex_points() + ' of ' + flex_points_max + ' points</div>').addClass(deck.get_flex_points() > flex_points_max ? 'text-danger': '').appendTo(deck_intro_meta);
  //$('<div>Plot deck: '+deck.get_plot_deck_size()+' cards</div>').addClass(deck.get_plot_deck_size() != 7 ? 'text-danger': '').appendTo(deck_intro_meta);
//  deck_intro_meta.append('<div>Packs: ' + _.map(deck.get_included_packs(), function (pack) { return pack.name+(pack.quantity > 1 ? ' ('+pack.quantity+')' : ''); }).join(', ') + '</div>');
  problem_labels['too_few_cards'] = "Your main deck needs at least " + deck_min_cards + " cards";
  $(problem).each(function(i, p) {
    $('<div class="text-danger small"><span class="fa fa-exclamation-triangle"></span> '+problem_labels[p]+'</div>').appendTo(deck_intro_meta);
  });

  var deck_main_deck = $('<div class="row col-sm-12">').appendTo(deck_content);
  deck_main_deck.append(deck.display_one_section('main_deck'));

  var deck_tech_pool = $('<div class="row col-sm-12">').appendTo(deck_content);
  deck_tech_pool.append(deck.display_one_section('tech_pool'));

  return [ deck_content ];
}

deck.display_one_section = function display_one_section(thisDeck) {
  var section = $('<div class="tech-pool-section">');
  var query = {};
  query[thisDeck] = { '$gt': 0 };
  if (thisDeck == 'tech_pool') {
    var cards = deck.get_cards({ 'tech_level': 1, name: 1 }, query);
    techLevel = 0;
  }
  else {
    var cards = deck.get_cards({ name: 1 }, query);
  }
  if (cards.length) {
    $('<h5>' + thisDeck.replace('_', ' ') + ' (' + deck.get_nb_cards(cards, thisDeck) + ')</h5>').appendTo(section);
    cards.forEach(function (card) {
      if (thisDeck == 'tech_pool' && techLevel != card.tech_level) {
        techLevel = card.tech_level;
        $('<h6>Tech' + techLevel + '</h6>').appendTo(section);
      }
      var flex_points = (deck.get_faction_code() == card.faction_code) ? 0 : (card.tech_pool * card.tech_level);
      var flex_dots = ' ';
      for (i = 0; i < flex_points; i++) {
        flex_dots += '<span class="flex-points fg-' + card.faction_code +' fa fa-circle"></span> ';
      }
      $('<div>').addClass(deck.can_include_card(card) ? '' : 'invalid-card').append($(card_line_tpl({ card:card }))).append(flex_dots).prepend(card[thisDeck] + 'x ').appendTo(section);
    })
  }
  return section;
}

/**
 * @memberOf deck
 * @return boolean true if at least one other card quantity was updated
 */
deck.set_card_copies = function set_card_copies(card_code, deck, nb_copies) {
  var card = app.data.cards.findById(card_code);
  if (!card) return false;

//  var updated_other_card = false;

//  // card-specific rules
//  switch (card.type_code) {
//    case 'agenda':
//    app.data.cards.update({
//      type_code: 'agenda'
//    }, {
//      indeck: 0
//    });
//    updated_other_card = true;
//    break;
//  }
  card[deck] = nb_copies;
  total = card.main_deck + card.tech_pool;
  card['indeck'] = total;
  set = {
    deck: total,
    indeck: total,
    main_deck: card.main_deck,
    tech_pool: card.tech_pool
  };
//   set[deck] = total;

  app.data.cards.updateById(card_code, set);
  if (app.deck_history) app.deck_history.notify_change();

  return card;
}

/**
 * @memberOf deck
 */
deck.get_content = function get_content() {
  var cards = deck.get_cards();
  var content = {};
  cards.forEach(function (card) {
    content[card.code] = {
      'qty': card.indeck,
      'mainDeck': card.main_deck,
      'techPool': card.tech_pool
    };
  });
  return content;
}

/**
 * @memberOf deck
 */
deck.get_json = function get_json() {
  return JSON.stringify(deck.get_content());
}

/**
 * @memberOf deck
 */
deck.get_export = function get_export(format) {

}

/**
 * @memberOf deck
 */
deck.get_problem = function get_problem() {
  var problem = [];
  // no more than MAX flex points
  if (deck.get_flex_points() > flex_points_max) {
    problem.push('too_many_flex_points');
  }

  // exact tech_pool slots used
  if (deck.get_tech_pool_size() > tech_pool_slots) {
    problem.push('too_many_tech_slots');
  }
  if (deck.get_tech_pool_size() < tech_pool_slots) {
    problem.push('too_few_tech_slots');
  }

  // at least MIN total cards
  if (deck.get_main_deck_size() < deck_min_cards) {
    problem.push('too_few_cards');
  }

  // no invalid card
  if (deck.get_invalid_cards().length > 0) {
    problem.push('invalid_cards');
  }

  return problem;
}

deck.get_invalid_cards = function get_invalid_cards() {
  return _.filter(deck.get_cards(), function (card) {
    return ! deck.can_include_card(card);
  });
}

deck.is_flex_only = function is_flex_only(card) {
  if (card.faction_code != deck.get_faction_code()) {
    return true;
  }
  // in faction and TL > 1
  if (card.tech_level > 1) {
    return true;
  }

  return false;
}

/**
 * returns true if the deck can include the card as parameter
 * @memberOf deck
 */
deck.can_include_card = function can_include_card(card) {
  // exclude coreworlds, sectors
  if (card.type_code === 'core-world') return false;
  if (card.type_code === 'sector') return false;
//  if (card) return true;

//   // neutral card => yes
//   if (card.faction_code === 'neutral') return true;

  // same faction card => yes
  if (card.faction_code === faction_code) return true;

  // if none above => no
  return false;
}

})(app.deck = {}, jQuery);
