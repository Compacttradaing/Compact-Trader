import { useEffect, useState } from "react";
import { useCountry } from "../pages/Dashboard/useCountry";

export function useGetCountry() {
  const { countries } = useCountry();
  const [option, setOption] = useState([""]);
  const [selectedOption, setSelectedOption] = useState(null);
  const [countryId, setCountryId] = useState("");

  useEffect(
    function () {
      function getData() {
        let arr = [];
        if (!countries) return [];
        countries.map((country) => {
          return arr.push({ value: country.country_id, label: country.name });
        });

        setOption(arr);
      }
      getData();
      if (!selectedOption) return;
      setCountryId(selectedOption?.value);
    },
    [countries, selectedOption]
  );

  return { option, setSelectedOption, countryId, selectedOption };
}
