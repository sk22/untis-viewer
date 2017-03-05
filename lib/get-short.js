module.exports = code => category => {
  if (!category) {
    throw new Error('No category was given');
  }
  const regexp = new RegExp(
    `case "(.+)": PopulateElementOption\\(Form, ${category}, 0\\)`
  );
  const result = regexp.exec(code);
  if (!result || result.length < 1) {
    throw new Error(`Code did not contain the short code for ${category}`);
  }
  return result[1];
};
