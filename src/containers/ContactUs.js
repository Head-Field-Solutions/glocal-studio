import React from "react";
import { Helmet } from 'react-helmet-async';
import { Container, Grid2 as Grid } from "@mui/material";
import cx from "classnames";

import { StarGradiantIcon } from "@/components/Icons";

import {
	Heading,
	LinkButton,
	QualityMetrics,
} from "@/components/common";

import * as styles from "./ContactUs.module.scss";

function ContactUs() {
	return (
		<>
			<Helmet>
				<title>The Worlds Leading Studio You Can Trust | Glocal Studio</title>
				<meta name="description" content="Streamline your business with professional virtual assistant services. Get remote administrative support, scheduling, customer care, and more. Enhance productivity today!" />
			</Helmet>
			<section className={styles.masterHead}>
				<Container maxWidth="xl">
					<Grid
						size={12}
						container
						className={cx(styles.masterHeadInfoSection, styles.textCenter)}
						spacing={4}
					>
						<Grid size={12} justifyContent="center">
							<StarGradiantIcon width="58px" height="65px" />
						</Grid>
						<Grid size={12} className={styles.acturalVisualizationHeading}>
							CONTACT GLOCAL STUDIO
						</Grid>
						<Grid size={12}>
							<Heading className={cx(styles.masterHeadingHeading, styles.extraLightText)}>A GLOBAL LEADER IN</Heading>
							<Heading className={styles.masterHeadingHeading}>3D VISUALIZATION</Heading>
						</Grid>
						<Grid size={8} offset={2} className={cx(styles.masterHeadText, styles.textWhite)}>
							Whether you’re an architect, developer, or designer, we’d love to hear about your project. let’s start building something extraordinary together.
						</Grid>
						<Grid size={12}>
							<LinkButton>TALK TO AN EXPERT</LinkButton>
						</Grid>
					</Grid>
				</Container>
			</section>
			<section className={styles.qualityMetricsContainer}>
				<Container maxWidth="xl">
					<QualityMetrics />
				</Container>
			</section>
			<section className={styles.dividerSection} />
			<section className={styles.mapContainer}>
				<StarGradiantIcon className={styles.starIcon} />
				<iframe
					src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d112088.89475280508!2d77.21062309726561!3d28.606437200000006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce56eee10001b%3A0xe692f713efb39502!2sHead%20Field%20Solutions%20Private%20Limited!5e0!3m2!1sen!2sin!4v1760264799193!5m2!1sen!2sin"
					className={styles.mapFrame}
					allowFullScreen=""
					loading="lazy"
					referrerPolicy="no-referrer-when-downgrade"
					title="Glocal Studio"
				/>
			</section>
		</>
	);
};

export default ContactUs;
