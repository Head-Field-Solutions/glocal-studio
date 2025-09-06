import React, { useState, useEffect, useContext } from "react";
import { Container, Grid2 as Grid, Box } from "@mui/material";

import { Heading, LinkButton, ColorfulText } from "@/components/common";

import { ContactFormContext } from '@/context/ContactFormContext';

import { ChevronArrow } from "@/components/Icons";

import homeSlideImage1 from "@/assets/images/home-slide-image-1.png";
import homeSlideImage2 from "@/assets/images/home-slide-image-2.png";
import homeSlideImage3 from "@/assets/images/home-slide-image-3.png";
import homeSlideImage4 from "@/assets/images/home-slide-image-4.png";

import * as styles from "./ProcessSlider.module.scss";

function ProcessSlider() {
	const [SwiperComponents, setSwiperComponents] = useState(null);
	const [SwiperModules, setSwiperModules] = useState(null);
	const [swiperInstance, setSwiperInstance] = useState(null);

	const { toggleContactForm } = useContext(ContactFormContext);

  useEffect(() => {
    import("swiper/react").then(({ Swiper, SwiperSlide }) => {
      setSwiperComponents({ Swiper, SwiperSlide });
    });
  }, []);

	useEffect(() => {
    import("swiper/modules").then(({ Pagination, Navigation }) => {
      setSwiperModules({ Pagination, Navigation });
    });
  }, []);

  if (!SwiperComponents || !SwiperModules) return null; // or a fallback loader

  const { Swiper, SwiperSlide } = SwiperComponents;
	const { Pagination, Navigation } = SwiperModules;

	return (
		<>
			<div className={styles.carouselArrow}>
				<ChevronArrow className={styles.prevArrow} onClick={() => swiperInstance?.slidePrev()} />
				<ChevronArrow className={styles.nextArrow} onClick={() => swiperInstance?.slideNext()} />
			</div>
			<Swiper
				autoHeight={true}
				pagination={{
					type: "progressbar",
				}}
				navigation={false}
				loop
				modules={[Pagination, Navigation]}
				onSwiper={(swiper) => setSwiperInstance(swiper)}
				className={styles.swiperSlider}
			>
				<SwiperSlide className={`${styles.slide1} ${styles.slide}`}>
					<Container maxWidth="xl" className={styles.simpleSectionSlides}>
						<Grid container size={12}>
							<Grid
								size={12}
								sx={{
									textAlign: {
										xs: "center",
										md: "center"
									},
									mb: {
										xs: 0,
										md: 0
									}
								}}
							>
								<Heading>Plan Selection</Heading>							
							</Grid>
							<Grid container spacing={{xs: 4, md: 6}} alignItems="center" className={styles.slideContent}>
								<Grid size={{xs:12, md: 6}} order={{ xs: 2, md: 1 }}>
									<div className={styles.slideStepCount}>
										<ColorfulText>Step 1.</ColorfulText>
									</div>
									<Heading variant="secondary" className={styles.slideHeading}>
										Choose the 
										Solution That 
										Fits Your Needs.
									</Heading>
									<div className={styles.slideText}>
										Choose from flexible part-time or full-time plans tailored to your needs. Whether you need one assistant or a full team, we have options to match your goals. Pick your plan and start scaling with ease.
									</div>
									<Box sx={{ textAlign: { xs: "center", md: "left" } }}>
										<LinkButton
											style={{ "--button-bg": "#FFEDD0" }}
											onClick={toggleContactForm}
										>
											start hiring
										</LinkButton>
									</Box>
								</Grid>
								<Grid size={{xs:12, md: 6}} order={{ xs: 1, md: 2 }}>
									<img src={homeSlideImage1} alt="" className={styles.slideImage} />
								</Grid>
							</Grid>
						</Grid>
					</Container>
				</SwiperSlide>

				<SwiperSlide className={`${styles.slide2} ${styles.slide}`}>
					<Container maxWidth="xl" className={styles.simpleSectionSlides}>
						<Grid container size={12}>
							<Grid
								size={12}
								sx={{
									textAlign: {
										xs: "center",
										md: "center"
									},
									mb: {
										xs: 0,
										md: 0
									}
								}}
							>
								<Heading>Perfect Match</Heading>
							</Grid>
							<Grid size={12} spacing={{xs: 4, md:6}} container alignItems="center" className={styles.slideContent}>
								<Grid size={{xs:12, md: 6}} order={{ xs: 2, md: 1 }}>
									<div className={styles.slideStepCount}>
										<ColorfulText>Step 2.</ColorfulText>
									</div>
									<Heading variant="secondary" className={styles.slideHeading}>
										Personalized 
										Guidance 
										One Call Away.
									</Heading>
									<div className={styles.slideText}>
										Interview as many virtual assistants as needed until you find the right fit. We ensure each candidate aligns with your skills, needs, and culture. Start only when you&apos;re confident in the match.
									</div>
									<div>
										<Box sx={{ textAlign: { xs: "center", md: "left" } }}>
											<LinkButton
												style={{ "--button-bg": "#FEF3B8" }}
												onClick={toggleContactForm}
											>
												start hiring
											</LinkButton>
										</Box>
									</div>
								</Grid>
								<Grid size={{xs:12, md: 6}} order={{ xs: 1, md: 2 }}>
									<img src={homeSlideImage2} alt="" className={styles.slideImage} />
								</Grid>
							</Grid>
						</Grid>
					</Container>
				</SwiperSlide>

				<SwiperSlide className={`${styles.slide3} ${styles.slide}`}>
					<Container maxWidth="xl" className={styles.simpleSectionSlides}>
						<Grid container size={12}>
							<Grid
								size={12}
								sx={{
									textAlign: {
										xs: "center",
										md: "center"
									},
									mb: {
										xs: 0,
										md: 0
									}
								}}
							>
								<Heading>Kickoff Call</Heading>						
							</Grid>
							<Grid size={12} spacing={{xs: 4, md:6}} container alignItems="center" className={styles.slideContent}>
								<Grid size={{xs:12, md: 6}} order={{ xs: 2, md: 1 }}>
									<div className={styles.slideStepCount}>
										<ColorfulText>Step 3.</ColorfulText>
									</div>
									<Heading variant="secondary" className={styles.slideHeading}>
										Dedicated 
										Expertise 
										Ready to Deliver.
									</Heading>
									<div className={styles.slideText}>
										Once selected, we schedule a quick kickoff call with your assistant&apos;s manager. Finalize task priorities, workflows, and communication preferences. Everything is aligned before work begins.
									</div>
									<div>
										<Box sx={{ textAlign: { xs: "center", md: "left" } }}>
											<LinkButton
												style={{ "--button-bg": "#99FFE4" }}
												onClick={toggleContactForm}
											>
												start hiring
											</LinkButton>
										</Box>
									</div>
								</Grid>
								<Grid size={{xs:12, md: 6}} order={{ xs: 1, md: 2 }}>
									<img src={homeSlideImage3} alt="" className={styles.slideImage} />
								</Grid>
							</Grid>
						</Grid>
					</Container>
				</SwiperSlide>

				<SwiperSlide className={`${styles.slide4} ${styles.slide}`}>
					<Container maxWidth="xl" className={styles.simpleSectionSlides}>
						<Grid container size={12}>
							<Grid
								size={12}
								sx={{
									textAlign: {
										xs: "center",
										md: "center"
									},
									mb: {
										xs: 0,
										md: 0
									}
								}}
							>
								<Heading>Seamless Support</Heading>
							</Grid>
							<Grid size={12} spacing={{xs: 4, md:6}} container alignItems="center" className={styles.slideContent}>
								<Grid size={{xs:12, md: 6}} order={{ xs: 2, md: 1 }}>
									<div className={styles.slideStepCount}>
										<ColorfulText>Step 4.</ColorfulText>
									</div>
									<Heading variant="secondary" className={styles.slideHeading}>
										Track Progress, 
										Achieve 
										Success.
									</Heading>
									<div className={styles.slideText}>
										Your assistant handles daily operations, freeing you to focus on growth. From admin to marketing, we&apos;ve got the details covered. You stay in control while we handle the rest.
									</div>
									<div>
										<Box sx={{ textAlign: { xs: "center", md: "left" } }}>
											<LinkButton
												style={{ "--button-bg": "#FECFCF" }}
												onClick={toggleContactForm}
											>
												start hiring
											</LinkButton>
										</Box>
									</div>
								</Grid>
								<Grid size={{xs:12, md: 6}} order={{ xs: 1, md: 2 }}>
									<img src={homeSlideImage4} alt="" className={styles.slideImage} />
								</Grid>
							</Grid>
						</Grid>
					</Container>
				</SwiperSlide>
			</Swiper>
		</>
	);
}

export default ProcessSlider;
