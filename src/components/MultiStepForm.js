import React from "react";
import { useForm, useStep } from "react-hooks-helper";
import { Names } from "./stepForm/Names";
import { Review } from "./stepForm/Review";
import { Submit } from "./stepForm/Submit";

const defaultData = {
  firstName: "",
  lastName: "",
  nickName: "",
};

const steps = [
  { id: "names" },
  { id: "review" },
  { id: "submit" },
];

export const MultiStepForm = () => {
  const [formData, setForm] = useForm(defaultData);
  const { step, navigation } = useStep({
    steps,
    initialStep: 0,
  });

  const props = { formData, setForm, navigation };

  switch (step.id) {
    case "names":
      return <Names {...props} />;
    case "review":
      return <Review {...props} />;
    case "submit":
      return <Submit {...props} />;
  }

  return (
    <div>
      <h1>Multi step form</h1>
    </div>
  );
};
