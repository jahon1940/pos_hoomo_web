// 'use client';

// import React from 'react';
// import { motion } from 'framer-motion';
// import { useLanguage } from '@/contexts/LanguageContext';
// import { Building2, Users, Target, Award, Globe, Heart } from 'lucide-react';

// const About = () => {
//   const { t } = useLanguage();

//   const stats = [
//     { number: "1000+", label: "Mijozlar" },
//     { number: "50+", label: "Xodimlar" },
//     { number: "5+", label: "Yillik tajriba" },
//     { number: "24/7", label: "Qo'llab-quvvatlash" }
//   ];

//   const values = [
//     {
//       icon: <Target className="w-8 h-8 text-primary" />,
//       title: "Maqsad",
//       description: "Bizning maqsadimiz - O'zbekistondagi kichik va o'rta biznesni raqamlashtirish va ularning samaradorligini oshirish."
//     },
//     {
//       icon: <Users className="w-8 h-8 text-primary" />,
//       title: "Jamoa",
//       description: "Biz professional va tajribali jamoa bo'lib, har bir mijozimizga individual yondashuvni ta'minlaymiz."
//     },
//     {
//       icon: <Award className="w-8 h-8 text-primary" />,
//       title: "Sifat",
//       description: "Biz yuqori sifatli mahsulot va xizmatlarni taqdim etishga intilamiz va doimiy ravishda takomillashtirishga harakat qilamiz."
//     },
//     {
//       icon: <Heart className="w-8 h-8 text-primary" />,
//       title: "Mijozlar",
//       description: "Mijozlarimizning muvaffaqiyati - bizning muvaffaqiyatimiz. Biz ularning ehtiyojlarini tushunamiz va yechim topamiz."
//     }
//   ];

//   const team = [
//     {
//       name: "Akmal Karimov",
//       position: "Bosh direktor",
//       image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face"
//     },
//     {
//       name: "Malika Toshmatova",
//       position: "Texnik direktor",
//       image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop&crop=face"
//     },
//     {
//       name: "Javlon Umarov",
//       position: "Mahsulot menejeri",
//       image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face"
//     },
//     {
//       name: "Dilnoza Rahimova",
//       position: "Dizayn rahbari",
//       image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face"
//     }
//   ];

//   return (
//     <div className="min-h-screen bg-white">
//       {/* Hero Section */}
//       <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <motion.div
//             className="text-center"
//             initial={{ y: 30, opacity: 0 }}
//             animate={{ y: 0, opacity: 1 }}
//             transition={{ duration: 0.8 }}
//           >
//             <motion.h1
//               className="text-4xl md:text-6xl font-bold text-gray-900 mb-6"
//               initial={{ y: 20, opacity: 0 }}
//               animate={{ y: 0, opacity: 1 }}
//               transition={{ duration: 0.8, delay: 0.2 }}
//             >
//               Kompaniya haqida
//             </motion.h1>
//             <motion.p
//               className="text-xl text-gray-600 max-w-3xl mx-auto"
//               initial={{ y: 20, opacity: 0 }}
//               animate={{ y: 0, opacity: 1 }}
//               transition={{ duration: 0.8, delay: 0.4 }}
//             >
//               Biz O'zbekistondagi kichik va o'rta biznes uchun zamonaviy ERP yechimlarini taqdim etuvchi yetakchi kompaniyamiz
//             </motion.p>
//           </motion.div>
//         </div>
//       </section>

