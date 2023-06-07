import SectionTemplate from "../SectionTemplate/SectionTemplate";
import CustomerServicesImg from "../../assets/customer-services-img.svg";

import CustomerServicesListIcon from "../../assets/customer-services-list-icon.svg";

import "./customer-services.scss";

export default function CustomerServices() {
	return (
		<SectionTemplate img={CustomerServicesImg} title="We connect our customers with the best, and help them keep up-and stay open.">
			<ul className="c-s-list">
				<li className="c-s-list-item subtitle-2"><img src={CustomerServicesListIcon} alt="customer-services-list-icon" />We connect our customers with the best.</li>
				<li className="c-s-list-item subtitle-2"><img src={CustomerServicesListIcon} alt="customer-services-list-icon" />Advisor success customer launch party.</li>
				<li className="c-s-list-item subtitle-2"><img src={CustomerServicesListIcon} alt="customer-services-list-icon" />Business-to-consumer long tail.</li>
			</ul>
			<button className="c-s-button button large filled primary text-white">Start now</button>
		</SectionTemplate>
	)
}