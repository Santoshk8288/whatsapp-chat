const rp = require('request-promise');
const $ = require('cheerio');
const url = 'https://web.whatsapp.com/';

rp(url)
  .then(function(html){
    //success!
    console.log($('big > a', html).length);
    console.log($('big > a', html));
  })
  .catch(function(err){
    //handle error
  });