//       {/* Stats Section */}
//       <section className="py-16 bg-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
//             {stats.map((stat, index) => (
//               <motion.div
//                 key={index}
//                 className="text-center"
//                 initial={{ y: 30, opacity: 0 }}
//                 animate={{ y: 0, opacity: 1 }}
//                 transition={{ duration: 0.8, delay: index * 0.1 }}
//               >
//                 <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
//                   {stat.number}
//                 </div>
//                 <div className="text-gray-600">
//                   {stat.label}
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Mission Section */}
//       <section className="py-20 bg-gray-50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
//             <motion.div
//               initial={{ x: -50, opacity: 0 }}
//               animate={{ x: 0, opacity: 1 }}
//               transition={{ duration: 0.8 }}
//             >
//               <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
//                 Bizning missiyamiz
//               </h2>
//               <p className="text-lg text-gray-600 mb-6">
//                 Biz O'zbekistondagi kichik va o'rta biznesni raqamlashtirish va ularning 
//                 operatsion samaradorligini oshirish uchun zamonaviy texnologiyalardan foydalanamiz.
//               </p>
//               <p className="text-lg text-gray-600">
//                 Bizning ERP tizimi - bu faqat dastur emas, balki sizning biznesingizni 
//                 keyingi darajaga olib chiqadigan to'liq yechim.
//               </p>
//             </motion.div>
//             <motion.div
//               className="relative"
//               initial={{ x: 50, opacity: 0 }}
//               animate={{ x: 0, opacity: 1 }}
//               transition={{ duration: 0.8, delay: 0.2 }}
//             >
//               <div className="bg-gradient-to-br from-primary to-blue-600 rounded-2xl p-8 text-white">
//                 <Building2 className="w-16 h-16 mb-6" />
//                 <h3 className="text-2xl font-bold mb-4">Bizning vizyonimiz</h3>
//                 <p className="text-lg opacity-90">
//                   O'zbekistondagi har bir kichik biznes zamonaviy texnologiyalar 
//                   yordamida o'z potentsialini to'liq amalga oshirishi kerak.
//                 </p>
//               </div>
//             </motion.div>
//           </div>
//         </div>
//       </section>

//       {/* Values Section */}
//       <section className="py-20 bg-white">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <motion.div
//             className="text-center mb-16"
//             initial={{ y: 30, opacity: 0 }}
//             animate={{ y: 0, opacity: 1 }}
//             transition={{ duration: 0.8 }}
//           >
//             <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
//               Bizning qadriyatlarimiz
//             </h2>
//             <p className="text-lg text-gray-600 max-w-2xl mx-auto">
//               Bizning ishimizni boshqaruvchi asosiy qadriyatlar
//             </p>
//           </motion.div>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//             {values.map((value, index) => (
//               <motion.div
//                 key={index}
//                 className="text-center p-6 rounded-xl hover:shadow-lg transition-shadow duration-300"
//                 initial={{ y: 30, opacity: 0 }}
//                 animate={{ y: 0, opacity: 1 }}
//                 transition={{ duration: 0.8, delay: index * 0.1 }}
//                 whileHover={{ y: -5 }}
//               >
//                 <div className="flex justify-center mb-4">
//                   {value.icon}
//                 </div>
//                 <h3 className="text-xl font-semibold text-gray-900 mb-3">
//                   {value.title}
//                 </h3>
//                 <p className="text-gray-600">
//                   {value.description}
//                 </p>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Team Section */}
//       <section className="py-20 bg-gray-50">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <motion.div
//             className="text-center mb-16"
//             initial={{ y: 30, opacity: 0 }}
//             animate={{ y: 0, opacity: 1 }}
//             transition={{ duration: 0.8 }}
//           >
//             <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
//               Bizning jamoa
//             </h2>
//             <p className="text-lg text-gray-600 max-w-2xl mx-auto">
//               Bizning tajribali va professional jamoamiz
//             </p>
//           </motion.div>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//             {team.map((member, index) => (
//               <motion.div
//                 key={index}
//                 className="text-center"
//                 initial={{ y: 30, opacity: 0 }}
//                 animate={{ y: 0, opacity: 1 }}
//                 transition={{ duration: 0.8, delay: index * 0.1 }}
//                 whileHover={{ y: -5 }}
//               >
//                 <div className="relative mb-6">
//                   <img
//                     src={member.image}
//                     alt={member.name}
//                     className="w-32 h-32 rounded-full mx-auto object-cover border-4 border-white shadow-lg"
//                   />
//                 </div>
//                 <h3 className="text-xl font-semibold text-gray-900 mb-2">
//                   {member.name}
//                 </h3>
//                 <p className="text-gray-600">
//                   {member.position}
//                 </p>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Contact CTA */}
//       <section className="py-20 bg-primary">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//           <motion.div
//             initial={{ y: 30, opacity: 0 }}
//             animate={{ y: 0, opacity: 1 }}
//             transition={{ duration: 0.8 }}
//           >
//             <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
//               Biz bilan bog'laning
//             </h2>
//             <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
//               Bizning jamoamiz bilan ishlashni xohlaysizmi? 
//               Biz bilan bog'laning va bizning missiyamizga qo'shiling.
//             </p>
//             <motion.button
//               className="bg-white text-primary px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-100 transition-colors"
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//             >
//               Bog'lanish
//             </motion.button>
//           </motion.div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default About;

import React from 'react'

const page = () => {
  return (
    <div>page</div>
  )
}

export default page