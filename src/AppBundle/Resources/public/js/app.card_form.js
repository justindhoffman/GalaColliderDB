(function app_card_form(card_form, $) {
  if ($('#thronesdb_cardsbundle_cardtype_type').length > 0) {
    card_form_show($('#thronesdb_cardsbundle_cardtype_type').val());
    $('#thronesdb_cardsbundle_cardtype_type').change(function() {
      card_form_show($(this).val());
    });
  }
  
  function card_form_show($val) {
    var ids = [
      '#thronesdb_cardsbundle_cardtype_tech_level',
      '#thronesdb_cardsbundle_cardtype_effect',
      '#thronesdb_cardsbundle_cardtype_oper_type',
      '#thronesdb_cardsbundle_cardtype_phase',
      '#thronesdb_cardsbundle_cardtype_attack',
      '#thronesdb_cardsbundle_cardtype_size',
      '#thronesdb_cardsbundle_cardtype_hull',
      '#thronesdb_cardsbundle_cardtype_module_one',
      '#thronesdb_cardsbundle_cardtype_modval_one',
      '#thronesdb_cardsbundle_cardtype_module_two',
      '#thronesdb_cardsbundle_cardtype_modval_two',
      '#thronesdb_cardsbundle_cardtype_module_three',
      '#thronesdb_cardsbundle_cardtype_modval_three',
      '#thronesdb_cardsbundle_cardtype_engines',
      '#thronesdb_cardsbundle_cardtype_fuel_cost',
      '#thronesdb_cardsbundle_cardtype_structure',
      '#thronesdb_cardsbundle_cardtype_is_hq',
      '#thronesdb_cardsbundle_cardtype_is_unique',
      '#thronesdb_cardsbundle_cardtype_min_deck',
      '#thronesdb_cardsbundle_cardtype_tech_slots',
      '#thronesdb_cardsbundle_cardtype_flex_points',
      '#thronesdb_cardsbundle_cardtype_stars',
      '#thronesdb_cardsbundle_cardtype_build_slot',
      '#thronesdb_cardsbundle_cardtype_infantry',
      '#thronesdb_cardsbundle_cardtype_space_attack',
      '#thronesdb_cardsbundle_cardtype_position',
      '#thronesdb_cardsbundle_cardtype_quantity'
    ];
    $(ids.join(',')).closest('.form-group').hide();
    switch($val) {
      case '1': // operation
        var ids = [
          '#thronesdb_cardsbundle_cardtype_tech_level',
          '#thronesdb_cardsbundle_cardtype_effect',
          '#thronesdb_cardsbundle_cardtype_oper_type',
          '#thronesdb_cardsbundle_cardtype_phase',
          '#thronesdb_cardsbundle_cardtype_position',
          '#thronesdb_cardsbundle_cardtype_quantity'
        ];
        $(ids.join(',')).closest('.form-group').show();
        break;
      case '2': // ship
        var ids = [
          '#thronesdb_cardsbundle_cardtype_tech_level',
          '#thronesdb_cardsbundle_cardtype_attack',
          '#thronesdb_cardsbundle_cardtype_size',
          '#thronesdb_cardsbundle_cardtype_hull',
          '#thronesdb_cardsbundle_cardtype_module_one',
          '#thronesdb_cardsbundle_cardtype_modval_one',
          '#thronesdb_cardsbundle_cardtype_module_two',
          '#thronesdb_cardsbundle_cardtype_modval_two',
          '#thronesdb_cardsbundle_cardtype_module_three',
          '#thronesdb_cardsbundle_cardtype_modval_three',
          '#thronesdb_cardsbundle_cardtype_engines',
          '#thronesdb_cardsbundle_cardtype_fuel_cost',
          '#thronesdb_cardsbundle_cardtype_position',
          '#thronesdb_cardsbundle_cardtype_quantity'
        ];
        $(ids.join(',')).closest('.form-group').show();
        break;
      case '3': // development
        var ids = [
          '#thronesdb_cardsbundle_cardtype_tech_level',
          '#thronesdb_cardsbundle_cardtype_effect',
          '#thronesdb_cardsbundle_cardtype_structure',
          '#thronesdb_cardsbundle_cardtype_is_hq',
          '#thronesdb_cardsbundle_cardtype_is_unique',
          '#thronesdb_cardsbundle_cardtype_stars',
          '#thronesdb_cardsbundle_cardtype_infantry',
          '#thronesdb_cardsbundle_cardtype_space_attack',
          '#thronesdb_cardsbundle_cardtype_position',
          '#thronesdb_cardsbundle_cardtype_quantity'
        ];
        $(ids.join(',')).closest('.form-group').show();
        break;
      case '4': // sector
        var ids = [
          '#thronesdb_cardsbundle_cardtype_position',
          '#thronesdb_cardsbundle_cardtype_quantity'
        ];
        $(ids.join(',')).val(0);
        var ids = [
          '#thronesdb_cardsbundle_cardtype_effect',
          '#thronesdb_cardsbundle_cardtype_stars',
          '#thronesdb_cardsbundle_cardtype_build_slot',
          '#thronesdb_cardsbundle_cardtype_infantry',
          '#thronesdb_cardsbundle_cardtype_space_attack'
        ];
        $(ids.join(',')).closest('.form-group').show();
        break;
      case '5': // core world
        var ids = [
          '#thronesdb_cardsbundle_cardtype_position',
          '#thronesdb_cardsbundle_cardtype_quantity'
        ];
        $(ids.join(',')).val(0);
        var ids = [
          '#thronesdb_cardsbundle_cardtype_effect',
          '#thronesdb_cardsbundle_cardtype_min_deck',
          '#thronesdb_cardsbundle_cardtype_tech_slots',
          '#thronesdb_cardsbundle_cardtype_flex_points',
          '#thronesdb_cardsbundle_cardtype_stars',
          '#thronesdb_cardsbundle_cardtype_build_slot',
          '#thronesdb_cardsbundle_cardtype_infantry',
          '#thronesdb_cardsbundle_cardtype_space_attack'
        ];
        $(ids.join(',')).closest('.form-group').show();
        break;
    }
  }
})(app.card_form = {}, jQuery);