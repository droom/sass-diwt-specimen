// on page load
// jQuery(document).ready(function($) {
//     $.ajax({
//         url: 'https://webhook.site/0e1899e4-5f7e-4624-ad1d-4a58791b6222',
//         type: 'POST',
//         data: {
//             key1: 'value1',
//             key2: 'value2'
//         },
//         success: function(response) {
//             console.log('Success:', response);
//         },
//         error: function(error) {
//             console.log('Error:', error);
//         }
//     });
// });

jQuery(document).ready(function () {
    jQuery(document).on('click', '.wc-stripe-save-source', function () {
        var checkbox = jQuery('.wc-stripe-save-source').find('#stripe_cc_save_source_key');
        checkbox.prop('checked', !checkbox.prop('checked'));
    });
});

jQuery(document).ready(function () {
    var $left = jQuery('.mega-content>ul');
    var $right;

    function assignScrollListener() {
        // update $right to include the active .header-dropdown-sub element
        $right = jQuery('.mega-content>.mega__submenu>.header-dropdown-sub:not(.is-hidden)');

        // remove previous scroll event listeners to avoid duplicates
        $left.off('scroll');
        $right.off('scroll');

        // assign new scroll event listeners
        $left.on('scroll', function () {
            $right.scrollTop($left.scrollTop());
            if ($left.scrollTop() + $left.innerHeight() >= $left[0].scrollHeight) {
                // keep scrolling the right element
                $right.scrollTop($left.scrollTop());
            }
        });
        $right.on('scroll', function () {
            $left.scrollTop($right.scrollTop());
        });
    }

    // run function on page load
    assignScrollListener();

  
    jQuery('.link-line').on('click', function () {
        assignScrollListener();
    });
});