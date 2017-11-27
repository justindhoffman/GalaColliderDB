(function app_card_modal(card_modal, $) {

var modal = null;

/**
 * @memberOf card_modal
 */
card_modal.display_modal = function display_modal(event, element) {
	event.preventDefault();
	$(element).qtip('destroy', true);
	fill_modal($(element).data('code'));
};

/**
 * builds a row for the list of available cards
 * @memberOf ui
 */
card_modal.build_row = function build_row(card) {
  // can't add core worlds to deck or view page cards
  if (card.type_code == 'commander' || typeof card.maxqty == 'undefined' || card.maxqty < 1) {
    return;
  }

  var inputTpl = _.template(
    ' <span class="<%= deck_name %>"><%= title %> <input class="qty" type="number" min="0" max="<%= max_qty %>" name="<%= inp_name %>" value="<%= val %>" data-deck="<%= deck_name %>" data-code="<%= code %>"></span> '
  );

  var inp_maindeck = inputTpl({
    title: 'MainDeck: ',
    max_qty: card.maxqty - card.tech_pool,
    inp_name: 'main_deck-' + card.code,
    code: card.code,
    val: card.main_deck,
    deck_name: 'main_deck'
  });

  var inp_techpool = inputTpl({
    title: 'TechPool: ',
    max_qty: card.maxqty - card.main_deck,
    inp_name: 'tech_pool-' + card.code,
    code: card.code,
    val: card.tech_pool,
    deck_name: 'tech_pool'
  });

  var inp_indeck = inputTpl({
    title: 'Total: ',
    max_qty: card.maxqty,
    inp_name: 'qty-' + card.code,
    code: card.code,
    val: card.indeck,
    deck_name: 'indeck'
  });

  return $(inp_maindeck + inp_techpool + inp_indeck);
}

function fill_modal (code) {
	var card = app.data.cards.findById(code),
		modal = $('#cardModal');

	if(!card) return;

	modal.data('code', code);
	modal.find('.card-modal-link').attr('href', card.url);
	modal.find('h3.modal-title').html(app.format.name(card));
	modal.find('.modal-image').html('<img class="img-responsive" src="'+card.imagesrc+'">');
	modal.find('.modal-info').html(
    '<h4 class="card-name">' + app.format.name(card) + '</h4>'
    + '<p class="card-info">' + app.format.info(card) + '</p>'
    + '<p class="card-resources">' + app.format.resources(card) + '</p>'
    + '<p class="card-modules">' + app.format.modules(card) + '</p>'
    + '<p class="card-effect">' + app.format.effect(card) + '</p>'
    + '<p class="card-aspects">' + app.format.aspects(card) + '</p>'
    + '<div class="card-pack-faction">'
    + '<span class="card-pack pull-right" style="clear:right">' + app.format.pack(card) + '</span>'
    + '<span class="card-faction">' + app.format.faction(card) + '</span>'
    + '</div>'
	);

  modal.find('.modal-qty').html(card_modal.build_row(card));
  modal.find('.modal-qty input[name^=qty]').prop('type', 'text').prop('disabled', true);
  if (app.deck.is_flex_only(card)) {
    modal.find('.modal-qty span.main_deck').hide();
  }
}

$(function () {

	$('body').on({click: function (event) {
		var element = $(this);
		if(event.shiftKey || event.altKey || event.ctrlKey || event.metaKey) {
			event.stopPropagation();
			return;
		}
		card_modal.display_modal(event, element);
	}}, '.card');

})

})(app.card_modal = {}, jQuery);
