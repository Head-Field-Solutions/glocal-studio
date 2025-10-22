import React from "react";

import { routes } from "./routesPath";

export const servicesInfo = {
	"architectural-visualization": {
		"seoContent": {
			"title": "Architectural Visualization | Glocal Studio"
		},
		"title":"Architectural Visualization",
		"background": require("../assets/images/service-details/architectural-visualization/masterhead.jpg"),
		"backgroundPosition": "top center",
		"mobileMainHeading": <>Simplify <br/>Your <br/>Workflow</>,
		"desktopMainHeading": "Turning Blueprints Into",
		"secondaryHeading": "Photoreal Experiences",
		"description": "Pixel-perfect renders, quick turnarounds, and a partner you can trust.",
		"whatWeDo": {
			"content": "We transform CAD and sketches into photorealistic 3D visuals that help architects, developers, and designers win approvals, attract buyers, and amplify presentations.",
			items: [
				{
					id: "01",
					title: "Perfect for developers pitching projects and realtors marketing properties.",
					heading: "Exterior Rendering",
					content: "Showcase your building’s architecture in full context with lifelike detail, light, and landscapintg.",
					image: require("../assets/images/service-details/architectural-visualization/what-we-do-item-1.png"),
					type: "floting",
				}, {
					id: "02",
					title: "Perfect for interior designers and homeowners visualizing upgrades.",
					heading: "Interior Rendering",
					content: "Bring interior concepts to life with photoreal textures, lighting, and decor styling—helping clients see, feel, and believe in the design before it’s built.",
					image: require("../assets/images/service-details/architectural-visualization/what-we-do-item-2.png"),
					type: "floting",
				}, {
					id: "03",
					title: "Perfect for presentations that need clarity in layouts and space logic.",
					heading: "Isometric Views",
					content: "Simplify complexity with angled 3D views that highlight layouts, layers, and spatial relationships",
					image: require("../assets/images/service-details/architectural-visualization/what-we-do-item-3.png"),
					type: "floting",
				}, {
					id: "04",
					title: "Perfect for brochures, property listings, and client-friendly sales material.",
					heading: "Floor Plan Rendering",
					content: "Transform technical blueprints into fully furnished, easy-to-understand 3D layouts that instantly communicate flow, size, and function to clients and buyers.",
					image: require("../assets/images/service-details/architectural-visualization/what-we-do-item-4.png"),
					type: "floting",
				}
			],
		},
  },
	"3d-modeling": {
		"seoContent": {
			"title": "3D MODELLING | Glocal Studio"
		},
		"title":"3D MODELLING",
		"background": require("../assets/images/service-details/3d-modelling/masterhead.jpg"),
		"backgroundPosition": "top center",
		"mobileMainHeading": <>Simplify <br/>Your <br/>Workflow</>,
		"desktopMainHeading": "Turning Ideas Into",
		"secondaryHeading": "TANGIBLE 3D MODELS",
		"description": "hIgh-quality 3D models that form the foundation of stunning renders, prototypes, and architectural visualizations.",
		"whatWeDo": {
			"content": "From buildings to interiors, furniture to products—our 3D modeling captures form, scale, and detail with flawless accuracy.",
			items: [
				{
					id: "01",
					title: "Perfect for Architects and developers presenting building designs.",
					heading: "Architectural Modelling",
					content: "We build accurate 3D architectural models that capture scale, structure, and form for visualization and planning.",
					image: require("../assets/images/service-details/3d-modelling/what-we-do-item-1.png"),
					type: "floting",
				}, {
					id: "02",
					title: "Perfect for Interior designers showcasing layouts and styles.",
					heading: "Interior Design Modelling",
					content: "We craft detailed 3D models of interiors, complete with furniture, textures, and lighting elements for lifelike representation.",
					image: require("../assets/images/service-details/3d-modelling/what-we-do-item-2.png"),
					type: "floting",
				}, {
					id: "03",
					title: "Perfect for Furniture designers and manufacturers",
					heading: "Furniture Design Modelling",
					content: "From bespoke furniture pieces to modular systems, we model every detail for presentation, prototyping, or catalogs.",
					image: require("../assets/images/service-details/3d-modelling/what-we-do-item-3.png"),
					type: "floting",
				}, {
					id: "04",
					title: "Perfect for Product designers and brands launching new items.",
					heading: "Product Modelling",
					content: "We model products with realistic proportions, textures, and finishes—ideal for testing, marketing, or e-commerce.",
					image: require("../assets/images/service-details/3d-modelling/what-we-do-item-4.png"),
					type: "floting",
				}
			],
		},
	},
	"technical-drawings": {
		"seoContent": {
			"title": "Technical Drawings & Documentation | Glocal Studio"
		},
		"title":"Technical Drawings & Documentation",
		"background": require("../assets/images/service-details/technical-drawings/masterhead.jpg"),
		"backgroundPosition": "top center",
		"mobileMainHeading": <>Simplify <br/>Your <br/>Workflow</>,
		"desktopMainHeading": "Drawings That Leave",
		"secondaryHeading": "No Room for Guesswork",
		"description": "Every great project needs precision—we make sure your ideas are translated into build-ready documentation.",
		"whatWeDo": {
			"content": "We deliver detailed technical drawings and documentation that bridge design intent and execution, ensuring accuracy at every stage.",
			items: [
				{
					id: "01",
					title: "Perfect for Architects and contractors needing accurate build references.",
					heading: "Architectural Detailing",
					content: "We create precise drawings of plans, elevations, sections, and detailing that guide construction teams with clarity.",
					image: require("../assets/images/service-details/technical-drawings/what-we-do-item-1.jpg"),
					type: "non-floting",
				}, {
					id: "02",
					title: "Perfect for Interior designers and builders streamlining project delivery.",
					heading: "Interior Design Detailing",
					content: "From flooring and ceiling layouts to wall elevations and service drawings, we provide execution-ready interior documentation.",
					image: require("../assets/images/service-details/technical-drawings/what-we-do-item-2.jpg"),
					type: "non-floting",
				}, {
					id: "03",
					title: "Perfect for Furniture makers, manufacturers, and fit-out contractors.",
					heading: "Furniture & Joinery Drawings",
					content: "We prepare detailed furniture and joinery drawings with dimensions, finishes, and material specs—ready for vendor execution.",
					image: require("../assets/images/service-details/technical-drawings/what-we-do-item-3.jpg"),
					type: "non-floting",
				},
			],
		},
	},
	"product-visualization": {
		"seoContent": {
			"title": "Product Visualization | Glocal Studio"
		},
		"title":"Product Visualization",
		"background": require("../assets/images/service-details/product-visualization/masterhead.jpg"),
		"backgroundPosition": "top center",
		"mobileMainHeading": <>Simplify <br/>Your <br/>Workflow</>,
		"desktopMainHeading": "From Concept to",
		"secondaryHeading": "Photoreal Reality",
		"description": "Our product visualization services make your ideas tangible—perfect for presentations, e-commerce, and marketing.",
		"whatWeDo": {
			"content": "From early-stage prototypes to polished furniture renders, we deliver visuals that look as good as the finished product.",
			items: [
				{
					id: "01",
					title: "Perfect for Furniture brands & designers presenting collections or catalogs.",
					heading: "Furniture Rendering",
					content: "We design and render furniture in stunning detail—showcasing finishes, fabrics, and forms with unmatched realism.",
					image: require("../assets/images/service-details/product-visualization/what-we-do-item-1.png"),
					type: "floting",
				}, {
					id: "02",
					title: "Perfect for Product designers, startups, and brands preparing for launch.",
					heading: "Product Prototypes",
					content: "We build 3D prototypes that let you test, validate, and present your product before manufacturing begins.",
					image: require("../assets/images/service-details/product-visualization/what-we-do-item-2.png"),
					type: "floting",
				}
			],
		},
	},
	"3d-animation-and-experiences": {
		"seoContent": {
			"title": "3D Animation & Interactive Experiences | Glocal Studio"
		},
		"title":"3D Animation & Interactive Experiences",
		"background": require("../assets/images/service-details/3d-animation-and-experiences/masterhead.jpg"),
		"backgroundPosition": "top center",
		"mobileMainHeading": <>Simplify <br/>Your <br/>Workflow</>,
		"desktopMainHeading": "Interact. Explore.",
		"secondaryHeading": "Experience.",
		"description": "Our 3D animations and interactive tools help clients visualize, explore, and connect with spaces like never before.",
		"whatWeDo": {
			"content": "We transform static designs into dynamic, cinematic experiences through animations and interactive presentations.",
			items: [
				{
					id: "01",
					title: "Perfect for Developers and Architects presenting projects to clients, investors, and buyers.",
					heading: "Architectural Walkthroughs",
					content: "We create smooth, cinematic walkthroughs that let clients experience scale, mood, and flow before construction begins.",
					image: require("../assets/images/service-details/3d-animation-and-experiences/what-we-do-item-1.jpg"),
					type: "non-floting",
				}, {
					id: "02",
					title: "Perfect for Interior designers and homeowners making faster, clearer design decisions.",
					heading: "Interactive Presentations",
					content: "We design interactive interior presentations where clients can explore layouts, finishes, and styling in real-time.",
					image: require("../assets/images/service-details/3d-animation-and-experiences/what-we-do-item-2.jpg"),
					type: "non-floting",
				}
			],
		},
	},
	"360-degree-and-virtual-tours": {
		"seoContent": {
			"title": "360° & Virtual Tours | Glocal Studio"
		},
		"title":"360° & Virtual Tours",
		"background": require("../assets/images/service-details/360-degree-and-virtual-tours/masterhead.jpg"),
		"backgroundPosition": "top center",
		"mobileMainHeading": <>Simplify <br/>Your <br/>Workflow</>,
		"desktopMainHeading": "Immersive Tours",
		"secondaryHeading": "That Sell Faster.",
		"description": "Our VR-enabled tours and interactive panoramas bring projects to life, helping clients experience properties as if they were there in person.",
		"whatWeDo": {
			"content": "We create immersive 360° panoramas and virtual tours that allow clients to explore spaces in vivid detail—remotely and realistically.",
			items: [
				{
					id: "01",
					title: "Perfect for Architects, interior designers, and marketers showcasing spaces online.",
					heading: "360° Panoramas",
					content: "High-resolution panoramic visuals that capture entire spaces in a single immersive frame.",
					image: require("../assets/images/service-details/architectural-visualization/what-we-do-item-1.png"),
					type: "non-floting",
				}, {
					id: "02",
					title: "Perfect for Real estate developers, brokers, and property portals.",
					heading: "Real Estate Virtual Tours",
					content: "Fully interactive tours that let buyers explore properties virtually, driving faster decisions and stronger sales.",
					image: require("../assets/images/service-details/architectural-visualization/what-we-do-item-2.png"),
					type: "non-floting",
				}
			],
		},
	},
};

