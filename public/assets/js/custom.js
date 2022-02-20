jQuery(function ($) {
  "use strict";

  var mainbottom = $('#main').offset().top;
  $(window).on('scroll', function () {
    stop = Math.round($(window).scrollTop());
    if (stop > mainbottom) {
      $('.navbar').addClass('past-main');
      $('.navbar').addClass('effect-main')
    } else {
      $('.navbar').removeClass('past-main');
    }
  });

  


  $(document).on('click.nav', '.navbar-collapse.in', function (e) {
    if ($(e.target).is('a')) {
      $(this).removeClass('in').addClass('collapse');
    }
  });

  $(window).load(function () {
    setTimeout(function () {
      $('#loading').fadeOut('slow', function () {
      });
    }, 300);
  });

  $('#myModal').bind('hidden', function () {
    // do something ...
  })

  new WOW().init();


  $('.popup').magnificPopup({
    disableOn: 0,
    type: 'iframe',
    mainClass: 'mfp-fade',
    removalDelay: 160,
    preloader: false,

    fixedContentPos: false
  });


  $(".reviews").owlCarousel({

    slideSpeed: 200,
    items: 1,
    singleItem: true,
    autoPlay: true,
    pagination: false
  });

  $(".final_product").owlCarousel({

    slideSpeed: 200,
    items: 1,
    singleItem: true,
    autoPlay: true,
    pagination: false
  });

  $("#owl_product").owlCarousel({

    autoPlay: 30000, //Set AutoPlay to 3 seconds

    items: 5,
    itemsDesktop: [1199, 3],
    itemsDesktopSmall: [979, 3],
    navigation: true,
    navigationText: ["<i class='ion-ios-arrow-back icon_arrow'></i>", "<i class='ion-ios-arrow-forward icon_arrow'></i>"],
    rewindNav: true,
    pagination: false,
    scrollPerPage: false
  });

  $("#owl_trending_items").owlCarousel({

    autoPlay: 30000, //Set AutoPlay to 3 seconds

    items: 5,
    itemsDesktop: [1199, 3],
    itemsDesktopSmall: [979, 3],
    navigation: true,
    navigationText: ["<i class='ion-ios-arrow-back icon_arrow'></i>", "<i class='ion-ios-arrow-forward icon_arrow'></i>"],
    rewindNav: true,
    pagination: false,
    scrollPerPage: false
  });

  $("#owl_product_suggested").owlCarousel({

    autoPlay: 30000, //Set AutoPlay to 3 seconds

    items: 8,
    itemsDesktop: [1199, 3],
    itemsDesktopSmall: [979, 3],
    navigation: true,
    navigationText: ["<i class='ion-ios-arrow-back icon_arrow'></i>", "<i class='ion-ios-arrow-forward icon_arrow'></i>"],
    rewindNav: true,
    pagination: false,
    scrollPerPage: false
  });

  $("#owl_product_sponsored").owlCarousel({

    autoPlay: 30000, //Set AutoPlay to 3 seconds

    items: 8,
    itemsDesktop: [1199, 3],
    itemsDesktopSmall: [979, 3],
    navigation: true,
    navigationText: ["<i class='ion-ios-arrow-back icon_arrow'></i>", "<i class='ion-ios-arrow-forward icon_arrow'></i>"],
    rewindNav: true,
    pagination: false,
    scrollPerPage: false
  });

  $("#owl_product_sponsored_two").owlCarousel({

    autoPlay: 30000, //Set AutoPlay to 3 seconds

    items: 8,
    itemsDesktop: [1199, 3],
    itemsDesktopSmall: [979, 3],
    navigation: true,
    navigationText: ["<i class='ion-ios-arrow-back icon_arrow'></i>", "<i class='ion-ios-arrow-forward icon_arrow'></i>"],
    rewindNav: true,
    pagination: false,
    scrollPerPage: false
  });

  $("#owl_product_customers_viewed").owlCarousel({

    autoPlay: 30000, //Set AutoPlay to 3 seconds

    items: 8,
    itemsDesktop: [1199, 3],
    itemsDesktopSmall: [979, 3],
    navigation: true,
    navigationText: ["<i class='ion-ios-arrow-back icon_arrow'></i>", "<i class='ion-ios-arrow-forward icon_arrow'></i>"],
    rewindNav: true,
    pagination: false,
    scrollPerPage: false
  });

  $("#owl_rastaurants").owlCarousel({

    autoPlay: 30000, //Set AutoPlay to 3 seconds

    items: 3,
    itemsDesktop: [1199, 3],
    itemsDesktopSmall: [979, 3],
    navigation: true,
    navigationText: ["<i class='ion-ios-arrow-back icon_arrow'></i>", "<i class='ion-ios-arrow-forward icon_arrow'></i>"],
    rewindNav: true,
    pagination: false,
    scrollPerPage: false
  });


  $("#owl_brand").owlCarousel({

    autoPlay: 30000, //Set AutoPlay to 3 seconds

    items: 8,
    itemsDesktop: [1199, 3],
    itemsDesktopSmall: [979, 3],
    navigation: true,
    navigationText: ["<i class='ion-ios-arrow-back icon_arrow'></i>", "<i class='ion-ios-arrow-forward icon_arrow'></i>"],
    rewindNav: true,
    pagination: false,
    scrollPerPage: false
  });

  // $(document).ready(function () {

  //   var ctx = document.getElementById("myChart");
  //   var myChart = new Chart(ctx, {
  //     type: 'line',
  //     data: {
  //       labels: ["jul4", "jul6", "jul8", "jul10", "jul12", "jul14"],
  //       datasets: [{
  //         label: 'hourly order value',
  //         data: [12, 19, 3, 5, 2, 3],
  //         backgroundColor: [
  //           'rgba(142, 196, 73, 0.2)',
  //           'rgba(142, 196, 73, 0.2)',
  //           'rgba(142, 196, 73, 0.2)',
  //           'rgba(142, 196, 73, 0.2)',
  //           'rgba(142, 196, 73, 0.2)',
  //           'rgba(142, 196, 73, 0.2)'
  //         ],
  //         borderColor: [
  //           'rgba(142, 196, 73,1)',
  //           'rgba(142, 196, 73, 1)',
  //           'rgba(142, 196, 73, 1)',
  //           'rgba(142, 196, 73, 1)',
  //           'rgba(142, 196, 73, 1)',
  //           'rgba(142, 196, 73, 1)'
  //         ],
  //         borderWidth: 1
  //       }],
  //     },
  //     options: {
  //       responsive: true,
  //       scales: {
  //         yAxes: [{
  //           ticks: {
  //             beginAtZero: true
  //           }
  //         }]
  //       }
  //     }
  //   });


  //   var ctx = document.getElementById("myChart2");
  //   var myChart2 = new Chart(ctx, {
  //     type: 'line',
  //     data: {
  //       labels: ["jul4", "jul6", "jul8", "jul10", "jul12", "jul14"],
  //       datasets: [{
  //         label: 'hourly order count',
  //         data: [12, 19, 3, 5, 2, 3],
  //         backgroundColor: [
  //           'rgba(142, 196, 73, 0.2)',
  //           'rgba(142, 196, 73, 0.2)',
  //           'rgba(142, 196, 73, 0.2)',
  //           'rgba(142, 196, 73, 0.2)',
  //           'rgba(142, 196, 73, 0.2)',
  //           'rgba(142, 196, 73, 0.2)'
  //         ],
  //         borderColor: [
  //           'rgba(142, 196, 73,1)',
  //           'rgba(142, 196, 73, 1)',
  //           'rgba(142, 196, 73, 1)',
  //           'rgba(142, 196, 73, 1)',
  //           'rgba(142, 196, 73, 1)',
  //           'rgba(142, 196, 73, 1)'
  //         ],
  //         borderWidth: 1
  //       }],
  //     },
  //     options: {
  //       responsive: true,
  //       scales: {
  //         yAxes: [{
  //           ticks: {
  //             beginAtZero: true
  //           }
  //         }]
  //       }
  //     }
  //   });

  // });



   

  $(document).ready(function () {

      var chart = am4core.create("chartdiv", am4plugins_forceDirected.ForceDirectedTree);
      var networkSeries = chart.series.push(new am4plugins_forceDirected.ForceDirectedSeries())

      chart.data = [
        {
          name: "Product Name",
          children: [
            {
              name: "Service",
              children: [
                { name: "Services S1", value: 100 },
                { name: "Services S2", value: 60 }
              ]
            },
            {
              name: "Ingredient",
              children: [
                { name: "Salt", value: 135 },
                { name: "Sugar", value: 98 },
                { name: "Milk", value: 98 }
              ]
            },
            {
              name: "Food Additive",
              children: [
                {
                  name: "C1",
                  children: [
                    { name: "EE1", value: 130 },
                    { name: "EE2", value: 87 },
                    { name: "EE3", value: 55 }
                  ]
                },
                { name: "C2", value: 148 },
                {
                  name: "C3", children: [
                    { name: "CC1", value: 53 },
                    { name: "CC2", value: 30 }
                  ]
                },
                { name: "C4", value: 26 }
              ]
            },
            {
              name: "Food Item",
              children: [
                { name: "D1", value: 415 },
                { name: "D2", value: 148 },
                { name: "D3", value: 89 }
              ]
            },
            {
              name: "Codex No",
              children: [
                {
                  name: "E1",
                  children: [
                    { name: "EE1", value: 33 },
                    { name: "EE2", value: 40 },
                    { name: "EE3", value: 89 }
                  ]
                },
                {
                  name: "E2",
                  value: 148
                }
              ]
            }

          ]
        }
      ];

      networkSeries.dataFields.value = "value";
      networkSeries.dataFields.name = "name";
      networkSeries.dataFields.children = "children";
      networkSeries.nodes.template.tooltipText = "{name}:{value}";
      networkSeries.nodes.template.fillOpacity = 1;

      networkSeries.nodes.template.label.text = "{name}"
      networkSeries.fontSize = 10;

      networkSeries.links.template.strokeWidth = 1;

      var hoverState = networkSeries.links.template.states.create("hover");
      hoverState.properties.strokeWidth = 3;
      hoverState.properties.strokeOpacity = 1;

      networkSeries.nodes.template.events.on("over", function (event) {
        event.target.dataItem.childLinks.each(function (link) {
          link.isHover = true;
        })
        if (event.target.dataItem.parentLink) {
          event.target.dataItem.parentLink.isHover = true;
        }

      })

      networkSeries.nodes.template.events.on("out", function (event) {
        event.target.dataItem.childLinks.each(function (link) {
          link.isHover = false;
        })
        if (event.target.dataItem.parentLink) {
          event.target.dataItem.parentLink.isHover = false;
        }
      })

    }); // end am4core.ready()


  $(".clients").owlCarousel({
    slideSpeed: 200,
    items: 5,
    singleItem: false,
    autoPlay: true,
    pagination: false
  });



  $(window).on('scroll', function () {
    if ($(this).scrollTop() > 1000) {
      $('#back-top').fadeIn();
    } else {
      $('#back-top').fadeOut();
    }
  });
  // scroll body to 0px on click
  $('#back-top').on('click', function () {
    $('#back-top').tooltip('hide');
    $('body,html').animate({
      scrollTop: 0
    }, 1500);
    return false;
  });



  $(function () {
    $('a.page-scroll').on('click', function (event) {
      var $anchor = $(this);
      $('html, body').stop().animate({
        scrollTop: $($anchor.attr('href')).offset().top
      }, 1500, 'easeInOutExpo');
      event.preventDefault();
    });
  });


  $(document).ready(function () {
    //Initialize tooltips
    $('.nav-tabs > li a[title]').tooltip();

    //Wizard
    $('a[data-toggle="tab"]').on('show.bs.tab', function (e) {

      var $target = $(e.target);

      if ($target.parent().hasClass('disabled')) {
        return false;
      }
    });

    $(".next-step").click(function (e) {

      var $active = $('.wizard .nav-tabs li.active');
      $active.next().removeClass('disabled');
      nextTab($active);

    });
    $(".prev-step").click(function (e) {

      var $active = $('.wizard .nav-tabs li.active');
      prevTab($active);

    });
  });

  function nextTab(elem) {
    $(elem).next().find('a[data-toggle="tab"]').click();
  }
  function prevTab(elem) {
    $(elem).prev().find('a[data-toggle="tab"]').click();
  }

  if ($('.r-sub-text').length > 0) {
    var slider = document.getElementById("distance-range");
    var output = document.getElementById("distance-value");

    output.innerHTML = slider.value;

    slider.oninput = function () {
      output.innerHTML = this.value;
    }
  }

  // checkout process function :


  //Initialize tooltips
  $('.nav-tabs > li a[title]').tooltip();
  $('#cart-final-total').hide();

  $(".close").click(function (e) {
    $('.checkout-box').show();
  });

  //wizard checkout
  $('a[data-toggle="tab"]').on('show.bs.tab', function (e) {

    var $target = $(e.target);
    if ($target.context.dataset.originalTitle === 'Payment & Billing') {
      $('#cart-final-total').show();
      $('.tab-content').addClass('payment_bill');
    } else {
      $('#cart-final-total').hide();
      $('.tab-content').removeClass('payment_bill');
    }
    if ($target.context.dataset.originalTitle === 'Complete') {
      $('.checkout-box').hide();
      $('.tab-content').addClass('checkout_completed');
    } else {
      $('.tab-content').removeClass('checkout_completed');
      $('.checkout-box').show();
    }
    if ($target.parent().hasClass('disabled')) {
      return false;
    }
  });

  $(".next-step-checkout").click(function (e) {

    var $active = $('.wizard_checkout .nav-tabs li.active');
    $active.next().removeClass('disabled');
    nextTab($active);

  });
  $(".prev-step-checkout").click(function (e) {

    var $active = $('.wizard_checkout .nav-tabs li.active');
    prevTab($active);

  });

  function nextTab(elem) {
    $(elem).next().find('a[data-toggle="tab"]').click();
  }
  function prevTab(elem) {
    $(elem).prev().find('a[data-toggle="tab"]').click();
  }

  // end of checkout process function



});


