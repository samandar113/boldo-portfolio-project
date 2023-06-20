import "./article.scss";

export default function ArCard({title, img, avatar, authorName}) {
	return (
		<div className="services-card ar-card">
			<div className="s-card-content ar-card-content">
				<div className="img-wrapper s-card-img">
					<img src={img} alt="services-card-img" />
				</div>
				<div className="s-card-text-block">
					<p className="ar-tag-line"><span className="text-primary">Category</span> November 22, 2021</p>
					<p className="s-card-subtitle subtitle-2">
						{title}
					</p>
				</div>
				<div className="tes-author-block ar-author-block">
					<div className="tes-author-avatar ar-author-avatar">
						<img src={avatar} alt="author-avatar" />
					</div>
					<div className="tes-author-text-block">
						<h4 className="tes-author-name ar-author-name text-primary">{authorName}</h4>
					</div>
				</div>
			</div>
		</div>
	)
}
