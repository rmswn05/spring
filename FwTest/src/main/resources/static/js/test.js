/**
 * 
 */
 $(document).ready(function(){
	
	$('#login_btn').on('click',function(){
	
	var id=$('#id').val();
	var pw=$('#pw').val();
	
	alert(id+','+pw);
	
	$.ajax({
		url:"/loginAjax",
		type:"post",
		data:{
			"id":$('#id').val(),
			"pw":$('#pw').val()
		},
		success:function(result,textStatus){
			alert("Data:"+result+"님 login ok\nStauts:"+textStatus);
		},
		error:function(data, textStatus){
			alert("전송실패");
		},
		complete:function(data, textStatus){
			
		}
	
});

});

});
