  $(function(){

      var $btn = $('.more-less');
      var $tags = $('.tags');

      $btn.click(function(){
          $tags.slideToggle(500,function(){
              if($(this).css('display') === 'none'){
                  $(".more-less").html("&#65088;Show More");

              }else{
                $(".more-less").html("&#xfe3f;Show Less");

              }
          });
      });

  });
;
