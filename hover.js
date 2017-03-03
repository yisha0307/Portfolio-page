function toEdgeDist(x,y,x2,y2){
  const xDiff = x-x2;
  const yDiff = y-y2;
  return (xDiff**2 + yDiff**2);
  //算出到四方形某条边中点的位置
}

//calculate the closest middle point
const closestDist = function(x,y,w,h){
  const toTop = toEdgeDist(x,y,w/2,0);
  const toBottom = toEdgeDist(x,y,w/2,h);
  const toLeft = toEdgeDist(x,y,0,h/2);
  const toRight = toEdgeDist(x,y,w,h/2);
  const minDist = Math.min(toTop,toBottom,toLeft,toRight);
  switch(minDist){
    case toTop:
      return 'top';
    case toBottom:
      return 'bottom';
    case toLeft:
      return 'left';
    case toRight:
      return 'right';
                }
}

$(document).ready(function(){
  const num = $(".boxes").length;
  for( let i = 0; i<num; i++){
    $('.boxes').eq(i).mouseenter(function(e){
      const x = e.pageX - this.offsetLeft;
      const y = e.pageY - this.offsetTop;
      const w = this.clientWidth;
      const h = this.clientHeight;
      const enterResult = closestDist(x,y,w,h);
      console.log(x,y,w,h);
    
      switch(enterResult){
        case 'top':
          $('.overlay').eq(i).css({'top':'-100%','left':'0%'});
          $('.overlay').eq(i).animate({top:'0%'},300);
          break;
        case 'bottom':
          $('.overlay').eq(i).css({'top':'100%','left':'0%'});
          $('.overlay').eq(i).animate({top:'0%'},300);
          break;
        case 'left':
          $('.overlay').eq(i).css({'left':'-100%','top':'0%'});
          $('.overlay').eq(i).animate({left:'0%'},300);
          break;
        case 'right':
          $('.overlay').eq(i).css({'left':'100%','top':'0%'});
          $(".overlay").eq(i).animate({left:'0%'},300);
          break;
                        }  
    });
    $('.boxes').eq(i).mouseleave(function(e){
      $('.overlay').eq(i).css({'top':'0%','left':'0%'}); 
      const x = e.pageX - this.offsetLeft;
      const y = e.pageY - this.offsetTop;
      const w = this.clientWidth;
      const h = this.clientHeight;
      const exitResult = closestDist(x,y,w,h);
      switch (exitResult){
        case 'top':
          $('.overlay').eq(i).animate({'top':'-100%'},300);
          break;
        case 'left':
          $('.overlay').eq(i).animate({'left':'-100%'},300);
          break;
        case 'right':
          $('.overlay').eq(i).animate({'left':'100%'},300);
          break;
        case 'bottom':
          $('.overlay').eq(i).animate({'top':'100%'},300);
          break;
                        }
    })
  }
})