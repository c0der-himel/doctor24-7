import {
  faEnvelopeOpenText,
  faMapMarkerAlt,
  faPhone,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import logo from '../../assets/img/logo/logo.png';

const Footer = () => {
  const locationIcon = (
    <FontAwesomeIcon className="text-green-500" icon={faMapMarkerAlt} />
  );
  const phoneIcon = (
    <FontAwesomeIcon className="text-green-500" icon={faPhone} />
  );
  const emailIcon = (
    <FontAwesomeIcon className="text-green-500" icon={faEnvelopeOpenText} />
  );

  return (
    <footer className="text-gray-600 body-font">
      <div className="container px-5 pt-24 mx-auto">
        <div className="flex flex-wrap md:text-left text-center order-first">
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-bold text-green-500 tracking-widest text-xl mb-3">
              About
            </h2>
            <nav className="list-none mb-10">
              <li>
                <a
                  href="/"
                  className="text-gray-600 hover:text-green-500 transition mb-2 inline-block"
                >
                  About US
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="text-gray-600 hover:text-green-500 transition mb-2 inline-block"
                >
                  Listing
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="text-gray-600 hover:text-green-500 transition mb-2 inline-block"
                >
                  How it works
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="text-gray-600 hover:text-green-500 transition mb-2 inline-block"
                >
                  Services
                </a>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-bold text-green-500 tracking-widest text-xl mb-3">
              Useful Links
            </h2>
            <nav className="list-none mb-10">
              <li>
                <a
                  href="/"
                  className="text-gray-600 hover:text-green-500 transition mb-2 inline-block"
                >
                  Specialist
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="text-gray-600 hover:text-green-500 transition mb-2 inline-block"
                >
                  Clinic
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="text-gray-600 hover:text-green-500 transition mb-2 inline-block"
                >
                  Hospital
                </a>
              </li>
              <li>
                <a
                  href="/"
                  className="text-gray-600 hover:text-green-500 transition mb-2 inline-block"
                >
                  Download App
                </a>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-bold text-green-500 tracking-widest text-xl mb-3">
              Contact
            </h2>
            <div className="list-none mb-10">
              <p className="mb-3">
                {locationIcon}
                <span className="ml-3">
                  Flat 20, Reynolds Neck, North Helenaville, FV77 8WS
                </span>
              </p>
              <p className="mb-3">
                {phoneIcon}
                <span className="ml-3">+2(305) 587-3407</span>
              </p>
              <p className="mb-3">
                {emailIcon}
                <span className="ml-3">info@example.com</span>
              </p>
            </div>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-bold text-green-500 tracking-widest text-xl mb-3">
              SUBSCRIBE
            </h2>
            <div className="flex xl:flex-nowrap md:flex-nowrap lg:flex-wrap flex-wrap justify-center items-end md:justify-start">
              <div className="relative w-40 sm:w-auto xl:mr-4 lg:mr-0 sm:mr-4 mr-2">
                <label
                  htmlFor="footer-field"
                  className="leading-7 text-sm text-gray-600"
                >
                  Email
                </label>
                <input
                  type="text"
                  id="footer-field"
                  name="footer-field"
                  className="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:bg-transparent focus:ring-2 focus:ring-green-200 focus:border-green-500 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-500 ease-in-out"
                />
              </div>
              <button className="lg:mt-2 xl:mt-0 flex-shrink-0 inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded transition">
                Send
              </button>
            </div>
            <p className="text-gray-500 text-sm mt-2 md:text-left text-center">
              Subscribe to get the latest updates
            </p>
          </div>
        </div>
      </div>
      <div className="bg-green-100 rounded-lg shadow">
        <div className="container px-5 py-6 mx-auto flex items-center sm:flex-row flex-col">
          <a
            href="/"
            className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900"
          >
            <img className="w-10" src={logo} alt="logo" />
            <span className="ml-3 text-xl">Doctor24/7</span>
          </a>
          <p className="text-sm text-gray-500 sm:ml-6 sm:mt-0 mt-4">
            ?? 2021 Doctor24/7 ???
            <a
              href="/"
              rel="noopener noreferrer"
              className="text-gray-600 ml-1"
              target="_blank"
            >
              @doctor24/7
            </a>
          </p>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
            <a href="/" className="text-gray-500">
              <svg
                fill="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
              </svg>
            </a>
            <a href="/" className="ml-3 text-gray-500">
              <svg
                fill="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
              </svg>
            </a>
            <a href="/" className="ml-3 text-gray-500">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
              </svg>
            </a>
            <a href="/" className="ml-3 text-gray-500">
              <svg
                fill="currentColor"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="0"
                className="w-5 h-5"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="none"
                  d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
                ></path>
                <circle cx="4" cy="4" r="2" stroke="none"></circle>
              </svg>
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
