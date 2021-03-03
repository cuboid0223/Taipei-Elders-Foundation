import React from "react";
import { useForm } from "react-hook-form";
import DonateModal from "./DonateModal";
const Donate = () => {
  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div className="donate">
      <h1>感謝您的捐款！</h1>
      <div className="connectForm">
        {/* "handleSubmit" will validate your inputs before invoking "onSubmit" */}
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* register your input into the hook by invoking the "register" function */}
          <label>姓名或單位名稱 Name or the company： </label>
          <input
            className="connectForm__input"
            name="name"
            ref={register({ required: true })}
          />
          {errors.name && <span>必填項目！！</span>}
          {/* include validation with required or other standard HTML validation rules */}
          <label>聯絡電話 Phone： </label>
          <input
            className="connectForm__input"
            name="phone"
            ref={register({ required: true })}
          />
          {/* errors will return when field validation fails  */}
          {errors.phone && <span>必填項目！！</span>}
          <label>聯絡地址 Address： </label>
          <input
            className="connectForm__input"
            name="e_mail"
            ref={register({ required: true })}
          />
          {/* errors will return when field validation fails  */}
          {errors.e_mail && <span>必填項目！！</span>}
          <label>捐款金額 Donation amount： </label>
          <input
            className="connectForm__input"
            name="donateMoney"
            ref={register({ required: true })}
          />
          {errors.donateMoney && <span>必填項目！！</span>}

          {/* 受款銀行資料 */}
          <h3>受款銀行資料 Bank information</h3>
          <ul>
            <li>受款戶名：Taipei Elders Foundation, Inc</li>
            <li>受款銀行：CHANG HWA COMMERCIAL BANK TA CHIH BRANCH</li>
            <li>受款地址：No. 589, Beian road, Zhongshan dist, Taipei</li>
            <li>受款帳號：9738-01-453245-01</li>
          </ul>
          <div className="connectForm__btnBox">
            <input className="btn" type="submit" />
            <DonateModal />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Donate;
