import React from "react";
import { Link } from 'react-router-dom';
import { Grid2 as Grid } from "@mui/material";

import { GlassContainer } from '@/components/common';

import {
	EmailIcon,
	PhoneIcon,
} from "@/components/Icons";

import { routes } from "@/utils/routesPath";

import logo from "@/assets/images/footer-logo.png";
import fbIcon from "@/assets/images/fb-icon.png";
import instagramIcon from "@/assets/images/instagram-icon.png";
import linkedinIcon from "@/assets/images/linkedin-icon.png";

import * as styles from "./Footer.module.scss";

function Footer() {
	return (
		<section className={styles.footer}>
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
		</section>
	);
}

export default Footer;
