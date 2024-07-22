import React from "react";
import AboutSection from "../../atoms/DetailedSection";
import AboutImage from "../../../assets/icons/HomePage/about3.png";

const HomePage = () => {
  const title = "About Us";
  const description = `
    Welcome to DineSpot! We offer a simple and efficient way to book
    your favorite tables online. Enjoy our delicious cuisine and
    excellent service in a cozy ambiance. We believe that dining out
    should be an enjoyable and stress-free experience. Whether you're in
    the mood for a romantic dinner, a family gathering, or a casual meal
    with friends, book your table today and let us take care of the rest!
  `;
  const bgColor = "transparent";

  return (
    <AboutSection
      title={title}
      description={description}
      imageUrl={AboutImage}
      bgColor={bgColor}
      isFlipped={true}
    />
  );
};

export default HomePage;
