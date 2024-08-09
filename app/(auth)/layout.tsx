const layout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <div className='flex-1 justify-center items-center flex'>{children}</div>
  )
}
export default layout
