import supabase from "./supabase";

export default async function getGiftCard() {
  let { data, error } = await supabase.from("GiftCard").select("*");

  if (error) {
    console.error(error);
    throw new Error("Gift card could not been loaded");
  }

  return data;
}
