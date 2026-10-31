import React, { useState, useRef, useContext } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import {
	Grid2 as Grid,
	Button,
	Snackbar,
	Alert,
	Portal
} from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";
import { Controller, useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";

import { CircleLoader, ArrowIcon } from "@/components/Icons";
import { ContactFormContext } from "@/context/ContactFormContext";
import { RECAPTCHA_SITE_KEY } from "@/constants/recaptcha";
import ResponsiveRecaptcha from "./ResponsiveRecaptcha";
import InputField from "./InputField";

import * as styles from "./ContactForm.module.scss";

const EMAILJS_SERVICE_ID = "service_5ukbpwr";
const EMAILJS_TEMPLATE_ID = "template_3fxsae4";
const EMAILJS_PUBLIC_KEY = "QpkBmnT4LJ4PGyWTX";

function ContactForm(props) {
	const { isFormInModal = false, isContactPageForm = false } = props;
	const { pathname } = useLocation();
	const navigate = useNavigate();

	const recaptchaRef = useRef(null);
	const [captchaToken, setCaptchaToken] = useState(null);

	const { toggleContactForm } = useContext(ContactFormContext);

	const [open, setOpen] = useState(false);
	const [message, setMessage] = useState("");
	const [status, setStatus] = useState("");

	const {
		handleSubmit,
		control,
		formState: { isSubmitting },
		reset
	} = useForm();

	const onCaptchaChange = (token) => {
		setCaptchaToken(token);
	};

	const onCaptchaExpired = () => {
		setCaptchaToken(null);
	};

	const onSubmit = async (data) => {
		if (!captchaToken) {
			setStatus("error");
			setMessage("Please verify that you are not a robot.");
			setOpen(true);
			return;
		}

		try {
			const templateParams = {
				name: data.name,
				email: data.email,
				phone: data.phone,
				service_info: data.service_info,
				page_url: data.page_url,
				time: new Date().toLocaleString(),
				"g-recaptcha-response": captchaToken
			};

			await emailjs.send(
				EMAILJS_SERVICE_ID,
				EMAILJS_TEMPLATE_ID,
				templateParams,
				EMAILJS_PUBLIC_KEY
			);

			reset();
			setCaptchaToken(null);
			recaptchaRef.current?.reset();

			// Close the modal if form is in modal
			if (isFormInModal) {
				toggleContactForm(false);
			}

			// Set flag and redirect to thank you page
			sessionStorage.setItem("formSubmitted", "true");
			navigate("/thank-you");
		} catch (error) {
			console.error("Submission error:", error);
			setStatus("error");
			setMessage("Sorry! Something went wrong. Please try again.");
			setOpen(true);
			setCaptchaToken(null);
			recaptchaRef.current?.reset();
		}
	};

	const handleClose = () => {
		setStatus("");
		setMessage("");
		setOpen(false);
	};

	return (
		<Grid container size={12}>
			<Grid size={12} className={styles.requiredInfo}>
				All the fields marked with * are required
			</Grid>
			<Grid size={12}>
				<form onSubmit={handleSubmit(onSubmit)} className={styles.contactForm}>
					<Controller
						name="page_url"
						control={control}
						defaultValue={pathname}
						render={({ field: { value } }) => (
							<input type="hidden" name="page_url" value={value} />
						)}
					/>
					<Grid container size={12} spacing={3}>
						<Grid
							size={
								isContactPageForm ? 12 : { xs: 12, md: 4 }
							}
						>
							<InputField
								slotProps={{
									inputLabel: {
										shrink: true
									}
								}}
								control={control}
								name="name"
								label="Name*"
								fullWidth
								variant="standard"
								rules={{
									required: "Name is required",
									minLength: { value: 2, message: "Minimum 2 characters" }
								}}
							/>
						</Grid>
						<Grid
							size={
								isContactPageForm ? 12 : { xs: 12, md: 4 }
							}
						>
							<InputField
								slotProps={{
									inputLabel: {
										shrink: true
									}
								}}
								label="Email*"
								type="email"
								control={control}
								name="email"
								fullWidth
								variant="standard"
								rules={{
									required: "Email is required",
									pattern: {
										value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
										message: "Please enter a valid email address"
									}
								}}
							/>
						</Grid>
						<Grid
							size={
								isContactPageForm ? 12 : { xs: 12, md: 4 }
							}
						>
							<InputField
								slotProps={{
									inputLabel: {
										shrink: true
									}
								}}
								label="Phone*"
								type="tel"
								control={control}
								name="phone"
								fullWidth
								variant="standard"
								rules={{
									required: "Phone number is required",
									pattern: {
										value: /^[0-9]+$/,
										message: "Phone number must contain digits only"
									},
									minLength: {
										value: 7,
										message: "Phone number must be at least 7 digits"
									},
									maxLength: {
										value: 15,
										message: "Phone number must be at most 15 digits"
									}
								}}
							/>
						</Grid>
						<Grid size={12}>
							<InputField
								slotProps={{
									inputLabel: {
										shrink: true
									}
								}}
								control={control}
								name="service_info"
								label="Please Describe The Type Of Service You Are Interested In*"
								fullWidth
								minRows={4}
								multiline
								variant="standard"
								rules={{
									required: "Please share your requirements",
									minLength: { value: 2, message: "Minimum 2 characters" }
								}}
							/>
						</Grid>
						<Grid size={12} sx={{ my: 1 }}>
							<ResponsiveRecaptcha align="left">
								<ReCAPTCHA
									ref={recaptchaRef}
									sitekey="6LdHfgkuAAAAAH-FVT78ZFyMHMfbDeEIyM8hVhIu"
									onChange={onCaptchaChange}
									onExpired={onCaptchaExpired}
									onErrored={onCaptchaExpired}
								/>
							</ResponsiveRecaptcha>
						</Grid>
						<Grid
							size={12}
							className={styles.submitWrapper}
							sx={{
								display: "flex",
								justifyContent: { xs: "center", md: "flex-start" },
								alignItems: "center"
							}}
						>
							<Button
								type="submit"
								className={styles.submitButton}
								fullWidth
							>
								{isSubmitting ? (
									<CircleLoader className={styles.loader} width={40} height={40} />
								) : (
									<>
										<span className={styles.submitText}>SUBMIT</span>
										<ArrowIcon width={48} height={48} />
									</>
								)}
							</Button>
						</Grid>
					</Grid>
				</form>
			</Grid>
			<Portal>
				<Snackbar
					open={open}
					autoHideDuration={3000}
					onClose={handleClose}
					anchorOrigin={{
						horizontal: "center",
						vertical: "top"
					}}
				>
					<Alert
						onClose={handleClose}
						severity={status}
						variant="filled"
						sx={{ width: "100%" }}
					>
						{message}
					</Alert>
				</Snackbar>
			</Portal>
		</Grid>
	);
}

export default ContactForm;
