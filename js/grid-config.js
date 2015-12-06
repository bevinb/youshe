window.grid = {};
window.grid.cfg = {
	
	rooms: {
		singleSelect:true,
		columns:[[
			{field:'code',title:'编号',width:100},
			{field:'code',title:'社区',width:100},
			{field:'code',title:'小区',width:100},
			{field:'name',title:'业主',width:100},
			{field:'name',title:'地址',width:100},
			{field:'price',title:'状态',width:100},
			{field:'price',title:'备注',width:100}
		]]
	},
	
	preserve: {
		singleSelect:true,
		region:'center',
		columns:[[
		    {field:'code',title:'编号',width:100},
			{field:'code',title:'房源名称',width:100},
			{field:'code',title:'业主',width:100},
			{field:'code',title:'入住人',width:100},
			{field:'code',title:'状态',width:100},
			{field:'code',title:'创建时间',width:100},
			{field:'code',title:'最后修改时间',width:100},
			{field:'name',title:'纸质合同编号',width:100},
			{field:'name',title:'租期',width:100},
			{field:'name',title:'入住日期',width:100},
			{field:'name',title:'租金付款方式',width:100},
			{field:'name',title:'销售管家',width:100},
			{field:'name',title:'紧急联系人',width:100},
			{field:'name',title:'紧急联系人电话',width:100}
		]],
		toolbar: [{
			id: '',
			text: '预约',
			iconCls: 'icon-add',
			handler: function () {}
		}, "-"]
	},
	
	movein: {
		singleSelect:true,
		region:'center',
		columns:[[
		    {field:'code',title:'编号',width:100},
			{field:'code',title:'房源名称',width:100},
			{field:'code',title:'业主',width:100},
			{field:'code',title:'入住人',width:100},
			{field:'code',title:'状态',width:100},
			{field:'code',title:'创建时间',width:100},
			{field:'code',title:'最后修改时间',width:100},
			{field:'name',title:'纸质合同编号',width:100},
			{field:'name',title:'租期',width:100},
			{field:'name',title:'入住日期',width:100},
			{field:'name',title:'租金付款方式',width:100},
			{field:'name',title:'销售管家',width:100},
			{field:'name',title:'紧急联系人',width:100},
			{field:'name',title:'紧急联系人电话',width:100}
		]]
	},
	
	return: {
		singleSelect:true,
		region:'center',
		columns:[[
		    {field:'code',title:'编号',width:100},
			{field:'code',title:'房源名称',width:100},
			{field:'code',title:'业主',width:100},
			{field:'code',title:'入住人',width:100},
			{field:'code',title:'状态',width:100},
			{field:'code',title:'创建时间',width:100},
			{field:'code',title:'最后修改时间',width:100},
			{field:'name',title:'纸质合同编号',width:100},
			{field:'name',title:'租期',width:100},
			{field:'name',title:'入住日期',width:100},
			{field:'name',title:'租金付款方式',width:100},
			{field:'name',title:'销售管家',width:100},
			{field:'name',title:'紧急联系人',width:100},
			{field:'name',title:'紧急联系人电话',width:100}
		]],
		toolbar: [{
			id: '',
			text: '退房',
			iconCls: 'icon-cancel',
			handler: function () { }
		}, "-"]
	},

	

	
	trends: {
		//url:'datagrid_data.json',

		toolbar: $('#trendsTbTpl').html()
	},

	fee: {
		singleSelect:true,
		columns:[[
			{field:'code',title:'编号',width:100},
			{field:'code',title:'类别',width:100},
			{field:'code',title:'缴费号',width:100},
			{field:'code',title:'金额',width:100},
			{field:'name',title:'收款方',width:100},
			{field:'name',title:'付款日期',width:100},
			{field:'price',title:'付款人',width:100},
			{field:'price',title:'备注',width:100}
		]],
		toolbar: [{
			id: '',
			text: '新增',
			iconCls: 'icon-add',
			handler: function () {
				$('#editFeeDlg').dialog('open').dialog('center').dialog('setTitle','新增缴费');
			}
		}, "-", {
			id: '',
			text: '删除',
			iconCls: 'icon-remove',
			handler: confirmRemove
		}, "-"]
	},

	documents: {
		singleSelect:true,
		columns:[[
			{field:'code',title:'交易时间',width:100},
			{field:'code',title:'名称',width:100},
			{field:'price',title:'期数:',width:100},
			{field:'name',title:'金额',width:100},
			{field:'price',title:'类型:',width:100},
			{field:'price',title:'状态:',width:100},
			{field:'price',title:'付款日期:',width:100},
			{field:'price',title:'操作:',width:100}
		]],
		toolbar: [{
			id: '',
			text: '新增收入',
			iconCls: 'icon-add',
			handler: function () {
				$('#documentsDlg').dialog('open').dialog('center').dialog('setTitle','新增收入');
			}
		}, "-", {
			id: '',
			text: '新增支出',
			iconCls: 'icon-add',
			handler: function () {
				$('#documentsDlg').dialog('open').dialog('center').dialog('setTitle','新增支出');
			}
		}, "-", {
			id: '',
			text: '待收费用',
			iconCls: 'icon-add',
			handler: function () {
			}
		}, "-", {
			id: '',
			text: '待付费用',
			iconCls: 'icon-add',
			handler: function () {
			}
		}, "-"]
	},

	roomPrice: {
		columns:[[
			{field: 'code', title: '房间编号', width: 100},
			{field: 'code', title: '状态', width: 100},
			{field: 'code', title: '价格', width: 100},
			{field: 'code', title: '操作', width: 100}
	    ]]
	}
};

function confirmRemove(){
	$.messager.confirm('确认','确认删除?',function(r){
		if (r){
		}
	});
}

function confirmCancelCrontract(){
	$.messager.confirm('确认','确认作废该合同?',function(r){
		if (r){
		}
	});
}

function confirmFinishCrontract(){
	$.messager.confirm('确认','确认终止该合同?',function(r){
		if (r){
		}
	});
}