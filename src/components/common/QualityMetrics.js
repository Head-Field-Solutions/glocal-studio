import React from "react";
import { Grid2 as Grid } from "@mui/material";
import cx from "classnames";

import { StarGradiantIcon } from "@/components/Icons";

import GlassContainer from "./GlassContainer";
import ColorfulText from "./ColorfulText";
import Heading from "./Heading";

import * as styles from "./QualityMetrics.module.scss";

function QualityMetrics() {
	return (
		<Grid size={12} container spacing={4} alignItems="flex-start" className={styles.qualityMetricsContainer}>
			<Grid size={{xs: 12, md: 6}} container>
				<Grid size={12} className={styles.glassContainer}>
					<GlassContainer glassBackground="rgba(193, 227, 252, 0.4)" />
					<Grid size={12} container className={styles.glassContainerWrapper} spacing={4}>
						<Grid size={12}>
							<StarGradiantIcon width="56px" height="62px" />
						</Grid>
						<Grid size={12}>
							<Heading className={styles.trustedHeading}>
								Trusted 
								Experience.
								Proven Results.
							</Heading>
						</Grid>
						<Grid size={12} className={styles.trustedContent}>
							More than projects delivered—we’ve built relationships that last decades.
						</Grid>
					</Grid>
				</Grid>
				<Grid size={12} className={styles.glassContainer}>
					<GlassContainer glassBackground="rgba(242, 240, 234, 0.2)" />
					<Grid size={12} container className={styles.glassContainerWrapper} spacing={0}>
						<Grid size={3}>
							<Heading className={styles.fontNormal}><ColorfulText>50+</ColorfulText></Heading>
						</Grid>
						<Grid size={9} container spacing={1}>
							<Grid size={12}>
								<Heading variant="secondary" className={styles.fontNormal}>
									Global Clients
								</Heading>
							</Grid>
							<Grid size={12}>
								Providing turn-key solutions to brands worldwide.
							</Grid>
						</Grid>
					</Grid>
				</Grid>
			</Grid>
			<Grid size={{xs: 12, md: 6}} container>
				<Grid size={12} className={styles.glassContainer}>
					<GlassContainer glassBackground="rgba(242, 240, 234, 0.4)" />
					<Grid size={12} container className={styles.glassContainerWrapper} spacing={0} alignItems="flex-start">
						<Grid size={{xs: 12, sm: 8}}>
							<Heading className={styles.yearsOfExperienceHeading}><ColorfulText>25+</ColorfulText></Heading>
							<Heading variant="secondary" className={styles.fontNormal}>
								Years of Experience
							</Heading>
						</Grid>
						<Grid size={{xs: 12, sm: 4}}>
							Serving clients across the US, Europe, and Asia with consistent quality and reliability.
						</Grid>
					</Grid>
				</Grid>
				<Grid size={12} className={styles.glassContainer}>
					<GlassContainer glassBackground="rgba(23, 32, 60, 0.8)" />
					<Grid size={12} container className={styles.glassContainerWrapper} spacing={0}>
						<Grid size={3}>
							<Heading className={cx(styles.fontNormal, styles.textWhite)}>90%</Heading>
						</Grid>
						<Grid size={9} container spacing={1}>
							<Grid size={12}>
								<Heading variant="secondary" className={cx(styles.fontNormal, styles.textWhite)}>
									Repeated Clients
								</Heading>
							</Grid>
							<Grid size={12} className={styles.textWhite}>
								Our retention speaks louder than marketing.
							</Grid>
						</Grid>
					</Grid>
				</Grid>
				<Grid size={12} className={styles.glassContainer}>
					<GlassContainer glassBackground="rgba(242, 240, 234, 0.2)" />
					<Grid size={12} container className={styles.glassContainerWrapper} spacing={0}>
						<Grid size={5}>
							<Heading className={styles.fontNormal}>4,000+</Heading>
						</Grid>
						<Grid size={7} container spacing={1}>
							<Grid size={12}>
								<Heading variant="secondary" className={styles.fontNormal}>
									Projects Delivered
								</Heading>
							</Grid>
							<Grid size={12}>
								Executed projects of every scale.
							</Grid>
						</Grid>
					</Grid>
				</Grid>
			</Grid>
		</Grid>
	);
}

export default QualityMetrics;
