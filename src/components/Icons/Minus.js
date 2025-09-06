import React from "react";

function MinusIcon(props) {
	const { fill = "#DEC4A5", ...restProps } = props;
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 100.24 18.44"
			fill={fill}
			{...restProps}
		>
			<path d="M91.01 0c-58.18,0 -23.6,0 -81.79,0 -5.1,0 -9.22,4.13 -9.22,9.22 0,5.09 4.12,9.22 9.22,9.22 58.19,0 23.61,0 81.79,0 5.09,0 9.23,-4.12 9.23,-9.22 0,-5.09 -4.13,-9.22 -9.23,-9.22z"/>
		</svg>
	)
}

export default MinusIcon;
