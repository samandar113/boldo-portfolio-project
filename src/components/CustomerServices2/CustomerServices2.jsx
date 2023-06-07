import SectionTemplate from "../SectionTemplate/SectionTemplate";
import CustomerServicesImg from "../../assets/customer-services-img-2.svg";

import CustomerServicesListIcon1 from "../../assets/customer-services-2-icon-1.svg";
import CustomerServicesListIcon2 from "../../assets/customer-services-2-icon-2.svg";
import CustomerServicesListIcon3 from "../../assets/customer-services-2-icon-3.svg";

import "./customer-services2.scss";

export default function CustomerServices() {
	return (
		<SectionTemplate reverse img={CustomerServicesImg} title="We connect our customers with the best, and help them keep up-and stay open.">
			<ul className="c-s-2-list">
				<li className="c-s-2-list-item subtitle-2 bg-primary text-white"><img src={CustomerServicesListIcon1} alt="customer-services-list-icon" />We connect our customers with the best.</li>
				<li className="c-s-2-list-item subtitle-2"><img src={CustomerServicesListIcon2} alt="customer-services-list-icon" />Advisor success customer launch party.</li>
				<li className="c-s-2-list-item subtitle-2"><img src={CustomerServicesListIcon3} alt="customer-services-list-icon" />Business-to-consumer long tail.</li>
			</ul>
		</SectionTemplate>
	)
}