angular.module("app").service("quoteSrvc",function () {
  var quotes = [
    { text: 'Life isn\'t about getting and having, it\'s about giving and being.', author: 'Kevin Kruse'},
    { text: 'Whatever the mind of man can conceive and believe, it can achieve', author: 'Napoleon Hill'},
    { text: 'Strive not to be a success, but rather to be of value.', author: 'Albert Einstein'},
    { text: 'Two roads diverged in a wood, and I took the one less traveled by, And that has made all the difference.', author: 'Robert Frost'},
    { text: 'The most difficult thing is the decision to act, the rest is merely tenacity.', author: 'Amelia Earhart'},
    { text: 'Life is what happens to you while you\'re busy making other plans.', author: 'John Lennon'},
    { text: 'What even is a jQuery?', author: 'Tyler S. McGinnis'}
  ];

  //The service should then allow you to:
  //get, CHECK
  //add, and
  //remove data
  //from that array via exposed functions.

  this.getQuotes= function () {
    return quotes;
  }
  this.addQuotes = function (quoteObj) {
    if (quoteObj.text && quoteObj.author) {
      quotes.push(quoteObj)
      return true;
    }
    return false;
  }
  this.removeQuotes = function (quoteText) {
    console.log("delete");
    for (var i = 0; i < quotes.length; i++) {
      if (quotes[i].text.toLowerCase() === quoteText.toLowerCase()) {
        console.log(quotes[i].text.toLowerCase );
        quotes.splice(i,1);
      }
    }
  }


})
