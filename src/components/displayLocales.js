import React from "react";

const DisplayLocales = ({ locales, property }) => {
  return (
    <div className="list-of-locales">
      <ul>
        {
          locales.map((item, index) => {
            // Ex. quotationStart or quotationEnd etc.
            const delimiterKey = Object.keys(item)[0];
            return (
              <li key={index}>
                <span> {index} </span>
                {item[delimiterKey]}
              </li>
            );
          })
        }
      </ul>
    </div>
  );
};

export default DisplayLocales;
