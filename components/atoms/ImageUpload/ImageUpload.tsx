'use client';

import { CldUploadWidget } from 'next-cloudinary';
import Image from 'next/image';
import { TbPhotoPlus } from 'react-icons/tb';

interface ImageUploadProps {
  onChange: (value: string) => void;
  value: string;
}

declare global {
  var cloudinary: any;
}

const ImageUpload: React.FC<ImageUploadProps> = ({ onChange, value }) => {
  return (
    <CldUploadWidget
      onUpload={(result: any) => onChange(result.info.secure_url)}
      uploadPreset="your_upload_preset" // 👉 thay bằng preset Cloudinary của bạn
      options={{
        maxFiles: 1,
      }}
    >
      {({ open }) => (
        <div
          onClick={() => open?.()}
          className="relative flex cursor-pointer flex-col items-center justify-center gap-4 border-2 border-dashed border-neutral-300 p-20 text-neutral-600 transition hover:opacity-70"
        >
          <TbPhotoPlus size={50} />
          <div className="text-lg font-semibold">Click to upload</div>
          {value && (
            <div className="absolute inset-0 h-full w-full">
              <Image fill style={{ objectFit: 'cover' }} src={value} alt="Uploaded" />
            </div>
          )}
        </div>
      )}
    </CldUploadWidget>
  );
};

export default ImageUpload;
