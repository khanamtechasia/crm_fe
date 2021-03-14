// daterangerpicker
	$(function() {
	  $('input[name="datefilter"]').daterangepicker({
	      autoUpdateInput: false,
	      autoApply: true,
	      singleDatePicker: true,
	      locale: {
	          cancelLabel: 'Clear'
	      }
	  });
	  $('input[name="datefilter"]').on('apply.daterangepicker', function(ev, picker) {
	      $(this).val(picker.startDate.format('MM/DD/YYYY'));
	  });

	});