$("#id-picture").change(function () {
  readURL(this);
});

function readURL(input) {
  if (input.files && input.files[0]) {
    var reader = new FileReader();

    reader.onload = function (e) {
      $('#idPreview').attr('src', e.target.result).fadeIn('slow');
    }
    reader.readAsDataURL(input.files[0]);
  }
}


$("#cheque-picture").change(function () {

  $("#cheque-picture").change(function () {
    readURL(this);
  });

  function readURL(input) {
    if (input.files && input.files[0]) {
      var reader = new FileReader();

      reader.onload = function (e) {
        $('#chequePreview').attr('src', e.target.result).fadeIn('slow');
      }
      reader.readAsDataURL(input.files[0]);
    }
  }

});

$("#id-picture").change(function () {

  $("#cheque-picture").change(function () {
    readURL(this);
  });

  function readURL(input) {
    if (input.files && input.files[0]) {
      var reader = new FileReader();

      reader.onload = function (e) {
        $('#chequePreview').attr('src', e.target.result).fadeIn('slow');
      }
      reader.readAsDataURL(input.files[0]);
    }
  }

});


$("#id-farmer").change(function () {

  $("#farmer-picture").change(function () {
    readURL(this);
  });

  function readURL(input) {
    if (input.files && input.files[0]) {
      var reader = new FileReader();

      reader.onload = function (e) {
        $('#farmerPreview').attr('src', e.target.result).fadeIn('slow');
      }
      reader.readAsDataURL(input.files[0]);
    }
  }

});

