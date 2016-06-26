$(function(){
  $('#fullpage').fullpage({
    navigation:true,
    navigationTooltips:['首页','央视报道','视觉','交互','皮肤','功能','待办邮件','联系人邮件','科技','连接易信','马上体检'],
    scrollBar:true,
    scrollingSpeed:1000,
    easing:'easeInOutQuart',
    onLeave:function(index,nextIndex,direction){
        $('.section:nth-child(1)').removeClass('animat');
      if(direction==='down'){
        $('.section:nth-child('+index+')').addClass('anitop')
      }else{
        $('.section:nth-child('+nextIndex+')').removeClass('anitop')
      }
    },
  });

})
