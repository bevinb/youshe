ys.modules.Workbench =  (function() {
	function initRoomReport() {
		$.ajax({
			url: '/YSService/ReportService/GetRoomReportInfo',
			type: "GET",
			dataType: "json",
			contentType: "application/json; charset=utf-8",
			success: function (resp) {
				var tips = '<div>' +
					'<p><strong>所有房间：</strong>' + resp.RoomCount + '</p>' +
					'<p><strong>可租房间：</strong>' + resp.WaitCount + '</p>' +
					'<p><strong>已租房间：</strong>' + resp.CheckCount + '</p>' +
					'<p><strong>预定房间：</strong>' + resp.OrderCount + '</p>' +
					'<p><strong>平均租金：</strong>' + resp.AvgRent + '</p>'+
					'<p><strong>出租率：</strong>' + resp.RentalRate + '</p></div>';
				$('#workbenchRoomReport .chart-container').highcharts({
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
				$('#workbenchRoomReport .tips-container').html(tips);
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
				if(resp.list_FineInfo) {
					$.each(resp.list_FineInfo, function (i, o) {
						categories.push(o.StringDate);
						income.push(o.Income);
						expenditure.push(o.Expenditure);
					});
				}
				var tips = '<div>' +
					'<p><strong>本月应收：</strong>' + resp.Income_Actual_CurrentMonth + '</p>' +
					'<p><strong>本月已收：</strong>' + resp.Expenditure_Actual_CurrentMonth + '</p>' +
					'<p><strong>总计应收：</strong>' + resp.Income_Actual_Total + '</p>' +
					'<p><strong>总计已收：</strong>' + resp.Expenditure_Actual_Total + '</p>';
				$('#workbenchFineInfoReport .chart-container').highcharts({
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
				$('#workbenchFineInfoReport .tips-container').html(tips);
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

