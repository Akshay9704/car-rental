import React, { useEffect, useState } from "react";
import Image from "next/image";
import { FaGasPump } from "react-icons/fa";
import { MdAirlineSeatReclineNormal } from "react-icons/md";
import { PiSteeringWheelFill } from "react-icons/pi";

const CarCard = (props: any) => {
  const [car, setCar] = useState<any>();

  useEffect(() => {
    if (props.car) {
      setCar(props.car);
    }
  }, [props.car]);

  return car && (
    <div className="group bg-gray-100 p-4 hover:bg-white mx-2 cursor-pointer duration-200 border-gray-900">
      <h2 className="text-gray-900 text-[20px] font-medium mb-2">
        <span className="uppercase mx-1">{car.carBrand}</span>
        {car.name}
      </h2>
      <h2 className="text-gray-900 text-[28px] font-bold mb-2">
        <span className="text-gray-900 text-[12px] font-light">₹</span>
        {car.price}
        <span className="text-gray-900 text-[12px] font-light">/day</span>
      </h2>
      {car.image?.length > 0 && (
        <Image
          className="w-[250px] h-[150px] mb-3 object-contain"
          src={car.image[0].url}
          alt={car.name}
          width={220}
          height={200}
        />
      )}
      <div className="flex justify-around group-hover:hidden">
        <div className="text-center text-gray-900">
          <PiSteeringWheelFill className="w-full text-[22px] mb-2" />
          <h2 className="line-clamp-5 text-[14px] font-light">{car.carType}</h2>
        </div>
        <div className="text-center text-gray-900">
          <MdAirlineSeatReclineNormal className="w-full text-[22px] mb-2" />
          <h2 className="line-clamp-5 text-[14px] font-light">{car.seat}</h2>
        </div>
        <div className="text-center text-gray-900">
          <FaGasPump className="w-full text-[22px] mb-2" />
          <h2 className="line-clamp-5 text-[14px] font-light">{car.carAvg}</h2>
        </div>
      </div>
      <button className="hidden group-hover:block text-white bg-blue-500 w-full py-2 rounded-md mt-2">
        Book Now
      </button>
    </div>
  );
};

export default CarCard;
