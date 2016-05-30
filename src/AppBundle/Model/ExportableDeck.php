<?php

namespace AppBundle\Model;

class ExportableDeck
{
	public function getArrayExport($withUnsavedChanges = false)
	{
		$slots = $this->getSlots();
		$array = [
				'id' => $this->getId(),
				'name' => $this->getName(),
				'date_creation' => $this->getDateCreation()->format('r'),
				'date_update' => $this->getDateUpdate()->format('r'),
				'description_md' => $this->getDescriptionMd(),
				'user_id' => $this->getUser()->getId(),
				'faction_code' => $this->getFaction()->getCode(),
				'faction_name' => $this->getFaction()->getName(),
        'slots' => $slots->getContent(),
        'main_deck' => $slots->getMainCards(),
				'tech_pool' => $slots->getTechCards(),
				'coreworld_code' => $this->getCoreWorld()->getCode(),
        'agenda_code' => $slots->getAgenda() ? $slots->getAgenda()->getCode() : null,
		];

		return $array;
	}
	
	public function getTextExport() 
	{
		$slots = $this->getSlots();
		return [
				'name' => $this->getName(),
        'user' => $this->getUser(),
        'description_md' => $this->getDescriptionMd(),
        'date_created' => $this->getDateCreation()->format('r'),
        'date_updated' => $this->getDateUpdate()->format('r'),
        'faction' => $this->getFaction(),
        'faction_name' => $this->getFaction()->getName(),
        'faction_code' => $this->getFaction()->getCode(),
				'coreworld' => $this->getCoreWorld(),
        'id' => $this->getId(),
        'name' => $this->getName(),
        'slots' => $slots->getContent(),
        'full_slots' => $slots->getSlotsContent($this->getFaction()->getCode()),
		];
	}
}