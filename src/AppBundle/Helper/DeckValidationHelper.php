<?php 

namespace AppBundle\Helper;

class DeckValidationHelper
{
	
	public function __construct(AgendaHelper $agenda_helper)
	{
		$this->agenda_helper = $agenda_helper;
	}
	
	public function getInvalidCards($deck)
	{
		$invalidCards = [];
		foreach ( $deck->getSlots() as $slot ) {
			if(! $this->canIncludeCard($deck, $slot->getCard())) {
				$invalidCards[] = $slot->getCard();
			}
		}
		return $invalidCards;
	}
	
	public function canIncludeCard($deck, $card) {
    // only exclude coreworlds
    if ($card->getFaction()->getCode() === 'core-world') {
      return false;
    }
    if ($card) {
      return true;
    }
// 		if($card->getFaction()->getCode() === 'neutral') {
// 			return true;
// 		}
// 		if($card->getFaction()->getCode() === $deck->getFaction()->getCode()) {
// 			return true;
// 		}
// 		if($card->getIsLoyal()) {
// 			return false;
// 		}
// 		$agenda = $deck->getSlots()->getAgenda();
// 		if($agenda && $this->agenda_helper->getMinorFactionCode($agenda) === $card->getFaction()->getCode()) {
// 			return true;
// 		}
		return false;
	}

  public function getFlexPointsTotal($deck) {
    $total = 0;
    foreach ($deck->getSlots() as $slot) {
      if ($slot->getCard()->getFaction()->getCode() != $deck->getFaction()->getCode()) {
        $total += $slot->getCard()->getTechLevel() * $slot->getTechPool();
      }
    }
    return $total;
  }
	
	public function findProblem($deck) {
    $deck_min_cards = 30;
    $flex_points_max = 12;
    $tech_pool_slots = 15;

    // no more than MAX flex points
    if ($this->getFlexPointsTotal($deck) > $flex_points_max) {
      return 'too_many_flex_points';
    }
    
    $tech_pool_size = count($deck->getSlots()->getTechCards());
    // exact tech_pool slots used
    if ($tech_pool_size > $tech_pool_slots) {
      return 'too_many_tech_slots';
    }
    if ($tech_pool_size < $tech_pool_slots) {
      return 'too_few_tech_slots';
    }
    
    // at least MIN total cards
    if ($deck->getSlots()->countCards() < $deck_min_cards) {
      return 'too_few_cards';
    }

    // no invalid card
    if (count($this->getInvalidCards($deck)) > 0) {
      return 'invalid_cards';
    }

    return NULL;
	}
	
	public function getProblemLabel($problem) {
		if(! $problem) {
			return '';
		}
		$labels = [
        'too_many_flex_points' => "Contains too many flex points",
        'too_few_cards' => "Contains too few cards",
        'invalid_cards' => "Contains forbidden cards",
        'too_many_tech_slots' => "Contains too many tech slots",
        'too_few_tech_slots' => "Contains too few tech slots"
// 				'too_many_plots' => "Contains too many Plots",
// 				'too_few_plots' => "Contains too few Plots",
// 				'too_many_different_plots' => "Contains more than one duplicated Plot",
// 				'too_many_agendas' => "Contains more than one Agenda",
// 				'too_few_cards' => "Contains too few cards",
// 				'invalid_cards' => "Contains forbidden cards (cards no permitted by Faction or Agenda)",
// 				'agenda' => "Doesn't comply with the Agenda conditions"
		];
		if(isset($labels[$problem])) {
			return $labels[$problem];
		}
		return '';
	}
	
	
}
