import React, { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faMugHot, faArrowRight, faHeart, faStar, faFire,
  faSearch, faTag, faBowlFood, faXmark, faFilter
} from "@fortawesome/free-solid-svg-icons";

// LOCAL IMAGE IMPORTS
import coffeeImg from "../assets/images/Menu3.jpg";
import coldCoffeeImg from "../assets/images/Menu4.jpg";
import lemonImg from "../assets/images/Menu5.jpg";
import icedTeaImg from "../assets/images/Menu6.jpg";
import strawberryImg from "../assets/images/Menu7.png";
import chocolateShakeImg from "../assets/images/Menu8.jpg";
import brownieImg from "../assets/images/Menu9.jpg";
import cakeImg from "../assets/images/Menu10.webp";
import whitePastaImg from "../assets/images/Menu11.jpg";
import pastaImg from "../assets/images/Menu12.jpg";
import sandwichImg from "../assets/images/Menu13.jpg";
import garlicBreadImg from "../assets/images/Menu14.jpg";
import farmhousePizzaImg from "../assets/images/Menu15.jpg";
import margheritaPizzaImg from "../assets/images/Menu16.jpg";
import pancakeImg from "../assets/images/Menu17.jpg";
import bowlImg from "../assets/images/Menu18.jpg";
import comboImg from "../assets/images/Menu19.jpg";
import pizzaImg from "../assets/images/Menu15.jpg";
import menuHeroImg from "../assets/images/Menu1.jpg";

