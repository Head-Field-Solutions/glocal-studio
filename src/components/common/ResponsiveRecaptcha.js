import React, { useEffect, useRef, useState } from 'react';
import * as styles from './ResponsiveRecaptcha.module.scss';

/**
 * Responsive wrapper for Google reCAPTCHA v2 checkbox widget.
 * Automatically scales down the widget when the container width is less than 304px,
 * adjusting both the CSS transform and the layout box dimensions to eliminate overflow.
 */
const ResponsiveRecaptcha = ({ children, align = 'center', className = '', style = {} }) => {
	const containerRef = useRef(null);
	const [scale, setScale] = useState(1);

	useEffect(() => {
		if (typeof window === 'undefined') return;

		const updateScale = () => {
			if (!containerRef.current) return;
			// Measure container available width (or parent element if container has flex/inline properties)
			const parentWidth =
				containerRef.current.parentElement?.clientWidth || containerRef.current.clientWidth;

			if (parentWidth > 0 && parentWidth < 304) {
				// Keep a 4px safety buffer so it never touches container borders
				const targetScale = Math.min(1, Math.max(0.65, (parentWidth - 4) / 304));
				setScale(Number(targetScale.toFixed(3)));
			} else {
				setScale(1);
			}
		};

		// Initial calculation
		updateScale();

		// Use ResizeObserver for responsive scaling if available
		let resizeObserver = null;
		if (window.ResizeObserver && containerRef.current) {
			const targetEl = containerRef.current.parentElement || containerRef.current;
			resizeObserver = new ResizeObserver(() => {
				updateScale();
			});
			resizeObserver.observe(targetEl);
		}

		window.addEventListener('resize', updateScale);
		window.addEventListener('orientationchange', updateScale);

		return () => {
			if (resizeObserver) {
				resizeObserver.disconnect();
			}
			window.removeEventListener('resize', updateScale);
			window.removeEventListener('orientationchange', updateScale);
		};
	}, []);

	const isLeft = align === 'left';
	const scaledWidth = Math.round(304 * scale);
	const scaledHeight = Math.round(78 * scale);

	return (
		<div
			ref={containerRef}
			className={`${styles.container} ${isLeft ? styles.alignLeft : styles.alignCenter} ${className}`}
			style={style}
		>
			<div
				className={styles.scaler}
				style={{
					width: `${scaledWidth}px`,
					height: `${scaledHeight}px`,
				}}
			>
				<div
					className={styles.inner}
					style={{
						transform: `scale(${scale})`,
						WebkitTransform: `scale(${scale})`,
						transformOrigin: isLeft ? 'left center' : 'center center',
						WebkitTransformOrigin: isLeft ? 'left center' : 'center center',
					}}
				>
					{children}
				</div>
			</div>
		</div>
	);
};

export default ResponsiveRecaptcha;
