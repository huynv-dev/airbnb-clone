export default {
    title: 'Foundation/Radius',
  }
  
  const radii = {
    'rounded-none': '0px',
    'rounded-sm': '0.125rem',
    'rounded': '0.25rem',
    'rounded-md': '0.375rem',
    'rounded-lg': '0.5rem',
    'rounded-xl': '0.75rem',
    'rounded-2xl': '1rem',
    'rounded-3xl': '1.5rem',
    'rounded-full': '9999px',
  }
  
  export const BorderRadius = () => (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 16 }}>
      {Object.entries(radii).map(([label, value]) => (
        <div key={label} style={{ textAlign: 'center' }}>
          <div
            style={{
              width: 64,
              height: 64,
              backgroundColor: '#ddd',
              borderRadius: value,
            }}
          />
          <div style={{ fontSize: 12, marginTop: 4 }}>{label}</div>
        </div>
      ))}
    </div>
  )
  