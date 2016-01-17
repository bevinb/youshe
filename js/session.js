window.ys = window.ys || {};

window.ys.Session = (function(){
    var currentUser = null;
	return {
		currentCity: 1,

		login: function (cb) {
			var token = $.cookie('.ASPXAUTH');
			if (!token) {
				window.location.href = 'login.html';
			}
			$.ajax({
				url: '/YSLoginService/Auth/AuthCheck/' + token,
				method: 'GET',
				success: function (user) {
					currentUser = user;
					if (cb)cb(user);
				},
				error: function (XMLHttpRequest, textStatus, thrownError) {
					alert("Error Occured!");
					window.location.href = 'login.html';
				}
			});
		},

		logout: function () {
			$.ajax({
				url: '/YSLoginService/AUth/Logout',
				method: 'GET',
				success: function (resp) {
					window.location.href = 'login.html';
				},
				error: function (XMLHttpRequest, textStatus, thrownError) {
					alert("Error Occured!");
				}
			});
		},

		changePwd: function () {
			var dlg = $('#changePwdDlg'), form = dlg.find('form');
			if (!form.form('validate'))return;
			var formData = $.form2Json(form);
			if(formData.NewPwd != formData.ConfirmNewPwd){
				$.messager.alert('提示','新密码两次输入不一致！','info');
				return;
			}
			var data = {
				OldPwd: $.md5(formData.OldPwd),
			    NewPwd: $.md5(formData.NewPwd)
		    };
			$.ajax({
				url: '/YSLoginService/User/ChangePWD',
				type: "POST",
				data: JSON.stringify(data),
				dataType: "json",
				contentType: "application/json; charset=utf-8",
				success: function (msg) {
					$.messager.alert('提示','密码修改成功！','success');
					dlg.dialog('close');
				},
				error: function (XMLHttpRequest, textStatus, thrownError) {
					alert("Error Occured!");
				}
			});
		}
	}
})();