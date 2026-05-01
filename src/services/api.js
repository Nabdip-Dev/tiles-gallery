export const getTiles = async () => {
  const res = await fetch("https://tiles-server-wbrc.onrender.com/tiles");
  if (!res.ok) throw new Error("Failed to fetch");
  return res.json();
};

export const getTileById = async (id) => {
  const res = await fetch(`https://tiles-server-wbrc.onrender.com/tiles/${id}`);
  if (!res.ok) throw new Error("Failed");
  return res.json();
};