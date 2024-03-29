import supabase from "./supabase";

export default async function getCountries() {
  const { data, error } = await supabase.from("countries").select("*");
  // .order("date");

  if (error) {
    console.error(error);
    throw new Error("Cabin could not been loaded");
  }

  return data;
}

export async function getGiftCard() {
  const { data, error } = await supabase
    .from("giftcards")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    console.error(error);
    throw new Error("Gift card could not been loaded");
  }

  return data;
}
