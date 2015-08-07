$(document).ready(function () {
    $("#owl-demo").owlCarousel({
        navigation: true,
        navigationText: ['&lsaquo;','&rsaquo;'],
        slideSpeed: 300,
        paginationSpeed: 400,
        singleItem: true,
        afterInit: afterOwl,
        afterUpdate: afterOwl
    });
    function afterOwl() {
        $.each(this.owl.userItems, function (i) {

            $($('.owl-controls .owl-page')[i])
                .css({
                    'background': 'url(' + $(this).find('img').attr('src') + ') center center no-repeat',
                    'background-size': 'cover'
                })
        });
    }
});