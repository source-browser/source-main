(function() {
    var links = document.querySelectorAll('a[target="_blank"]');
    links.forEach(function(link) {
        link.setAttribute('target', '_self');
    });

    window.addEventListener('beforeunload', function(event) {
        if (window.open) {
            event.preventDefault();
            event.returnValue = '';
        }
    });
})();
