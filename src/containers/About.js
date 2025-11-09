import React, { useRef } from "react";
import { Helmet } from 'react-helmet-async';
import { Container, Grid2 as Grid } from "@mui/material";
import { useScroll, useTransform, motion } from "framer-motion";
import Lottie from "lottie-react";
import cx from "classnames";

import { StarGradiantIcon } from "@/components/Icons";

import {
	Heading,
	LinkButton,
	GlassContainer,
	Animate,
} from "@/components/common";

import * as styles from "./About.module.scss";

function About() {
	const astronautImage = useRef(null);

	const { scrollYProgress } = useScroll({
		target: astronautImage,
		offset: ['start end', 'end start']
	});

	const parallax = useTransform(scrollYProgress, [0, 1], [0, 150]);

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
							ABOUT GLOCAL STUDIO
						</Animate.FadeUp>
						<Grid size={12}>
							<Heading className={cx(styles.masterHeadingHeading, styles.extraLightText)}>From Earthly Plans to</Heading>
							<Heading className={styles.masterHeadingHeading}>Cosmic Visuals</Heading>
						</Grid>
						<Animate.FadeUp
							element={Grid}
							elementProps={{
								size: 8,
								offset: 2,
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
										We don't just render- we venture into the unknown and deliver the extraordinary.
									</Heading>
								</Grid>
								<Animate.FadeUp
									element={Grid}
									elementProps={{
										size: 12
									}}
									className={styles.textWhite}
								>
									At Glocal Studio, we bring imagination to life through photorealistic 3D visualization, crafting spaces, products, and experiences that blend the conceptual with the tangible.
								</Animate.FadeUp>
								<Animate.FadeUp
									element={Grid}
									elementProps={{
										size: 12
									}}
									className={styles.textWhite}
								>
									Our expertise spans architecture, interiors, product design, and immersive environments, focusing on materiality, light, and atmosphere. We believe true visualization evokes emotion while ensuring technical precision. With a global perspective, we create visuals that convey intent, function, and value, transforming vision into reality with clarity and impact.
								</Animate.FadeUp>
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
									<Animate.FadeUp
										element={Grid}
										elementProps={{
											size: 6
										}}
									>
										Our mission is to make visualization a universal language - helping companies and creators translate complex ideas into visual clarity and emotional resonance.
									</Animate.FadeUp>
								</Grid>
								<Grid size={12} container>
									<Grid size={12} className={styles.starContentContainer}>
										<Animate.ScaleIn>
											<StarGradiantIcon width="30px" height="33px" />
										</Animate.ScaleIn>
										<Animate.FadeUp className={styles.visionMissionStatement}>
											From architecture and design to entertainment and innovation, we deliver 3D solutions that empower people to see, feel, and believe in what’s possible before it’s built.
										</Animate.FadeUp>
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
									<Animate.FadeUp
										element={Grid}
										elementProps={{
											size: 6
										}}
									>
										Our vision is to redefine how the world experiences visualization—by transforming imagination into structured, intelligent, and emotionally resonant visual storytelling.
									</Animate.FadeUp>
								</Grid>
								<Grid size={12} container>
									<Grid size={12} className={styles.starContentContainer}>
										<Animate.ScaleIn>
											<StarGradiantIcon width="30px" height="33px" />
										</Animate.ScaleIn>
										<Animate.FadeUp className={styles.visionMissionStatement}>
											In a space often driven by fragmented, freelance practices, we stand for organization, reliability, and creative excellence on a global scale. Through refined processes and advanced technology, we strive to set new standards, where every render reflects information and clarity as envisioned by designers.
										</Animate.FadeUp>
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
						<Animate.FadeUp
							element={Grid}
							elementProps={{
								size: 8,
								offset: 2,
							}}
							className={styles.visionMissionCenterContent}
						>
							At Glocal Studio, our approach is simple yet powerful-we listen, understand, and deliver solutions tailored to your vision.
						</Animate.FadeUp>
					</Grid>
					<Grid size={12} container className={styles.textCenter} spacing={4} alignItems="flex-start">
						<Animate.FadeUp
							element={Grid}
							elementProps={{
								size: 3,
								container: true,
								spacing: 3,
							}}
							delay="0ms"
						>
							<Grid size={12}>
								<Lottie
									animationData={require("../assets/animations/client-centric.json")}
									loop
									className={styles.visionMisionIcon}
								/>
							</Grid>
							<Grid size={12} className={styles.visionMissionBoxHeading}>Client-Centric</Grid>
							<Grid size={12}>
								We don't just take briefs-we listen, question, and understand your goals to deliver solutions tailored exactly to your vision.
							</Grid>
						</Animate.FadeUp>
						<Animate.FadeUp
							element={Grid}
							elementProps={{
								size: 3,
								container: true,
								spacing: 3,
							}}
							delay="100ms"
						>
							<Grid size={12}>
								<Lottie
									animationData={require("../assets/animations/end-to-end-clarity.json")}
									loop
									className={styles.visionMisionIcon}
								/>
							</Grid>
							<Grid size={12} className={styles.visionMissionBoxHeading}>End-to-End Clarity</Grid>
							<Grid size={12}>
								From early sketches and mockups to photorealistic renders and execution-ready drawings, we ensure seamless clarity throughout.
							</Grid>
						</Animate.FadeUp>
						<Animate.FadeUp
							element={Grid}
							elementProps={{
								size: 3,
								container: true,
								spacing: 3,
							}}
							delay="200ms"
						>
							<Grid size={12}>
								<Lottie
									animationData={require("../assets/animations/technical-depth.json")}
									loop
									className={styles.visionMisionIcon}
								/>
							</Grid>
							<Grid size={12} className={styles.visionMissionBoxHeading}>Technical Depth</Grid>
							<Grid size={12}>
								Each render undergoes expert review by architects, interior designers, and product specialists-guaranteeing precision, design integrity, and refined visual quality.
							</Grid>
						</Animate.FadeUp>
						<Animate.FadeUp
							element={Grid}
							elementProps={{
								size: 3,
								container: true,
								spacing: 3,
							}}
							delay="300ms"
						>
							<Grid size={12}>
								<Lottie
									animationData={require("../assets/animations/collaborative.json")}
									loop
									className={styles.visionMisionIcon}
								/>
							</Grid>
							<Grid size={12} className={styles.visionMissionBoxHeading}>Collaborative</Grid>
							<Grid size={12}>
								We integrate smoothly with designers, contractors, and vendors, creating a streamlined process guaranteeing cohesive outcomes.
							</Grid>
						</Animate.FadeUp>
					</Grid>
				</Container>
			</section>
			<section className={styles.glocalAdvantageSection}>
				<div className={styles.advantageStarIcon}>
					<Animate.ScaleIn>
						<StarGradiantIcon />
					</Animate.ScaleIn>
				</div>
				<Container maxWidth="xl">
					<Grid size={12} container spacing={3} className={styles.textCenter}>
						<Grid size={12}>
							<Heading className={cx(styles.textWhite, styles.extraLightText)}>The Glocal Studio</Heading>
							<Heading className={styles.textWhite}>Advantage</Heading>
						</Grid>
						<Animate.FadeUp
							element={Grid}
							elementProps={{
								size: 8,
								offset: 2,
							}}
							className={cx(styles.advantageText, styles.textWhite, styles.glocalPrespectiveText)}
						>
							Our difference lies in discipline. Every project moves through a structured review by specialists - ensuring that each image is accurate, purposeful, and market-ready. With global insight and local sensitivity, we deliver clarity you can trust.
						</Animate.FadeUp>
					</Grid>
					<Grid size={12} container spacing={4} alignItems="flex-start" className={styles.qualityMetricsContainer}>
						<Grid size={6} container>
							<Animate.FadeUp
								element={Grid}
								elementProps={{
									size: 12
								}}
								className={styles.glassContainer}
								direction="right"
							>
								<GlassContainer glassBackground="rgba(23, 32, 60, 0.7)" />
								<Grid size={12} container className={styles.glassContainerWrapper} spacing={4}>
									<Grid size={6}>
										<Heading variant="secondary" className={cx(styles.fontNormal, styles.textWhite)}>
											Scalable & Reliable
										</Heading>
									</Grid>
									<Animate.FadeUp
										element={Grid}
										elementProps={{
											size: 6,
										}}
										className={styles.textWhite}
									>
										From boutique projects to large-scale developments, our structured team and proven processes ensure dependable delivery at any scale.
									</Animate.FadeUp>
								</Grid>
							</Animate.FadeUp>
							<Animate.FadeUp
								element={Grid}
								elementProps={{
									size: 12
								}}
								className={styles.glassContainer}
								direction="right"
								delay="100ms"
							>
								<GlassContainer glassBackground="rgba(242, 240, 234, 0.7)" />
								<Grid size={12} container className={styles.glassContainerWrapper} spacing={5} alignItems="flex-end">
									<Grid size={9} container spacing={3}>
										<Grid size={12}>
											<Heading variant="secondary" className={styles.fontNormal}>
												Idea Meets Visualization
											</Heading>
										</Grid>
										<Animate.FadeUp
											element={Grid}
											elementProps={{
												size: 12,
											}}
										>
											Every render is backed by design intelligence, blending creative artistry with architectural accuracy to make visuals both beautiful and believable.
										</Animate.FadeUp>
									</Grid>
									<Animate.ScaleIn
										element={Grid}
										elementProps={{
											size: 3,
										}}
									>
										<Lottie
											animationData={require("../assets/animations/idea-meets-visualization.json")}
											loop
											className={styles.advantageIcon}
										/>
									</Animate.ScaleIn>
								</Grid>
							</Animate.FadeUp>
						</Grid>
						<Grid size={6} container>
							<Animate.FadeUp
								element={Grid}
								elementProps={{
									size: 12
								}}
								className={styles.glassContainer}
								direction="left"
								delay="100ms"
							>
								<GlassContainer glassBackground="rgba(242, 240, 234, 0.7)" />
								<Grid size={12} container className={styles.glassContainerWrapper} spacing={5} alignItems="flex-end">
									<Grid size={9} container spacing={3}>
										<Grid size={12}>
											<Heading variant="secondary" className={styles.fontNormal}>
												Global Perspective, Local Precision
											</Heading>
										</Grid>
										<Animate.FadeUp
											element={Grid}
											elementProps={{
												size: 12,
											}}
										>
											We adapt designs for different cultures and markets-delivering visuals that resonate globally while respecting local context.
										</Animate.FadeUp>
									</Grid>
									<Animate.ScaleIn
										element={Grid}
										elementProps={{
											size: 3,
										}}
									>
										<Lottie
											animationData={require("../assets/animations/global-perspective.json")}
											loop
											className={styles.advantageIcon}
										/>
									</Animate.ScaleIn>
								</Grid>
							</Animate.FadeUp>
							<Animate.FadeUp
								element={Grid}
								elementProps={{
									size: 12
								}}
								className={styles.glassContainer}
								direction="left"
							>
								<GlassContainer glassBackground="rgba(23, 32, 60, 0.7)" />
								<Grid size={12} container className={styles.glassContainerWrapper} spacing={4}>
									<Grid size={6}>
										<Heading variant="secondary" className={cx(styles.fontNormal, styles.textWhite)}>
											Partnership-Oriented
										</Heading>
									</Grid>
									<Animate.FadeUp
										element={Grid}
										elementProps={{
											size: 6,
										}}
										className={styles.textWhite}
									>
										We focus on building long-term collaborations-becoming an extension of your team rather than a one-time service provider.
									</Animate.FadeUp>
								</Grid>
							</Animate.FadeUp>
						</Grid>
					</Grid>
				</Container>
			</section>
			<section className={styles.explorerSection}>
				<Container maxWidth="xl">
					<Grid size={12} container spacing={3} className={styles.textCenter}>
						<Grid size={12}>
							<Heading className={styles.extraLightText} direction="down">The Explorers</Heading>
							<Heading>Behind The Vision</Heading>
						</Grid>
						<Animate.FadeUp
							element={Grid}
							elementProps={{
								size: 8,
								offset: 2,
							}}
							className={styles.advantageText}
						>
							Every project we deliver is shaped by a multidisciplinary team of artists, designers and visualization experts-driven by precision, collaboration, and a shared pursuit of excellence.
						</Animate.FadeUp>
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
								<Heading variant="secondary" direction="down">Vasu Dev Chawla</Heading>
							</Grid>
							<Animate.FadeUp
								element={Grid}
								elementProps={{
									size: 12
								}}
								className={styles.advantageText}
							>
								Operations Head, Glocal Studio
							</Animate.FadeUp>
							<Animate.FadeUp
								element={Grid}
								elementProps={{
									size: 12
								}}
								className={styles.teamContent}
							>
								With a strong background in architecture and design, Vasu Dev Chawla leads operations at Glocal Studio. He has worked on diverse projects across India, the Middle East, and the USA, spanning residential, commercial, and hospitality sectors.<br/>
								<br/>
								Vasu specializes in ensuring seamless coordination between design vision and technical execution, overseeing the delivery of visualization, drafting, and detailing services with a sharp focus on quality and client satisfaction.<br/>
								<br/>
								Passionate about bridging creativity with practicality, he works closely with both design teams and clients, making Glocal Studio a trusted partner for architects, developers, and homeowners alike.
							</Animate.FadeUp>
							<Grid size={12}>
								<Animate.ScaleIn style={{
									display: "inline-block"
								}}>
									<img
										src={require("../assets/images/about-us/linkedin-icon.png")}
										alt=""
										className={styles.linkedInIcon}
									/>
								</Animate.ScaleIn>
							</Grid>
						</Grid>
					</Grid>
					<Grid size={12} container spacing={4} alignItems="flex-start">
						<Grid size={6} container spacing={3}>
							<Animate.FadeUp
								direction="right"
								element={Grid}
								elementProps={{
									size: 12
								}}
							>
								<div className={styles.imageContainer}>
									<img
										src={require("../assets/images/about-us/kunal.jpg")}
										alt=""
										className={styles.teamImage}
									/>
									<a
										href="https://www.linkedin.com/in/kunal-jaggi-0b5a182/"
										target="_blank"
										rel="nofollow noreferrer"
										label="Srishti Khatri"
										className={styles.linkedInSmallIcon}
									>
										<img
											src={require("../assets/images/about-us/linkedin-icon.png")}
											alt=""
										/>
									</a>
								</div>
							</Animate.FadeUp>
							<Grid size={12} container>
								<Animate.FadeUp
									direction="right"
									element={Grid}
									elementProps={{
										size: 5
									}}
								>
									<div className={styles.teamMemberName}>Kunal Jaggi</div>
									<div className={styles.teamMemberPosition}>Founder & Managing Director</div>
								</Animate.FadeUp>
								<Animate.FadeUp
									direction="left"
									element={Grid}
									elementProps={{
										size: 7
									}}
								>
									Kunal drives Glocal Studio's creative vision with over two decades of design expertise. He combines strategy, technology, and artistry to deliver visuals that inspire and impress globally.
								</Animate.FadeUp>
							</Grid>
						</Grid>
						<Grid size={6} container spacing={3}>
							<Animate.FadeUp
								direction="left"
								element={Grid}
								elementProps={{
									size: 12
								}}
							>
								<div className={styles.imageContainer}>
									<img
										src={require("../assets/images/about-us/srishti.jpg")}
										alt=""
										className={styles.teamImage}
									/>
									<a
										href="https://www.linkedin.com/in/srishtikhatri/"
										target="_blank"
										rel="nofollow noreferrer"
										label="Srishti Khatri"
										className={styles.linkedInSmallIcon}
									>
										<img
											src={require("../assets/images/about-us/linkedin-icon.png")}
											alt=""
										/>
									</a>
								</div>
							</Animate.FadeUp>
							<Grid size={12} container>
								<Animate.FadeUp
									direction="right"
									element={Grid}
									elementProps={{
										size: 5
									}}
								>
									<div className={styles.teamMemberName}>Srishti Khatri</div>
									<div className={styles.teamMemberPosition}>Business Head</div>
								</Animate.FadeUp>
								<Animate.FadeUp
									direction="left"
									element={Grid}
									elementProps={{
										size: 7
									}}
								>
									Kunal drives Glocal Studio's creative vision with over two decades of design expertise. He combines strategy, technology, and artistry to deliver visuals that inspire and impress globally.
								</Animate.FadeUp>
							</Grid>
						</Grid>
					</Grid>
				</Container>
			</section>
		</>
	);
};

export default About;
