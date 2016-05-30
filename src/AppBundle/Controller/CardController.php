<?php

namespace AppBundle\Controller;

use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;

use AppBundle\Entity\Card;
use AppBundle\Form\CardType;

/**
 * Card controller.
 *
 */
class CardController extends Controller
{

    /**
     * Lists all Card entities.
     *
     */
    public function indexAction(Request $request) {
      $q = $request->query->get('q');
      $page = $request->query->get('page') ?: 1;
      $sort = $request->query->get('sort') ?: 'code';
      $order = $request->query->get('order') ?: 'asc';
      $nb_per_page = 50;
      $first = ($page - 1) * $nb_per_page;

      // turn q into search array
      $search = array();
//       $opts = explode(',', $q);
//       foreach ($opts as $opt) {
//         list($key, $val) = explode(':', $opt);
//         $search[$key] = $val;
//       }
// print_r($search);

      $em = $this->getDoctrine()->getManager();
      $total = $em->getRepository('AppBundle:Card')->findBy(
          $search, // TODO search query will go here
          array($sort => $order)
        );
      $cards = $em->getRepository('AppBundle:Card')->findBy(
          $search, // TODO search query will go here
          array($sort => $order),
          $nb_per_page, // max
          $first // offset
        );

      $pagination = $this->pagination($page, count($total), $nb_per_page, $q, $sort, $order);

      return $this->render('AppBundle:Card:index.html.twig', array(
        'q' => $q,
        'page' => $page,
        'sort' => $sort,
        'order' => $order,
        'cards' => $cards,
        'pagination' => $pagination,
        'pagetitle' => "Admin Card List",
      ));
    }

    /**
     * Add pagination (using search paging)
     */
    public function pagination($pageindex, $total, $pagesize, $q, $sort, $order) {
      $pagecount = ceil($total / $pagesize);

      if($total < $pagesize) {
        return NULL;
      }

      $first = "";
      if($pageindex > 2) {
        $first = $this->paginationItem($q, $sort, $order, $pagesize, 1, $total);
      }

      $prev = "";
      if($pageindex > 1) {
        $prev = $this->paginationItem($q, $sort, $order, $pagesize, $pageindex - 1, $total);
      }

      $current = $this->paginationItem('current', $sort, $order, $pagesize, $pageindex, $total);

      $next = "";
      if($pageindex < $pagecount) {
        $next = $this->paginationItem($q, $sort, $order, $pagesize, $pageindex + 1, $total);
      }

      $last = "";
      if($pageindex < $pagecount - 1) {
        $last = $this->paginationItem($q, $sort, $order, $pagesize, $pagecount, $total);
      }

      return $this->renderView('AppBundle:Search:pagination.html.twig', array(
        "first" => $first,
        "prev" => $prev,
        "current" => $current,
        "next" => $next,
        "last" => $last,
        "count" => $total,
        "ellipsisbefore" => $pageindex > 3,
        "ellipsisafter" => $pageindex < $pagecount - 2,
      ));
    }
    public function paginationItem($q = 'current', $s, $o, $ps, $pi, $total) {
      return $this->renderView('AppBundle:Search:paginationitem.html.twig', array(
        "href" => $q == 'current' ? "" : $this->get('router')->generate('admin_card', array('q' => $q, 'sort' => $s, 'order' => $o, 'page' => $pi)),
        "ps" => $ps,
        "pi" => $pi,
        "s" => $ps*($pi-1)+1,
        "e" => min($ps*$pi, $total),
      ));
    }

    /**
     * Creates a new Card entity.
     *
     */
    public function createAction(Request $request)
    {
        $entity  = new Card();
        $form = $this->createForm(new CardType(), $entity);
        $form->bind($request);

        if ($form->isValid()) {
            $em = $this->getDoctrine()->getManager();
            $em->persist($entity);
            $em->flush();

            return $this->redirect($this->generateUrl('admin_card_show', array('id' => $entity->getId())));
        }

        return $this->render('AppBundle:Card:new.html.twig', array(
            'entity' => $entity,
            'form'   => $form->createView(),
        ));
    }

    /**
     * Displays a form to create a new Card entity.
     *
     */
    public function newAction()
    {
        $entity = new Card();
        $form   = $this->createForm(new CardType(), $entity);

        return $this->render('AppBundle:Card:new.html.twig', array(
            'entity' => $entity,
            'form'   => $form->createView(),
        ));
    }

    /**
     * Finds and displays a Card entity.
     *
     */
    public function showAction($id)
    {
        $em = $this->getDoctrine()->getManager();

        $entity = $em->getRepository('AppBundle:Card')->find($id);

        if (!$entity) {
            throw $this->createNotFoundException('Unable to find Card entity.');
        }

        $deleteForm = $this->createDeleteForm($id);

        return $this->render('AppBundle:Card:show.html.twig', array(
            'entity'      => $entity,
            'delete_form' => $deleteForm->createView(),        ));
    }

    /**
     * Displays a form to edit an existing Card entity.
     *
     */
    public function editAction($id)
    {
        $em = $this->getDoctrine()->getManager();

        $entity = $em->getRepository('AppBundle:Card')->find($id);

        if (!$entity) {
            throw $this->createNotFoundException('Unable to find Card entity.');
        }

        $editForm = $this->createForm(new CardType(), $entity);
        $deleteForm = $this->createDeleteForm($id);

        return $this->render('AppBundle:Card:edit.html.twig', array(
            'entity'      => $entity,
            'edit_form'   => $editForm->createView(),
            'delete_form' => $deleteForm->createView(),
        ));
    }

    /**
     * Edits an existing Card entity.
     *
     */
    public function updateAction(Request $request, $id)
    {
        $em = $this->getDoctrine()->getManager();

        $entity = $em->getRepository('AppBundle:Card')->find($id);

        if (!$entity) {
            throw $this->createNotFoundException('Unable to find Card entity.');
        }

        $deleteForm = $this->createDeleteForm($id);
        $editForm = $this->createForm(new CardType(), $entity);
        $editForm->bind($request);

        if ($editForm->isValid()) {
            $em->persist($entity);
            $em->flush();

            return $this->redirect($this->generateUrl('admin_card_edit', array('id' => $id)));
        }

        return $this->render('AppBundle:Card:edit.html.twig', array(
            'entity'      => $entity,
            'edit_form'   => $editForm->createView(),
            'delete_form' => $deleteForm->createView(),
        ));
    }
    /**
     * Deletes a Card entity.
     *
     */
    public function deleteAction(Request $request, $id)
    {
        $form = $this->createDeleteForm($id);
        $form->bind($request);

        if ($form->isValid()) {
            $em = $this->getDoctrine()->getManager();
            $entity = $em->getRepository('AppBundle:Card')->find($id);

            if (!$entity) {
                throw $this->createNotFoundException('Unable to find Card entity.');
            }

            $em->remove($entity);
            $em->flush();
        }

        return $this->redirect($this->generateUrl('admin_card'));
    }

    /**
     * Creates a form to delete a Card entity by id.
     *
     * @param mixed $id The entity id
     *
     * @return \Symfony\Component\Form\Form The form
     */
    private function createDeleteForm($id)
    {
        return $this->createFormBuilder(array('id' => $id))
            ->add('id', 'hidden')
            ->getForm()
        ;
    }
}
