const searchForm = document.getElementById('search-form');

searchForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const searchQuery = searchForm.elements['q'].value;

    // Replace with your proxy server logic
    const proxyUrl = 'http://your-proxy-server/proxy?url=' + encodeURIComponent(searchQuery);

    window.location.href = proxyUrl;
});
