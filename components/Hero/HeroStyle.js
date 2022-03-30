import styled from "styled-components";
import { FaGithub, FaLinkedin, FaMedium } from "react-icons/fa";

export const Container = styled.div`
	display: flex;
	/* flex-direction: column; */
	justify-content: center;
	align-items: center;
	padding: 40px 0;
	height: 90vh;
	@media ${(props) => props.theme.breakpoints.sm} {
		height: 80vh;
	}
`;
export const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	@media ${(props) => props.theme.breakpoints.md} {
		width: 90%;
	}
`;
export const Text = styled.p`
	font-weight: 300;
	font-size: 28px;
	line-height: 40px;
	color: rgba(0, 0, 0, 0.5);
	@media ${(props) => props.theme.breakpoints.sm} {
		font-size: 22px;
		line-height: 30px;
	}
`;
export const Title = styled.h2`
	font-weight: 800;
	font-size: 65px;
	width: max-content;
	max-width: 100%;
	margin-bottom: 16px;
	@media ${(props) => props.theme.breakpoints.sm} {
		font-size: 34px;
	}
`;
export const SubTitle = styled.span`
	font-size: 56px;
	font-weight: 800;
	margin-bottom: 10px;
	@media ${(props) => props.theme.breakpoints.sm} {
		font-size: 32px;
	}
`;
export const Desc = styled.p`
	font-weight: 300;
	max-width: 800px;
	font-size: 24px;
	line-height: 40px;
	padding-bottom: 3.6rem;
	color: rgba(0, 0, 0, 0.5);
	@media ${(props) => props.theme.breakpoints.sm} {
		font-size: 18px;
		line-height: 30px;
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

	@media ${(props) => props.theme.breakpoints.sm} {
		width: 100px;
	}
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

export const LinkSection = styled.div`
	display: flex;
	justify-content: space-between;
`;

export const IconContainer = styled.div`
	display: flex;
	justify-content: space-between;
	width: 150px;
	margin-top: 15px;
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

export const Linkedin = styled(FaLinkedin)`
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
