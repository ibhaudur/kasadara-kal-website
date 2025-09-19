import React from "react";
import asset from "../../../public/images/bottom_img/asset.ts";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-white border-t border-[#e9ecef]">
      <div className="max-w-[1200px] mx-auto px-5 py-5 flex flex-col items-center">
        {/* Newsletter Section */}
        <div className="w-full py-5 flex justify-center border-b border-[#f0f0f0]">
          <div className="flex justify-between items-center w-full max-w-[1200px] md:flex-row flex-col">
            <div className="flex items-center gap-4 md:flex-row flex-col mb-5 md:mb-0">
              <img
                src={asset.mail}
                alt="Newsletter"
                className="w-[50px] h-[50px]"
              />
              <p className="text-2xl font-semibold text-[#333] m-0 md:text-left text-center">
                Join our newsletter to keep <br className="md:block hidden" />{" "}
                up to date with us!
              </p>
            </div>
            <div className="flex items-center gap-2.5 md:flex-row flex-col w-full md:w-auto">
              <div className="relative flex items-center w-full md:w-auto mb-4 md:mb-0">
                <img
                  src={asset.user}
                  alt="User"
                  className="absolute left-4 w-4 h-4"
                />
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="py-3 pl-10 pr-3 border border-[#2BBC7C] rounded-full w-full md:w-[300px] text-sm outline-none shadow-[0_0_8px_rgba(217,255,238,0.6)]"
                />
              </div>
              <button className="bg-[#2BBC7C] text-white border-none rounded-full py-3 px-6 text-sm font-medium cursor-pointer transition-colors hover:bg-[#249d69] w-full md:w-auto max-w-[200px] md:max-w-none">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-4 my-8">
          <a href="#" className="social-link">
            <img
              src={asset.twitter}
              className="w-[35px] h-[35px] object-contain"
              alt="Twitter"
            />
          </a>
          <a href="#" className="social-link">
            <img
              src={asset.facebook}
              className="w-[35px] h-[35px] object-contain"
              alt="Facebook"
            />
          </a>
          <a href="#" className="social-link">
            <img
              src={asset.youtube}
              className="w-[35px] h-[35px] object-contain"
              alt="YouTube"
            />
          </a>
          <a href="#" className="social-link">
            <img
              src={asset.linkdin}
              className="w-[35px] h-[35px] object-contain"
              alt="LinkedIn"
            />
          </a>
          <a href="#" className="social-link">
            <img
              src={asset.insta}
              className="w-[35px] h-[35px] object-contain"
              alt="Instagram"
            />
          </a>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex justify-center items-center gap-5 mb-8 font-['Zoho_Puvi'] font-normal text-base">
          <FooterLink href="/exams" text="Exams" />
          <FooterLink href="/paid-attended" text="Paid/ Attended" />
          <FooterLink href="/dashboard" text="Dashboard" />
          <FooterLink href="/terms-and-condition" text="Terms" />
          <FooterLink href="/privacy-policy" text="Privacy" />
          <FooterLink href="#" text="Cookies" />
          <FooterLink
            href="/refund-and-cancellation"
            text="Refund & Cancellation"
            isLast={true}
          />
        </div>

        {/* Mobile Navigation */}
        <div className="flex md:hidden flex-col items-center w-full mb-4 max-w-[360px]">
          <div className="flex justify-center items-center gap-2.5 w-full mb-2.5">
            <MobileLink href="/exams" text="Exams" />
            <span className="text-[#e0e0e0]">|</span>
            <MobileLink href="/paid-attended" text="Paid/ Attended" />
            <span className="text-[#e0e0e0]">|</span>
            <MobileLink href="/dashboard" text="Dashboard" isLast={true} />
          </div>

          <div className="flex flex-wrap justify-center items-center gap-2.5 w-full text-center">
            <MobileLink href="/terms-and-condition" text="Terms" />
            <span className="text-[#e0e0e0]">|</span>
            <MobileLink href="/privacy-policy" text="Privacy" />
            <span className="text-[#e0e0e0]">|</span>
            <MobileLink href="#" text="Cookies" />
            <span className="text-[#e0e0e0] hidden md:inline">|</span>
            
            <div className="w-full md:w-auto flex justify-center">
              <MobileLink
                href="/refund-and-cancellation"
                text="Refund & Cancellation"
                isLast={true}
              />
            </div>
          </div>

        </div>
      </div>

      {/* Footer Bottom */}
      <div className="w-full bg-[#212529] text-white py-6 flex flex-col items-center gap-2.5">
        <div className="flex items-center gap-2.5">
          <img
            src={asset.footer_logo}
            alt="Kasadara Kal"
            className="w-[145px] h-[45px] max-w-[360px]:w-[120px] max-w-[360px]:h-auto"
          />
        </div>
        <div className="text-sm text-[#adb5bd] max-w-[360px]:text-xs max-w-[360px]:text-center">
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

const FooterLink: React.FC<FooterLinkProps> = ({
  href,
  text,
  isLast = false,
}) => {
  return (
    <Link
      to={href}
      className={`text-[#21272C] no-underline transition-colors hover:text-[#2BBC7C] relative px-2.5 ${
        !isLast
          ? "after:content-[''] after:absolute after:right-[-10px] after:top-1/2 after:transform after:-translate-y-1/2 after:h-[18px] after:w-[1px] after:bg-[#e0e0e0]"
          : ""
      }`}
    >
      {text}
    </Link>
  );
};

interface MobileLinkProps {
  href: string;
  text: string;
  isLast?: boolean;
}

const MobileLink: React.FC<MobileLinkProps> = ({ href, text }) => {
  return (
    <Link
      to={href}
      className="text-[#21272C] no-underline transition-colors hover:text-[#2BBC7C] text-sm"
    >
      {text}
    </Link>
  );
};

export default Footer;
