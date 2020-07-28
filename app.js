$(document).on('knack-view-render.view_151', function (event, view, data) {
	//Select our elements we want to change
	const dates = document.getElementById('view_151-field_283');
	const times = document.getElementById('view_151-field_284');

	//add event listener to change event
	dates.addEventListener('change', update);

	//create our hour's arrays to loop over based on selection
	const hours1 = [
		'3:00 pm',
		'3:30 pm',
		'4:00 pm',
		'4:30 pm',
		'5:00 pm',
		'5:30 pm',
		'6:00 pm',
	];
	const hours2 = [
		'10:00 am',
		'10:30 am',
		'11:00 am',
		'11:30 am',
		'12:00 pm',
		'12:30 pm',
		'1:00 pm',
		'1:30 pm',
		'2:00 pm',
	];

	//update drop down function
	// if options index is a specfic index then run change Times function with a specific hours arr passed in.
	function update(e) {
		if (dates.options.selectedIndex === 1) {
			changeTimes(hours1);
		} else if (dates.options.selectedIndex === 2) {
			changeTimes(hours1);
		} else if (dates.options.selectedIndex === 3) {
			changeTimes(hours2);
		} else if (dates.options.selectedIndex === 4) {
			changeTimes(hours2);
		}
	}

	//change times function
	function changeTimes(arr) {
		//clear the times dropdown
		times.length = 0;
		//loop over the arr we passed in and create the options elments for each option
		for (let i = 0; i < arr.length; i++) {
			const option = document.createElement('OPTION');
			const txt = document.createTextNode(arr[i]);
			option.appendChild(txt);
			option.setAttribute('value', arr[i]);
			times.insertBefore(option, times.lastChild);
		}
	}
});
