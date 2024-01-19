export default ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="setting-layout">
      <nav>我是 setting 下的 layout</nav>
      {children}
    </section>
  )
}
