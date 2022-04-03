import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
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
	const router = useRouter();
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
				<Link href="/" passHref>
					<Logo>KK</Logo>
				</Link>
			</Left>
			<Right ref={ref}>
				<NavList>
					<li>
						<Link
							href={router.pathname === "/" ? "#about" : "/#about"}
							passHref
						>
							<NavLink>About</NavLink>
						</Link>
					</li>
					<li>
						<Link
							href={router.pathname === "/" ? "#skills" : "/#skills"}
							passHref
						>
							<NavLink>Skills</NavLink>
						</Link>
					</li>
					<li>
						<Link href={router.pathname === "/" ? "#work" : "/#work"} passHref>
							<NavLink>Work</NavLink>
						</Link>
					</li>
					<li>
						<Link
							href={router.pathname === "/" ? "#contact" : "/#contact"}
							passHref
						>
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
						<Link
							href={router.pathname === "/" ? "#about" : "/#about"}
							passHref
						>
							<MobileNavLink>About</MobileNavLink>
						</Link>
					</li>
					<li>
						<Link
							href={router.pathname === "/" ? "#skills" : "/#skills"}
							passHref
						>
							<MobileNavLink>Skills</MobileNavLink>
						</Link>
					</li>
					<li>
						<Link href={router.pathname === "/" ? "#work" : "/#work"} passHref>
							<MobileNavLink>Work</MobileNavLink>
						</Link>
					</li>
					<li>
						<Link
							href={router.pathname === "/" ? "#contact" : "/#contact"}
							passHref
						>
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
