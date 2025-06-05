import { ReactNode, useState } from 'react';
import clsx from 'clsx';
import styles from './Typography.module.css';
import { Copy, Edit, Check } from 'lucide-react';


type Level = 1 | 2 | 3 | 4 | 5;
type Variant =
  | 'title'
  | 'text'
  | 'link'
  | 'paragraph'
  | 'code'
  | 'mark'
  | 'keyboard'
  | 'delete'
  | 'underline'
  | 'strong'
  | 'italic'
  | 'disabled';

interface TypographyProps {
  variant?: Variant;
  level?: Level;
  type?: 'primary' | 'secondary' | 'success' | 'warning' | 'danger';
  disabled?: boolean;
  mark?: boolean;
  code?: boolean;
  keyboard?: boolean;
  underline?: boolean;
  delete?: boolean;
  strong?: boolean;
  italic?: boolean;
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  editable?: boolean;
  copyable?: boolean;
}

export function Typography({
  variant = 'text',
  level = 1,
  type = 'primary',
  disabled = false,
  mark = false,
  code = false,
  keyboard = false,
  underline = false,
  delete: isDelete = false,
  strong = false,
  italic = false,
  children,
  className = '',
  onClick,
  editable = false,
  copyable = false,
}: TypographyProps) {
  const Component = variant === 'title' ? `h${level}` : variant === 'paragraph' ? 'p' : 'span';
  const [copied, setCopied] = useState(false);

  // Hàm copy text vào clipboard
  const handleCopy = () => {
    if (typeof text === 'string' && text.length > 0) {
      navigator.clipboard.writeText(text)
        .then(() => {
          setCopied(true);
          setTimeout(() => setCopied(false), 2000); // 2 giây hiện dấu check rồi reset
        })
        .catch(() => {
          setCopied(false);
          // Có thể xử lý lỗi nếu cần
        });
    }
  };

  const classes = clsx(
    styles.typography,
    variant === 'title'
      ? styles[`title-${level}`]
      : variant === 'text'
        ? styles[`text-${level}`]
        : styles[variant],
    type && styles[type],
    {
      [styles.disabled]: disabled,
      [styles.mark]: mark,
      [styles.code]: code,
      [styles.keyboard]: keyboard,
      [styles.underline]: underline,
      [styles.delete]: isDelete,
      [styles.strong]: strong,
      [styles.italic]: italic,
    },
    className
  );

  const [isEditing, setIsEditing] = useState(false);
  const [text, setText] = useState(
    typeof children === 'string' ? children : '' // fallback
  );

  const handleBlur = () => setIsEditing(false);
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      setIsEditing(false);
    }
  };

  if (editable) {
    return isEditing ? (
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        onBlur={handleBlur}
        onKeyDown={handleKeyDown}
        autoFocus
        className="border-b outline-none bg-transparent text-inherit w-full h-full "
      />
    ) : (
      // @ts-ignore
      <Component
        className={clsx(classes, 'cursor-pointer flex items-center gap-2')}
        onClick={() => setIsEditing(true)}
      >
        {text}
        <Edit className='ml-2 h-4 w-4' />
        {copyable && (
          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              navigator.clipboard.writeText(text);
              setCopied(true);
              setTimeout(() => setCopied(false), 2000);
            }}
            aria-label="Copy text"
            className="ml-2 cursor-pointer"
          >
            {copied ? (
              <Check className="h-4 w-4 text-green-500" />
            ) : (
              <Copy className="h-4 w-4" />
            )}
          </button>
        )}
      </Component>

    );
  }

  return (
    // @ts-ignore
    <Component className={clsx(classes, 'flex items-center gap-2')} onClick={!disabled ? onClick : undefined}>
      {children}
      {copyable && (
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            handleCopy();
          }}
          aria-label="Copy text"
          className="ml-2 cursor-pointer"
        >
          {copied ? (
            <Check className="h-4 w-4 text-green-500" />
          ) : (
            <Copy className="h-4 w-4" />
          )}
        </button>
      )}
    </Component>
  );
}



export function Title(props: Omit<TypographyProps, 'variant'>) {
  return <Typography {...props} variant="title" />;
}

export function Text(props: Omit<TypographyProps, 'variant'>) {
  return <Typography {...props} variant="text" />;
}

export function Link(props: Omit<TypographyProps, 'variant'>) {
  return <Typography {...props} variant="link" />;
}

export function Paragraph(props: Omit<TypographyProps, 'variant'>) {
  return <Typography {...props} variant="paragraph" />;
}

export function Code(props: Omit<TypographyProps, 'variant'>) {
  return <Typography {...props} variant="code" />;
}

export function Mark(props: Omit<TypographyProps, 'variant'>) {
  return <Typography {...props} variant="mark" />;
}

export function Keyboard(props: Omit<TypographyProps, 'variant'>) {
  return <Typography {...props} variant="keyboard" />;
}

export function Delete(props: Omit<TypographyProps, 'variant'>) {
  return <Typography {...props} variant="delete" />;
}

export function Underline(props: Omit<TypographyProps, 'variant'>) {
  return <Typography {...props} variant="underline" />;
}

export function Strong(props: Omit<TypographyProps, 'variant'>) {
  return <Typography {...props} variant="strong" />;
}

export function Italic(props: Omit<TypographyProps, 'variant'>) {
  return <Typography {...props} variant="italic" />;
}

export function Disabled(props: Omit<TypographyProps, 'variant'>) {
  return <Typography {...props} variant="disabled" />;
}
