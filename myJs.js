$(document).ready(function() {
    // process bar
    setTimeout(function() {
        firstQuestion();
        $('.spinner').fadeOut();
        $('#preloader').delay(350).fadeOut('slow');
        $('body').delay(350).css({
            'overflow': 'visible'
        });
    }, 600);
})
var isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
  if (!isChrome){
      $('#iframeAudio').remove()
  }
  else {
      $('#playAudio').remove() // just to make sure that it will not have 2x audio in the background 
  }
function firstQuestion(){
    
    $('.content').hide();
    Swal.fire({
        title: 'Hé luu yang hồ part time :D ',
        text: 'Trả lời thật lòng nha emmm <3',
        imageUrl: 'cuteCat.jpg',
        imageWidth: 300,
        imageHeight: 300,
        background: '#fff url("iput-bg.jpg")',
        imageAlt: 'Custom image',
     
      }).then(function(){
        $('.content').show(200);
        var audio = new Audio('test.mp3');
        audio.play();
      })
}

 // switch button position
 function switchButton() {
    var audio = new Audio('duck.mp3');
    audio.play();
    var leftNo = $('#no').css("left");
    var topNO = $('#no').css("top");
    var leftY = $('#yes').css("left");
    var topY = $('#yes').css("top");
    $('#no').css("left", leftY);
    $('#no').css("top", topY);
    $('#yes').css("left", leftNo);
    $('#yes').css("top", topNO);
}
// move random button póition
function moveButton() {
    var audio = new Audio('Swish1.mp3');
    audio.play();
    if (screen.width<=600) {
        var x = Math.random() * 300;
        var y = Math.random() * 500;
    } else{
        var x = Math.random() * 500;
        var y = Math.random() * 500;
    }
    var left = x + 'px';
    var top = y + 'px';
    $('#no').css("left", left);
    $('#no').css("top", top);
}


var n = 0;
$('#no').mousemove(function() {
    if (n < 1)
        switchButton();
    if (n > 1)
        moveButton();
    n++;
});
$('#no').click(() => {
    if (screen.width>=900)
        switchButton();
})

// generate text in input
function textGenerate() {
    var n = "";
    var text = " Tính đổ thừa anh hả -_- Đâu phải do anh đâu :P    ";
    var a = Array.from(text);
    var textVal = $('#txtReason').val() ? $('#txtReason').val() : "";
    var count = textVal.length;
    if (count > 0) {
        for (let i = 1; i <= count; i++) {
            n = n + a[i];
            if (i == text.length + 1) {
                $('#txtReason').val("");
                n = "";
                break;
            }
        }
    }
    $('#txtReason').val(n);
    setTimeout("textGenerate()", 1);
}

// show popup
$('#yes').click(function() {
    var audio = new Audio('tick.mp3');
    audio.play();
    Swal.fire({
        title: ' Ủa tại sao em lại chọn cái này :v',
        html: true,
        width: 900,
        padding: '3em',
        html: "<input type='text' class='form-control' id='txtReason' onmousemove=textGenerate()  placeholder='Whyyy'>",
        background: '#fff url("iput-bg.jpg")',
        backdrop: `
              rgba(0,0,123,0.4)
              url("giphy2.gif")
              left top
              no-repeat
            `,
        showCancelButton: true,
        cancelButtonText: "Đừng thoát mà :( ",
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonColor: '#fe8a71',
        cancelButtonColor: '#f6cd61',
        confirmButtonText: 'Tiếp tục nào'
    }).then((result) => {
        if (result.value) {
            Swal.fire({
                width: 900,
                confirmButtonText: 'Okiiiii lun <3',
                background: '#fff url("iput-bg.jpg")',
                title: 'Anh đùa tí thôii :v  ',
                text: "Nhớ ăn uống đầy đủ nghe chưa ",
                confirmButtonColor: '#83d0c9',
                onClose: () => {
                    window.location = 'https://rawcdn.githack.com/ThanhLoc0612/thanhlockimquynh.github.io/c9c89c829bb265c45a75d920c122ffb4c61e45d1/index.html';
                  }
            })
        }
    })
})
