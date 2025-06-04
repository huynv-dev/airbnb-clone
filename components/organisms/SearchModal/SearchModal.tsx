'use client';

import qs from 'query-string';
import dynamic from 'next/dynamic';
import { useCallback, useMemo, useState } from 'react';
import { Range } from 'react-date-range';
import { formatISO } from 'date-fns';
import { useRouter, useSearchParams } from 'next/navigation';
import Modal from '../Modal';
import Calendar from '@/components/atoms/Calendar';
import Counter from '@/components/atoms/Counter';
import { Heading } from '@/components/atoms';
import CountrySelect from '@/components/atoms/CountrySelect';
import useSearchModal from '@/hooks/useSearchModal';
import { countries } from '@/data/countries';

enum STEPS {
  LOCATION = 0,
  DATE = 1,
  INFO = 2,
}

type CountryOption = {
  value: string;
  label: string;
  latlng: number[];
};

const SearchModal = () => {
  const router = useRouter();
  const searchModal = useSearchModal();
  const params = useSearchParams();

  const [step, setStep] = useState(STEPS.LOCATION);
  const [location, setLocation] = useState<CountryOption | undefined>();
  const [guestCount, setGuestCount] = useState(1);
  const [roomCount, setRoomCount] = useState(1);
  const [bathroomCount, setBathroomCount] = useState(1);
  const [dateRange, setDateRange] = useState<Range>({
    startDate: new Date(),
    endDate: new Date(),
    key: 'selection',
  });

  const Map = useMemo(
    () => dynamic(() => import('@/components/atoms/Map'), { ssr: false }),
    [location],
  );

  const onBack = useCallback(() => setStep((value) => value - 1), []);
  const onNext = useCallback(() => setStep((value) => value + 1), []);

  const onSubmit = useCallback(async () => {
    if (step !== STEPS.INFO) return onNext();

    let currentQuery = {};
    if (params) currentQuery = qs.parse(params.toString());

    const updatedQuery: any = {
      ...currentQuery,
      locationValue: location?.value,
      guestCount,
      roomCount,
      bathroomCount,
    };

    if (dateRange.startDate) {
      updatedQuery.startDate = formatISO(dateRange.startDate);
    }

    if (dateRange.endDate) {
      updatedQuery.endDate = formatISO(dateRange.endDate);
    }

    const url = qs.stringifyUrl({ url: '/', query: updatedQuery }, { skipNull: true });

    setStep(STEPS.LOCATION);
    searchModal.onClose();
    router.push(url);
  }, [
    step,
    searchModal,
    location,
    guestCount,
    roomCount,
    bathroomCount,
    dateRange,
    params,
    onNext,
    router,
  ]);

  const actionLabel = useMemo(() => (step === STEPS.INFO ? 'Search' : 'Next'), [step]);
  const secondaryActionLabel = useMemo(
    () => (step === STEPS.LOCATION ? undefined : 'Back'),
    [step],
  );

  let bodyContent = (
    <div className="flex flex-col gap-4">
      <Heading title="Where do you wanna go?" subtitle="Find the perfect location!" />
      <CountrySelect
        value={location?.value || ''}
        onChange={(val: string) => setLocation(countries.find((c) => c.value === val))}
        options={countries}
      />
      {location && <Map center={location.latlng as [number, number]} />}
    </div>
  );

  if (step === STEPS.DATE) {
    bodyContent = (
      <div className="flex flex-col gap-4">
        <Heading title="When do you plan to go?" subtitle="Make sure everyone is free!" />
        <Calendar onChange={(value: any) => setDateRange(value.selection)} value={dateRange} />
      </div>
    );
  }

  if (step === STEPS.INFO) {
    bodyContent = (
      <div className="flex flex-col gap-4">
        <Heading title="More information" subtitle="Find your perfect place!" />
        <Counter
          onChange={setGuestCount}
          value={guestCount}
          title="Guests"
          subtitle="How many guests are coming?"
        />
        <hr />
        <Counter
          onChange={setRoomCount}
          value={roomCount}
          title="Rooms"
          subtitle="How many rooms do you need?"
        />
        <hr />
        <Counter
          onChange={setBathroomCount}
          value={bathroomCount}
          title="Bathrooms"
          subtitle="How many bathrooms do you need?"
        />
      </div>
    );
  }

  return (
    <Modal
      isOpen={searchModal.isOpen}
      title="Filters"
      actionLabel={actionLabel}
      onSubmit={onSubmit}
      secondaryActionLabel={secondaryActionLabel}
      secondaryAction={step === STEPS.LOCATION ? undefined : onBack}
      onClose={searchModal.onClose}
      body={bodyContent}
    />
  );
};

export default SearchModal;
