(function() {
    var shareButton = document.getElementById('share-button');
    var tooltip = document.getElementById('share-tooltip');
    var cardFooter = document.getElementById('card_content_footer')

    shareButton
        .addEventListener('click', function(event) {
            if(tooltip.classList.contains('hidden')) {
               tooltip.classList.remove('hidden');
               shareButton.classList.add('share--active');
               cardFooter.classList.add('has-couleurshare-background')
            } else {
               tooltip.classList.add('hidden');
               shareButton.classList.remove('share--active');
               cardFooter.classList.remove('has-couleurshare-background');
            }
        });
})();
