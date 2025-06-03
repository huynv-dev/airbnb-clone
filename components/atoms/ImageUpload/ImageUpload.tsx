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
        maxFiles: 1
      }}
    >
      {({ open }) => (
        <div
          onClick={() => open?.()}
          className="relative cursor-pointer hover:opacity-70 transition border-dashed border-2 p-20 border-neutral-300 flex flex-col justify-center items-center gap-4 text-neutral-600"
        >
          <TbPhotoPlus size={50} />
          <div className="font-semibold text-lg">Click to upload</div>
          {value && (
            <div className="absolute inset-0 w-full h-full">
              <Image
                fill
                style={{ objectFit: 'cover' }}
                src={value}
                alt="Uploaded"
              />
            </div>
          )}
        </div>
      )}
    </CldUploadWidget>
  );
};

export default ImageUpload;
