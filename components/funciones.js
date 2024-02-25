// funciones.js
const getUserInfo = async (username) => {
  const url = `https://api.github.com/users/${username}`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Usuario no encontrado');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
};

export { getUserInfo };