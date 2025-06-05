// components/foundation/BrandColors.tsx

import React from 'react'
import { themeRoles } from '../../lib/tailwind-tokens'
import colors from 'tailwindcss/colors'

export const BrandColors = () => (
  <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
    {Object.entries(themeRoles).map(([role, colorKey]) => {
      const colorGroup = colors[colorKey as keyof typeof colors]
      if (typeof colorGroup !== 'object') return null

      return (
        <div key={role}>
          <h4 style={{ fontSize: 14, marginBottom: 8, textTransform: 'capitalize' }}>
            {role} ({colorKey})
          </h4>
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
            {Object.entries(colorGroup)
              .filter(([key]) => /^\d+$/.test(key)) // only numeric shades
              .map(([shade, value]) => (
                <div key={shade} style={{ textAlign: 'center' }}>
                  <div
                    style={{
                      width: 48,
                      height: 48,
                      backgroundColor: value as string,
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
