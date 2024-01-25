export function throttle(fn, wait) {
	var time = Date.now();

	return function () {
		if (time + wait - Date.now() < 0) {
			fn();
			time = Date.now();
		}
	};
}

export function browserDetect() {
	let isChrome = navigator.userAgent.indexOf('Chrome') > -1;
	let isFireFox = navigator.userAgent.indexOf('Firefox') > -1;
	let isSafari = navigator.userAgent.indexOf('Safari') > -1;
	if (isChrome && isSafari) isSafari = false;

	return isChrome
		? 'chrome'
		: isFireFox
		? 'fireFox'
		: isSafari
		? 'safari'
		: 'unknown browser';
}
