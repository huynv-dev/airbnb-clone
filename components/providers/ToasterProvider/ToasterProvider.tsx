'use client';

import { Toaster } from "react-hot-toast";

const ToasterProvider = () => {
  return ( 
    <Toaster 
      position="top-center"
      reverseOrder={false}
      gutter={8}
      containerClassName=""
      containerStyle={{}}
      toastOptions={{
        // Default options for specific types
        success: {
          duration: 3000,
          style: {
            background: '#363636',
            color: '#fff',
          },
        },
        error: {
          duration: 3000,
          style: {
            background: '#363636',
            color: '#fff',
          },
        },
        // Default options
        style: {
          background: '#363636',
          color: '#fff',
        },
      }}
    />
  );
}

export default ToasterProvider; 