module.exports = code => category => {
  if (!category) {
    throw new Error('No category was given');
  }

  const regexp = new RegExp(`var ${category} = (\\[.*\\])`);
  const result = regexp.exec(code);
  if (result.length < 1) {
    throw new Error(`Code did not contain the list '${category}'`);
  }
  return JSON.parse(result[1]);
};
