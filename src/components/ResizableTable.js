import React, { useState, useRef } from "react";
import "./ResizableTable.css"; // Importa o arquivo de estilos

const ResizableTable = ({ columns }) => {
  const [columnWidths, setColumnWidths] = useState(columns.map(() => 100)); // Inicializa as larguras das colunas com um valor padrão
  const resizingColumnIndex = useRef(null);

  const handleMouseDown = (e, index) => {
    resizingColumnIndex.current = index;
    const initialX = e.clientX;
    const initialWidth = columnWidths[index];

    const handleMouseMove = (e) => {
      const width = initialWidth + (e.clientX - initialX);
      const newWidths = [...columnWidths];
      newWidths[index] = width < 50 ? 50 : width; // Define a largura mínima da coluna
      setColumnWidths(newWidths);
    };

    const handleMouseUp = () => {
      resizingColumnIndex.current = null;
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  };

  return (
    <table className="resizable-table">
      <thead>
        <tr>
          {columns.map((column, index) => (
            <th key={index} style={{ width: columnWidths[index] }}>
              <div
                className="resizer"
                onMouseDown={(e) => handleMouseDown(e, index)}
              />
              {column}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {[...Array(10)].map((_, rowIndex) => (
          <tr key={rowIndex}>
            {columns.map((_, columnIndex) => (
              <td
                key={columnIndex}
                style={{
                  width: columnWidths[columnIndex],
                  maxWidth: columnWidths[columnIndex],
                }}
              >
                <div className="truncate-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nullam ultricies, nisi eget lacinia maximus, neque ipsum
                  venenatis felis, a ultrices velit odio nec lorem.
                </div>
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ResizableTable;
