$.extend({
	wcfDate2JsDate: function (wcfDate) {
		var date = new Date(parseInt(wcfDate.substring(6)));
		return date;
	},
	jsDate2WcfDate: function (jsDate) {
		// \/Date(568310400000+0800)\/
		return "\/Date(" + jsDate.getTime() + "+0800)\/";
	},
	wcfDate2JsDateStr: function (value) {
		if (!value) {
			return "";
		}
		var date = new Date(parseInt(value.substring(6)));
		var y = date.getFullYear();
		var m = date.getMonth() + 1;
		var d = date.getDate();
		return y + '-' + (m > 9? m: ('0' + m)) + '-' + (d > 9? d: ('0' + d));
	},
	jsDateStr2WcfDate: function (jsDate) {
		if(jsDate) {
			return "\/Date(" + (new Date(jsDate)).getTime() + "+0800)\/";
		} else {
			return '';
		}
	},
	jsDate2jsDateStr: function(date){
		var y = date.getFullYear();
		var m = date.getMonth() + 1;
		var d = date.getDate();
		return y + '-' + (m > 9? m: ('0' + m)) + '-' + (d > 9? d: ('0' + d));
	},

	form2JsonNotNull: function(form){
		var formData =  form.serializeArray();
		var data = {};
		$.each(formData, function(i, v) {
			if (v === 0 || v.value) {
				data[v.name] = v.value;
			}
		});
		return data;
	},

	form2Json: function(form){
		var formData =  form.serializeArray();
		var data = {};
		$.each(formData, function(i, v) {
			data[v.name] = v.value;
		});
		return data;
	},

	print: function(htmlStr){
		frames['printZone'].contentWindow.document.body.innerHTML = htmlStr;
		frames['printZone'].contentWindow.print();
	},

	scheduleStyler: function(v){alert(v.length)
		if(v == 'ÊÕ×â'){
			return 'background-color:#0044BB;color:#fff;'
		} else if(v == '½»×â'){
			return 'background-color:#FF8800;color:#fff;'
		} else {
			return 'background-color:#FF3333;color:#fff;'
		}
	}
});

window.ys = window.ys || {};
ys.modules = ys.modules || {};