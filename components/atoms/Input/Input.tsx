import React from 'react'
import styles from './input.module.css'
import { cn } from '@/utils/cn'

export type InputVariant = 'default' | 'error' | 'success'
export type InputSize = 'sm' | 'md' | 'lg'

export type InputProps = {
  variant?: InputVariant
  size?: InputSize
  prefix?: React.ReactNode
  suffix?: React.ReactNode
} & Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size'>

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      variant = 'default',
      size = 'md',
      prefix,
      suffix,
      className,
      ...props
    },
    ref
  ) => {
    return (
      <div className={cn(styles.wrapper, styles[size], styles[variant], className)}>
        {prefix && <span className={styles.prefix}>{prefix}</span>}
        <input ref={ref} className={styles.input} {...props} />
        {suffix && <span className={styles.suffix}>{suffix}</span>}
      </div>
    )
  }
)

Input.displayName = 'Input'