// MENU CATEGORIES
const menuCategories = [
  { name: "Coffee", emoji: "☕", count: "12+ Items", description: "Freshly brewed coffee for your perfect moments.", image: coffeeImg },
  { name: "Beverages", emoji: "🥤", count: "10+ Items", description: "Refreshing drinks to make your day better.", image: "https://images.unsplash.com/photo-1544145945-f90425340c7e?w=800" },
  { name: "Shakes & Smoothies", emoji: "🍓", count: "8+ Items", description: "Thick, creamy shakes and fruity delights.", image: "https://images.unsplash.com/photo-1572490122747-3968b75cc699?w=800" },
  { name: "Desserts", emoji: "🍰", count: "15+ Items", description: "Irresistible sweet treats made with love.", image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=800" },
  { name: "Pasta", emoji: "🍝", count: "8+ Items", description: "Rich, creamy and delicious Italian flavours.", image: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=800" },
  { name: "Sandwiches & Snacks", emoji: "🥪", count: "12+ Items", description: "Crispy, cheesy and satisfying little bites.", image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=800" },
  { name: "Pizza", emoji: "🍕", count: "10+ Items", description: "Hot, cheesy and freshly baked goodness.", image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=800" },
  { name: "Breakfast", emoji: "🥞", count: "9+ Items", description: "Delicious breakfast to start your day right.", image: "https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?w=800" }
];

// MENU ITEMS
const menuItems = [
  { name: "Classic Cappuccino", category: "Coffee", price: 149, rating: 4.9, description: "Rich espresso topped with silky steamed milk foam.", image: coffeeImg, tag: "Bestseller" },
  { name: "Cold Coffee", category: "Coffee", price: 169, rating: 4.8, description: "Chilled coffee blended with creamy goodness.", image: coldCoffeeImg, tag: "Popular" },
  { name: "Fresh Lemonade", category: "Beverages", price: 99, rating: 4.7, description: "Fresh lemon juice with a refreshing twist.", image: lemonImg, tag: "Refreshing" },
  { name: "Iced Tea", category: "Beverages", price: 119, rating: 4.8, description: "A perfectly chilled and refreshing tea.", image: icedTeaImg, tag: "Popular" },
  { name: "Strawberry Shake", category: "Shakes & Smoothies", price: 159, rating: 4.9, description: "Sweet strawberry blended into a creamy shake.", image: strawberryImg, tag: "Favourite" },
  { name: "Chocolate Shake", category: "Shakes & Smoothies", price: 169, rating: 4.8, description: "A delicious chocolate treat in every sip.", image: chocolateShakeImg, tag: "Popular" },
  { name: "Chocolate Brownie", category: "Desserts", price: 129, rating: 4.9, description: "Soft, rich and fudgy chocolate brownie.", image: brownieImg, tag: "Bestseller" },
  { name: "Chocolate Cake", category: "Desserts", price: 179, rating: 4.8, description: "A soft chocolate cake for sweet cravings.", image: cakeImg, tag: "Must Try" },
  { name: "White Sauce Pasta", category: "Pasta", price: 199, rating: 4.9, description: "Creamy white sauce pasta with herbs and veggies.", image: whitePastaImg, tag: "Bestseller" },
  { name: "Red Sauce Pasta", category: "Pasta", price: 189, rating: 4.7, description: "Italian-style pasta tossed in tangy red sauce.", image: pastaImg, tag: "Popular" },
  { name: "Veg Grilled Sandwich", category: "Sandwiches & Snacks", price: 139, rating: 4.8, description: "Grilled sandwich filled with fresh vegetables.", image: sandwichImg, tag: "Favourite" },
  { name: "Cheese Garlic Bread", category: "Sandwiches & Snacks", price: 149, rating: 4.7, description: "Toasted garlic bread loaded with melted cheese.", image: garlicBreadImg, tag: "Popular" },
  { name: "Farmhouse Pizza", category: "Pizza", price: 249, rating: 4.9, description: "Loaded with fresh vegetables and melted cheese.", image: farmhousePizzaImg, tag: "Bestseller" },
  { name: "Margherita Pizza", category: "Pizza", price: 199, rating: 4.8, description: "Classic pizza with cheese and tomato sauce.", image: margheritaPizzaImg, tag: "Classic" },
  { name: "Pancake Stack", category: "Breakfast", price: 179, rating: 4.8, description: "Fluffy pancakes served with delicious toppings.", image: pancakeImg, tag: "Popular" },
  { name: "Healthy Breakfast Bowl", category: "Breakfast", price: 189, rating: 4.7, description: "A fresh and tasty bowl to start your morning.", image: bowlImg, tag: "Fresh" }
];

// SPECIAL OFFERS
const offers = [
  {
    title: "Coffee + Brownie Combo",
    subtitle: "Perfect Coffee Break",
    description: "Enjoy your favourite coffee with a delicious chocolate brownie.",
    price: 229, oldPrice: 278, saving: "Save ₹49",
    tag: "Customer Favourite", image: comboImg
  },
  {
    title: "Weekend Special",
    subtitle: "Weekend Happiness",
    description: "A delicious combination of pizza and refreshing beverages.",
    price: 349, oldPrice: 418, saving: "Save ₹69",
    tag: "Weekend Deal", image: pizzaImg
  },
  {
    title: "Pizza Party Combo",
    subtitle: "Share The Happiness",
    description: "A cheesy pizza combo made for your happy moments.",
    price: 399, oldPrice: 478, saving: "Save ₹79",
    tag: "Special Deal", image: "https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?w=800"
  }
];

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [favorites, setFavorites] = useState([]);
  const [showFavorites, setShowFavorites] = useState(false);

  // REFRESH PAR PAGE TOP
  useEffect(() => {
    window.history.scrollRestoration = "manual";
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, []);

  // COMMON STYLES
  const focusStyle = "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F23883] focus-visible:ring-offset-2 dark:focus-visible:ring-offset-[#211B23]";

  const buttonStyle = "rounded-full px-5 py-3 text-sm font-bold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F23883] focus-visible:ring-offset-2";

  // FILTER MENU ITEMS
  const filteredItems = useMemo(() => {
    return menuItems.filter((item) => {
      const matchesCategory = activeCategory === "All" || item.category === activeCategory;
      const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase()) || item.category.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesFavorite = !showFavorites || favorites.includes(item.name);

      return matchesCategory && matchesSearch && matchesFavorite;
    });
  }, [activeCategory, searchTerm, showFavorites, favorites]);

  // ADD OR REMOVE FAVOURITES
  const toggleFavorite = (itemName) => {
    setFavorites((previous) => previous.includes(itemName) ? previous.filter((name) => name !== itemName) : [...previous, itemName]);
  };

  // SELECT CATEGORY
  const selectCategory = (category) => {
    setActiveCategory(category);
    setShowFavorites(false);
    document.getElementById("complete-menu")?.scrollIntoView({ behavior: "smooth" });
  };

  // RESET FILTERS
  const resetFilters = () => {
    setSearchTerm("");
    setActiveCategory("All");
    setShowFavorites(false);
  };

  return (
    <main className="overflow-hidden">

      {/* HERO SECTION */}
      <section className="relative overflow-hidden bg-[#FFF5EC] py-16 transition-colors duration-300 dark:bg-[#19151A] md:py-24">
        <div className="absolute -top-28 -right-20 h-80 w-80 rounded-full bg-[#FCE0EA] opacity-80 blur-3xl dark:bg-[#F23883]/10"></div>
        <div className="absolute -bottom-28 -left-20 h-80 w-80 rounded-full bg-[#C8F45A]/30 blur-3xl"></div>

        <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-6 md:px-12 lg:grid-cols-2">

          <div>
            <div className="mb-7 inline-flex items-center gap-3 rounded-full border border-[#FCE0EA] bg-white px-5 py-3 shadow-sm dark:border-[#44313D] dark:bg-[#282129]">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#F23883] text-white">
                <FontAwesomeIcon icon={faMugHot} />
              </span>
              <span className="text-xs font-extrabold uppercase tracking-[2px] text-[#F23883]">
                MIMI CAFÉ · FOOD & DRINKS
              </span>
            </div>

            <p className="mb-4 text-sm font-extrabold uppercase tracking-[4px] text-[#F23883]">
              A Little Taste Of Happiness
            </p>

            <h1 className="text-5xl font-black leading-[1.12] text-[#292329] dark:text-white sm:text-6xl md:text-7xl">
              Explore
              <span className="mt-2 block font-serif italic text-[#F23883]">Our Menu.</span>
            </h1>

            <p className="mt-7 max-w-lg text-base leading-8 text-[#756A70] dark:text-[#C3B5BE] md:text-lg">
              From freshly brewed coffee to delicious desserts and flavourful meals, discover something special for every craving at Mimi Café.
            </p>

            <div className="mt-12 flex flex-wrap gap-8 border-t border-[#FCE0EA] pt-8 dark:border-[#44313D]">
              <div>
                <h3 className="text-2xl font-black text-[#F23883]">8+</h3>
                <p className="mt-1 text-sm text-[#756A70] dark:text-[#B9AAB4]">Food Categories</p>
              </div>
              <div>
                <h3 className="text-2xl font-black text-[#292329] dark:text-white">50+</h3>
                <p className="mt-1 text-sm text-[#756A70] dark:text-[#B9AAB4]">Delicious Choices</p>
              </div>
              <div>
                <h3 className="text-2xl font-black text-[#F23883]">100%</h3>
                <p className="mt-1 text-sm text-[#756A70] dark:text-[#B9AAB4]">Made With Love</p>
              </div>
            </div>
          </div>

          <div className="relative mx-auto min-h-[430px] w-full max-w-xl md:min-h-[520px]">
            <div className="absolute right-0 top-0 h-[330px] w-[78%] overflow-hidden rounded-t-full rounded-b-[35px] border-[8px] border-white shadow-2xl dark:border-[#39303A] md:h-[420px]">
              <img src={menuHeroImg} alt="Beautiful cafe interior" loading="eager" className="h-full w-full object-cover transition duration-700 hover:scale-110" />
            </div>

            <div className="absolute bottom-0 left-0 h-[190px] w-[53%] overflow-hidden rounded-[28px] border-[8px] border-white shadow-2xl dark:border-[#39303A] md:h-[230px]">
              <img src={pizzaImg} alt="Delicious pizza" className="h-full w-full object-cover transition duration-700 hover:scale-110" />
            </div>

            <div className="absolute left-0 top-10 flex h-24 w-24 rotate-[-12deg] flex-col items-center justify-center rounded-full bg-[#C8F45A] text-center shadow-xl md:h-28 md:w-28">
              <span className="text-2xl">♡</span>
              <span className="text-xs font-black uppercase">Made With</span>
              <span className="text-xs font-black uppercase">Love</span>
            </div>

            <div className="absolute bottom-12 right-0 rounded-2xl bg-[#292329] px-5 py-4 text-white shadow-xl">
              <p className="text-xs font-bold uppercase tracking-widest text-[#C8F45A]">Good Food</p>
              <p className="mt-1 text-lg font-black">Great Mood!</p>
            </div>
          </div>
        </div>
      </section>

      {/* COMPLETE MENU SECTION */}
      <section id="complete-menu" className="scroll-mt-24 bg-white px-5 py-20 transition-colors duration-300 dark:bg-[#211B23] md:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl">

          <div className="mb-12 text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-[#FCE0EA] px-5 py-3 text-xs font-extrabold uppercase tracking-[2px] text-[#F23883] dark:bg-[#F23883]/15">
              <FontAwesomeIcon icon={faMugHot} /> Freshly Prepared With Love
            </span>

            <h2 className="mt-6 text-4xl font-black text-[#292329] dark:text-white md:text-5xl">
              Our Complete <span className="text-[#F23883]">Menu</span>
            </h2>

            <p className="mx-auto mt-5 max-w-2xl leading-8 text-[#756A70] dark:text-[#B9AAB4]">
              From your favourite coffee to delicious meals and irresistible desserts, explore everything Mimi Café has prepared for you.
            </p>
          </div>

          {/* SEARCH BAR */}
          <div className="mx-auto mb-8 flex max-w-2xl items-center gap-3 rounded-full border border-[#FCE0EA] bg-[#FFF5EC] px-5 py-3 shadow-sm transition-colors focus-within:border-[#F23883] focus-within:ring-2 focus-within:ring-[#F23883]/10 dark:border-[#493743] dark:bg-[#302631]">
            <FontAwesomeIcon icon={faSearch} className="text-[#F23883]" />

            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search coffee, pizza, desserts..."
              aria-label="Search menu items"
              className="w-full bg-transparent text-sm text-[#292329] outline-none placeholder:text-[#9B8D93] dark:text-white dark:placeholder:text-[#A99AA5]"
            />

            {searchTerm && (
              <button type="button" onClick={() => setSearchTerm("")} aria-label="Clear search" className={`text-[#F23883] ${focusStyle}`}>
                <FontAwesomeIcon icon={faXmark} />
              </button>
            )}
          </div>

          {/* CATEGORY FILTER BUTTONS */}
          <div className="mb-6 flex flex-wrap items-center justify-center gap-3">

            <button
              type="button"
              onClick={() => selectCategory("All")}
              className={`${buttonStyle} ${activeCategory === "All" && !showFavorites ? "bg-[#F23883] text-white shadow-lg" : "border border-[#FCE0EA] bg-[#FFF5EC] text-[#292329] hover:bg-[#FCE0EA] dark:border-[#493743] dark:bg-[#302631] dark:text-white dark:hover:bg-[#493743]"}`}
            >
              <FontAwesomeIcon icon={faFilter} className="mr-2" /> All Items
            </button>

            {menuCategories.map((category) => (
              <button
                type="button"
                key={category.name}
                onClick={() => selectCategory(category.name)}
                className={`${buttonStyle} ${activeCategory === category.name && !showFavorites ? "bg-[#F23883] text-white shadow-lg" : "border border-[#FCE0EA] bg-[#FFF5EC] text-[#292329] hover:bg-[#FCE0EA] dark:border-[#493743] dark:bg-[#302631] dark:text-white dark:hover:bg-[#493743]"}`}
              >
                <span className="mr-2">{category.emoji}</span>
                {category.name}
              </button>
            ))}

            <button
              type="button"
              onClick={() => { setShowFavorites(!showFavorites); setActiveCategory("All"); }}
              className={`${buttonStyle} ${showFavorites ? "bg-[#292329] text-white dark:bg-[#F23883]" : "border border-[#FCE0EA] bg-[#FFF5EC] text-[#F23883] hover:bg-[#FCE0EA] dark:border-[#493743] dark:bg-[#302631] dark:hover:bg-[#493743]"}`}
            >
              <FontAwesomeIcon icon={faHeart} className="mr-2" />
              Favourites ({favorites.length})
            </button>
          </div>

          {/* RESULT HEADING */}
          <div className="mb-8 flex items-center justify-between border-b border-[#FCE0EA] pb-5 dark:border-[#493743]">
            <div>
              <p className="text-xs font-extrabold uppercase tracking-widest text-[#F23883]">Showing Results</p>
              <h3 className="mt-1 text-xl font-black text-[#292329] dark:text-white">
                {showFavorites ? "Your Favourites" : activeCategory === "All" ? "All Delicious Items" : activeCategory}
              </h3>
            </div>

            <span className="rounded-full bg-[#C8F45A] px-4 py-2 text-sm font-extrabold text-[#292329]">
              {filteredItems.length} Items
            </span>
          </div>

          {/* MENU CARDS */}
          {filteredItems.length > 0 ? (
            <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-3">
              {filteredItems.map((item) => (
                <article key={item.name} className="group overflow-hidden rounded-[25px] border border-[#FCE0EA] bg-[#FFF5EC] shadow-sm transition duration-500 hover:-translate-y-2 hover:shadow-xl dark:border-[#493743] dark:bg-[#302631]">

                  <div className="relative h-60 overflow-hidden">
                    <img src={item.image} alt={item.name} loading="lazy" className="h-full w-full object-cover transition duration-700 group-hover:scale-110" />

                    <span className="absolute left-4 top-4 rounded-full bg-[#C8F45A] px-4 py-2 text-xs font-extrabold text-[#292329]">
                      {item.tag}
                    </span>

                    <button
                      type="button"
                      onClick={() => toggleFavorite(item.name)}
                      aria-label={`${favorites.includes(item.name) ? "Remove" : "Add"} ${item.name} ${favorites.includes(item.name) ? "from" : "to"} favourites`}
                      aria-pressed={favorites.includes(item.name)}
                      className={`absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full shadow-md transition ${focusStyle} ${favorites.includes(item.name) ? "bg-[#F23883] text-white" : "bg-white text-[#F23883] hover:bg-[#F23883] hover:text-white"}`}
                    >
                      <FontAwesomeIcon icon={faHeart} />
                    </button>

                    <span className="absolute bottom-4 right-4 flex items-center gap-1 rounded-full bg-white px-3 py-2 text-sm font-bold text-[#292329] shadow">
                      <FontAwesomeIcon icon={faStar} className="text-yellow-400" />
                      {item.rating}
                    </span>
                  </div>

                  <div className="p-6">
                    <p className="text-xs font-extrabold uppercase tracking-widest text-[#F23883]">{item.category}</p>
                    <h3 className="mt-2 text-xl font-black text-[#292329] transition group-hover:text-[#F23883] dark:text-white">{item.name}</h3>
                    <p className="mt-3 min-h-[48px] text-sm leading-6 text-[#756A70] dark:text-[#B9AAB4]">{item.description}</p>

                    <div className="mt-5 flex items-center justify-between border-t border-[#FCE0EA] pt-5 dark:border-[#493743]">
                      <span className="text-2xl font-black text-[#F23883]">₹{item.price}</span>
                      <span className="rounded-full bg-[#C8F45A] px-4 py-2 text-xs font-extrabold text-[#292329]">Mimi Favourite</span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="rounded-[25px] border border-dashed border-[#F23883]/40 bg-[#FFF5EC] px-5 py-16 text-center dark:bg-[#302631]">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[#FCE0EA] text-2xl text-[#F23883] dark:bg-[#F23883]/15">
                <FontAwesomeIcon icon={faBowlFood} />
              </div>

              <h3 className="mt-5 text-2xl font-black text-[#292329] dark:text-white">No Items Found!</h3>
              <p className="mt-3 text-[#756A70] dark:text-[#B9AAB4]">Try another search or explore a different category.</p>

              <button type="button" onClick={resetFilters} className={`mt-6 rounded-full bg-[#F23883] px-7 py-3 font-bold text-white transition hover:bg-[#D92770] ${focusStyle}`}>
                Reset Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* SPECIAL OFFERS SECTION */}
      <section className="relative overflow-hidden bg-[#FFF5EC] px-5 py-20 transition-colors duration-300 dark:bg-[#19151A] md:px-10 lg:px-16">
        <div className="relative mx-auto max-w-7xl">

          <div className="mb-14 text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-[#C8F45A] px-5 py-3 text-xs font-extrabold uppercase tracking-[2px] text-[#292329]">
              <FontAwesomeIcon icon={faTag} /> Limited Time Deals
            </span>

            <h2 className="mt-6 text-4xl font-black text-[#292329] dark:text-white md:text-5xl">
              Special Offers & <span className="text-[#F23883]">Combos</span>
            </h2>

            <p className="mx-auto mt-5 max-w-2xl leading-8 text-[#756A70] dark:text-[#B9AAB4]">
              More flavour, more happiness and more reasons to smile! Enjoy our specially selected combos.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {offers.map((offer) => (
              <article key={offer.title} className="group overflow-hidden rounded-[28px] bg-white shadow-md transition duration-500 hover:-translate-y-2 hover:shadow-2xl dark:bg-[#302631]">

                <div className="relative h-64 overflow-hidden">
                  <img src={offer.image} alt={offer.title} loading="lazy" className="h-full w-full object-cover transition duration-700 group-hover:scale-110" />

                  <span className="absolute left-5 top-5 rounded-full bg-[#C8F45A] px-4 py-2 text-xs font-extrabold text-[#292329]">
                    <FontAwesomeIcon icon={faFire} className="mr-2" /> {offer.tag}
                  </span>

                  <span className="absolute bottom-5 right-5 rounded-full bg-[#F23883] px-4 py-2 text-sm font-extrabold text-white shadow-lg">
                    {offer.saving}
                  </span>
                </div>

                <div className="p-7">
                  <p className="text-xs font-extrabold uppercase tracking-widest text-[#F23883]">{offer.subtitle}</p>
                  <h3 className="mt-2 text-2xl font-black text-[#292329] dark:text-white">{offer.title}</h3>
                  <p className="mt-4 min-h-[70px] text-sm leading-7 text-[#756A70] dark:text-[#B9AAB4]">{offer.description}</p>

                  <div className="mt-6 flex items-center justify-between border-t border-[#FCE0EA] pt-5 dark:border-[#493743]">
                    <div>
                      <p className="text-2xl font-black text-[#F23883]">₹{offer.price}</p>
                      <p className="text-sm text-gray-400 line-through">₹{offer.oldPrice}</p>
                    </div>

                    <Link to="/contact" className={`inline-flex items-center gap-2 rounded-full bg-[#292329] px-5 py-3 text-sm font-bold text-white transition hover:bg-[#F23883] ${focusStyle}`}>
                      Grab Deal <FontAwesomeIcon icon={faArrowRight} />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* BOTTOM CTA */}
          <div className="relative mt-16 overflow-hidden rounded-[30px] bg-[#292329] px-7 py-12 text-center md:px-12">
            <div className="absolute -right-10 -top-20 h-52 w-52 rounded-full bg-[#F23883]/20 blur-3xl"></div>
            <div className="absolute -bottom-20 -left-10 h-52 w-52 rounded-full bg-[#C8F45A]/20 blur-3xl"></div>

            <div className="relative">
              <span className="text-sm font-bold uppercase tracking-[3px] text-[#C8F45A]">Good Food, Great Mood</span>

              <h2 className="mt-5 text-3xl font-black text-white md:text-4xl">
                Can't Decide What To
                <span className="mt-2 block text-[#F23883]">Try Next?</span>
              </h2>

              <p className="mx-auto mt-5 max-w-xl leading-7 text-[#D8C9D0]">
                Explore our complete menu and find your next favourite bite at Mimi Café.
              </p>

              <button
                type="button"
                onClick={() => selectCategory("All")}
                className={`mt-8 inline-flex items-center gap-3 rounded-full bg-[#C8F45A] px-8 py-4 font-extrabold text-[#292329] transition hover:-translate-y-1 hover:bg-[#F23883] hover:text-white ${focusStyle}`}
              >
                Explore Full Menu <FontAwesomeIcon icon={faArrowRight} />
              </button>
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}
