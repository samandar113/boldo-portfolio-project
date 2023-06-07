import FooterLogo from "../../assets/footer-logo.svg";

import "./footer.scss";

const cols = [
	{
		title: "Landings",
		items: ["Home", "Products", "Services"],
	},
	{
		title: "Company",
		items: ["Home", "Careers", "Services"],
	},
	{
		title: "Resources",
		items: ["Blog", "Products", "Services"],
	},
];

export default function Footer() {
	return (
		<footer className="footer">
			<div className="container f-inner">
				<div className="f-cr-text-block">
					<div className="f-logo img-wrapper">
						<img loading="lazy" src={FooterLogo} alt="footer-logo" />
					</div>
					<p className="text-gray f-title">
						Social media validation business model canvas graphical
						user interface launch party creative facebook iPad
						twitter.
					</p>
					<p className="text-gray f-cr-text">All rights reserved.</p>
				</div>
				<div className="f-cta-cols-wrapper">
					{cols.map((col, colIndex) => {
						return (
							<div key={colIndex} className="f-cta-col">
								<h4 className="subtitle-2 f-cta-col-title">
									{col.title}
								</h4>
								<ul className="f-cta-col-list">
									{col.items.map((item, index) => {
										return (
											<li key={index} className="f-cta-col-list-item text-gray">
												<a
													href="#"
													className="f-cta-col-list-link"
												>
													{item}
												</a>
											</li>
										);
									})}
								</ul>
							</div>
						);
					})}
				</div>
			</div>
		</footer>
	);
}
