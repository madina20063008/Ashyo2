"use client";
import React, { ChangeEvent, FC, useContext, useEffect, useState } from "react";
import Button from "./Button";
import { ArrowDownIcon, ArrowUpIcon, SearchIcon } from "@/assets/icons";
import HeaderInput from "./HeaderInput";
import { Context } from "../context/Context";
import { useTranslations } from "next-intl";
import { getCategories } from "@/service/getCategories";
import { instance } from "@/hooks/instance";
import debounce from "@/hooks/debounce";
import { HeaderSearchType } from "@/types/HeaderSearchType";
import { Link } from "@/i18n/navigation";

const HeaderForm = () => {
  const t = useTranslations("HeaderTopTS");
  const { setShowCategory, showCategory } = useContext(Context);
  const [searchValue, setSearchvalue] = useState<string>("");
  const [searchResult, setSearchResult] = useState<HeaderSearchType[]>([]);

  function handleSearch(e: ChangeEvent<HTMLInputElement>) {
    setSearchvalue(e.target.value);
  }

  const searchWaitingvalue = debounce(searchValue, 1000);

  useEffect(() => {
    if (searchWaitingvalue) {
      instance()
        .get("/categories/search", { params: { name: searchWaitingvalue } })
        .then((res) => {
          setSearchResult(res.data);
        });
    } else {
      setSearchResult([]); 
    }
  }, [searchWaitingvalue]);

  return (
    <div className="flex items-start gap-[10px]">
      <Button
        onClick={() => setShowCategory(!showCategory)}
        title={t("category")}
        icon={showCategory ? <ArrowUpIcon /> : <ArrowDownIcon />}
        iconPosition="right"
      />

      <div className="w-[520px] relative">
        <HeaderInput
          onChange={handleSearch}
          placeholder={t("search-placeholder")}
          type="text"
          extraStyle="w-full !pr-[65px]"
        />
        <Button
          icon={<SearchIcon />}
          iconPosition="left"
          extraStyle="!p-0 w-[60px] absolute top-0 right-0 h-full"
        />
        {searchValue && searchResult.length > 0 && (
          <ul className="bg-white absolute z-50 flex shadow flex-col w-full py-[40px] mt-[13px]">
            {searchResult.map((item) => (
              <Link
                className="pl-[40px] text-[#545D6A] py-[17px] border-b-[1px] border-[#B6BABF4D]"
                key={item.id}
                href={"/"}
              >
                {item.name}
              </Link>
            ))}
          </ul>
        )}
        
        {searchValue && searchResult.length === 0 && (
          <div className="bg-white absolute z-50 flex shadow flex-col w-full py-[40px] mt-[13px] text-center text-gray-500">
            No results found
          </div>
        )}
      </div>
    </div>
  );
};

export default HeaderForm;





