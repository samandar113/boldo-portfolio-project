import "./section-template.scss";


export default function SectionTemplate({img, title, children, reverse}) {
	return (
		<section className="st">
			<div className={`container st-inner ${reverse ? "reverse" : ""}`}>
				<div className="img-wrapper st-img"><img loading="lazy" src={img} alt="section-banner"/></div>
				<div className="st-text-block">
					<h3 className="st-title heading-2">
						{title}
					</h3>
					{children}
				</div>
			</div>
		</section>
	)
}