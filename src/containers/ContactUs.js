import React from "react";
import { Helmet } from 'react-helmet-async';
import { Container, Grid2 as Grid } from "@mui/material";
import cx from "classnames";
import { useDevice } from '@/context/DeviceContext';

import { StarGradiantIcon } from "@/components/Icons";

import {
	Heading,
	LinkButton,
	QualityMetrics,
	Animate,
} from "@/components/common";

import masterHeadVideo from "@/assets/videos/contact-us-masterhead.mp4";

import * as styles from "./ContactUs.module.scss";

function ContactUs() {
	const { isMobile } = useDevice();

	return (
		<>
			<Helmet>
				<title>The Worlds Leading Studio You Can Trust | Glocal Studio</title>
				<meta name="description" content="Streamline your business with professional virtual assistant services. Get remote administrative support, scheduling, customer care, and more. Enhance productivity today!" />
			</Helmet>
			<section className={styles.masterHead}>
				<div className={styles.videoWrapper}>
					<video muted autoPlay controls={false} loop playsInline className={styles.masterHeadVideo}>
						<source src={masterHeadVideo} type="video/mp4" />
					</video>
				</div>
				<Container maxWidth="xl" className={styles.mainContainer}>
					<Grid
						size={12}
						container
						className={cx(styles.masterHeadInfoSection, styles.textCenter)}
						spacing={4}
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
							CONTACT GLOCAL STUDIO
						</Animate.FadeUp>
						<Grid size={12}>
							<Heading className={cx(styles.masterHeadingHeading, styles.extraLightText)}>A GLOBAL LEADER IN</Heading>
							<Heading className={styles.masterHeadingHeading}>3D VISUALIZATION</Heading>
						</Grid>
						<Animate.FadeUp
							element={Grid}
							elementProps={{
								px: {xs: 2, md: 0},
								size: {xs: 12, md: 8},
								offset: {xs: 0, md: 2},
							}}
							className={cx(styles.masterHeadText, styles.textWhite)}
						>
							Whether you're an architect, developer, or designer, we'd love to hear about your project. let's start building something extraordinary together.
						</Animate.FadeUp>
						<Grid size={12}>
							<LinkButton
								style={{ "--button-bg": "#060010", "--button-text-color":  "#f3f2ee" }}
							>
								TALK TO AN EXPERT
							</LinkButton>
						</Grid>
					</Grid>
				</Container>
			</section>
			<section className={styles.qualityMetricsContainer}>
				<Container maxWidth="xl">
					<QualityMetrics
						trustedBg="rgba(193, 227, 252, 0.8)"
						globalClientBg="rgba(255, 255, 255, 0.8)"
						yearsOfExperienceBg="rgba(255, 255, 255, 0.8)"
						repeatedClientBg="rgba(23, 32, 60, 0.8)"
						projectsBg="rgba(255, 255, 255, 0.8)"
					/>
				</Container>
			</section>
			{!isMobile &&
				<section className={styles.dividerSection} />
			}
		</>
	);
};

export default ContactUs;
