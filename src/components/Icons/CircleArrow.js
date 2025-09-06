import React from "react";

export default function CircleArrow({
	fill="#000",
	...restProps
}) {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			fill={fill}
			viewBox="0 0 100 125"
			{...restProps}
		>
			<path d="M97.64,44.1,64.72,11.18a8.06,8.06,0,1,0-11.4,11.39L72.78,42H8.06a8.06,8.06,0,0,0,0,16.12H72.6L53.32,77.43a8.06,8.06,0,0,0,11.4,11.39L97.64,55.9A8,8,0,0,0,100,50.2a1.27,1.27,0,0,0,0-.2,1.41,1.41,0,0,0,0-.2A8.07,8.07,0,0,0,97.64,44.1Z"/>
		</svg>
	);
};
