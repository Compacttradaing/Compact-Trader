import supabase, { supabaseUrl } from "./supabase";

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

export async function createTransaction({
  type,
  amount,
  country,
  imageN,
  e_code,
  fullName,
  price,
}) {
  const hasImagePath = imageN?.startsWith?.(supabaseUrl);
  const randomId = Math.random();
  const imageName = imageN.map((img) =>
    `${randomId}-${img.imageName}`.replace("/", "")
  );
  const imagePath = imageName.map((i) => {
    return `${supabaseUrl}/storage/v1/object/public/Trade/${i}`;
  });

  console.log(imageName);
  console.log(imagePath);

  const { data: curentUser } = await supabase.auth.getUser();

  const { data, error } = await supabase
    .from("Transaction")
    .upsert(
      [
        {
          user_id: curentUser.user.id,
          full_name: fullName,
          type,
          amount,
          country,
          uploadImage_url: imagePath,
          status: "Pending",
          e_code,
          price,
        },
      ],
      { onConflict: ["id"] }
    )
    .select();

  if (error) {
    console.error(error);
    throw new Error("Transaction could not been created");
  }

  // 2. Upload image
  if (hasImagePath) return data;
  imageN.map(async (img) => {
    const { error: storageError } = await supabase.storage
      .from("Trade")
      .upload(`${randomId}-${img.imageName}`.replace("/", ""), img.name);

    // 3. Delete the transaction if there was an error uploading image
    if (storageError) {
      await supabase.from("Transaction").delete().eq("id", data.id);
      console.error(storageError);
      throw new Error(
        "Trade image could not be uploaded and the cabin was not created"
      );
    }
  });
}
