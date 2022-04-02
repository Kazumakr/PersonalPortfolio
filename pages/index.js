import About from "../components/About/About";
import Contact from "../components/Contact/Contact";
import Hero from "../components/Hero/Hero";
import Skills from "../components/Skills/Skills";
import Work from "../components/Work/Work";
import Layout from "../layout/Layout";

import { getPaginatedWork } from "../lib/api";

import PreviewAlert from "../components/PreviewAlert/PreviewAlert";
export default function Home({ works, preview }) {
	return (
		<Layout>
			{preview && <PreviewAlert />}
			<Hero />
			<About />
			<Skills />
			<Work works={works} />
			<Contact />
		</Layout>
	);
}

export async function getStaticProps({ preview = false }) {
	const works = await getPaginatedWork({ offset: 0 });
	return {
		props: {
			works,
			preview,
		},
	};
}
