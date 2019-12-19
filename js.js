
let arr = ["Москва-", "СПБ-", "Казань-","Харьков-", "Киев-"];
let arr1 = ["228-", "227-", "222-","200-", "286-"];
document.write (arr[0]+arr1[0]+arr[1]+arr1[1]+arr[2]+arr1[2]+arr[3]+arr1[3]+arr[4]+arr1[4])
alert (arr.length)

var modal = document.getElementById('mymodal');
var btn = document.getElementById("mybtn");
var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
	modal.style.display = "block";
}

span.onclick = function() {
	modal.style.display = "none";
}

window.onclick = function(event) {
	if (event.target ==modal) {
		modal.style.display = "none";
	}
}

var modal2 = document.getElementById('mymodal2');
var btn2 = document.getElementById("mybtn2");
var span = document.getElementsByClassName("close2")[0];

btn2.onclick = function() {
	modal2.style.display = "block";
}

span.onclick = function() {
	modal2.style.display = "none";
}


window.onclick = function(event) {
	if (event.target ==modal2) {
		modal2.style.display == "none";
	}
}
