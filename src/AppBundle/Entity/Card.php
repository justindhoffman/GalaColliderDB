<?php

namespace AppBundle\Entity;

class Card
{

    /**
     * @var integer
     */
    private $id;

    /**
     * @var \AppBundle\Entity\Type
     */
    private $type;

    /**
     * @var string
     */
    private $name;

    /**
     * @var string
     */
    private $code;

    /**
     * @var \AppBundle\Entity\Faction
     */
    private $faction;

    /**
     * @var integer
     */
    private $materials;

    /**
     * @var integer
     */
    private $research;

    /**
     * @var integer
     */
    private $energy;

    /**
     * @var integer
     */
    private $techLevel;

    /**
     * @var string
     */
    private $class;

    /**
     * @var string
     */
    private $effect;

    /**
     * @var string
     */
    private $operType;

    /**
     * @var string
     */
    private $phase;

    /**
     * @var integer
     */
    private $attack;

    /**
     * @var string
     */
    private $size;

    /**
     * @var integer
     */
    private $hull;

    /**
     * @var string
     */
    private $moduleOne;

    /**
     * @var integer
     */
    private $modvalOne;

    /**
     * @var string
     */
    private $moduleTwo;

    /**
     * @var integer
     */
    private $modvalTwo;

    /**
     * @var string
     */
    private $moduleThree;

    /**
     * @var integer
     */
    private $modvalThree;

    /**
     * @var integer
     */
    private $engines;

    /**
     * @var integer
     */
    private $fuelCost;

    /**
     * @var integer
     */
    private $structure;

    /**
     * @var boolean
     */
    private $isHQ;

    /**
     * @var boolean
     */
    private $isUnique;

    /**
     * @var integer
     */
    private $minDeck;

    /**
     * @var integer
     */
    private $techSlots;

    /**
     * @var integer
     */
    private $flexPoints;

    /**
     * @var integer
     */
    private $stars;

    /**
     * @var integer
     */
    private $buildSlot;

    /**
     * @var integer
     */
    private $infantry;

    /**
     * @var integer
     */
    private $spaceAttack;

    /**
     * @var string
     */
    private $flavor;

    /**
     * @var string
     */
    private $artCredit;

    /**
     * @var string
     */
    private $cardSet;

    /**
     * @var \AppBundle\Entity\Pack
     */
    private $pack;

    /**
     * @var \DateTime
     */
    private $dateCreation;

    /**
     * @var \DateTime
     */
    private $dateUpdate;

    /**
     * @var \Doctrine\Common\Collections\Collection
     */
    private $reviews;

    /**
     * @var integer
     */
    private $quantity;

    /**
     * @var integer
     */
    private $position;

    /**
     * Constructor
     */
    public function __construct()
    {
        $this->reviews = new \Doctrine\Common\Collections\ArrayCollection();
    }

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
     * Set type
     *
     * @param \AppBundle\Entity\Type $type
     *
     * @return Card
     */
    public function setType(\AppBundle\Entity\Type $type = null)
    {
        $this->type = $type;

        return $this;
    }

    /**
     * Get type
     *
     * @return \AppBundle\Entity\Type
     */
    public function getType()
    {
        return $this->type;
    }

    /**
     * Set name
     *
     * @param string $name
     *
     * @return Card
     */
    public function setName($name)
    {
        $this->name = $name;

        return $this;
    }

    /**
     * Get name
     *
     * @return string
     */
    public function getName()
    {
        return $this->name;
    }

    /**
     * Set code
     *
     * @param string $code
     *
     * @return Card
     */
    public function setCode($code)
    {
        $this->code = $code;

        return $this;
    }

    /**
     * Get code
     *
     * @return string
     */
    public function getCode()
    {
        return $this->code;
    }

    /**
     * Set faction
     *
     * @param \AppBundle\Entity\Faction $faction
     *
     * @return Card
     */
    public function setFaction(\AppBundle\Entity\Faction $faction = null)
    {
        $this->faction = $faction;

        return $this;
    }

    /**
     * Get faction
     *
     * @return \AppBundle\Entity\Faction
     */
    public function getFaction()
    {
        return $this->faction;
    }

    /**
     * Set materials
     *
     * @param integer $materials
     *
     * @return Card
     */
    public function setMaterials($materials)
    {
        $this->materials = $materials;

        return $this;
    }

