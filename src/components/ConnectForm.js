import React from "react";
import { useForm } from "react-hook-form";

const ConnectForm = () => {
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = (data) => console.log(data);

  console.log(watch("name")); // watch input value by passing the name of it
  return (
    <div className="connectForm">
      {/* "handleSubmit" will validate your inputs before invoking "onSubmit" */}
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* register your input into the hook by invoking the "register" function */}
        <label>姓名：</label>
        <input
          className="connectForm__input"
          name="name"
          ref={register({ required: true })}
        />
        {errors.name && <span>必填項目！！</span>}
        {/* include validation with required or other standard HTML validation rules */}
        <label>電話：</label>
        <input
          className="connectForm__input"
          name="phone"
          ref={register({ required: true })}
        />
        {/* errors will return when field validation fails  */}
        {errors.phone && <span>必填項目！！</span>}
        <label>電子郵件：</label>
        <input
          className="connectForm__input"
          name="e_mail"
          ref={register({ required: true })}
        />
        {/* errors will return when field validation fails  */}
        {errors.e_mail && <span>必填項目！！</span>}
        <input className="btn" type="submit" />
      </form>
    </div>
  );
};

export default ConnectForm;
