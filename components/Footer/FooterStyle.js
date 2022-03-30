import styled from "styled-components";
import { FaGithub, FaLinkedin, FaMedium } from "react-icons/fa";

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 50px 0;
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

export const Copy = styled.span`
	font-size: 18px;
	margin-top: 15px;
`;

export const NavLink = styled.a`
	color: black;
`;
