import React from "react";
import { Helmet } from 'react-helmet-async';
import { Container, Grid2 as Grid } from "@mui/material";
import cx from "classnames";

import { useDevice } from '@/context/DeviceContext';
import { StarGradiantIcon } from "@/components/Icons";

import {
	Heading,
	LinkButton,
	Animate,
} from "@/components/common";

import masterHeadVideo from "@/assets/videos/portfolio-masterhead.mp4";
import masterHeadVideoSmall from "@/assets/videos/portfolio-masterhead.webm";

import * as styles from "./Services.module.scss";

function About() {
	return (
		<>
			<Helmet>
				<title>The Worlds Leading Studio You Can Trust | Glocal Studio</title>
				<meta name="description" content="Streamline your business with professional virtual assistant services. Get remote administrative support, scheduling, customer care, and more. Enhance productivity today!" />
			</Helmet>
			<section className={styles.masterHead}>
				<div className={styles.videoWrapper}>
					<video muted autoPlay controls={false} loop playsInline className={styles.masterHeadVideo}>
						<source src={masterHeadVideoSmall} type="video/webm" />
						<source src={masterHeadVideo} type="video/mp4" />
					</video>
				</div>
				<Container maxWidth="xl" className={styles.mainContainer}>
					<Grid
						size={12}
						container
						className={cx(styles.masterHeadInfoSection, styles.textCenter)}
						spacing={{xs: 1, md: 4}}
					>
						<Animate.ScaleIn
							element={Grid}
							elementProps={{
								size: 12, 
								justifyContent: "center",
							}}
						>
							<StarGradiantIcon width="40px" height="47px" />
						</Animate.ScaleIn>
						<Animate.FadeUp
							element={Grid}
							elementProps={{
								size: 12,
							}}
							className={styles.acturalVisualizationHeading}
							direction="down"
						>
							Portfolio
						</Animate.FadeUp>
						<Grid size={12} mb={{xs:2, md:0}}>
							<Heading className={cx(styles.masterHeadingHeading, styles.extraLightText)}>From Earthly Plans to</Heading>
							<Heading className={styles.masterHeadingHeading}>Cosmic Visuals</Heading>
						</Grid>
						<Animate.FadeUp
							element={Grid}
							elementProps={{
								size: {xs: 12, md: 8},
								offset: {xs:0, md:2},
								mb:{xs:2, md:0}
							}}
							className={cx(styles.masterHeadText, styles.textWhite)}
						>
							We are curious explorers of design, delivering world-class 3D renderings, product visuals, and immersive experiences-without limits.
						</Animate.FadeUp>
						<Grid size={12}>
							<LinkButton
								style={{ "--button-bg": "#060010", "--button-text-color":  "#f3f2ee" }}
							>
								explore our services
							</LinkButton>
						</Grid>
					</Grid>
				</Container>
			</section>
		</>
	);
};

export default About;
