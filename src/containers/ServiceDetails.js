import React from "react";
import { Helmet } from 'react-helmet-async';
import { Container, Grid2 as Grid } from "@mui/material";
import cx from "classnames";

import { StarGradiantIcon } from "@/components/Icons";

import { ColorfulText, Heading, LinkButton } from "@/components/common";

import WhatWeDoBox from "@/components/ServiceDetails/WhatWeDoBox";
import ProfessionalServiceBox from "@/components/ServiceDetails/ProfessionalServiceBox";

import * as styles from "./ServiceDetails.module.scss";

function ServiceDetails() {
	const whatWeDoItems = [
		{
			id: "01",
			title: "Perfect for developers pitching projects and realtors marketing properties.",
			heading: "Exterior Rendering",
			content: "Showcase your building’s architecture in full context with lifelike detail, light, and landscapintg.",
			image: require("../assets/images/service-details/what-we-do-item-1.png"),
		}, {
			id: "02",
			title: "Perfect for interior designers and homeowners visualizing upgrades.",
			heading: "Interior Rendering",
			content: "Bring interior concepts to life with photoreal textures, lighting, and decor styling—helping clients see, feel, and believe in the design before it’s built.",
			image: require("../assets/images/service-details/what-we-do-item-2.png"),
		}, {
			id: "03",
			title: "Perfect for presentations that need clarity in layouts and space logic.",
			heading: "Isometric Views",
			content: "Simplify complexity with angled 3D views that highlight layouts, layers, and spatial relationships",
			image: require("../assets/images/service-details/what-we-do-item-3.png"),
		}, {
			id: "04",
			title: "Perfect for brochures, property listings, and client-friendly sales material.",
			heading: "Floor Plan Rendering",
			content: "Transform technical blueprints into fully furnished, easy-to-understand 3D layouts that instantly communicate flow, size, and function to clients and buyers.",
			image: require("../assets/images/service-details/what-we-do-item-4.png"),
		}
	];

	const professionalServiceContent = [
		{
			image: require("../assets/images/service-details/professional-service-image-1.jpg"),
			heading: "Architectural Firms",
			content: "We empower architects to showcase their designs in photoreal detail—exteriors, interiors, floor plans, and walkthroughs that make concepts instantly understandable.",
			keyServices: [
				{
					image: require("../assets/images/service-details/professional-service-icon-1.png"),
					content: "Photoreal Renders",
				}, {
					image: require("../assets/images/service-details/professional-service-icon-1.png"),
					content: "Technical Accuracy",
				}, {
					image: require("../assets/images/service-details/professional-service-icon-1.png"),
					content: "Fast Delivery",
				}, {
					image: require("../assets/images/service-details/professional-service-icon-1.png"),
					content: "Partnered Collaboration",
				}, 
			],
			footer: "Faster client approvals, reduced revisions, persuasive presentations.",
		}, {
			image: require("../assets/images/service-details/professional-service-image-2.jpg"),
			heading: "Interior Design Studios",
			content: "From mood boards to final styling, we create interior visuals that help designers present their ideas convincingly, align clients on finishes, and win trust before execution.",
			keyServices: [
				{
					image: require("../assets/images/service-details/professional-service-icon-1.png"),
					content: "Realistic Styling",
				}, {
					image: require("../assets/images/service-details/professional-service-icon-1.png"),
					content: "Material Accuracy",
				}, {
					image: require("../assets/images/service-details/professional-service-icon-1.png"),
					content: "Flexible Options",
				}, {
					image: require("../assets/images/service-details/professional-service-icon-1.png"),
					content: "Engaging Visuals",
				}, 
			],
			footer: "Clarity in design decisions, time saved in approvals, wow-factor presentations.",
		}, {
			image: require("../assets/images/service-details/professional-service-image-3.jpg"),
			heading: "Real Estate Developers",
			content: "We give developers the tools to market and sell projects before construction even begins. Our visuals, walkthroughs, and VR tours build excitement and boost pre-sales.",
			keyServices: [
				{
					image: require("../assets/images/service-details/professional-service-icon-1.png"),
					content: "Sales-Ready Visuals",
				}, {
					image: require("../assets/images/service-details/professional-service-icon-1.png"),
					content: "Immersive Walkthroughs",
				}, {
					image: require("../assets/images/service-details/professional-service-icon-1.png"),
					content: "Cost Efficiency",
				}, {
					image: require("../assets/images/service-details/professional-service-icon-1.png"),
					content: "Ready to use Renders",
				}, 
			],
			footer: "Sell faster, attract investors, and reduce marketing costs.",
		}, {
			image: require("../assets/images/service-details/professional-service-image-4.jpg"),
			heading: "Construction Contractors",
			content: "We support contractors with clear drafting, execution-ready drawings, and precise visuals that reduce site errors and speed up work coordination.",
			keyServices: [
				{
					image: require("../assets/images/service-details/professional-service-icon-1.png"),
					content: "Accurate Drafting",
				}, {
					image: require("../assets/images/service-details/professional-service-icon-1.png"),
					content: "Build Clarity",
				}, {
					image: require("../assets/images/service-details/professional-service-icon-1.png"),
					content: "Easy Coordination",
				}, {
					image: require("../assets/images/service-details/professional-service-icon-1.png"),
					content: "Time-Saving Documentation",
				}, 
			],
			footer: "Less confusion on-site, smoother communication with teams, reduced rework.",
		},
	];

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
							Architectural Visualization
						</Grid>
						<Grid size={12}>
							<Heading className={cx(styles.masterHeadingHeading, styles.extraLightText)}>Turning Blueprints Into</Heading>
							<Heading className={styles.masterHeadingHeading}>Photoreal Experiences</Heading>
						</Grid>
						<Grid size={12} className={cx(styles.masterHeadText, styles.textWhite)}>
							Pixel-perfect renders, quick turnarounds, and a partner you can trust.
						</Grid>
						<Grid size={12}>
							<LinkButton>Let’s Discuss Your Project</LinkButton>
						</Grid>
					</Grid>
				</Container>
			</section>
			<section className={styles.whatWeDoSection}>
				<Container maxWidth="xl">
					<Grid size={12} spacing={4} container>
						<Grid size={12} className={styles.textCenter}>
							<ColorfulText className={styles.uppercase}>What We Do</ColorfulText>
						</Grid>
						<Grid size={12}>
							<Heading variant="secondary" className={cx(styles.extraLightText, styles.textCenter, styles.textWhite)}>
								We transform CAD and sketches into photorealistic 3D visuals that help architects, developers, and designers win approvals, attract buyers, and amplify presentations.
							</Heading>
						</Grid>
					</Grid>
					<Grid size={12} container spacing={4} className={styles.whatWeDoBoxContainer}>
						{
							whatWeDoItems.map((item) => (
								<WhatWeDoBox
									key={item.id}
									id={item.id}
									title={item.title}
									heading={item.heading}
									content={item.content}
									image={item.image}
								/>
							))
						}
					</Grid>
				</Container>
			</section>
			<section>
				<img
					src={require("../assets/images/service-details/3d-walkthroughs-bg.jpg")}
					alt=""
					className={styles.threeDRenderImage}
				/>
				<Container maxWidth="xl">
					<Grid size={12}>
						<Heading
							className={cx(styles.textCenter, styles.textWhite, styles.extraLightText, styles.uppercase)}
						>
							Step Inside Your Project—
						</Heading>
						<Heading
							className={cx(styles.textCenter, styles.textWhite, styles.uppercase)}
						>
							Before It’s Built
						</Heading>
					</Grid>
					<Grid size={12}>
						<Heading
							variant="seconndary"
							className={styles.weDesignSecondaryHeading}
						>
							We design walkthroughs that help you present, persuade, and close with confidence.
						</Heading>
					</Grid>
					<Grid size={12} container spacing={4} alignItems="flex-start">
						<Grid size={3} container spacing={4}>
							<Grid size={12} className={styles.textCenter}>
								<img
									src={require("../assets/images/service-details/project-info-icon-1.png")}
									alt=""
									className={styles.projectInfoImage}
								/>
							</Grid>
							<Grid size={12} className={cx(styles.textCenter, styles.textWhite)}>
								Dynamic camera movements & smooth transitions
							</Grid>
						</Grid>
						<Grid size={3} container spacing={4}>
							<Grid size={12} className={styles.textCenter}>
								<img
									src={require("../assets/images/service-details/project-info-icon-2.png")}
									alt=""
									className={styles.projectInfoImage}
								/>
							</Grid>
							<Grid size={12} className={cx(styles.textCenter, styles.textWhite)}>
								Realistic lighting, textures, and materials
							</Grid>
						</Grid>
						<Grid size={3} container spacing={4}>
							<Grid size={12} className={styles.textCenter}>
								<img
									src={require("../assets/images/service-details/project-info-icon-3.png")}
									alt=""
									className={styles.projectInfoImage}
								/>
							</Grid>
							<Grid size={12} className={cx(styles.textCenter, styles.textWhite)}>
								Exterior flythroughs + interior walkthroughs
							</Grid>
						</Grid>
						<Grid size={3} container spacing={4}>
							<Grid size={12} className={styles.textCenter}>
								<img
									src={require("../assets/images/service-details/project-info-icon-4.png")}
									alt=""
									className={styles.projectInfoImage}
								/>
							</Grid>
							<Grid size={12} className={cx(styles.textCenter, styles.textWhite)}>
								Music, narration & branding integration
							</Grid>
						</Grid>
					</Grid>
				</Container>
				<img
					src={require("../assets/images/service-details/step-into-section-bg.jpg")}
					alt=""
					className={styles.threeDRenderImage}
				/>
			</section>
			<section className={styles.partnerWithProfessionalSection}>
				<Container maxWidth="xl" className={styles.partnerWithProfessionalContainer}>
					<Grid size={12} spacing={6} container>
						<Grid size={12} className={styles.textCenter}>
							<ColorfulText>INDUSTRIES WE SERVE</ColorfulText>
						</Grid>
						<Grid size={12}>
							<Heading
								className={cx(styles.textCenter, styles.textWhite, styles.uppercase, styles.fontNormal)}
							>
								Partnering With Professionals
							</Heading>
							<Heading
								className={cx(styles.textCenter, styles.textWhite, styles.uppercase, styles.fontNormal)}
							>
								Who Shape Spaces
							</Heading>
						</Grid>
						<Grid size={12} container spacing={3} alignItems="flex-start">
							{
								professionalServiceContent.map((service, index) => (
									<ProfessionalServiceBox
										key={index}
										image={service.image}
										heading={service.heading}
										content={service.content}
										keyServices={service.keyServices}
										footer={service.footer}
									/>
								))
							}
						</Grid>
						<Grid size={12} className={styles.textCenter}>
							<LinkButton>GET FREE CONSULTATION</LinkButton>
						</Grid>
					</Grid>
				</Container>
			</section>
		</>
	);
};

export default ServiceDetails;
