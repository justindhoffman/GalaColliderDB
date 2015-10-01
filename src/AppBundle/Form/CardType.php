<?php

namespace AppBundle\Form;

use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolverInterface;

class CardType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder
// all card types
            ->add('type', 'entity', array('class' => 'AppBundle:Type', 'property' => 'name'))
            ->add('code', 'text', array('label' => 'Card ID'))
            ->add('name')
            ->add('class')
            ->add('faction', 'entity', array('class' => 'AppBundle:Faction', 'property' => 'name'))
            ->add('materials')
            ->add('research')
            ->add('energy')
            ->add('tech_level', 'choice', array(
              'choices' => array(
                0 => 0,
                1 => 1,
                2 => 2,
                3 => 3,
              ),
              'label' => 'Tech. Level',
            ))
            ->add('effect')
            ->add('oper_type', 'choice', array(
              'choices' => array(
                'Infinite' => 'Infinite',
                'Void' => 'Void',
              ),
              'required' => false,
            ))
            ->add('phase', 'choice', array(
              'choices' => array(
                'Any' => 'Any',
                'Explore' => 'Explore',
                'Battle' => 'Battle',
              ),
              'required' => false,
            ))
            ->add('attack')
            ->add('size', 'choice', array(
              'choices' => array(
                'Frigate' => 'Frigate',
                'Cruiser' => 'Cruiser',
                'Dreadnaught' => 'Dreadnaught',
              ),
              'required' => false,
            ))
            ->add('hull')
            ->add('module_one')
            ->add('modval_one')
            ->add('module_two')
            ->add('modval_two')
            ->add('module_three')
            ->add('modval_three')
            ->add('engines')
            ->add('fuel_cost')
            ->add('structure')
            ->add('is_hq', 'checkbox', array('required' => false))
            ->add('is_unique', 'checkbox', array('required' => false))
            ->add('min_deck')
            ->add('tech_slots')
            ->add('flex_points')
            ->add('stars')
            ->add('build_slot')
            ->add('infantry')
            ->add('space_attack')
// all card types
            ->add('flavor', 'textarea', array('required' => false))
            ->add('art_credit')
            ->add('pack', 'entity', array('class' => 'AppBundle:Pack', 'property' => 'name'))
            ->add('position')
            ->add('quantity')
            ;
    }

    public function setDefaultOptions(OptionsResolverInterface $resolver)
    {
        $resolver->setDefaults(array(
            'data_class' => 'AppBundle\Entity\Card'
        ));
    }

    public function getName()
    {
        return 'thronesdb_cardsbundle_cardtype';
    }
}