$(document).ready(function () {
  $('.filterable .btn-filter').click(function () {
    var $panel = $(this).parents('.filterable'),
      $filters = $panel.find('.filters input'),
      $tbody = $panel.find('.table tbody');
    if ($filters.prop('disabled') === true) {
      $filters.prop('disabled', false);
      $filters.first().focus();
    } else {
      $filters.val('').prop('disabled', true);
      $tbody.find('.no-result').remove();
      $tbody.find('tr').show();
    }
  });

  $('.filterable .filters input').keyup(function (e) {
    /* Ignore tab key */
    var code = e.keyCode || e.which;
    if (code == '9') return;
    /* Useful DOM data and selectors */
    var $input = $(this),
      inputContent = $input.val().toLowerCase(),
      $panel = $input.parents('.filterable'),
      column = $panel.find('.filters th').index($input.parents('th')),
      $table = $panel.find('.table'),
      $rows = $table.find('tbody tr');
    /* Dirtiest filter function ever ;) */
    var $filteredRows = $rows.filter(function () {
      var value = $(this).find('td').eq(column).text().toLowerCase();
      return value.indexOf(inputContent) === -1;
    });
    /* Clean previous no-result if exist */
    $table.find('tbody .no-result').remove();
    /* Show all rows, hide filtered ones (never do that outside of a demo ! xD) */
    $rows.show();
    $filteredRows.hide();
    /* Prepend no-result row if all rows are filtered */
    if ($filteredRows.length === $rows.length) {
      $table.find('tbody').prepend($('<tr class="no-result text-center"><td colspan="' + $table.find('.filters th').length + '">No result found</td></tr>'));
    }
  });
});


