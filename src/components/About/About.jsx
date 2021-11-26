import { Link } from 'react-router-dom';

const About = () => {
  return (
    <section id="about" className="text-gray-600 body-font">
      <div className="container mx-auto flex px-5 pb-24 pt-40 md:flex-row flex-col items-center">
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
          <img
            className="object-cover object-center rounded-lg shadow"
            alt="hero"
            src="https://i.ibb.co/41VPmp8/How-PCD-Pharma-Company-Can-Reach-More-Doctors-1024x624.jpg"
          />
        </div>
        <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
          <p className="mb-5 text-green-500 font-bold">About Doctor24/7</p>
          <h1 className="title-font sm:text-4xl text-3xl mb-4 text-gray-600 font-bold">
            Bring care to your
            <br className="hidden lg:inline-block" />
            home with one click
          </h1>
          <p className="mb-8 text-gray-600">
            An online platform to connect with doctors you need. Always caring
            about your health, we are here to help you! The best care is here.
            We are proudly serving millions of people across the country. We are
            leading professionals. Patients are highly satisfied. We are glad
            you are visiting our site.
          </p>
          <div className="flex justify-center">
            <Link
              to="/doctors"
              className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg transition"
            >
              Doctors
            </Link>
            <Link
              to="/services"
              className="ml-4 inline-flex text-gray-600 bg-gray-200 border-0 py-2 px-6 focus:outline-none hover:bg-gray-300 rounded text-lg transition"
            >
              Services
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
