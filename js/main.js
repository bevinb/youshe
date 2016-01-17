$(function(){

	var today = new Date();
	var leftMenu = $('#leftMainMenu');
	var leftMenuList = $($('#left-menu-tpl').html()).appendTo($('#leftMainMenu'));
	leftMenu.panel("setTitle",today.getFullYear() + '年' + (today.getMonth() + 1) + '月' + today.getDate() + '日');
	ys.Session.login(function(user){
		var userMenu = $('#Headermenu .username').html(user.UserName).menubutton({
			menu:'#userMenu',
		});
		$(userMenu.menubutton('options').menu).menu({
			onClick: function (item) {
				if(item.text == '修改密码'){
					$('#changePwdDlg').dialog('open');
					$('#changePwdDlg').find('form').form('clear');
				} else if(item.text == '安全退出'){
					ys.Session.logout();
				}
			}
		});

		$.ajax({
			url: '/YSLoginService/User/GetUsablePages',
			type: "POST",
			data: JSON.stringify({UserID: user.UserID, IsInMenuOnly: true}),
			dataType: "json",
			contentType: "application/json; charset=utf-8",
			success: function (resp) {
				$.each(resp, function(i, v){
					leftMenu.find('ul[module-id=' + v.ModuleID + ']').append('<li data-options="tabLink:\'' + v.PageURL + '\'">' + v.PageName + '</li>');
				});

				//remove blank modules
				leftMenu.find('.system-module').each(function(i, o){
					if($(o).find('ul[module-id] li').length < 1){
						$(o).remove();
					}
				});

				$.parser.parse(leftMenu);
				leftMenu.find('.easyui-tree').tree({
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
				$('.system-loading-mask').remove();
			},
			error: function (XMLHttpRequest, textStatus, thrownError) {
				alert("Error Occured!");
			}
		});
	});

	//initialize workbench
	ys.modules.Workbench.init();
});

