// sidebar bounce

!function ($) {

  $(function(){

    var $window = $(window)



    // side bar
    setTimeout(function () {
      $('.bs-docs-sidenav').affix({
        offset: {
          top: function () { return $window.width() <= 980 ? 290 : 210 }
        , bottom: 270
        }
      })
    }, 100)


  })

}(window.jQuery)
