export default {
    title: 'Foundation/Shadows',
  }
  
  const shadows = {
    'shadow-sm': '0 1px 2px 0 rgba(0,0,0,0.05)',
    'shadow': '0 1px 3px 0 rgba(0,0,0,0.1), 0 1px 2px 0 rgba(0,0,0,0.06)',
    'shadow-md': '0 4px 6px -1px rgba(0,0,0,0.1), 0 2px 4px -1px rgba(0,0,0,0.06)',
    'shadow-lg': '0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -2px rgba(0,0,0,0.05)',
    'shadow-xl': '0 20px 25px -5px rgba(0,0,0,0.1), 0 10px 10px -5px rgba(0,0,0,0.04)',
    'shadow-2xl': '0 25px 50px -12px rgba(0,0,0,0.25)',
  }
  
  export const TailwindShadows = () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
      {Object.entries(shadows).map(([name, value]) => (
        <div
          key={name}
          style={{
            width: 200,
            height: 64,
            backgroundColor: '#fff',
            borderRadius: 8,
            border: '1px solid #eee',
            boxShadow: value,
            padding: 12,
            display: 'flex',
            alignItems: 'center',
            fontSize: 12,
          }}
        >
          {name}
        </div>
      ))}
    </div>
  )
  