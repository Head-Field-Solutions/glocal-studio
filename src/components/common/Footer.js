import React, { useRef } from "react";
import { Link } from 'react-router-dom';
import { Container, Grid2 as Grid } from "@mui/material";
import { useScroll } from 'framer-motion';

import {
	EmailIcon,
	PhoneIcon,
} from "@/components/Icons";

import { routes } from "@/utils/routesPath";

import logo from "@/assets/images/footer-logo.png";
import fbIcon from "@/assets/images/fb-icon.png";
import instagramIcon from "@/assets/images/instagram-icon.png";
import linkedinIcon from "@/assets/images/linkedin-icon.png";

import GlassContainer from './GlassContainer';
import Heading from "./Heading";
import ContactForm from "./ContactForm";
import ScrollableMotionText from "./ScrollableMotionText";
import ColorfulText from "./ColorfulText";

import * as styles from "./Footer.module.scss";

function Footer() {
	const scrollabelContainerRef = useRef();

	const { scrollYProgress } = useScroll({
    target: scrollabelContainerRef,
    offset: ['start end', 'end start']
  });

	return (
		<section className={styles.footer}>
			<div className={styles.footerInfoPanel}>
				<Container maxWidth="xl" className={styles.formContainer}>
					<Grid size={12} container>
						<Grid size={6} offset={6}>
							<Grid size={12}><ColorfulText>GET IN TOUCH WITH US</ColorfulText></Grid>
							<Grid size={12}>
								<Heading variant="secondary" className={styles.greatDesignHeading}>
									Great Designs Start with 
									Great Conversations.
								</Heading>
							</Grid>
							<Grid size={12}>
								Whether you’re looking for jaw-dropping renders or exceptional design solutions, we’re just a message away.
							</Grid>
						</Grid>
						<Grid size={6} offset={6} className={styles.formContent}>
							<Grid size={12} container className={styles.contactFormWrapper}>
								<ContactForm />
							</Grid>
						</Grid>
					</Grid>
				</Container>
				<div className={styles.scrollableContainer} ref={scrollabelContainerRef}>
					<ScrollableMotionText
						direction="right"
						left="-19%"
						progress={scrollYProgress}
					>
						<div className={styles.scrollabelText}>Spaces that feel Alive / Designs that inspire</div>
					</ScrollableMotionText>
				</div>
				<div className={styles.footerImagePanel}>
					<Container maxWidth="xl">
						<Grid size={12} container>
							<Grid size={8} className={styles.footerImage}>
								<img src={require("../../assets/images/footer-decor-image.png")} alt="" className={styles.decorImage} />
							</Grid>
						</Grid>
					</Container>
				</div>
			</div>
			<Container maxWidth="xl" className={styles.uspSection}>
				<Grid size={12} spacing={4} container>
					<Grid size={3} container spacing={3} className={styles.footerCard}>
						<Grid size={12} spacing={3} container>
							<Grid size={10} className={styles.footerCardHeading}>
								Start with a Free Consultation
							</Grid>
							<Grid size={2}>
								<img
									src={require("../../assets/images/free-consultation-icon.png")}
									alt=""
									className={styles.footerCardIcon}
								/>
							</Grid>
						</Grid>
						<Grid size={12}>
							Got a vision? Let’s sketch it together—no obligations.
						</Grid>
					</Grid>
					<Grid size={3} container spacing={3} className={styles.footerCard}>
						<Grid size={12} spacing={3} container>
							<Grid size={10} className={styles.footerCardHeading}>
								Transparent Process, Clear Pricing
							</Grid>
							<Grid size={2}>
								<img
									src={require("../../assets/images/transparent-process-icon.png")}
									alt=""
									className={styles.footerCardIcon}
								/>
							</Grid>
						</Grid>
						<Grid size={12}>
							No guesswork. No surprises. Just clarity.
						</Grid>
					</Grid>
					<Grid size={3} container spacing={3} className={styles.footerCard}>
						<Grid size={12} spacing={3} container>
							<Grid size={10} className={styles.footerCardHeading}>
								Share Your Idea. We’ll Visualize It.
							</Grid>
							<Grid size={2}>
								<img
									src={require("../../assets/images/share-your-idea-icon.png")}
									alt=""
									className={styles.footerCardIcon}
								/>
							</Grid>
						</Grid>
						<Grid size={12}>
							A napkin sketch or a full plan—send it our way.
						</Grid>
					</Grid>
					<Grid size={3} container spacing={3} className={styles.footerCard}>
						<Grid size={12} spacing={3} container>
							<Grid size={10} className={styles.footerCardHeading}>
								Fast Replies. Real People.
							</Grid>
							<Grid size={2}>
								<img
									src={require("../../assets/images/fast-replies-icon.png")}
									alt=""
									className={styles.footerCardIcon}
								/>
							</Grid>
						</Grid>
						<Grid size={12}>
							Your time matters—and so does your project.
						</Grid>
					</Grid>
				</Grid>
			</Container>
			<div className={styles.footerInfoContainer}>
				<Grid
					size={12}
					container
					className={styles.footerContainer}
				>
					<GlassContainer />
					<Grid size={12} container className={styles.positionRelative} alignItems="center">
						<Grid size={2}>
							<img src={logo} alt="" className={styles.logo} />
						</Grid>
						<Grid size={2}>
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
						<Grid container alignContent="space-between" size={5}>
							<Grid
								size={12}
								className={styles.copyrightContainer}
							>
								<span className={styles.phone}>
									<PhoneIcon fill="#fff" width="20px" height="20px" />
									<a href="tel:+1732-344-4260">+1732-344-4260</a>
								</span>
								<span className={styles.email}>
									<EmailIcon fill="#fff" width="24px" height="24px" />
									<a href="mailto:info@glocalstudio.in">info@glocalstudio.in</a>
								</span>
							</Grid>
							<Grid size={12}>
								<div className={styles.copyrightText}>Copyright &copy; 2025 - All rights Reserved By Glocal Studio.</div>
								<div className={styles.creditText}>Made with &hearts; by Radical Reflex</div>
							</Grid>
						</Grid>
						<Grid size={3} className={styles.socialMediaContainer}>
							<a href="https://www.facebook.com" label="Facebook" className={styles.socialLinks}>
								<img src={fbIcon} className={styles.socialIcon} alt="" />
							</a>
							<a href="https://www.instagram.com" label="Instagram" className={styles.socialLinks}>
								<img src={instagramIcon} className={styles.socialIcon} alt="" />
							</a>
							<a href="https://www.linkedin.com" label="Linkedin" className={styles.socialLinks}>
								<img src={linkedinIcon} className={styles.socialIcon} alt="" />
							</a>
						</Grid>
					</Grid>
				</Grid>
			</div>
		</section>
	);
}

export default Footer;
