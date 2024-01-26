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

export async function addBankAccount({ fullName, bankName, accountNumber }) {
  const { data: curentUser } = await supabase.auth.getUser();

  const { data, error } = await supabase
    .from("Bank")
    .insert([
      { user_id: curentUser?.user?.id, fullName, bankName, accountNumber },
    ])
    .select();

  if (error) {
    throw new Error(error.message);
  }

  return data;
}

export async function getBankAccount() {
  const { data: curentUser } = await supabase.auth.getUser();

  const { data, error } = await supabase
    .from("Bank")
    .select("*")
    .eq("user_id", curentUser.user.id);

  if (error) throw new Error(error.message);

  return data;
}

export async function deleteBankAccount(id) {
  const { data, error } = await supabase.from("Bank").delete().eq("id", id);

  if (error) throw new Error(error.message);

  return data;
}

export async function getTransaction() {
  const { data: curentUser } = await supabase.auth.getUser();
  const { data, error } = await supabase
    .from("Transaction")
    .select("*")
    .eq("user_id", curentUser.user.id);

  if (error) throw new Error(error.message);

  return data;
}
