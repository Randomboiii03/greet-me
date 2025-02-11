"use client";

import { useEffect, useState } from "react";
import { notFound, useParams } from "next/navigation"; // useParams to handle async params

import MidComponent from "@/components/middle-part";
import LeftComponent from "@/components/left-part";
import RightComponent from "@/components/right-part";

async function fetchGreetData(uuid: string) {
  // Fetch data from the API
  const res = await fetch(`/api/greet/${uuid}`, {
    cache: "no-store", // Prevents caching
  });

  if (!res.ok) {
    return null;
  }

  const data = await res.json();
  return data;
}

export default function Page() {
  const params = useParams(); // Fetch params using `useParams`

  // Safely convert `uuid` to string if it's an array
  const uuid = Array.isArray(params?.uuid) ? params?.uuid[0] : params?.uuid;

  // Define state for storing the fetched data
  const [data, setData] = useState<{
    id: string;
    count: number;
    label: string;
    message: string;
    music: string;
    video: string;
    images: string;
  } | null>(null);
  const [error, setError] = useState<boolean>(false);

  // Fetch data once using useEffect
  useEffect(() => {
    async function fetchData() {
      if (!uuid) {
        setError(true);
        return;
      }

      const result = await fetchGreetData(uuid);

      if (!result) {
        setError(true);
        return;
      }

      setData(result);
    }

    fetchData(); // Fetch the data once
  }, [uuid]); // Trigger re-fetch if `uuid` changes

  if (error) {
    notFound(); // Trigger a 404 if there's an error or title is 'CLOSED'
  }

  if (!data) {
    // You can add a loading state here if desired
    return (
      <div className="h-screen max-h-screen overflow-hidden flex flex-col xl:flex-row bg-contain bg-center bg-no-repeat bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-pink-400 via-red-300 to-white"></div>
    );
  }

  const { id, count, label, message, music, video, images } = data;

  console.log(id);
  console.log(images)
  const imageArray = images ? images.split("|") : [];

  return (
    <div
      className="h-screen max-h-screen overflow-hidden flex flex-col xl:flex-row bg-contain bg-center bg-no-repeat bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-pink-400 via-red-300 to-white"
    >
      <LeftComponent audio={music} number={count} word={label} message={message} />
      <MidComponent videoUrl={video} />
      <RightComponent images={imageArray}  /> 
    </div>
  );
}
