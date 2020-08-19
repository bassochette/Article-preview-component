(function() {
    var shareButton = document.getElementById('share-button');
    var tooltip = document.getElementById('share-tooltip');

    shareButton
        .addEventListener('click', function(event) {
            if(tooltip.classList.contains('hidden')) {
               tooltip.classList.remove('hidden');
               shareButton.classList.add('share--active')
            } else {
               tooltip.classList.add('hidden')
                shareButton.classList.remove('share--active')
            }
        });
})();

document.re
