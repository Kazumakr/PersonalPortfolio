import styled from "styled-components";
import { FaGithub, FaExternalLinkAlt, FaMedium } from "react-icons/fa";

export const Container = styled.div`
	margin: 0 auto;
	max-width: 1000px;
	box-sizing: content-box;
	display: flex;
	flex-direction: column;
	width: 80%;
	@media ${(props) => props.theme.breakpoints.sm} {
		font-size: 18px;
	}
`;

export const Img = styled.img`
	width: 90%;
	height: 100%;
	margin: 10px auto;
`;

export const Title = styled.h1`
	font-size: 38px;
	@media ${(props) => props.theme.breakpoints.sm} {
		font-size: 28px;
	}
`;
export const Desc = styled.p`
	font-weight: 300;
	font-size: 24px;
	line-height: 40px;
	margin-bottom: 10px;
	@media ${(props) => props.theme.breakpoints.sm} {
		font-size: 18px;
		line-height: 30px;
	}
`;
export const Tech = styled.span`
	font-weight: 300;
	max-width: 800px;
	font-size: 20px;
	line-height: 35px;
	margin-bottom: 10px;
	color: rgba(0, 0, 0, 0.5);
	word-break: break-all;
	@media ${(props) => props.theme.breakpoints.sm} {
		font-size: 18px;
		line-height: 30px;
		width: 80%;
		word-break: break-all;
	}
`;

export const ButtonText = styled.span`
	position: relative;
	color: black;
	font-size: 18px;
	z-index: 2;
	@media ${(props) => props.theme.breakpoints.sm} {
		font-size: 15px;
	}
`;
export const Button = styled.button`
	width: 180px;
	padding: 10px;
	background: none;
	border: 2px solid black;
	border-radius: 10px;
	transition: all ease 0.2s;
	margin-bottom: 20px;

	position: relative;
	overflow: hidden;

	&::before {
		content: "" "";
		position: absolute;
		bottom: 0;
		left: 0;
		z-index: 1;
		background: black;
		width: 100%;
		height: 0;

		transition: 0.3s cubic-bezier(0.8, 0, 0.2, 1) 0s;
	}
	&:hover {
		cursor: pointer;
		${ButtonText} {
			color: white;
		}
		::before {
			height: 100%;
		}
	}
	@media ${(props) => props.theme.breakpoints.sm} {
		width: 150px;
		padding: 7px;
	}
`;

export const NavLink = styled.a`
	color: black;
`;

export const IconContainer = styled.div`
	display: flex;
	justify-content: space-between;
	width: 150px;
	margin-top: 15px;
	align-self: flex-end;
`;
export const Github = styled(FaGithub)`
	font-size: 28px;
	&:hover {
		opacity: 0.5;
		transform: scale(1.2);
		cursor: pointer;
	}
	@media ${(props) => props.theme.breakpoints.sm} {
		font-size: 24px;
	}
`;

export const Medium = styled(FaMedium)`
	font-size: 28px;
	&:hover {
		opacity: 0.5;
		transform: scale(1.2);
		cursor: pointer;
	}
	@media ${(props) => props.theme.breakpoints.sm} {
		font-size: 24px;
	}
`;

export const LinkIcon = styled(FaExternalLinkAlt)`
	font-size: 28px;
	&:hover {
		opacity: 0.5;
		transform: scale(1.2);
		cursor: pointer;
	}
	@media ${(props) => props.theme.breakpoints.sm} {
		font-size: 24px;
	}
`;
