import { useEffect, useState } from 'react';
import ServiceCard from '../ServiceCard/ServiceCard';

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch('https://c0der-himel.github.io/doctor247-api/services.json')
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <section id="services" className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="text-center mb-20">
          <h1 className="sm:text-4xl text-2xl font-bold title-font text-gray-600 mb-4">
            Services
          </h1>
          <div className="flex mt-4 justify-center">
            <div className="w-20 h-1 rounded-full bg-green-500 inline-flex"></div>
          </div>
        </div>
        <div className="flex flex-wrap -m-4">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
