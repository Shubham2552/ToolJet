import React from 'react';

const Compass = ({ fill = '#C1C8CD', width = '25', className = '', viewBox = '0 0 25 25' }) => (
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
      d="M20.9702 20.8297L20.8899 21.4778C20.8574 21.7403 20.5837 21.8996 20.3394 21.798L19.7113 21.537C18.885 21.1934 18.1954 20.5984 17.7461 19.8411L12 10.1557L6.25391 19.8411C5.80461 20.5984 5.11503 21.1934 4.28866 21.537L3.66058 21.798C3.41634 21.8996 3.14256 21.7403 3.11007 21.4778L3.02982 20.8297C2.92234 19.9615 3.10711 19.0828 3.55641 18.3255L9.32393 8.604C9.86072 9.47866 10.8374 10.0681 11.9568 10.0829L12 10.0832L12.0432 10.0829C13.1626 10.0681 14.1393 9.4787 14.6761 8.60406L20.4436 18.3255C20.8929 19.0828 21.0777 19.9615 20.9702 20.8297Z"
      fill={fill}
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M12.75 2.00001C12.75 1.58579 12.4142 1.25 12 1.25C11.5858 1.25 11.25 1.58578 11.25 1.99999L11.25 4.10921C9.89206 4.43591 8.88525 5.62951 8.88525 7.05194C8.88525 7.61915 9.04535 8.14997 9.32396 8.60395C9.86074 9.47861 10.8375 10.068 11.9568 10.0828L12.0001 10.0831L12.0432 10.0828C13.1626 10.068 14.1393 9.47865 14.6761 8.60401C14.9548 8.15002 15.1149 7.61917 15.1149 7.05194C15.1149 5.62947 14.108 4.43585 12.75 4.10919L12.75 2.00001Z"
      fill={fill}
    />
    <path
      fill-rule="evenodd"
      clip-rule="evenodd"
      d="M2.25 15C2.25 14.5858 2.58579 14.25 3 14.25H21C21.4142 14.25 21.75 14.5858 21.75 15C21.75 15.4142 21.4142 15.75 21 15.75H3C2.58579 15.75 2.25 15.4142 2.25 15Z"
      fill={fill}
    />
  </svg>
);

export default Compass;