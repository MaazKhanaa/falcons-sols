import React from 'react';
import styles from "../../common/social/soicalIcon.module.css"

const WhatsAppChat = ({ phoneNumber, children }) => {
  const handleWhatsAppClick = () => {
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

    let url = `https://wa.me/${phoneNumber}`;
    
    if (isMobile) {
      url = `whatsapp://send?phone=${phoneNumber}`;
    }

    window.location.href = url;
  };

  return (
      <div className={`${styles.socialIcon}`}>
        <button onClick={handleWhatsAppClick}>
        {children}
      </button>
      </div>
  );
};

export default WhatsAppChat;