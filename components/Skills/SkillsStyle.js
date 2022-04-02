import styled from "styled-components";
import { FiDatabase } from "react-icons/fi";
import { SiJavascript, SiReact } from "react-icons/si";

export const Container = styled.div`
	margin: 0 auto;
	max-width: 1000px;
	box-sizing: content-box;
	margin-bottom: 80px;
	padding-top: 50px;
	@media ${(props) => props.theme.breakpoints.sm} {
		margin-bottom: 10px;
	}
`;
export const Wrapper = styled.div`
	display: flex;
	justify-content: space-around;
	@media ${(props) => props.theme.breakpoints.sm} {
		flex-direction: column;
		align-items: center;
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
export const SkillSection = styled.div``;
export const TextContainer = styled.div`
	display: flex;
	align-items: center;
	margin-bottom: 10px;
`;
export const Text = styled.p`
	font-size: 36px;
	font-weight: 600;
	@media ${(props) => props.theme.breakpoints.md} {
		font-size: 28px;
	}
`;

export const List = styled.ul`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-bottom: 20px;
`;
export const ListItem = styled.li`
	margin: 5px 0;
	font-size: 18px;
`;

export const JavaScriptIcon = styled(SiJavascript)`
	font-size: 36px;
	margin-right: 10px;
	@media ${(props) => props.theme.breakpoints.md} {
		font-size: 28px;
	}
`;
export const ReactIcon = styled(SiReact)`
	font-size: 36px;
	margin-right: 10px;
	@media ${(props) => props.theme.breakpoints.md} {
		font-size: 28px;
	}
`;
export const DbIcon = styled(FiDatabase)`
	font-size: 36px;
	margin-right: 10px;
	@media ${(props) => props.theme.breakpoints.md} {
		font-size: 28px;
	}
`;
