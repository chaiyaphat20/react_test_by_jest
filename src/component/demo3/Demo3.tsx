type Props = {};
//toBeEmptyDOMElement
//check ว่า element มีอะไร บรรจุอยู่หรือไม้

const Demo3 = (props: Props) => {
  return (
    <>
      <span data-testid="not-empty">
        <span data-testid="empty"></span>
      </span>
      <span data-testid="with-whitespace"> </span>
      <span data-testid="with-comment">{/*comment*/}</span>
    </>
  );
};

export default Demo3;
