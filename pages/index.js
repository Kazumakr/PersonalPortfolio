import About from "../components/About/About";
import Contact from "../components/Contact/Contact";
import Hero from "../components/Hero/Hero";
import Skills from "../components/Skills/Skills";
import Work from "../components/Work/Work";
import Layout from "../layout/Layout";

export default function Home() {
	return (
		<Layout>
			<Hero />
			<About />
			<Skills />
			<Work />
			<Contact />
		</Layout>
	);
}
