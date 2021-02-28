function copyToClipboard(element) {
  var $temp = $("<input>");
  $("body").append($temp);
  $temp.val($(element).text()).select();
  document.execCommand("copy");
  $temp.remove();
}
$(document).ready(function(){
    $('.coming-soon').click(function () {
        $('.pop-up').css('display', 'block');
    });
     $('.close-btn').click(function () {
        $('.pop-up').css('display', 'none');
    });
});
$(document).ready(function(){
    $('.humburger-icon').click(function () {
        $(".hamburger-menu").show();
        $('main').css('position', 'fixed');
    });
    $('.close-hamburger').click(function () {
        $(".hamburger-menu").hide();
        $('main').css('position', 'unset');
    });
});