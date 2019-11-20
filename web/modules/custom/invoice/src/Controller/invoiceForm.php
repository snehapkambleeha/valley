<?php

namespace Drupal\invoice\Controller;

use Drupal\Core\Controller\ControllerBase;

/**
 * Description of ImporterFileUploadReport.
 */
class invoiceForm extends ControllerBase {

  function buildForm() {
    //get the of node type
    $type = array('type' => 'invoice');
    $node = \Drupal::entityTypeManager()
            ->getStorage('node')
            ->create($type);
    //get default form for Content type invoice
    $form = \Drupal::entityTypeManager()
            ->getFormObject('node', 'default')
            ->setEntity($node);
    return \Drupal::formBuilder()->getForm($form);
  }

}
