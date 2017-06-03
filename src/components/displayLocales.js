import React from "react";
import { Table } from "react-bootstrap";

const DisplayLocales = ({ locales, propertyInput }) => {
  return (
    <div className="locales-property-values-table">
      <Table>
        <thead>
          <tr>
            <th>Locale #</th>
            <th>Property Name</th>
            <th>Property Value</th>
          </tr>
        </thead>
        <tbody>
          {
            locales.map((item, index) => {
              // Ex. quotationStart or quotationEnd etc.
              const delimiterKey = Object.keys(item)[0];
              return (
                <tr key={index}>
                  <td>{index}</td>
                  <td>{propertyInput}</td>
                  <td>{item[delimiterKey]}</td>
                </tr>
              );
            })
          }
        </tbody>
      </Table>
    </div>
  );
};

export default DisplayLocales;
