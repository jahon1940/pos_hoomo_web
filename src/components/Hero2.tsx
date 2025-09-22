"use client";

import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { ArrowRight, Play, X, ChevronDown } from "lucide-react";
import type { Swiper as SwiperClass } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import AnimatedText from "./AnimatedText";
import { toast } from "react-toastify";

const Hero2 = () => {
  const { t } = useLanguage();
  const swiperRef = useRef<SwiperClass | null>(null);
  const [activeSlide, setActiveSlide] = useState(0);
  const [mobileImageKey, setMobileImageKey] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    shopName: "",
    shopType: "",
  });

  const [showShopTypes, setShowShopTypes] = useState(false);

  const shopTypes = [
    t("modal.shop_types.clothing"),
    t("modal.shop_types.shoes"),
    t("modal.shop_types.stationery"),
    t("modal.shop_types.construction"),
    t("modal.shop_types.cosmetics"),
    t("modal.shop_types.accessories"),
    t("modal.shop_types.electronics"),
    t("modal.shop_types.household"),
  ];

  // Slide data - har bir slidda laptop va mobile rasm
  const slides = [
    {
      id: 1,
      laptopImage:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
      mobileImage:
        "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=600&fit=crop",
    },
    {
      id: 2,
      laptopImage:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
      mobileImage:
        "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=400&h=600&fit=crop",
    },
    {
      id: 3,
      laptopImage:
        "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=600&fit=crop",
      mobileImage:
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=600&fit=crop",
    },
  ];

  // Slide o'zgarganda mobile rasm animatsiyasini boshqarish
  const handleSlideChange = (swiper: SwiperClass) => {
    setActiveSlide(swiper.activeIndex);
    setMobileImageKey(0);
    setTimeout(() => {
      setMobileImageKey((prev) => prev + 1);
    }, 200);
  };

  // Modal ochish/yopish funksiyalari
  const openModal = () => {
    setIsModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setShowShopTypes(false);
    document.body.style.overflow = "unset";
  };

  // Form ma'lumotlarini yangilash
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Do'kon turini tanlash
  const handleShopTypeSelect = (shopType: string) => {
    setFormData((prev) => ({
      ...prev,
      shopType: shopType,
    }));
    setShowShopTypes(false);
  };

  // Form yuborish
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const botToken = "8443546822:AAGAfB-F_dqYi-BuqgZgoZPHDo0-HSYsdwg";
    const chatId = "-1002818072278";
    const text = `Mijozdan yangi xabar 📩:
Ism-familiya: ${formData.name}
Telefon: +998${formData.phone}
Do'kon nomi: ${formData.shopName}
Do'kon turi: ${formData.shopType}`;

    try {
      await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ chat_id: chatId, text }),
      });

    

      // Form ma'lumotlarini tozalash
      setFormData({
        name: "",
        phone: "",
        shopName: "",
        shopType: "",
      });

      toast(t("hero.notification.success"));
      // Modal yopish
      closeModal();
    } catch (error) {
      console.error("Error sending form data:", error);
      // Xatolik bo'lsa ham modal yopish
      toast.error(t("hero.notification.error"));
      closeModal();
    }
  };

  return (
    <section className="bg-white py-6 md:py-8 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
          {/* Chap tomonda matn va tugma */}
          <motion.div
            className="space-y-8 col-span-2"
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              className="text-4xl  font-bold text-gray-900 mb-6 leading-tight"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              <AnimatedText /> {t("hero.title")}
            </motion.h1>
            {/* <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight"
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Облачная ERP для вашего бизнеса
            </motion.h1> */}

            <motion.p
              className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              {t("hero.subtitle")}
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <motion.button
                className="bg-primary text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={openModal}
              >
                {t("hero.try_button")}
                <ArrowRight className="ml-2 h-5 w-5" />
              </motion.button>

              <motion.button
                className="flex items-center justify-center text-gray-700 hover:text-blue-600 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="bg-white rounded-full p-3 mr-3 shadow-md">
                  <Play className="h-6 w-6 text-blue-600" />
                </div>
                {t("hero.watch_video")}
              </motion.button>
            </motion.div>
          </motion.div>

          {/* O'ng tomonda Swiper slide */}
          <motion.div
            className="relative col-span-3"
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <Swiper
              onSwiper={(swiper) => {
                swiperRef.current = swiper;
              }}
              modules={[Navigation, Pagination, Autoplay]}
              spaceBetween={30}
              slidesPerView={1}
              navigation={{
                nextEl: ".swiper-button-next-custom",
                prevEl: ".swiper-button-prev-custom",
              }}
              pagination={{
                clickable: true,
                el: ".swiper-pagination-custom",
              }}
              autoplay={{
                delay: 5000,
                disableOnInteraction: false,
              }}
              loop={true}
              onSlideChange={handleSlideChange}
              className="hero-swiper"
            >
              {slides.map((slide) => (
                <SwiperSlide key={slide.id}>
                  <div className="relative">
                    {/* Laptop rasm (orqada) */}
                    <div className="relative w-full h-[400px] md:h-[500px] rounded-2xl overflow-hidden">
                      <img
                        src={slide.laptopImage}
                        alt={`Laptop view ${slide.id}`}
                        className="w-[92%] ml-auto h-full object-cover rounded-xl border-4 border-white"
                      />

                      {/* Mobile rasm (ustida) */}
                      <AnimatePresence mode="wait">
                        {mobileImageKey > 0 && (
                          <motion.div
                            key={`${slide.id}-${mobileImageKey}`}
                            initial={{ x: 400, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{
                              duration: 0.8,
                              ease: "easeOut",
                            }}
                            exit={{
                              x: 400,
                              opacity: 0,
                              transition: {
                                duration: 0,
                                ease: "easeIn",
                              },
                            }}
                            className="absolute top-[50%] translate-y-[-50%] left-0 w-32 h-48 md:w-50 md:h-80 rounded-xl overflow-hidden shadow-xl border-4 border-white"
                          >
                            <img
                              src={slide.mobileImage}
                              alt={`Mobile view ${slide.id}`}
                              className="w-full h-full object-cover"
                            />
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Custom navigation buttons */}
            <div className="swiper-button-prev-custom absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full p-3 shadow-lg cursor-pointer hover:bg-gray-50 transition-colors">
              <svg
                className="w-6 h-6 text-gray-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
            </div>
            <div className="swiper-button-next-custom absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-white rounded-full p-3 shadow-lg cursor-pointer hover:bg-gray-50 transition-colors">
              <svg
                className="w-6 h-6 text-gray-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </div>

            {/* Custom pagination */}
            <div className="swiper-pagination-custom flex justify-center mt-6 space-x-2"></div>
          </motion.div>
        </div>
      </div>

      {/* Modal oyna */}
      <AnimatePresence>
        {isModalOpen && (
          <>
            {/* Background overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 bg-opacity-50 z-50"
              onClick={closeModal}
            />

            {/* Modal oyna */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed right-0 top-0 h-full w-full max-w-md bg-white shadow-2xl z-50 overflow-y-auto"
            >
              <div className="p-6">
                {/* Modal header */}
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-bold text-gray-900">
                    <span className="text-blue-600">
                      {t("modal.title_highlight")}
                    </span>{" "}
                    {t("modal.title")
                      .replace(t("modal.title_highlight"), "")
                      .trim()}
                  </h2>
                  <button
                    onClick={closeModal}
                    className="text-gray-400 hover:text-gray-600 transition-colors cursor-pointer"
                  >
                    <X className="h-6 w-6" />
                  </button>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Ism-familiya */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {t("modal.name_label")}
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder={t("modal.name_placeholder")}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none placeholder-gray-500 text-black"
                      required
                    />
                  </div>

                  {/* Telefon raqami */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {t("modal.phone_label")}
                    </label>
                    <div className="flex">
                      <div className="flex items-center px-3 py-3 border border-gray-300 border-r-0 rounded-l-lg bg-gray-50">
                        <div className="flex items-center space-x-2 gap-1">
                          🇺🇿
                          <span className="text-sm font-medium text-black">
                            +998
                          </span>
                        </div>
                      </div>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder={t("modal.phone_placeholder")}
                        className="flex-1 px-4 py-3 border border-gray-300 rounded-r-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none placeholder-gray-500 text-black"
                        required
                      />
                    </div>
                  </div>

                  {/* Do'kon nomi */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {t("modal.shop_name_label")}
                    </label>
                    <input
                      type="text"
                      name="shopName"
                      value={formData.shopName}
                      onChange={handleInputChange}
                      placeholder={t("modal.shop_name_placeholder")}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none placeholder-gray-500 text-black"
                      required
                    />
                  </div>

                  {/* Do'kon turi */}
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      {t("modal.shop_type_label")}
                    </label>
                    <div className="relative">
                      <button
                        type="button"
                        onClick={() => setShowShopTypes(!showShopTypes)}
                        className="w-full px-4 py-3 pr-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none text-left bg-white flex items-center justify-between"
                      >
                        <span
                          className={
                            formData.shopType
                              ? "text-gray-900"
                              : "text-gray-600"
                          }
                        >
                          {formData.shopType ||
                            t("modal.shop_type_placeholder")}
                        </span>
                        <ChevronDown
                          className={`h-5 w-5 text-gray-400 transition-transform ${
                            showShopTypes ? "rotate-180" : ""
                          }`}
                        />
                      </button>

                      {showShopTypes && (
                        <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-y-auto">
                          {shopTypes.map((type, index) => (
                            <button
                              key={index}
                              type="button"
                              onClick={() => handleShopTypeSelect(type)}
                              className="w-full px-4 py-3 text-left hover:bg-gray-50 focus:bg-gray-50 focus:outline-none text-gray-900 border-b border-gray-100 last:border-b-0"
                            >
                              {type}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Submit button */}
                  <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors cursor-pointer"
                  >
                    {t("modal.submit_button")}
                  </button>
                </form>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <style jsx global>{`
        .hero-swiper .swiper-pagination-bullet {
          width: 12px;
          height: 12px;
          background: #d1d5db;
          opacity: 1;
        }
        .hero-swiper .swiper-pagination-bullet-active {
          background: #1d4ed8;
        }
        .hero-swiper .swiper-slide {
          display: flex;
          justify-content: center;
          align-items: center;
        }
      `}</style>
    </section>
  );
};

export default Hero2;
