import React from "react";
import Link from "next/link";

import { urlFor } from "../../lib/api";
import {
	Container,
	Wrapper,
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
} from "./WorkListStyle";
const WorkList = ({ works }) => {
	return (
		<Container>
			<SectionDivider>
				<SectionTitle>Work</SectionTitle>
				<Hr />
			</SectionDivider>
			<Wrapper>
				{works.map((work, index) => (
					<WorkCard key={index}>
						<Img
							src={urlFor(work.image)
								.height(400)
								.crop("center")
								.fit("clip")
								.url()}
						/>
						<Title>{work.title}</Title>
						<Desc>{work.description}</Desc>
						<Tech>{work.tech}</Tech>
						<LinkContainer>
							<Button>
								<ButtonText>Learn More</ButtonText>
							</Button>
							<IconContainer>
								<Link href={work.githublink} passHref>
									<NavLink target="_blank">
										<Github />
									</NavLink>
								</Link>
								<Link href={work.githublink} passHref>
									<NavLink target="_blank">
										<Medium />
									</NavLink>
								</Link>
								<Link href={work.projectlink} passHref>
									<NavLink target="_blank">
										<LinkIcon />
									</NavLink>
								</Link>
							</IconContainer>
						</LinkContainer>
					</WorkCard>
				))}
			</Wrapper>
		</Container>
	);
};

export default WorkList;
