import HeaderLogo from "../../assets/header-logo.svg";
import CloseIcon from "../../assets/xmark-solid.svg";
import OpenIcon from "../../assets/bars-solid.svg";

import {useState} from "react";


import "./header.scss";

export default function Header() {
	const [open, setOpen] = useState(false);
	return (
		<header className="header">
			<div className="container header-inner">
				<div className="header-logo-wrapper">
					<img
						src={HeaderLogo}
						alt="header-logo"
						className="header-logo"
					/>
				</div>
				<div className="header-menu-btn icon-btn" onClick={() => setOpen(state => !state)}>
					<img src={OpenIcon} alt="open-button" />
				</div>
				<nav className={`header-nav ${open ? "open": ""}`}>
					<div className="header-close-btn icon-btn" onClick={() => setOpen(state => !state)}>
						<img src={CloseIcon} alt="close-button" />
					</div>
					<ul className="header-list">
						<li className="header-list-item">
							<a
								href="#"
								className="header-list-link subtitle-3"
							>
								Product
							</a>
						</li>
						<li className="header-list-item">
							<a
								href="#"
								className="header-list-link subtitle-3"
							>
								Services
							</a>
						</li>
						<li className="header-list-item">
							<a
								href="#"
								className="header-list-link subtitle-3"
							>
								About
							</a>
						</li>
					</ul>
					<button className="header-button button filled text-primary">
						Log in
					</button>
				</nav>
			</div>
		</header>
	);
}
