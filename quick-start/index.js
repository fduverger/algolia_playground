const algoliasearch = require('algoliasearch');

const client = algoliasearch('', '');
const index = client.initIndex('assets');
// const assetsJSON = require('./assetcatalog.json');
// const contactsJSON = require('./contacts.json');

// index.addObjects(assetsJSON, function(err, content) {
//   if (err) {
//     console.error(err);
//   }
// });

// Search for a first name
// index.search('jimme', function(err, content) {
//     // console.log(content.hits.length);
//     console.log(content.hits);
// });

// firstname with typo
index.search('vmpiro', function(err, content) {
    console.log(content.hits.length);
  });
  
  // a company
  // index.search('california paint', function(err, content) {
  //   console.log(content.hits);
  // });
  
//   // a firstname & company
//   index.search('jimmie paint', function(err, content) {
//     console.log(content.hits);
//   });