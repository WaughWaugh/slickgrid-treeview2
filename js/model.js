(function($){
	$.extend(true, window, {
		Mapline: {
			DataProvider: {
				Model : Model
			}
		}
	});

	function Model(items) {
		var model = items;

		$.extend(this, {
			"getLength" : getLength,
			"getItem" : getItem
		})
	}

})(jQuery);
