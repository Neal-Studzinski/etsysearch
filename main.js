const API_KEY = 's0xg1ymmj1foh3jx1i2ggbyf';
var contentDisplay = $('.container');
var formElement = $('form')

$(formElement).on('submit', function(e) {
  e.preventDefault()
  var searchQuery = $('input').val();
  $(contentDisplay).text(searchQuery);
});
