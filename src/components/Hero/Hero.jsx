import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Hero = () => {
  const { user } = useAuth();

  return (
    <div
      className="relative py-24 flex content-center items-center justify-center"
      style={{
        minHeight: '100vh',
      }}
    >
      <div
        className="absolute top-0 w-full h-full bg-center bg-cover"
        style={{
          backgroundImage: "url('https://i.ibb.co/tJpWSqb/hero.jpg')",
        }}
      >
        <span
          id="blackOverlay"
          className="w-full h-full absolute bg-green-900 opacity-80"
        ></span>
      </div>
      <div className="container relative mx-auto">
        <div className="items-center flex flex-wrap">
          <div className="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
            <div className="pr-12">
              <h1 className="text-white font-semibold text-5xl">Doctor24/7</h1>
              <p className="mt-4 text-lg text-gray-300">
                An online platform to connect with doctors you need. Always
                caring about your health, we are here to help you!
              </p>
              {user?.email ? (
                <div className="btn-group mt-10">
                  <Link
                    to="/services"
                    className="bg-green-500 hover:bg-green-600 px-12 py-3 text-white rounded mr-3 transition text-lg"
                  >
                    Services
                  </Link>
                  <Link
                    to="/doctors"
                    className="hover:bg-green-600 border border-green-600 px-12 py-3 text-white rounded ml-3 transition text-lg"
                  >
                    Doctors
                  </Link>
                </div>
              ) : (
                <div className="btn-group mt-10">
                  <Link
                    to="/login"
                    className="bg-green-500 hover:bg-green-600 px-12 py-3 text-white rounded mr-3 transition text-lg"
                  >
                    LogIn
                  </Link>
                  <Link
                    to="/register"
                    className="hover:bg-green-600 border border-green-600 px-12 py-3 text-white rounded ml-3 transition text-lg"
                  >
                    Register
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
