<?php

namespace Drupal\invoice\Controller;

use Drupal\Core\Controller\ControllerBase;
/**
 * Description of ImporterFileUploadReport.
 */
class invoiceForm extends ControllerBase {
  function buildForm(){
   $values = array('type' => 'invoice');

	$node = \Drupal::entityTypeManager()
	  ->getStorage('node')
	  ->create($values);

	$form = \Drupal::entityTypeManager()
	  ->getFormObject('node', 'default')
	  ->setEntity($node);
	return \Drupal::formBuilder()->getForm($form);
	}
}