import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
const DonateModal = () => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      borderColor: "orange",
    },
  };
  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
  useEffect(() => {
    Modal.setAppElement("body");
  }, [modalIsOpen]);
  return (
    <div>
      <button className="btn" onClick={openModal}>
        <span>說明與表格</span>
      </button>

      <Modal
        isOpen={modalIsOpen}
        // onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Donate Modal"
        // ariaHideApp={false}
      >
        <div className="modal__box">
          <p>
            信用卡、郵局之定期自動轉帳捐款 可立即下載捐款表格 ( 下載表格 )
            或來電 (02)2533-3333 索取
          </p>
          <p>
            郵政劃撥 逕至郵局將款項劃撥至本會愛心帳戶 劃撥帳號：1918-1717
            戶名為：「老人基金會」
          </p>
          <p>
            劃線支票
            支票抬頭為：「財團法人台北市老人基金會」，並請註明禁止背書轉讓
          </p>
          <p>現金袋 請寄114台北碧湖郵局1號信箱 (老人基金會收)</p>
          <p>
            網路捐款 彰化銀行大直分行(CCBCTWP973)0099738 帳號：9738-01-453245-01
            戶名：財團法人台北市老人基金會
          </p>
          <p>PayPal捐款 連結 mo54088mo@gmail.com</p>
          <h4>
            捐款人在捐款後
            ，均會收到由本會開立的正式收據，可於年底報稅時作抵扣稅額之用。
          </h4>
        </div>

        <HighlightOffIcon className="modal__off" onClick={closeModal} />
      </Modal>
    </div>
  );
};

export default DonateModal;
