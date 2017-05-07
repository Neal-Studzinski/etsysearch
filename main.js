const API_KEY = 's0xg1ymmj1foh3jx1i2ggbyf';
var $searchResultsContentArea = $('.search-results');
var $searchBox = $('#search-box');
var $searchButton = $('#search-button');

$searchButton.on('click', startSearch);

function startSearch(e) {
    var searchTerm = $searchBox.val();
    if(searchTerm === '' || searchTerm === undefined) {
        console.log('no results for that search term');
    return false;
  }
  disableSearchButton(true);
  var formattedTerm = searchTerm.split(' ').join('+');
  var searchURL = 'https://api.etsy.com/v2/listings/active.js?api_key=' + API_KEY + '&keywords=' + searchQuery + '&includes=Images,Shop';

  var searchQuery = {
      type: 'GET',
      url: searchURL,
      dataType: 'jsonp'
    };
    $.ajax(searchQuery).then(renderSearchResults);
        $searchResultsContentArea.html('');

}

function renderSearchResults(data, status, xhr) {
    var results = data.results;
    console.log(results);

    $searchResultsContentArea.html('');
    results.forEach(function(item, i, array) {
        var $currentLink = $('<a>');
        $currentLink.addClass('item-link');

        $currentLink.append(  '<div class="item-thumbnail-container">' +
                        '<img src="' + item.Images[0].url_fullxfull +'">' +
                      '</div>');
        $currentLink.append(  '<div class="item-caption">' +
                        '<div class="item-title">' + item.title + '</div>' +
                        '<div class="item-seller-info">' +
                          '<div class="item-shop-name">' + item.Shop.shop_name + '</div>' +
                          '<div class="item-price">' + item.price + '</div>' +
                        '</div>' +
                      '</div>');
        $currentLink.attr('href', item.url);
        $currentLink.attr('title', item.description);

        $searchResultsContentArea.append($currentLink);
    disableSearchButton(false);
});
}

function disableSearchButton(state) {
    if (state) {
        $searchButton.prop('disabled', true);
        $searchButton.html('Searching…');
    } else {
        $searchButton.prop('disabled', false);
        $searchButton.html('Search');
    }
}
