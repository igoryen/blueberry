(function($, undefined)
{
    var open = [];

    var opts = {
        selector: '.dropdown',
        toggle: 'dropdown-toggle',
        open: 'dropdown-open',
        nest: true
    };
    
    
 
    

    $(document).on('click.dropdown touchstart.dropdown', function(e)
    {
        // Close the last open dropdown if click is from outside the target dropdown
        if ( open.length && ( ! opts.nest || ! open[ open.length - 1 ].find( e.target ).length ) )
        {
            open.pop().removeClass( opts.open );
        }

        var $this = $(e.target);

        // If target is a dropdown then toggle it...
        if ( $this.hasClass( opts.toggle ) )
        {
            e.preventDefault();

            $this = $this.closest( opts.selector );

            if ( ! $this.hasClass( opts.open ) )
            {
                open.push( $this.addClass( opts.open ) )
            }
            else
            {
                open.pop().removeClass( opts.open );
            }
        }
    });

})(jQuery);