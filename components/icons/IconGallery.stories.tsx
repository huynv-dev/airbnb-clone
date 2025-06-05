import React, { useEffect, useState } from 'react'
import { Icon } from './Icon'
import { iconSets, IconStyle, IconName } from './IconSet'
import { MagnifyingGlassIcon } from '@heroicons/react/16/solid'

export default {
    title: 'Icons/Icon Gallery',
    component: Icon,
}

export const Gallery = () => {
    const [search, setSearch] = useState('')
    const [styleSet, setStyleSet] = useState<IconStyle>('outline')
    const [copiedIcon, setCopiedIcon] = useState<string | null>(null)
    const [isSticky, setIsSticky] = useState(false)
    useEffect(() => {
        const handleScroll = () => {
          setIsSticky(window.scrollY > 10)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
      }, [])
      

    const iconNames = (Object.keys(iconSets[styleSet]) as IconName[]).filter((name) =>
        name.toLowerCase().includes(search.toLowerCase())
    )

    return (
        <div style={{ padding: '24px', fontFamily: 'sans-serif', background: 'white' }}>
            {/* Sticky Filter/Search Bar */}
            <div
                style={{
                    position: 'sticky',
                    top: 10,
                    zIndex: 10,
                    background: 'white',
                    marginBottom: '24px',
                    marginTop: '24px',
                    boxShadow: isSticky ? '0 2px 6px rgba(0,0,0,0.08)' : 'none',
                }}
            >
                <div
                    style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        gap: '12px',
                        border: '1px solid #e5e7eb',
                        borderRadius: '8px',
                        padding: '12px 16px',
                        boxShadow: '0 1px 3px rgba(0, 0, 0, 0.05)',
                    }}
                >
                    {/* Style radios */}
                    <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
                        {(['outline', 'solid', 'custom'] as IconStyle[]).map((style) => (
                            <label
                                key={style}
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    fontSize: '14px',
                                    gap: '6px',
                                    backgroundColor: styleSet === style ? '#f3f4f6' : 'transparent',
                                    padding: '4px 10px',
                                    borderRadius: '6px',
                                    cursor: 'pointer',
                                }}
                            >
                                <input
                                    type="radio"
                                    name="styleSet"
                                    value={style}
                                    checked={styleSet === style}
                                    onChange={(e) => setStyleSet(e.target.value as IconStyle)}
                                />
                                <span style={{ textTransform: 'capitalize' }}>{style}</span>
                            </label>
                        ))}
                    </div>

                    {/* Search */}
                    <div style={{ position: 'relative', flexGrow: 1, marginRight: '12px', maxWidth: '400px' }}>
                        <input
                            type="text"
                            placeholder="Search icons here, click icon to copy code"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            style={{
                                padding: '10px 0px 10px 10px',
                                fontSize: '14px',
                                border: '1px solid #ddd',
                                borderRadius: '6px',
                                outline: 'none',
                                color: '#111',
                                width: '100%',
                            }}
                        />
                        <MagnifyingGlassIcon
                            style={{
                                position: 'absolute',
                                right: '12px',
                                top: '50%',
                                transform: 'translateY(-50%)',
                                width: '18px',
                                height: '18px',
                                color: '#999',
                                pointerEvents: 'none',
                            }}
                        />
                    </div>
                </div>
            </div>
            {/* Icon Grid */}
            <div
                style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fill, minmax(80px, 1fr))',
                    gap: '16px',
                    maxWidth: '100%',
                    margin: '0 auto',
                }}
            >
                {iconNames.map((name) => (
                    <div
                        key={name}
                        onClick={() => {
                            navigator.clipboard.writeText(name)
                            setCopiedIcon(name)
                            setTimeout(() => setCopiedIcon(null), 1500)
                        }}
                        title={`Click to copy "${name}"`}
                        style={{
                            width: '100%',
                            aspectRatio: '1 / 1',
                            border: '1px solid #ddd',
                            borderRadius: '8px',
                            backgroundColor: copiedIcon === name ? 'rgba(255,255,255,0.8)' : 'white',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            justifyContent: 'center',
                            textAlign: 'center',
                            position: 'relative',
                            cursor: 'pointer',
                            transition: 'background 0.2s, box-shadow 0.2s',
                        }}
                        onMouseEnter={(e) => {
                            if (copiedIcon !== name) e.currentTarget.style.backgroundColor = '#f0f4ff'
                        }}
                        onMouseLeave={(e) => {
                            if (copiedIcon !== name) e.currentTarget.style.backgroundColor = 'white'
                        }}
                    >
                        <Icon name={name} styleSet={styleSet} size={24} />

                        <span
                            style={{
                                marginTop: '6px',
                                fontSize: '11px',
                                color: '#333',
                                wordBreak: 'break-word',
                                padding: '0 4px',
                            }}
                        >
                            {name}
                        </span>

                        {copiedIcon === name && (
                            <div
                                style={{
                                    position: 'absolute',
                                    inset: 0,
                                    background: 'rgba(255,255,255,0.9)',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    color: 'green',
                                    fontWeight: 600,
                                    fontSize: '13px',
                                    borderRadius: '8px',
                                }}
                            >
                                Copied!
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    )
}
