const Demo6 = () => {
  const result = ["a1", "a2", "a3", "a4"];
  return (
    <>
      <ul>
        {result.map((item, index) => (
          <li data-testid="li" key={index}>{item}</li>
        ))}
      </ul>
    </>
  );
};

export default Demo6;
