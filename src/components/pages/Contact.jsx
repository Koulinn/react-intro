import React, { useState, useEffect } from "react";
import InputText from "../atoms/InputText/InputText.component";
import InputWrapper from "../molecules/InputWrapper/InputWrapper.component";

const Contact = () => {
  const [name, setName] = useState("");
  const [surName, setSurName] = useState("");

  // Do some validation here and then pass the value

  const handleChange = (e) => {
    setName(e.target.value);
  };
  const handleSurnameChange = (e) => {
    setSurName(e.target.value);
  };

  useEffect(() => {
    const isRafaelLima = name + " " + surName === "Rafael Lima";
    console.log(name + " " + surName);

    if (isRafaelLima) {
      alert("Is Rafael Lima");
    }
  }, [name, surName]);

  return (
    <div>
      <form
        style={{
          margin: "32px",
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
        }}
      >
        <InputWrapper id="name" label="Name" isRequired>
          <InputText
            id="name"
            value={name}
            handleChange={handleChange}
            placeholder="Enter your name"
          />
        </InputWrapper>

        <InputWrapper
          id="surname"
          label="Surname"
          isRequired
          hasValidation
          validationResult="invalid"
          validationMsg="Cannot be blank"
        >
          <InputText
            id="surname"
            value={surName}
            handleChange={handleSurnameChange}
          />
        </InputWrapper>
      </form>
    </div>
  );
};

export default Contact;
