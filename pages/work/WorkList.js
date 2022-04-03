import React from "react";
import Layout from "../../layout/Layout";
import Link from "next/link";

import { getPaginatedWork, urlFor } from "../../lib/api";
import { useGetWorksPages } from "../../actions/pagination";

import {
	Container,
	Wrapper,
	WorkSection,
	Left,
	Right,
	TextSection,
	IconSection,
	Title,
	Desc,
	Tech,
	Button,
	IconContainer,
	Img,
	PageTitle,
	Github,
	Medium,
	LinkIcon,
	NavLink,
	ButtonText,
} from "../../styles/WorkListStyle";

const WorkListCard = ({ data }) => {
	return (
		<Container>
			{data.map((page) =>
				page.map((work, index) => (
					<WorkSection key={index}>
						<Left>
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
								<Link href="/work/[slug]" as={`/work/${work.slug}`} passHref>
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
						</Left>
						<Right>
							<TextSection>
								{work.projectlink ? (
									<Link href={work.projectlink} passHref>
										<NavLink target="_blank">
											<Title>{work.title}</Title>
										</NavLink>
									</Link>
								) : (
									<Link href="/work/[slug]" as={`/work/${work.slug}`} passHref>
										<NavLink>
											<Title>{work.title}</Title>
										</NavLink>
									</Link>
								)}
								<Desc>{work.description}</Desc>
								<Tech>{work.tech}</Tech>
							</TextSection>
							<IconSection>
								<Link href="/work/[slug]" as={`/work/${work.slug}`} passHref>
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
							</IconSection>
						</Right>
					</WorkSection>
				))
			)}
		</Container>
	);
};
const WorkList = ({ works }) => {
	const { data, size, setSize, hitEnd } = useGetWorksPages({
		works,
		limit: 6,
	});

	return (
		<Layout>
			<Wrapper>
				<PageTitle>Work</PageTitle>
				<WorkListCard data={data || [works]} />
				{hitEnd ? null : (
					<Button onClick={() => setSize(size + 1)} disabled={hitEnd}>
						<ButtonText>Load More</ButtonText>
					</Button>
				)}
			</Wrapper>
		</Layout>
	);
};

export default WorkList;

export async function getStaticProps({ preview = false }) {
	const works = await getPaginatedWork({ offset: 0, limit: 2 });
	return {
		props: {
			works,
			preview,
		},
	};
}
