import "./call-to-action.scss";

export default function Cta() {
	return (
		<section className="cta bg-primary">
			<div className="container cta-inner">
				<h2 className="heading-1 cta-title text-white">
					An enterprise template to ramp up your company website
				</h2>
				<div className="cta-search-block">
					<input placeholder="Your email address" type="text" className="cta-search-input" />
					<button className="button large text-primary filled secondary">Start now</button>
				</div>
			</div>
		</section>
	)
}