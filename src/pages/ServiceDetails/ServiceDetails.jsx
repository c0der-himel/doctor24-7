import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const ServiceDetails = () => {
  const { serviceId } = useParams();
  const [serviceDetails, setServiceDetails] = useState({});

  useEffect(() => {
    fetch('https://c0der-himel.github.io/doctor247-api/services.json')
      .then((res) => res.json())
      .then((data) => setServiceDetails(data[serviceId - 1]));
  }, [serviceId]);

  return (
    <section className="text-gray-600 body-font">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-bold text-green-500">
            {serviceDetails.department}
          </h1>
          <p className="mb-8 text-gray-600">{serviceDetails.information}</p>
          <h3 className="title-font sm:text-2xl text-xl mb-4 font-bold text-green-500">
            {serviceDetails.suggestion}
          </h3>
          <p className="mb-8 text-gray-600 test">{serviceDetails.symptoms}</p>
          <div className="flex justify-center">
            <Link
              to="/doctors"
              className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg transition"
            >
              Appoint a Doctor
            </Link>
            <Link
              to="/services"
              className="ml-4 inline-flex text-gray-600 bg-gray-200 border-0 py-2 px-6 focus:outline-none hover:bg-gray-300 rounded text-lg transition"
            >
              Back
            </Link>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src={serviceDetails.img}
          />
        </div>
      </div>
    </section>
  );
};

export default ServiceDetails;
