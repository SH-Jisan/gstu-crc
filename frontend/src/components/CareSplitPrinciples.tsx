/* eslint-disable @next/next/no-img-element */
'use client';

import { useEffect } from 'react';
import { jarallax } from 'jarallax';
import 'jarallax/dist/jarallax.css';

interface SectionItem {
  id: number;
  num: string;
  title: string;
  bengali: string;
  image: string;
  alt: string;
  theme: 'crimson' | 'cream' | 'green';
  quote: string;
  paragraphs: string[];
}

const sections: SectionItem[] = [
  {
    id: 1,
    num: '01',
    title: 'Brotherhood',
    bengali: 'ভাতৃত্ব ও সংহতি',
    image: '/assets/campaign.jpg',
    alt: 'CRC GSTU Brotherhood in action',
    theme: 'crimson',
    quote:
      'CRC GSTU promotes a spirit of brotherhood, solidarity, mutual respect, and care among its members and volunteers and encourages them to work together as one community.',
    paragraphs: [
      'Brotherhood reflects the belief that members are part of a common community working towards a shared purpose. It encourages mutual support, compassion, cooperation, and a sense of belonging while recognizing and respecting the individuality and contribution of every member.',
    ],
  },
  {
    id: 2,
    num: '02',
    title: 'Commitment',
    bengali: 'দায়বদ্ধতা ও নিষ্ঠা',
    image: '/assets/school.jpg',
    alt: 'CRC GSTU Commitment in action',
    theme: 'cream',
    quote:
      'Every volunteer is committed to the CRC mission and will act with dedication, perseverance, and passion for the cause of vulnerable street children.',
    paragraphs: [
      'Commitment demands consistency and reliability in every humanitarian project. It represents the perseverance required to continue serving even when circumstances are difficult. Through commitment, CRC GSTU seeks to turn its ideals into sustained action.',
    ],
  },
  {
    id: 3,
    num: '03',
    title: 'Trust',
    bengali: 'বিশ্বাস ও সততা',
    image: '/assets/health.jpg',
    alt: 'CRC GSTU Trust in action',
    theme: 'crimson',
    quote:
      'CRC GSTU seeks to earn and protect the trust of the people it serves, its members, volunteers, partners, and the wider public through transparency, honesty, and principled action.',
    paragraphs: [
      'Trust is the currency of student-led humanitarian work. CRC GSTU ensures absolute transparency in fund collection, accounting, and child safeguarding. Every action is open to scrutiny, ensuring long-term moral credibility.',
    ],
  },
];

export default function CareSplitPrinciples() {
  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>('.jarallax');
    jarallax(elements, { speed: 0.3 });

    return () => {
      jarallax(elements, 'destroy');
    };
  }, []);

  return (
    <section className="w-full overflow-hidden">
      {sections.map((item, index) => {
        const isReversed = index % 2 !== 0;

        return (
          <div
            key={item.id}
            className={`flex flex-col ${
              isReversed ? 'md:flex-row-reverse' : 'md:flex-row'
            }`}
          >
            {/* Image Block */}
            <div className="w-full md:w-1/2 min-h-[320px] md:min-h-[500px] relative">
              <div className="jarallax w-full h-full min-h-[320px] md:min-h-[500px]">
                <img
                  className="jarallax-img object-cover"
                  src={item.image}
                  alt={item.alt}
                />
              </div>
            </div>

            {/* Text Content Block */}
            <div
              className={`w-full md:w-1/2 min-h-[300px] md:min-h-[500px] flex items-center justify-center p-8 md:p-12 lg:p-16 ${
                item.theme === 'crimson'
                  ? 'bg-[#e6000a]/15 text-[#0d0f14]'
                  : item.theme === 'cream'
                  ? 'bg-[#f8f7f4] text-[#0d0f14]'
                  : 'bg-[#007938] text-white'
              }`}
            >
              <div className="max-w-lg w-full space-y-4 text-left">
                <span
                  className={`text-xs uppercase tracking-[0.2em] font-bold ${
                    item.theme === 'crimson'
                      ? 'text-[#e6000a]'
                      : item.theme === 'cream'
                      ? 'text-[#007938]'
                      : 'text-white/80'
                  }`}
                >
                  Core Principle {item.num}
                </span>

                <div>
                  <h3 className="font-heading text-2xl md:text-3xl lg:text-4xl font-black text-[#0d0f14]">
                    {item.title}
                  </h3>
                  <span
                    className={`text-sm md:text-base font-semibold block mt-0.5 ${
                      item.theme === 'green' ? 'text-white/85' : 'text-gray-500'
                    }`}
                  >
                    ({item.bengali})
                  </span>
                </div>

                <blockquote
                  className={`text-xs md:text-sm italic pl-3 py-1.5 border-l-4 leading-relaxed ${
                    item.theme === 'crimson'
                      ? 'border-[#e6000a] bg-red-50/70 text-gray-800'
                      : item.theme === 'cream'
                      ? 'border-[#007938] bg-black/5 text-gray-800'
                      : 'border-amber-400 bg-white/10 text-white/95'
                  }`}
                >
                  {item.quote}
                </blockquote>

                {item.paragraphs.map((text, pIndex) => (
                  <p
                    key={pIndex}
                    className={`text-sm md:text-[15px] leading-relaxed ${
                      item.theme === 'green' ? 'text-white/90' : 'text-gray-600'
                    }`}
                  >
                    {text}
                  </p>
                ))}
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
}
