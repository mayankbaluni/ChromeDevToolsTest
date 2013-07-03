$(window).on("orientationchange", checkOrientation);

$(document).ready(function(){
	$('#save').click(saveData);
	checkOrientation();
});

function checkOrientation() {
	if (window.orientation == 0) {
		$('#orientation').text('Vertical');
	} else {
		$('#orientation').text('Horizontal');
	}
}

function saveData() {
	var data = localStorage.getItem("data");
	if (data != null) {
		localStorage.setItem("data",parseInt(data)+1);
	} else {
		localStorage.setItem("data",0);
	}
}