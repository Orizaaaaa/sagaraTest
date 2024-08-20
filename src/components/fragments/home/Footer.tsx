import { RiFacebookFill } from "react-icons/ri";
import { FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa6";
import { logo } from "../../../image"; // pastikan logo sudah diimport dengan benar

const Footer = () => {
    const pages = ["IT Certification", "Careers", "FAQ", "Terms & Condition"];
    const careers = [
        "Front End Developer",
        "Back End Developer",
        "Quality Assurance",
        "UI/UX Design",
    ];
    const contacts = [
        { type: "phone", label: "+62 856-4097-7356" },
        { type: "email", label: "consult@sagara.asia" },
        { type: "location", label: "South Jakarta and Bandung, Indonesia." },
    ];

    return (
        <div className="footer bg-[#1C1C1C] text-white py-10">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-8 px-3 lg:px-0">
                    {/* Logo and Social Media */}
                    <div className="md:col-span-3 space-y-8">
                        <img src={logo} alt="Logo" />
                        <p>Plan, build, grow digital products. Continuously delivering impact.</p>
                        <div className="flex gap-4">
                            <RiFacebookFill color="white" />
                            <FaTwitter color="white" />
                            <FaInstagram color="white" />
                            <FaLinkedinIn color="white" />
                        </div>
                    </div>

                    {/* Pages */}
                    <div className="space-y-4">
                        <h4 className="font-semibold">Pages</h4>
                        <ul className="space-y-2">
                            {pages.map((page, index) => (
                                <li key={index} className="hover:text-gray-400 cursor-pointer">
                                    {page}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Careers */}
                    <div className="space-y-4">
                        <h4 className="font-semibold">Careers</h4>
                        <ul className="space-y-2">
                            {careers.map((career, index) => (
                                <li key={index} className="hover:text-gray-400 cursor-pointer">
                                    {career}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div className="space-y-4">
                        <h4 className="font-semibold">Contact</h4>
                        <ul className="space-y-2">
                            {contacts.map((contact, index) => (
                                <li key={index} className="hover:text-gray-400 cursor-pointer">
                                    {contact.type === "phone" && (
                                        <span role="img" aria-label="Phone">
                                            📞
                                        </span>
                                    )}
                                    {contact.type === "email" && (
                                        <span role="img" aria-label="Email">
                                            ✉️
                                        </span>
                                    )}
                                    {contact.type === "location" && (
                                        <span role="img" aria-label="Location">
                                            📍
                                        </span>
                                    )}{" "}
                                    {contact.label}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className="text-center mt-8">
                    <p>Copyright © 2024 PT. Sagara Asia Teknologi</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;
