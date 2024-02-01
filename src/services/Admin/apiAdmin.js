import supabase from "../supabase";

export async function getUserTransaction() {
  const { data, error } = await supabase.from("Transaction").select("*");

  if (error) throw new Error(error.message);

  return data;
}

export async function addOffer({ country, giftcardName, rate }) {
  const { data, error } = await supabase
    .from("giftcards")
    .insert([{ country_id: country, name: giftcardName, rate }])
    .select();

  if (error) throw new Error(error.message);

  return data;
}
