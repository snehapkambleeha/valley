(function ($, Drupal) {
  Drupal.behaviors.invoice = {
    attach: function ()
    {
      //readonly fields of total amount and sub totla of invoice row
      $("#edit-field-total-0-value").attr('readonly', 'readonly');
      $('.field--name-field-sub-total input').attr('readonly', 'readonly');
      //calculate the amount on quantity change
      $('.field--name-field-quantity input').on('input', function () {
        var element = $(this).parents().parents().parents().parents().attr('data-drupal-selector');
        var qty = $(this).val();
        if ($('input[data-drupal-selector="' + element + '-subform-field-cost-per-unit-0-value"]').val() != '') {
          var costPerUnit = $('input[data-drupal-selector="' + element + '-subform-field-cost-per-unit-0-value"]').val();
          var cost = parseFloat(qty) * parseFloat(costPerUnit);
          var tax = $('input[data-drupal-selector="' + element + '-subform-field-tax-0-value"]').val();
          var calculatedTax = parseFloat(cost) * parseFloat(tax) * 0.01;
          var subtotal = parseFloat(calculatedTax) + parseFloat(cost);
          $('input[data-drupal-selector="' + element + '-subform-field-sub-total-0-value"]').val(subtotal);
        }

      });
      //calculate the amount on cost change
      $('.field--name-field-cost-per-unit input').on('input', function () {
        var element = $(this).parents().parents().parents().parents().attr('data-drupal-selector');
        var costPerUnit = $(this).val();
        if ($('input[data-drupal-selector="' + element + '-subform-field-quantity-0-value"]').val() != '') {
          var qty = parseFloat($('input[data-drupal-selector="' + element + '-subform-field-quantity-0-value"]').val());
          var tax = $('input[data-drupal-selector="' + element + '-subform-field-tax-0-value"]').val();
          var cost = parseFloat(qty) * parseFloat(costPerUnit);
          var calculatedTax = parseFloat(cost) * parseFloat(tax) * 0.01;
          var subtotal = parseFloat(calculatedTax) + parseFloat(cost);
          $('input[data-drupal-selector="' + element + '-subform-field-sub-total-0-value"]').val(subtotal);
        }
      });
      //calculate the amount on tax change
      $('.field--name-field-tax input').on('input', function () {
        var element = $(this).parents().parents().parents().parents().attr('data-drupal-selector');
        var tax = $(this).val();
        if ($('input[data-drupal-selector="' + element + '-subform-field-quantity-0-value"]').val() != '') {
          var qty = parseFloat($('input[data-drupal-selector="' + element + '-subform-field-quantity-0-value"]').val());
          var costPerUnit = $('input[data-drupal-selector="' + element + '-subform-field-cost-per-unit-0-value"]').val();
          var cost = parseFloat(qty) * parseFloat(costPerUnit);
          var calculatedTax = parseFloat(cost) * parseFloat(tax) * 0.01;
          var subtotal = parseFloat(calculatedTax) + parseFloat(cost);
          $('input[data-drupal-selector="' + element + '-subform-field-sub-total-0-value"]').val(subtotal);
        }
      });
    }
  };
}(jQuery, Drupal));