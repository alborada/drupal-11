(function (Drupal, once) {
  Drupal.behaviors.swiperInit = {
    attach: function (context) {

      once('swiper-init', '.swiper', context).forEach(function (el) {

        new Swiper(el, {
          loop: true,
          slidesPerView: 1,
          spaceBetween: 20,
          navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          },
          pagination: {
            el: '.swiper-pagination',
            clickable: true,
          }
        });

      });

    }
  };
})(Drupal, once);
