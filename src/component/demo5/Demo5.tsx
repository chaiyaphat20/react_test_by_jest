const Demo5 = () => {
  return (
    <>
      <input type="text" value="text" data-testid="input-text" />
      <input type="number" value="5" data-testid="input-number" />
      <input type="text" data-testid="input-empty" />
      <select multiple data-testid="select-number">
        <option value="first">First Value</option>
        <option value="second" selected>
          Second Value
        </option>
        <option value="third" selected>
          Third Value
        </option>
      </select>
    </>
  );
};

export default Demo5;
