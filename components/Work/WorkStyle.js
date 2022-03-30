import styled from "styled-components";
import { FaGithub, FaExternalLinkAlt, FaMedium } from "react-icons/fa";

export const Container = styled.div`
	margin: 0 auto;
	max-width: 1000px;
	box-sizing: content-box;
	margin-bottom: 50px;
	padding-top: 50px;
`;
export const Wrapper = styled.div`
	width: 90%;
	margin: 0 auto;
`;
export const WorkSection = styled.div`
	display: flex;
	justify-content: space-between;
	margin: 100px 0 100px 0;
	@media ${(props) => props.theme.breakpoints.md} {
		flex-direction: column-reverse;
		align-items: center;
		margin: 100px 0 50px 0;
	}
`;

export const SectionDivider = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin: 80px auto;
	@media ${(props) => props.theme.breakpoints.lg} {
		width: 90%;
	}
`;
export const SectionTitle = styled.h2`
	font-weight: 700;
	font-size: 48px;
	line-height: 56px;
	@media ${(props) => props.theme.breakpoints.md} {
		font-size: 36px;
	}
`;
export const Hr = styled.hr`
	width: 80%;
`;
export const Left = styled.div`
	display: flex;
	flex-direction: column;
	@media ${(props) => props.theme.breakpoints.md} {
		align-items: center;
	}
`;
export const Right = styled.div`
	display: flex;
	justify-content: center;
`;
export const Title = styled.h2`
	font-size: 36px;
	font-weight: 600;
	margin-bottom: 10px;
	margin-top: 15px;
	&:hover {
		text-decoration: underline;
	}
	@media ${(props) => props.theme.breakpoints.sm} {
		font-size: 28px;
	}
`;
export const Desc = styled.p`
	font-weight: 300;
	max-width: 380px;
	font-size: 24px;
	line-height: 40px;
	margin-bottom: 10px;
	@media ${(props) => props.theme.breakpoints.md} {
		width: 80%;
	}
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
`;
export const Button = styled.button`
	width: 150px;
	padding: 10px;
	background: none;
	border: 2px solid black;
	border-radius: 10px;
	transition: all ease 0.2s;

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
`;
export const IconContainer = styled.div`
	display: flex;
	justify-content: space-between;
	width: 150px;
	margin-top: 15px;
`;
export const Img = styled.img`
	width: 500px;
	height: 100%;
	border-radius: 10px;
	object-fit: cover;
	transition: all ease 0.5s;
	&:hover {
		transform: scale(1.1);
		cursor: pointer;
	}
	@media ${(props) => props.theme.breakpoints.sm} {
		width: 100%;
	}
`;
export const Github = styled(FaGithub)`
	font-size: 28px;
	&:hover {
		opacity: 0.5;
		transform: scale(1.2);
		cursor: pointer;
	}
`;

export const Medium = styled(FaMedium)`
	font-size: 28px;
	&:hover {
		opacity: 0.5;
		transform: scale(1.2);
		cursor: pointer;
	}
`;

export const LinkIcon = styled(FaExternalLinkAlt)`
	font-size: 28px;
	&:hover {
		opacity: 0.5;
		transform: scale(1.2);
		cursor: pointer;
	}
`;

export const NavLink = styled.a`
	color: black;
`;
