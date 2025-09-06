import React from "react";

function Tick(props) {
	const { fill = "#000", ...restProps } = props;
	return (
		<svg
			viewBox="0 0 100 125"
			fillRule="evenodd"
			clipRule="evenodd"
			fill={fill}
			{...restProps}
		>
			<path d="M36.8,74.7c-0.7,0-1.3-0.2-1.8-0.7L16.8,56c-1-1-1-2.6,0-3.6c1-1,2.6-1,3.6,0l16.4,16.2L79.6,26c1-1,2.6-1,3.6,0   c1,1,1,2.6,0,3.6L38.6,74C38.1,74.5,37.5,74.7,36.8,74.7z" />
		</svg>
	)
}

export default Tick;
