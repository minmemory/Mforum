function new_ct(node){
    $("#dark").load("/!!/CTbox/" + node);

    setTimeout('var editor = new EpicEditor().load();',1000)
    $("#dark").slideToggle();
  }
  function new_LRbox(){
    $("#dark").load("/!!/LRbox");
    $("#dark").slideToggle();
  }

$(document).ready(function(){


$(".topiclist").load('/!!/GetIndexData');
$("#ajaxwait_user").load('/!!/Userbox');

});
