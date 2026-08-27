"use client";

import { useState, useEffect } from "react";
import { Modal } from "@/components";

export default function ModalWrapper() {
  const [isModalOpen, setIsModalOpen] = useState(true);

  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isModalOpen]);

  return (
    <Modal
      open={isModalOpen}
      message="Active and available for collaboration."
      onConfirm={() => setIsModalOpen(false)}
      singleButton={true}
    />
  );
}
