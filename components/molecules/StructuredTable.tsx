import React from "react";

interface TableData {
  [key: string]: {
    [key: string]: boolean;
  };
}

interface StructuredTableProps {
  columnHeaders: string[];
  rowHeaders: string[];
  data: TableData;
  showScrollIndicator?: boolean;
}

export const StructuredTable: React.FC<StructuredTableProps> = ({
  columnHeaders,
  rowHeaders,
  data,
  showScrollIndicator = false,
}) => {
  return (
    <div className="relative">
      <div className="w-full bg-indigo-800/40 rounded-xl p-3 mt-3 overflow-x-auto">
        <div className="min-w-[600px] md:min-w-0">
          <table
            className="w-full text-ivory border-separate border-spacing-1"
            aria-label="Structured data table"
          >
            <thead>
              <tr>
                <th
                  scope="col"
                  className="text-left font-bold text-base text-ivory w-32"
                ></th>
                {columnHeaders.map((header) => (
                  <th
                    key={header}
                    scope="col"
                    className="text-center font-bold text-base text-ivory w-24"
                  >
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rowHeaders.map((row) => (
                <tr key={row}>
                  <th
                    scope="row"
                    className="text-left font-bold text-base text-ivory w-32"
                  >
                    {row}
                  </th>
                  {columnHeaders.map((col) => (
                    <td
                      key={`${col}-${row}`}
                      className="text-center w-24"
                      aria-label={`${col} ${row}: ${
                        data[col][row] ? "Available" : "Not available"
                      }`}
                    >
                      <div
                        className={`w-full h-7 rounded-md flex items-center justify-center border border-indigo-300/20 ${
                          data[col][row]
                            ? "bg-lavender-200"
                            : "bg-indigo-600/30"
                        }`}
                      >
                        {data[col][row] && (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="w-4 h-4 text-indigo-700"
                            aria-hidden="true"
                          >
                            <path
                              fillRule="evenodd"
                              d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z"
                              clipRule="evenodd"
                            />
                          </svg>
                        )}
                      </div>
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {showScrollIndicator && (
        <div className="md:hidden">
          <div className="absolute right-0 top-0 h-full w-12 bg-gradient-to-l from-indigo-700 to-transparent pointer-events-none" />
          <p className="text-ivory text-xs text-center mt-2 italic">
            Scroll horizontally to view full schedule
          </p>
        </div>
      )}
    </div>
  );
};
