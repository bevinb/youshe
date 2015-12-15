$(function(){

	var today = new Date();
	$('#leftMainMenu').panel("setTitle",today.getFullYear() + '年' + (today.getMonth() + 1) + '月' + today.getDate() + '日')


	$('.easyui-tree').tree({
		onClick: function(node){
			var link = node.tabLink;
			if(!link)return;
			var tpl = $('#' + link + 'TabTpl');
			var title = node.text;
			var tt = $('#mainPanel');

			if (tt.tabs('exists', title)){
				tt.tabs('select', title);
			} else {
				tt.tabs('add',{
					id: link + 'Tab',
					title:title,
					closable:true,
					href: 'templates/' + link + '.html',
					style: 'padding:5px;',
					onLoad : function(){
						$('#' + link + 'Tab').find('table.main').datagrid(window.grid.cfg[link]);

						if($('#' + link + 'Tab').find('table.sub').length > 0){
							$('#' + link + 'Tab').find('table.sub').datagrid(window.grid.cfg[link + 'Sub']);
						}
					},
					onClose:function(){

					}
				});
			}
		}
	});

	//initialize workbench
	ys.modules.Workbench.init();
});

function logout(){
	$.ajax({
		url: '/YSLoginService/AUth/Logout',
		method: 'GET',
		success: function ( resp) {
			window.location.href = 'login.html';
		},
		error: function (XMLHttpRequest, textStatus, thrownError) {
			alert("Error Occured!");
		}
	});
}

