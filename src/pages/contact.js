import React from "react";
import theme from "theme";
import { Theme, Image, Link, Button, Section, Text, Box, Input } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { Override, Formspree, SocialMedia } from "@quarkly/components";
import * as Components from "components";
import { MdMenu } from "react-icons/md";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"contact"} />
		<Helmet>
			<title>
				Contact | Website Example
			</title>
			<meta name={"description"} content={"It all begins with an idea. Maybe you want to launch a business. Maybe you want to turn a hobby into something bigger. Or maybe you have a creative project to share with the world. Whatever it is, the way you tell your story online can make all the difference."} />
			<meta property={"og:title"} content={"Contact | Website Example"} />
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
		<Section quarkly-title="Hero" padding="25px 0 75px 0" lg-padding="25px 0 25px 0" justify-content="center">
			<Override
				slot="SectionContent"
				width="100%"
				margin="0px 32px 0px 32px"
				md-margin="0px 16px 0px 16px"
				min-width="auto"
			/>
			<Box
				width="100%"
				min-height="480px"
				display="flex"
				align-items="center"
				justify-content="center"
				background="radial-gradient(at center,--color-darkL2 23.3%,rgba(0,0,0,0) 82.4%),linear-gradient(180deg,rgba(155, 108, 252, 0.15) 0%,transparent 100%) 0 0 no-repeat,--color-darkL2"
				md-min-height="360px"
				sm-min-height="180px"
			>
				<Text
					font="--headline1"
					margin="0px 0px 0px 0px"
					display="flex"
					align-items="center"
					color="--light"
					justify-content="center"
					quarkly-title="Title"
					sm-font="normal 900 42px/1.2 -apple-system, system-ui, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif"
					sm-text-align="center"
					text-align="center"
					md-font="--headline2"
					lg-font="--headline2"
				>
					Contact Us.
				</Text>
			</Box>
		</Section>
		<Section
			box-sizing="border-box"
			quarkly-title="Contacts"
			padding="50px 0px 50px 0px"
			lg-padding="25px 0px 25px 0px"
			justify-content="center"
		>
			<Override
				slot="SectionContent"
				min-width="auto"
				width="100%"
				margin="0px 32px 0px 32px"
				md-margin="0px 16px 0px 16px"
			/>
			<Box
				width="100%"
				display="grid"
				grid-gap="82px"
				grid-template-columns="7fr 3fr"
				md-grid-template-columns="1fr"
				md-grid-gap="40px"
				lg-grid-gap="36px"
			>
				<Box
					background="--color-lightD1"
					padding="48px 36px 54px 36px"
					border-width="1px"
					border-style="solid"
					border-color="--color-lightD2"
					display="flex"
					flex-direction="column"
				>
					<Text
						font="--headline3"
						margin="0px 0px 15px 0px"
						display="inline-block"
						quarkly-title="Title"
						md-font="--headline3"
					>
						Get in Touch.
					</Text>
					<Text
						font="--base"
						margin="0px 0px 28px 0px"
						display="inline-block"
						quarkly-title="Description"
						color="--dark"
						md-font="--base"
					>
						Feel free to contact us anytime. We'll get back to you as soon as possible!
					</Text>
					<Formspree
						errorMessage="Something went wrong"
						completeText="Success"
						endpoint="meqveqwr"
						display="flex"
						width="100%"
					>
						<Input
							name="email"
							placeholder="Email"
							margin-right="4px"
							width="66.66%"
							margin="0px 4px 10px 0px"
							required
							type="email"
							md-width="100%"
							lg-width="100%"
						/>
						<Input
							name="name"
							placeholder="Name"
							width="66.66%"
							margin="0px 4px 10px 0px"
							type="text"
							md-width="100%"
							lg-width="100%"
						/>
						<Input
							name="tel"
							placeholder="Phone"
							width="66.66%"
							margin="0px 4px 10px 0px"
							type="tel"
							md-width="100%"
							lg-width="100%"
						/>
						<Button width="66.66%" lg-width="100%">
							Submit
						</Button>
					</Formspree>
				</Box>
				<Box>
					<Box margin="0px 0px 36px 0px" xl-margin="0px 0px 24px 0px">
						<Text
							font="--base"
							letter-spacing="1px"
							margin="0px 0px 10px 0px"
							quarkly-title="Title"
							color="--dark"
							text-transform="uppercase"
							xl-margin="0px 0px 4px 0px"
						>
							Our location
						</Text>
						<Text
							font="--base"
							margin="0px 0px 0px 0px"
							display="inline-block"
							opacity="0.6"
							quarkly-title="Description"
							color="--dark"
						>
							4998 Hanover Street, New York, 10011
						</Text>
					</Box>
					<Box margin="0px 0px 36px 0px" quarkly-title="Working Hours" xl-margin="0px 0px 24px 0px">
						<Text
							font="--base"
							letter-spacing="1px"
							margin="0px 0px 10px 0px"
							quarkly-title="Title"
							color="--dark"
							text-transform="uppercase"
							xl-margin="0px 0px 4px 0px"
						>
							WORKING HOURS
						</Text>
						<Text
							font="--base"
							margin="0px 0px 0px 0px"
							display="inline-block"
							opacity="0.6"
							quarkly-title="Description"
							color="--dark"
						>
							6:00 a.m. - 10:00 p.m.
						</Text>
					</Box>
					<Box margin="0px 0px 36px 0px" quarkly-title="Contact" xl-margin="0px 0px 24px 0px">
						<Text
							font="--base"
							letter-spacing="1px"
							margin="0px 0px 10px 0px"
							quarkly-title="Title"
							color="--dark"
							text-transform="uppercase"
							xl-margin="0px 0px 4px 0px"
						>
							Contact us
						</Text>
						<Link
							href="mailto:hello@company.com"
							color="--dark"
							opacity="0.6"
							target="_blank"
							quarkly-title="Email"
							overflow-wrap="normal"
							word-break="normal"
							white-space="normal"
							text-indent="0"
							text-overflow="clip"
							hyphens="manual"
							transition="opacity .15s ease 0s"
							hover-opacity="0.6"
							font="--base"
							text-decoration-line="initial"
							hover-text-decoration-line="underline"
						>
							hello@company.com
						</Link>
					</Box>
					<Box margin="0px 0px 36px 0px" quarkly-title="Working Hours" xl-margin="0px 0px 24px 0px">
						<Text
							font="--base"
							letter-spacing="1px"
							margin="0px 0px 10px 0px"
							quarkly-title="Title"
							color="--dark"
							text-transform="uppercase"
							xl-margin="0px 0px 4px 0px"
						>
							Call us
						</Text>
						<Link
							href="tel:+1(234)567-89-00"
							target="_blank"
							quarkly-title="Phone"
							overflow-wrap="normal"
							word-break="normal"
							white-space="normal"
							text-indent="0"
							text-overflow="clip"
							hyphens="manual"
							display="block"
							color="--dark"
							text-decoration-line="initial"
							hover-opacity=".5"
							opacity="0.6"
							transition="opacity .15s ease 0s"
							font="--base"
						>
							+1(234)567-89-00
						</Link>
					</Box>
					<Text
						font="--lead"
						display="inline-block"
						quarkly-title="Description"
						color="--dark"
						text-align="center"
						background="--color-lightD1"
						padding="14px 24px 14px 24px"
						margin="0px 0px 0px 0px"
						xl-font="--base"
						md-display="block"
					>
						We're always happy to make valuable new contacts!
					</Text>
				</Box>
			</Box>
		</Section>
		<Section
			padding="50px 0px 50px 0px"
			quarkly-title="Team"
			box-sizing="border-box"
			lg-padding="25px 0px 25px 0px"
			justify-content="center"
		>
			<Override
				slot="SectionContent"
				align-items="center"
				sm-min-width="none"
				sm-justify-content="flex-start"
				sm-flex-direction="column"
				sm-align-items="flex-start"
				min-width="auto"
				width="100%"
				margin="0px 32px 0px 32px"
				md-margin="0px 16px 0px 16px"
			/>
			<Text
				text-align="center"
				font="--base"
				opacity="0.5"
				letter-spacing="1px"
				margin="0px 0px 10px 0px"
				color="--dark"
				text-transform="uppercase"
				lg-margin="0px 0px 6px 0px"
			>
				The team
			</Text>
			<Text
				font="--headline2"
				margin="0px 0px 55px 0px"
				color="--dark"
				text-align="center"
				width="100%"
				md-margin="0px 0px 16px 0px"
				lg-margin="0px 0px 30px 0px"
				md-font="--headline3"
				sm-text-align="left"
			>
				Meet Our Experts.
			</Text>
			<Box
				width="100%"
				quarkly-title="Card"
				display="grid"
				grid-template-columns="repeat(4, 1fr)"
				grid-gap="32px"
				lg-grid-template-columns="repeat(3, 1fr)"
				md-grid-template-columns="1fr"
			>
				<Box
					display="flex"
					flex-direction="column"
					lg-grid-column="1 / span 3"
					md-grid-column="auto / auto"
					md-flex-direction="row"
				>
					<Text
						font="--headline3"
						margin="0px 0px 8px 0px"
						text-align="left"
						color="--dark"
						quarkly-title="Name"
						md-font="--lead"
						sm-font="--base"
						lg-font="--lead"
						sm-margin="0px 0px 0px 0px"
					>
						We work every day to provide the best services and make our clients happy.
					</Text>
				</Box>
				<Box display="flex" flex-direction="column" md-flex-direction="row">
					<Box
						background="--color-lightD1 url(https://uploads.quarkly.io/5f44d0da669357001e60ed14/images/default-website-user-man.svg?v=2020-11-06T17:32:03.825Z) center center/100% no-repeat"
						width="100%"
						quarkly-title="Image"
						padding-bottom="(4 / 3) * 100%"
						padding="0px 0px 121% 0px"
						md-margin="0px 0px 0px 0px"
						hover-background="--color-lightD1 url(https://uploads.quarkly.io/5f44d0da669357001e60ed14/images/default-website-user-man.svg?v=2020-11-06T17:32:03.825Z) center center/110% no-repeat"
						transition="background --transitionDuration-normal --transitionTimingFunction-easeInOut 0s"
						md-width="200px"
						md-padding="0px 0px 0px 0px"
						md-height="250px"
						sm-height="auto"
					/>
					<Box
						md-width="50%"
						md-margin="0px 0px 0px 24px"
						md-display="flex"
						md-flex-direction="column"
						sm-margin="0px 0px 0px 0px"
						sm-width="100%"
						sm-padding="0px 0px 10% 18px"
					>
						<Text
							font="--headline3"
							margin="24px 0px 8px 0px"
							text-align="left"
							color="--dark"
							quarkly-title="Name"
							md-margin="0px 0px 4px 0px"
							sm-margin="0px 0px 4px 0px"
							md-font="--lead"
						>
							Nathan K. Joe
						</Text>
						<Text
							font="--base"
							margin="0px 0px 0px 0px"
							text-align="left"
							opacity="0.6"
							color="--dark"
							quarkly-title="Position"
							md-margin="0px 0px 0px 0px"
						>
							Founder
						</Text>
						<Text
							font="--base"
							margin="18px 0px 0px 0px"
							display="inline-block"
							opacity="0.6"
							quarkly-title="Contacts"
							text-align="left"
							color="--dark"
							sm-margin="10px 0px 0px 0px"
						>
							<Link
								href="mailto:head@company.com"
								color="--dark"
								opacity="0.6"
								target="_blank"
								quarkly-title="Email"
								overflow-wrap="normal"
								word-break="normal"
								white-space="normal"
								text-indent="0"
								text-overflow="clip"
								hyphens="manual"
								transition="opacity .15s ease 0s"
								font="--base"
								text-decoration-line="initial"
								hover-text-decoration-line="underline"
							>
								head@company.com
							</Link>
							<Link
								href="tel:+1(234)567-89-01"
								target="_blank"
								quarkly-title="Phone"
								overflow-wrap="normal"
								word-break="normal"
								white-space="normal"
								text-indent="0"
								text-overflow="clip"
								hyphens="manual"
								display="block"
								color="--dark"
								text-decoration-line="initial"
								hover-opacity="1"
								opacity="1"
								transition="opacity .15s ease 0s"
								font="--base"
								hover-text-decoration-line="underline"
							>
								+1(234)567-89-01
							</Link>
						</Text>
					</Box>
				</Box>
				<Box display="flex" flex-direction="column" md-flex-direction="row">
					<Box
						background="--color-lightD1 url(https://uploads.quarkly.io/5f44d0da669357001e60ed14/images/default-website-user-woman.svg?v=2020-11-06T17:32:24.681Z) center center/100% no-repeat"
						width="100%"
						quarkly-title="Image"
						padding="0px 0px 121% 0px"
						md-margin="0px 0px 0px 0px"
						md-padding="0px 0px 0px 0px"
						md-width="200px"
						hover-background="--color-lightD1 url(https://uploads.quarkly.io/5f44d0da669357001e60ed14/images/default-website-user-woman.svg?v=2020-11-06T17:32:24.681Z) center center/110% no-repeat"
						transition="background --transitionDuration-normal --transitionTimingFunction-easeInOut 0s"
						md-height="250px"
						sm-height="auto"
					/>
					<Box
						md-margin="0px 0px 0px 24px"
						md-display="flex"
						md-flex-direction="column"
						md-width="50%"
						sm-margin="0px 0px 0px 0px"
						sm-width="100%"
						sm-padding="0px 0px 10% 18px"
					>
						<Text
							font="--headline3"
							margin="24px 0px 8px 0px"
							text-align="left"
							color="--dark"
							quarkly-title="Name"
							md-margin="0px 0px 4px 0px"
							md-font="--lead"
							sm-margin="0px 0px 4px 0px"
						>
							Claire R. Peery
						</Text>
						<Text
							font="--base"
							margin="0px 0px 0px 0px"
							text-align="left"
							opacity="0.6"
							color="--dark"
							quarkly-title="Position"
							md-margin="0px 0px 0px 0px"
						>
							Designer
						</Text>
						<Text
							font="--base"
							margin="18px 0px 0px 0px"
							display="inline-block"
							opacity="0.6"
							quarkly-title="Contacts"
							text-align="left"
							color="--dark"
							sm-margin="10px 0px 0px 0px"
						>
							<Link
								href="mailto:design@company.com"
								color="--dark"
								opacity="0.6"
								target="_blank"
								quarkly-title="Email"
								overflow-wrap="normal"
								word-break="normal"
								white-space="normal"
								text-indent="0"
								text-overflow="clip"
								hyphens="manual"
								transition="opacity .15s ease 0s"
								font="--base"
								text-decoration-line="initial"
								hover-text-decoration-line="underline"
							>
								design@company.com
							</Link>
							<Link
								href="tel:+1(234)567-89-02"
								target="_blank"
								quarkly-title="Phone"
								overflow-wrap="normal"
								word-break="normal"
								white-space="normal"
								text-indent="0"
								text-overflow="clip"
								hyphens="manual"
								display="block"
								color="--dark"
								text-decoration-line="initial"
								hover-opacity="1"
								opacity="1"
								transition="opacity .15s ease 0s"
								font="--base"
								hover-text-decoration-line="underline"
							>
								+1(234)567-89-02
							</Link>
						</Text>
					</Box>
				</Box>
				<Box display="flex" flex-direction="column" md-flex-direction="row">
					<Box
						background="--color-lightD1 url(https://uploads.quarkly.io/5f44d0da669357001e60ed14/images/default-website-user-man.svg?v=2020-11-06T17:32:03.825Z) center center/100% no-repeat"
						width="100%"
						quarkly-title="Image"
						padding="0px 0px 121% 0px"
						md-margin="0px 0px 0px 0px"
						md-padding="0px 0px 0px 0px"
						md-width="200px"
						hover-background="--color-lightD1 url(https://uploads.quarkly.io/5f44d0da669357001e60ed14/images/default-website-user-man.svg?v=2020-11-06T17:32:03.825Z) center center/110% no-repeat"
						transition="background --transitionDuration-normal --transitionTimingFunction-easeInOut 0s"
						md-height="250px"
						sm-height="auto"
					/>
					<Box
						md-margin="0px 0px 0px 24px"
						md-display="flex"
						md-flex-direction="column"
						md-width="50%"
						sm-margin="0px 0px 0px 0px"
						sm-width="100%"
						sm-padding="0px 0px 10% 18px"
					>
						<Text
							font="--headline3"
							margin="24px 0px 8px 0px"
							color="--dark"
							quarkly-title="Name"
							md-margin="0px 0px 4px 0px"
							md-font="--lead"
							sm-margin="0px 0px 4px 0px"
						>
							David R. Lema
						</Text>
						<Text
							font="--base"
							margin="0px 0px 0px 0px"
							opacity="0.6"
							color="--dark"
							quarkly-title="Position"
							md-margin="0px 0px 0px 0px"
						>
							Developer
						</Text>
						<Text
							font="--base"
							margin="18px 0px 0px 0px"
							display="inline-block"
							opacity="0.6"
							quarkly-title="Contacts"
							color="--dark"
							sm-margin="10px 0px 0px 0px"
						>
							<Link
								href="mailto:dev@company.com"
								color="--dark"
								opacity="0.6"
								target="_blank"
								quarkly-title="Email"
								overflow-wrap="normal"
								word-break="normal"
								white-space="normal"
								text-indent="0"
								text-overflow="clip"
								hyphens="manual"
								transition="opacity .15s ease 0s"
								font="--base"
								text-decoration-line="initial"
								hover-text-decoration-line="underline"
							>
								dev@company.com
							</Link>
							<Link
								href="tel:+1(234)567-89-03"
								target="_blank"
								quarkly-title="Phone"
								overflow-wrap="normal"
								word-break="normal"
								white-space="normal"
								text-indent="0"
								text-overflow="clip"
								hyphens="manual"
								display="block"
								color="--dark"
								text-decoration-line="initial"
								hover-opacity="1"
								opacity="1"
								transition="opacity .15s ease 0s"
								font="--base"
								hover-text-decoration-line="underline"
							>
								+1(234)567-89-03
							</Link>
						</Text>
					</Box>
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
				display="flex"
				align-items="center"
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
				margin="0px 32px 0px 32px"
				md-margin="0px 16px 0px 16px"
				min-width="auto"
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