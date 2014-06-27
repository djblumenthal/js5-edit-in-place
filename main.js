$(document).on('ready', function() {
  $('.editable').on('click', function(){
  	var initialText = $(this);

  	// add the input box to the profile
  	var inputBox = $('<textarea class="input-box"></textarea>');
  	$(this).after(inputBox);

  	// set height equal to original profile text box & add initial content
  	inputBox.height($(this).height()).text($(this).text());

  	// hide original textbox
  	$(this).hide();

  	// focus on inputBox
  	inputBox.focus();

  	inputBox.on('blur', function(){
  		$(this).hide();
  		$(this).prev().show();
  		initialText.text($(this).val());
  	});






/*  	contentEditable functionality; separate from assignment
  	$('.profile-text').attr('contentEditable','true');*/


  });
});