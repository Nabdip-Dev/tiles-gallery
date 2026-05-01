export const getTiles = async () => {
  const res = await fetch("http://127.0.0.1:5000/tiles");
  if (!res.ok) throw new Error("Failed to fetch");
  return res.json();
};

export const getTileById = async (id) => {
  const res = await fetch(`http://127.0.0.1:5000/tiles/${id}`);
  if (!res.ok) throw new Error("Failed");
  return res.json();
};