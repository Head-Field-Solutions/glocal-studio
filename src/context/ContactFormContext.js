import React, { createContext, useState } from 'react';

import { Modal, ContactForm } from "@/components/common";

const ContactFormContext =  createContext();

function ContactFormProvider({ children }) {
	const [toggleModal, setToggleModal] = useState(false);

  const toggleContactForm = (status) => {
    setToggleModal(status || !toggleModal);
  };

  return (
    <ContactFormContext.Provider value={{ toggleContactForm }}>
      {children}

			<Modal
				open={toggleModal}
				onClose={() => toggleContactForm()}
			>
				<ContactForm />
			</Modal>
    </ContactFormContext.Provider>
  );
}

export { ContactFormContext, ContactFormProvider };
