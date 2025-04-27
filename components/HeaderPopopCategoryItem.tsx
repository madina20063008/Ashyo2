import { IMG_API } from '@/hooks/getEnv'
import { Link } from '@/i18n/navigation'
import { HeaderCategoriesType } from '@/types/HeaderCategoriesType'
import Image from 'next/image'

import React, {FC} from 'react'

const HeaderPopopCategoryItem:FC<{item: HeaderCategoriesType}> = ({item}) => {
  return (
    <Link
            className="py-[12px] pl-[40px] text-[16px] flex items-center gap-[15px] hover:bg-white text-[#545D6A] duration-300 rounded-md"
            key={item.id}
            href={"/"}
          >
            <Image
              className="w-[24px] h-[24px]"
              src={`${IMG_API}/${item.icon}`}
              alt="Category icon"
              width={24}
              height={24}
              priority
            />
            
            <span>{item.name}</span>
            
          </Link>
          
  )
}

export default HeaderPopopCategoryItem