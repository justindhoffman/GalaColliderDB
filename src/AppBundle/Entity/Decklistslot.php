<?php

namespace AppBundle\Entity;

class Decklistslot implements \AppBundle\Model\SlotInterface
{
	
    /**
     * @var integer
     */
    private $id;

    /**
     * @var integer
     */
    private $quantity;

    /**
     * @var integer
     */
    private $mainDeck;

    /**
     * @var integer
     */
    private $techPool;

    /**
     * @var \AppBundle\Entity\Decklist
     */
    private $decklist;

    /**
     * @var \AppBundle\Entity\Card
     */
    private $card;


    /**
     * Get id
     *
     * @return integer
     */
    public function getId()
    {
        return $this->id;
    }

    /**
     * Set quantity
     *
     * @param integer $quantity
     *
     * @return Decklistslot
     */
    public function setQuantity($quantity)
    {
        $this->quantity = $quantity;

        return $this;
    }

    /**
     * Get quantity
     *
     * @return integer
     */
    public function getQuantity()
    {
        return $this->quantity;
    }

    /**
     * Set mainDeck
     *
     * @param integer $mainDeck
     *
     * @return Deckslot
     */
    public function setMainDeck($mainDeck)
    {
        $this->mainDeck = $mainDeck;

        return $this;
    }

    /**
     * Get mainDeck
     *
     * @return integer
     */
    public function getMainDeck()
    {
        return $this->mainDeck;
    }

    /**
     * Set techPool
     *
     * @param integer $techPool
     *
     * @return Deckslot
     */
    public function setTechPool($techPool)
    {
        $this->techPool = $techPool;

        return $this;
    }

    /**
     * Get techPool
     *
     * @return integer
     */
    public function getTechPool()
    {
        return $this->techPool;
    }

    /**
     * Set decklist
     *
     * @param \AppBundle\Entity\Decklist $decklist
     *
     * @return Decklistslot
     */
    public function setDecklist(\AppBundle\Entity\Decklist $decklist = null)
    {
        $this->decklist = $decklist;

        return $this;
    }

    /**
     * Get decklist
     *
     * @return \AppBundle\Entity\Decklist
     */
    public function getDecklist()
    {
        return $this->decklist;
    }

    /**
     * Set card
     *
     * @param \AppBundle\Entity\Card $card
     *
     * @return Decklistslot
     */
    public function setCard(\AppBundle\Entity\Card $card = null)
    {
        $this->card = $card;

        return $this;
    }

    /**
     * Get card
     *
     * @return \AppBundle\Entity\Card
     */
    public function getCard()
    {
        return $this->card;
    }
}
