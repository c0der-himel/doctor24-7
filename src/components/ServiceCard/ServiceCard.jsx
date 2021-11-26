import { Link } from 'react-router-dom';

const ServiceCard = (props) => {
  const { id, department, description, img } = props.service;

  return (
    <div className="p-4 md:w-1/3">
      <div className="h-full shadow rounded-lg overflow-hidden hover:shadow-2xl transition">
        <img
          className="mt-5 w-32 mx-auto object-cover object-center"
          src={img}
          alt="img"
        />
        <div className="p-6">
          <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">
            Doctor
          </h2>
          <h1 className="title-font text-2xl font-bold text-green-500 mb-3">
            {department}
          </h1>
          <p className="text-gray-600 mb-3">{description}</p>
          <div className="flex items-center flex-wrap ">
            <Link
              to={`/service/${id}`}
              className="text-green-500 inline-flex items-center md:mb-2 lg:mb-0"
            >
              Read More
              <svg
                className="w-4 h-4 ml-2"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 12h14"></path>
                <path d="M12 5l7 7-7 7"></path>
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
