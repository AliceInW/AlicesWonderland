(function(d, c) {
	var e = d.documentElement,
		b = "orientationchange" in window ? "orientationchange" : "resize",
		a = function() {
			var f = e.clientWidth;
			if(f>=640){
				f=640;
			}
			if (!f) {
				return;
			}
			e.style.fontSize = 100 * (f / 320) + "px";
		};
	if (!d.addEventListener) {
		return;
	}
	c.addEventListener(b, a, false);
	d.addEventListener("DOMContentLoaded", a, false)
})(document, window);