import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import {
	Container,
	Left,
	Right,
	Logo,
	NavList,
	NavLink,
	HamburgerContainer,
	MobileNavList,
	MobileNavLink,
	Blur,
} from "./HeaderStyle";

const Header = () => {
	const [open, setOpen] = useState(false);
	const ref = useRef();
	useEffect(() => {
		const ClickedOutside = (e) => {
			if (open && ref.current && !ref.current.contains(e.target)) {
				setOpen(false);
			}
		};
		document.addEventListener("mousedown", ClickedOutside);
		return () => {
			document.removeEventListener("mousedown", ClickedOutside);
		};
	}, [open]);

	return (
		<Container>
			<Left>
				<Link href="/">
					<Logo>KK</Logo>
				</Link>
			</Left>
			<Right ref={ref}>
				<NavList>
					<li>
						<Link href="#about">
							<NavLink>About</NavLink>
						</Link>
					</li>
					<li>
						<Link href="#skills">
							<NavLink>Skills</NavLink>
						</Link>
					</li>
					<li>
						<Link href="#work">
							<NavLink>Work</NavLink>
						</Link>
					</li>
					<li>
						<Link href="#contact">
							<NavLink>Contact</NavLink>
						</Link>
					</li>
				</NavList>

				<HamburgerContainer open={open} onClick={() => setOpen(!open)}>
					<div />
					<div />
					<div />
				</HamburgerContainer>
				<MobileNavList open={open} onClick={() => setOpen(!open)}>
					<li>
						<Link href="#about">
							<MobileNavLink>About</MobileNavLink>
						</Link>
					</li>
					<li>
						<Link href="#skills">
							<MobileNavLink>Skills</MobileNavLink>
						</Link>
					</li>
					<li>
						<Link href="#work">
							<MobileNavLink>Work</MobileNavLink>
						</Link>
					</li>
					<li>
						<Link href="#contact">
							<MobileNavLink>Contact</MobileNavLink>
						</Link>
					</li>
				</MobileNavList>
				<Blur open={open} onClick={() => setOpen(!open)} />
			</Right>
		</Container>
	);
};

export default Header;
