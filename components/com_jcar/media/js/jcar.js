(function ($) {
     $(document).ajaxStart(function () {
            //$( ".log" ).text( "Triggered ajaxStart handler." );
            //console.log("request started");
             $(".jcar-load-more").attr("disabled", "disabled").html("<span class=\"loader-gif\"></span> " + "Loading Records..");
            // $(".loader-gif").css("display", "block");
        });
        $(document).ajaxStop(function () {
            // $( ".log" ).text( "Triggered ajaxStop handler." );
            //console.log("request completed");
             $(".jcar-load-more").removeAttr("disabled").html("Load more");
            // $(".loader-gif").css("display", "none");
        });
    $(document).ready(function () {
       
        var getURL = $(".jcar-load-more").data("url");
       // console.log("before running loop: " + getURL);

        $(".jcar-load-more").click(function (e) {
            e.preventDefault();
           // console.log("before running inside loop: " + getURL);
            // if (getURL === "?format=json") {
            //     $(".jcar-load-more").hide();
            // }
            // else {
            $.get(getURL, function (data) {
                //console.log(data);
                var dataList = data.items;
                var currentURL = $(location).attr('href');
                for (var j = 0; j < dataList.length; j++) {
                    //console.log(dataList[j].name);
                    var dataHtml = '<h2><a href="' + currentURL + '/item/' + dataList[j].id + '">' + dataList[j].name + '</a></h2>';
                    $("articles#jcar-lists").append(dataHtml);
                }
                var updatedURL = data.pagination.pagesNext;
                getURL = updatedURL;
               // console.log("end of loop: " + getURL);
                //    $(".jcar-load-more").data( "url", updatedURL);
                //     console.log(getURL);
                if (getURL === "?format=json") {
                    $(".jcar-load-more").hide();
                }
            }, "json");
            // }


        });
    });

})(jQuery);
