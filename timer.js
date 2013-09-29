document.addEventListener('DOMContentLoaded', function() {
	"use strict";

	var hours = document.getElementById('hours');
	var mins = document.getElementById('mins');
	var colon = document.getElementById('colon');

	setInterval(updateTime, 1000);

	function updateTime() {
		var date = new Date(),
			h = date.getHours(),
			m = date.getMinutes(),
			s = date.getSeconds();
		if (h < 10) {
			h = "0" + h;
		}
		if (m < 10) {
			m = "0" + h;
		}
		hours.textContent = h;
		mins.textContent = m;
		colon.style.visibility = s % 2 ? 'hidden' : 'visible';
	}
	updateTime();
});