$(document).ready(function () {
  $("#list").click(function () {
    $("#list_view").toggleClass('collapse');
    alert("The paragraph was clicked.");
  });
});




// mega menu toggle class

$(document).ready(function () {
  var hClass = $('.menu_listing_box').hasClass('col-sm-9');
  //alert(hClass);
  $(".brand_toggle").click(function () {
    $('.icon_b').toggleClass('ion-chevron-right ion-chevron-left');
    if ($('.icon_b').text() == " Show") {
      $('.icon_b').text(" Hide")
    }
    else {
      $('.icon_b').text(" Show");
    }

    $(this).parents('.row').find('.brand_box').toggleClass('col-md-2 col-md-1');

    if (!($('.menu_listing_box').hasClass('col-md-10'))) {
      $(this).parents('.row').find('.menu_listing_box').toggleClass('col-md-8 col-md-9');
    } else {
      $(this).parents('.row').find('.menu_listing_box').toggleClass('col-md-10 col-md-9');
    }

    if ($('.brand_box').hasClass('col-md-1') && $('.filer_box').hasClass('col-md-1')) {
      $(this).parents('.row').find('.menu_listing_box').toggleClass('col-md-8 col-md-10');
    }

  });
  $(".filter_toggle").click(function () {
    $('.icon_f').toggleClass('ion-chevron-left ion-chevron-right');
    if ($('.icon_f').text() == " Show") {
      $('.icon_f').text(" Hide")
    }
    else {
      $('.icon_f').text(" Show");
    }

    $(this).parents('.row').find('.filer_box').toggleClass('col-md-2 col-md-1');

    if (!($('.menu_listing_box').hasClass('col-md-10'))) {
      $(this).parents('.row').find('.menu_listing_box').toggleClass('col-md-8 col-md-9');
    } else {
      $(this).parents('.row').find('.menu_listing_box').toggleClass('col-md-10 col-md-9');
    }

    if ($('.brand_box').hasClass('col-md-1') && $('.filer_box').hasClass('col-md-1')) {
      $(this).parents('.row').find('.menu_listing_box').toggleClass('col-md-8 col-md-10');
    }

  });
});


