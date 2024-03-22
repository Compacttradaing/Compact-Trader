import { useEffect, useState } from "react";
import { useCountry } from "../../pages/Dashboard/useCountry";
import { useSearchParams } from "react-router-dom";

function Filter() {
  const { countries, isLoading: isLoadCountry } = useCountry();
  const [options, setOptions] = useState();
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(
    function () {
      searchParams.set("country", options || "USA");
      setSearchParams(searchParams);
      // console.log(options);
    },
    [options, setSearchParams, searchParams]
  );

  if (isLoadCountry) return <h1>loading....</h1>;

  return (
    <select
      className="border-slate-500 border px-0.5 sm:px-4 sm:py-1.5 rounded-sm focus:outline-none"
      onChange={(e) => setOptions(e.target.value)}
    >
      {countries.map((country) => (
        <option key={country.id} value={country.country_id}>
          {country.country_id}
        </option>
      ))}
    </select>
  );
}

export default Filter;
