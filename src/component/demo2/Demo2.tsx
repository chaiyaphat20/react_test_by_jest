import React from "react";

type Props = {};

//toBeDisabled
//check ว่า โดน disable ไว้หรือไม้

const Demo2 = (props: Props) => {
  return (
    <>
      <button data-testid="button" type="submit" disabled>
        submit
      </button>
      <fieldset disabled>
        <input type="text" data-testid="input" />
      </fieldset>
			<button data-testid="button2" type="submit">
        submit
      </button>
    </>
  );
};

export default Demo2;
