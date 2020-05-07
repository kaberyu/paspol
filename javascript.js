$(function () {
  $('#bg-slider').bgSwitcher({
    images: ['img/bg/main_visual1.jpg', 'img/bg/main_visual2.jpg', 'img/bg/main_visual3.jpg', 'img/bg/main_visual4.jpg', 'img/bg/main_visual5.jpg'],
    interval: 5000
  });

  $('#header-spmenu').click(function () {
    $('#header-list').slideToggle();
  });

  $('#sns-scroll').click(function () {
    $('html, body').animate({
      'scrollTop': 0
    }, 1000);
  });
});
