import Link from "next/link";
import React from "react";
import { Container } from "./PreviewAlertStyle";
const PreviewAlert = () => {
	return (
		<Container>
			This is the preview mode.
			<Link href="/api/exit-preview">Exit preview mode</Link>
		</Container>
	);
};

export default PreviewAlert;
