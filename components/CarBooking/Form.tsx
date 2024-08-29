import { createBooking, getLocations } from "@/services";
import React from "react";
import { BookCreatedFlagContext } from "@/context/BookCreatedFlag";

function Form(props: any) {
  const [storeLocation, setStoreLocation] = React.useState<any>([]);
  const [formValues, setFormValues] = React.useState<any>({
    pickUpLocation: "",
    pickUpDate: "",
    dropOffDate: "",
    pickUpTime: "",
    dropOffTime: "",
    contactNumber: "",
    carId: {
      connect: {
        id: "",
      },
    },
  });

  const {showToast, setShowToast} = React.useContext(BookCreatedFlagContext);

  const getStoreLocation = async () => {
    const res: any = await getLocations();
    setStoreLocation(res?.storeLocations || []);
  };

  React.useEffect(() => {
    getStoreLocation();
  }, []);

  React.useEffect(() => {
    if (props.car) {
      setFormValues((prevValues: any) => ({
        ...prevValues,
        carId: {
          connect: {
            id: props.car.id,
          },
        },
      }));
    }
  }, [props.car]);

  const handleChange = (e: any) => {
    setFormValues((prevValues: any) => ({
      ...prevValues,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: any) => {
    const res = await createBooking(formValues);
    if (res) {
      setShowToast(true);
      setTimeout(() => {
        setShowToast(false);
      }, 3000);
    }
  };

  return (
    <div>
      <div className="flex flex-col w-full mb-2">
        <label className="text-gray-400">Pickup Location</label>
        <select
          className="select select-bordered w-full outline-none"
          name="pickUpLocation"
          onChange={handleChange}
        >
          <option disabled selected>
            Pickup Location
          </option>
          {storeLocation.map((location: any, index: number) => (
            <option key={index} value={location.address}>
              {location.address}
            </option>
          ))}
        </select>
      </div>
      <div className="flex gap-5 mb-5">
        <div className="flex flex-col w-full">
          <label className="text-gray-400">Pickup Date</label>
          <input
            type="date"
            name="pickUpDate"
            onChange={handleChange}
            className="input input-bordered w-full max-w-lg outline-none"
          />
        </div>
        <div className="flex flex-col w-full">
          <label className="text-gray-400">Drop Date</label>
          <input
            type="date"
            name="dropOffDate"
            onChange={handleChange}
            className="input input-bordered w-full max-w-lg outline-none"
          />
        </div>
      </div>
      <div className="flex gap-5 mb-5">
        <div className="flex flex-col w-full">
          <label className="text-gray-400">Pickup Up Time</label>
          <input
            type="time"
            name="pickUpTime"
            onChange={handleChange}
            className="input input-bordered w-full max-w-lg outline-none"
          />
        </div>
        <div className="flex flex-col w-full">
          <label className="text-gray-400">Drop Off Time</label>
          <input
            type="time"
            name="dropOffTime"
            onChange={handleChange}
            className="input input-bordered w-full max-w-lg outline-none"
          />
        </div>
      </div>
      <div className="flex flex-col w-full mb-5">
        <label className="text-gray-400">Contact Number</label>
        <input
          type="number"
          name="contactNumber"
          onChange={handleChange}
          className="input input-bordered w-full max-w-lg outline-none"
        />
      </div>
      <div className="flex justify-end">
        <button className="btn mr-2">Close</button>
        <button className="btn btn-primary" onClick={handleSubmit}>
          Save
        </button>
      </div>
    </div>
  );
}

export default Form;
