function get_form_data(form, fields){
	var data = {}
	for(var field of fields){
		data[field] = form[field].value;
	}
	return data;
}

function submit() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
	if (xhttp.readyState == 4 && xhttp.status == 200) {
		console.log('response from server: '+xhttp.responseText);
	}
  };
  xhttp.open("POST", "api/submit", true);
  xhttp.setRequestHeader("Content-type", "application/json");
  var data = get_form_data(form, fields);
  xhttp.send(JSON.stringify(data));

  return false;
}

function build_form(fields){
	form = document.createElement('form');
	for(var field of fields){
		var brk = document.createElement('br');
		
		var txt = document.createElement('span');
		txt.innerHTML = field+': ';

		var input = document.createElement('input');
		input.type = 'text';
		input.name = field;

		form.appendChild(txt);
		form.appendChild(input);
		form.appendChild(brk);
	}

	var btn = document.createElement('input');
	btn.id = 'submit';
	btn.type = 'submit';
	btn.value = 'Submit';
	form.appendChild(btn);

	return form;
}

var fields = ['company', 'firstname', 'lastname'];
var form = build_form(fields);
form.onsubmit = submit;
document.body.appendChild(form);


