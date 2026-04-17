export function SectionContainer({ children, className = "", ...props }) {
  return (
    <section className={`mx-auto w-full max-w-7xl px-4 md:px-8 ${className}`} {...props}>
      {children}
    </section>
  );
}
