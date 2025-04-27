"use client";

import { useTranslations } from "next-intl";
import Link from "next/link";
import React from "react";

export default function FooterRight() {
  const t = useTranslations("HeaderTopTS");

  return (
    <div>
      <h4 className="text-[#000000B2] text-xl font-bold mb-[18px] max-w-[340px] w-full">
        {t("contact")}
      </h4>
      <Link
        href="tel:+998711234567"
        className="text-2xl font-bold hover:underline"
      >
        +998 (71) 123-45-67
      </Link>
      <label className="block mt-[32px]">
        <span className="block">{t("have-question")}</span>
        <input
          type="text"
          placeholder={t("question-placeholder")}
          className="bg-[#EBEFF3] outline-none text-[12px] rounded-[6px] p-[10px] max-w-[340px] block w-full"
        />
      </label>
    </div>
  );
}
