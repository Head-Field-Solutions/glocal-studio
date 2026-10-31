/**
 * Global handler for Google reCAPTCHA v2 challenge popups ("Select all squares with...").
 * Google injects these challenge popups directly onto document.body with fixed 400px width.
 * On mobile devices and narrow desktop/laptop windows, this causes the challenge to overflow offscreen.
 * This handler observes when challenge iframes are rendered, centers them relative to the viewport,
 * and scales them down proportionally so all challenge tiles and the "VERIFY" button fit completely on screen.
 */
export const initRecaptchaChallengeHandler = () => {
	if (typeof window === 'undefined' || typeof document === 'undefined') {
		return () => {};
	}

	const adjustPopups = () => {
		const iframes = document.querySelectorAll(
			'iframe[src*="recaptcha/api2/bframe"], iframe[title*="recaptcha challenge"]'
		);

		iframes.forEach((iframe) => {
			let container = iframe.parentElement;
			// Traverse up to find the root injected popup container on document.body or high z-index
			while (container && container.parentElement && container.parentElement !== document.body) {
				if (container.style && container.style.zIndex === '2000000000') {
					break;
				}
				container = container.parentElement;
			}

			if (!container || container === document.body) {
				container = iframe.closest('div[style*="2000000000"]') || iframe.parentElement;
			}

			if (!container) return;

			const vw = window.innerWidth;
			const vh = window.innerHeight;
			const rect = container.getBoundingClientRect();

			// Challenge popup is approximately 400px wide and 580px high
			const isSmallScreen = vw < 440 || vh < 600;
			const isOverflowing = rect.right > vw || rect.left < 0;

			if (isSmallScreen || isOverflowing) {
				const padding = 16;
				const scaleW = (vw - padding) / 400;
				const scaleH = (vh - padding) / 580;
				const scale = Math.min(1, Math.max(0.6, Math.min(scaleW, scaleH)));

				container.style.setProperty('position', 'fixed', 'important');
				container.style.setProperty('top', '50%', 'important');
				container.style.setProperty('left', '50%', 'important');
				container.style.setProperty('transform', `translate(-50%, -50%) scale(${scale.toFixed(3)})`, 'important');
				container.style.setProperty('-webkit-transform', `translate(-50%, -50%) scale(${scale.toFixed(3)})`, 'important');
				container.style.setProperty('transform-origin', 'center center', 'important');
				container.style.setProperty('-webkit-transform-origin', 'center center', 'important');
				container.style.setProperty('max-width', '100vw', 'important');
				container.style.setProperty('box-sizing', 'border-box', 'important');

				// Hide pointing bubble arrows since the popup is centered
				const arrows = container.querySelectorAll('.g-recaptcha-bubble-arrow');
				arrows.forEach((arrow) => {
					arrow.style.setProperty('display', 'none', 'important');
				});
			}
		});
	};

	// Run adjust immediately
	adjustPopups();

	// Observe DOM changes on document.body
	let observer = null;
	if (typeof MutationObserver !== 'undefined') {
		observer = new MutationObserver(() => {
			adjustPopups();
		});
		observer.observe(document.body, {
			childList: true,
			subtree: true,
			attributes: true,
			attributeFilter: ['style', 'class'],
		});
	}

	window.addEventListener('resize', adjustPopups);
	window.addEventListener('orientationchange', adjustPopups);

	return () => {
		if (observer) observer.disconnect();
		window.removeEventListener('resize', adjustPopups);
		window.removeEventListener('orientationchange', adjustPopups);
	};
};
