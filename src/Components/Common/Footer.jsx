import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faMugHot, faLocationDot, faPhone, faEnvelope,
  faClock, faArrowRight
} from "@fortawesome/free-solid-svg-icons";

import {
  faInstagram, faFacebook, faPinterest
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {

  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "Our Menu", path: "/menu" },
    { name: "Gallery", path: "/gallery" },
    { name: "Contact", path: "/contact" }
  ];

  const socialLinks = [
    { icon: faInstagram, label: "Instagram", link: "https://www.instagram.com/adrikaa_rai/" },
    { icon: faFacebook, label: "Facebook", link: "https://www.facebook.com/" },
    { icon: faPinterest, label: "Pinterest", link: "https://www.pinterest.com/" }
  ];

  const focusStyle = "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C8F45A] focus-visible:ring-offset-2 focus-visible:ring-offset-[#292329]";

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="bg-[#292329] dark:bg-[#19151A] text-[#FFF5EC] transition-colors duration-300">

      <div className="max-w-7xl mx-auto px-6 pt-16 pb-10">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* BRAND SECTION */}

          <div>
            <Link to="/" aria-label="Mimi Café Home" className={`inline-flex items-center gap-3 mb-5 ${focusStyle}`}>
              <div className="w-12 h-12 rounded-full bg-[#F23883] flex items-center justify-center text-white text-xl">
                <FontAwesomeIcon icon={faMugHot} />
              </div>

              <div>
                <h2 className="text-3xl font-extrabold text-[#F23883] tracking-tight">MIMI</h2>
                <p className="text-xs tracking-[5px] text-[#C8F45A] font-bold">CAFÉ</p>
              </div>
            </Link>

            <p className="text-[#D8C9D0] dark:text-[#B9AAB4] text-sm leading-7 max-w-xs">
              A little sip of happiness! Enjoy delicious coffee, tasty food and beautiful moments with us.
            </p>

            {/* SOCIAL LINKS */}

            <div className="flex gap-3 mt-6">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className={`w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-[#FFF5EC] hover:bg-[#F23883] hover:-translate-y-1 transition-all duration-300 ${focusStyle}`}
                >
                  <FontAwesomeIcon icon={social.icon} />
                </a>
              ))}
            </div>
          </div>

          {/* QUICK LINKS */}

          <nav aria-label="Footer navigation">
            <h3 className="text-lg font-bold mb-6 text-[#C8F45A]">Quick Links</h3>

            <ul className="space-y-4">
              {quickLinks.map((item) => (
                <li key={item.name}>
                  <Link
                    to={item.path}
                    onClick={scrollToTop}
                    className={`group flex items-center gap-2 text-sm text-[#D8C9D0] dark:text-[#B9AAB4] hover:text-[#F23883] transition-all duration-300 ${focusStyle}`}
                  >
                    <FontAwesomeIcon icon={faArrowRight} className="text-xs text-[#F23883] group-hover:translate-x-1 transition-transform" />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* OPENING HOURS */}

          <div>
            <h3 className="text-lg font-bold mb-6 text-[#C8F45A]">Opening Hours</h3>

            <div className="flex items-start gap-3 mb-5">
              <FontAwesomeIcon icon={faClock} className="text-[#F23883] mt-1" />
              <div className="text-sm text-[#D8C9D0] dark:text-[#B9AAB4] space-y-2">
                <p className="font-semibold text-[#FFF5EC]">Monday - Friday</p>
                <p>10:00 AM - 10:00 PM</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <FontAwesomeIcon icon={faClock} className="text-[#F23883] mt-1" />
              <div className="text-sm text-[#D8C9D0] dark:text-[#B9AAB4] space-y-2">
                <p className="font-semibold text-[#FFF5EC]">Saturday - Sunday</p>
                <p>09:00 AM - 11:00 PM</p>
              </div>
            </div>

            <div className="inline-block mt-6 px-4 py-2 rounded-full bg-[#C8F45A] text-[#292329] text-xs font-bold">
              Open Daily • Freshly Brewed
            </div>
          </div>

          {/* CONTACT SECTION */}

          <div>
            <h3 className="text-lg font-bold mb-6 text-[#C8F45A]">Get In Touch</h3>

            <address className="not-italic">
              <ul className="space-y-5 text-sm text-[#D8C9D0] dark:text-[#B9AAB4]">

                <li className="flex items-start gap-3">
                  <FontAwesomeIcon icon={faLocationDot} className="text-[#F23883] mt-1" />
                  <span>Jodhpur, Rajasthan</span>
                </li>

                <li className="flex items-center gap-3">
                  <FontAwesomeIcon icon={faPhone} className="text-[#F23883]" />
                  <a href="tel:+917878008871" className={`hover:text-[#C8F45A] transition ${focusStyle}`}>
                    +91 7878008871
                  </a>
                </li>

                <li className="flex items-center gap-3">
                  <FontAwesomeIcon icon={faEnvelope} className="text-[#F23883]" />
                  <a href="mailto:hello@mimicafe.com" className={`hover:text-[#C8F45A] transition break-all ${focusStyle}`}>
                    hello@mimicafe.com
                  </a>
                </li>

              </ul>
            </address>

            {/* CONTACT BUTTON */}

            <Link
              to="/contact"
              onClick={scrollToTop}
              className={`inline-flex items-center gap-2 mt-7 px-5 py-3 rounded-full bg-[#F23883] text-white text-sm font-bold hover:bg-[#C8F45A] hover:text-[#292329] transition-all duration-300 ${focusStyle}`}
            >
              Contact Us <FontAwesomeIcon icon={faArrowRight} />
            </Link>
          </div>

        </div>

        {/* BOTTOM FOOTER */}

        <div className="border-t border-white/15 mt-14 pt-7">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-center">
            <p className="text-sm text-[#D8C9D0] dark:text-[#B9AAB4]">
              © 2026 <span className="text-[#F23883] font-bold">Mimi Café.</span> All Rights Reserved.
            </p>

            <p className="text-sm text-[#D8C9D0] dark:text-[#B9AAB4]">
              Made with <span className="text-[#F23883]">♥</span> for Mimi lovers.
            </p>
          </div>
        </div>

      </div>
    </footer>
  );
}
