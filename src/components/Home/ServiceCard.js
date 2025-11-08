import React, { useRef } from "react";
import { Grid2 as Grid } from '@mui/material';
import { useTransform, motion, useScroll } from "framer-motion";

import { LinkButton } from "@/components/common";

import * as styles from "./ServiceCard.module.scss";

export default function ServiceCard(props) {
	const {
		heading,
		subHeading,
		description,
		usp,
		image,
		imageClassName = "",
		progress,
		translateY = 400,
		link,
		imageType = "image"
	} = props;

	const serviceCardContainer = useRef(null);

	const parallax = useTransform(progress, [0, 1], [translateY, 0]);

	const MotionGrid = motion.create(Grid);

	return (
		<MotionGrid
			size={4}
			className={styles.fullSupportItemGrid}
			style={{
				y: parallax,
				willChange: "transform",
			}}
			ref={serviceCardContainer}
		>
			<Grid size={12} container className={styles.itemContent}>
				<Grid size={12} className={styles.itemHeading}>{heading}</Grid>
				<Grid size={12} className={styles.itemSubHeading}>{subHeading}</Grid>
				<Grid size={12} className={styles.itemText}>
					{description}
				</Grid>
				<Grid size={12} spacing={2} container alignItems="center">
					<Grid size={6}>
						<LinkButton to={link} style={{ "--button-bg": "#f2f0ea" }}>GET A FREE QUOTE</LinkButton>
					</Grid>
					<Grid size={6} container alignItems="flex-start">
						<Grid size={10} className={styles.itemSmallText}>
							{usp}
						</Grid>
						<Grid size={2}>
							<img src={require("../../assets/images/check-icon.png")} alt="" className={styles.checkIcon} />
						</Grid>
					</Grid>
				</Grid>
				<Grid size={12} className={styles.imageContainer}>
					{
						imageType === "image" ? (
							<img
								src={image}
								alt=""
								className={imageClassName}
							/>
						) : (
							<video muted autoPlay controls={false} loop playsInline>
								<source src={image} />
							</video>
						)
					}
				</Grid>
			</Grid>
		</MotionGrid>
	);
}
