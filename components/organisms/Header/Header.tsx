'use client';
import Link from 'next/link';
import { Globe, Menu, User, X, Search, MapPin, CalendarDays, Users } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Image } from '@/components/atoms/Image';
import { SearchBar } from '@/components/molecules/SearchBar';
import { Logo } from '@/components/atoms/Logo';

export const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  return (
    <header className={`transition-all duration-300 ${isScrolled ? 'fixed top-0 left-0 right-0 z-50 border-b shadow-sm' : ''}`} style={{ background: "linear-gradient(180deg, #ffffff 39.9%, #f8f8f8 100%)" }}>
      <div className={`container-fluid mx-auto px-12 transition-all duration-300 ${isScrolled ? '' : 'h-[200px]'}`}>
        {/* Top Bar */}
        <div className={`flex items-center justify-between h-20`}>
          {/* Logo */}
          <Logo className="flex-shrink-0" />

          {/* Navigation - Desktop */}
          <div className="flex-1 flex justify-center">
            <nav className={`w-full lg:flex items-center justify-center space-x-10 text-sm font-medium transition-all duration-300 ${isScrolled ? 'opacity-0 invisible' : ''}`}>
              <Link
                href="/places"
                className="flex items-center space-x-1 border-b-2 border-black py-2 hover:text-airbnb transition-colors"
              >
                <Image
                  src="/images/places.png"
                  alt="Places"
                  width={36}
                  height={36}
                />
                <span>Nơi lưu trú</span>
              </Link>
              <Link
                href="/experiences"
                className="flex items-center space-x-1 hover:text-airbnb transition-colors"
              >
                <Image
                  src="/images/experiences.png"
                  alt="Experiences"
                  width={36}
                  height={36}
                />
                <span>Trải nghiệm</span>
              </Link>
              <Link
                href="/online-experiences"
                className="flex items-center space-x-1 hover:text-airbnb transition-colors"
              >
                <Image
                  src="/images/online-exp.png"
                  alt="Online Experiences"
                  width={36}
                  height={36}
                />
                <span>Dịch vụ</span>
              </Link>
            </nav>
          </div>

          {/* User Menu */}
          <div className="flex items-center space-x-2">
            <button className="hidden hover:bg-gray-100 px-4 py-2 rounded-full transition">
              Trở thành host
            </button>
            <button className="flex items-center border rounded-full p-2 hover:shadow-md transition bg-[#F2F2F2]">
              <Globe size={18} />
            </button>
            <button
              className="flex items-center border rounded-full p-2 hover:shadow-md transition bg-[#F2F2F2]"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <Menu size={18} />
            </button>
          </div>
        </div>

        {/* Search Bar Container */}
        <div className="relative">
          <div className={`inset-x-0 transition-all duration-500 transform ${isScrolled ? 'absolute -translate-y-20' : 'translate-y-0'}`}>
            {/* Expanded Search Bar */}
            <div className={`w-full transition-all duration-500 ${isScrolled ? 'opacity-0 invisible scale-95' : 'opacity-100 visible scale-100'}`}>
              <SearchBar />
            </div>

            {/* Collapsed Search Bar */}
            <div className={`absolute top-[50%] translate-y-[-50%] left-0 right-0 flex justify-center transition-all duration-500 ${isScrolled ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-4'}`}>
              <button className="flex items-center space-x-4 border rounded-full py-2 px-6 shadow-md hover:shadow-lg transition-shadow bg-white">
                <div className="flex items-center space-x-3 border-r pr-4">
                  <Search size={16} />
                  <span className="text-sm font-medium">Địa điểm bất kỳ</span>
                </div>
                <div className="flex items-center space-x-3 border-r pr-4">
                  <CalendarDays size={16} />
                  <span className="text-sm font-medium">Thời gian bất kỳ</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Users size={16} />
                  <span className="text-sm font-medium">Thêm khách</span>
                </div>
                <div className="bg-airbnb text-white p-2 rounded-full">
                  <Search size={16} />
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-50">
            <div className="bg-white h-full w-64 p-6 transform transition-transform duration-300">
              <div className="flex justify-between items-center mb-8">
                <Logo size="sm" />
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 hover:bg-gray-100 rounded-full transition"
                >
                  <X size={24} />
                </button>
              </div>

              <nav className="space-y-6">
                <Link
                  href="/places"
                  className="flex items-center space-x-3 hover:text-airbnb transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <Image
                    src="/images/places.png"
                    alt="Places"
                    width={20}
                    height={20}
                  />
                  <span>Nơi lưu trú</span>
                </Link>
                <Link
                  href="/experiences"
                  className="flex items-center space-x-3 hover:text-airbnb transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <Image
                    src="/images/experiences.png"
                    alt="Experiences"
                    width={20}
                    height={20}
                  />
                  <span>Trải nghiệm</span>
                </Link>
                <Link
                  href="/online-experiences"
                  className="flex items-center space-x-3 hover:text-airbnb transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <Image
                    src="/images/online-exp.png"
                    alt="Online Experiences"
                    width={20}
                    height={20}
                  />
                  <span>Dịch vụ</span>
                </Link>
                <hr />
                <button className="w-full text-left lg:hidden hover:text-airbnb transition-colors">
                  Trở thành host
                </button>
                <button className="w-full text-left lg:hidden hover:text-airbnb transition-colors">
                  Trợ giúp
                </button>
                <button className="w-full text-left hover:text-airbnb transition-colors">
                  Đăng ký
                </button>
                <button className="w-full text-left hover:text-airbnb transition-colors">
                  Đăng nhập
                </button>
              </nav>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}; 