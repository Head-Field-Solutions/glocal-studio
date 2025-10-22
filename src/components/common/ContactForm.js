import React, { useEffect, useState, useRef, useContext } from "react";
import {
	Grid2 as Grid,
	Button,
	Snackbar,
	Alert,
	Portal
} from "@mui/material";
import { useLocation } from "react-router-dom";
import { Controller, useForm } from "react-hook-form";

import { CircleLoader } from "@/components/Icons";

import { ContactFormContext } from '@/context/ContactFormContext';

import InputField from './InputField';

import * as styles from "./ContactForm.module.scss";

function ContactForm(props) {
	const { isFormInModal = true } = props;
	const { pathname } = useLocation();

	const captchaRef = useRef();

	const { toggleContactForm } = useContext(ContactFormContext);

	const [open, setOpen] = useState(false);
	const [message, setMessage] = useState("");
	const [status, setStatus] = useState("");
	const [TurnstileComponent, setTurnstileComponent] = useState(null);

	const { handleSubmit, control, formState: { isSubmitting }, reset } = useForm();

	useEffect(() => {
    // Dynamically import only on client-side after hydration
    import('@marsidev/react-turnstile').then((mod) => {
      setTurnstileComponent(() => mod.Turnstile);
    });
  }, []);

	const onSubmit = async (data) => {
		const captchaToken = await captchaRef.current?.getResponse();
		const response = await fetch("/api/submit-form", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify({
				...data,
				captchaToken
			}),
		});

		const result = await response.json();
		if (result.success) {
			setStatus("success");
			reset();
		} else {
			setStatus("error");
		}
		setMessage(result.message);
		setOpen(true);
		captchaRef.current?.reset();
	};

	const handleClose = () => {
		setTimeout(() => {
			setStatus("");
			setMessage("");
			setOpen(false);
			if (status === "success" && isFormInModal) {
				toggleContactForm(false);
			}
		}, 3000);
	};

	return (
		<Grid container size={12}>
			<Grid size={12}>
				<form onSubmit={handleSubmit(onSubmit)}>
					<Controller
						name="page_url"
						control={control}
						defaultValue={pathname}
						render={({
							field: { onChange, value }
						}) => (
							<input type="hidden" name="page_url" value={value} />
						)}
					/>
					<Grid container size={12} spacing={3}>
						<Grid size={4}>
							<InputField
								slotProps={{
									inputLabel: {
										shrink: true,
									},
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
						<Grid size={4}>
							<InputField
								slotProps={{
									inputLabel: {
										shrink: true,
									},
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
						<Grid size={4}>
							<InputField
								slotProps={{
									inputLabel: {
										shrink: true,
									},
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
										shrink: true,
									},
								}}
								control={control}
								name="service_info"
								label="Tell us about your requirements*"
								fullWidth
								minRows={4}
								multiline
								variant="standard"
								rules={{
									required: "Please share your query details",
									minLength: { value: 2, message: "Minimum 2 characters" }
								}}
							/>
						</Grid>
						<Grid size={12} className={styles.submitWrapper}>
							<Button
								type="submit"
								fullWidth
								className={styles.submitButton}
							>
								{
									isSubmitting ? (
										<CircleLoader className={styles.loader} width={40} height={40} />
									) : (
										<span className={styles.submitText}>SEND MESSAGE</span>
									)
								}
							</Button>
						</Grid>
					</Grid>
					{TurnstileComponent && (
						<TurnstileComponent
							ref={captchaRef}
							siteKey='0x4AAAAAAB8A-8cleGROSkc1'
						/>
					)}
				</form>
			</Grid>
			<Portal>
				<Snackbar
					open={open}
					autoHideDuration={3000}
					onClose={handleClose}
					anchorOrigin={{
						horizontal: 'center',
						vertical: 'top',
					}}
				>
					<Alert
						onClose={handleClose}
						severity={status}
						variant="filled"
						sx={{ width: '100%' }}
					>
						{message}
					</Alert>
				</Snackbar>
			</Portal>
		</Grid>
	);
};

export default ContactForm;
