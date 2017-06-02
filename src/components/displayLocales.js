import React from "react";

const DisplayLocales = ({ locales }) => {
  return (
    <div className="list-of-locales">
      <ul>
        {
          locales.map((item, index) => {
            return (
              <li key={index}>
                <span> {index} </span>
                {item.quotationStart}
              </li>
            );
          })
        }
      </ul>
    </div>
  );
};

export default DisplayLocales;
