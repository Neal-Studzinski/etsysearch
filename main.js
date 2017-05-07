const API_KEY = 's0xg1ymmj1foh3jx1i2ggbyf';
var contentDisplay = $('.search-images');
var formElement = $('.search-form')
var searchQuery;

$(formElement).on('submit', function(e) {
  e.preventDefault()
  searchQuery = $('.search-query').val();

  ;

var settings =    {
        type: 'GET',
        url: 'https://api.etsy.com/v2/listings/active.js?api_key=' + API_KEY + '&keywords=' + searchQuery + '&includes=Images,Shop',
        dataType: 'jsonp',
        success: function(data, status, xhr){
          var results = data.results;
          results.forEach(function(item, i, arr){
            var images = item.Images[0].url_170x135;
            var shop = item.Shop.shop_name;
})
            var test = $('<div class="card"><div class="image-container"><img src="'+ images +'"></div><p class="title">'+item.title+'</p><p><span class="shop">'+ shop +'</span><span class="price">$'+item.price+'</span></p></div>');
            $('.contentDisplay').append(test);
  }




//jQueryElement.on('nameOfEvent', function(e) {

//});



//$jQueryElement.attr('nameOfAttr', 'someNewValue');
