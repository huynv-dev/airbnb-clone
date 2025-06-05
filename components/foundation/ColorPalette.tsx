import React from 'react'
import { colors } from '../../lib/tailwind-tokens'

export const ColorPalette = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
    {Object.entries(colors).map(([groupName, groupValue]) => {
      if (typeof groupValue !== 'object') return null
      return (
        <div key={groupName}>
          <h4 style={{ fontSize: 14, marginBottom: 8 }}>{groupName}</h4>
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
            {Object.entries(groupValue).map(([shade, color]) => (
              <div key={shade} style={{ textAlign: 'center' }}>
                <div
                  style={{
                    width: 48,
                    height: 48,
                    backgroundColor: color as string,
                    borderRadius: 6,
                    border: '1px solid #ddd',
                  }}
                />
                <div style={{ fontSize: 10 }}>{shade}</div>
              </div>
            ))}
          </div>
        </div>
      )
    })}
  </div>
)
