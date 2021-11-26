import { useHistory } from 'react-router-dom';
import pageNotFoundImage from '../../assets/img/404/404.svg';

const PageNotFound = () => {
  const history = useHistory();

  const handleGoBackToHome = () => history.push('/');

  return (
    <section className="text-gray-600 body-font relative">
      <div className="container px-5 pb-24 mx-auto">
        <div className="lg:w-1/2 md:w-2/3 mx-auto">
          <img src={pageNotFoundImage} alt="404" />
        </div>
        <div className="flex flex-col text-center w-full mb-12">
          <h1 className="sm:text-3xl text-2xl font-bold title-font mb-4 text-green-500">
            Page Not Found
          </h1>
          <p className="lg:w-2/3 mx-auto text-gray-600">
            The page you are looking for doesn't exist
          </p>
        </div>
        <div className="lg:w-1/2 md:w-2/3 mx-auto">
          <div className="flex flex-wrap -m-2">
            <div className="p-2 w-full">
              <button
                onClick={handleGoBackToHome}
                className="flex mx-auto text-white bg-green-500 border-0 py-2 px-8 focus:outline-none hover:bg-green-600 rounded text-lg transition"
              >
                Go Back to Home
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PageNotFound;
