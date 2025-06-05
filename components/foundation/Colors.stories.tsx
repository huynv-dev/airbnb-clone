import React from 'react'
import colors from 'tailwindcss/colors'

export default {
  title: 'Foundation/Colors',
}

const palette = {
  gray: colors.gray,
  red: colors.red,
  yellow: colors.yellow,
  green: colors.green,
  blue: colors.blue,
  indigo: colors.indigo,
  purple: colors.purple,
  pink: colors.pink,
}

export const TailwindColors = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
    {Object.entries(palette).map(([name, shades]) => (
      <div key={name}>
        <h4 style={{ fontSize: 14, marginBottom: 8 }}>{name}</h4>
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
          {Object.entries(shades)
            .filter(([key]) => /^\d+$/.test(key)) // chỉ lấy 50, 100, ...
            .map(([shade, value]) => (
              <div key={shade} style={{ textAlign: 'center' }}>
                <div
                  style={{
                    width: 48,
                    height: 48,
                    backgroundColor: value as string,
                    borderRadius: 6,
                    border: '1px solid #eee',
                  }}
                />
                <div style={{ fontSize: 10, color: '#666' }}>{shade}</div>
              </div>
            ))}
        </div>
      </div>
    ))}
  </div>
)
