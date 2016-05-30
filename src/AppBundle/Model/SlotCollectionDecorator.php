<?php

namespace AppBundle\Model;

use Doctrine\Common\Collections\ArrayCollection;
/**
 * Decorator for a collection of SlotInterface 
 */
class SlotCollectionDecorator implements \AppBundle\Model\SlotCollectionInterface
{
	protected $slots;
	
	public function __construct(\Doctrine\Common\Collections\Collection $slots)
	{
		$this->slots = $slots;
	}
	
	public function add($element)
	{
		return $this->slots->add($element);
	}

	public function removeElement($element)
	{
		return $this->slots->removeElement($element);
	}
	
	public function count($mode = null)
	{
		return $this->slots->count($mode);
	}
	
	public function getIterator()
	{
		return $this->slots->getIterator();
	}
	
	public function offsetExists($offset)
	{
		return $this->slots->offsetExists($offset);
	}
	
	public function offsetGet($offset)
	{
		return $this->slots->offsetGet($offset);
	}
	
	public function offsetSet($offset, $value)
	{
		return $this->slots->offsetSet($offset, $value);
	}
	
	public function offsetUnset($offset)
	{
		return $this->slots->offsetUnset($offset);
	}
	
	public function countCards() 
	{
		$count = 0;
		foreach($this->slots as $slot) {
			$count += $slot->getQuantity();
		}
		return $count;
	}
	
	public function getIncludedPacks() {
		$packs = [];
		foreach ( $this->slots as $slot ) {
			$card = $slot->getCard();
			$pack = $card->getPack();
			if(!isset($packs[$pack->getPosition()])) {
				$packs[$pack->getPosition()] = [
					'pack' => $pack,
					'nb' => 0
				];
			}
			
// 			$nbpacks = ceil($slot->getQuantity() / $card->getQuantity());
// 			if($packs[$pack->getPosition()]['nb'] < $nbpacks) {
// 				$packs[$pack->getPosition()]['nb'] = $nbpacks;
// 			}
		}
		ksort($packs);
		return array_values($packs);
	}
	
	public function getSlotsByType() {
		$slotsByType = [ 'plot' => [], 'character' => [], 'location' => [], 'attachment' => [], 'event' => [] ];
		foreach($this->slots as $slot) {
			if(array_key_exists($slot->getCard()->getType()->getCode(), $slotsByType)) {
				$slotsByType[$slot->getCard()->getType()->getCode()][] = $slot;
			}
		}
		return $slotsByType;
	}
	
	public function getCountByType() {
    $countByType = [];
		foreach($this->slots as $slot) {
			if(array_key_exists($slot->getCard()->getType()->getCode(), $countByType)) {
				$countByType[$slot->getCard()->getType()->getCode()] += $slot->getQuantity();
			}
		}
		return $countByType;
	}

	public function getPlotDeck()
	{
		$plotDeck = [];
		foreach($this->slots as $slot) {
			if($slot->getCard()->getType()->getCode() === 'plot') {
				$plotDeck[] = $slot;
			}
		}
		return new SlotCollectionDecorator(new ArrayCollection($plotDeck));
	}

	public function getAgendas()
	{
		$agendas = [];
		foreach($this->slots as $slot) {
			if($slot->getCard()->getType()->getCode() === 'agenda') {
				$agendas[] = $slot;
			}
		}
		return new SlotCollectionDecorator(new ArrayCollection($agendas));
	}

	public function getAgenda()
	{
		foreach ( $this->slots as $slot ) {
			if($slot->getCard()->getType()->getCode() === 'agenda') {
				return $slot->getCard();
			}
		}
	}

	public function getDrawDeck()
	{
		$drawDeck = [];
		foreach($this->slots as $slot) {
			if($slot->getCard()->getType()->getCode() === 'character'
			|| $slot->getCard()->getType()->getCode() === 'location'
			|| $slot->getCard()->getType()->getCode() === 'attachment'
			|| $slot->getCard()->getType()->getCode() === 'event') {
				$drawDeck[] = $slot;
			}
		}
		return new SlotCollectionDecorator(new ArrayCollection($drawDeck));
	}

  public function getSlotsContent($faction) {
    foreach($this->slots as $slot) {
      if ($slot->getQuantity()) {
        $cards['quantity'][$slot->getCard()->getType()->getName()][] = $slot;
      }
      if ($slot->getMainDeck()) {
        $cards['main_deck'][$slot->getCard()->getType()->getName()][] = $slot;
      }
      if ($slot->getTechPool()) {
        if ($slot->getCard()->getFaction()->getCode() == $faction) {
          $cards['tech_pool'][$slot->getCard()->getType()->getName()][] = $slot;
        }
        else {
          $cards['tech_pool']['Flex Points'][] = $slot;
        }
      }
    }
    foreach ($cards as $set => $cardset) {
      ksort($cardset);
      $cards[$set] = $cardset;
    }
    $cards['tech_pool'] = array('Flex Points' => $cards['tech_pool']['Flex Points']) + $cards['tech_pool'];

    return $cards;
  }

  public function getMainCards() {
    $arr = array();
    foreach ($this->slots as $slot) {
      $arr[$slot->getCard()->getCode()] = $slot->getMainDeck();
    }
    $arr = array_filter($arr);
    ksort($arr);
    return $arr;
  }

  public function getTechCards() {
    $arr = array();
    foreach ($this->slots as $slot) {
      $arr[$slot->getCard()->getCode()] = $slot->getTechPool();
    }
    $arr = array_filter($arr);
    ksort($arr);
    return $arr;
  }

  public function getContent() {
    $arr = array();
    foreach ($this->slots as $slot) {
      $arr[$slot->getCard()->getCode()] = $slot->getQuantity();
    }
    $arr = array_filter($arr);
    ksort($arr);
    return $arr;
  }
}
