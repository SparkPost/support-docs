export type ClientOnlyTypes = {
  children?: React.ReactNode;
}

const ClientOnly = ({ children }: ClientOnlyTypes): JSX.Element | null => {
  return (
    <div suppressHydrationWarning>
      {typeof window === 'undefined' ? null : children}
    </div>
  )
}

export default ClientOnly;