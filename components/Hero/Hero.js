import React from "react";
import Link from "next/link";

import {
	Container,
	Wrapper,
	Text,
	Title,
	SubTitle,
	Desc,
	Button,
	ButtonText,
	LinkSection,
	IconContainer,
	Github,
	Medium,
	Linkedin,
	NavLink,
} from "./HeroStyle";

const Hero = () => {
	return (
		<Container>
			<Wrapper>
				<Text>Hi, My name is</Text>
				<Title>Kazuma Kuramoto</Title>
				<SubTitle>Web Developer</SubTitle>
				<Desc>
					I'm passionate about creating modern web applications and I want to
					use technology to make the world more convenient and enjoyable.Feel
					free to contact me!
				</Desc>
				<LinkSection>
					<Link href="KazumaKuramoto_Resume.pdf" passHref>
						<NavLink target="_blank">
							<Button>
								<ButtonText>Resume</ButtonText>
							</Button>
						</NavLink>
					</Link>
					<IconContainer>
						<Link href="https://github.com/Kazumakr" passHref>
							<NavLink target="_blank">
								<Github />
							</NavLink>
						</Link>
						<Link href="https://medium.com/@kazumajs" passHref>
							<NavLink target="_blank">
								<Medium />
							</NavLink>
						</Link>
						<Link href="https://www.linkedin.com/in/kazumakuramoto/" passHref>
							<NavLink target="_blank">
								<Linkedin />
							</NavLink>
						</Link>
					</IconContainer>
				</LinkSection>
			</Wrapper>
		</Container>
	);
};

export default Hero;
