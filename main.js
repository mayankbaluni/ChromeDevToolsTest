window.addEventListener("orientationchange", checkOrientation, false);

$(document).ready(checkOrientation);

function checkOrientation() {
	if (window.orientation == 0) {
		$('#orientation').text('Vertical');
	} else {
		$('#orientation').text('Horizontal');
	}
}