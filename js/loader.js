window.ys = window.ys || {};

window.ys.loaders = {
	//服务中心
	serviceCenterLoader: function(param,success,error){
		$.ajax({
			url: '/YSService/ServiceCenterService/GetDataList',
			method: 'POST',
			data: JSON.stringify({IsActive:1}),
			dataType: "json",
			contentType: "application/json; charset=utf-8",
			success: function ( resp) {
				success(resp);
			},
			error: function (XMLHttpRequest, textStatus, thrownError) {
				error.apply(this, arguments);
			}
		});
	},
	//物业公司
	propertyLoader: function(param,success,error){
		$.ajax({
			url: '/YSService/PropertyService/GetDataList',
			method: 'POST',
			data: JSON.stringify({IsActive:1}),
			dataType: "json",
			contentType: "application/json; charset=utf-8",
			success: function ( resp) {
				success(resp);
			},
			error: function (XMLHttpRequest, textStatus, thrownError) {
				error.apply(this, arguments);
			}
		});
	},
	//社区
	communityLoader: function(param,success,error){
		$.ajax({
			url: '/YSService/CommunityService/GetDataList',
			method: 'POST',
			data: JSON.stringify({CityID: ys.Session.currentCity}),
			dataType: "json",
			contentType: "application/json; charset=utf-8",
			success: function ( resp) {
				success(resp);
			},
			error: function (XMLHttpRequest, textStatus, thrownError) {
				error.apply(this, arguments);
			}
		});
	},
	//付款类型
	payTypeLoader: function(param,success,error){
		$.ajax({
			url: '/YSService/BaseInfoService/GetPayTypeList',
			method: 'GET',
			dataType: "json",
			contentType: "application/json; charset=utf-8",
			success: function ( resp) {
				success(resp);
			},
			error: function (XMLHttpRequest, textStatus, thrownError) {
				error.apply(this, arguments);
			}
		});
	},
	//证件类型
	idTypeLoader: function(param,success,error){
		$.ajax({
			url: '/YSService/BaseInfoService/GetIDTypeList',
			method: 'GET',
			dataType: "json",
			contentType: "application/json; charset=utf-8",
			success: function ( resp) {
				success(resp);
			},
			error: function (XMLHttpRequest, textStatus, thrownError) {
				error.apply(this, arguments);
			}
		});
	},
	//银行列表
	bankListLoader: function(param,success,error){
		$.ajax({
			url: '/YSService/BaseInfoService/GetDataList',
			method: 'GET',
			dataType: "json",
			contentType: "application/json; charset=utf-8",
			success: function ( resp) {
				success(resp);
			},
			error: function (XMLHttpRequest, textStatus, thrownError) {
				error.apply(this, arguments);
			}
		});
	},
	//房屋费用类别
	houseCostTypeLoader: function(param,success,error){
		$.ajax({
			url: '/YSService/BaseInfoService/GetHouseCostTypeList',
			method: 'GET',
			dataType: "json",
			contentType: "application/json; charset=utf-8",
			success: function ( resp) {
				success(resp);
			},
			error: function (XMLHttpRequest, textStatus, thrownError) {
				error.apply(this, arguments);
			}
		});
	},
	//业主列表
	ownersLoader: function(param,success,error){
		$.ajax({
			url: '/YSService/OwnerService/GetDataList',
			method: 'POST',
			data: JSON.stringify({CityID: ys.Session.currentCity}),
			dataType: "json",
			contentType: "application/json; charset=utf-8",
			success: function ( resp) {
				success(resp);
			},
			error: function (XMLHttpRequest, textStatus, thrownError) {
				error.apply(this, arguments);
			}
		});
	}
};