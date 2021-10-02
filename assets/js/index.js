


$('.toggle-btn').click(function(){
  $('.very-fast').toggle();
  $('.normal').toggle('fast');
  $('.slow').toggle('slow', function(){
    alert("The toggle effect is completed.");
  });
});

$('.out-btn').click(function(){
  $('p').fadeOut();
})

$('.in-btn').click(function(){
  $('p').fadeIn();
})