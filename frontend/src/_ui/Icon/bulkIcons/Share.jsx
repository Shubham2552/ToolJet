import React from 'react';

const Share = ({ fill = '#C1C8CD', width = '25', className = '', viewBox = '0 0 25 25' }) => (
  <svg
    width={width}
    height={width}
    viewBox={viewBox}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      opacity="0.4"
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M18.0397 5.73018C18.225 6.10067 18.0748 6.55117 17.7043 6.73641L7.17714 12L17.7043 17.2636C18.0748 17.4488 18.225 17.8993 18.0397 18.2698C17.8545 18.6403 17.404 18.7905 17.0335 18.6052L6.29586 13.2364C5.92537 13.0512 5.77521 12.6007 5.96045 12.2302C6.00565 12.1398 6.06664 12.0625 6.13842 12C6.06664 11.9375 6.00565 11.8602 5.96045 11.7698C5.77521 11.3993 5.92537 10.9488 6.29586 10.7636L17.0335 5.39477C17.404 5.20953 17.8545 5.3597 18.0397 5.73018Z"
      fill="#121212"
    />
    <path
      d="M22 5.5C22 7.433 20.433 9 18.5 9C17.1298 9 15.9434 8.2126 15.3688 7.06559C15.1328 6.59451 15 6.06276 15 5.5C15 3.567 16.567 2 18.5 2C20.433 2 22 3.567 22 5.5Z"
      fill="#121212"
    />
    <path
      d="M22 18.5C22 20.433 20.433 22 18.5 22C16.567 22 15 20.433 15 18.5C15 17.9372 15.1328 17.4055 15.3688 16.9344C15.9434 15.7874 17.1298 15 18.5 15C20.433 15 22 16.567 22 18.5Z"
      fill="#121212"
    />
    <path
      d="M9 12C9 12.5628 8.86718 13.0945 8.63118 13.5656C8.05656 14.7126 6.87023 15.5 5.5 15.5C3.567 15.5 2 13.933 2 12C2 10.067 3.567 8.5 5.5 8.5C6.87023 8.5 8.05656 9.2874 8.63118 10.4344C8.86718 10.9055 9 11.4372 9 12Z"
      fill="#121212"
    />
  </svg>
);

export default Share;