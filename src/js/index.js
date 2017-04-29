import $ from 'jquery'

$(document).ready(function() {
  const $nav = $('.navbar')
  const contentPosition = 128

  $(document).scroll(function() {
    const windowTop = $(this).scrollTop()

    if (windowTop > contentPosition) {
      console.log(true)
      $nav.addClass('navbar-overlay')
    } else {
      console.log(false)
      $nav.removeClass('navbar-overlay')
    }
  })
})