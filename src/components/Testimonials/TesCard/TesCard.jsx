import "./tes-card.scss";

export default function TesCard({img, title, authorName, jobTitle}) {
	return (
		<div className="tes-card bg-white">
			<div className="tes-card-content">
				<h3 className="tes-card-title subtitle-1">
					{title}
				</h3>
				<div className="tes-author-block">
					<div className="tes-author-avatar">
						<img src={img} alt="author-avatar" />
					</div>
					<div className="tes-author-text-block">
						<h4 className="tes-author-name text-primary">{authorName}</h4>
						<p className="tes-author-jobTitle text-primary">{jobTitle}</p>
					</div>
				</div>
			</div>
		</div>
	)
}