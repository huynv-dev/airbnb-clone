import React from 'react';


const getPaginationRange = (current: number, totalPages: number): (number | '...')[] => {
  const range: (number | '...')[] = [];

  if (totalPages <= 7) {
    for (let i = 1; i <= totalPages; i++) {
      range.push(i);
    }
  } else {
    range.push(1);

    if (current > 4) {
      range.push('...');
    }

    const start = Math.max(2, current - 2);
    const end = Math.min(totalPages - 1, current + 2);

    for (let i = start; i <= end; i++) {
      range.push(i);
    }

    if (current < totalPages - 3) {
      range.push('...');
    }

    range.push(totalPages);
  }

  return range;
};

export const Pagination: React.FC<PaginationConfig> = ({
  current,
  pageSize,
  total,
  onChange,
  showSizeChanger,
  showQuickJumper,
  pageSizeOptions = ['10', '20', '50', '100'],
  position = 'end',
}) => {
  const totalPages = Math.ceil(total / pageSize);

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages && page !== current && onChange) {
      onChange(page, pageSize);
    }
  };

  const handleSizeChange = (newSize: number) => {
    onChange?.(1, newSize);
  };

  return (
    <div className={`flex items-center justify-${position} mt-4`}>
      <div className="flex items-center space-x-2">
        {showSizeChanger && (
          <select
            value={pageSize}
            onChange={(e) => handleSizeChange(Number(e.target.value))}
            className="border rounded px-2 py-1 text-sm"
          >
            {pageSizeOptions.map((size) => (
              <option key={size} value={Number(size)}>
                {size} / page
              </option>
            ))}
          </select>
        )}
        <div className="flex items-center space-x-1">
          <button
            onClick={() => handlePageChange(current - 1)}
            disabled={current <= 1}
            className="px-2 py-1 border rounded text-sm disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
          >
            Previous
          </button>

          {getPaginationRange(current, totalPages).map((item, idx) =>
            item === '...' ? (
              <span
                key={`ellipsis-${idx}`}
                className="px-2 py-1 text-sm text-gray-500 select-none"
              >
                ...
              </span>
            ) : (
              <button
                key={item}
                onClick={() => handlePageChange(item)}
                className={`px-3 py-1 border rounded text-sm ${current === item ? 'bg-blue-500 text-white' : 'hover:bg-gray-50'
                  }`}
              >
                {item}
              </button>
            )
          )}

          <button
            onClick={() => handlePageChange(current + 1)}
            disabled={current >= totalPages}
            className="px-2 py-1 border rounded text-sm disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-50"
          >
            Next
          </button>
        </div>
        {showQuickJumper && (
          <div className="flex items-center space-x-1 text-sm">
            <span>Go to</span>
            <input
              type="number"
              min={1}
              max={totalPages}
              className="w-12 px-1 py-1 border rounded text-center"
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  const page = parseInt((e.target as HTMLInputElement).value);
                  if (page >= 1 && page <= totalPages) {
                    handlePageChange(page);
                  }
                }
              }}
            />
          </div>
        )}
      </div>
    </div>
  );
};
