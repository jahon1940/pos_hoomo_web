'use client';

import { Star, Quote } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

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
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {t('testimonials.title')}
          </h2>
          <p className="text-xl text-gray-600">
            {t('testimonials.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              
              <Quote className="h-8 w-8 text-blue-600 mb-4" />
              
              <p className="text-gray-700 mb-6 leading-relaxed">
                &ldquo;{testimonial.content}&rdquo;
              </p>
              
              <div className="border-t pt-4">
                <div className="font-semibold text-gray-900">
                  {testimonial.name}
                </div>
                <div className="text-sm text-gray-600">
                  {testimonial.position}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="bg-white rounded-xl p-8 shadow-sm max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              {t('testimonials.media_title')}
            </h3>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
              <div className="text-lg font-semibold text-gray-500">Forbes</div>
              <div className="text-lg font-semibold text-gray-500">TechCrunch</div>
              <div className="text-lg font-semibold text-gray-500">VentureBeat</div>
              <div className="text-lg font-semibold text-gray-500">Startup Grind</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
