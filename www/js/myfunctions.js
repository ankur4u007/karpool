function sendAjax() { 
	// get inputs
	var article = new Object();
	//article.ownerName = $('#ownerName').val();
	//article.phoneNo = $('#phoneNo').val();
	//article.deviceId = $('#deviceId').val();
	var ownerName = $('#ownerName').val();
	var phoneNo = $('#phoneNo').val();
	var deviceId = $('#deviceId').val();
	
	
	$.ajax({		
		url: "http://agile-plains-4849.herokuapp.com/MyServlet/users/?operation=persist&name=" + ownerName + "&phone=" + phoneNo +	"&deviceId=" + deviceId,		type: 'POST',
		dataType: 'json',
		data: JSON.stringify(article),
		contentType: 'application/json',
		mimeType: 'application/json',
				
		success: function (data) {								
			//storing ID in localStorage to display it on next page
			window.localStorage.setItem("vehicleId", data);			
        	var url = "index4.html";    
			$(location).attr('href',url);
        },
		error:function(data,status,er) {
			alert("error: "+data+" status: "+status+" er:"+er);
		}
	});	
}