import React from "react";

const CarsFiltersOption = ({ carsOrgList, setBrand, orderCarList }: any) => {
  const [brandList, setBrandList] = React.useState<any>([]);
  const BrandSet = new Set();
  const filterCarList = () => {
    carsOrgList.forEach((ele: any) => {
      BrandSet.add(ele.carBrand);
    });
    setBrandList(Array.from(BrandSet));
  };

  React.useEffect(() => {
    if (carsOrgList) {
      filterCarList();
    }
  }, [carsOrgList]);

  return (
    <div className="my-10 flex items-center justify-between">
      <div>
        <h2 className="text-[30px] font-bold">Cars Catalog</h2>
        <h2>Explore our cars here for rental</h2>
      </div>
      <div className="flex gap-5">
        <select className="select select-bordered w-full max-w-xs"
        onChange={(e) => orderCarList(e.target.value)}
        >
          <option disabled selected>
            Price
          </option>
          <option value={-1}>Min to Max</option>
          <option value={1}>Max to Min</option>
        </select>
        <select className="select select-bordered w-full max-w-xs"
        onChange={(e) => setBrand(e.target.value)}
        >
          <option disabled selected>
            Manufacturer
          </option>
          {brandList && brandList.map((brand: string, index: number) => (
            <option key={index}>{brand}</option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default CarsFiltersOption;
