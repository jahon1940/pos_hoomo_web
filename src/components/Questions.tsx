"use client";

import { Settings, BookOpen, Phone } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import Marquee from "react-fast-marquee";
import { Trans } from "react-i18next";
import { FaCircleArrowRight } from "react-icons/fa6";

const Questions = () => {
  const { t } = useLanguage();

  return (
    <section className="py-10 md:py-15 bg-white">
      <Marquee className="text-black text-3xl mb-10">
        Bepul yordam va qo'llab-quvvatlash • Bepul yordam va qo'llab-quvvatlash
        • Bepul yordam va qo'llab-quvvatlash • Bepul yordam va
        qo'llab-quvvatlash • Bepul yordam va qo'llab-quvvatlash • Bepul yordam
        va qo'llab-quvvatlash • Bepul yordam va qo'llab-quvvatlash • Bepul
        yordam va qo'llab-quvvatlash •
      </Marquee>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          <div className="bg-gray-100 rounded-4xl p-8 shadow-sm">
            <div className="flex items-center mb-10 h-18">
              <div className="bg-blue-100 p-3 rounded-lg mr-4">
                <BookOpen className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-3xl font-semibold text-gray-900">
                <Trans i18nKey="support.paper.title">
                  <span className="text-primary">placeholder</span>
                </Trans>
              </h3>
            </div>
            <p className="text-gray-600 mb-14 text-xl">
              {t("support.paper.description")}
            </p>
            <button className="bg-blue-600 flex items-center gap-2 cursor-pointer text-white px-6 py-3 rounded-2xl hover:bg-blue-700 transition-colors text-xl">
              {t("support.paper.button")}
              <span>
                <FaCircleArrowRight />
              </span>
            </button>
          </div>

          <div className="bg-gray-100 rounded-4xl p-8 shadow-sm">
            <div className="flex items-center mb-10 h-18">
              <div className="bg-green-100 p-3 rounded-lg mr-4">
                <Settings className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-3xl font-semibold text-gray-900">
                <Trans i18nKey="support.other.title">
                  <span className="text-primary">placeholder</span>
                </Trans>
              </h3>
            </div>
            <p className="text-gray-600 mb-14 text-xl">
              {t("support.other.description")}
            </p>
            <button className="bg-green-600 flex items-center gap-2 cursor-pointer text-white px-6 py-3 rounded-2xl hover:bg-green-700 transition-colors text-xl">
              {t("support.other.button")}
              <span>
                <FaCircleArrowRight />
              </span>
            </button>
          </div>
        </div>

        <div className="bg-white rounded-xl p-8 shadow-sm text-center">
          <div className="flex items-center justify-center mb-6">
            <div className="bg-blue-100 p-3 rounded-lg mr-4">
              <Phone className="h-6 w-6 text-blue-600" />
            </div>
            <div className="text-left">
              <div className="text-2xl font-bold text-gray-900">
                {t("support.contact.phone")}
              </div>
              <div className="text-gray-600">{t("support.contact.email")}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Questions;
