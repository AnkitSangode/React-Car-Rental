import React from "react";

const testimonialData = [
  {
    name: "Ankit",
    image: "",
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
    aosDelay: "0",
  },
  {
    name: "Prince",
    image: "",
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
    aosDelay: "300",
  },
  {
    name: "Rohan",
    image: "",
    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
    aosDelay: "1000",
  },
];
const Testimonial = () => {
  return (
    <>
      <span id="about"></span>
      <div className="py-14 dark:text-white dark:bg-black sm:pb-24">
        <div className="container">
          {/* Header */}
          <div className="pb-12 space-y-4">
            <p
              data-aos="fade-up"
              className="font-serif text-3xl font-semibold text-center sm:text-4xl"
            >
              What Our Clients Say About Us
            </p>
            <p data-aos="fade-up" className="text-center sm:px-44">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perferendis iure consectetur tempora amet.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4 text-black dark:text-white md:grid-cols-3 sm:grid-cols-2">
            {testimonialData.map((skill) => (
              <div
                key={skill.name}
                data-aos="fade-up"
                data-aos-delay={skill.aosDelay}
                className="card p-4 space-y-3 text-center bg-gray-100 rounded-lg duration-300 group dark:bg-white/20 sm:py-12 sm:space-y-6"
              >
                <div className="grid place-items-center">
                  <img
                    src="https://picsum.photos/200"
                    alt=""
                    className="w-20 h-20 rounded-full"
                  />
                </div>
                <div className="text-2xl">⭐⭐⭐⭐⭐</div>
                <p>{skill.description}</p>
                <p className="font-semibold text-center">{skill.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
