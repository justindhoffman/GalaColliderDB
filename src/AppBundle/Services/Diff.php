<?php


namespace AppBundle\Services;

use Doctrine\ORM\EntityManager;
use Symfony\Component\HttpFoundation\Request;

class Diff
{
    public function __construct(EntityManager $doctrine)
    {
        $this->em = $doctrine;
    }
    
    public function diffContents($decks)
    {
      // return what's changed for each card since last variation = array(changes, base)
      $change = array();
      foreach ($decks[0] as $cid => $card) {
        $card = (array) $card;
        foreach ($card as $key => $qty) {
          $new = isset($decks[1][$cid]) ? (array) $decks[1][$cid] : array();
          if (!isset($new[$key])) {
            $change[$cid][$key] = $qty;
          }
          else {
            if ($qty != $new[$key]) {
              $change[$cid][$key] = $qty - $new[$key];
            }
          }
        }
      }

      return array($change, $decks[0]);
    }
}