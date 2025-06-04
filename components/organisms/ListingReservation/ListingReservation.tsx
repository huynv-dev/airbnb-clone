import React from 'react';

interface ListingReservationProps {
  price: number;
  totalPrice: number;
  onChangeDate: (value: any) => void;
  dateRange: any;
  onSubmit: () => void;
  disabled: boolean;
  disabledDates: any[];
}

const ListingReservation: React.FC<ListingReservationProps> = ({
  price,
  totalPrice,
  onChangeDate,
  dateRange,
  onSubmit,
  disabled,
  disabledDates,
}) => {
  return (
    <div className="rounded-lg border p-4">
      <div className="mb-2 text-lg font-bold">Price: ${price}</div>
      <div className="mb-2 text-gray-500">Total: ${totalPrice}</div>
      <button
        className="rounded bg-blue-500 px-4 py-2 text-white disabled:opacity-50"
        onClick={onSubmit}
        disabled={disabled}
      >
        Reserve
      </button>
    </div>
  );
};

export default ListingReservation;