    /**
     * Get materials
     *
     * @return integer
     */
    public function getMaterials()
    {
        return $this->materials;
    }

    /**
     * Set research
     *
     * @param integer $research
     *
     * @return Card
     */
    public function setResearch($research)
    {
        $this->research = $research;

        return $this;
    }

    /**
     * Get research
     *
     * @return integer
     */
    public function getResearch()
    {
        return $this->research;
    }

    /**
     * Set energy
     *
     * @param integer $energy
     *
     * @return Card
     */
    public function setEnergy($energy)
    {
        $this->energy = $energy;

        return $this;
    }

    /**
     * Get energy
     *
     * @return integer
     */
    public function getEnergy()
    {
        return $this->energy;
    }

    /**
     * Set techLevel
     *
     * @param integer $techLevel
     *
     * @return Card
     */
    public function setTechLevel($techLevel)
    {
        $this->techLevel = $techLevel;

        return $this;
    }

    /**
     * Get techLevel
     *
     * @return integer
     */
    public function getTechLevel()
    {
        return $this->techLevel;
    }

    /**
     * Set class
     *
     * @param integer $class
     *
     * @return Card
     */
    public function setClass($class)
    {
        $this->class = $class;

        return $this;
    }

    /**
     * Get class
     *
     * @return integer
     */
    public function getClass()
    {
        return $this->class;
    }

    /**
     * Set effect
     *
     * @param string $effect
     *
     * @return Card
     */
    public function setEffect($effect)
    {
        $this->effect = $effect;

        return $this;
    }

    /**
     * Get effect
     *
     * @return string
     */
    public function getEffect()
    {
        return $this->effect;
    }

    /**
     * Set operType
     *
     * @param string $operType
     *
     * @return Card
     */
    public function setOperType($operType)
    {
        $this->operType = $operType;

        return $this;
    }

    /**
     * Get operType
     *
     * @return string
     */
    public function getOperType()
    {
        return $this->operType;
    }

    /**
     * Set phase
     *
     * @param string $phase
     *
     * @return Card
     */
    public function setPhase($phase)
    {
        $this->phase = $phase;

        return $this;
    }

    /**
     * Get phase
     *
     * @return string
     */
    public function getPhase()
    {
        return $this->phase;
    }

    /**
     * Set attack
     *
     * @param integer $attack
     *
     * @return Card
     */
    public function setAttack($attack)
    {
        $this->attack = $attack;

        return $this;
    }

    /**
     * Get attack
     *
     * @return integer
     */
    public function getAttack()
    {
        return $this->attack;
    }

    /**
     * Set size
     *
     * @param string $size
     *
     * @return Card
     */
    public function setSize($size)
    {
        $this->size = $size;

        return $this;
    }

    /**
     * Get size
     *
     * @return string
     */
    public function getSize()
    {
        return $this->size;
    }

    /**
     * Set hull
     *
     * @param integer $hull
     *
     * @return Card
     */
    public function setHull($hull)
    {
        $this->hull = $hull;

        return $this;
    }

    /**
     * Get hull
     *
     * @return integer
     */
    public function getHull()
    {
        return $this->hull;
    }

    /**
     * Set moduleOne
     *
     * @param string $moduleOne
     *
     * @return Card
     */
    public function setModuleOne($moduleOne)
    {
        $this->moduleOne = $moduleOne;

        return $this;
    }

    /**
     * Get moduleOne
     *
     * @return string
     */
    public function getModuleOne()
    {
        return $this->moduleOne;
    }

    /**
     * Set modvalOne
     *
     * @param integer $modvalOne
     *
     * @return Card
     */
    public function setModvalOne($modvalOne)
    {
        $this->modvalOne = $modvalOne;

        return $this;
    }

    /**
     * Get modvalOne
     *
     * @return integer
     */
    public function getModvalOne()
    {
        return $this->modvalOne;
    }

    /**
     * Set moduleTwo
     *
     * @param string $moduleTwo
     *
     * @return Card
     */
    public function setModuleTwo($moduleTwo)
    {
        $this->moduleTwo = $moduleTwo;

        return $this;
    }

    /**
     * Get moduleTwo
     *
     * @return string
     */
    public function getModuleTwo()
    {
        return $this->moduleTwo;
    }

