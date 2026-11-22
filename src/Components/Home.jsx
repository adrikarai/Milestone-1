import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faArrowRight, faCoffee, faLeaf, faHeart, faMugHot,
  faUtensils, faSeedling, faStar, faQuoteLeft
} from "@fortawesome/free-solid-svg-icons";

// Images
import heroImage from '../assets/images/home-1.webp';
import aboutImage from "../assets/images/home-2.avif";
import coffeeImage from "../assets/images/home-3.avif";
import cakeImage from "../assets/images/home-4.jpg";
import juiceImage from "../assets/images/home-5.jpg";
import pastaImage from "../assets/images/home-6.jpg";

export default function Home() {

  // Scroll to top and reveal animation
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });

    const elements = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });

    elements.forEach((element) => observer.observe(element));
    return () => observer.disconnect();
  }, []);

  // Animation delays
  const delays = ["delay-0", "delay-100", "delay-200", "delay-300"];

  // Speciality products
  const specialities = [
    {
      name: "Special Coffee",
      description: "Freshly brewed coffee with a rich aroma and delightful taste.",
      price: "149", image: coffeeImage, icon: faCoffee, label: "BEST SELLER"
    },
    {
      name: "Biscoff Cheesecake",
      description: "Creamy cheesecake with rich Biscoff spread and crunchy topping.",
      price: "199", image: cakeImage, icon: faHeart, label: "CUSTOMER FAVOURITE"
    },
    {
      name: "Fresh Juice & Shakes",
      description: "Refreshing drinks made with delicious fruity flavours.",
      price: "129", image: juiceImage, icon: faMugHot, label: "FRESH & COOL"
    },
    {
      name: "Red Sauce Pasta",
      description: "Italian pasta tossed in rich and flavourful red sauce.",
      price: "229", image: pastaImage, icon: faUtensils, label: "MUST TRY"
    }
  ];

  // Features
  const features = [
    {
      icon: faCoffee, title: "Freshly Prepared",
      description: "Every dish and drink is freshly prepared to give you the best taste.",
      color: "bg-[#F23883]"
    },
    {
      icon: faLeaf, title: "Quality Ingredients",
      description: "We focus on quality ingredients to make every bite delicious.",
      color: "bg-[#C8F45A]"
    },
    {
      icon: faSeedling, title: "Cozy Atmosphere",
      description: "Enjoy a warm and relaxing space with your friends and family.",
      color: "bg-[#F23883]"
    },
    {
      icon: faHeart, title: "Made With Love",
      description: "We welcome every guest with care, warmth and happiness.",
      color: "bg-[#C8F45A]"
    }
  ];

  // Customer reviews
  const reviews = [
    {
      name: "Triushaan Rai", initial: "T",
      review: "Absolutely loved the coffee and cozy atmosphere. The food was delicious and the service was wonderful!"
    },
    {
      name: "Aadray Rai", initial: "A",
      review: "The Biscoff cheesecake was amazing! Everything looked beautiful and tasted even better."
    },
    {
      name: "Avyaya Rai", initial: "A",
      review: "Loved the pasta and refreshing shakes. The ambience was beautiful. Highly recommended!"
    }
  ];

  // Common focus style
  const focusStyle = "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F23883] focus-visible:ring-offset-2 focus-visible:ring-offset-[#FFF5EC] dark:focus-visible:ring-offset-[#1F1B1D]";

  return (
    <main className="overflow-hidden bg-[#FFF5EC] dark:bg-[#1F1B1D] transition-colors duration-300">

      {/* HERO SECTION */}
      <section id="home" className="relative min-h-[650px] md:min-h-[760px] flex items-center overflow-hidden">

        <img src={heroImage} alt="" aria-hidden="true" fetchPriority="high" className="absolute inset-0 w-full h-full object-cover object-center" />
        <div className="absolute inset-0 bg-black/55"></div>

        <div className="relative z-10 max-w-7xl mx-auto w-full px-6 md:px-12 py-24">
          <div className="max-w-3xl text-white reveal">

            <div className="inline-flex items-center gap-2 bg-[#C8F45A] text-[#292329] px-5 py-2 rounded-full text-xs md:text-sm font-bold tracking-wider mb-7">
              <FontAwesomeIcon icon={faMugHot} /> WELCOME TO MIMI CAFÉ
            </div>

            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold leading-[1.1] mb-7">
              Good Food.
              <span className="block text-[#F23883]">Great Mood.</span>
              Beautiful Moments.
            </h1>

           

            <div className="flex flex-wrap gap-4">
              <Link to="/menu" className={`inline-flex items-center gap-3 bg-[#F23883] text-white px-8 py-4 rounded-full font-bold hover:bg-[#D92770] hover:-translate-y-1 transition duration-300 shadow-lg ${focusStyle}`}>
                Explore Menu <FontAwesomeIcon icon={faArrowRight} />
              </Link>

             
            </div>
          </div>
        </div>

        <div className="absolute bottom-[-65px] right-[-50px] w-52 h-52 bg-[#C8F45A] rounded-full opacity-90"></div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="bg-[#FFF5EC] dark:bg-[#1F1B1D] py-20 md:py-28 transition-colors duration-300">

        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-14 md:gap-20 items-center">

            <div className="relative reveal">
              <div className="absolute -top-5 -left-5 w-28 h-28 bg-[#C8F45A] rounded-2xl"></div>

              <img src={aboutImage} alt="Mimi Cafe Interior" loading="lazy" className="relative z-10 w-full h-[350px] md:h-[480px] object-cover rounded-3xl shadow-xl" />

              <div className="absolute z-20 -bottom-7 -right-3 md:-right-7 bg-[#F23883] text-white p-6 md:p-8 rounded-2xl shadow-xl">
                <FontAwesomeIcon icon={faHeart} className="text-2xl mb-2" />
                <h3 className="text-2xl md:text-3xl font-extrabold">Fresh</h3>
                <p className="text-sm mt-1">Made with Love</p>
              </div>
            </div>

            <div className="reveal pt-5 md:pt-0">
              <p className="text-[#F23883] uppercase tracking-[4px] text-sm font-bold mb-4">
                <FontAwesomeIcon icon={faMugHot} className="mr-2" /> About Our Café
              </p>

              <h2 className="text-4xl md:text-6xl font-extrabold text-[#292329] dark:text-[#FFF5EC] leading-tight mb-7">
                A Little Place,
                <span className="block text-[#F23883]">A Lot of Love!</span>
              </h2>

              <p className="text-[#292329]/80 dark:text-[#FFF5EC]/80 text-base md:text-lg leading-relaxed mb-5">
                Welcome to Mimi Café, where great food meets wonderful moments. We believe every meal should be a delightful experience filled with taste, freshness and happiness.
              </p>

              <p className="text-[#292329]/65 dark:text-[#FFF5EC]/65 leading-relaxed mb-9">
                From delicious breakfasts to tempting desserts and refreshing beverages, every visit brings something special. Come, relax and enjoy the warmth of Mimi Café.
              </p>

              <Link to="/menu" className={`inline-flex items-center gap-3 bg-[#292329] dark:bg-[#FDE6D5] text-white dark:text-[#292329] px-8 py-4 rounded-full font-bold hover:bg-[#F23883] hover:text-white transition duration-300 ${focusStyle}`}>
                Explore Our Menu <FontAwesomeIcon icon={faArrowRight} />
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* SPECIALITIES SECTION */}
      <section id="specialities" className="bg-white dark:bg-[#292326] py-20 md:py-28 transition-colors duration-300">

        <div className="max-w-7xl mx-auto px-6 md:px-12">

          <div className="text-center mb-16 reveal">
            <span className="inline-block bg-[#FCE0EA] dark:bg-[#4B2637] text-[#F23883] px-5 py-2 rounded-full text-xs font-bold tracking-widest mb-5">
              OUR MOST LOVED TREATS
            </span>

            <h2 className="text-4xl md:text-6xl font-extrabold text-[#292329] dark:text-[#FFF5EC] mb-5">
              Taste The <span className="text-[#F23883]">Happiness.</span>
            </h2>

            <p className="text-[#292329]/65 dark:text-[#FFF5EC]/65 max-w-2xl mx-auto leading-relaxed">
              Discover our most loved delights, freshly prepared to make every visit to Mimi Café special.
            </p>

            <div className="w-20 h-1.5 bg-[#C8F45A] rounded-full mx-auto mt-7"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7">
            {specialities.map((item, index) => (
              <article key={item.name} className={`group bg-[#FFF5EC] dark:bg-[#393035] rounded-3xl overflow-hidden shadow-md hover:shadow-2xl hover:-translate-y-3 transition-all duration-500 reveal ${delays[index]}`}>

                <div className="relative overflow-hidden h-60">
                  <img src={item.image} alt={item.name} loading="lazy" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />

                  <span className="absolute top-4 left-4 bg-[#C8F45A] text-[#292329] text-[10px] font-extrabold tracking-wider px-3 py-2 rounded-full">
                    {item.label}
                  </span>

                  <div className="absolute bottom-4 right-4 w-11 h-11 rounded-full bg-[#F23883] text-white flex items-center justify-center shadow-lg">
                    <FontAwesomeIcon icon={item.icon} />
                  </div>
                </div>

                <div className="p-6">
                  <h3 className="text-xl font-extrabold text-[#292329] dark:text-[#FFF5EC] mb-3 group-hover:text-[#F23883] transition">
                    {item.name}
                  </h3>

                  <p className="text-sm text-[#292329]/65 dark:text-[#FFF5EC]/65 leading-relaxed mb-6 min-h-[60px]">
                    {item.description}
                  </p>

                  <div className="flex justify-between items-center border-t border-[#292329]/10 dark:border-white/10 pt-5">
                    <span className="text-2xl font-extrabold text-[#F23883]">
                      ₹{item.price}
                    </span>

                    <Link to="/menu" className={`inline-flex items-center gap-2 text-sm font-bold text-[#292329] dark:text-[#FFF5EC] hover:text-[#F23883] transition ${focusStyle}`}>
                      Explore <FontAwesomeIcon icon={faArrowRight} />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="text-center mt-14">
            <Link to="/menu" className={`inline-flex items-center gap-3 bg-[#C8F45A] text-[#292329] px-9 py-4 rounded-full font-extrabold hover:bg-[#F23883] hover:text-white transition duration-300 ${focusStyle}`}>
              View Full Menu <FontAwesomeIcon icon={faArrowRight} />
            </Link>
          </div>

        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section className="bg-[#FFF5EC] dark:bg-[#1F1B1D] py-20 md:py-28 transition-colors duration-300">

        <div className="max-w-7xl mx-auto px-6 md:px-12">

          <div className="text-center mb-16 reveal">
            <span className="inline-block bg-[#C8F45A] text-[#292329] px-5 py-2 rounded-full text-xs font-bold tracking-widest mb-5">
              THE MIMI EXPERIENCE
            </span>

            <h2 className="text-4xl md:text-6xl font-extrabold text-[#292329] dark:text-[#FFF5EC] mb-5">
              Why Choose <span className="text-[#F23883]">Mimi?</span>
            </h2>

            <p className="text-[#292329]/65 dark:text-[#FFF5EC]/65 max-w-2xl mx-auto leading-relaxed">
              We make every visit special with delicious food, quality ingredients and a welcoming atmosphere.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7">
            {features.map((item, index) => (
              <article key={item.title} className={`bg-white dark:bg-[#30272C] p-8 rounded-3xl text-center shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 reveal ${delays[index]}`}>

                <div className={`w-16 h-16 mx-auto mb-7 rounded-2xl ${item.color} flex items-center justify-center text-2xl ${item.color === "bg-[#C8F45A]" ? "text-[#292329]" : "text-white"}`}>
                  <FontAwesomeIcon icon={item.icon} />
                </div>

                <h3 className="text-xl font-extrabold text-[#292329] dark:text-[#FFF5EC] mb-4">
                  {item.title}
                </h3>

                <p className="text-[#292329]/65 dark:text-[#FFF5EC]/65 text-sm leading-relaxed">
                  {item.description}
                </p>

              </article>
            ))}
          </div>

        </div>
      </section>

      {/* TESTIMONIAL SECTION */}
      <section className="bg-white dark:bg-[#292326] py-20 md:py-28 transition-colors duration-300">

        <div className="max-w-7xl mx-auto px-6 md:px-12">

          <div className="text-center mb-16 reveal">
            <span className="inline-block bg-[#FCE0EA] dark:bg-[#4B2637] text-[#F23883] px-5 py-2 rounded-full text-xs font-bold tracking-widest mb-5">
              CUSTOMER EXPERIENCES
            </span>

            <h2 className="text-4xl md:text-6xl font-extrabold text-[#292329] dark:text-[#FFF5EC] mb-5">
              Happy People, <span className="text-[#F23883]">Happy Food!</span>
            </h2>

            <p className="text-[#292329]/65 dark:text-[#FFF5EC]/65 max-w-2xl mx-auto leading-relaxed">
              Here's what our happy customers have to say about their Mimi Café experience.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reviews.map((item, index) => (
              <article key={item.name} className={`relative bg-[#FFF5EC] dark:bg-[#393035] p-8 md:p-9 rounded-3xl border border-[#F23883]/10 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 reveal ${delays[index]}`}>

                <FontAwesomeIcon icon={faQuoteLeft} className="absolute top-7 right-8 text-4xl text-[#F23883]/15" />

                <div className="flex gap-1 text-[#F23883] mb-6" aria-label="5 out of 5 stars">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <FontAwesomeIcon icon={faStar} key={star} aria-hidden="true" />
                  ))}
                </div>

                <p className="text-[#292329]/75 dark:text-[#FFF5EC]/75 leading-relaxed mb-9">
                  "{item.review}"
                </p>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#C8F45A] text-[#292329] flex items-center justify-center text-lg font-extrabold">
                    {item.initial}
                  </div>

                  <div>
                    <h3 className="font-extrabold text-[#292329] dark:text-[#FFF5EC]">
                      {item.name}
                    </h3>

                    <p className="text-xs text-[#F23883] font-semibold mt-1">
                      Happy Customer
                    </p>
                  </div>
                </div>

              </article>
            ))}
          </div>

        </div>
      </section>

      {/* FINAL CTA SECTION */}
      <section className="bg-[#F23883] py-20 md:py-24 relative overflow-hidden">

        <div className="absolute -top-24 -right-16 w-72 h-72 bg-[#C8F45A] rounded-full opacity-90"></div>
        <div className="absolute -bottom-32 -left-16 w-80 h-80 bg-[#D92770] rounded-full"></div>

        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center reveal">

          <div className="w-16 h-16 bg-[#C8F45A] text-[#292329] rounded-full flex items-center justify-center text-2xl mx-auto mb-7">
            <FontAwesomeIcon icon={faMugHot} />
          </div>

          <h2 className="text-4xl md:text-6xl font-extrabold text-white leading-tight mb-6">
            Good Food.<br />Great Mood.
          </h2>

          <p className="text-white/90 text-base md:text-lg max-w-2xl mx-auto leading-relaxed mb-9">
            Your next favourite meal is waiting for you. Explore our menu and make your day a little more delicious!
          </p>

          <Link to="/menu" className={`inline-flex items-center gap-3 bg-[#C8F45A] text-[#292329] px-9 py-4 rounded-full font-extrabold hover:bg-white hover:-translate-y-1 transition duration-300 shadow-lg ${focusStyle}`}>
            Explore Our Menu <FontAwesomeIcon icon={faArrowRight} />
          </Link>

        </div>
      </section>

    </main>
  );
}
