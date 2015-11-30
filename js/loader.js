window.ys = window.ys || {};

window.ys.loaders = {
	//��������
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
	//��ҵ��˾
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
	//����
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
	//��������
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
	//֤������
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
	//�����б�
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
	//���ݷ������
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
	//ҵ���б�
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