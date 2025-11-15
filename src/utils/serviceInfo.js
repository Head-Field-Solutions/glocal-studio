import React from "react";

import { routes } from "./routesPath";

export const servicesInfo = {
	"architectural-visualization": {
		"seoContent": {
			"title": "Architectural Visualization | Glocal Studio"
		},
		"title":"Architectural Visualization",
		"background": require("../assets/videos/architectural-visualization.mp4"),
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
					content: "Showcase your building's architecture in full context with lifelike detail, light, and landscapintg.",
					image: require("../assets/images/service-details/architectural-visualization/what-we-do-item-1.png"),
					type: "floting",
				}, {
					id: "02",
					title: "Perfect for interior designers and homeowners visualizing upgrades.",
					heading: "Interior Rendering",
					content: "Bring interior concepts to life with photoreal textures, lighting, and decor styling-helping clients see, feel, and believe in the design before it's built.",
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
		"professionalServiceContent": [
			{
				"image": require("../assets/images/service-details/architectural-visualization/architectural-firms.jpg"),
				"heading": "Architectural Firms",
				"content": "We produce photoreal exterior and interior visuals that communicate design intent with clarity and precision. Perfect for concept presentations, competitions, and client alignment.",
				"keyServices": [
					{
						"image": require("../assets/images/service-details/icons/photoreal-renders.png"),
						"content": "Design Accuracy",
					}, {
						"image": require("../assets/images/service-details/icons/technical-accuracy.png"),
						"content": "Realistic Lighting",
					}, {
						"image": require("../assets/images/service-details/icons/fast-delivery.png"),
						"content": "Material Fidelity",
					}, {
						"image": require("../assets/images/service-details/icons/partnered-collabration.png"),
						"content": "Fast Iterations",
					}, 
				],
				"footer": "Faster client approvals, reduced revisions, persuasive presentations.",
			}, {
				"image": require("../assets/images/service-details/architectural-visualization/interior-studios.jpg"),
				"heading": "Interior Design",
				"content": "We turn interior concepts into atmospheric, material-accurate renders that help clients fully visualize the space before execution. Ideal for mood boards, pitches, and styling validation.",
				"keyServices": [
					{
						"image": require("../assets/images/service-details/icons/realistic-stylling.png"),
						"content": "Photoreal Styling",
					}, {
						"image": require("../assets/images/service-details/icons/material-accuracy.png"),
						"content": "Texture Precision",
					}, {
						"image": require("../assets/images/service-details/icons/flexible-options.png"),
						"content": "Mood Lighting",
					}, {
						"image": require("../assets/images/service-details/icons/engaging-visuals.png"),
						"content": "Spatial Clarity",
					}, 
				],
				"footer": "Clarity in design decisions, time saved in approvals, wow-factor presentations.",
			}, {
				"image": require("../assets/images/service-details/architectural-visualization/real-estate-developers.jpg"),
				"heading": "Real Estate Developers",
				"content": "We create high-impact marketing visuals that bring unbuilt properties to life—perfect for brochures, websites, digital campaigns, and pre-launch sales.",
				"keyServices": [
					{
						"image": require("../assets/images/service-details/icons/sales-ready-visuals.png"),
						"content": "Sales Focus",
					}, {
						"image": require("../assets/images/service-details/icons/immersive-walkthroughs.png"),
						"content": "Hero Angles",
					}, {
						"image": require("../assets/images/service-details/icons/cost-efficiency.png"),
						"content": "Marketing Polish",
					}, {
						"image": require("../assets/images/service-details/icons/ready-to-use.png"),
						"content": "Quick Delivery",
					}, 
				],
				"footer": "Sell faster, attract investors, and reduce marketing costs.",
			}, {
				"image": require("../assets/images/service-details/architectural-visualization/construction-contractors.jpg"),
				"heading": "Construction Contractors",
				"content": "Our visuals simplify design interpretation, helping contractors understand materials, finishes, and spatial layouts clearly for smoother on-site execution.",
				"keyServices": [
					{
						"image": require("../assets/images/service-details/icons/accurate-draftinng.png"),
						"content": "Build Clarity",
					}, {
						"image": require("../assets/images/service-details/icons/build-clarity.png"),
						"content": "Detail Accuracy",
					}, {
						"image": require("../assets/images/service-details/icons/easy-coordination.png"),
						"content": "Easy Visuals",
					}, {
						"image": require("../assets/images/service-details/icons/time-saving-documentation.png"),
						"content": "Coordination Ready",
					}, 
				],
				"footer": "Less confusion on-site, smoother communication with teams, reduced rework.",
			},
		]
  },
	"3d-modeling": {
		"seoContent": {
			"title": "3D MODELLING | Glocal Studio"
		},
		"title":"3D MODELLING",
		"background": require("../assets/videos/3d-modelling.mp4"),
		"mobileMainHeading": <>Simplify <br/>Your <br/>Workflow</>,
		"desktopMainHeading": "Turning Ideas Into",
		"secondaryHeading": "TANGIBLE 3D MODELS",
		"description": "hIgh-quality 3D models that form the foundation of stunning renders, prototypes, and architectural visualizations.",
		"whatWeDo": {
			"content": "From buildings to interiors, furniture to products-our 3D modeling captures form, scale, and detail with flawless accuracy.",
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
					content: "We model products with realistic proportions, textures, and finishes-ideal for testing, marketing, or e-commerce.",
					image: require("../assets/images/service-details/3d-modelling/what-we-do-item-4.png"),
					type: "floting",
				}
			],
		},
		"professionalServiceContent": [
			{
				"image": require("../assets/images/service-details/3d-modelling/Architects-&-Interior-Designers.jpg"),
				"heading": "Architects & Interior Designers",
				"content": "We build precise 3D models that capture scale, structure, and design intent with accuracy—ideal for concept studies, client presentations, and design iterations.",
				"keyServices": [
					{
						"image": require("../assets/images/service-details/icons/photoreal-renders.png"),
						"content": "Accurate Proportions",
					}, {
						"image": require("../assets/images/service-details/icons/technical-accuracy.png"),
						"content": "Clean Topology",
					}, {
						"image": require("../assets/images/service-details/icons/fast-delivery.png"),
						"content": "Detail Focused",
					}, {
						"image": require("../assets/images/service-details/icons/partnered-collabration.png"),
						"content": "Render Ready",
					}, 
				],
				"footer": "Better design communication, faster approvals, fewer misconceptions.",
			}, {
				"image": require("../assets/images/service-details/3d-modelling/Furniture-&-Product-Manufacturers.jpg"),
				"heading": "Furniture & Product Manufacturers",
				"content": "We model furniture, fixtures, and products with manufacturing-grade precision—ideal for sampling, catalogs, and prototyping.",
				"keyServices": [
					{
						"image": require("../assets/images/service-details/icons/realistic-stylling.png"),
						"content": "Prototype Ready",
					}, {
						"image": require("../assets/images/service-details/icons/material-accuracy.png"),
						"content": "Measurement Accurate",
					}, {
						"image": require("../assets/images/service-details/icons/flexible-options.png"),
						"content": "Material Friendly",
					}, {
						"image": require("../assets/images/service-details/icons/engaging-visuals.png"),
						"content": "Vendor Aligned",
					}, 
				],
				"footer": "Better prototypes, faster sampling, and flawless production alignment.",
			}, {
				"image": require("../assets/images/service-details/3d-modelling/Gaming-&-Entertainment-Studios.jpg"),
				"heading": "Gaming & Entertainment Studios",
				"content": "We create optimized 3D assets—characters, props, and environments—designed for seamless integration into game engines and cinematic sequences.",
				"keyServices": [
					{
						"image": require("../assets/images/service-details/icons/sales-ready-visuals.png"),
						"content": "Game Optimized",
					}, {
						"image": require("../assets/images/service-details/icons/immersive-walkthroughs.png"),
						"content": "Low-Poly Ready",
					}, {
						"image": require("../assets/images/service-details/icons/cost-efficiency.png"),
						"content": "Texture Friendly",
					}, {
						"image": require("../assets/images/service-details/icons/ready-to-use.png"),
						"content": "Engine Compatible",
					}, 
				],
				"footer": "Efficient asset creation, smoother pipelines, and immersive world-building.",
			}, {
				"image": require("../assets/images/service-details/3d-modelling/Advertising-&-Marketing-Agencies.jpg"),
				"heading": "Advertising & Marketing Agencies",
				"content": "We craft campaign-ready 3D assets that elevate brand storytelling and give marketers high-quality visuals across print, digital, and video.",
				"keyServices": [
					{
						"image": require("../assets/images/service-details/icons/accurate-draftinng.png"),
						"content": "High Impact",
					}, {
						"image": require("../assets/images/service-details/icons/build-clarity.png"),
						"content": "Brand Focused",
					}, {
						"image": require("../assets/images/service-details/icons/easy-coordination.png"),
						"content": "Stylized Options",
					}, {
						"image": require("../assets/images/service-details/icons/time-saving-documentation.png"),
						"content": "Fast Scaling",
					}, 
				],
				"footer": "More impactful ads, quicker creative execution, and standout visuals.",
			},
		]
	},
	"technical-drawings": {
		"seoContent": {
			"title": "Technical Drawings & Documentation | Glocal Studio"
		},
		"title":"Technical Drawings & Documentation",
		"background": require("../assets/videos/technical-drawings.mp4"),
		"mobileMainHeading": <>Simplify <br/>Your <br/>Workflow</>,
		"desktopMainHeading": "Drawings That Leave",
		"secondaryHeading": "No Room for Guesswork",
		"description": "Every great project needs precision-we make sure your ideas are translated into build-ready documentation.",
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
					content: "We prepare detailed furniture and joinery drawings with dimensions, finishes, and material specs-ready for vendor execution.",
					image: require("../assets/images/service-details/technical-drawings/what-we-do-item-3.jpg"),
					type: "non-floting",
				},
			],
		},
		"professionalServiceContent": [
			{
				"image": require("../assets/images/service-details/technical-drawings/Architecture-Firms.jpg"),
				"heading": "Architecture Firms",
				"content": "We prepare construction drawings and detailing that ensure design intent is executed accurately on-site.",
				"keyServices": [
					{
						"image": require("../assets/images/service-details/icons/photoreal-renders.png"),
						"content": "Dimension Accuracy",
					}, {
						"image": require("../assets/images/service-details/icons/technical-accuracy.png"),
						"content": "Clean Drafting",
					}, {
						"image": require("../assets/images/service-details/icons/fast-delivery.png"),
						"content": "Build Ready",
					}, {
						"image": require("../assets/images/service-details/icons/partnered-collabration.png"),
						"content": "Code Friendly",
					}, 
				],
				"footer": "Clearer construction, fewer site questions, and smoother execution.",
			}, {
				"image": require("../assets/images/service-details/technical-drawings/Interior-Designers.jpg"),
				"heading": "Interior Designers",
				"content": "We draft furniture layouts, joinery details, and interior documentation that support flawless execution.",
				"keyServices": [
					{
						"image": require("../assets/images/service-details/icons/realistic-stylling.png"),
						"content": "Detail Depth",
					}, {
						"image": require("../assets/images/service-details/icons/material-accuracy.png"),
						"content": "Finish Precision",
					}, {
						"image": require("../assets/images/service-details/icons/flexible-options.png"),
						"content": "Designer Sync",
					}, {
						"image": require("../assets/images/service-details/icons/engaging-visuals.png"),
						"content": "Vendor Friendly",
					}, 
				],
				"footer": "Reduced revisions, smoother vendor coordination, and consistent outcomes.",
			}, {
				"image": require("../assets/images/service-details/technical-drawings/Contractors-&-Builders.jpg"),
				"heading": "Contractors & Builders",
				"content": "We provide working drawings that simplify on-site execution and ensure teams stay aligned.",
				"keyServices": [
					{
						"image": require("../assets/images/service-details/icons/sales-ready-visuals.png"),
						"content": "Execution Clarity",
					}, {
						"image": require("../assets/images/service-details/icons/immersive-walkthroughs.png"),
						"content": "Easy Readability",
					}, {
						"image": require("../assets/images/service-details/icons/cost-efficiency.png"),
						"content": "Site Friendly",
					}, {
						"image": require("../assets/images/service-details/icons/ready-to-use.png"),
						"content": "Organized Layers",
					}, 
				],
				"footer": "Reduced confusion, fewer delays, and streamlined site operations.",
			}, {
				"image": require("../assets/images/service-details/technical-drawings/Engineering-Consultants.jpg"),
				"heading": "Engineering Consultants",
				"content": "We deliver coordination drawings that align architectural, structural, and MEP systems seamlessly.",
				"keyServices": [
					{
						"image": require("../assets/images/service-details/icons/accurate-draftinng.png"),
						"content": "System Alignment",
					}, {
						"image": require("../assets/images/service-details/icons/build-clarity.png"),
						"content": "Technical Precision",
					}, {
						"image": require("../assets/images/service-details/icons/easy-coordination.png"),
						"content": "Clear Markups",
					}, {
						"image": require("../assets/images/service-details/icons/time-saving-documentation.png"),
						"content": "Coordination Ready",
					}, 
				],
				"footer": "Better interdisciplinary coordination, fewer conflicts, and smoother approvals.",
			},
		]
	},
	"product-visualization": {
		"seoContent": {
			"title": "Product Visualization | Glocal Studio"
		},
		"title":"Product Visualization",
		"background": require("../assets/videos/product-visualization3.mp4"),
		"mobileMainHeading": <>Simplify <br/>Your <br/>Workflow</>,
		"desktopMainHeading": "From Concept to",
		"secondaryHeading": "Photoreal Reality",
		"description": "Our product visualization services make your ideas tangible-perfect for presentations, e-commerce, and marketing.",
		"whatWeDo": {
			"content": "From early-stage prototypes to polished furniture renders, we deliver visuals that look as good as the finished product.",
			items: [
				{
					id: "01",
					title: "Perfect for Furniture brands & designers presenting collections or catalogs.",
					heading: "Furniture Rendering",
					content: "We design and render furniture in stunning detail-showcasing finishes, fabrics, and forms with unmatched realism.",
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
		"professionalServiceContent": [
			{
				"image": require("../assets/images/service-details/product-visualization/Furniture-Brands.jpg"),
				"heading": "Furniture Brands",
				"content": "We produce high-quality product renders that elevate catalogues, websites, and marketing campaigns with lifelike detail.",
				"keyServices": [
					{
						"image": require("../assets/images/service-details/icons/photoreal-renders.png"),
						"content": "Material Realism",
					}, {
						"image": require("../assets/images/service-details/icons/technical-accuracy.png"),
						"content": "Fabric Detail",
					}, {
						"image": require("../assets/images/service-details/icons/fast-delivery.png"),
						"content": "Hero Lighting",
					}, {
						"image": require("../assets/images/service-details/icons/partnered-collabration.png"),
						"content": "Catalog Ready",
					}, 
				],
				"footer": "Better marketing visuals, improved conversions, and stronger brand presence.",
			}, {
				"image": require("../assets/images/service-details/product-visualization/Lifestyle-&-Fashion.jpg"),
				"heading": "Lifestyle & Fashion",
				"content": "We visualize shoes, bags, apparel, and accessories with precision—highlighting textures, finishes, and craftsmanship.",
				"keyServices": [
					{
						"image": require("../assets/images/service-details/icons/realistic-stylling.png"),
						"content": "Texture Rich",
					}, {
						"image": require("../assets/images/service-details/icons/material-accuracy.png"),
						"content": "Style Accurate",
					}, {
						"image": require("../assets/images/service-details/icons/flexible-options.png"),
						"content": "Color Perfect",
					}, {
						"image": require("../assets/images/service-details/icons/engaging-visuals.png"),
						"content": "Trend Aware",
					}, 
				],
				"footer": "More appealing visuals, higher customer engagement, and elevated brand style.",
			}, {
				"image": require("../assets/images/service-details/product-visualization/Jewelry-&-Luxury-Goods.jpg"),
				"heading": "Jewelry & Luxury Goods",
				"content": "We create cinematic product renders that showcase shine, cuts, and craftsmanship for premium branding.",
				"keyServices": [
					{
						"image": require("../assets/images/service-details/icons/sales-ready-visuals.png"),
						"content": "Macro Detailing",
					}, {
						"image": require("../assets/images/service-details/icons/immersive-walkthroughs.png"),
						"content": "Gem Precision",
					}, {
						"image": require("../assets/images/service-details/icons/cost-efficiency.png"),
						"content": "Premium Polish",
					}, {
						"image": require("../assets/images/service-details/icons/ready-to-use.png"),
						"content": "Luxury Focus",
					}, 
				],
				"footer": "Increased desire, premium perception, and high luxury appeal.",
			}, {
				"image": require("../assets/images/service-details/product-visualization/Consumer-Electronics.jpg"),
				"heading": "Consumer Electronics",
				"content": "We deliver high-impact visuals for gadgets, devices, and tech launches with immaculate detailing and lighting.",
				"keyServices": [
					{
						"image": require("../assets/images/service-details/icons/accurate-draftinng.png"),
						"content": "Tech Precision",
					}, {
						"image": require("../assets/images/service-details/icons/build-clarity.png"),
						"content": "Sleek Lighting",
					}, {
						"image": require("../assets/images/service-details/icons/easy-coordination.png"),
						"content": "Launch Ready",
					}, {
						"image": require("../assets/images/service-details/icons/time-saving-documentation.png"),
						"content": "E-Com Optimized",
					}, 
				],
				"footer": "Better product launches, stronger storytelling, and standout e-commerce imagery.",
			},
		]
	},
	"3d-animation-and-experiences": {
		"seoContent": {
			"title": "3D Animation & Interactive Experiences | Glocal Studio"
		},
		"title":"3D Animation & Interactive Experiences",
		"background": require("../assets/videos/3d-animation-and-experiences.mp4"),
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
		"professionalServiceContent": [
			{
				"image": require("../assets/images/service-details/3d-animation-and-experiences/Architecture-&-Real-Estate.jpg"),
				"heading": "Architecture & Real Estate",
				"content": "We produce cinematic walkthroughs and flythroughs that bring unbuilt spaces to life—boosting client understanding and pre-sales momentum.",
				"keyServices": [
					{
						"image": require("../assets/images/service-details/icons/photoreal-renders.png"),
						"content": "Cinematic Motion",
					}, {
						"image": require("../assets/images/service-details/icons/technical-accuracy.png"),
						"content": "Realistic Atmosphere",
					}, {
						"image": require("../assets/images/service-details/icons/fast-delivery.png"),
						"content": "Story-Driven",
					}, {
						"image": require("../assets/images/service-details/icons/partnered-collabration.png"),
						"content": "Sales Focused",
					}, 
				],
				"footer": "More persuasive presentations, stronger emotional impact, faster project buy-in.",
			}, {
				"image": require("../assets/images/service-details/3d-animation-and-experiences/Hospitality-&-Retail.jpg"),
				"heading": "Hospitality & Retail",
				"content": "We create immersive animation and interactive previews that showcase experience-driven spaces like hotels, resorts, and retail environments.",
				"keyServices": [
					{
						"image": require("../assets/images/service-details/icons/realistic-stylling.png"),
						"content": "Experience First",
					}, {
						"image": require("../assets/images/service-details/icons/material-accuracy.png"),
						"content": "Mood Precision",
					}, {
						"image": require("../assets/images/service-details/icons/flexible-options.png"),
						"content": "Customer-Centric",
					}, {
						"image": require("../assets/images/service-details/icons/engaging-visuals.png"),
						"content": "High Realism",
					}, 
				],
				"footer": "Better guest engagement, stronger marketing, and richer brand storytelling.",
			}, {
				"image": require("../assets/images/service-details/3d-animation-and-experiences/Product-Companies.jpg"),
				"heading": "Product Companies",
				"content": "We build product animations and configurators that showcase features, mechanisms, and design details in the most engaging way.",
				"keyServices": [
					{
						"image": require("../assets/images/service-details/icons/sales-ready-visuals.png"),
						"content": "Feature Focused",
					}, {
						"image": require("../assets/images/service-details/icons/immersive-walkthroughs.png"),
						"content": "High Detailing",
					}, {
						"image": require("../assets/images/service-details/icons/cost-efficiency.png"),
						"content": "Interactive Options",
					}, {
						"image": require("../assets/images/service-details/icons/ready-to-use.png"),
						"content": "Launch Ready",
					}, 
				],
				"footer": "Clearer product communication, increased conversions, elevated brand perception.",
			}, {
				"image": require("../assets/images/service-details/3d-animation-and-experiences/Automotive-&-Industrial.jpg"),
				"heading": "Automotive & Industrial",
				"content": "We create technical animations and demos for vehicles, machinery, and industrial systems—highlighting function, movement, and engineering clarity.",
				"keyServices": [
					{
						"image": require("../assets/images/service-details/icons/accurate-draftinng.png"),
						"content": "Technical Accuracy",
					}, {
						"image": require("../assets/images/service-details/icons/build-clarity.png"),
						"content": "Mechanism Clarity",
					}, {
						"image": require("../assets/images/service-details/icons/easy-coordination.png"),
						"content": "Smooth Motion",
					}, {
						"image": require("../assets/images/service-details/icons/time-saving-documentation.png"),
						"content": "Industrial Precision",
					}, 
				],
				"footer": "Improved training, better demos, and enhanced investor/partner understanding.",
			},
		]
	},
	"360-degree-and-virtual-tours": {
		"seoContent": {
			"title": "360° & Virtual Tours | Glocal Studio"
		},
		"title":"360° & Virtual Tours",
		"background": require("../assets/videos/360-degree-and-virtual-tours.mp4"),
		"mobileMainHeading": <>Simplify <br/>Your <br/>Workflow</>,
		"desktopMainHeading": "Immersive Tours",
		"secondaryHeading": "That Sell Faster.",
		"description": "Our VR-enabled tours and interactive panoramas bring projects to life, helping clients experience properties as if they were there in person.",
		"whatWeDo": {
			"content": "We create immersive 360° panoramas and virtual tours that allow clients to explore spaces in vivid detail-remotely and realistically.",
			items: [
				{
					id: "01",
					title: "Perfect for Architects, interior designers, and marketers showcasing spaces online.",
					heading: "360° Panoramas",
					content: "High-resolution panoramic visuals that capture entire spaces in a single immersive frame.",
					image: require("../assets/images/service-details/360-degree-and-virtual-tours/what-we-do-item-1.jpg"),
					type: "non-floting",
				}, {
					id: "02",
					title: "Perfect for Real estate developers, brokers, and property portals.",
					heading: "Real Estate Virtual Tours",
					content: "Fully interactive tours that let buyers explore properties virtually, driving faster decisions and stronger sales.",
					image: require("../assets/images/service-details/360-degree-and-virtual-tours/what-we-do-item-2.jpg"),
					type: "non-floting",
				}
			],
		},
		"professionalServiceContent": [
			{
				"image": require("../assets/images/service-details/360-degree-and-virtual-tours/Real-Estate.jpg"),
				"heading": "Real Estate",
				"content": "We create immersive 360° tours that allow buyers to explore homes, apartments, and communities remotely with full clarity.",
				"keyServices": [
					{
						"image": require("../assets/images/service-details/icons/photoreal-renders.png"),
						"content": "High Resolution",
					}, {
						"image": require("../assets/images/service-details/icons/technical-accuracy.png"),
						"content": "Smooth Navigation",
					}, {
						"image": require("../assets/images/service-details/icons/fast-delivery.png"),
						"content": "VR Compatible",
					}, {
						"image": require("../assets/images/service-details/icons/partnered-collabration.png"),
						"content": "Sales Ready",
					}, 
				],
				"footer": "Higher inquiries, faster decisions, and stronger pre-sales performance.",
			}, {
				"image": require("../assets/images/service-details/360-degree-and-virtual-tours/Hospitality.jpg"),
				"heading": "Hospitality",
				"content": "We produce virtual experiences for hotels, resorts, and restaurants that help guests understand ambience before booking.",
				"keyServices": [
					{
						"image": require("../assets/images/service-details/icons/realistic-stylling.png"),
						"content": "Mood Realism",
					}, {
						"image": require("../assets/images/service-details/icons/material-accuracy.png"),
						"content": "Interactive Flow",
					}, {
						"image": require("../assets/images/service-details/icons/flexible-options.png"),
						"content": "Brand Aligned",
					}, {
						"image": require("../assets/images/service-details/icons/engaging-visuals.png"),
						"content": "Booking Focused",
					}, 
				],
				"footer": "Better guest engagement, increased trust, and improved booking rates.",
			}, {
				"image": require("../assets/images/service-details/360-degree-and-virtual-tours/Corporate-Workspaces.jpg"),
				"heading": "Corporate Workspaces",
				"content": "We build interactive office tours that help clients visualize workspace planning, design intent, and layout flow.",
				"keyServices": [
					{
						"image": require("../assets/images/service-details/icons/sales-ready-visuals.png"),
						"content": "Layout Clarity",
					}, {
						"image": require("../assets/images/service-details/icons/immersive-walkthroughs.png"),
						"content": "Navigation Ease",
					}, {
						"image": require("../assets/images/service-details/icons/cost-efficiency.png"),
						"content": "Design Sync",
					}, {
						"image": require("../assets/images/service-details/icons/ready-to-use.png"),
						"content": "Team Friendly",
					}, 
				],
				"footer": "Clearer communication, quicker decisions, and streamlined design approvals.",
			}, {
				"image": require("../assets/images/service-details/360-degree-and-virtual-tours/Retail.jpg"),
				"heading": "Retail",
				"content": "We create virtual store walkthroughs that help brands showcase retail concepts, merchandising, and customer journeys.",
				"keyServices": [
					{
						"image": require("../assets/images/service-details/icons/accurate-draftinng.png"),
						"content": "Brand Precision",
					}, {
						"image": require("../assets/images/service-details/icons/build-clarity.png"),
						"content": "Store Mapping",
					}, {
						"image": require("../assets/images/service-details/icons/easy-coordination.png"),
						"content": "Product Highlighting",
					}, {
						"image": require("../assets/images/service-details/icons/time-saving-documentation.png"),
						"content": "E-Com Friendly",
					}, 
				],
				"footer": "Better brand pitches, stronger concept validation, and richer customer engagement.",
			},
		]
	},
};

export const servicesArray = [
	{
		id: "01",
		title: routes["architectural-visualization"].label,
		link: routes["architectural-visualization"].href,
		icon: routes["architectural-visualization"].icon,
		menuContent: "Bring architectural ideas to life with stunning, photoreal renders-exteriors, interiors, isometrics, floor plans, and walkthroughs that inspire confidence and sell."
	},  {
		id: "02",
		title: routes["3d-modeling"].label,
		link: routes["3d-modeling"].href,
		icon: routes["3d-modeling"].icon,
		menuContent: "We craft accurate 3D models for architecture, interiors, furniture, and products-detailed, scalable, and ready for rendering or prototyping."
	}, {
		id: "03",
		title: routes["technical-drawings"].label,
		link: routes["technical-drawings"].href,
		icon: routes["technical-drawings"].icon,
		menuContent: "Precise working drawings, joinery details, and documentation that bridge design intent and execution-streamlining site work and vendor coordination."
	}, {
		id: "04",
		title: routes["product-visualization"].label,
		link: routes["product-visualization"].href,
		icon: routes["product-visualization"].icon,
		menuContent: "From furniture renders to prototypes, we showcase your products with lifelike detail-perfect for marketing, e-commerce, and investor presentations."
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
		menuContent: "Give clients the power to explore spaces virtually through 360° panoramas and interactive tours-ideal for real estate and hospitality marketing."
	}
];
