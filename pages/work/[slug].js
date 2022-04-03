import React from "react";
import Layout from "../../layout/Layout";
import Link from "next/link";

import { getWorkBySlug, getAllWork, urlFor } from "../../lib/api";
import WorkContent from "../../components/WorkContent/WorkContent";
import {
	Container,
	Desc,
	Img,
	Tech,
	Title,
	NavLink,
	Button,
	ButtonText,
	IconContainer,
	Github,
	Medium,
	LinkIcon,
} from "../../styles/WorkPageStyle";
import PreviewAlert from "../../components/PreviewAlert/PreviewAlert";
import { useRouter } from "next/router";
import ErrorPage from "next/error";

const WorkDetail = ({ work, preview }) => {
	const router = useRouter();
	if (!router.isFallback && !work?.slug) {
		return <ErrorPage statusCode="404" />;
	}

	if (router.isFallback) {
		return <Layout>Loading...</Layout>;
	}
	return (
		<Layout>
			<Container>
				{preview && <PreviewAlert />}
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
				<Title>{work.title}</Title>
				<Desc>{work.description}</Desc>
				<Tech>{work.tech}</Tech>
				{work.projectlink && (
					<Link href={work.projectlink} passHref>
						<Button target="_blank">
							<ButtonText>Visit the website</ButtonText>
						</Button>
					</Link>
				)}
				{work.image && <Img src={urlFor(work.image).height(400).url()} />}
				{work.content && <WorkContent content={work.content} />}
			</Container>
		</Layout>
	);
};

export async function getStaticProps({ params, preview = false, previewData }) {
	const work = await getWorkBySlug(params.slug, preview);
	return {
		props: { work, preview },
		revalidate: 1,
	};
}

export async function getStaticPaths() {
	const works = await getAllWork();
	const paths = works?.map((work) => ({ params: { slug: work.slug } }));
	return {
		paths,
		fallback: true,
	};
}

export default WorkDetail;
