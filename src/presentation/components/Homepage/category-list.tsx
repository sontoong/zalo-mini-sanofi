import React, { FC } from "react";
import Category1 from "../../static/category1.svg";
import Category2 from "../../static/category2.svg";
import Category3 from "../../static/category3.svg";
import Category4 from "../../static/category4.svg";
import { useNavigate } from "zmp-ui";

const CategoryList = () => {
  return (
    <div className="flex flex-col gap-3 px-4">
      <div className="text-xl font-medium">Danh mục</div>
      <div className="flex gap-1">
        {categories.map((category, index) => (
          <CategoryButton
            key={index}
            image={category.image}
            title={category.title}
            link={category.link}
          />
        ))}
      </div>
    </div>
  );
};

const CategoryButton: FC<CategoryButtonProps> = ({ image, link, title }) => {
  const navigate = useNavigate();

  return (
    <div
      className="flex flex-col items-center gap-2 text-center"
      onClick={() => navigate(link)}
    >
      <img src={image} alt="" />
      <div>{title}</div>
    </div>
  );
};

export default CategoryList;

type CategoryButtonProps = {
  image: string;
  title: string;
  link: string;
};

const categories = [
  {
    image: Category1,
    title: "Tiêu hóa - miễn dịch",
    link: "/",
  },
  {
    image: Category2,
    title: "Cơ - xương khớp",
    link: "/",
  },
  {
    image: Category3,
    title: "Dị ứng - mề đay",
    link: "/",
  },
  {
    image: Category4,
    title: "Dạ dày - thực quản",
    link: "/",
  },
];
