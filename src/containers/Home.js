import React, { useRef } from "react";
import { Helmet } from "react-helmet-async";
import { Container, Grid2 as Grid } from "@mui/material";
import { useScroll } from "framer-motion";

import MasterHeadVideo from "@/components/Home/MasterHeadVideo";
import MaskVideoSection from "@/components/Home/MaskVideoSection";
import ZoomParallax from "@/components/Home/ZoomParallax";
import UspSectionCards from "@/components/Home/UspSectionCards";
import LetUsRenderPrespectiveScroll from "@/components/Home/LetUsRenderPrespectiveScroll";
import ServiceCard from "@/components/Home/ServiceCard";

import { Heading, LinkButton } from "@/components/common";

import { routes } from "@/utils/routesPath";

import masterHeadVideo from "@/assets/videos/home-masterhead-video.mp4";
import fullSupportImage from "@/assets/images/fullsuite-image.webp";

import * as styles from "./Home.module.scss";

function Home() {
	const servicesList = [
		{
			heading: <>Architectural <br />Visualization</>,
			subHeading: "From blueprint to breathtaking visuals.",
			description: "Bring architectural ideas to life with stunning, photoreal renders—exteriors, interiors, isometrics, floor plans, and walkthroughs that inspire confidence and sell.",
			usp: "IDEAL FOR Architects, real estate, developers, interior studios",
			image: require("../assets/images/architectural-visualization.png"),
			link: routes["architectural-visualization"].href,
			translateY: 100,
		}, {
			heading: <>3D <br/>Modeling</>,
			subHeading: "Every Detail, Perfectly Shaped in 3D",
			description: "We craft accurate 3D models for architecture, interiors, furniture, and products—detailed, scalable, and ready for rendering or prototyping.",
			usp: "IDEAL FOR ADesigners, product brands, architects, engineers",
			image: require("../assets/images/3d-modeling.png"),
			link: routes["3d-modeling"].href,
			translateY: 100,
		}, {
			heading: <>Technical<br/> Drawings</>,
			subHeading: "Designs That Build Without Guesswork",
			description: "Precise working drawings, joinery details, and documentation that bridge design intent and execution—streamlining site work and vendor coordination.",
			usp: "IDEAL FOR A Contractors, furniture makers, architects, developers",
			image: require("../assets/images/technical-drawings.png"),
			link: routes["technical-drawings"].href,
			translateY: 100,
		}, {
			heading: <>Product <br />Visualization</>,
			subHeading: "Your Product, Photoreal and Market-Ready",
			description: "From furniture renders to prototypes, we showcase your products with lifelike detail—perfect for marketing, e-commerce, and investor presentations.",
			usp: "IDEAL FOR A Product designers, startups, furniture brands, FMCG",
			image: require("../assets/images/product-visualization.png"),
			imageClassName: styles.speakerImage,
			link: routes["product-visualization"].href,
			translateY: 100,
		}, {
			heading: <>3D Animation & Experiences</>,
			subHeading: "Bring Design Stories to Motion",
			description: "Transform static visuals into immersive experiences with architectural flythroughs, interior presentations, and interactive storytelling.",
			usp: "IDEAL FOR A Developers, architects, marketing agencies, real estate",
			image: require("../assets/images/3d-animation.png"),
			link: routes["3d-animation-and-experiences"].href,
			translateY: 100,
		}, {
			heading: <>360° & Virtual <br />Tours</>,
			subHeading: "Immersive tours that close deals faster.",
			description: "Give clients the power to explore spaces virtually through 360° panoramas and interactive tours—ideal for real estate and hospitality marketing.",
			usp: "IDEAL FOR A Realtors hotels, property portals, global buyers",
			image: require("../assets/images/360-virtual-tour.png"),
			link: routes["360-degree-and-virtual-tours"].href,
			translateY: 100,
		}
	];

	const serviceListContainer = useRef(null);

	const { scrollYProgress } = useScroll({
		target: serviceListContainer,
		offset: ['start end', 'end start']
	})

  return (
		<>
			<Helmet>
        <title>The Worlds Leading Studio You Can Trust | Glocal Studio</title>
				<meta name="description" content="Streamline your business with professional virtual assistant services. Get remote administrative support, scheduling, customer care, and more. Enhance productivity today!" />
      </Helmet>
			<section className={styles.masterHead}>
				<MasterHeadVideo />
				<video muted autoPlay controls={false} loop playsInline className={styles.masterHeadVideo}>
					<source src={masterHeadVideo} />
				</video>
			</section>
			<section className={styles.videoSectionContent}>
				<Container maxWidth="xl">
					<Grid container justifyContent="center">
						<Grid size={10} className={styles.videoSectionText}>
							Experience high-end 3D rendering without the high-end cost.<br />
							We deliver mind-blowing visualizations for interiors, exteriors, products, and more—at a price point you won't believe.
						</Grid>
					</Grid>
				</Container>
			</section>
			<MaskVideoSection />
			<section className={styles.fullSuiteSolutionSection}>
				<Container maxWidth="xl">
					<Grid size={12}>
						<Heading className={styles.fullSuiteMainHeading}>
							Full-Suite<br />3D Rendering Solutions
						</Heading>
					</Grid>
					<Grid size={12}>
						<img src={fullSupportImage} alt="" className={styles.fullSupportImage} />
					</Grid>
					<Grid size={12} spacing={4} container className={styles.fullSupportItemsList} ref={serviceListContainer}>
						{
							servicesList.map((service, index) => (
								<ServiceCard
									key={index}
									heading={service.heading}
									subHeading={service.subHeading}
									description={service.description}
									usp={service.usp}
									image={service.image}
									imageClassName={service.imageClassName}
									progress={scrollYProgress}
									translateY={service.translateY}
									link={service.link}
								/>
							))
						}
					</Grid>
					<Grid size={12}>
						<Heading variant="secondary" className={styles.fullSuiteBottomHeading}>
							<div className={styles.normalText}>Get premium-quality output for every need—</div>
							without paying the premium.
						</Heading>
					</Grid>
					<Grid size={12} justifySelf="center">
						<LinkButton style={{ "--button-bg": "#f2f0ea" }}>GET A FREE QUOTE</LinkButton>
						<LinkButton style={{ "--button-bg": "#f2f0ea" }}>BROWSE PORTFOLIO</LinkButton>
					</Grid>
				</Container>
			</section>
			<section className={styles.portfolioSection}>
				<Container maxWidth="xl">
					<Grid size={12}>
						<Heading className={styles.portfolioHeading}>
							See the Stunning. 
						</Heading>
					</Grid>
					<Grid size={12}>
						<Heading variant="secondary" className={styles.portfolioSecondaryHeading}>Believe the Budget.</Heading>
					</Grid>
					<Grid size={12} container className={styles.textCenter}>
						<Grid size={6} offset={3}>
							Explore some of our favorite works—from photorealistic home interiors to cinematic exterior walkthroughs. You’ll be amazed what we deliver for the price.
						</Grid>
					</Grid>
					<Grid size={12} justifySelf="center" className={styles.portfolioButtons}>
						<LinkButton style={{ "--button-bg": "#060010", "--button-text-color": "#fff" }}>BROWSE PORTFOLIO</LinkButton>
					</Grid>
				</Container>
				<ZoomParallax />
			</section>
			<section className={styles.whyBrandLoveSection}>
				<Container maxWidth="xl">
					<Grid size={12}>
						<Heading variant="secondary" className={styles.whyBrandHeading}>Why Brands Love Us?</Heading>
					</Grid>
					<Grid size={12}>
						<Heading className={styles.whyBrandHeading}>
							Elite Rendering.<br/>
							Fair Pricing.
						</Heading>
						<Heading className={styles.textCenter}>No Compromise.</Heading>
					</Grid>
					<Grid size={12} container>
						<Grid size={6} offset={3} className={styles.whyBrandSmallText}>
							At Glocal Studio, we deliver premium-quality 3D visuals and design solutions that rival the world’s best—but at prices that make sense. From stunning realism to lightning-fast turnaround, we combine creativity, precision, and affordability like no one else.
						</Grid>
						<Grid size={6} offset={3} className={styles.whyBrandSmallAnotherText}>
							When others say either quality or price—we say, why not both?
						</Grid>
					</Grid>
				</Container>
				<UspSectionCards />
			</section>
			<section> {/** Let us render section */}
				<LetUsRenderPrespectiveScroll />
			</section>
		</>
  );
}

export default Home;