    /**
     * Set modvalTwo
     *
     * @param integer $modvalTwo
     *
     * @return Card
     */
    public function setModvalTwo($modvalTwo)
    {
        $this->modvalTwo = $modvalTwo;

        return $this;
    }

    /**
     * Get modvalTwo
     *
     * @return integer
     */
    public function getModvalTwo()
    {
        return $this->modvalTwo;
    }

    /**
     * Set moduleThree
     *
     * @param string $moduleThree
     *
     * @return Card
     */
    public function setModuleThree($moduleThree)
    {
        $this->moduleThree = $moduleThree;

        return $this;
    }

    /**
     * Get moduleThree
     *
     * @return string
     */
    public function getModuleThree()
    {
        return $this->moduleThree;
    }

    /**
     * Set modvalThree
     *
     * @param integer $modvalThree
     *
     * @return Card
     */
    public function setModvalThree($modvalThree)
    {
        $this->modvalThree = $modvalThree;

        return $this;
    }

    /**
     * Get modvalThree
     *
     * @return integer
     */
    public function getModvalThree()
    {
        return $this->modvalThree;
    }

    /**
     * Set engines
     *
     * @param integer $engines
     *
     * @return Card
     */
    public function setEngines($engines)
    {
        $this->engines = $engines;

        return $this;
    }

    /**
     * Get engines
     *
     * @return integer
     */
    public function getEngines()
    {
        return $this->engines;
    }

    /**
     * Set fuelCost
     *
     * @param integer $fuelCost
     *
     * @return Card
     */
    public function setFuelCost($fuelCost)
    {
        $this->fuelCost = $fuelCost;

        return $this;
    }

    /**
     * Get fuelCost
     *
     * @return integer
     */
    public function getFuelCost()
    {
        return $this->fuelCost;
    }

    /**
     * Set structure
     *
     * @param integer $structure
     *
     * @return Card
     */
    public function setStructure($structure)
    {
        $this->structure = $structure;

        return $this;
    }

    /**
     * Get structure
     *
     * @return integer
     */
    public function getStructure()
    {
        return $this->structure;
    }

    /**
     * Set isHQ
     *
     * @param boolean $isHQ
     *
     * @return Card
     */
    public function setIsHQ($isHQ)
    {
        $this->isHQ = $isHQ;

        return $this;
    }

    /**
     * Get isHQ
     *
     * @return boolean
     */
    public function getIsHQ()
    {
        return $this->isHQ;
    }

    /**
     * Set isUnique
     *
     * @param boolean $isUnique
     *
     * @return Card
     */
    public function setIsUnique($isUnique)
    {
        $this->isUnique = $isUnique;

        return $this;
    }

    /**
     * Get isUnique
     *
     * @return boolean
     */
    public function getIsUnique()
    {
        return $this->isUnique;
    }

    /**
     * Set minDeck
     *
     * @param integer $minDeck
     *
     * @return Card
     */
    public function setMinDeck($minDeck)
    {
        $this->minDeck = $minDeck;

        return $this;
    }

    /**
     * Get minDeck
     *
     * @return integer
     */
    public function getMinDeck()
    {
        return $this->minDeck;
    }

    /**
     * Set techSlots
     *
     * @param integer $techSlots
     *
     * @return Card
     */
    public function setTechSlots($techSlots)
    {
        $this->techSlots = $techSlots;

        return $this;
    }

    /**
     * Get techSlots
     *
     * @return integer
     */
    public function getTechSlots()
    {
        return $this->techSlots;
    }

    /**
     * Set flexPoints
     *
     * @param integer $flexPoints
     *
     * @return Card
     */
    public function setFlexPoints($flexPoints)
    {
        $this->flexPoints = $flexPoints;

        return $this;
    }

    /**
     * Get flexPoints
     *
     * @return integer
     */
    public function getFlexPoints()
    {
        return $this->flexPoints;
    }

    /**
     * Set stars
     *
     * @param integer $stars
     *
     * @return Card
     */
    public function setStars($stars)
    {
        $this->stars = $stars;

        return $this;
    }

    /**
     * Get stars
     *
     * @return integer
     */
    public function getStars()
    {
        return $this->stars;
    }

