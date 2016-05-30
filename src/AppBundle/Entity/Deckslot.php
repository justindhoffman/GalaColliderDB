<?php

namespace AppBundle\Entity;

class Deckslot implements \AppBundle\Model\SlotInterface
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
     * @var \AppBundle\Entity\Deck
     */
    private $deck;

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
     * @return Deckslot
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
     * Set deck
     *
     * @param \AppBundle\Entity\Deck $deck
     *
     * @return Deckslot
     */
    public function setDeck(\AppBundle\Entity\Deck $deck = null)
    {
        $this->deck = $deck;

        return $this;
    }

    /**
     * Get deck
     *
     * @return \AppBundle\Entity\Deck
     */
    public function getDeck()
    {
        return $this->deck;
    }

    /**
     * Set card
     *
     * @param \AppBundle\Entity\Card $card
     *
     * @return Deckslot
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
