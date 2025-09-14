import React from 'react';
import { Helmet } from 'react-helmet-async';
import { Container, Grid2 as Grid } from '@mui/material';

import MasterHeadVideo from "@/components/Home/MasterHeadVideo";
import MaskVideoSection from "@/components/Home/MaskVideoSection";
import ZoomParallax from "@/components/Home/ZoomParallax";

import { Heading, LinkButton, GlassContainer } from "@/components/common";

import masterHeadVideo from "@/assets/videos/home-masterhead-video.mp4";
import fullSupportImage from "@/assets/images/fullsuite-image.png";

import * as styles from "./Home.module.scss";

function Home() {
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
						<Heading variant="secondary" className={styles.fullSuiteMainHeading}>
							Full-Suite<br />3D Rendering Solutions
						</Heading>
					</Grid>
					<Grid size={12}>
						<img src={fullSupportImage} alt="" className={styles.fullSupportImage} />
					</Grid>
					<Grid size={12} spacing={4} container className={styles.fullSupportItemsList}>
						<Grid size={4} className={styles.fullSupportItemGrid}>
							<GlassContainer glassBackground="rgba(245, 244, 241, 0.5)" />
							<Grid size={12} container className={styles.itemContent}>
								<Grid size={12} className={styles.itemHeading}>Architectural <br />Visualization</Grid>
								<Grid size={12} className={styles.itemSubHeading}>From blueprint to breathtaking visuals.</Grid>
								<Grid size={12} className={styles.itemText}>
									Bring architectural ideas to life with stunning, photoreal renders—exteriors, interiors, isometrics, floor plans, and walkthroughs that inspire confidence and sell.
								</Grid>
								<Grid size={12} spacing={3} container>
									<Grid size={6}>
										<LinkButton style={{ "--button-bg": "#f2f0ea" }}>GET A FREE QUOTE</LinkButton>
									</Grid>
									<Grid size={5} className={styles.itemSmallText}>
										IDEAL FOR Architects, real estate, developers, interior studios
									</Grid>
									<Grid size={1}>
										<img src={require("../assets/images/check-icon.png")} alt="" className={styles.checkIcon} />
									</Grid>
								</Grid>
								<Grid  size={12} className={styles.imageContainer}>
									<img
										src={require("../assets/images/architectural-visualization.png")}
										alt=""
									/>
								</Grid>
							</Grid>
						</Grid>
						<Grid size={4} className={styles.fullSupportItemGrid}>
							<GlassContainer glassBackground="rgba(245, 244, 241, 0.5)" />
							<Grid size={12} container className={styles.itemContent}>
								<Grid size={12} className={styles.itemHeading}>3D <br/>Modeling</Grid>
								<Grid size={12} className={styles.itemSubHeading}>Every Detail, Perfectly Shaped in 3D</Grid>
								<Grid size={12} className={styles.itemText}>
									We craft accurate 3D models for architecture, interiors, furniture, and products—detailed, scalable, and ready for rendering or prototyping.
								</Grid>
								<Grid size={12} spacing={3} container>
									<Grid size={6}>
										<LinkButton style={{ "--button-bg": "#f2f0ea" }}>GET A FREE QUOTE</LinkButton>
									</Grid>
									<Grid size={5} className={styles.itemSmallText}>
										IDEAL FOR ADesigners, product brands, architects, engineers
									</Grid>
									<Grid size={1}>
										<img src={require("../assets/images/check-icon.png")} alt="" className={styles.checkIcon} />
									</Grid>
								</Grid>
								<Grid  size={12} className={styles.imageContainer}>
									<img
										src={require("../assets/images/3d-modeling.png")}
										alt=""
									/>
								</Grid>
							</Grid>
						</Grid>
						<Grid size={4} className={styles.fullSupportItemGrid}>
							<GlassContainer glassBackground="rgba(245, 244, 241, 0.5)" />
							<Grid size={12} container className={styles.itemContent}>
								<Grid size={12} className={styles.itemHeading}>Technical<br/> Drawings</Grid>
								<Grid size={12} className={styles.itemSubHeading}>Designs That Build Without Guesswork</Grid>
								<Grid size={12} className={styles.itemText}>
									Precise working drawings, joinery details, and documentation that bridge design intent and execution—streamlining site work and vendor coordination.
								</Grid>
								<Grid size={12} spacing={3} container>
									<Grid size={6}>
										<LinkButton style={{ "--button-bg": "#f2f0ea" }}>GET A FREE QUOTE</LinkButton>
									</Grid>
									<Grid size={5} className={styles.itemSmallText}>
										IDEAL FOR A Contractors, furniture makers, architects, developers
									</Grid>
									<Grid size={1}>
										<img src={require("../assets/images/check-icon.png")} alt="" className={styles.checkIcon} />
									</Grid>
								</Grid>
								<Grid  size={12} className={styles.imageContainer}>
									<img
										src={require("../assets/images/technical-drawings.png")}
										alt=""
									/>
								</Grid>
							</Grid>
						</Grid>
						<Grid size={4} className={styles.fullSupportItemGrid}>
							<GlassContainer glassBackground="rgba(245, 244, 241, 0.5)" />
							<Grid size={12} container className={styles.itemContent}>
								<Grid size={12} className={styles.itemHeading}>Product <br />Visualization</Grid>
								<Grid size={12} className={styles.itemSubHeading}>Your Product, Photoreal and Market-Ready</Grid>
								<Grid size={12} className={styles.itemText}>
									From furniture renders to prototypes, we showcase your products with lifelike detail—perfect for marketing, e-commerce, and investor presentations.
								</Grid>
								<Grid size={12} spacing={3} container>
									<Grid size={6}>
										<LinkButton style={{ "--button-bg": "#f2f0ea" }}>GET A FREE QUOTE</LinkButton>
									</Grid>
									<Grid size={5} className={styles.itemSmallText}>
										IDEAL FOR A Product designers, startups, furniture brands, FMCG
									</Grid>
									<Grid size={1}>
										<img src={require("../assets/images/check-icon.png")} alt="" className={styles.checkIcon} />
									</Grid>
								</Grid>
								<Grid  size={12} className={styles.imageContainer}>
									<img
										src={require("../assets/images/product-visualization.png")}
										alt=""
										className={styles.speakerImage}
									/>
								</Grid>
							</Grid>
						</Grid>
						<Grid size={4} className={styles.fullSupportItemGrid}>
							<GlassContainer glassBackground="rgba(245, 244, 241, 0.5)" />
							<Grid size={12} container className={styles.itemContent}>
								<Grid size={12} className={styles.itemHeading}>3D Animation & Experiences</Grid>
								<Grid size={12} className={styles.itemSubHeading}>Bring Design Stories to Motion</Grid>
								<Grid size={12} className={styles.itemText}>
									Transform static visuals into immersive experiences with architectural flythroughs, interior presentations, and interactive storytelling.
								</Grid>
								<Grid size={12} spacing={3} container>
									<Grid size={6}>
										<LinkButton style={{ "--button-bg": "#f2f0ea" }}>GET A FREE QUOTE</LinkButton>
									</Grid>
									<Grid size={5} className={styles.itemSmallText}>
										IDEAL FOR A Developers, architects, marketing agencies, real estate
									</Grid>
									<Grid size={1}>
										<img src={require("../assets/images/check-icon.png")} alt="" className={styles.checkIcon} />
									</Grid>
								</Grid>
								<Grid  size={12} className={styles.imageContainer}>
									<img
										src={require("../assets/images/3d-animation.png")}
										alt=""
									/>
								</Grid>
							</Grid>
						</Grid>
						<Grid size={4} className={styles.fullSupportItemGrid}>
							<GlassContainer glassBackground="rgba(245, 244, 241, 0.5)" />
							<Grid size={12} container className={styles.itemContent}>
								<Grid size={12} className={styles.itemHeading}>360° & Virtual <br />Tours</Grid>
								<Grid size={12} className={styles.itemSubHeading}>Immersive tours that close deals faster.</Grid>
								<Grid size={12} className={styles.itemText}>
									Give clients the power to explore spaces virtually through 360° panoramas and interactive tours—ideal for real estate and hospitality marketing.
								</Grid>
								<Grid size={12} spacing={3} container>
									<Grid size={6}>
										<LinkButton style={{ "--button-bg": "#f2f0ea" }}>GET A FREE QUOTE</LinkButton>
									</Grid>
									<Grid size={5} className={styles.itemSmallText}>
										IDEAL FOR A Realtors hotels, property portals, global buyers
									</Grid>
									<Grid size={1}>
										<img src={require("../assets/images/check-icon.png")} alt="" className={styles.checkIcon} />
									</Grid>
								</Grid>
								<Grid  size={12} className={styles.imageContainer}>
									<img
										src={require("../assets/images/360-virtual-tour.png")}
										alt=""
									/>
								</Grid>
							</Grid>
						</Grid>
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
						<Heading variant="secondary" className={styles.portfolioHeading}>
							See the Stunning. 
						</Heading>
					</Grid>
					<Grid size={12} className={styles.portfolioSecondaryHeading}>Believe the Budget.</Grid>
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
		</>
  );
}

export default Home;
