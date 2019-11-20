(function($, Drupal){
  // I want some code to run on page load, so I use Drupal.behaviors
  Drupal.behaviors.invoice = {
    attach:function()
    {

    	$("#edit-field-total-0-value").attr('readonly','readonly');
    	$('.field--name-field-sub-total input').attr('readonly','readonly');
		$('.field--name-field-quantity input').on('input', function() {
		    var element = $(this).parents().parents().parents().parents().attr('data-drupal-selector');
		    var qty = $(this).val();
		    if($('input[data-drupal-selector="'+element +'-subform-field-cost-per-unit-0-value"]').val() != '') {
		    	var costPerUnit = $('input[data-drupal-selector="'+element +'-subform-field-cost-per-unit-0-value"]').val();
		    	var cost = parseFloat(qty) * parseFloat(costPerUnit);
			    var tax = $('input[data-drupal-selector="'+element +'-subform-field-tax-0-value"]').val();
			    var calculatedTax = parseFloat(cost) * parseFloat(tax) * 0.01;
			    var subtotal = parseFloat(calculatedTax) +  parseFloat(cost);
				$('input[data-drupal-selector="'+element+'-subform-field-sub-total-0-value"]').val(subtotal);
		    }
		   
		});
		$('.field--name-field-tax input').on('input', function() {
			var element = $(this).parents().parents().parents().parents().attr('data-drupal-selector');
		   	var tax = $(this).val();

		    if($('input[data-drupal-selector="'+element +'-subform-field-quantity-0-value"]').val() != '') {
		    	var qty = parseFloat($('input[data-drupal-selector="'+element +'-subform-field-quantity-0-value"]').val());
			    var costPerUnit = $('input[data-drupal-selector="'+element +'-subform-field-cost-per-unit-0-value"]').val();
			    var cost = parseFloat(qty) * parseFloat(costPerUnit);
			    var calculatedTax = parseFloat(cost) * parseFloat(tax) * 0.01;
			    var subtotal = parseFloat(calculatedTax) +  parseFloat(cost);
				$('input[data-drupal-selector="'+element +'-subform-field-tax-0-value"]').val(parseFloat(tax));
				$('input[data-drupal-selector="'+element+'-subform-field-sub-total-0-value"]').val(subtotal);
		    }
		});
    }
  };
}(jQuery, Drupal));