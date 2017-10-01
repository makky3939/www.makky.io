import $ from 'jquery'

$(document).ready(function() {
  const $navbar = $('.navbar')
  const contentPosition = 128

  $(document).scroll(function() {
    const windowTop = $(this).scrollTop()

    if (windowTop > contentPosition) {
      $navbar.addClass('navbar-overlay')
    } else {
      $navbar.removeClass('navbar-overlay')
    }
  })


  const $blogPosts = $('.js-blog-posts')

  $.ajax({
    type: 'GET',
    url: 'https://blog.makky.io/feed.xml',
    timeout: 10000,
    cache: false,
    dataType: 'xml'
  })
  .done(function (response, textStatus, jqXHR) {
    const items = $(response).find('item')
    for(let item of items) {
      const _title = $(item).find('title').text()
      const _link = $(item).find('link').text()

      const $newPost = $(`
        <li class='mb-1'>
          <a href='${_link}' target='_blank'>
            ${_title}
          </a>
        </li>
      `)

      $blogPosts.append($newPost)
    }
  })
  .fail(function (jqXHR, textStatus, errorThrown) {
    // console.log(jqXHR);
  })
  .always(function (data_or_jqXHR, textStatus, jqXHR_or_errorThrown) {
  })
})