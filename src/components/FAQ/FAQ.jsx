import "./faq.scss";


import FAQArrowDown from "../../assets/faq-arrow-down.svg";
import FAQBanner from "../../assets/faq-banner.svg";


export default function FAQ() {
	return (
		<section className="faq">
			<div className="container faq-inner">
				<div className="img-wrapper faq-img-wrapper">
					<img loading="lazy" src={FAQBanner} alt="faq-img" />
				</div>
				<div className="faq-text-block">
					<h3 className="heading-2 faq-title">We connect our customers with the best, and help them keep up-and stay open.</h3>
					<ul className="faq-list">
						<li className="faq-list-item subtitle-2">We connect our customers with the best? <img src={FAQArrowDown} alt="faq-arrow-donw" /></li>
						<li className="faq-list-item subtitle-2">Android research & development rockstar?  <img src={FAQArrowDown} alt="faq-arrow-donw" /></li>
					</ul>
				</div>
			</div>
		</section>
	)
}