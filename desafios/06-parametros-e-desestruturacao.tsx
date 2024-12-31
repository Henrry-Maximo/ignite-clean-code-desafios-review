function updateUserRoute(body, params) {
  const { name, email, password } = body;
  const { id } = params;

  updateUserController({ name, email, password }, { id });
}

function updateUserController({ name, email, password }, { id }) {
  userRepository.update({ body: { name, email, password }, params: id });
}

const userRepository = {
  update: ({ body, params }) => {
    const { name, email, password } = body;
    const { id } = params;

    const { user } = createUserOnDatabase({ name, email, password}, { id });

    return {
      user
    }
  },
};