    /**
     * Set buildSlot
     *
     * @param integer $buildSlot
     *
     * @return Card
     */
    public function setBuildSlot($buildSlot)
    {
        $this->buildSlot = $buildSlot;

        return $this;
    }

    /**
     * Get buildSlot
     *
     * @return integer
     */
    public function getBuildSlot()
    {
        return $this->buildSlot;
    }

    /**
     * Set infantry
     *
     * @param integer $infantry
     *
     * @return Card
     */
    public function setInfantry($infantry)
    {
        $this->infantry = $infantry;

        return $this;
    }

    /**
     * Get infantry
     *
     * @return integer
     */
    public function getInfantry()
    {
        return $this->infantry;
    }

    /**
     * Set spaceAttack
     *
     * @param integer $spaceAttack
     *
     * @return Card
     */
    public function setSpaceAttack($spaceAttack)
    {
        $this->spaceAttack = $spaceAttack;

        return $this;
    }

    /**
     * Get spaceAttack
     *
     * @return integer
     */
    public function getSpaceAttack()
    {
        return $this->spaceAttack;
    }

    /**
     * Set flavor
     *
     * @param string $flavor
     *
     * @return Card
     */
    public function setFlavor($flavor)
    {
        $this->flavor = $flavor;

        return $this;
    }

    /**
     * Get flavor
     *
     * @return string
     */
    public function getFlavor()
    {
        return $this->flavor;
    }

    /**
     * Set artCredit
     *
     * @param string $artCredit
     *
     * @return Card
     */
    public function setArtCredit($artCredit)
    {
        $this->artCredit = $artCredit;

        return $this;
    }

    /**
     * Get artCredit
     *
     * @return string
     */
    public function getArtCredit()
    {
        return $this->artCredit;
    }

    /**
     * Set cardSet
     *
     * @param string $cardSet
     *
     * @return Card
     */
    public function setCardSet($cardSet)
    {
        $this->cardSet = $cardSet;

        return $this;
    }

    /**
     * Get cardSet
     *
     * @return string
     */
    public function getCardSet()
    {
        return $this->cardSet;
    }

    /**
     * Set pack
     *
     * @param \AppBundle\Entity\Pack $pack
     *
     * @return Card
     */
    public function setPack(\AppBundle\Entity\Pack $pack = null)
    {
        $this->pack = $pack;

        return $this;
    }

    /**
     * Get pack
     *
     * @return \AppBundle\Entity\Pack
     */
    public function getPack()
    {
        return $this->pack;
    }

    /**
     * Set dateCreation
     *
     * @param \DateTime $dateCreation
     *
     * @return Card
     */
    public function setDateCreation($dateCreation)
    {
        $this->dateCreation = $dateCreation;

        return $this;
    }

    /**
     * Get dateCreation
     *
     * @return \DateTime
     */
    public function getDateCreation()
    {
        return $this->dateCreation;
    }

    /**
     * Set dateUpdate
     *
     * @param \DateTime $dateUpdate
     *
     * @return Card
     */
    public function setDateUpdate($dateUpdate)
    {
        $this->dateUpdate = $dateUpdate;

        return $this;
    }

    /**
     * Get dateUpdate
     *
     * @return \DateTime
     */
    public function getDateUpdate()
    {
        return $this->dateUpdate;
    }

    /**
     * Add review
     *
     * @param \AppBundle\Entity\Review $review
     *
     * @return Card
     */
    public function addReview(\AppBundle\Entity\Review $review)
    {
        $this->reviews[] = $review;

        return $this;
    }

    /**
     * Remove review
     *
     * @param \AppBundle\Entity\Review $review
     */
    public function removeReview(\AppBundle\Entity\Review $review)
    {
        $this->reviews->removeElement($review);
    }

    /**
     * Get reviews
     *
     * @return \Doctrine\Common\Collections\Collection
     */
    public function getReviews()
    {
        return $this->reviews;
    }

    /**
     * Set position
     *
     * @param integer $position
     *
     * @return Card
     */
    public function setPosition($position)
    {
        $this->position = $position;

        return $this;
    }

    /**
     * Get position
     *
     * @return integer
     */
    public function getPosition()
    {
        return $this->position;
    }

    /**
     * Set quantity
     *
     * @param integer $quantity
     *
     * @return Card
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
}
