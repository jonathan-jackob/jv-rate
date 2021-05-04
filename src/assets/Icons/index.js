import React from "react"

export const starRegImg = (
  <svg
    stroke="currentColor"
    fill="currentColor"
    height="1em"
    width="1em"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 576 512"
  >
    <path d="M528.1 171.5L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6zM388.6 312.3l23.7 138.4L288 385.4l-124.3 65.3 23.7-138.4-100.6-98 139-20.2 62.2-126 62.2 126 139 20.2-100.6 98z"></path>
  </svg>
)

  export const starHalfImg = (
  <svg
    stroke="currentColor" fill="currentColor"  viewBox="0 0 576 512" height="1em" width="1em"
    xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M508.55 171.51L362.18 150.2 296.77 17.81C290.89 5.98 279.42 0 267.95 0c-11.4 0-22.79 5.9-28.69 17.81l-65.43 132.38-146.38 21.29c-26.25 3.8-36.77 36.09-17.74 54.59l105.89 103-25.06 145.48C86.98 495.33 103.57 512 122.15 512c4.93 0 10-1.17 14.87-3.75l130.95-68.68 130.94 68.7c4.86 2.55 9.92 3.71 14.83 3.71 18.6 0 35.22-16.61 31.66-37.4l-25.03-145.49 105.91-102.98c19.04-18.5 8.52-50.8-17.73-54.6zm-121.74 123.2l-18.12 17.62 4.28 24.88 19.52 113.45-102.13-53.59-22.38-11.74.03-317.19 51.03 103.29 11.18 22.63 25.01 3.64 114.23 16.63-82.65 80.38z"></path>
    </svg>)

export const starImg = (<svg
    stroke="currentColor" fill="currentColor"  viewBox="0 0 576 512" height="1em" width="1em"
    xmlns="http://www.w3.org/2000/svg"
    >
      <path  d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path>
    </svg>)


export const generateRateIcons=({value, emptyIcon, halfIcon,fullIcon})=>{
  const items = [];

  for (let index = 1; index < 6; index++) {
    let localIcon = emptyIcon;
    const ind2 = index * 2;

    if (ind2 - 1 === value) {
      localIcon = halfIcon;

    } else if (ind2 <= value) {

      localIcon = fullIcon;
    }

    items.push(localIcon);
  }

  return items;
}