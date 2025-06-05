export default {
    title: 'Foundation/Breakpoints',
  }
  
  export const Sizes = () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
      <div style={{ maxWidth: 640, background: '#f3f4f6', padding: 16 }}>SM: ≤ 640px</div>
      <div style={{ maxWidth: 768, background: '#e5e7eb', padding: 16 }}>MD: ≤ 768px</div>
      <div style={{ maxWidth: 1024, background: '#d1d5db', padding: 16 }}>LG: ≤ 1024px</div>
      <div style={{ maxWidth: 1280, background: '#9ca3af', padding: 16, color: '#fff' }}>XL: ≤ 1280px</div>
    </div>
  )
  