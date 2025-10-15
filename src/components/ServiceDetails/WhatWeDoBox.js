import React from "react";
import { Grid2 as Grid } from "@mui/material";
import cx from "classnames";

import { StarGradiantIcon } from "@/components/Icons";

import { Heading } from "@/components/common";

import * as styles from "./WhatWeDoBox.module.scss";

function WhatWeDoBox(props) {
	const {id, title, heading, content, image, type } = props;

	return (
		<Grid
			size={{xs: 12, md: 6}}
			container
			spacing={2}
			className={cx(
				styles.whatWeDoBox,
				{
					[styles.floting]: type === "floting"
				}
			)}
			alignItems="flex-start"
			style={
				type !== "floting" ? {
					background: `#a0bcd1 url(${image}) no-repeat bottom center`
				} : {}
			}
		>
			<Grid
				size={12}
				container
				className={styles.whatWeDoBoxContentBox}
			>
				<Grid size={12} container spacing={2} alignItems="center">
					<Grid size={1}>
						<StarGradiantIcon width="35px" height="39px" />
					</Grid>
					<Grid size={9}>
						{title}
					</Grid>
					<Grid size={2} className={styles.textRight}>
						<div className={styles.button}>{id}.</div>
					</Grid>
				</Grid>
				<Grid size={12} container spacing={2} className={styles.whatWeDoBoxHeadingSection}>
					<Grid size={{xs: 12, sm: 6}}>
						<Heading variant="secondary" className={styles.lightText}>{heading}</Heading>
					</Grid>
					<Grid size={{xs: 12, sm: 6}} className={styles.mediumBold}>
						{content}
					</Grid>
				</Grid>
				{
					type === "floting" ? (
						<Grid size={12} className={styles.whatWeDoItemImage}>
							<img
								src={image}
								alt={heading}
							/>
						</Grid>
					) : null
				}
			</Grid>
		</Grid>
	);
}

export default WhatWeDoBox;
