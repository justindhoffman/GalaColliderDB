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
 * @memberOf card_modal
 */
card_modal.typeahead = function typeahead(event, card) {
	fill_modal(card.code);
	$('#cardModal').modal('show');
};

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

	var qtyelt = modal.find('.modal-qty');
	if(qtyelt) {

		var qty = '';
	  	for(var i=0; i<=card.maxqty; i++) {
	  		qty += '<label class="btn btn-default"><input type="radio" name="qty" value="'+i+'">'+i+'</label>';
	  	}
	  	qtyelt.html(qty);

	  	qtyelt.find('label').each(function (index, element) {
			if(index == card.indeck) $(element).addClass('active');
			else $(element).removeClass('active');
		});

	} else {
		if(qtyelt) qtyelt.closest('.row').remove();
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
