import styled from "styled-components";
export const Container = styled.div`
	margin: 0 auto;
	max-width: 1000px;
	box-sizing: content-box;
	margin-bottom: 50px;
	padding-top: 50px;
`;
export const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
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

export const Title = styled.h2`
	font-size: 36px;
	font-weight: 600;
	margin-bottom: 10px;
	@media ${(props) => props.theme.breakpoints.sm} {
		font-size: 28px;
	}
`;
export const Text = styled.p`
	font-weight: 300;
	max-width: 800px;
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
