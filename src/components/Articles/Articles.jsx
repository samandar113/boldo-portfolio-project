import "./articles.scss";
import ArCard from "./Article/Article";

import ArticlesCardImg1 from "../../assets/articles-card-img-1.svg";
import ArticlesCardImg2 from "../../assets/articles-card-img-2.svg";
import ArticlesCardImg3 from "../../assets/articles-card-img-3.svg";

import ArticlesCardAvatar1 from "../../assets/articles-card-avatar-img-1.svg";
import ArticlesCardAvatar2 from "../../assets/articles-card-avatar-img-2.svg";
import ArticlesCardAvatar3 from "../../assets/articles-card-avatar-img-3.svg";

const cards = [
	{
		title: "Pitch termsheet backing validation focus release.",
		img: ArticlesCardImg1,
		authorName: "Chandler Bing",
		avatar: ArticlesCardAvatar1
	},
	{
		title: "Seed round direct mailing non-disclosure agreement graphical user interface rockstar.",
		img: ArticlesCardImg2,
		authorName: "Rachel Green",
		avatar: ArticlesCardAvatar2
	},
	{
		title: "Beta prototype sales iPad gen-z marketing network effects value proposition",
		img: ArticlesCardImg3,
		authorName: "Monica Geller",
		avatar: ArticlesCardAvatar3
	},
]


export default function Articles() {
	return (
		<section className="articles">
			<div className="ar-inner container">
				<div className="ar-text-block">
					<p className="subtitle-1 text-gray ar-subtitle">
					Our Blog
				</p>
					<h3 className="heading-2 ar-title">
						Value proposition accelerator product management venture
					</h3>
				</div>
			</div>
			<div className="ar-cards-wrapper container">
					{cards.map((item, index) => {
						return <ArCard title={item.title}
						img={item.img} avatar={item.avatar} 
						authorName={item.authorName} key={index} />
					})}
			</div>
			<div className="ar-button-wrapper">
				<button className="button large outlined text-primary">
					Load more
				</button>
			</div>
		</section>
	)
}