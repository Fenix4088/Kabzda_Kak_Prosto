import React, {useCallback, useMemo, useState} from "react";
import {Select} from "../components/Select/Select";

export default {
  title: "useMemoHW17",
};

const cities = [
  {
    countryId: 1,
    value: "Kiev",
    population: 4000000,
  },
  {
    countryId: 2,
    value: "Moscow",
    population: 10000000,
  },
  {
    countryId: 3,
    value: "Minsk",
    population: 2000000,
  },
  {
    countryId: 1,
    value: "Lvov",
    population: 3800000,
  },
  {
    countryId: 2,
    value: "SaintPetersburg",
    population: 6300000,
  },
  {
    countryId: 3,
    value: "Brest",
    population: 3300000,
  },
];

const SelectContainer = React.memo(Select)

export const TheSameCountryCities = () => {
  console.log("TheSameCountryCities")
  const [selected, setSelected] = useState<string>("City");
  // const [data, setData] = useState(cities)

  const onSelectChange = useCallback((selectedValue: string): void => {
    setSelected(selectedValue);
  },[setSelected]);

  const filteredByCountry = useMemo(()=> {
    console.log("Test")
    return cities.filter(c => c.population < 4000000)
  }, cities);

  return (
      <div>
        <SelectContainer options={filteredByCountry} onChange={onSelectChange} selected={selected}/>
      </div>
  )
}
