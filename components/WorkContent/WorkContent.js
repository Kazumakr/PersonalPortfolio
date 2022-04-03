import BlockContent from "@sanity/block-content-to-react";
import HighlightCode from "../../components/HighlightCode/HighlightCode";

import { urlFor } from "../../lib/api";
import { Container, Img } from "./WorkContentStyle";

const serializers = {
	types: {
		code: ({ node: { language, code, filename } }) => {
			return (
				<div style={{ margin: "20px auto", fontSize: "18px" }}>
					<div className="code-filename">{filename}</div>
					<HighlightCode language={language}>{code}</HighlightCode>
				</div>
			);
		},
		image: ({ node: { asset, alt, position = "center" } }) => {
			let style = {};
			if (position === "left") {
				style.float = position;
				style.marginRight = "30px";
			}

			if (position === "right") {
				style.float = position;
				style.marginLeft = "30px";
			}
			if (position === "center") {
				style.margin = "30px auto";
				style.textAlign = "center";
			}

			return (
				<div style={{ ...style }}>
					<Img src={urlFor(asset).height(300).fit("max").url()} />
					<div>{alt}</div>
				</div>
			);
		},
	},
};

const WorkContent = ({ content }) => (
	<Container>
		<BlockContent serializers={serializers} blocks={content} />
	</Container>
);

export default WorkContent;
