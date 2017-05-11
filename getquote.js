$(document).ready(() => {
  // Get a new quote
  $('#newquote').on('click', () => {
    $.getJSON('https://naga.no/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?',
      (json) => {
        $('#quote').html(json.quoteText);
        $('#quoteFooter').html(json.quoteAuthor);
      });
  });

  // Tweet the actual quote
  $('#tweety').on('click', () => {
    const url = 'https://twitter.com/intent/tweet?text=';
    const quoted = ` — ${$('#quoteFooter').text()}`;
    let tweet = $('#quote').text().slice(0, 130 - quoted.length);

    tweet = tweet.replace(/\n/g, ' ').trim();
    tweet += `…${quoted}`;
    tweet = encodeURIComponent(tweet);

    window.open(url + tweet, '_blank');
  });
});
