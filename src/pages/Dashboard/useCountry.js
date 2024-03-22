import { useQuery } from "@tanstack/react-query";
import getCountries from "../../services/apiTrade";

export function useCountry() {
  const {
    isLoading,
    data: countries,
    error,
  } = useQuery({
    queryKey: ["countries"],
    queryFn: getCountries,
  });

  return { isLoading, countries };
}
