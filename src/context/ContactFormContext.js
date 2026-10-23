import React, { createContext, useState } from 'react';

import { Modal, ContactForm } from "@/components/common";

const ContactFormContext =  createContext();

function ContactFormProvider({ children }) {
	const [toggleModal, setToggleModal] = useState(false);

  const toggleContactForm = (status) => {
    if (typeof status === 'boolean') {
      setToggleModal(status);
    } else {
      setToggleModal((prev) => !prev);
    }
  };

  return (
    <ContactFormContext.Provider value={{ toggleContactForm }}>
      {children}

			<Modal
				open={toggleModal}
				onClose={() => toggleContactForm(false)}
			>
				<ContactForm isFormInModal={true} />
			</Modal>
    </ContactFormContext.Provider>
  );
}

export { ContactFormContext, ContactFormProvider };