export const servicesArray = [
	{
		id: "01",
		title: routes["architectural-visualization"].label,
		link: routes["architectural-visualization"].href,
		icon: routes["architectural-visualization"].icon,
		menuContent: "Bring architectural ideas to life with stunning, photoreal renders—exteriors, interiors, isometrics, floor plans, and walkthroughs that inspire confidence and sell."
	},  {
		id: "02",
		title: routes["3d-modeling"].label,
		link: routes["3d-modeling"].href,
		icon: routes["3d-modeling"].icon,
		menuContent: "We craft accurate 3D models for architecture, interiors, furniture, and products—detailed, scalable, and ready for rendering or prototyping."
	}, {
		id: "03",
		title: routes["technical-drawings"].label,
		link: routes["technical-drawings"].href,
		icon: routes["technical-drawings"].icon,
		menuContent: "Precise working drawings, joinery details, and documentation that bridge design intent and execution—streamlining site work and vendor coordination."
	}, {
		id: "04",
		title: routes["product-visualization"].label,
		link: routes["product-visualization"].href,
		icon: routes["product-visualization"].icon,
		menuContent: "From furniture renders to prototypes, we showcase your products with lifelike detail—perfect for marketing, e-commerce, and investor presentations."
	}, {
		id: "05",
		title: routes["3d-animation-and-experiences"].label,
		link: routes["3d-animation-and-experiences"].href,
		icon: routes["3d-animation-and-experiences"].icon,
		menuContent: "Transform static visuals into immersive experiences with architectural flythroughs, interior presentations, and interactive storytelling."
	},  {
		id: "06",
		title: routes["360-degree-and-virtual-tours"].label,
		link: routes["360-degree-and-virtual-tours"].href,
		icon: routes["360-degree-and-virtual-tours"].icon,
		menuContent: "Give clients the power to explore spaces virtually through 360° panoramas and interactive tours—ideal for real estate and hospitality marketing."
	}
];
