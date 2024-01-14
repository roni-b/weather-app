import supabase from './config/supabaseClient'

const authenticate = async ({ email, password }, isRegister) => {
  try {
    const authResponse = isRegister
    ? await supabase.auth.signUp({ email, password })
    : await supabase.auth.signIn({ email, password });

    const { data, error } = authResponse;

  } catch (error) {
    console.log(error)
  }
}



const all = {
  authenticate
}

export default all