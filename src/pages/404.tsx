import React, { FunctionComponent } from "react";
import { Layout } from "../components/layout";

export const NotFound: FunctionComponent = () => {
  return (
    ---
    template: blog-post
    title: Өдрийн онцлох мэдээ!!!
    publishedDate: 2022-07-15T12:00:28.345Z
    description: Орон нутгийн замд хурдаа тохируулан оролцохыг цагдаагийн байгууллага анхааруулж байна
    featured: true
    img: ../../static/images/машаан.png
    imgAlt: Тухайн ослын зураг
    tags:
      - Цагдаа
      - Үхэл
      - Осол
    ---
    2022 оны долдугаар сарын 13-ны 11:05 цагт .Саното-8, Т.Highlander автомашинууд хурдаа тохируулаагүйн улмаас 3 хүн газар дээрээ нас баржээ.
    Та бүхэн орон нутгын замд хурдаа тохируулан явахыг цагдаагын байгууллага анхааруулж байна!
  );
};

export default NotFound;
