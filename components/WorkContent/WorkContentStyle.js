import styled from "styled-components";

export const Img = styled.img`
	@media ${(props) => props.theme.breakpoints.sm} {
		width: 100%;
	}
`;
export const Container = styled.div`
	font-size: 24px;
	@media ${(props) => props.theme.breakpoints.sm} {
		font-size: 18px;
	}
	h1 {
		@media ${(props) => props.theme.breakpoints.sm} {
			font-size: 24px;
		}
	}
	p {
		line-height: 30px;
	}
	ol {
		list-style-position: inside;
		margin: 10px 0;
	}
	ul {
		list-style-position: inside;
		margin: 10px 0;
	}
`;
