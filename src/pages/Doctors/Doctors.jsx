import { useEffect, useState } from 'react';
import DoctorCard from '../../components/DoctorCard/DoctorCard';

const Doctors = () => {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    fetch(
      'https://raw.githubusercontent.com/c0der-himel/doctor247-api/main/doctors.json'
    )
      .then((res) => res.json())
      .then((data) => setDoctors(data));
  }, []);

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="text-center mb-20">
          <h1 className="sm:text-4xl text-2xl font-bold title-font text-gray-600 mb-4">
            Doctors
          </h1>
          <div className="flex mt-4 justify-center">
            <div className="w-20 h-1 rounded-full bg-green-500 inline-flex"></div>
          </div>
        </div>
        <div className="flex flex-wrap -m-4">
          {doctors.map((doctor) => (
            <DoctorCard key={doctor.id} doctor={doctor} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Doctors;
