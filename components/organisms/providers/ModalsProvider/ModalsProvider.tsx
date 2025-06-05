'use client';

import LoginModal from '@/components/organisms/LoginModal';
import RegisterModal from '@/components/organisms/RegisterModal';
import RentModal from '@/components/organisms/RentModal';
import SearchModal from '@/components/organisms/SearchModal';
import { Suspense } from 'react';

const ModalsProvider = () => {
  return (
    <>
      <LoginModal />
      <RegisterModal />
      <RentModal />
      <Suspense fallback={<div />}>
      <SearchModal />
      </Suspense>
    </>
  );
};

export default ModalsProvider;
