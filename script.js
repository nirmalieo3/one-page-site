$(function(){
	$('#top').css({
        backgroundColor: 'white',
        height: '50px',
        width: '50px',
        position: 'fixed',
        bottom: '30px',
        left: '20px',
        display: 'none',
        backgroundImage: 'img/arrow.webp'
	})

  $(window).on('scroll', function(){
    if(window.pageYOffset > 500) {
    	$('#top').fadeIn()
     }else{
    	$('#top').fadeOut()
     }
  })

  $('#top').on('click', function(){
     $('html').animate({
     	scrollTop: 20
     }, 2000)
 })

  $('#open').on('mouseover',function(){
       $('#sideNav').css({
       	   height:'300px',
       	   backgroundColor: 'rgb(105, 185, 209)',
       	   
       })
     for(var i = 0; i < items.length; i++){
        items[i].style.width = '60px';
    }
  })
  $('#sideNav').on('mouseleave',function(){
       $('#sideNav').css('height', '0') 
    })

     $('#contact').on('submit', function(event){
   event.preventDefault();
   var email = $('#email').val();
   var name = $('#name').val();
   if (name == '' || name == undefined) {
       errorMessage("<span>name is not completed</span>", '#name-container' )
   }

   if (email == '' || email == undefined) {
       errorMessage("<span>email is not completed</span>", '#email-container' )
   }

   function errorMessage(errMessage, errContainer) {
        $(errMessage) 
            .addClass('err') 
            .appendTo(errContainer) 
            .fadeOut(5000); 
    }
    
 })

  })

