import Facebook from "./Icons/Facebook";
import FooterLogo from "./Icons/HomeLogo";
import Instagram from "./Icons/Instagram";
import Twitter from "./Icons/Twitter";
import Linkedin from "./Icons/Linkedin";

const Footer = () => {
  return (
    <div className="flex flex-col gap-2 bg-violet-600 pt-12 pb-6 px-16 border-t-black border-solid max-md:px-5">
      <div className="grid grid-cols-4 max-md:grid-cols-2 max-sm:grid-cols-1 max-lg:grid-cols-3">
        <div className="flex flex-col gap-2">
          <FooterLogo color="white" />
          <div className="text-white text-lg self-stretch mt-7">
            The First Productive Familie App.
          </div>
          <div className="flex gap-4">
            <Facebook />
           <Twitter />
           <Instagram />
           <Linkedin />
          </div>
        </div>
        <div className="items-stretch flex flex-col text-md text-white max-md:mt-10">
          <div className="text-xl font-medium">Services</div>
          <div className="mt-5">Branding</div>
          <div className="mt-6">Web design</div>
          <div className="mt-6">Social media</div>
          <div className="whitespace-nowrap mt-6">Influencer marketing</div>
        </div>
        <div className="items-stretch flex flex-col text-md text-white whitespace-nowrap max-md:mt-10">
          <div className="text-xl font-medium">
            Quick <span className="lowercase">Links</span>
          </div>
          <div className="mt-5">Terms</div>
          <div className="mt-6">Privacy</div>
        </div>
        <div className="items-stretch flex flex-col text-md text-white whitespace-nowrap max-md:mt-10">
          <div className="text-xl font-medium">
            Get <span className="lowercase">in touch</span>
          </div>
          <div className="mt-5">
            1234 Main Street Riyadh, 10001, Saudi Arabia
          </div>
          <div className="mt-6 flex flex-col gap-3">
            <span>Download Now</span>
            <div className="grid grid-cols-2 gap-2 max-xl:grid-cols-2">
              <div className="bg-white rounded-2xl flex items-center justify-center gap-2 py-2 px-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="20"
                  viewBox="0 0 18 20"
                  fill="none"
                >
                  <g clipPath="url(#clip0_74_1902)">
                    <path
                      d="M12.7489 5.27004L3.79082 0.297234C3.44175 0.101464 3.04668 -0.00100773 2.64487 7.47054e-06C2.24306 0.00102267 1.84853 0.105489 1.50049 0.303021L9.92063 8.11513L12.7489 5.27004Z"
                      fill="#6B38E8"
                    />
                    <path
                      d="M0.333153 1.47559C0.116754 1.83159 0.00207445 2.23847 0.00122174 2.65327V17.2937C0.000837336 17.6968 0.107497 18.0929 0.310633 18.4428L8.99968 9.60564L0.333153 1.47559Z"
                      fill="#6B38E8"
                    />
                    <path
                      d="M16.8618 7.43229L14.2192 5.90137L11.2498 9.01786L14.889 12.5418L16.863 11.398C17.2097 11.1915 17.4964 10.9005 17.6954 10.5531C17.8944 10.2056 17.9988 9.81359 17.9987 9.41481C17.9986 9.01604 17.8939 8.62405 17.6947 8.27675C17.4956 7.92944 17.2087 7.63858 16.8618 7.43229Z"
                      fill="#6B38E8"
                    />
                    <path
                      d="M1.50049 19.6505C1.85334 19.8748 2.26366 19.996 2.68376 20C3.0913 19.9981 3.49037 19.8854 3.83687 19.6744L13.4988 13.8906L10.0198 10.4098L1.50049 19.6505Z"
                      fill="#6B38E8"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_74_1902">
                      <rect width="18" height="20" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                <span className="text-violet-600">Google Play</span>
              </div>

              <div className="bg-white rounded-2xl flex items-center justify-center gap-2 py-2 px-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="17"
                  height="20"
                  viewBox="0 0 17 20"
                  fill="none"
                >
                  <g clipPath="url(#clip0_74_1911)">
                    <path
                      d="M15.809 13.7424C15.2164 13.4477 14.7206 12.9894 14.3803 12.4219C14.0399 11.8543 13.8692 11.2011 13.8883 10.5395C13.9056 9.92084 14.0768 9.3162 14.3865 8.78026C14.6961 8.24431 15.1344 7.79396 15.6617 7.46988L16.1012 7.13608L15.7956 6.67417C15.3259 6.00303 14.6983 5.4578 13.9681 5.08659C13.2379 4.71538 12.4276 4.5296 11.6086 4.54563H11.6029C10.7582 4.58201 9.92873 4.78391 9.16174 5.13989C8.90356 5.26068 8.63158 5.34945 8.35186 5.40425C7.96261 5.34665 7.58286 5.23706 7.22277 5.07843C6.59644 4.80374 5.92774 4.63818 5.2456 4.58893C3.78781 4.58893 0.00537109 5.7001 0.00537109 10.7753C0.00537109 13.8824 2.46134 19.983 5.43007 20.0003H5.44951C6.12872 19.9684 6.79625 19.8117 7.41862 19.5378C7.77795 19.3744 8.16131 19.27 8.5539 19.2287C9.05216 19.2331 9.54273 19.352 9.98767 19.5763C10.4893 19.8239 11.0392 19.9583 11.5984 19.9699C14.4232 19.9699 16.3684 14.7021 16.3684 14.4568C16.3689 14.0808 16.0841 13.9091 15.809 13.7424Z"
                      fill="#6B38E8"
                    />
                    <path
                      d="M12.7299 0C10.5195 0 7.84462 2.34459 8.22308 4.54011C8.82322 4.56034 9.42107 4.45648 9.97923 4.23503C10.5374 4.01359 11.0438 3.67933 11.4669 3.25317C11.8899 2.82701 12.2204 2.31812 12.4378 1.75835C12.6551 1.19858 12.7546 0.599973 12.7299 0Z"
                      fill="#6B38E8"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_74_1911">
                      <rect width="16.3743" height="20" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                <span className="text-violet-600">Apple Store</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-16 border-t-[1px]">
        <span className="flex justify-center items-center text-white pt-4">
          © 2024 Mawsool. All Rights Reserved.
        </span>
      </div>
    </div>
  );
};

export default Footer;
