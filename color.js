
var Links = {
  setColor:function(color){
    // var alist = document.querySelectorAll('a');
    // var i = 0;
    // while(i < alist.length){
    //   alist[i].style.color = color;
    //   i = i+1;
    // }
    $('a').css('color', color);
  }
}

// 객체의 변수 담기
var Body = {
  //첫번째 메소드
  setColor:function(color){
    document.querySelector('body').style.color = color;
    // $('body').css('color',color);
  },
  //두번째 메소드
  setBackgroundColor:function(color){
    document.querySelector('body').style.backgroundColor = color;
    // $('body').css('backgroundColor',color);
  }
}

function nightDayHandler(self){
  var target = document.querySelector('body');
  if(self.value === 'night'){
    Body.setBackgroundColor('black');
    Body.setColor('white');
    self.value = 'day';

    Links.setColor('powderblue');
  } else{
    Body.setBackgroundColor('white');
    Body.setColor('black');
    self.value = 'night';

    Links.setColor('blue');
  }
}
