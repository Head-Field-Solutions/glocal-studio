import React from "react";
import { Grid2 as Grid } from '@mui/material';

import googleMeetIcon from "@/assets/images/google-meet-icon.png";
import calendarlyIcon from "@/assets/images/calendarly-icon.png";
import zoomIcon from "@/assets/images/zoom-icon.png";
import teamsIcon from "@/assets/images/teams-icon.png";

import * as styles from "./ScheduleMeet.module.scss";

export default function ScheduleMeet() {
	return (
		<>
			<Grid size={{xs: 12, md: 6}} className={styles.scheduleMeet}>
				Schedule a meet with us.
			</Grid>
			<Grid size={{xs: 12, md: 6}} className={styles.scheduleMeetIcons}>
				<a href="#" label="Google Meet" className={styles.videoOptionImage}>
					<img src={googleMeetIcon} alt="" />
				</a>
				<a href="#" label="Calendarly" className={styles.videoOptionImage}>
					<img src={calendarlyIcon} alt="" />
				</a>
				<a href="#" label="Zoom" className={styles.videoOptionImage}>
					<img src={zoomIcon} alt="" />
				</a>
				<a href="#" label="Microsoft Teams" className={styles.videoOptionImage}>
					<img src={teamsIcon} alt="" />
				</a>
			</Grid>
		</>
	);
};
