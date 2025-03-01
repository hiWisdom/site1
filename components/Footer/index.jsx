import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FooterLinks } from "../SiteMaps";
import { motion } from "framer-motion";


const Footer = () => {
    const currentYear = new Date().getFullYear();
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleSubscribe = async (e) => {
        e.preventDefault();
        setLoading(true);
        setMessage(null);
        setError(null);

        try {
            const response = await fetch("http://localhost/heelheid/subscribe.php", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email }),
            });
            const result = await response.json();
            if (result.success) {
                setMessage(`Subscribed successfully! Location: ${result.location.country}`);
                setEmail("");
            } else {
                setError(result.error || "Subscription failed.");
            }
        } catch (err) {
            setError("Network error, please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <footer className="pt-20 w-full footer">
            <div className="container mx-auto flex flex-wrap justify-between gap-y-10 sm:space-y-0 lg:gap-5">
                <Section title="Company" links={FooterLinks.company} />
                <Section title="Links" links={FooterLinks.link} />
                <ContactSection contacts={FooterLinks.contact} />
                <NewsletterSection email={email} setEmail={setEmail} handleSubscribe={handleSubscribe} loading={loading} message={message} error={error} />
            </div>
            <FooterBottom currentYear={currentYear} />
        </footer>
    );
};

const Section = ({ title, links }) => (
    <AnimatedDiv className="lg:w-56 lg:flex-1 lg:min-w-48">
        <h2 className="text-1xl font-semibold text-gray-800 mb-4">{title}</h2>
        <ul className="text-gray-600 space-y-2">
            {links.map((link, index) => (
                <li key={index}>
                    <Link href={link.url} className="hover:text-primary transition duration-300 lg:text-[14px]">{link.name}</Link>
                </li>
            ))}
        </ul>
    </AnimatedDiv>
);

const ContactSection = ({ contacts }) => (
    <AnimatedDiv className="w-56 flex-1 min-w-48">
        <h2 className="text-1xl font-semibold text-gray-800 mb-4">Contact</h2>
        <ul className="text-gray-600 space-y-2">
            {contacts.map((item, index) => (
                <li key={index} className="flex items-center space-x-3">
                    <Image 
                        src={item.iconPath || ""} 
                        width={100} 
                        height={100} 
                        alt="Contact-Icons" 
                        className="w-[15px] h-[15px]" 
                    />
                    <Link href={item.url} className="hover:text-primary transition duration-300 lg:text-[14px]">{item.name}</Link>
                </li>
            ))}
        </ul>
    </AnimatedDiv>
);

const NewsletterSection = ({ email, setEmail, handleSubscribe, loading, message, error }) => (
    <AnimatedDiv className="flex-1 min-w-48">
        <h2 className="text-1xl font-semibold text-gray-800 mb-4">Join Our Newsletter</h2>
        <form onSubmit={handleSubscribe} className="flex items-center bg-gray-100 h-14 rounded-lg">
            <input
                type="email"
                placeholder="Your email..."
                className="p-3 w-full text-gray-700 bg-gray-100 rounded-l-lg focus:outline-none"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
            />
            <button type="submit" className="bg-primary text-white px-6 mx-3 h-10 rounded-lg hover:bg-black transition duration-300">
                {loading ? "Submitting..." : "Submit"}
            </button>
        </form>
        {message && <p className="text-green-600 mt-2">{message}</p>}
        {error && <p className="text-red-600 mt-2">{error}</p>}
    </AnimatedDiv>
);


const FooterBottom = ({ currentYear }) => {
    const [hoveredIndex, setHoveredIndex] = useState(null);

    return (
        <div className="border-t border-gray-300 lg:mt-6 py-6 flex flex-col sm:flex-row justify-between container mx-auto text-gray-600  ">

            <div className="flex flex-col sm:flex-row lg:justify-between lg:items-center sm:items-start gap-4 sm:gap-10 w-full sm:w-auto sm:order-last ">

                <div className="flex gap-4 sm:gap-6 lg:items-center lg:justify-center companyBottomLinks ">
                    {FooterLinks.footerBottom.map((link, index) => (
                        <Link 
                            key={index} 
                            href={link.url} 
                            className="text-[14px] hover:text-primary"
                            target="_blank"
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>

                <div className="flex space-x-4 lg:items-center socialBottomLinks  my-auto">
                    {FooterLinks.social.map((social, index) => (
                        <Link
                            key={index}
                            href={social.url}
                            target="_blank"
                            className="text-gray-600 hover:text-primary text-2xl transition duration-300"
                            onMouseEnter={() => setHoveredIndex(index)}
                            onMouseLeave={() => setHoveredIndex(null)}
                        >
                            <Image
                                src={hoveredIndex === index ? social.iconPathHover : social.iconPath}
                                width={20}
                                height={20}
                                alt="Social Icon"
                                className="w-[15px] h-[15px]"
                            />
                        </Link>
                    ))}
                </div>

            </div>

            <div className="flex gap-4 lg:items-center lg:justify-center signatureBottomLinks ">
                <p className="text-[14px] text-left">© {currentYear} Heelheid Business Acqusition & Management Company. All Rights Reserved.</p>
            </div>

        </div>
    );
};


const AnimatedDiv = ({ children, className }) => (
    <motion.div
        variants={{ hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0 } }}
        initial="hidden"
        whileInView="visible"
        transition={{ duration: 1, delay: 0.1, ease: "circIn" }}
        viewport={{ once: true }}
        className={className}
    >
        {children}
    </motion.div>
);

export default Footer;
