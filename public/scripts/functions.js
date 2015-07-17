$(document).ready(function() {

  console.log( "ready!" );

  //
  // Easyfader carousel
  //

  /*
  $('#Fader').easyFader({
    autoCycle: false,
    slideDur: 7000,
    effectDur: 500
  });

  // For other styles of carousel, these are the init functions

  $('#Slider').easyFader({
    effect: 'slide'
  });
  $('#Carousel').easyFader({
    effect: 'carousel'
  });
  */

  //
  // Toggle the responsive menu
  //

  // Define functions

  $closeNav = function () {
    $('html').removeClass('js-nav-open');
    return false;
  };

  $openNav = function () {

    // Where do I record my states?
    var $container = $('html');

    // If the nav is already open, then just close it if I double hit the open button
    if ($container.hasClass('js-nav-open')) {
      $container.removeClass('js-nav-open');
    } else {
      $container.addClass('js-nav-open');
    }

    return false;

  };

  // Handle clicks on the "open nav" button
  $('#nav-open-btn').on('click', $openNav);

  // Close the nav when I click on the close button
  $('#nav-close-btn').on('click', $closeNav);

  // Close the nav when I click on the nav area outside the links
  $('#nav').on('click', $closeNav);

  //
  // Dropdown menus
  //

  $drop = $('.drop .drop-menu').addClass('is-hidden');
  $droplink = $('.drop-toggle');

  $droplink.click(function(){
    $(this).siblings('.drop-menu').toggleClass('is-hidden');
    return false;
  });

  //
  // Collapsable nav
  //

  $collapsenav = $('.collapse-nav').addClass('is-collapsed');
  $collapselink = $('.collapse-toggle');
  $collapseitems = $('.collapse-nav > ul > li').not('.collapse-nav > ul > li:first-child');

  $collapselink.click(function(){
    $(this).parents('.collapse-nav').toggleClass('is-collapsed');
    return false;
  });

  $collapseitems.click(function(){
    $(this).parents('.collapse-nav').toggleClass('is-collapsed');
  });

  //
  // Tabs
  //

  $tabcontent = $('.tabs > .tab-content').addClass('is-hidden');
  $tabcontent.first().removeClass('is-hidden');
  $tablink = $('.tabs > ul a');

  $tablink.click(function(){
    // Set the state of the tabs
    $(this).parent('li').siblings('li').removeClass('is-active').find('a').removeClass('is-active');
    $(this).addClass('is-active');
    $(this).parent('li').addClass('is-active');

    // Set the state of the content
    $targetcontent = $(this).attr('href');
    $tabcontent.addClass('is-hidden');
    $($targetcontent).removeClass('is-hidden');

    return false;
  });

  //
  // Show/hide more links
  //

  /*
  Markup:
  <div id="UniqueName" class="more-content is-hidden">
    Content here...
  </div>
  <a class="more-link" href="#UniqueName">
    <span class="showtext">Show this</span>
    <span class="hidetext is-hidden">Hide this</span>
  </a>
  */

  $morelinks = $('.more-link');

  // Handle the showing
  $morelinks.click(function(){
    $targetcontent = $(this).attr('href'); // Get the target
    // If the target is hidden
    if ($($targetcontent).hasClass('is-hidden')) {
      $($targetcontent).removeClass('is-hidden'); // Show it
      $(this).find('.showtext').addClass('is-hidden'); // Hide the "show" text
      $(this).find('.hidetext').removeClass('is-hidden'); // Show the "hide" text
    // If the taret is showing
    } else {
      $($targetcontent).addClass('is-hidden'); // Hide it
      $(this).find('.hidetext').addClass('is-hidden'); // Hide the "hide" text
      $(this).find('.showtext').removeClass('is-hidden'); // Show the "show" text
    }

    return false;
  });

}); // End document ready