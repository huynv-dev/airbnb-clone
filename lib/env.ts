export const serverEnv = {
    API_SECRET_KEY: requiredEnv('API_SECRET_KEY'),
    API_INTERNAL_URL: requiredEnv('API_INTERNAL_URL'),
    DATABASE_URL: requiredEnv('DATABASE_URL'),
    STRIPE_SECRET_KEY: requiredEnv('STRIPE_SECRET_KEY'),
  }
  
  export const clientEnv = {
    NEXT_PUBLIC_API_BASE_URL: getClientEnv('NEXT_PUBLIC_API_BASE_URL'),
    NEXT_PUBLIC_SITE_NAME: getClientEnv('NEXT_PUBLIC_SITE_NAME'),
    NEXT_PUBLIC_GOOGLE_ANALYTICS_ID: getClientEnv('NEXT_PUBLIC_GOOGLE_ANALYTICS_ID'),
  }
  
  /** Helper để đảm bảo biến môi trường bắt buộc */
  function requiredEnv(key: string): string {
    const value = process.env[key]
    if (!value) {
      throw new Error(`❌ Missing required environment variable: ${key}`)
    }
    return value
  }
  
  /** Helper cho biến CLIENT: mặc định "" nếu không có (an toàn hơn) */
  function getClientEnv(key: string): string {
    return process.env[key] || ''
  }
  