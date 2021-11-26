import { Disclosure, Menu, Transition } from '@headlessui/react';
import { MenuIcon, XIcon } from '@heroicons/react/outline';
import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import userProfile from '../../assets/img/header/user.png';
import logo from '../../assets/img/logo/logo.png';
import useAuth from '../../hooks/useAuth';

const navigation = [
  { name: 'Home', href: '/', current: false },
  { name: 'About', href: '/home#about', current: false },
  { name: 'Testimonials', href: '/home#testimonials', current: false },
  { name: 'Services', href: '/services', current: false },
  { name: 'Doctors', href: '/doctors', current: false },
  { name: 'Contact', href: '/contact', current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

const Header = () => {
  const { user, logOut } = useAuth();

  return (
    <Disclosure as="nav" className="bg-white sticky top-0 z-50">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 shadow rounded-lg">
            <div className="relative flex items-center justify-between h-16">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex-shrink-0 flex items-center">
                  <img
                    className="block lg:hidden h-10 w-auto"
                    src={logo}
                    alt="Workflow"
                  />
                  <img
                    className="hidden lg:block h-10 w-auto"
                    src={logo}
                    alt="Workflow"
                  />
                </div>
                <div className="hidden sm:block sm:ml-6">
                  <div className="flex space-x-4 mt-1 text-center">
                    {navigation.map((item) => (
                      <HashLink
                        key={item.name}
                        to={item.href}
                        className={classNames(
                          item.current
                            ? 'bg-green-500 text-white'
                            : 'text-gray-600 hover:bg-green-500 hover:text-white transition',
                          'px-4 py-2 rounded text-lg font-medium'
                        )}
                        aria-current={item.current ? 'page' : undefined}
                      >
                        {item.name}
                      </HashLink>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                {/* Profile dropdown */}
                <Menu as="div" className="ml-3 relative">
                  <div className="flex">
                    <p className="mt-1 mr-3 font-bold text-xl text-green-500">
                      {user?.displayName ? user.displayName : ''}
                    </p>
                    <Menu.Button className="bg-green-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-green-500 focus:ring-white">
                      <span className="sr-only">Open user menu</span>
                      <img
                        className="h-8 w-8 rounded-full"
                        src={user?.photoURL ? user.photoURL : userProfile}
                        alt="user"
                      />
                    </Menu.Button>
                  </div>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-green-500 ring-opacity-5 focus:outline-none text-center">
                      {user?.email ? (
                        <Menu.Item>
                          {({ active }) => (
                            <Link
                              to="/"
                              onClick={logOut}
                              className={classNames(
                                active ? 'bg-green-100' : '',
                                'block px-4 py-2 text-lg font-bold text-gray-600'
                              )}
                            >
                              Log Out
                            </Link>
                          )}
                        </Menu.Item>
                      ) : (
                        <div>
                          <Menu.Item>
                            {({ active }) => (
                              <Link
                                to="/login"
                                className={classNames(
                                  active ? 'bg-green-100' : '',
                                  'block px-4 py-2 text-lg font-bold text-gray-600'
                                )}
                              >
                                Log In
                              </Link>
                            )}
                          </Menu.Item>
                          <Menu.Item>
                            {({ active }) => (
                              <Link
                                to="/register"
                                className={classNames(
                                  active ? 'bg-green-100' : '',
                                  'block px-4 py-2 text-lg font-bold text-gray-600'
                                )}
                              >
                                Register
                              </Link>
                            )}
                          </Menu.Item>
                        </div>
                      )}
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>
          </div>
          <Disclosure.Panel className="sm:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 text-center">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={classNames(
                    item.current
                      ? 'bg-green-500 text-gray-600'
                      : 'text-gray-600 hover:bg-green-700 hover:text-green-500',
                    'block px-3 py-2 rounded-md text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default Header;
