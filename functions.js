$(document).ready(function(){
    
    
      $("#btn").css({'background-color': 'lightgreen',
                     'font-size': 'medium'}
                   );

      $("#btn").hover( function(){ $(this).css({'background-color': 'darkgreen',
                                                'font-size': 'large'
                                               });
                                   this.value = "SPIN NOW"; },

                       function(){ $(this).css({'background-color': 'lightgreen', 
                                                'font-size': 'medium'});

                                   this.value = "Spin Again";
                                                 
                                 }
                                 );

   
    $(window).on( 'beforeunload',  function( ){ fade( ); } );

    $('p#p2').hide();

    $("#btn").on('click', function(){ start( ); } ); 
    $("#fade").on('click', function(){ fade( ); } );     

    start( );    }

 );
   
   function fade( )
    {
        $('form').fadeOut(2000);
        $('p#p2').fadeIn(2000);
    }               
  
   function loop(box)
    {  
         var clnum = 0;
         var ctr = 1; 

         while( ctr <= 10 )
            {
                 while((clnum < 1) || (clnum > 3)) 
                   {  clnum = Math.floor(Math.random() * 10); }

                 switch(clnum)
                   {
                      case 1:
                         box.className = "one";
                         break;
                      case 2:
                         box.className = "two";
                         break;
                      case 3:
                         box.className = "three";
                         break;
                    }

                 ctr++;
                 clnum = 0;
            }
     } 

  
  function start( )
    {
             var $boxs =  $('input[class]');

             var $msg = $('#msg');

             $boxs.each( function(){ loop(this); } );

             if(($boxs[0].className == $boxs[1].className) && ($boxs[1].className == $boxs[2].className))
               $msg.text("Congratulations, you won!");
             else
               $msg.text("Sorry, try again");
     }   

 