/* eslint-disable react/jsx-key */
import fetchImages from "@/lib/fetchImages";
import { ImagesResults } from "@/models/Images";
import React from "react";
import ImgContainer from "./ImageContainer";
import addBlurredDataUrls from "@/lib/getBase64";
import Paginator from "./Paginator";

type Props = {
  topic?: string | undefined;
  page: number;
};

export default async function Gallery({ topic = "curated", page }: Props) {
  let url;
  if (topic === "curated" && page) {
    url = `https://api.pexels.com/v1/curated?page=${page}`;
  } else if (topic === "curated") {
    url = "https://api.pexels.com/v1/curated";
  } else if (!page) {
    url = `https://api.pexels.com/v1/search?query=${topic}`;
  } else {
    url = `https://api.pexels.com/v1/search?query=${topic}&page=${page}`;
  }

  const images: ImagesResults | undefined = await fetchImages(url);

  if (!images || images.per_page === 0)
    return <h2 className="m-4 text-2xl font-bold">No Images Found</h2>;

  const photosWithBlur = await addBlurredDataUrls(images);

  const { total_results, per_page } = images;
  const totalPages =
    total_results % per_page
      ? Math.ceil(total_results / per_page)
      : total_results / per_page + 1;

  return (
    <>
      <Paginator page={page} totalPages={totalPages} topic={topic} />
      <section className="px-1 my-3 grid grid-cols-gallery auto-rows-[10px]">
        {photosWithBlur.map((photo) => (
          <ImgContainer key={photo.id} photo={photo} />
        ))}
      </section>
      <Paginator page={page} totalPages={totalPages} topic={topic} />
    </>
  );
}
