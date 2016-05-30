<?php

namespace AppBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Response;
use AppBundle\Model\DecklistManager;
use AppBundle\Entity\Decklist;

class DefaultController extends Controller
{

    public function indexAction()
    {
        $response = new Response();
        $response->setPublic();
        $response->setMaxAge($this->container->getParameter('cache_expiration'));

        /** 
         * @var $decklist_manager DecklistManager  
         */
        $decklist_manager = $this->get('decklist_manager');
        $decklist_manager->setLimit(1);
        
        $typeNames = [];
        foreach($this->getDoctrine()->getRepository('AppBundle:Type')->findAll() as $type) {
        	$typeNames[$type->getCode()] = $type->getName();
        }
        
        $decklists_by_faction = [];
        $factions = $this->getDoctrine()->getRepository('AppBundle:Faction')->findBy(['is_primary' => true], ['code' => 'ASC']);
        
        foreach($factions as $faction) 
        {
            $array = [];
            $array['faction'] = $faction;

        	$decklist_manager->setFaction($faction);
        	$paginator = $decklist_manager->findDecklistsByPopularity();
        	/**
        	 * @var $decklist Decklist
        	 */
            $decklist = $paginator->getIterator()->current();
            
            if($decklist) 
            {
                $array['decklist'] = $decklist;

                $array['count_by_type'] = $decklist->getSlots()->countCards() . ' cards';

                $factions = [ $faction->getName() ];
                $agenda = $decklist->getSlots()->getAgenda();
                if($agenda) {
                    $minor_faction = $this->get('agenda_helper')->getMinorFaction($agenda);
                    if($minor_faction) {
                    	$factions[] = $minor_faction->getName();
                    } else {
                        $factions[] = $agenda->getName();
                    }
                }
                $array['factions'] = join(' / ', $factions);

                $decklists_by_faction[] = $array;
            }
        }

        return $this->render('AppBundle:Default:index.html.twig', [
            'pagetitle' => "GalaCollider Deckbuilder",
            'pagedescription' => "Browse through all the cards currently released for GalaCollider. Future community deck list deck builder.",
            'decklists_by_faction' => $decklists_by_faction
        ], $response);
    }

    function rulesAction()
    {
    	$response = new Response();
    	$response->setPublic();
    	$response->setMaxAge($this->container->getParameter('cache_expiration'));

    	$page = $this->get('cards_data')->replaceSymbols($this->renderView('AppBundle:Default:rules.html.twig',
    			array("pagetitle" => "Rules", "pagedescription" => "Refer to the official rules of the game.")));
    	$response->setContent($page);
    	return $response;
    }

    function aboutAction()
    {
    	$response = new Response();
    	$response->setPublic();
    	$response->setMaxAge($this->container->getParameter('cache_expiration'));

    	return $this->render('AppBundle:Default:about.html.twig', array(
    			"pagetitle" => "About",
    	), $response);
    }

    function apidocAction()
    {
    	$response = new Response();
    	$response->setPublic();
    	$response->setMaxAge($this->container->getParameter('cache_expiration'));

    	return $this->render('AppBundle:Default:apidoc.html.twig', array(
    			"pagetitle" => "API documentation",
    	), $response);
    }
}
