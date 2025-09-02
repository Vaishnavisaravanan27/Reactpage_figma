import React from 'react';

const Footer = () => {
  return (
    <footer
      id="contact"
      className="w-full bg-global-5 pt-[60px] pb-[60px] sm:pt-[90px] sm:pb-[90px] lg:pt-[120px] lg:pb-[120px]"
    >
      <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-[24px] sm:gap-[30px] lg:gap-[38px]">
          {/* Main Footer Content */}
          <div className="flex flex-col lg:flex-row justify-between items-start gap-8 lg:gap-0">
            {/* Company Info */}
            <div className="flex flex-col gap-[16px] w-full lg:w-[28%]">
              <div className="flex items-center gap-[4px]">
                <img 
                  src="/images/img_depth_5_frame_0.png" 
                  alt="VDart Logo" 
                  className="w-[28px] h-[32px]"
                />
                <span className="text-[24px] font-proxima font-normal italic leading-[24px] text-global-5">
                  VDart
                </span>
              </div>
              <p className="text-[14px] sm:text-[16px] lg:text-[18px] font-proxima font-normal leading-[18px] text-global-6">
                A breathtaking skyline, where towering skyscrapers meet the horizon, epitomizes urban grandeur.
              </p>
            </div>

            {/* Navigation Links */}
            <div className="flex flex-col sm:flex-row justify-between items-start w-full lg:w-[50%] gap-8 sm:gap-4">
              {/* Company Links */}
              <div className="flex flex-col gap-[24px] w-full sm:w-[20%]">
                <h3 className="text-[18px] font-proxima font-semibold leading-[18px] text-global-4">
                  COMPANY
                </h3>
                <div className="flex flex-col gap-[6px]">
                  <a href="#" className="text-[18px] font-proxima font-normal leading-[18px] text-global-6 hover:text-global-5 transition-colors">
                    Home
                  </a>
                  <a href="#" className="text-[18px] font-proxima font-normal leading-[18px] text-global-6 hover:text-global-5 transition-colors">
                    About us
                  </a>
                  <a href="#" className="text-[18px] font-proxima font-normal leading-[18px] text-global-6 hover:text-global-5 transition-colors">
                    Listing
                  </a>
                  <a href="#" className="text-[18px] font-proxima font-normal leading-[18px] text-global-6 hover:text-global-5 transition-colors">
                    Agents
                  </a>
                </div>
              </div>

              {/* Support Links */}
              <div className="flex flex-col gap-[24px] w-full sm:w-[20%]">
                <h3 className="text-[18px] font-proxima font-semibold leading-[18px] text-global-4">
                  SUPPORT
                </h3>
                <ul className="flex flex-col gap-[6px]">
                  <li>
                    <a href="#" className="text-[18px] font-proxima font-normal leading-[18px] text-global-6 hover:text-global-5 transition-colors">
                      Contact us
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-[18px] font-proxima font-normal leading-[18px] text-global-6 hover:text-global-5 transition-colors">
                      Help
                    </a>
                  </li>
                </ul>
              </div>

              {/* Social Links */}
              <div className="flex flex-col gap-[24px] w-full sm:w-[26%]">
                <h3 className="text-[18px] font-proxima font-semibold leading-[18px] text-global-4">
                  SOCIAL
                </h3>
                <div className="flex justify-between items-center max-w-[192px]">
                  <a href="#" className="hover:opacity-80 transition-opacity">
                    <img src="/images/img_clip_path_group.svg" alt="Social Media" className="w-[24px] h-[24px]" />
                  </a>
                  <a href="#" className="hover:opacity-80 transition-opacity">
                    <img src="/images/img_facebook_circle_fill.svg" alt="Facebook" className="w-[24px] h-[24px]" />
                  </a>
                  <a href="#" className="hover:opacity-80 transition-opacity">
                    <img src="/images/img_group.svg" alt="Social Media" className="w-[24px] h-[24px]" />
                  </a>
                  <a href="#" className="hover:opacity-80 transition-opacity">
                    <img src="/images/img_linkedin.svg" alt="LinkedIn" className="w-[24px] h-[24px]" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Divider Line */}
          <div className="w-full h-[1px] bg-global-12"></div>

          {/* Copyright */}
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-[16px] sm:text-[18px] font-proxima font-normal leading-[18px] text-global-6">
              © VDart Inc. All Rights Reserved.
            </p>
            <p className="text-[16px] sm:text-[18px] font-proxima font-normal leading-[18px] text-global-6">
              Privacy Policy.Terms and condition
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
