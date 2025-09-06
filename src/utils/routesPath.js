import React from "react";

import {
	AdministrativeTask,
	CreativeDesign,
	CustomerSupport,
	DigitalMarketing,
	EngineeringServices,
	FinanceAndAccounting,
	SoftwareAppDevelopment,
	WebDevelopment,
} from "@/components/Icons";

export const routes = {
	home: {
		label: 'Home',
		href: "/"
	},
	about: {
		label: 'About Us',
		href: "/about"
	},
	services: {
		label: 'Services',
		href: "/services"
	},
	caseStudy: {
		label: 'Case Studies',
		href: "/case-studies"
	},
	"contact-us": {
		label: 'Contact Us',
		href: "/contact-us"
	},
	"faq": {
		label: "FAQs",
		href: "/faq"
	},
	"administrative-tasks": {
		label: 'Administrative Tasks',
		href: '/services/administrative-tasks',
		icon: <AdministrativeTask />,
	},
	"digital-marketing-services": {
		label: 'Digital Marketing Services',
		href: '/services/digital-marketing-services',
		icon: <DigitalMarketing />,
	},
	"customer-support-and-experience": {
		label: 'Customer Support & Experience',
		href: '/services/customer-support-and-experience',
		icon: <CustomerSupport />,
	},
	"website-revamp-and-optimization": {
		label: 'Website Revamp & Optimization',
		href: '/services/website-revamp-and-optimization',
		icon: <WebDevelopment />,
	},
	"creative-services": {
		label: 'Creative Services',
		href: '/services/creative-services',
		icon: <CreativeDesign />,
	},
	"software-and-app-development": {
		label: 'Software & App Development',
		href: '/services/software-and-app-development',
		icon: <SoftwareAppDevelopment />,
	},
	"finance-and-accounting": {
		label: 'Finance & Accounting',
		href: '/services/finance-and-accounting',
		icon: <FinanceAndAccounting />,
	},
	"engineering-services": {
		label: 'Engineering Services',
		href: '/services/engineering-services',
		icon: <EngineeringServices />,
	},
	"terms-of-service": {
		label: 'Terms of Service',
		href: '/terms-of-service'
	},
	"privacy-policy": {
		label: 'Privacy Policy',
		href: '/privacy-policy'
	},
	"cookie-settings": {
		label: 'Cookie Settings',
		href: '/cookie-settings'
	},
};
