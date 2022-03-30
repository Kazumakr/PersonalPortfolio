import React from "react";
import Link from "next/link";

import {
	Container,
	Wrapper,
	SectionDivider,
	SectionTitle,
	Hr,
	Title,
	Text,
	Button,
	ButtonText,
} from "./ContactStyle";

const Contact = () => {
	return (
		<Container id="contact">
			<SectionDivider>
				<SectionTitle>Contact</SectionTitle>
				<Hr />
			</SectionDivider>
			<Wrapper>
				<Title>Get In Touch</Title>
				<Text>
					I’m currently looking for any new opportunities. If you are interested
					in me, please feel free to contact me!
				</Text>
				<Link href={"mailto:kazumakuramoto.jp@gmail.com"}>
					<Button>
						<ButtonText>Send Email</ButtonText>
					</Button>
				</Link>
			</Wrapper>
		</Container>
	);
};

export default Contact;
