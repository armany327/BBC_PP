function pullplanning() {
    
    document.addEventListener("deviceready", deviceInfo, true);
}

function msg()
{
	console.log('test')

	// ajax function to get data from server
	function loadDoc() {
	  var xhttp = new XMLHttpRequest();
	  xhttp.onreadystatechange = function() {
	    if (xhttp.readyState == 4 && xhttp.status == 200) {
	    var div = document.createElement('div')
	    div.innerHTML = xhttp.responseText;
	     document.body.appendChild(div);
	    }
	  };
	  xhttp.open("GET", "static/ajax_info.txt", true);
	  xhttp.send();
	}

	loadDoc();
}