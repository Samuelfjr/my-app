// dataUtils.js

// Função para gerar dados fictícios
export const generateFakeData = (numRows, numColumns) => {
  const data = [];
  for (let i = 0; i < numRows; i++) {
    const row = {};
    for (let j = 0; j < numColumns; j++) {
      row[`Column ${j + 1}`] = `Row ${i + 1}, Column ${j + 1}`;
    }
    data.push(row);
  }
  return data;
};
