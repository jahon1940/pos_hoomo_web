'use client';

import { Star, Quote } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';
import Marquee from 'react-fast-marquee';
import { Trans } from 'react-i18next';

const Testimonials = () => {
  const { t } = useLanguage();
  
  const testimonials = [
    {
      name: "Yana Chekubash",
      position: "Pink Island do'konlari egasi",
      content: "Hoomo bilan mijozlarimiz soni 20% ga oshdi. Ombor logistikasi va mahsulotlarni import qilishga sarflanayotgan vaqt sezilarli darajada qisqardi. Ushbu omillarning har biri tovar aylanmasining 15% ga oshishiga ta'sir ko'rsatdi.",
      rating: 5
    },
    {
      name: "Amir Ghouri", 
      position: "Calvin Klein brend menejeri",
      content: "20 dan ortiq kiyim-kechak do'konlari tarmog'iga ega bo'lgan FCN Group savdo kompaniyasi savdo tahlillari, tovar qoldiqlarini samarali boshqarish va Hoomo kompaniyasining boshqa ko'plab yechimlari yordamida faol rivojlanmoqda.",
      rating: 5
    },
    {
      name: "Rustam Esanov",
      position: "Button do'konlari egasi", 
      content: "Mijozlarni boshqarishning ilg'or funksionalligi, hisob-kitoblarning aniqligi va ma'lumotlar auditini Hoomo dasturining afzalliklari qatoriga kiritishimiz mumkin. Hoomo bizga o'z vaqtida qaror qabul qilish va do'kon uchun sarflanayotgan vaqtni tejashga yordam beradi",
      rating: 5
    },
    {
      name: "Olesya Xoryakova",
      position: "Yves Rocher do'konlari boshqaruvchisi",
      content: "Hoomo'ning qo'llab-quvvatlash xizmatini juda ham qadrlayman. Hoomo bilan hamkorlikni boshlaganimizdan so'ng ish jarayonimiz osonlashdi. Telegram-bot'imizni ishga tushirdik, u onlayn savdoni yo'lga qo'yishga va brend taniqliligini oshirishga yordam bermoqda.",
      rating: 5
    },
    {
      name: "Yuliya Pak",
      position: "Lee&Wrangler do'koni egasi",
      content: "Hoomo yordamida hisobotlarni tezroq olyapmiz, bu esa kelajakda talab yuqori bo'ladigan modellarni aniqlashga va yetkazib berishni o'z vaqtida rejalashtirishga yordam beradi. Bundan tashqari, Hoomo yordamida o'g'irliklarni kamaytirdik va mijozlar sonini ko'paytirdik",
      rating: 5
    },
    {
      name: "Galina Txay",
      position: "Pudra do'koni egasi",
      content: "Hoomo yordamida mijozlarga xizmat ko'rsatishni yaxshiladik, ombordagi qoldiqlarni boshqarishni osonlashtirdik, endi savdo haqidagi ma'lumotlarni istalgan joydan kuzatishimiz mumkin. Natijada faoliyatimizni kengaytirmoqdamiz.",
      rating: 5
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl text-left font-bold text-gray-900 mb-4">
            <Trans i18nKey="testimonials.title">
              <span className="text-primary">1500</span>
            </Trans>
          </h2>
        </div>
        <Marquee className="w-full" pauseOnHover={true}>
          <div className="flex max-w-full">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="w-full md:w-[400px] mx-4 bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="border-b pb-4 mb-4">
                  <div className="font-semibold text-gray-900">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-gray-600">
                    {testimonial.position}
                  </div>
                </div>

                <p className="text-gray-700 mb-6 leading-relaxed">
                  &ldquo;{testimonial.content}&rdquo;
                </p>
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-5 w-5 text-yellow-400 fill-current"
                    />
                  ))}
                </div>

                <Quote className="h-8 w-8 text-blue-600 " />
              </div>
            ))}
          </div>
        </Marquee>
      </div>
    </section>
  );
};

export default Testimonials;
