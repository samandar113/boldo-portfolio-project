import "./services.scss";

import ServicesCard from "./ServicesCard/ServicesCard";

export default function Services() {
	return (
		<section className="services bg-white text-primary">
			<div className="services-inner container">
				<div className="services-text-block">
				<p className="subtitle-1 text-gray services-subtitle">
					Our Services
				</p>
					<h2 className="services-title heading-1 text-primary">
						Handshake infographic mass market crowdfunding iteration.
					</h2>
				</div>
			</div>
			<div className="services-cards-wrapper container">
				{[1, 2, 3].map(item => {
					return <ServicesCard key={item} />
				})}
			</div>
		</section>
	)
}