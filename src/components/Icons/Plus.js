import React from "react";

function PlusIcon(props) {
	const { fill = "#DEC4A5", ...restProps } = props;
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 76.07 76.07"
			fill={fill}
			{...restProps}
		>
			<path d="M69.07 31.04l-24.04 0 0 -24.04c0,-3.86 -3.13,-7 -7,-7 -3.86,0 -6.99,3.13 -6.99,7l0 24.04 -24.04 0c-3.87,0 -7,3.13 -7,6.99 0,3.86 3.13,7 7,7l24.04 0 0 24.04c0,3.86 3.12,7 6.99,7 3.86,0 7,-3.13 7,-7l0 -24.04 24.04 0c3.86,0 7,-3.13 7,-7 0,-3.86 -3.13,-6.99 -7,-6.99z"/>
		</svg>
	)
}

export default PlusIcon;
