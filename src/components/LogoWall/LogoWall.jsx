import Boldo from "../../assets/logo-wall-boldo.svg";
import Presto from "../../assets/logo-wall-presto.svg";

import "./logo-wall.scss";

export default function LogoWall() {
	return (
		<div className="logo-wall">
			<div className="container lw-inner">
				{[1, 2, 3, 4, 5, 6].map(item => {
					if(item % 2 == 0) {
						return (
							<div key={item} className="img-wrapper logo-wall-item">
								<img loading="lazy" 
								src={Presto} alt="presto-logo" />
							</div>
						)
					}
					return (
						<div key={item} className="img-wrapper logo-wall-item">
							<img loading="lazy" src={Boldo} alt="boldo-logo" />
						</div>
					)
				})}
			</div>
		</div>
	)
}