import React from "react";
import { Helmet } from 'react-helmet-async';
import { Container, Grid2 as Grid } from "@mui/material";
import { useParams } from "react-router-dom";
import cx from "classnames";

import { StarGradiantIcon } from "@/components/Icons";

import {
	ColorfulText,
	Heading,
	LinkButton,
	QualityMetrics,
} from "@/components/common";

import WhatWeDoBox from "@/components/ServiceDetails/WhatWeDoBox";
import ProfessionalServiceBox from "@/components/ServiceDetails/ProfessionalServiceBox";
import FAQContainer from "@/components/ServiceDetails/FAQContainer";
import WhyChooseUsBox from "@/components/ServiceDetails/WhyChooseUsBox";

import NotFound from "@/containers/NotFound";

import { servicesInfo } from "@/utils/serviceInfo";

import * as styles from "./ServiceDetails.module.scss";

function ServiceDetails() {
	const params = useParams();

	const serviceDetails = servicesInfo[params.id] || null;

	if (!serviceDetails) {
		return <NotFound />;
	}

	const professionalServiceContent = [
		{
			image: require("../assets/images/service-details/professional-service-image-1.jpg"),
			heading: "Architectural Firms",
			content: "We empower architects to showcase their designs in photoreal detail—exteriors, interiors, floor plans, and walkthroughs that make concepts instantly understandable.",
			keyServices: [
				{
					image: require("../assets/images/service-details/icons/photoreal-renders.png"),
					content: "Photoreal Renders",
				}, {
					image: require("../assets/images/service-details/icons/technical-accuracy.png"),
					content: "Technical Accuracy",
				}, {
					image: require("../assets/images/service-details/icons/fast-delivery.png"),
					content: "Fast Delivery",
				}, {
					image: require("../assets/images/service-details/icons/partnered-collabration.png"),
					content: "Partnered Collaboration",
				}, 
			],
			footer: "Faster client approvals, reduced revisions, persuasive presentations.",
		}, {
			image: require("../assets/images/service-details/professional-service-image-2.jpg"),
			heading: "Interior Design",
			content: "From mood boards to final styling, we create interior visuals that help designers present their ideas convincingly, align clients on finishes, and win trust before execution.",
			keyServices: [
				{
					image: require("../assets/images/service-details/icons/realistic-stylling.png"),
					content: "Realistic Styling",
				}, {
					image: require("../assets/images/service-details/icons/material-accuracy.png"),
					content: "Material Accuracy",
				}, {
					image: require("../assets/images/service-details/icons/flexible-options.png"),
					content: "Flexible Options",
				}, {
					image: require("../assets/images/service-details/icons/engaging-visuals.png"),
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
					image: require("../assets/images/service-details/icons/sales-ready-visuals.png"),
					content: "Sales-Ready Visuals",
				}, {
					image: require("../assets/images/service-details/icons/immersive-walkthroughs.png"),
					content: "Immersive Walkthroughs",
				}, {
					image: require("../assets/images/service-details/icons/cost-efficiency.png"),
					content: "Cost Efficiency",
				}, {
					image: require("../assets/images/service-details/icons/ready-to-use.png"),
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
					image: require("../assets/images/service-details/icons/accurate-draftinng.png"),
					content: "Accurate Drafting",
				}, {
					image: require("../assets/images/service-details/icons/build-clarity.png"),
					content: "Build Clarity",
				}, {
					image: require("../assets/images/service-details/icons/easy-coordination.png"),
					content: "Easy Coordination",
				}, {
					image: require("../assets/images/service-details/icons/time-saving-documentation.png"),
					content: "Time-Saving Documentation",
				}, 
			],
			footer: "Less confusion on-site, smoother communication with teams, reduced rework.",
		},
	];

	const faqContent = [
		{
			id: 1,
			title: "How long does it usually take to deliver a project?",
			content: "Most projects are delivered within 3–7 business days, depending on scope and complexity. Larger walkthroughs or animations may take longer, but we always share clear timelines upfront.",
		}, {
			id: 2,
			title: "How many rounds of revisions are included in the service?",
			content: "We include two complimentary revision rounds to fine-tune details. Additional revisions can be requested at a minimal cost, ensuring you’re fully satisfied with the outcome.",
		}, {
			id: 3,
			title: "In what file formats will I receive my final renders?",
			content: "Final outputs are usually delivered in high-resolution JPEG/PNG for images and MP4 for animations. If you need alternative formats (TIFF, PSD, CAD overlays, etc.), just let us know—we’ll provide them.",
		}, {
			id: 4,
			title: "What do I need to share with you to begin my project?",
			content: "To kick off, simply send us your plans, sketches, or reference images, along with any design details such as materials, furniture, or mood inspirations. The clearer your inputs, the faster and more precise our delivery.",
		}, 
	];

	const whyChooseUsContent = [
		{
			image: require("../assets/images/service-details/collebration-section-icon-1.png"),
			title: "Direct Collaboration",
			content: "Work hand-in-hand with our 3D modeling and rendering team for clear communication and faster results.",
			usps: [
				"Work directly with artists, no middle layers.",
				"Instant changes and refinements.",
				"Your intent translated accurately into visuals."
			],
		}, {
			image: require("../assets/images/service-details/collebration-section-icon-2.png"),
			title: "Senior Supervision",
			content: "Every project is overseen by a senior designer to ensure consistency, creativity, and flawless output.",
			usps: [
				"Experienced designers guiding every project.",
				"Uniform quality across outputs.",
				"Junior modelers supervised for precision."
			],
		}, {
			image: require("../assets/images/service-details/collebration-section-icon-3.png"),
			title: "Boutique Quality",
			content: "Get high-end, boutique-level design quality at the efficiency and cost advantage of offshore execution.",
			usps: [
				"Boutique-level finish on every render.",
				"Offshore efficiency without compromise.",
				"Handle one-off jobs or large volumes."
			],
		}, {
			image: require("../assets/images/service-details/collebration-section-icon-4.png"),
			title: "Quick Turnarounds",
			content: "We deliver across time zones with speed and reliability—without ever compromising on detail or quality.",
			usps: [
				"Work continues seamlessly while you rest.",
				"Optimized processes for faster delivery.",
				"Consistently meeting tight schedules."
			],
		}, {
			image: require("../assets/images/service-details/collebration-section-icon-5.png"),
			title: "Privacy & Confidentiality",
			content: "Hands-on quality control and NDA-backed confidentiality protect your work, ensuring trust and peace of mind.",
			usps: [
				"Multiple review stages before delivery.",
				"NDA-backed data protection protocols.",
				"Proven record of trust and reliability."
			],
		}, 
	];

	return (
		<>
			<Helmet>
				<title>{serviceDetails?.seoContent?.title || `${serviceDetails.title} | Glocal Studio`}</title>
			</Helmet>
			<section
				className={styles.masterHead}
				style={{
					background: `url("${serviceDetails.background}") no-repeat ${serviceDetails.backgroundPosition}`,
				}}
			>
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
							{serviceDetails.title}
						</Grid>
						<Grid size={12}>
							<Heading className={cx(styles.masterHeadingHeading, styles.extraLightText)}>
								{serviceDetails.desktopMainHeading}
							</Heading>
							<Heading className={styles.masterHeadingHeading}>
								{serviceDetails.secondaryHeading}
							</Heading>
						</Grid>
						<Grid size={8} offset={2} className={cx(styles.masterHeadText, styles.textWhite)}>
							{serviceDetails.description}
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
								{serviceDetails.whatWeDo.content}
							</Heading>
						</Grid>
					</Grid>
					<Grid
						size={12}
						container
						spacing={4}
						className={styles.whatWeDoBoxContainer}
						justifyContent="center"
						alignItems="flex-start"
					>
						{
							serviceDetails.whatWeDo.items.map((item) => (
								<WhatWeDoBox
									key={item.id}
									id={item.id}
									title={item.title}
									heading={item.heading}
									content={item.content}
									image={item.image}
									type={item.type}
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
			<section className={styles.whyChooseUsSection}>
				<Container maxWidth="xl">
					<Grid size={12} container className={styles.textCenter}>
						<Grid size={12}>
							<ColorfulText>WHY CHOOSE US</ColorfulText>
						</Grid>
						<Grid size={12} className={styles.whyChooseUsSecondaryHeadingContainer}>
							<Heading variant="seconndary" className={styles.uppercase}>
								Collaboration, <br/>
								Supervision & Speed
							</Heading>
						</Grid>
						<Grid size={12}>
							<StarGradiantIcon width="65px" height="78px" />
						</Grid>
						<Grid size={12} className={styles.whyChooseUsHeadingContainer}>
							<Heading className={styles.uppercase}>All in One Studio.</Heading>
						</Grid>
						<Grid size={6} offset={3} className={styles.workDirectlyText}>
							Work directly with the creators, guided by senior designers, with quality and confidentiality at every step.
						</Grid>
					</Grid>
					<Grid size={12}>
						<WhyChooseUsBox whyChooseUsContent={whyChooseUsContent} />
					</Grid>
					<Grid size={12} className={styles.textCenter}>
						<LinkButton>Let’s Discuss Your Project</LinkButton>
						<LinkButton>GET FREE CONSULTATION</LinkButton>
					</Grid>
				</Container>
			</section>
			<section className={styles.faqContainer}>
				<Container maxWidth="xl">
					<QualityMetrics />
					<Grid size={12} container>
						<Grid size={12}>
							<img src={require("../assets/images/service-details/faq-icon.png")} alt="" className={styles.faqIcon} />
						</Grid>
						<Grid size={12}>
							<div className={styles.faqHeading}>
								<span>frequently asked questions</span>
							</div>
						</Grid>
					</Grid>
					<FAQContainer faqContent={faqContent} />
				</Container>
			</section>
		</>
	);
};

export default ServiceDetails;
