
$('#btn1').on('click',function(){
    $('.tab-content').hide();
    $('#tab1').css('display','block')
    $('.active').removeClass('active')
    $('#btn1').addClass('active')
})

$('#btn2').on('click',function(){
    $('.tab-content').hide();
    $('#tab2').css('display','block')
    $('.active').removeClass('active')
    $('#btn2').addClass('active')
})

$('#btn3').on('click',function(){
    $('.tab-content').hide();
    $('#tab3').css('display','block')
    $('.active').removeClass('active')
    $('#btn3').addClass('active')
})

$('.dark-btn').on('click',function(){
    $('.wrapper').toggleClass('dark')
})

$('.contact-btn').on('click',function(){
    $('.modal-bg').css('display','block')
})

$('.modal-close').on('click',function(){
    $('.modal-bg').css('display','none')
})

$('.banner-close').on('click',function(){
    $('.banner').slideUp()
})