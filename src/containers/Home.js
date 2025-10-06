import React, { useRef } from "react";
import { Helmet } from "react-helmet-async";
import { Container, Grid2 as Grid, Typography } from "@mui/material";
import { useScroll } from "framer-motion";
import cx from "classnames";

import MasterHeadVideo from "@/components/Home/MasterHeadVideo";
import MaskVideoSection from "@/components/Home/MaskVideoSection";
import ZoomParallax from "@/components/Home/ZoomParallax";
import UspSectionCards from "@/components/Home/UspSectionCards";
import ServiceCard from "@/components/Home/ServiceCard";
import ScrollCarousel from "@/components/Home/ScrollCarousel";
import CylinderText from "@/components/Home/CylinderText";

import { useDevice } from '@/context/DeviceContext';

import { Heading, LinkButton } from "@/components/common";

import { routes } from "@/utils/routesPath";

import masterHeadVideo from "@/assets/videos/home-masterhead-video.mp4";
import fullSupportImage from "@/assets/images/fullsuite-image.webp";

import * as styles from "./Home.module.scss";


function Home() {
	const { isMobile } = useDevice();
	
	const servicesList = [
		{
			heading: <>Architectural <br />Visualization</>,
			subHeading: "From blueprint to breathtaking visuals.",
			description: "Bring architectural ideas to life with stunning, photoreal renders-exteriors, interiors, isometrics, floor plans, and walkthroughs that inspire confidence and sell.",
			usp: "IDEAL FOR Architects, real estate, developers, interior studios",
			image: require("../assets/images/architectural-visualization.png"),
			link: routes["architectural-visualization"].href,
		}, {
			heading: <>3D <br/>Modeling</>,
			subHeading: "Every Detail, Perfectly Shaped in 3D",
			description: "We create precise, review-ready 3D models for spaces, products, and digital environments, scalable and optimized for rendering, animation, or prototyping.",
			usp: "IDEAL FOR ADesigners, product brands, architects, engineers",
			image: require("../assets/images/3d-modeling.png"),
			link: routes["3d-modeling"].href,
		}, {
			heading: <>Technical<br/> Drawings</>,
			subHeading: "Designs That Build Without Guesswork",
			description: "Precise working drawings, joinery details, and documentation that bridge design intent and execution-streamlining site work and vendor coordination.",
			usp: "IDEAL FOR A Contractors, furniture makers, architects, developers",
			image: require("../assets/images/technical-drawings.png"),
			link: routes["technical-drawings"].href,
		}, {
			heading: <>Product <br />Visualization</>,
			subHeading: "Your Product, Photoreal and Market-Ready",
			description: "From furniture renders to prototypes, we showcase your products with lifelike detail-perfect for marketing, e-commerce, and investor presentations.",
			usp: "IDEAL FOR A Product designers, startups, furniture brands, FMCG",
			image: require("../assets/images/product-visualization.png"),
			link: routes["product-visualization"].href,
		}, {
			heading: <>3D Animation & Experiences</>,
			subHeading: "Where Vision Moves with Purpose",
			description: "Bring ideas to life with expert-reviewed animations that create immersive experiences, from architectural walkthroughs to product demos and brand films.",
			usp: "IDEAL FOR A Developers, architects, marketing agencies, real estate",
			image: require("../assets/images/3d-animation.png"),
			imageType: "image",
			link: routes["3d-animation-and-experiences"].href,
		}, {
			heading: <>360° & Virtual <br />Tours</>,
			subHeading: "Immersive tours that close deals faster.",
			description: "Transform static visuals into immersive 3D animations and experiences with architectural flythroughs, interior presentations, and interactive storytelling.",
			usp: "IDEAL FOR A Realtors hotels, property portals, global buyers",
			image: require("../assets/images/360-virtual-tour.png"),
			link: routes["360-degree-and-virtual-tours"].href,
		}
	];

	const serviceListContainer = useRef(null);

	const { scrollYProgress } = useScroll({
		target: serviceListContainer,
		offset: ['start end', 'end start']
	});

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
			
			<CylinderText />
			
			<MaskVideoSection />
			
			<section className={styles.fullSuiteSolutionSection}>
				<Container maxWidth="xl">
					<Grid size={12}>
						<Heading className={styles.fullSuiteMainHeading} direction="down">
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
									imageType={service.imageType}
								/>
							))
						}
					</Grid>
					<Grid size={12}>
						<Heading variant="secondary" className={styles.fullSuiteBottomHeading}>
							<div className={styles.normalText}>Get premium-quality output for every need-</div>
							without paying the premium.
						</Heading>
					</Grid>
					<Grid size={12} justifySelf="center" sx={{ textAlign: { xs: "center", md: "left" } }}>
						<LinkButton style={{ "--button-bg": "#f2f0ea" }}>GET A FREE QUOTE</LinkButton>
						<LinkButton style={{ "--button-bg": "#f2f0ea" }}>BROWSE PORTFOLIO</LinkButton>
					</Grid>
				</Container>
			</section>
			<section className={styles.portfolioSection}>
				<Container maxWidth="xl">
					<Grid size={12}>
						<Heading className={styles.portfolioHeading} direction="down">
							See the Stunning. 
						</Heading>
					</Grid>
					<Grid size={12}>
						<Heading variant="secondary" className={styles.portfolioSecondaryHeading}>Believe the Budget.</Heading>
					</Grid>
					<Grid size={12} container justifyContent={"center"} className={styles.textCenter}>
						<Grid size={{xs: 12, md: 6}}>
							Explore some of our favorite works—from photorealistic home interiors to cinematic exterior walkthroughs. You’ll be amazed what we deliver for the price.
						</Grid>
					</Grid>
					<Grid size={12} justifySelf="center" className={styles.portfolioButtons}>
						<LinkButton style={{ "--button-bg": "#060010", "--button-text-color": "#ece9e2" }}>BROWSE PORTFOLIO</LinkButton>
					</Grid>
				</Container>
				<ZoomParallax />
			</section>
			<section className={styles.whyBrandLoveSection}>
				<Container maxWidth="xl">
					<Grid size={12}>
						<Heading variant="secondary" className={styles.whyBrandHeading} direction="down">Why Brands Love Us?</Heading>
					</Grid>
					<Grid size={12} sx={{
							mt: { xs: 3, md: 0 },
						}}>
						<Heading className={styles.whyBrandHeading}>
							Expert Reviewed.<br/>
							Technically Perfect.
						</Heading>
						<Heading className={cx(styles.textCenter, styles.fontBold)}>Every Time.</Heading>
					</Grid>
					<Grid size={12} container justifyContent={"center"}>
						<Grid size={{xs: 12, md: 6}} className={styles.whyBrandSmallText}>
							At Glocal Studio, we deliver premium-quality 3D visuals and design solutions that rival the world’s best—but at prices that make sense. From stunning realism to lightning-fast turnaround, we combine creativity, precision, and affordability like no one else.
						</Grid>
						<Grid size={12}/>
						<Grid size={{xs: 12, md: 6}} className={styles.whyBrandSmallAnotherText}>
							When others say either quality or price—we say, why not both?
						</Grid>
					</Grid>
				</Container>
				<UspSectionCards />
			</section>
			<section className={styles.letUsRenderHeading}>
				<Container maxWidth="xl">
					<Grid size={12} container justifyContent="center">
						<Grid size={8} className={styles.letUsRenderText}>
							Our services cover everything from architectural visualization and 3D modeling to product renders, animations, virtual tours, and technical documentation—giving you a complete creative and technical partner under one roof.
						</Grid>
					</Grid>
				</Container>
			</section>
			<section className={styles.letUsRenderSection}> {/** Let us render section */}
				<ScrollCarousel
					images={[
						require("../assets/images/home/set1a.jpg"),
						require("../assets/images/home/set1b.jpg"),
						require("../assets/images/home/set1c.jpg"),
						require("../assets/images/home/set1d.jpg"),
					]}
					serviceName="Architectural Visualization"
				/>
			</section>
			<section className={styles.letUsRenderSection}> {/** Let us render section */}
				<ScrollCarousel
					images={[
						require("../assets/images/home/set2a.jpg"),
						require("../assets/images/home/set2b.jpg"),
						require("../assets/images/home/set2c.jpg"),
						require("../assets/images/home/set2d.jpg"),
					]}
					serviceName="3D Modeling"
				/>
			</section>
			<section className={styles.letUsRenderSection}> {/** Let us render section */}
				<ScrollCarousel
					images={[
						require("../assets/images/home/set4a.jpg"),
						require("../assets/images/home/set4b.jpg"),
						require("../assets/images/home/set4c.jpg"),
						require("../assets/images/home/set4d.jpg"),
					]}
					serviceName="Product Visualization"
				/>
			</section>
			<section className={styles.letUsRenderSection}> {/** Let us render section */}
				<ScrollCarousel
					images={[
						require("../assets/images/home/set5a.jpg"),
						require("../assets/images/home/set5b.jpg"),
						require("../assets/images/home/set5c.jpg"),
						require("../assets/images/home/set5d.jpg"),
					]}
					serviceName="3D Animation & Experiences"
				/>
			</section>
			<section className={styles.letUsRenderSection}> {/** Let us render section */}
				<ScrollCarousel
					images={[
						require("../assets/images/home/set6a.jpg"),
						require("../assets/images/home/set6b.jpg"),
						require("../assets/images/home/set6c.jpg"),
						require("../assets/images/home/set6d.jpg"),
					]}
					serviceName="360° & Virtual Tours"
				/>
			</section>
			<section className={styles.letUsRenderSection}> {/** Let us render section */}
				<ScrollCarousel
					images={[
						require("../assets/images/home/set3a.jpg"),
						require("../assets/images/home/set3b.jpg"),
						require("../assets/images/home/set3c.jpg"),
						require("../assets/images/home/set3d.jpg"),
					]}
					serviceName="Technical Drawings"
				/>
			</section>
			<section className={cx(styles.letUsRenderHeading, styles.letUsRenderHeadingLast)}>
				<Container maxWidth="xl">
					<Grid size={12} container justifyContent="center">
						<Grid size={8} className={styles.letUsRenderText}>
							and more...
						</Grid>
					</Grid>
				</Container>
			</section>
		</>
  );
}

export default Home;
