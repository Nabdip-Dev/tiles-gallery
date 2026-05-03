export const WhyChoose = () => {
  const data = [
    { title: "Premium Quality", icon: "💎" },
    { title: "Affordable Price", icon: "💰" },
    { title: "Fast Delivery", icon: "🚚" },
    { title: "Eco Friendly", icon: "🌱" },
  ];

  return (
    <div className="py-16 px-6 bg-gray-50 text-center">
      <h2 className="text-3xl font-bold mb-10 animate__animated animate__fadeInDown">
        Why Choose Us
      </h2>

      <div className="grid md:grid-cols-4 gap-6">
        {data.map((item, i) => (
          <div
            key={i}
            className="p-6 bg-white rounded-xl shadow-md hover:shadow-xl hover:-translate-y-2 transition animate__animated animate__fadeInUp"
          >
            <div className="text-4xl mb-3">{item.icon}</div>
            <h3 className="font-semibold">{item.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};