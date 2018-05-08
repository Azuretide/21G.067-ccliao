function hideAll() {
	for (let c of Util.all('.form')) {
		console.log(c);
		c.hidden = true;
	}
}

Util.events(document, {
	"DOMContentLoaded": function() {
		// Setup Tasks
		
		// Page Transitions
		for (let l of Util.all('.to-main')) {
			l.addEventListener('click', function() {
				hideAll();
				Util.one('#card-main').hidden = false;
			});
		}

		for (let l of Util.all('.to-exposition')) {
			l.addEventListener('click', function() {
				hideAll();
				Util.one('#card-expo').hidden = false;
			});
		}

		for (let l of Util.all('.to-themes')) {
			l.addEventListener('click', function() {
				hideAll();
				Util.one('#card-themes').hidden = false;
			});
		}

		for (let l of Util.all('.to-analysis')) {
			l.addEventListener('click', function() {
				hideAll();
				Util.one('#card-analysis').hidden = false;
			});
		}

		for (let l of Util.all('.to-sources')) {
			l.addEventListener('click', function() {
				hideAll();
				Util.one('#card-sources').hidden = false;
			});
		}

	},
});