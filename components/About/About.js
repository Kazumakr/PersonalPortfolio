import React from "react";
import Link from "next/link";

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
	NavLink,
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
						Hi, I'm Kazuma Kuramoto. I'm from Japan, now in Vancouver. Currently
						I'm learning web development to make some ideas in my head come
						true. When I was a university student, I built a facial recognition
						program using machine learning, so I want to create something useful
						and innovative by combining what I have learned so far.
						<br />
						Check my
						<Link href="KazumaKuramoto_Resume.pdf" passHref>
							<NavLink target="_blank"> resume </NavLink>
						</Link>
						and my work.
					</Text>
				</Right>
			</Wrapper>
		</Container>
	);
};

export default About;
