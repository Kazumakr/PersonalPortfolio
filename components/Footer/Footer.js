import React from "react";
import Link from "next/link";

import {
	Container,
	IconContainer,
	Copy,
	Github,
	Medium,
	Linkedin,
	NavLink,
} from "./FooterStyle";

const Footer = () => {
	return (
		<Container>
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
			<Copy>&copy;2022 Kazuma Kuramoto</Copy>
		</Container>
	);
};

export default Footer;
