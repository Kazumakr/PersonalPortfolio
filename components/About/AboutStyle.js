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
	justify-content: space-around;
	@media ${(props) => props.theme.breakpoints.md} {
		flex-direction: column;
		align-items: center;
	}
`;
export const Left = styled.div`
	display: flex;
	justify-content: center;
`;
export const Right = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`;
export const Img = styled.img`
	width: 300px;
	height: 400px;
	border-radius: 10px;
	object-fit: cover;
	@media ${(props) => props.theme.breakpoints.sm} {
		width: 80%;
		height: 100%;
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
export const Title = styled.span`
	font-weight: 800;
	font-size: 36px;
	margin: 20px 0;
	@media ${(props) => props.theme.breakpoints.sm} {
		font-size: 24px;
	}
`;
export const Text = styled.p`
	max-width: 600px;
	font-size: 24px;
	line-height: 40px;
	font-weight: 300;
	padding-bottom: 3.6rem;
	color: rgba(0, 0, 0, 0.5);
	@media ${(props) => props.theme.breakpoints.sm} {
		font-size: 18px;
		line-height: 30px;
		width: 80%;
	}
`;
export const Button = styled.button`
	width: 120px;
	padding: 10px;
	border: none;
	border-radius: 10px;
	font-size: 24px;
	color: white;
	background-color: black;
	&:hover {
		color: black;
		background-color: white;
		border: 1px solid black;
		cursor: pointer;
	}
`;

export const NavLink = styled.a`
	color: blue;
	&:hover {
		text-decoration: underline;
	}
`;
