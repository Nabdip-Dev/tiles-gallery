export const Reviews = () => {
  const reviews = [
    { name: "Rahul", text: "Amazing quality tiles!" },
    { name: "Priya", text: "Loved the design collection." },
    { name: "Amit", text: "Affordable and premium look." },
  ];

  return (
    <div className="py-16 px-6 text-center">
      <h2 className="text-3xl font-bold mb-10 animate__animated animate__fadeInDown">
        Customer Reviews
      </h2>

      <div className="grid md:grid-cols-3 gap-6">
        {reviews.map((r, i) => (
          <div
            key={i}
            className="p-6 bg-white rounded-xl shadow-md hover:shadow-xl transition animate__animated animate__fadeInUp"
          >
            <p className="text-gray-600 mb-3">“{r.text}”</p>
            <h4 className="font-semibold">{r.name}</h4>
            <div className="text-yellow-400">⭐⭐⭐⭐⭐</div>
          </div>
        ))}
      </div>
    </div>
  );
};