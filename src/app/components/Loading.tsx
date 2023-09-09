"use client";
import { Spinner } from "@nextui-org/react";
import React from "react";

const Loading = () => {
  return (
    <div className="h-screen flex justify-center">
      <Spinner size="lg" />
    </div>
  );
};

export default Loading;
