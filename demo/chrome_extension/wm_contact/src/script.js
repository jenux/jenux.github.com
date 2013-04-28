var Map = function(){
	$root = $('#list');
	var get_list = function(key, auto_fill){
		$root.empty().addClass('loading');
		var list = vcard.list;
		
		var html = [];
		var re = eval("/"+key+"/ig");
        for(var i=0, j=list.length; i<j; i++){
           	var flag = false;
			if(key == ''){
				if(auto_fill){ flag = true; }
			}else{
            	for(key in list[i]){
	    			if(re.test(list[i][key])){
	    			    flag = true
	    			    break
	    			}
	    		}
			}
			if(flag){
				var tmp = get_item(list[i]);
				html.push('<li>'+tmp+'</li>');
			}
		}
		$root.html(html.join(""));
		$root.removeClass('loading');
	};
	var get_item = function(obj){
		var tmp = '';
		tmp += obj.avatar == ''?"<img src='images/avatar/"+obj.mailname+".png' class='avatar'>":
				"<img src='"+obj.avatar+"' class='avatar'>";
		tmp += "<p>"+obj.name+"  - <a href='mailto:"+obj.mailname+"@windmaker.com.cn'　target='_blank'>Mail</a></p>";
		tmp += "<p>"+obj.phone+"</p>";
		if(obj.msn && obj.msn!=''){
			tmp += "<p class='msn'>"+ obj.msn +"</p>";
		}
		if(obj.qq && obj.qq!=''){
			tmp += "<p class='qq'>"+ obj.qq +"</p>";
		}
		if(obj.email&&obj.email!=''){
			tmp += "<p class='mail'>"+ obj.email +"</p>";
		}
		return tmp;
	};
	return {
		init: function(){
			get_list('',true);
			$('#filter').bind('keyup text',function(){
	            Map.search($(this), true)
	        });
			$('sup').text(vcard.version)
		},
		search: function($obj, auto_fill){
			var val = $.trim($obj.val());
			if(!$obj.data('last')){
				$obj.data('last', val)
			}else{
				if(val == $obj.data('last')){
					return
				}
			}
			get_list(val, auto_fill);
		}
	}
}();