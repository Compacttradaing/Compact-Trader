import supabase from "./supabase";

export async function getAccountBalance() {
  const { data: curentUser } = await supabase.auth.getUser();

  const { data, error } = await supabase
    .from("users")
    .select("*")
    .eq("user_id", curentUser.user.id);

  if (error) throw new Error(error.message);

  return data[0].balance;
}
