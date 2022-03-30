import React from "react";
import {
	Container,
	Wrapper,
	SectionDivider,
	SectionTitle,
	Hr,
	Left,
	Right,
	Img,
	Title,
	Text,
	Button,
} from "./AboutStyle";

const About = () => {
	return (
		<Container id="about">
			<SectionDivider>
				<SectionTitle>About</SectionTitle>
				<Hr />
			</SectionDivider>
			<Wrapper>
				<Left>
					<Img src="/images/profile.jpg" />
				</Left>
				<Right>
					<Title>Thank you for stopping by</Title>
					<Text>
						I'm passionate about creating modern web applications and I want to
						use technology to make the world more convenient and enjoyable.Feel
						free to cantact me!
					</Text>
					<Button>Resume</Button>
				</Right>
			</Wrapper>
		</Container>
	);
};

export default About;
