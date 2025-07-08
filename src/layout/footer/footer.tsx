import React from 'react';
import asset from '../../../public/images/bottom_img/asset.ts';

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-white border-t border-[#e9ecef] mt-12">
      <div className="max-w-[1200px] mx-auto px-5 flex flex-col items-center">
        <div className="w-full py-5 flex justify-center border-b border-[#f0f0f0]">
          <div className="flex justify-between items-center w-full max-w-[1200px]">
            <div className="flex items-center gap-4">
              <img src={asset.mail} alt="Newsletter" className="w-[50px] h-[50px]" />
              <p className="text-2xl font-semibold text-[#333] m-0">
                Join our newsletter to keep <br/> up to date with us!
              </p>
            </div>
            <div className="flex items-center gap-2.5">
              <div className="relative flex items-center">
                <img src={asset.user} alt="User" className="absolute left-[15px] w-4 h-4" />
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="py-3 pl-10 pr-3 border border-[#2BBC7C] rounded-[50px] w-[300px] text-sm outline-none shadow-[0_0_8px_rgba(217,255,238,0.6)]" 
                />
              </div>
              <button className="bg-[#2BBC7C] text-white border-none rounded-[50px] py-3 px-6 text-sm font-medium cursor-pointer transition-colors hover:bg-[#249d69]">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        <div className="flex justify-center gap-4 my-8">
          <a href="#" className="social-link">
            <img src={asset.facebook} height="35" width="35" alt="Facebook" className="object-contain" />
          </a>
          <a href="#" className="social-link">
            <img src={asset.youtube} height="35" width="45" alt="YouTube" className="object-contain" />
          </a>
          <a href="#" className="social-link">
            <img src={asset.linkdin} height="35" width="35" alt="LinkedIn" className="object-contain" />
          </a>
          <a href="#" className="social-link">
            <img src={asset.insta} height="35" width="35" alt="Instagram" className="object-contain" />
          </a>
        </div>

        <div className="flex justify-center items-center gap-5 mb-8 font-['Zoho_Puvi'] font-normal text-base">
          <FooterLink href="#" text="Exams" />
          <FooterLink href="#" text="Paid/ Attended" />
          <FooterLink href="#" text="Dashboard" />
          <FooterLink href="#" text="Terms" />
          <FooterLink href="#" text="Privacy" />
          <FooterLink href="#" text="Cookies" isLast={true} />
        </div>
      </div>

      <div className="w-full bg-[#212529] text-white py-6 flex flex-col items-center gap-2.5">
        <div className="flex items-center gap-2.5">
          <img src={asset.footer_logo} alt="Kasadara Kal" className="w-[145px] h-[45px]" />
        </div>
        <div className="text-sm text-[#adb5bd]">
          © 2025, Kasadarakal. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

interface FooterLinkProps {
  href: string;
  text: string;
  isLast?: boolean;
}

const FooterLink: React.FC<FooterLinkProps> = ({ href, text, isLast = false }) => {
  return (
    <div className="relative">
      <a 
        href={href} 
        className="text-[#21272C] no-underline transition-colors hover:text-[#2BBC7C]"
      >
        {text}
      </a>
      {!isLast && (
        <span className="absolute right-[-10px] top-1/2 -translate-y-1/2 h-[18px] w-[1px] bg-[#e0e0e0]"></span>
      )}
    </div>
  );
};

export default Footer;