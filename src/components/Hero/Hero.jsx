import "./hero.scss";

import HeroImg from "../../assets/hero-graphics.svg";

import LogoWall from "../LogoWall/LogoWall";

export default function Hero() {
	return (
		<section className="hero bg-primary text-white">
			<div className="container hero-inner d-flex justify-between items-center">
				<div className="hero-body">
					<h1 className="hero-title heading-1">
						Save time by building fast with Boldo Template
					</h1>
					<p className="hero-subtitle subtitle-3 text-light-gray">
						Funding handshake buyer business-to-business metrics
						iPad partnership. First mover advantage innovator
						success deployment non-disclosure.
					</p>
					<div className="buttons-wrapper d-flex">
						<button className="hero-button button large filled secondary text-primary">
							Buy template
						</button>
						<button className="hero-button button large outlined text-white">Explore now</button>
					</div>
				</div>
				<div className="hero-img">
					<img loading="lazy" src={HeroImg} alt="hero-img" />
				</div>
			</div>
			<LogoWall />
		</section>
	);
}
