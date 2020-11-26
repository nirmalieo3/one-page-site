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
  $('#open').on('mouseleave',function(){
       $('#sideNav').css('height', '0') 
       	  
    })
 
 
})

