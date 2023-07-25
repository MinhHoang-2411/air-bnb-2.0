import React from "react";

type Props = {
  message: string;
  error: any;
};

const ErrorMessage = ({ message, error }: Props) => {
  return error ? (
    <span className="text-red-500 mt-[-16px]">*{message}</span>
  ) : (
    <></>
  );
};

export default ErrorMessage;
