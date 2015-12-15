ys.modules.Workbench =  (function() {
	function initRoomReport() {
		$.ajax({
			url: '/YSService/ReportService/GetRoomReportInfo',
			type: "GET",
			dataType: "json",
			contentType: "application/json; charset=utf-8",
			success: function (resp) {
				$('#workbenchRoomReport').highcharts({
					chart: {
						type: 'pie'
					},
					title: {
						text: '房间统计'
					},
					series: [{
						name: '数量',
						colorByPoint: true,
						data: [{
							name: '已租房间',
							y: resp.CheckCount
						}, {
							name: '未租房间',
							y: resp.WaitCount,
							sliced: true,
							selected: true
						}, {
							name: '预订房间',
							y: resp.OrderCount
						}]
					}]
				});
			},
			error: function (XMLHttpRequest, textStatus, thrownError) {
				alert("Error Occured!");
			}
		});
	};

	function initFineInfoReport() {
		$.ajax({
			url: '/YSService/ReportService/GetFineInfo',
			type: "GET",
			success: function (resp) {
				var categories = [], income = [], expenditure = [];
				$.each(resp, function(i, o){
					categories.push(o.StringDate);
					income.push(o.Income);
					expenditure.push(o.Expenditure);
				});
				$('#workbenchFineInfoReport').highcharts({
					title: {
						text: '流水统计',
						x: -20 //center
					},
					xAxis: {
						categories: categories
					},
					yAxis: {
						title: {
							text: '金额 (元)'
						},
						plotLines: [{
							value: 0,
							width: 1,
							color: '#808080'
						}]
					},
					tooltip: {
						valueSuffix: '元'
					},
					legend: {
						layout: 'vertical',
						align: 'right',
						verticalAlign: 'middle',
						borderWidth: 0
					},
					series: [{
						name: '收入',
						data: income
					}, {
						name: '支出',
						data: expenditure
					}]
				});
			},
			error: function (XMLHttpRequest, textStatus, thrownError) {
				alert("Error Occured!");
			}
		});
	};

	function initHouseGrid(){
		$.ajax({
			url: '/YSService/HouseService/GetDataList',
			method: 'POST',
			data: JSON.stringify({}),
			dataType: "json",
			contentType: "application/json; charset=utf-8",
			success: function (resp) {
				$('#workbenchHouseGrid').find('table.house').datagrid('loadData', {
					total: resp.length,
					rows: resp
				});
			},
			error: function (XMLHttpRequest, textStatus, thrownError) {
				alert("Error Occured!");
			}
		});
	}

	return {
		init: function(){
			initRoomReport();
			initFineInfoReport();
			initHouseGrid();
		}
	};
})();

