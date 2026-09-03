"use client";

import React from "react";
import { Mail, Phone, MapPin, Heart } from "lucide-react";

export default function JaagoFooter() {
  return (
    <>
      <footer className="bg-gray-800 py-14 text-white">
        <div className="max-w-7xl 2xl:max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Col 1: About CRC */}
            <div className="flex flex-col justify-start space-y-4">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-xl bg-[#ffcd05] flex items-center justify-center text-gray-900 font-black text-lg border border-amber-300 shadow-md">
                  CRC
                </div>
                <div className="flex flex-col text-left leading-none">
                  <span className="text-xs font-black uppercase tracking-wider text-white">
                    COME FOR ROAD CHILD
                  </span>
                  <span className="text-[9px] font-bold text-[#ffcd05] tracking-tight mt-0.5">
                    Est. 5 June 2016 · GSTU
                  </span>
                </div>
              </div>
              <p className="text-gray-300 text-sm leading-relaxed">
                Come for Road Child (CRC) is a voluntary student-led humanitarian organization founded at Gopalganj Science and Technology University (GSTU). We are committed to eradicating child destitution through our flagship Hatekhori Free School, emergency child safeguarding, healthcare, and relief drives.
              </p>
              <p className="text-xs text-[#ffcd05] font-semibold italic">
                &ldquo;The World Will Be Free from Street Children by Connected Together.&rdquo;
              </p>
            </div>

            {/* Col 2: Useful Links */}
            <div className="flex flex-col justify-start">
              <h3 className="text-white capitalize text-2xl font-heading font-bold mb-4">
                Important Links
              </h3>
              <ul className="flex flex-col gap-2.5 text-sm font-semibold text-[#ffcd05]">
                <li>
                  <a className="hover:underline" href="#sponsor">
                    Sponsor a Child Program
                  </a>
                </li>
                <li>
                  <a className="hover:underline" href="#hatekhori">
                    Hatekhori Free School
                  </a>
                </li>
                <li>
                  <a className="hover:underline" href="#volunteer">
                    Join as Volunteer Teacher
                  </a>
                </li>
                <li>
                  <a className="hover:underline" href="#safeguarding">
                    Child Safeguarding Policy
                  </a>
                </li>
                <li>
                  <a className="hover:underline" href="#audit">
                    Audited Financial Transparency
                  </a>
                </li>
                <li>
                  <a className="hover:underline" href="#contact">
                    Emergency Child Support
                  </a>
                </li>
              </ul>
            </div>

            {/* Col 3: Get in touch with CRC */}
            <div className="flex flex-col justify-start">
              <h3 className="text-white capitalize text-2xl font-heading font-bold mb-4">
                Contact Central Office
              </h3>
              <ul className="text-gray-300 flex flex-col gap-3.5 text-sm">
                <li className="flex items-start">
                  <MapPin className="w-5 h-5 text-[#ffcd05] mr-2 shrink-0 mt-0.5" />
                  <span>
                    Gopalganj Science and Technology University (GSTU),<br />
                    Gopalganj-8100, Dhaka Division, Bangladesh
                  </span>
                </li>
                <li className="flex items-center">
                  <Mail className="w-5 h-5 text-[#ffcd05] mr-2 shrink-0" />
                  <a className="text-[#ffcd05] hover:underline" href="mailto:info@gstu-crc.org">
                    info@gstu-crc.org
                  </a>
                </li>
                <li className="flex items-center">
                  <Phone className="w-5 h-5 text-[#ffcd05] mr-2 shrink-0" />
                  <a className="text-[#ffcd05] hover:underline" href="tel:+8801700000000">
                    +880 1700-000000 (Central Helpline)
                  </a>
                </li>
                <li className="pt-2 text-xs text-gray-400 flex items-center gap-1">
                  <span>Operated with</span>
                  <Heart className="w-3.5 h-3.5 text-red-500 fill-red-500" />
                  <span>by GSTU student volunteers</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>

      {/* Bottom Copyright */}
      <div className="bg-gray-900 flex justify-center py-4 border-t border-gray-800">
        <span className="text-gray-400 text-xs font-semibold text-center px-4">
          &copy; 2016–2026 Come for Road Child (CRC), GSTU. All Rights Reserved.
        </span>
      </div>
    </>
  );
}
