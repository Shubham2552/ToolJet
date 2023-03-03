import React from 'react';

function ExportSchema() {
  return (
    <button className="export-table-button border-0 btn mx-1">
      <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M2.5 5.78906V17.2891V18.0391C2.5 19.834 3.98027 21.2891 5.77519 21.2891C7.5425 21.2891 9 19.8564 9 18.0891C9 17.6472 9.35817 17.2891 9.8 17.2891H18.5V5.78906C18.5 4.13221 17.1569 2.78906 15.5 2.78906H5.5C3.84315 2.78906 2.5 4.13221 2.5 5.78906ZM9.75 9.61723C9.70334 9.65231 9.65858 9.69108 9.61612 9.73355L8.03033 11.3193C7.73744 11.6122 7.26256 11.6122 6.96967 11.3193C6.67678 11.0264 6.67678 10.5516 6.96967 10.2587L8.55546 8.67289C9.6294 7.59895 11.3706 7.59895 12.4445 8.67289L14.0303 10.2587C14.3232 10.5516 14.3232 11.0264 14.0303 11.3193C13.7374 11.6122 13.2626 11.6122 12.9697 11.3193L11.3839 9.73355C11.3414 9.69108 11.2967 9.65231 11.25 9.61723V13.789C11.25 14.2032 10.9142 14.539 10.5 14.539C10.0858 14.539 9.75 14.2032 9.75 13.789V9.61723ZM22.3766 19.7789C21.9361 21.5093 20.3675 22.7891 18.5 22.7891H6.5C8.36748 22.7891 9.93606 21.5093 10.3766 19.7789C10.5128 19.2437 10.9477 18.7891 11.5 18.7891H21.5C22.0523 18.7891 22.5128 19.2437 22.3766 19.7789Z"
          fill={'#889096'}
        />
      </svg>
      &nbsp;&nbsp;Export table
    </button>
  );
}

export default ExportSchema;
