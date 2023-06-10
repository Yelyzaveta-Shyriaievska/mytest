window.onload=function() {
    $(".tabs-content").hide()
    $(".tabs-head .tab").on("click", function() {
        $(".tabs-head .tab").removeClass("active").eq($(this).index()).addClass("active")
       $(".tabs-head .active").after($(".tabs-content").hide().eq($(this).index()).fadeIn())
    })
}