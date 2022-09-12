export const Delete = ({ svg, fill }) => {
  return (
    <svg className={svg} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48">
      <polygon
        className={fill}
        // fill="#f5bc00"
        points="29,5 29,2 19,2 19,5 9,5 9,11 39,11 39,5"
      />
      <polygon fill="#3dd9eb" points="8.291,11 11.3,42 36.7,42 39.709,11" />
      <rect width="36" height="6" x="6" y="8" fill="#3dd9eb" />
      <rect width="30" height="3" x="9" y="8" fill="#00b3d7" />
    </svg>
  );
};
