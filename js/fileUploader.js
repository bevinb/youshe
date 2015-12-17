ys.modules.FileUploader =  (function() {
	var uploader = null;
	var handler = null;
	var files = null;

	function init(){
		uploader = new qq.FineUploader({
			debug: true,
			template: 'qq-template-gallery',
			element: $("#fileUploaderDlg .file-uploader")[0],
			request: {
				endpoint: '/ysuploadfile/FileUpload.aspx'
			},
			thumbnails: {
				placeholders: {
					waitingPath: '/source/placeholders/waiting-generic.png',
					notAvailablePath: '/source/placeholders/not_available-generic.png'
				}
			},
			validation: {
				allowedExtensions: ['jpeg', 'jpg']
			},
			callbacks: {
				onComplete: function (id, fileName, responseJson) {
					if (responseJson.success) {
						files.push(responseJson.filePath);
					}
				}
			}
		});
	};

	function open(opts){
		var dlg = $('#fileUploaderDlg');
		dlg.dialog('open').dialog('center').dialog('setTitle','图片上传');
		if(!uploader){
			init();
		}
		handler = opts.callback;
		files = [];
		$("#fileUploaderDlg").find('.qq-upload-success').remove();
	}

	function confirm() {
		if(handler){
			handler(files);
		}
		$('#fileUploaderDlg').dialog('close');
	};

	function cancel(){
		$('#fileUploaderDlg').dialog('close');
	}

	return {
		open: open,
		confirm: confirm,
		cancel: cancel
	};
})();

