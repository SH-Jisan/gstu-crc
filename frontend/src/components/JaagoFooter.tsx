"use client";

import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";

export default function JaagoFooter() {
  return (
    <>
      <footer className="bg-gray-800 py-14 text-white">
        <div className="max-w-7xl 2xl:max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Col 1: About */}
            <div className="flex flex-col justify-start space-y-4">
              <div className="logo">
                <img
                  loading="lazy"
                  width={105}
                  height={69}
                  className="w-[105px]"
                  src="https://jaago.com.bd/images/2024/09/jaago-logo_1727084165_w2fULrshk.png?tr=f-auto"
                  alt="JAAGO Foundation"
                />
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">
                JAAGO Foundation is a non-profit organization that empowers underprivileged individuals and communities in Bangladesh through education, youth development, women’s empowerment, climate change, governance and poverty alleviation.
              </p>
            </div>

            {/* Col 2: Useful Links */}
            <div className="flex flex-col justify-start">
              <h3 className="text-white capitalize text-2xl font-heading font-bold mb-4">
                Useful Links
              </h3>
              <ul className="flex flex-col gap-2.5 text-sm font-semibold text-[#ffcd05]">
                <li>
                  <a
                    className="hover:underline"
                    href="https://sponsorachild.jaagofoundation.org/children"
                  >
                    Sponsor a Child
                  </a>
                </li>
                <li>
                  <a className="hover:underline" href="https://jaago.com.bd/donate">
                    General Donation
                  </a>
                </li>
                <li>
                  <a className="hover:underline" href="https://portal.jaago.com.bd/jobs">
                    Career
                  </a>
                </li>
                <li>
                  <a className="hover:underline" href="https://jaago.com.bd/blog">
                    News and Update
                  </a>
                </li>
                <li>
                  <a className="hover:underline" href="https://jaago.com.bd/contact">
                    Contact us
                  </a>
                </li>
                <li>
                  <a className="hover:underline" href="https://jaago.com.bd/privacy-policy">
                    Privacy Policy
                  </a>
                </li>
              </ul>
            </div>

            {/* Col 3: Get in touch */}
            <div className="flex flex-col justify-start">
              <h3 className="text-white capitalize text-2xl font-heading font-bold mb-4">
                Get in touch
              </h3>
              <ul className="text-gray-300 flex flex-col gap-3.5 text-sm">
                <li className="flex items-start">
                  <MapPin className="w-5 h-5 text-[#ffcd05] mr-2 shrink-0 mt-0.5" />
                  <span>
                    JAAGO Foundation Inc,<br />
                    10340 NW 48th ct, Coral Spring Florida 33076, USA
                  </span>
                </li>
                <li className="flex items-center">
                  <Mail className="w-5 h-5 text-[#ffcd05] mr-2 shrink-0" />
                  <a className="text-[#ffcd05] hover:underline" href="mailto:info@jaago.com.bd">
                    info@jaago.com.bd
                  </a>
                </li>
                <li className="flex items-center">
                  <Phone className="w-5 h-5 text-[#ffcd05] mr-2 shrink-0" />
                  <a className="text-[#ffcd05] hover:underline" href="tel:+8801766666654">
                    +8801766666654
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>

      {/* Bottom Copyright */}
      <div className="bg-gray-900 flex justify-center py-4 border-t border-gray-800">
        <span className="text-gray-400 text-xs font-semibold">
          &copy; 2026 – JAAGO Foundation | All Rights Reserved
        </span>
      </div>
    </>
  );
}
