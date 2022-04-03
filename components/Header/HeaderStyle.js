import styled from "styled-components";

export const Container = styled.div`
	display: flex;
	justify-content: space-between;
	padding: 30px 0;
	position: sticky;
	top: 0;
	z-index: 3;
	background-color: white;
	box-shadow: 0px 15px 10px -15px rgba(149, 157, 165, 0.2);
	@media ${(props) => props.theme.breakpoints.sm} {
		padding: 15px 0;
	}
	li {
		list-style: none;
	}
`;
export const Left = styled.div``;

export const Logo = styled.span`
	font-size: 36px;
	font-weight: 900;
	line-height: 32px;
	margin-left: 20px;
	&:hover {
		cursor: pointer;
	}
`;

export const Right = styled.div`
	width: 400px;
	display: flex;
	justify-content: space-between;
	@media ${(props) => props.theme.breakpoints.md} {
		justify-content: flex-end;
	}
`;
export const NavList = styled.ul`
	display: flex;
	justify-content: space-between;
	margin-right: 20px;
	width: 100%;
	@media ${(props) => props.theme.breakpoints.md} {
		display: none;
	}
`;
export const NavLink = styled.a`
	font-size: 2rem;
	line-height: 32px;
	color: black;
	&:hover {
		text-decoration: underline;
		cursor: pointer;
	}
`;

export const HamburgerContainer = styled.div`
	width: 3rem;
	height: 3rem;
	display: none;
	justify-content: space-around;
	flex-flow: column nowrap;
	z-index: 20;
	margin-right: 20px;

	@media ${(props) => props.theme.breakpoints.md} {
		display: flex;
		justify-content: space-around;
		flex-flow: column nowrap;
	}

	div {
		width: 3rem;
		height: 0.25rem;
		background-color: black;
		border-radius: 10px;
		transform-origin: 1px;
		transition: all 0.3s linear;

		&:nth-child(1) {
			transform: ${({ open }) => (open ? "rotate(45deg)" : "rotate(0)")};
		}
		&:nth-child(2) {
			transform: ${({ open }) => (open ? "translateX(100%)" : "translateX(0)")};
			opacity: ${({ open }) => (open ? 0 : 1)};
		}
		&:nth-child(3) {
			transform: ${({ open }) => (open ? "rotate(-45deg)" : "rotate(0)")};
		}
	}
`;

export const MobileNavList = styled.ul`
	display: none;
	flex-flow: column nowrap;
	justify-content: space-around;
	align-items: center;
	list-style: none;
	margin: 0;
	padding: 0;
	background-color: white;
	position: fixed;
	transform: ${({ open }) => (open ? "translateX(0%)" : "translateX(100%)")};
	top: 40px;
	right: 0;
	height: 250px;
	width: 100%;
	transition: transform 0.3s ease-in-out;
	z-index: 2;

	@media ${(props) => props.theme.breakpoints.md} {
		display: flex;
		top: 90px;
	}
	@media ${(props) => props.theme.breakpoints.sm} {
		top: 60px;
	}

	li {
		&:hover {
			opacity: 0.7;
		}
	}
`;

export const MobileNavLink = styled.a`
	display: block;
	height: 40px;
	width: 100vw;
	text-align: center;
	color: black;
`;
export const Blur = styled.div`
	display: none;

	margin: 0;
	padding: 0;
	background-color: #f8f8ff;
	position: fixed;
	transform: ${({ open }) => (open ? "translateX(0%)" : "translateX(100%)")};
	top: 40px;
	right: 0;
	height: 100vh;
	width: 100%;
	transition: transform 0.3s ease-in-out;
	z-index: 1;
	opacity: 0.7;
	filter: blur(2px);
	@media ${(props) => props.theme.breakpoints.md} {
		display: flex;
		top: 200px;
	}
`;
