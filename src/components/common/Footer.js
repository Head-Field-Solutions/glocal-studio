import React from "react";
import { Link } from 'react-router-dom';
import { Container, Grid2 as Grid } from "@mui/material";
import cx from "classnames";

import { useDevice } from '@/context/DeviceContext';

import {
	EmailIcon,
	PhoneIcon,
	Instagram,
	LinkedIn
} from "@/components/Icons";

import { routes } from "@/utils/routesPath";

import logo from "@/assets/images/logo-white.png";
import footerBg from "@/assets/images/footer-bg.jpg";
import footerBgMobile from "@/assets/images/footer-bg-mobile.jpg";

import Heading from "./Heading";
import Carousel from "./Carousel";
import Animate from "./Animate";
import ScheduleMeet from "./ScheduleMeet";
import ColorfulText from "./ColorfulText";

import * as styles from "./Footer.module.scss";

function Footer() {

	const { isMobile } = useDevice();
	
	return (
		<section className={styles.footer}>
			<Grid size={12} className={styles.logoSection}>
				<Carousel animationTime="70s">
					{
						Array.from({ length: 16 }, (_, i) => {
							const imageSrc = require(`../../assets/images/logos/footer-carousel-logo-${i + 1}.png`);
							return (
								<li key={i}>
									<img
										src={imageSrc}
										alt=""
									/>
								</li>
							)
						})
					}
				</Carousel>
			</Grid>
			<Grid size={12}>
				<img src={isMobile ? footerBgMobile : footerBg} alt="" className={styles.footerImage} />
			</Grid>
			<Container maxWidth="xl" className={styles.simplifySection}>
				<Grid size={12} container>
					<Grid size={{sm:12, md:6}}>
						<Heading className={styles.simplifyHeading}>
							<ColorfulText>Simplify, Streamline, Succeed.</ColorfulText>
						</Heading>
					</Grid>
					<Grid size={{sm:12, md:6}}>
						<Heading variant="secondary" direction="down" className={styles.secondaryHeading}>
							Let&apos;s Build Something Great Together!
						</Heading>
						<Animate.FadeUp direction="up" className={styles.text}>
							Our pros are primed, vetted & ready to rocket-fuel every role and function of your organization.
						</Animate.FadeUp>
						<Grid
							size={12}
							container
							spacing={{xs:3, md: 6}}
							alignItems="center"
							justifyContent="space-between"
							sx={{ textAlign: {
								xs: 'center',
								md: 'left',
							}}}
						
						>
							<ScheduleMeet />
						</Grid>
					</Grid>
				</Grid>
			</Container>
			<Grid
				size={{
					xs: 12,
					sm: 12,
					md: 12,
					lg: 8,
				}}
				container
				justifyContent="center"
				className={styles.footerSection}
			>
				<Grid size={12} className={styles.logoContainer}>
					<img src={logo} className={styles.logo} alt="Glocal LPO" />
				</Grid>
				<Grid size={12}>
					<div className={styles.navBar}>
						<Link
							to={routes.home.href}
							data-replace={routes.home.label}
							className={styles.footerLink}
						>
							<span>{routes.home.label}</span>
						</Link>
						<Link
							to={routes.about.href}
							data-replace={routes.about.label}
							className={styles.footerLink}
						>
							<span>{routes.about.label}</span>
						</Link>
						<Link
							to={routes.services.href}
							data-replace={routes.services.label}
							className={styles.footerLink}
						>
							<span>{routes.services.label}</span>
						</Link>
						<Link
							to={routes.caseStudy.href}
							data-replace={routes.caseStudy.label}
							className={styles.footerLink}
						>
							<span>{routes.caseStudy.label}</span>
						</Link>
						<Link
							to={routes["contact-us"].href}
							data-replace={routes["contact-us"].label}
							className={styles.footerLink}
						>
							<span>{routes["contact-us"].label}</span>
						</Link>
					</div>
				</Grid>
				<Grid
					size={12}
					className={styles.socialMedia}
					justifyContent="center"
					container
					spacing={2}
				>
					<a
						href="https://www.instagram.com/assistglocal/"
						rel="noopener noreferrer nofollow"
						className={styles.socialIcons}
						target="_blank"
					>
						<Instagram />
					</a>
					<a
						href="https://www.linkedin.com/company/glocalassist-technology-virtualassistant/"
						rel="noopener noreferrer nofollow"
						className={cx(styles.socialIcons, styles.linkedin)}
						target="_blank"
					>
						<LinkedIn />
					</a>
				</Grid>
			</Grid>
			<Grid
				size={12}
				className={styles.copyrightContainer}
				alignItems="center"
				container
				sx={{ textAlign: {
					xs: 'center',
					md: 'left',
				}}}
			>
				<Grid size={{xs:12, md: 4}} className={styles.slogan}
					
				>
					think <span className={styles.globalColor}>global</span><span className={styles.commaColor}>,</span> <span className={styles.workColor}>work</span> local.
				</Grid>
				<Grid size={{xs:12, md: 4}} className={styles.copywrightText}
					sx={{ order: { xs: 3} }}
				>
					&copy; 2025 Glocal Studio. All Rights Reserved.
				</Grid>
				<Grid size={{xs:12, md: 4}} className={styles.contactInfo}
					sx={{ order: { md: 3} }}
				>
					<span className={styles.phone}>
						<PhoneIcon fill="#FF005B" width="20px" height="20px" />
						<a href="tel:+17323444260">+1 (732) 344 4260</a>
						<a href="tel:+919179387208">+91 (917) 938 7208</a>
					</span>
					<span className={styles.email}>
						<EmailIcon fill="#00D4F3" width="24px" height="24px" />
						<a href="mailto:enquiry@glocalassist.com">enquiry@glocalassist.com</a>
					</span>
				</Grid>
			</Grid>
		</section>
	);
}

export default Footer;
