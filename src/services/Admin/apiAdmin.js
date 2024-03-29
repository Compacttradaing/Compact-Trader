import supabase, { supabaseUrl } from "../supabase";

// Getting all users transaction to admin
export async function getUserTransaction() {
  const { data, error } = await supabase
    .from("Transaction")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) throw new Error(error.message);

  return data;
}

// Adding new trade offer
export async function addOffer({ country, giftcardName, rate }) {
  const { data, error } = await supabase
    .from("giftcards")
    .insert([{ country_id: country, name: giftcardName, rate }])
    .select();

  if (error) throw new Error(error.message);

  return data;
}

// Edit offer rates
export async function editRate({ newRate, id }) {
  const { error } = await supabase
    .from("giftcards")
    .update({ rate: newRate })
    .eq("id", id)
    .select();

  if (error) throw new Error(error.message);
}

// Editing the users transaction
export async function editUserTansaction({ status, reply, imageUrl, id }) {
  const hasImagePath = imageUrl?.startsWith?.(supabaseUrl);
  const randomId = Math.random();
  const imageName = imageUrl.map((img) =>
    `${randomId}-${img.imageName}`.replace("/", "")
  );
  const imagePath = imageName.map((i) => {
    return `${supabaseUrl}/storage/v1/object/public/Trade/${i}`;
  });

  const { data, error } = await supabase
    .from("Transaction")
    .update({ replyImage_url: imagePath, status, reply })
    .eq("id", id)
    .select();

  if (error) throw new Error(error.message);

  // console.log(data);

  // 2. Upload image
  imageUrl.map(async (img) => {
    const { error: storageError } = await supabase.storage
      .from("Trade")
      .upload(`${randomId}-${img.imageName}`.replace("/", ""), img.name);

    // 3. Delete the transaction if there was an error uploading image
    if (storageError) {
      console.error(storageError);
      throw new Error("reply image could not be uploaded");
    }
  });

  return data;
}
