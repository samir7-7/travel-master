import React from "react";

const OfficeMap: React.FC = () => {
  return (
    <div className="w-full h-[400px] rounded-2xl overflow-hidden shadow-lg">
      <iframe
        title="Office Location"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3875.8233409341227!2d100.8785!3d12.9236!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31029658c6e8b1a1%3A0x1a5e9c62f1f04e72!2s388%2F4%20Village%20No.%2012%2C%20Pattaya%20City%2C%20Bang%20Lamung%20District%2C%20Chon%20Buri%2020150!5e0!3m2!1sen!2sth!4v1738234567890"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default OfficeMap;
