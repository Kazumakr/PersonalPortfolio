import React from "react";
import Link from "next/link";

import {
	Container,
	Wrapper,
	WorkSection,
	Left,
	Right,
	Title,
	Desc,
	Tech,
	Button,
	IconContainer,
	Img,
	SectionDivider,
	SectionTitle,
	Hr,
	Github,
	Medium,
	LinkIcon,
	NavLink,
	ButtonText,
} from "./WorkStyle";

const Work = () => {
	return (
		<Container id="work">
			<SectionDivider>
				<SectionTitle>Work</SectionTitle>
				<Hr />
			</SectionDivider>
			<Wrapper>
				<WorkSection>
					<Left>
						<Link href="https://quizzical-panini-3b7a85.netlify.app/" passHref>
							<NavLink target="_blank">
								<Title>OpenCloset</Title>
							</NavLink>
						</Link>
						<Desc>
							MERN stack project that allows users to manage items in a closet
							and share them with other users. It is mixed style of EC site and
							SNS.
						</Desc>
						<Tech>
							ReactJS/NodeJS/Express/MongoDB/Styled-Components/Heroku/Netlify
						</Tech>
						<Button>
							<ButtonText>Learn More</ButtonText>
						</Button>
						<IconContainer>
							<Link
								href="https://github.com/Kazumakr/MERN_OpenCloset_frontend"
								passHref
							>
								<NavLink target="_blank">
									<Github />
								</NavLink>
							</Link>
							<Medium />
							<Link
								href="https://quizzical-panini-3b7a85.netlify.app/"
								passHref
							>
								<NavLink target="_blank">
									<LinkIcon />
								</NavLink>
							</Link>
						</IconContainer>
					</Left>
					<Right>
						<Link href="https://quizzical-panini-3b7a85.netlify.app/" passHref>
							<NavLink target="_blank">
								<Img src="/images/OpenCloset.png" />
							</NavLink>
						</Link>
					</Right>
				</WorkSection>
				<WorkSection>
					<Left>
						<Link href="https://spiffy-puppy-816ccb.netlify.app/" passHref>
							<NavLink target="_blank">
								<Title>WorkoutManager</Title>
							</NavLink>
						</Link>
						<Desc>Created an application to help manage workout records.</Desc>
						<Tech>
							ReactJS/NodeJS/Sequelize/MySQL/Styled-Components/Heroku/Netlify
						</Tech>
						<Button>
							<ButtonText>Learn More</ButtonText>
						</Button>
						<IconContainer>
							<Link
								href="https://github.com/Kazumakr/WorkoutManager_frontend"
								passHref
							>
								<NavLink target="_blank">
									<Github />
								</NavLink>
							</Link>
							<Medium />
							<Link href="https://spiffy-puppy-816ccb.netlify.app/" passHref>
								<NavLink target="_blank">
									<LinkIcon />
								</NavLink>
							</Link>
						</IconContainer>
					</Left>
					<Right>
						<Link href="https://spiffy-puppy-816ccb.netlify.app/" passHref>
							<NavLink target="_blank">
								<Img src="/images/WorkoutManager.png" />
							</NavLink>
						</Link>
					</Right>
				</WorkSection>
				<WorkSection>
					<Left>
						<Link href="https://unruffled-jepsen-33fb63.netlify.app/" passHref>
							<NavLink target="_blank">
								<Title>OpenKitchen</Title>
							</NavLink>
						</Link>
						<Desc>
							A recipe blog for sharing cooking recipes using MERN stack.
						</Desc>
						<Tech>
							ReactJS/NodeJS/Express/MongoDB/Styled-Components/Heroku/Netlify
						</Tech>
						<Button>
							<ButtonText>Learn More</ButtonText>
						</Button>
						<IconContainer>
							<Link
								href="https://github.com/Kazumakr/MERN_OpenKitchen_front"
								passHref
							>
								<NavLink target="_blank">
									<Github />
								</NavLink>
							</Link>
							<Medium />
							<Link
								href="https://unruffled-jepsen-33fb63.netlify.app/"
								passHref
							>
								<NavLink target="_blank">
									<LinkIcon />
								</NavLink>
							</Link>
						</IconContainer>
					</Left>
					<Right>
						<Link href="https://unruffled-jepsen-33fb63.netlify.app/" passHref>
							<NavLink target="_blank">
								<Img src="/images/OpenKitchen.png" />
							</NavLink>
						</Link>
					</Right>
				</WorkSection>
			</Wrapper>
		</Container>
	);
};

export default Work;
