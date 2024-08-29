import React from "react";
import CarCard from "./CarCard";
import BookingModal from "../CarBooking/BookingModal";

const CarList = (props: any) => {
  const [selectedCar, setSelectedCar] = React.useState<any>();
  return (
    <>
      <div className="flex justify-center mt-4">
        {props.carsList && props.carsList.length === 0 && (
          <span className="loading loading-spinner text-secondary text-5xl"></span>
        )}
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {props.carsList.map((car: any, index: number) => (
          <div
            key={car.id}
            onClick={() => {
              (window as any).my_modal_4.showModal();
              setSelectedCar(car);
            }}
          >
            <CarCard car={car} />
          </div>
        ))}
        <dialog id="my_modal_4" className="modal">
          <BookingModal car={selectedCar}/>
        </dialog>
      </div>
    </>
  );
};

export default CarList;
