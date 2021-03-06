import * as React from "react"

function StarIcon(props) {
  return (
    <svg
      width={16}
      height={15}
      viewBox="0 0 24 24"
      fill="#f8e71c"
      stroke="#f8e71c"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
    </svg>
  )
}

export default StarIcon;