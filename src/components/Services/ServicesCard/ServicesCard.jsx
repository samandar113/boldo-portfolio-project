import "./services-card.scss";

import ServicesCardImg1 from "../../../assets/services-card-img-1.svg";
import ArrowRight from "../../../assets/arrow-right.svg";

export default function ServicesCard() {
	return (
		<div className="services-card">
			<div className="s-card-content">
				<div className="img-wrapper s-card-img">
					<img loading="lazy" src={ServicesCardImg1} alt="services-card-img" />
				</div>
				<div className="s-card-text-block">
					<h3 className="s-card-title subtitle-1">Cool feature title</h3>
					<p className="s-card-subtitle text-gray">
						Learning curve network effects return on investment.
					</p>
				</div>
				<a href="#" className="link-button">Explore page <img src={ArrowRight} alt="arrow-right" /></a>
			</div>
		</div>
	)
}