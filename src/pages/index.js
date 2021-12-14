import React from "react";
import theme from "theme";
import { Theme, Image, Link, Button, Section, Text, Box, Icon } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { Override, SocialMedia } from "@quarkly/components";
import * as Components from "components";
import { MdMenu } from "react-icons/md";
import { DiBootstrap, DiBingSmall, DiCssTricks, DiEnvato, DiGithubBadge } from "react-icons/di";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"index"} />
		<Helmet>
			<title>
				Home | Website Example
			</title>
			<meta name={"description"} content={"It all begins with an idea. Maybe you want to launch a business. Maybe you want to turn a hobby into something bigger. Or maybe you have a creative project to share with the world. Whatever it is, the way you tell your story online can make all the difference."} />
			<meta property={"og:title"} content={"Home | Website Example"} />
			<meta property={"og:description"} content={"It all begins with an idea. Maybe you want to launch a business. Maybe you want to turn a hobby into something bigger. Or maybe you have a creative project to share with the world. Whatever it is, the way you tell your story online can make all the difference."} />
			<meta property={"og:image"} content={"https://uploads.quarkly.io/5f44d0da669357001e60ed14/images/website-example-quarkly.png?v=2020-11-05T19:48:01.806Z"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/readme/cra/favicon-32x32.ico"} type={"image/x-icon"} />
		</Helmet>
		<Section padding="16px 0 16px 0" quarkly-title="Header" align-items="center" justify-content="center">
			<Override
				slot="SectionContent"
				display="grid"
				grid-template-columns="repeat(3, 1fr)"
				md-grid-template-columns="repeat(2, 1fr)"
				margin="0px 32px 0px 32px"
				width="100%"
				md-margin="0px 16px 0px 16px"
			/>
			<Link href="/" position="relative" transition="opacity 200ms ease" quarkly-title="Link">
				<Image src="https://uploads.quarkly.io/5f44d0da669357001e60ed14/images/default-website-logo.svg?v=2020-11-06T17:26:21.226Z" width="120px" z-index="3" />
			</Link>
			<Components.BurgerMenu md-display="flex" md-align-items="center" md-justify-content="flex-end">
				<Override
					slot="menu"
					lg-transform="translateY(0px) translateX(0px)"
					lg-transition="transform 400ms ease 0s"
					md-position="fixed"
					display="flex"
					md-left={0}
					md-top={0}
					md-width="100%"
					md-height="100%"
					padding="0px 0 0px 0"
					align-items="center"
					justify-content="center"
				>
					<Override
						slot="item"
						text-transform="uppercase"
						text-align="center"
						padding="8px 20px 8px 20px"
						md-padding="16px 40px 16px 40px"
						display="inline-block"
					/>
					<Override slot="item-404" lg-display="none" display="none" />
					<Override slot="item-index" lg-display="none" display="none" />
					<Override
						slot="link"
						md-color="--dark"
						md-opacity=".5"
						md-transition="opacity .15s ease 0s"
						md-hover-opacity="1"
						md-active-opacity="1"
						md-font="16px/24px sans-serif"
						font="--base"
						text-decoration-line="initial"
						color="--dark"
						opacity=".5"
						transition="opacity .15s ease 0s"
						hover-opacity="1"
						letter-spacing="0.5px"
						text-transform="initial"
					/>
					<Override
						slot="link-active"
						md-opacity="1"
						md-cursor="default"
						opacity="1"
						color="--primary"
						cursor="default"
					/>
				</Override>
				<Override slot="icon,icon-close" category="md" icon={MdMenu} />
				<Override
					slot="icon"
					category="md"
					icon={MdMenu}
					size="36px"
					md-right="0px"
					md-position="relative"
				/>
				<Override
					slot="menu-open"
					md-top={0}
					md-bottom={0}
					md-display="flex"
					md-flex-direction="column"
					md-align-items="center"
					md-justify-content="center"
				/>
				<Override slot="icon-open" md-position="fixed" md-top="18px" md-right="18px" />
			</Components.BurgerMenu>
			<Button
				padding="8px 18px 8px 18px"
				font="--base"
				letter-spacing="0.5px"
				z-index="5"
				background="--color-primary"
				md-display="none"
				white-space="nowrap"
				border-radius="0px"
				hover-transform="translateY(-4px)"
				transition="transform --transitionDuration-fast --transitionTimingFunction-easeInOut 0s"
				justify-self="end"
			>
				Contact Us
			</Button>
		</Section>
		<Section
			padding="25px 0 75px 0"
			sm-align-items="center"
			sm-justify-content="center"
			quarkly-title="Hero"
			lg-padding="25px 0 25px 0"
			sm-padding="0px 0 25px 0"
			justify-content="center"
		>
			<Override
				slot="SectionContent"
				width="100%"
				background="linear-gradient(180deg,rgba(155, 108, 252, 0.15) 0%,transparent 100%) 0 0 no-repeat,#191C23 url(https://uploads.quarkly.io/5f44d0da669357001e60ed14/images/default-website-illustration-works-angle.svg?v=2020-11-06T16:36:54.345Z) center center/cover repeat scroll padding-box"
				height="620px"
				align-items="center"
				justify-content="center"
				sm-width="100%"
				lg-height="520px"
				md-height="420px"
				md-padding="0px 24px 0px 24px"
				min-width="auto"
				margin="0px 32px 0px 32px"
				md-margin="0px 16px 0px 16px"
			/>
			<Text
				color="--light"
				font="--headline1"
				margin="16px 0px 0px 0px"
				sm-text-align="center"
				sm-width="80%"
				lg-text-align="center"
				lg-font="--headline2"
			>
				Make a Difference.
			</Text>
			<Text
				font="--lead"
				color="--light"
				margin="10px 0px 35px 0px"
				sm-text-align="center"
				sm-width="80%"
				opacity="0.7"
				md-text-align="center"
			>
				Supercharge your personal and professional success with a beautifully crafted website.
			</Text>
			<Link
				href="#mission"
				text-decoration-line="initial"
				color="--darkL2"
				background="--color-light"
				padding="12px 24px 12px 24px"
				font="--base"
				letter-spacing="0.5px"
				hover-transform="translateY(-4px)"
				transition="transform --transitionDuration-fast --transitionTimingFunction-easeInOut 0s"
			>
				Learn More
			</Link>
		</Section>
		<Section
			id="mission"
			padding="90px 0px 100px 0px"
			sm-padding="24px 0 24px 0"
			quarkly-title="About"
			background="--color-lightD1"
			border-color="--color-lightD2"
			border-style="solid"
			border-width="1px 0px 1px 0px"
			box-sizing="border-box"
			lg-padding="50px 30px 50px 30px"
			justify-content="center"
		>
			<Override
				slot="SectionContent"
				align-items="center"
				width="100%"
				min-width="auto"
				margin="0px 32px 0px 32px"
				md-margin="0px 16px 0px 16px"
			/>
			<Text
				text-align="center"
				font="--base"
				opacity="0.6"
				letter-spacing="1px"
				margin="0px 0px 10px 0px"
				color="--dark"
				lg-margin="0px 0px 6px 0px"
				lg-text-align="center"
				quarkly-title="Title"
				text-transform="uppercase"
			>
				Our Mission
			</Text>
			<Text
				font="normal 500 28px/1.2 'AvenirNextCyrRegular', sans-serif"
				margin="0px 0px 0px 0px"
				letter-spacing="1px"
				color="--dark"
				text-align="center"
				width="85%"
				lg-font="--lead"
				sm-font="--base"
			>
				We empower creators to do their best work while maintaining our uncompromising values while we grow.
			</Text>
		</Section>
		<Section
			padding="70px 0 70px 0"
			quarkly-title="Info"
			lg-padding="50px 0px 50px 0px"
			md-padding="25px 0px 25px 0px"
			justify-content="center"
		>
			<Override
				slot="SectionContent"
				width="100%"
				min-width="auto"
				margin="0px 32px 0px 32px"
				md-margin="0px 16px 0px 16px"
			/>
			<Box
				display="grid"
				grid-template-columns="2fr 3fr"
				grid-gap="64px"
				xl-grid-gap="32px"
				md-grid-template-columns="1fr"
				lg-grid-template-columns="1fr"
			>
				<Box
					min-width="100px"
					min-height="100px"
					display="flex"
					flex-direction="column"
					align-items="flex-start"
				>
					<Text
						font="--base"
						margin="0px 0px 10px 0px"
						letter-spacing="1px"
						color="--dark"
						opacity="0.6"
						lg-text-align="center"
						lg-margin="0px 0px 6px 0px"
						quarkly-title="Title"
						text-transform="uppercase"
					>
						Team
					</Text>
					<Text
						font="--headline2"
						margin="0px 0px 28px 0px"
						color="--dark"
						lg-text-align="center"
						lg-margin="0px 0px 18px 0px"
						sm-font="--headline3"
						md-font="--headline3"
					>
						Who We Are
					</Text>
					<Text
						font="--lead"
						margin="0px 0px 20px 0px"
						color="--darkL2"
						opacity="0.6"
						lg-text-align="left"
						lg-margin="0px 0px 18px 0px"
						sm-font="--base"
					>
						It all begins with an idea. Maybe you want to launch a business. Maybe you want to turn a hobby into something bigger. Or maybe you have a creative project to share with the world. Whatever it is, the way you tell your story online can make all the difference.
					</Text>
					<Link
						href="/about"
						text-decoration-line="initial"
						color="--light"
						padding="8px 18px 8px 18px"
						font="--base"
						letter-spacing="0.5px"
						text-align="center"
						margin="9px 0px 0px 0px"
						background="--color-primary"
						hover-transform="translateY(-4px)"
						transition="transform --transitionDuration-fast --transitionTimingFunction-easeInOut 0s"
					>
						Read More
					</Link>
				</Box>
				<Box
					width="100%"
					background="--color-lightD2 url(https://uploads.quarkly.io/5f44d0da669357001e60ed14/images/default-website-illustration-sea-first.svg?v=2020-11-06T16:37:39.391Z) center center/100% no-repeat"
					margin="0px 0px 0px 0px"
					padding="0px 0px 60% 0px"
					height="0px"
					hover-background="--color-lightD2 url(https://uploads.quarkly.io/5f44d0da669357001e60ed14/images/default-website-illustration-sea-first.svg?v=2020-11-06T16:37:39.391Z) center center/110% no-repeat"
					transition="background --transitionDuration-normal --transitionTimingFunction-easeInOut 0s"
					md-order="-1"
					lg-order="-1"
				/>
			</Box>
			<Box
				display="grid"
				grid-template-columns="3fr 2fr"
				grid-gap="64px"
				margin="96px 0px 0px 0px"
				xl-grid-gap="32px"
				md-grid-template-columns="1fr"
				md-margin="44px 0px 0px 0px"
				lg-grid-template-columns="1fr"
				lg-margin="64px 0px 0px 0px"
			>
				<Box
					width="100%"
					background="--color-lightD2 url(https://uploads.quarkly.io/5f44d0da669357001e60ed14/images/default-website-illustration-sea-second.svg?v=2020-11-06T17:14:59.136Z) center center/100% no-repeat"
					margin="0px 0px 0px 0px"
					padding="0px 0px 60% 0px"
					height="0px"
					hover-background="--color-lightD2 url(https://uploads.quarkly.io/5f44d0da669357001e60ed14/images/default-website-illustration-sea-second.svg?v=2020-11-06T17:14:59.136Z) center center/110% no-repeat"
					transition="background --transitionDuration-normal --transitionTimingFunction-easeInOut 0s"
				/>
				<Box
					min-width="100px"
					min-height="100px"
					display="flex"
					flex-direction="column"
					align-items="flex-start"
				>
					<Text
						font="--base"
						margin="0px 0px 10px 0px"
						letter-spacing="1px"
						color="--dark"
						opacity="0.6"
						lg-margin="0px 0px 6px 0px"
						lg-text-align="center"
						quarkly-title="Title"
						text-transform="uppercase"
					>
						expertise
					</Text>
					<Text
						font="--headline2"
						margin="0px 0px 28px 0px"
						color="--dark"
						lg-text-align="center"
						lg-margin="0px 0px 18px 0px"
						sm-font="--headline3"
						md-font="--headline3"
					>
						Why Choose Us
					</Text>
					<Text
						font="--lead"
						margin="0px 0px 20px 0px"
						color="--darkL2"
						opacity="0.6"
						sm-text-align="left"
						lg-text-align="left"
						lg-margin="0px 0px 18px 0px"
						sm-font="--base"
					>
						It all begins with an idea. Maybe you want to launch a business. Maybe you want to turn a hobby into something bigger. Or maybe you have a creative project to share with the world. Whatever it is, the way you tell your story online can make all the difference.
					</Text>
					<Link
						href="/team"
						text-decoration-line="initial"
						color="--light"
						padding="8px 18px 8px 18px"
						font="--base"
						letter-spacing="0.5px"
						text-align="center"
						margin="9px 0px 0px 0px"
						background="--color-primary"
						hover-transform="translateY(-4px)"
						transition="transform --transitionDuration-fast --transitionTimingFunction-easeInOut 0s"
					>
						Read More
					</Link>
				</Box>
			</Box>
			<Box
				display="grid"
				grid-template-columns="2fr 3fr"
				grid-gap="64px"
				margin="96px 0px 0px 0px"
				xl-grid-gap="32px"
				md-grid-template-columns="1fr"
				md-margin="44px 0px 0px 0px"
				lg-grid-template-columns="1fr"
				lg-margin="64px 0px 0px 0px"
			>
				<Box
					min-width="100px"
					min-height="100px"
					display="flex"
					flex-direction="column"
					align-items="flex-start"
				>
					<Text
						font="--base"
						margin="0px 0px 10px 0px"
						letter-spacing="1px"
						color="--dark"
						opacity="0.6"
						lg-text-align="center"
						lg-margin="0px 0px 6px 0px"
						quarkly-title="Title"
						text-transform="uppercase"
					>
						CONTACTS
					</Text>
					<Text
						font="--headline2"
						margin="0px 0px 28px 0px"
						color="--dark"
						lg-text-align="center"
						lg-margin="0px 0px 18px 0px"
						sm-text-align="left"
						sm-font="--headline3"
						md-font="--headline3"
					>
						Where We Work
					</Text>
					<Text
						font="--lead"
						margin="0px 0px 20px 0px"
						color="--darkL2"
						opacity="0.6"
						lg-text-align="left"
						lg-margin="0px 0px 18px 0px"
						sm-font="--base"
					>
						It all begins with an idea. Maybe you want to launch a business. Maybe you want to turn a hobby into something bigger. Or maybe you have a creative project to share with the world. Whatever it is, the way you tell your story online can make all the difference.
					</Text>
					<Link
						href="/contact"
						text-decoration-line="initial"
						color="--light"
						padding="8px 18px 8px 18px"
						font="--base"
						letter-spacing="0.5px"
						transition="transform --transitionDuration-fast --transitionTimingFunction-easeInOut 0s"
						text-align="center"
						margin="9px 0px 0px 0px"
						background="--color-primary"
						hover-transform="translateY(-4px)"
					>
						Read More
					</Link>
				</Box>
				<Box
					width="100%"
					background="--color-lightD2 url(https://uploads.quarkly.io/5f44d0da669357001e60ed14/images/default-website-illustration-sea-third.svg?v=2020-11-06T17:15:50.700Z) center center/100% no-repeat"
					margin="0px 0px 0px 0px"
					padding="0px 0px 60% 0px"
					height="0px"
					hover-background="--color-lightD2 url(https://uploads.quarkly.io/5f44d0da669357001e60ed14/images/default-website-illustration-sea-third.svg?v=2020-11-06T17:15:50.700Z) center center/110% no-repeat"
					transition="background --transitionDuration-normal --transitionTimingFunction-easeInOut 0s"
					md-order="-1"
					lg-order="-1"
				/>
			</Box>
		</Section>
		<Section
			padding="100px 0px 100px 0px"
			quarkly-title="Works"
			box-sizing="border-box"
			lg-padding="50px 30px 50px 30px"
			justify-content="center"
		>
			<Override
				slot="SectionContent"
				align-items="center"
				width="100%"
				min-width="auto"
				margin="0px 32px 0px 32px"
				md-margin="0px 0px 0px 0px"
			/>
			<Text
				font="--base"
				margin="0px 0px 10px 0px"
				letter-spacing="1px"
				color="--dark"
				opacity="0.6"
				text-align="center"
				text-transform="uppercase"
				lg-margin="0px 0px 6px 0px"
				lg-text-align="center"
				quarkly-title="Title"
			>
				what we create
			</Text>
			<Text
				font="--headline2"
				margin="0px 0px 48px 0px"
				color="--dark"
				text-align="center"
				lg-text-align="center"
				md-margin="0px 0px 36px 0px"
				sm-font="--headline3"
				md-font="--headline3"
			>
				Our Works
			</Text>
			<Box
				width="100%"
				display="grid"
				grid-gap="32px"
				grid-template-columns="repeat(3, 1fr)"
				lg-grid-template-columns="repeat(2, 1fr)"
				md-grid-template-columns="1fr"
			>
				<Box
					width="100%"
					background="--color-lightD2 url(https://uploads.quarkly.io/5f44d0da669357001e60ed14/images/default-website-illustration-sea-first.svg?v=2020-11-06T16:37:39.391Z) center center/100% no-repeat"
					padding="0px 0px 60% 0px"
					height="0px"
					hover-background="--color-lightD2 url(https://uploads.quarkly.io/5f44d0da669357001e60ed14/images/default-website-illustration-sea-first.svg?v=2020-11-06T16:37:39.391Z) center center/110% no-repeat"
					transition="background --transitionDuration-normal --transitionTimingFunction-easeInOut 0s"
				/>
				<Box
					width="100%"
					background="--color-lightD2 url(https://uploads.quarkly.io/5f44d0da669357001e60ed14/images/default-website-illustration-sea-second.svg?v=2020-11-06T17:14:59.136Z) center center/100% no-repeat"
					padding="0px 0px 60% 0px"
					height="0px"
					hover-background="--color-lightD2 url(https://uploads.quarkly.io/5f44d0da669357001e60ed14/images/default-website-illustration-sea-second.svg?v=2020-11-06T17:14:59.136Z) center center/110% no-repeat"
					transition="background --transitionDuration-normal --transitionTimingFunction-easeInOut 0s"
				/>
				<Box
					width="100%"
					background="--color-lightD2 url(https://uploads.quarkly.io/5f44d0da669357001e60ed14/images/default-website-illustration-sea-third.svg?v=2020-11-06T17:15:50.700Z) center center/100% no-repeat"
					padding="0px 0px 60% 0px"
					height="0px"
					hover-background="--color-lightD2 url(https://uploads.quarkly.io/5f44d0da669357001e60ed14/images/default-website-illustration-sea-third.svg?v=2020-11-06T17:15:50.700Z) center center/110% no-repeat"
					transition="background --transitionDuration-normal --transitionTimingFunction-easeInOut 0s"
				/>
				<Box
					width="100%"
					background="--color-lightD2 url(https://uploads.quarkly.io/5f44d0da669357001e60ed14/images/default-website-illustration-sea-fourth.svg?v=2020-11-06T17:17:18.847Z) center center/100% no-repeat"
					padding="0px 0px 60% 0px"
					height="0px"
					hover-background="--color-lightD2 url(https://uploads.quarkly.io/5f44d0da669357001e60ed14/images/default-website-illustration-sea-fourth.svg?v=2020-11-06T17:17:18.847Z) center center/110% no-repeat"
					transition="background --transitionDuration-normal --transitionTimingFunction-easeInOut 0s"
				/>
				<Box
					width="100%"
					background="--color-lightD2 url(https://uploads.quarkly.io/5f44d0da669357001e60ed14/images/default-website-illustration-sea-fifth.svg?v=2020-11-06T17:18:24.897Z) center center/100% no-repeat"
					padding="0px 0px 60% 0px"
					height="0px"
					hover-background="--color-lightD2 url(https://uploads.quarkly.io/5f44d0da669357001e60ed14/images/default-website-illustration-sea-fifth.svg?v=2020-11-06T17:18:24.897Z) center center/110% no-repeat"
					transition="background --transitionDuration-normal --transitionTimingFunction-easeInOut 0s"
				/>
				<Box
					width="100%"
					background="--color-lightD2 url(https://uploads.quarkly.io/5f44d0da669357001e60ed14/images/default-website-illustration-sea-sixth.svg?v=2020-11-06T17:19:03.657Z) center center/100% no-repeat"
					padding="0px 0px 60% 0px"
					height="0px"
					hover-background="--color-lightD2 url(https://uploads.quarkly.io/5f44d0da669357001e60ed14/images/default-website-illustration-sea-sixth.svg?v=2020-11-06T17:19:03.657Z) center center/110% no-repeat"
					transition="background --transitionDuration-normal --transitionTimingFunction-easeInOut 0s"
				/>
			</Box>
			<Link
				href="/contact"
				text-decoration-line="initial"
				color="--light"
				padding="8px 18px 8px 18px"
				font="--base"
				letter-spacing="0.5px"
				transition="transform --transitionDuration-fast --transitionTimingFunction-easeInOut 0s"
				text-align="center"
				margin="48px 0px 0px 0px"
				background="--color-primary"
				hover-transform="translateY(-4px)"
				lg-margin="24px 0px 0px 0px"
				md-margin="36px 0px 0px 0px"
			>
				View More
			</Link>
		</Section>
		<Section
			padding="90px 0px 100px 0px"
			sm-padding="24px 0 24px 0"
			quarkly-title="FAQ"
			background="--color-lightD1"
			border-color="--color-lightD2"
			border-style="solid"
			border-width="1px 0px 1px 0px"
			box-sizing="border-box"
			lg-padding="50px 30px 50px 30px"
			justify-content="center"
		>
			<Override
				slot="SectionContent"
				align-items="center"
				width="100%"
				min-width="auto"
				margin="0px 48px 0px 48px"
				md-margin="0px 16px 0px 16px"
			/>
			<Text
				font="--base"
				margin="0px 0px 10px 0px"
				letter-spacing="1px"
				color="--dark"
				opacity="0.6"
				text-align="center"
				text-transform="uppercase"
				lg-text-align="center"
				lg-margin="0px 0px 6px 0px"
				quarkly-title="Title"
			>
				We're here to help
			</Text>
			<Text
				font="--headline2"
				margin="0px 0px 64px 0px"
				color="--dark"
				text-align="center"
				lg-text-align="center"
				lg-margin="0px 0px 36px 0px"
				sm-font="--headline3"
				md-font="--headline3"
			>
				FAQ
			</Text>
			<Box
				width="100%"
				display="grid"
				grid-gap="32px"
				grid-template-columns="repeat(4, 1fr)"
				lg-grid-template-columns="repeat(2, 1fr)"
				md-grid-template-columns="1fr"
			>
				<Box>
					<Text
						font="--lead"
						margin="0px 0px 0px 0px"
						color="--dark"
						text-align="center"
						md-text-align="left"
					>
						Have any questions?
					</Text>
					<Text
						font="--base"
						color="--darkL2"
						opacity="0.6"
						lg-text-align="center"
						text-align="center"
						margin="16px 0px 0px 0px"
						md-text-align="left"
						sm-margin="8px 0px 0px 0px"
					>
						It all begins with an idea. Maybe you want to launch a business. Maybe you want to turn a hobby into something bigger.
					</Text>
				</Box>
				<Box>
					<Text
						font="--lead"
						margin="0px 0px 0px 0px"
						color="--dark"
						text-align="center"
						md-text-align="left"
					>
						Have any questions?
					</Text>
					<Text
						font="--base"
						color="--darkL2"
						opacity="0.6"
						lg-text-align="center"
						text-align="center"
						margin="16px 0px 0px 0px"
						md-text-align="left"
						sm-margin="8px 0px 0px 0px"
					>
						It all begins with an idea. Maybe you want to launch a business. Maybe you want to turn a hobby into something bigger.
					</Text>
				</Box>
				<Box>
					<Text
						font="--lead"
						margin="0px 0px 0px 0px"
						color="--dark"
						text-align="center"
						md-text-align="left"
					>
						Have any questions?
					</Text>
					<Text
						font="--base"
						color="--darkL2"
						opacity="0.6"
						lg-text-align="center"
						text-align="center"
						margin="16px 0px 0px 0px"
						md-text-align="left"
						sm-margin="8px 0px 0px 0px"
					>
						It all begins with an idea. Maybe you want to launch a business. Maybe you want to turn a hobby into something bigger.
					</Text>
				</Box>
				<Box>
					<Text
						font="--lead"
						margin="0px 0px 0px 0px"
						color="--dark"
						text-align="center"
						md-text-align="left"
					>
						Have any questions?
					</Text>
					<Text
						font="--base"
						color="--darkL2"
						opacity="0.6"
						lg-text-align="center"
						text-align="center"
						margin="16px 0px 0px 0px"
						md-text-align="left"
						sm-margin="8px 0px 0px 0px"
					>
						It all begins with an idea. Maybe you want to launch a business. Maybe you want to turn a hobby into something bigger.
					</Text>
				</Box>
			</Box>
		</Section>
		<Section padding="80px 0 80px 0" quarkly-title="Customers" lg-padding="50px 0 50px 0" justify-content="center">
			<Override
				slot="SectionContent"
				align-items="center"
				width="100%"
				md-margin="0px 16px 0px 16px"
				min-width="auto"
				margin="0px 32px 0px 32px"
			/>
			<Text
				font="--base"
				margin="0px 0px 10px 0px"
				letter-spacing="1px"
				color="--dark"
				opacity="0.6"
				text-align="center"
				text-transform="uppercase"
				lg-text-align="center"
				lg-margin="0px 0px 6px 0px"
				quarkly-title="Title"
			>
				They trust us
			</Text>
			<Text
				font="--headline2"
				margin="0px 0px 64px 0px"
				color="--dark"
				text-align="center"
				lg-text-align="center"
				sm-margin="0px 0px 48px 0px"
				sm-font="--headline3"
				md-font="--headline3"
			>
				Our Customers
			</Text>
			<Box
				display="grid"
				width="100%"
				grid-gap="32px"
				grid-template-columns="repeat(5, 1fr)"
				lg-grid-template-columns="repeat(6, 1fr)"
				sm-grid-template-columns="1fr"
			>
				<Box
					lg-grid-column="1 / span 2"
					sm-grid-column="auto / auto"
					sm-display="flex"
					sm-align-items="center"
					sm-margin="0px 0px 0px 20px"
				>
					<Icon
						category="di"
						icon={DiBootstrap}
						margin="0px auto 0px auto"
						size="84px"
						lg-font="64px sans-serif"
						sm-margin="0px 13px 0px 0px"
						sm-font="48px sans-serif"
					/>
					<Text
						font="--base"
						color="--darkL2"
						opacity="0.6"
						lg-text-align="center"
						text-align="center"
						md-margin="16px 0px 0px 0px"
						sm-margin="0px 0px 0px 0px"
					>
						Company Name
					</Text>
				</Box>
				<Box
					lg-grid-column="3 / span 2"
					sm-grid-column="auto / auto"
					sm-display="flex"
					sm-align-items="center"
					sm-margin="0px 0px 0px 20px"
				>
					<Icon
						category="di"
						icon={DiBingSmall}
						margin="0px auto 0px auto"
						size="84px"
						lg-font="64px sans-serif"
						sm-margin="0px 13px 0px 0px"
						sm-font="48px sans-serif"
					/>
					<Text
						font="--base"
						color="--darkL2"
						opacity="0.6"
						lg-text-align="center"
						text-align="center"
						md-margin="16px 0px 0px 0px"
						sm-margin="0px 0px 0px 0px"
					>
						Company Name
					</Text>
				</Box>
				<Box
					lg-grid-column="5 / span 2"
					sm-grid-column="auto / auto"
					sm-display="flex"
					sm-align-items="center"
					sm-margin="0px 0px 0px 20px"
				>
					<Icon
						category="di"
						icon={DiCssTricks}
						margin="0px auto 0px auto"
						size="84px"
						lg-font="64px sans-serif"
						sm-margin="0px 13px 0px 0px"
						sm-font="48px sans-serif"
					/>
					<Text
						font="--base"
						color="--darkL2"
						opacity="0.6"
						lg-text-align="center"
						text-align="center"
						md-margin="16px 0px 0px 0px"
						sm-margin="0px 0px 0px 0px"
					>
						Company Name
					</Text>
				</Box>
				<Box
					lg-grid-column="2 / span 2"
					sm-grid-column="auto / auto"
					sm-display="flex"
					sm-align-items="center"
					sm-margin="0px 0px 0px 20px"
				>
					<Icon
						category="di"
						icon={DiEnvato}
						margin="0px auto 0px auto"
						size="84px"
						lg-font="64px sans-serif"
						sm-margin="0px 13px 0px 0px"
						sm-font="48px sans-serif"
					/>
					<Text
						font="--base"
						color="--darkL2"
						opacity="0.6"
						lg-text-align="center"
						text-align="center"
						md-margin="16px 0px 0px 0px"
						sm-margin="0px 0px 0px 0px"
					>
						Company Name
					</Text>
				</Box>
				<Box
					lg-grid-column="4 / span 2"
					sm-grid-column="auto / auto"
					sm-display="flex"
					sm-align-items="center"
					sm-margin="0px 0px 0px 20px"
				>
					<Icon
						category="di"
						icon={DiGithubBadge}
						margin="0px auto 0px auto"
						size="84px"
						lg-font="64px sans-serif"
						sm-margin="0px 13px 0px 0px"
						sm-font="48px sans-serif"
					/>
					<Text
						font="--base"
						color="--darkL2"
						opacity="0.6"
						lg-text-align="center"
						text-align="center"
						md-margin="16px 0px 0px 0px"
						sm-margin="0px 0px 0px 0px"
					>
						Company Name
					</Text>
				</Box>
			</Box>
		</Section>
		<Section
			quarkly-title="USP"
			padding="75px 0 50px 0"
			lg-padding="50px 0 25px 0"
			lg-height="auto"
			justify-content="center"
		>
			<Override
				slot="SectionContent"
				width="100%"
				margin="0px 32px 0px 32px"
				md-margin="0px 16px 0px 16px"
				min-width="auto"
			/>
			<Box
				min-height="480px"
				padding="36px 24px 36px 24px"
				align-items="center"
				display="flex"
				justify-content="center"
				flex-direction="column"
				background="linear-gradient(180deg,rgba(24, 29, 34, 0.5) 0%,transparent 100%) 0 0 no-repeat,--color-lightD1 url(https://uploads.quarkly.io/5f44d0da669357001e60ed14/images/default-website-fireworks.svg?v=2020-11-06T17:22:27.801Z) center center/cover no-repeat"
				lg-min-height="420px"
				md-min-height="360px"
				sm-min-height="280px"
			>
				<Text
					margin="10px 0px 15px 0px"
					font="--headline2"
					text-align="center"
					quarkly-title="Title"
					color="--light"
					md-font="--headline3"
				>
					Make It Work.
				</Text>
				<Text
					margin="0px 0px 28px 0px"
					font="--lead"
					opacity="0.6"
					text-align="center"
					quarkly-title="Description"
					color="--light"
					max-width="720px"
				>
					Good design adds value faster than it adds cost.
				</Text>
				<Button
					padding="8px 36px 8px 36px"
					font="--lead"
					letter-spacing="0.5px"
					transition="opacity .15s ease 0s"
					position="relative"
					z-index="5"
					background="--color-light"
					opacity="1"
					hover-opacity=".85"
					focus-box-shadow="none"
					hover-box-shadow="none"
					active-box-shadow="none"
					margin="10px auto 0px auto"
					width="fit-content"
					md-font="--base"
					color="--darkL2"
				>
					Start Now
				</Button>
			</Box>
		</Section>
		<Section
			margin="0 0 0 0"
			padding="16px 0 16px 0"
			box-sizing="border-box"
			quarkly-title="Footer"
			justify-content="center"
		>
			<Override
				slot="SectionContent"
				width="100%"
				md-margin="0px 16px 0px 16px"
				min-width="auto"
				margin="0px 32px 0px 32px"
			/>
			<Box
				display="grid"
				grid-gap="32px"
				width="100%"
				grid-template-columns="repeat(2, 1fr)"
				sm-grid-gap="16px"
			>
				<Box display="flex" align-items="center" sm-flex-wrap="wrap">
					<Image width="28px" height="28px" src="https://uploads.quarkly.io/5f44d0da669357001e60ed14/images/default-website-quarkly-logo-grey.svg?v=2020-11-06T17:24:35.270Z" />
					<Link
						href="https://quarkly.io/"
						font="--base"
						color="--dark"
						opacity="0.6"
						text-decoration-line="initial"
						text-align="left"
						margin="1px 0px 0px 10px"
						hover-text-decoration-line="underline"
						white-space="nowrap"
					>
						Made on Quarkly
					</Link>
				</Box>
				<SocialMedia facebook="https://www.facebook.com/quarklyapp/" twitter="https://twitter.com/quarklyapp" youtube="https://www.youtube.com/channel/UCK5bXs2L0bbSMQ82BQ3hIkw" justify-content="flex-end">
					<Override slot="link" background="none" border-radius="50%" />
					<Override slot="icon" color="--dark" />
				</SocialMedia>
			</Box>
		</Section>
	</Theme>;
});