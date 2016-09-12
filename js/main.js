(function(){
    var hash = location.hash.replace('#','');
    if(hash == ''){
        location.hash='#position';
    }
    $(window).on('hashchange',function(){
        // console.log(location.hash);
        var hash = location.hash.replace('#','');
        getArticle(hash);
    });
    function getArticle(hash){
        $.ajax({
            url: "./data/"+hash+".json",
            type: "GET",
            dataType:'json',
            success:function(data){
                $('#view').html(data.content);
            },
            error:function(er){
                console.log(er);
            }
        });
    }
})();