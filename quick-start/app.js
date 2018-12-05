var search = instantsearch({
    // Replace with your own values
    appId: '',
    apiKey: '', // search only API key, no ADMIN key
    indexName: 'contacts',
    routing: true,
    searchParameters: {
      hitsPerPage: 10
    }
  });
  
  search.addWidget(
    instantsearch.widgets.searchBox({
      container: '#search-input'
    })
  );
  
  search.addWidget(
    instantsearch.widgets.hits({
      container: '#hits',
      templates: {
        item: document.getElementById('hit-template').innerHTML,
        empty: "We didn't find any results for the search <em>\"{{query}}\"</em>"
      }
    })
  );
  
  search.start();