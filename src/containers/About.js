import React, { useRef } from "react";
import { Helmet } from 'react-helmet-async';
import { Container, Grid2 as Grid } from "@mui/material";
import { useScroll, useTransform, motion } from "framer-motion";
import cx from "classnames";

import { StarGradiantIcon } from "@/components/Icons";

import {
	Heading,
	LinkButton,
	GlassContainer,
} from "@/components/common";

import * as styles from "./About.module.scss";

function About() {
	const astronautImage = useRef(null);

	const { scrollYProgress } = useScroll({
		target: astronautImage,
		offset: ['start end', 'end start']
	});

	const parallax = useTransform(scrollYProgress, [0, 1], [0, 90]);

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
							ABOUT GLOCAL STUDIO
						</Grid>
						<Grid size={12}>
							<Heading className={cx(styles.masterHeadingHeading, styles.extraLightText)}>From Earthly Plans to</Heading>
							<Heading className={styles.masterHeadingHeading}>Cosmic Visuals</Heading>
						</Grid>
						<Grid size={8} offset={2} className={cx(styles.masterHeadText, styles.textWhite)}>
							We are curious explorers of design, delivering world-class 3D renderings, product visuals, and immersive experiences—without limits.
						</Grid>
						<Grid size={12}>
							<LinkButton>explore our services</LinkButton>
						</Grid>
					</Grid>
				</Container>
			</section>
			<section className={styles.beyondSection}>
				<Container maxWidth="xl">
					<Grid size={12} container>
						<Grid size={10} offset={1} container spacing={6}>
							<Grid size={6}>
								<Heading className={styles.textWhite}>Design.</Heading>
								<Heading className={cx(styles.textWhite, styles.extraLightText)}>Beyond</Heading>
								<Heading className={cx(styles.textWhite, styles.extraLightText)}>Imagination.</Heading>
							</Grid>
							<Grid size={6} container spacing={3} className={styles.beyondInfoContent}>
								<Grid size={12} ref={astronautImage}>
									<motion.img
										src={require("../assets/images/about-us/astronaut.png")}
										alt=""
										className={styles.astronautImage}
										style={{
											y: parallax,
										}}
									/>
								</Grid>
								<Grid size={12}>
									<Heading variant="secondary" className={cx(styles.textWhite, styles.lightText)}>
										We don’t just render— we venture into the unknown and deliver the extraordinary.
									</Heading>
								</Grid>
								<Grid size={12} className={styles.textWhite}>
									At Glocal Studio, we bring ideas to life through photorealistic 3D visualization—whether it’s architectural spaces, product mockups, or virtual retail experiences. 
								</Grid>
								<Grid size={12} className={styles.textWhite}>
									Our expertise covers everything from detailed material finishes and lighting accuracy to scalable visualization solutions for platforms like Amazon and Walmart. With a global perspective and a strong technical foundation, we ensure that every render not only looks exceptional but also communicates real-world clarity and value.
								</Grid>
							</Grid>
						</Grid>
					</Grid>
				</Container>
			</section>
			<section className={styles.visionMissionSection}>
				<Container maxWidth="xl">
					<Grid size={12} container spacing={6} className={styles.visionMissionContentSection}>
						<Grid size={6} container>
							<Grid size={12} className={styles.missionVisionContainer}>
								<Grid size={12} container spacing={2} alignItems="center">
									<Grid size={6}>
										<Heading className={styles.lightText}>Our</Heading>
										<Heading className={styles.lightText}>Mission</Heading>
									</Grid>
									<Grid size={6}>
										To help businesses, architects, and product creators present their ideas with absolute clarity through exceptional 3D visualization and design solutions.
									</Grid>
								</Grid>
								<Grid size={12} container>
									<Grid size={12} className={styles.starContentContainer}>
										<StarGradiantIcon width="58px" height="65px" />
										<div className={styles.visionMissionStatement}>
											We are committed to delivering visuals that not only impress but also inform—bridging creativity with technical accuracy so clients can sell, communicate, and build with confidence.
										</div>
									</Grid>
								</Grid>
							</Grid>
						</Grid>
						<Grid size={6} container>
							<Grid size={12} className={styles.missionVisionContainer}>
								<Grid size={12} container spacing={2} alignItems="center">
									<Grid size={6}>
										<Heading className={styles.lightText}>Our</Heading>
										<Heading className={styles.lightText}>Vision</Heading>
									</Grid>
									<Grid size={6}>
										To redefine how the world experiences design and products—through visualization that is both inspiring and practical.
									</Grid>
								</Grid>
								<Grid size={12} container>
									<Grid size={12} className={styles.starContentContainer}>
										<StarGradiantIcon width="58px" height="65px" />
										<div className={styles.visionMissionStatement}>
											We bridge the gap between creative imagination and real-world execution, helping businesses, architects, and product companies present their ideas with unmatched clarity and impact.
										</div>
									</Grid>
								</Grid>
							</Grid>
						</Grid>
					</Grid>
					<Grid size={12} container className={styles.textCenter}>
						<Grid size={12}>
							<Heading className={styles.extraLightText}>From Listening to</Heading>
							<Heading>Lasting Results</Heading>
						</Grid>
						<Grid size={8} offset={2} className={styles.visionMissionCenterContent}>
							At Glocal Studio, our approach is simple yet powerful—we listen, understand, and deliver solutions tailored to your vision.
						</Grid>
					</Grid>
					<Grid size={12} container className={styles.textCenter} spacing={4} alignItems="flex-start">
						<Grid size={3} container spacing={3}>
							<Grid size={12}>
								<img
									src={require("../assets/images/about-us/client-centric-icon.png")}
									alt=""
									className={styles.visionMisionIcon}
								/>
							</Grid>
							<Grid size={12} className={styles.visionMissionBoxHeading}>Client-Centric</Grid>
							<Grid size={12}>
								We don’t just take briefs—we listen, question, and understand your goals to deliver solutions tailored exactly to your vision.
							</Grid>
						</Grid>
						<Grid size={3} container spacing={3}>
							<Grid size={12}>
								<img
									src={require("../assets/images/about-us/end-to-end-clarity-icon.png")}
									alt=""
									className={styles.visionMisionIcon}
								/>
							</Grid>
							<Grid size={12} className={styles.visionMissionBoxHeading}>End-to-End Clarity</Grid>
							<Grid size={12}>
								From early sketches and mockups to photorealistic renders and execution-ready drawings, we ensure seamless clarity throughout.
							</Grid>
						</Grid>
						<Grid size={3} container spacing={3}>
							<Grid size={12}>
								<img
									src={require("../assets/images/about-us/technical-depth-icon.png")}
									alt=""
									className={styles.visionMisionIcon}
								/>
							</Grid>
							<Grid size={12} className={styles.visionMissionBoxHeading}>Technical Depth</Grid>
							<Grid size={12}>
								Backed by architectural expertise, we deliver precise proportions, accurate lighting, and true-to-life materials for unmatched realism.
							</Grid>
						</Grid>
						<Grid size={3} container spacing={3}>
							<Grid size={12}>
								<img
									src={require("../assets/images/about-us/collaborative-icon.png")}
									alt=""
									className={styles.visionMisionIcon}
								/>
							</Grid>
							<Grid size={12} className={styles.visionMissionBoxHeading}>Collaborative</Grid>
							<Grid size={12}>
								We integrate smoothly with designers, contractors, and vendors, creating a streamlined process guaranteeing cohesive outcomes.
							</Grid>
						</Grid>
					</Grid>
				</Container>
			</section>
			<section className={styles.glocalAdvantageSection}>
				<StarGradiantIcon className={styles.advantageStarIcon} />
				<Container maxWidth="xl">
					<Grid size={12} container spacing={3} className={styles.textCenter}>
						<Grid size={12}>
							<Heading className={cx(styles.textWhite, styles.extraLightText)}>The Glocal Studio</Heading>
							<Heading className={styles.textWhite}>Advantage</Heading>
						</Grid>
						<Grid size={8} offset={2} className={cx(styles.advantageText, styles.textWhite)}>
							With a global perspective and local precision, our work adapts seamlessly to diverse cultural and market needs.
						</Grid>
					</Grid>
					<Grid size={12} container spacing={4} alignItems="flex-start" className={styles.qualityMetricsContainer}>
						<Grid size={6} container>
							<Grid size={12} className={styles.glassContainer}>
								<GlassContainer glassBackground="rgba(23, 32, 60, 0.7)" />
								<Grid size={12} container className={styles.glassContainerWrapper} spacing={4}>
									<Grid size={6}>
										<Heading variant="secondary" className={cx(styles.fontNormal, styles.textWhite)}>
											Scalable & Reliable
										</Heading>
									</Grid>
									<Grid size={6} className={styles.textWhite}>
										From boutique projects to large-scale developments, our structured team and proven processes ensure dependable delivery at any scale.
									</Grid>
								</Grid>
							</Grid>
							<Grid size={12} className={styles.glassContainer}>
								<GlassContainer glassBackground="rgba(242, 240, 234, 0.7)" />
								<Grid size={12} container className={styles.glassContainerWrapper} spacing={5} alignItems="flex-end">
									<Grid size={9} container spacing={3}>
										<Grid size={12}>
											<Heading variant="secondary" className={styles.fontNormal}>
												Architecture Meets Visualization
											</Heading>
										</Grid>
										<Grid size={12}>
											Every render is backed by design intelligence, blending creative artistry with architectural accuracy to make visuals both beautiful and believable.
										</Grid>
									</Grid>
									<Grid size={3}>
										<img
											src={require("../assets/images/about-us/architecture-meets-icon.png")}
											alt=""
											className={styles.advantageIcon}
										/>
									</Grid>
								</Grid>
							</Grid>
						</Grid>
						<Grid size={6} container>
							<Grid size={12} className={styles.glassContainer}>
								<GlassContainer glassBackground="rgba(242, 240, 234, 0.7)" />
								<Grid size={12} container className={styles.glassContainerWrapper} spacing={5} alignItems="flex-end">
									<Grid size={9} container spacing={3}>
										<Grid size={12}>
											<Heading variant="secondary" className={styles.fontNormal}>
												Global Perspective, Local Precision
											</Heading>
										</Grid>
										<Grid size={12}>
											We adapt designs for different cultures and markets—delivering visuals that resonate globally while respecting local context.
										</Grid>
									</Grid>
									<Grid size={3}>
										<img
											src={require("../assets/images/about-us/global-prespective-icon.png")}
											alt=""
											className={styles.advantageIcon}
										/>
									</Grid>
								</Grid>
							</Grid>
							<Grid size={12} className={styles.glassContainer}>
								<GlassContainer glassBackground="rgba(23, 32, 60, 0.7)" />
								<Grid size={12} container className={styles.glassContainerWrapper} spacing={4}>
									<Grid size={6}>
										<Heading variant="secondary" className={cx(styles.fontNormal, styles.textWhite)}>
											Partnership-Oriented
										</Heading>
									</Grid>
									<Grid size={6} className={styles.textWhite}>
										We focus on building long-term collaborations—becoming an extension of your team rather than a one-time service provider.
									</Grid>
								</Grid>
							</Grid>
						</Grid>
					</Grid>
				</Container>
			</section>
			<section className={styles.explorerSection}>
				<Container maxWidth="xl">
					<Grid size={12} container spacing={3} className={styles.textCenter}>
						<Grid size={12}>
							<Heading className={styles.extraLightText}>The Explorers</Heading>
							<Heading>Behind The Vision</Heading>
						</Grid>
						<Grid size={8} offset={2} className={styles.advantageText}>
							Every project we create is powered by a passionate team of designers, architects, and visualization experts who believe in pushing boundaries.
						</Grid>
					</Grid>
					<Grid size={12} container spacing={6} alignItems="flex-start" className={styles.teamSection}>
						<Grid size={6}>
							<img
								src={require("../assets/images/about-us/vasu-dev-chawla.jpg")}
								alt=""
								className={styles.teamMainImage}
							/>
						</Grid>
						<Grid size={6} container spacing={0}>
							<Grid size={12}>
								<Heading variant="secondary">Vasu Dev Chawla</Heading>
							</Grid>
							<Grid size={12} className={styles.advantageText}>Operations Head, Glocal Studio</Grid>
							<Grid size={12} className={styles.teamContent}>
								With a strong background in architecture and design, Vasu Dev Chawla leads operations at Glocal Studio. He has worked on diverse projects across India, the Middle East, and the USA, spanning residential, commercial, and hospitality sectors.<br/>
								<br/>
								Vasu specializes in ensuring seamless coordination between design vision and technical execution, overseeing the delivery of visualization, drafting, and detailing services with a sharp focus on quality and client satisfaction.<br/>
								<br/>
								Passionate about bridging creativity with practicality, he works closely with both design teams and clients, making Glocal Studio a trusted partner for architects, developers, and homeowners alike.
							</Grid>
							<Grid size={12}>
								<img
									src={require("../assets/images/about-us/linkedin-icon.png")}
									alt=""
									className={styles.linkedInIcon}
								/>
							</Grid>
						</Grid>
					</Grid>
					<Grid size={12} container spacing={4} alignItems="flex-start">
						<Grid size={6} container spacing={3}>
							<Grid size={12}>
								<div className={styles.imageContainer}>
									<img
										src={require("../assets/images/about-us/linkedin-icon.png")}
										alt=""
										className={styles.linkedInSmallIcon}
									/>
								</div>
							</Grid>
							<Grid size={12} container>
								<Grid size={5}>
									<div className={styles.teamMemberName}>Kunal Jaggi</div>
									<div className={styles.teamMemberPosition}>Founder & Managing Director</div>
								</Grid>
								<Grid size={7}>
									Kunal drives Glocal Studio’s creative vision with over two decades of design expertise. He combines strategy, technology, and artistry to deliver visuals that inspire and impress globally.
								</Grid>
							</Grid>
						</Grid>
						<Grid size={6} container spacing={3}>
							<Grid size={12}>
								<div className={styles.imageContainer}>
									<img
										src={require("../assets/images/about-us/linkedin-icon.png")}
										alt=""
										className={styles.linkedInSmallIcon}
									/>
								</div>
							</Grid>
							<Grid size={12} container>
								<Grid size={5}>
									<div className={styles.teamMemberName}>Srishti Khatri</div>
									<div className={styles.teamMemberPosition}>Business Head</div>
								</Grid>
								<Grid size={7}>
									Kunal drives Glocal Studio’s creative vision with over two decades of design expertise. He combines strategy, technology, and artistry to deliver visuals that inspire and impress globally.
								</Grid>
							</Grid>
						</Grid>
					</Grid>
				</Container>
			</section>
		</>
	);
};

export default About;
