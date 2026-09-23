const LegalPageLayout = ({ title, lastUpdated, sections }) => {
    return (
      <section
        className="px-6 md:px-16 pt-47.5 pb-20 md:pb-28"
        style={{ background: "var(--color-bg)" }}
      >
        <div className="max-w-3xl mx-auto">
          <h1
            className="text-3xl md:text-4xl font-bold mb-2"
            style={{ fontFamily: "var(--font-heading)", color: "var(--color-text)" }}
          >
            {title}
          </h1>
          <p className="text-sm mb-10" style={{ color: "var(--color-text-secondary)" }}>
            Last updated: {lastUpdated}
          </p>
  
          <div className="space-y-8">
            {sections.map((section) => (
              <div key={section.heading}>
                <h2
                  className="text-lg font-semibold mb-2"
                  style={{ color: "var(--color-text)" }}
                >
                  {section.heading}
                </h2>
                <p
                  className="text-[15px] leading-relaxed"
                  style={{ color: "var(--color-text-secondary)" }}
                >
                  {section.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  };
  
  export default LegalPageLayout;