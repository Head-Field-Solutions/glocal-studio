import React from "react";
import { Grid2 as Grid } from "@mui/material";
import cx from "classnames";

import { StarGradiantIcon } from "@/components/Icons";

import { Heading, Animate } from "@/components/common";

import * as styles from "./WhatWeDoBox.module.scss";

function WhatWeDoBox(props) {
	const {id, title, heading, content, image, type, delay } = props;

	return (
		<Animate.FadeUp
			element={Grid}
			elementProps={{
				size: {xs: 12, md: 6},
				container: true,
				spacing: 2,
				alignItems: "flex-start"
			}}
			className={cx(
				styles.whatWeDoBox,
				{
					[styles.floting]: type === "floting"
				}
			)}
			delay={delay}
			distance="0 5rem"
			key={id}
			style={
				type !== "floting" ? {
					background: `#a0bcd1 url(${image}) no-repeat bottom center`,
					transition: "700ms ease-in-out",
				} : {
					transition: "700ms ease-in-out",
				}
			}
		>
			<Grid
				size={12}
				container
				className={styles.whatWeDoBoxContentBox}
			>
				<Grid size={12} container spacing={2} alignItems="center">
					<Grid size={{xs:1.5, md:1}} >
						<StarGradiantIcon width="35px" height="39px" />
					</Grid>
					<Grid
						size={2} 
						sx={{
							display: { xs: "none", md: "block" }, // hide on mobile, show on tablet+
							order: { xs: 0, md: 3 }
						}}
						className={styles.textRight}
						
					>
						<div className={styles.button}>{id}.</div>
					</Grid>
					<Grid size={{xs: 10, md: 9}} >
						{title}
					</Grid>
					
				</Grid>
				<Grid size={12} container spacing={2}  className={styles.whatWeDoBoxHeadingSection}>
					<Grid size={{xs: 12, md: 6}}>
						<Heading variant="secondary" className={styles.lightText}>{heading}</Heading>
					</Grid>
					<Animate.FadeUp
						element={Grid}
						elementProps={{
							size: {xs: 12, md: 6}
						}}
						className={styles.mediumBold}
					>
						{content}
					</Animate.FadeUp>
				</Grid>
				{
					type === "floting" ? (
						<Animate.FadeUp
							element={Grid}
							elementProps={{
								size: 12
							}}
							className={styles.whatWeDoItemImage}
						>
							<img
								src={image}
								alt={heading}
							/>
						</Animate.FadeUp>
					) : null
				}
			</Grid>
		</Animate.FadeUp>
	);
}

export default WhatWeDoBox;