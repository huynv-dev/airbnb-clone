export default {
    title: 'Foundation/ZIndex',
  }
  
  const zIndexes = {
    'z-0': 0,
    'z-10': 10,
    'z-20': 20,
    'z-30': 30,
    'z-40': 40,
    'z-50': 50,
    'z-auto': 'auto',
  }
  
  export const ZLayer = () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
      {Object.entries(zIndexes).map(([label, value]) => (
        <div
          key={label}
          style={{
            position: 'relative',
            backgroundColor: '#f3f4f6',
            padding: 12,
            fontSize: 12,
          }}
        >
          <div style={{ zIndex: value as number, position: 'relative' }}>
            {label} → zIndex: {value}
          </div>
        </div>
      ))}
    </div>
  )
  