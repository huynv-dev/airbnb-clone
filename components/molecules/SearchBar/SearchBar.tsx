import { Search } from 'lucide-react';

interface SearchBarProps {
  onSearch?: () => void;
}

export const SearchBar = ({ onSearch }: SearchBarProps) => {
  return (
    <div className="flex items-center justify-between border rounded-full shadow-[0_3px_10px_rgb(0,0,0,0.1)] hover:shadow-[0_3px_10px_rgb(0,0,0,0.15)] transition-all bg-white max-w-[850px] mx-auto">
      {/* Location */}
      <button className="flex-1 px-4 py-3 text-left border-r hover:bg-gray-100 rounded-l-full transition-colors group">
        <div className="flex items-center gap-3">
          <Search size={16} className="text-gray-600" />
          <div>
            <div className="text-xs font-semibold">Địa điểm</div>
            <input 
              type="text"
              placeholder="Tìm kiếm điểm đến"
              className="w-full text-sm text-gray-600 placeholder-gray-400 bg-transparent border-none outline-none group-hover:bg-gray-100 transition-colors"
            />
          </div>
        </div>
      </button>

      {/* Check-in */}
      <button className="flex-1 px-4 py-3 text-left border-r hover:bg-gray-100 transition-colors">
        <div className="text-xs font-semibold">Nhận phòng</div>
        <div className="text-sm text-gray-600">Thêm ngày</div>
      </button>

      {/* Check-out */}
      <button className="flex-1 px-4 py-3 text-left border-r hover:bg-gray-100 transition-colors">
        <div className="text-xs font-semibold">Trả phòng</div>
        <div className="text-sm text-gray-600">Thêm ngày</div>
      </button>

      {/* Guests */}
      <button className="flex-1 px-4 py-3 text-left hover:bg-gray-100 rounded-r-full transition-colors">
        <div className="text-xs font-semibold">Khách</div>
        <div className="text-sm text-gray-600">Thêm khách</div>
      </button>

      {/* Search Button */}
      <button 
        onClick={onSearch}
        className="p-3 ml-2 mr-2 text-white bg-primary rounded-full hover:bg-primary/90 transition-colors"
      >
        <Search size={16} />
      </button>
    </div>
  );
}; 