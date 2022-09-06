import React, { useEffect, useState } from "react";
import { getData } from "../../context/getData";
import CreateCard from "../../components/cards";

const BrandPage = () => {
  const [brandData, setBrandData] = useState([]);
  useEffect(() => {
    getData(setBrandData);
  }, []);
  console.log(brandData);
  return <div>{brandData && <CreateCard data={brandData} />}</div>;
};
export default BrandPage;
