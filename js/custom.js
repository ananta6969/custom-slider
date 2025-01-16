$(document).ready(function () {
  const $slider = $(".custom-slider");
  const $prevImg = $("#prev-img");
  const $nextImg = $("#next-img");

  // Initialize Slick Slider
  $slider.slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    infinite: true,
    fade: true,
    cssEase: "linear",
    speed: 400,
    autoplay: false,
    prevArrow: $(".prev-arrow"),
    nextArrow: $(".next-arrow"),
  });

  // Function to update custom arrow images
  function updateArrowImages() {
    const currentSlide = $slider.slick("slickCurrentSlide");
    const totalSlides = $slider.slick("getSlick").slideCount;

    // Calculate indices for previous and next slides
    const prevIndex = (currentSlide - 1 + totalSlides) % totalSlides;
    const nextIndex = (currentSlide + 1) % totalSlides;

    // Get image sources for previous and next slides
    const prevImgSrc = $slider.find(".slick-slide[data-slick-index='" + prevIndex + "']").data("img");
    const nextImgSrc = $slider.find(".slick-slide[data-slick-index='" + nextIndex + "']").data("img");

    // Update arrow images
    $prevImg.attr("src", prevImgSrc);
    $nextImg.attr("src", nextImgSrc);
  }

  // Update arrow images on initialization and slide change
  $slider.on("init", updateArrowImages);
  $slider.on("afterChange", updateArrowImages);

  // Trigger Slick initialization
  $slider.slick("setPosition");
});

