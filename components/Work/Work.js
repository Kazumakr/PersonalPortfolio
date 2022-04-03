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

import { urlFor } from "../../lib/api";
import { useGetWorksPages } from "../../actions/pagination";

const WorkList = ({ data }) => {
	return data.map((page) =>
		page.map((work, index) => (
			<WorkSection key={index}>
				<Left>
					{work.projectlink ? (
						<Link href={work.projectlink} passHref>
							<NavLink target="_blank">
								<Title>{work.title}</Title>
							</NavLink>
						</Link>
					) : (
						<Link href="/work/[slug]" as={`/work/${work.slug}`}>
							<NavLink>
								<Title>{work.title}</Title>
							</NavLink>
						</Link>
					)}
					<Desc>{work.description}</Desc>
					<Tech>{work.tech}</Tech>
					<Link href="/work/[slug]" as={`/work/${work.slug}`}>
						<NavLink>
							<Button>
								<ButtonText>Learn More</ButtonText>
							</Button>
						</NavLink>
					</Link>
					<IconContainer>
						{work.githublink && (
							<Link href={work.githublink} passHref>
								<NavLink target="_blank">
									<Github />
								</NavLink>
							</Link>
						)}
						{work.mediumlink && (
							<Link href={work.mediumlink} passHref>
								<NavLink target="_blank">
									<Medium />
								</NavLink>
							</Link>
						)}
						{work.projectlink && (
							<Link href={work.projectlink} passHref>
								<NavLink target="_blank">
									<LinkIcon />
								</NavLink>
							</Link>
						)}
					</IconContainer>
				</Left>
				<Right>
					{work.projectlink ? (
						<Link href={work.projectlink} passHref>
							<NavLink target="_blank">
								<Img
									src={urlFor(work.image)
										.height(400)
										.crop("center")
										.fit("clip")
										.url()}
								/>
							</NavLink>
						</Link>
					) : (
						<Link href="/work/[slug]" as={`/work/${work.slug}`}>
							<NavLink>
								<Img
									src={urlFor(work.image)
										.height(400)
										.crop("center")
										.fit("clip")
										.url()}
								/>
							</NavLink>
						</Link>
					)}
				</Right>
			</WorkSection>
		))
	);
};

const Work = ({ works }) => {
	const { data } = useGetWorksPages({
		works,
		limit: 3,
	});
	return (
		<Container id="work">
			<SectionDivider>
				<SectionTitle>Work</SectionTitle>
				<Hr />
			</SectionDivider>
			<Wrapper>
				<WorkList data={data || [works]} />
				<Link href="/work/WorkList">
					<NavLink>
						<Button>
							<ButtonText>View More</ButtonText>
						</Button>
					</NavLink>
				</Link>
			</Wrapper>
		</Container>
	);
};

export default Work;
