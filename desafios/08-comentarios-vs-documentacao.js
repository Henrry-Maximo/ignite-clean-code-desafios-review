 
/* 
  Essa função `convertImageToJPG` realiza a conversão das imagens para JPG a fim de evitar erros de incompatibilidade.
  Mais informações na issue https://github.com/rocketseat-education/example-repository/issues/1
*/

async function registerUserInDatabase(data) {
  const { email, name, avatar } = data;

  if (!avatar || !email || !name) return { error: 'avatar or email or name is required' }

  const userMail = getUserByEmail(email);

  if (userMail) {
    return { error: 'email already used' }
  }

  const avatarInFormattingJPG = convertImageToJPG(avatar);

  const user = await createUser({ email, name, avatar: avatarInFormattingJPG })

  return { user }
}