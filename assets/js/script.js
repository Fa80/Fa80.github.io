$('h1, #skill').click(function(){
  $('#skill, #education, #projet, #experience').fadeIn();
});
$('#educationNav').click(function(){
  $('#skill').slideUp();
  $('#education, #projet, #experience').fadeIn();
});
$('#projetNav').click(function(){
  $('#skill, #education').slideUp();
  $('#projet, #experience').fadeIn();
});
$('#experienceNav').click(function(){
  $('#skill, #education, #projet').slideUp();
  $('#experience').fadeIn();
});
