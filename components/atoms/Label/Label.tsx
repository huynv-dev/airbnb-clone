type Props = {
    children: React.ReactNode
    htmlFor?: string
  }
  
  export const Label = ({ children, htmlFor }: Props) => (
    <label htmlFor={htmlFor} className="block text-sm font-medium text-gray-700">
      {children}
    </label>
  )
  