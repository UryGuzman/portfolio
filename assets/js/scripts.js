    $(document).ready(function() {
        var $header = $("header"),
            $clone = $header.before($header.clone().addClass("clone"));
        
        $(window).on("scroll", function() {
            var fromTop = $(window).scrollTop();
            console.log(fromTop);
            $("body").toggleClass("down", (fromTop > 400));
        });
    });