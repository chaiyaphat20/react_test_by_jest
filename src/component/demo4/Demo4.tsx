import React from "react";

type Props = {};

//toContainElement
//check ว่า element ที่มาเช็ค บรรจุ element อยู่หรือไม้

const Demo4 = (props: Props) => {
  return (
    <>
      <span data-testid="ancestor">
        <span data-testid="descendant"></span>
      </span>
			<div data-testid="does-not-exist">

			</div>
    </>
  );
};

export default Demo4;
