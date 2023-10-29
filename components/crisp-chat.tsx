"use client";
import { Crisp } from "crisp-sdk-web";
import { useEffect } from "react";

const CrispChat = () => {
  useEffect(() => {
    Crisp.configure("19e3266a-1f30-4638-b7ed-c84f601cae76");
  }, []);

  return null;
};

export default CrispChat;
