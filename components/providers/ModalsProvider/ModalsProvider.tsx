'use client';

import LoginModal from "@/components/organisms/LoginModal";
import RegisterModal from "@/components/organisms/RegisterModal";
import RentModal from "@/components/organisms/RentModal";
import SearchModal from "@/components/organisms/SearchModal";

const ModalsProvider = () => {
  return (
    <>
      <LoginModal />
      <RegisterModal />
      <RentModal />
      <SearchModal />
    </>
  );
}

export default ModalsProvider; 