
import "./testimonials.scss";

import TesArrowLeft from "../../assets/tes-arrow-left.svg";
import TesArrowRight from "../../assets/tes-arrow-right.svg";

import TesAuthorAvatar1 from "../../assets/tes-card-author-avatar-1.svg";
import TesAuthorAvatar2 from "../../assets/tes-card-author-avatar-2.svg";
import TesAuthorAvatar3 from "../../assets/tes-card-author-avatar-3.svg";

import TesCard from "./TesCard/TesCard";

const cards = [
	{
		title: "“Buyer buzz partner network disruptive non-disclosure agreement business”",
		img: TesAuthorAvatar1,
		authorName: "Albus Dumbledore",
		jobTitle: "Manager @ Howarts"
	},
	{
		title: "“Learning curve infrastructure value proposition advisor strategy user experience hypotheses investor.”",
		img: TesAuthorAvatar2,
		authorName: "Severus Snape",
		jobTitle: "Manager @ Slytherin"
	},
	{
		title: "“Release facebook responsive web design business model canvas seed money monetization.”",
		img: TesAuthorAvatar3,
		authorName: "Harry Potter",
		jobTitle: "Team Leader @ Gryffindor"
	},
]


export default function Testimonials() {
	return (
		<section className="tes bg-primary text-white">
			<div className="container tes-inner">
				<div className="tes-text-block">
					<h3 className="heading-2 tes-title">
						An enterprise template to ramp up your company website
					</h3>
					<div className="tes-arrow-buttons-wrapper">
						<button className="icon-button tes-button filled"><img src={TesArrowLeft} alt="arrow-left" /></button>
						<button className="icon-button tes-button filled"><img src={TesArrowRight} alt="arrow-right" /></button>
					</div>
				</div>
				<div className="tes-cards-wrapper">
					{cards.map(item => {
						return <TesCard key={item.authorName} title={item.title}
						img={item.img} authorName={item.authorName} jobTitle={item.jobTitle} />
					})}
				</div>
			</div>
		</section>
	);
}
