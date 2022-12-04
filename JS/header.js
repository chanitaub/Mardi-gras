$(document).ready(function(){
  $('#mobi').click(function(){
    const el= $('li');
  if(el.data('is-hidden')==true){
    el.show();
    el.data('is-hidden', false);
}else{
  el.hide();
  el.data('is-hidden', true);
}
});
});