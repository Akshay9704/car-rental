"use client";
import CarList from "@/components/Home/CarList";
import CarsFiltersOption from "@/components/Home/CarsFiltersOption";
import Hero from "@/components/Home/Hero";
import SearchInput from "@/components/Home/SearchInput";
import ToastMsg from "@/components/ToastMsg";
import { BookCreatedFlagContext } from "@/context/BookCreatedFlag";
import { getCarsList } from "@/services";
import { useEffect, useState } from "react";

export default function Home() {
  const [carsList, setCarsList] = useState<any>([]);
  const [carsOrgList, setCarsOrgList] = useState<any>([]);
  const [showToast, setShowToast] = useState<boolean>(false);

  const getCarList = async () => {
    try {
      const res: any = await getCarsList();
      setCarsList(res?.carLists);
      setCarsOrgList(res?.carLists);
    } catch (error) {
      console.error("Error fetching car list:", error);
    }
  };

  const filterCarList = (brand: string) => {
    if (brand === "All") {
      setCarsList(carsOrgList);
    } else {
      const filteredList = carsOrgList.filter(
        (ele: any) => ele.carBrand === brand
      );
      setCarsList(filteredList);
    }
  };

  const orderCarList = (order: string) => {
    const sortedData = [...carsOrgList].sort((a: any, b: any) =>
      parseInt(order) === -1 ? a.price - b.price : b.price - a.price
    );
    setCarsList(sortedData);
  };

  useEffect(() => {
    if (showToast) {
      setTimeout(() => {
        setShowToast(false);
      }, 3000);
    }
  }, [showToast]);

  useEffect(() => {
    getCarList();
  }, []);

  return (
    <div className="p-5 sm:px-10 md:px-20">
      <BookCreatedFlagContext.Provider value={{ showToast, setShowToast }}>
        <Hero />
        <SearchInput />
        <CarsFiltersOption
          carsOrgList={carsOrgList}
          setBrand={(val: any) => filterCarList(val)}
          orderCarList={(val: any) => orderCarList(val)}
        />
        <CarList carsList={carsList} />
        {/* Toast Message */}
        {showToast ? <ToastMsg msg={"Booking Created Successfully"} /> : null}
      </BookCreatedFlagContext.Provider>
    </div>
  );
}
