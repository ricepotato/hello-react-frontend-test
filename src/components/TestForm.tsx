import { FormEvent } from "react";

type Props = {
  name: string;
  onSubmit?: (event: FormEvent<HTMLFormElement>) => void;
};

export const TestForm = ({ name, onSubmit }: Props) => {
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        onSubmit?.(event);
      }}
    >
      <h2>계정 정보</h2>
      <p>{name}</p>
      <div>
        <button>수정</button>
      </div>
    </form>
  );
};
