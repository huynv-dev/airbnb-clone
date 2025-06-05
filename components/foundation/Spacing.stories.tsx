export default {
    title: 'Foundation/Spacing',
  }
  
  export const Scale = () => {
    const spacings = [4, 8, 12, 16, 24, 32, 40, 48]
  
    return (
      <div>
        {spacings.map((space) => (
          <div
            key={space}
            style={{
              marginBottom: 12,
              display: 'flex',
              alignItems: 'center',
              gap: 16,
            }}
          >
            <div
              style={{
                width: space,
                height: 24,
                backgroundColor: '#6366f1',
              }}
            />
            <span style={{ fontSize: 12 }}>{space}px</span>
          </div>
        ))}
      </div>
    )
  }
  