$(document).ready(function () {

  // Defining the local dataset
  var Categories = ['Rice', 'Flour & Atta', 'Dals & Pulses', 'Vegetables & Fruits', 'Dairy & Eggs', 'Oil & Ghee', 'Spices', 'Masalas', 'Pastes & Sauces', 'Coffee & Tea'];
  var Brands = ['Amul', 'Nestle', 'Dabur', 'Haldiram', 'Britannia', 'Godrej', 'Himalaya', 'Santoor', 'Nirma', 'Park Avenue'];
  var Products = ['Red Label Tea', 'Dove Bathing Bar', 'Fortune Sunflower Refined Oil', 'Tang Orange Instant Drink Mix', 'Bread - Brown, Chemical Free', 'Eggs - Table Tray', 'Sugar - Refined', 'Paratha - Onion', 'Fancy Bites Fryums - Biscuits', 'Nachoz - Sizzling Peri Peri'];


  // Constructing the suggestion engine
  var Categories = new Bloodhound({
    datumTokenizer: Bloodhound.tokenizers.whitespace,
    queryTokenizer: Bloodhound.tokenizers.whitespace,
    local: Categories
  });

  var Brands = new Bloodhound({
    datumTokenizer: Bloodhound.tokenizers.whitespace,
    queryTokenizer: Bloodhound.tokenizers.whitespace,
    local: Brands
  });

  var Products = new Bloodhound({
    datumTokenizer: Bloodhound.tokenizers.whitespace,
    queryTokenizer: Bloodhound.tokenizers.whitespace,
    local: Products
  });



  // Initializing the typeahead
  $('.header_search_box .typeahead').typeahead({
    hint: true,
    highlight: true, /* Enable substring highlighting */
    minLength: 1 /* Specify minimum characters required for showing result */
  },
    {
      name: 'Categories',
      source: Categories,
      templates: {
        header: '<h3 class="league-name">Categories</h3>',
        empty: '<div class="empty-text"> No Categorie Found! </div>'
      }
    },
    {
      name: 'Brands',
      source: Brands,
      templates: {
        header: '<h3 class="league-name">Brands</h3>',
        empty: '<div class="empty-text"> No Brand Found! </div>'
      }
    },
    {
      name: 'Products',
      source: Products,
      templates: {
        header: '<h3 class="league-name">Products</h3>',
        empty: '<div class="empty-text"> No Product Found! </div>',
        suggestion: function (Products) {
          return '<div class="product_suggestion_box">' +
            '<div class="image search-product-img" >' +
            '<img width="50px" src="' + 'assets/images/23664a.jpg' + '" >' +
            '</div>' +
            '<div class="info">' +
            '<span class="name">' + 'Tang Orange Instant Drink Mix' + '</span>' +
            '<div class="price-box" >' + 'Rs 160.00' + '</div>' +
            '<div class="more_details">Tang is a fruit-flavored drink. It was formulated by General Foods </div>' +
            '</div>';
        }
      }
    });

  /* location search list */
  var Locations = ['USA', 'Canada', 'Netherlands', 'TX USA', 'Canada', 'Argentina', 'Germany', 'Spain', 'IL USA', 'Mexico'];

  var Locations = new Bloodhound({
    datumTokenizer: Bloodhound.tokenizers.whitespace,
    queryTokenizer: Bloodhound.tokenizers.whitespace,
    local: Locations
  });
  $('.location_search .typeahead').typeahead({
    hint: true,
    highlight: true, /* Enable substring highlighting */
    minLength: 1 /* Specify minimum characters required for showing result */
  },
    {
      name: 'Locations',
      source: Locations,
      templates: {
        header: '<h3 class="league-name">Locations</h3>',
        empty: '<div class="empty-text"> No Locations Found! </div>'
      }
    }
  );
});


