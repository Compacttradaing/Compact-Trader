import supabase from "./supabase";

export async function signup({ firstName, lastName, email, phone, password }) {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        firstName,
        lastName,
        phone,
      },
    },
  });

  if (error) {
    throw new Error(error.message);
  }

  const { data: userAccountData, error: accountError } = await supabase
    .from("users")
    .insert([
      {
        user_id: data?.user?.id,
        balance: 0,
      },
    ]);

  if (accountError) {
    throw new Error(error.message);
  }
}

export async function login({ email, password }) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });
  if (error) throw new Error(error.message);

  return data;
}

export async function getCurrentUser() {
  const { data: session } = await supabase.auth.getSession();
  if (!session.session) return null;

  const { data, error } = await supabase.auth.getUser();

  //   console.log(data.user.id);

  if (error) throw new Error(error.message);

  return data?.user;
}

export async function logout() {
  const { data, error } = await supabase.auth.signOut();
  if (error) throw new Error(error.message);

  return data;
}
