import $ from 'jquery'

$(document).ready(function() {
  const $nav = $('.navbar')
  const contentPosition = 128

  $(document).scroll(function() {
    const windowTop = $(this).scrollTop()

    if (windowTop > contentPosition) {
      $nav.addClass('navbar-overlay')
    } else {
      $nav.removeClass('navbar-overlay')
    }
  })
})