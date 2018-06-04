$(document).ready(() => {
  // Get a new quote
  $('#new-quote').on('click', () => {
    $.getJSON('https://naga.no/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?',
      (json) => {
        $('#text').html(json.quoteText);
        $('#author').html(json.quoteAuthor);
        const url = 'https://twitter.com/intent/tweet?text=';
        const quoted = ` — ${json.quoteAuthor}`;
        let tweet = $('#text').text().slice(0, 130 - quoted.length);
        tweet = tweet.replace(/\n/g, ' ').trim();
        tweet += `…${quoted}`;
        tweet = encodeURIComponent(tweet);
        $('#tweet-quote').attr("href", url + tweet)
      });
  });

  // Tweet the actual quote

});
