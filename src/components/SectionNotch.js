const LEFT_PATH =
  "M 2.686 3 H -4 V 48 H 56 V 47 H 53.314 A 8 8 0 0 1 47.657 44.657 L 8.343 5.343 A 8 8 0 0 0 2.686 3 Z";
const RIGHT_PATH =
  "M 53.314 3 H 60 V 48 H 0 V 47 H 2.686 A 8 8 0 0 0 8.343 44.657 L 47.657 5.343 A 8 8 0 0 1 53.314 3 Z";

export default function SectionNotch({ variant = "light-over-dark" }) {
  const isBottom = variant === "dark-over-light";
  const flip = isBottom ? { transform: "scaleY(-1)" } : {};

  return (
    <div
      className={`notch-strip${isBottom ? " notch-strip--bottom" : ""}`}
      aria-hidden="true"
    >
      <div className="notch-bar notch-bar--left" />
      <div className="notch-container">
        <svg
          className="notch-svg notch-svg--left"
          viewBox="0 0 56 48"
          style={flip}
        >
          <path d={LEFT_PATH} />
        </svg>
        <svg
          className="notch-svg notch-svg--right"
          viewBox="0 0 56 48"
          style={flip}
        >
          <path d={RIGHT_PATH} />
        </svg>
      </div>
      <div className="notch-bar notch-bar--right" />
    </div>
  );
}
