import { useState } from 'react';
import { useSelector } from 'react-redux';
import Title from '../../components/Title';
import withLocalization from '../../components/hoc/withLocalization';
import PageWrapper from '../../components/PageWrapper';
import { AnimatePresence } from 'framer-motion';
import FormContactAdd from '../../components/FormsContact/FormContactAdd';
import Modal from '../../components/Modal';
import ContactList from '../../components/ContactList';
import Filter from '../../components/Filter';
import ButtonIconWithContent from '../../components/ButtonIconWithContent';
import ButtonIcon from '../../components/ButtonIcon';
import { ReactComponent as AddIcon } from '../../assets/images/icons/add.svg';
import { ReactComponent as CloseIcon } from '../../assets/images/icons/close.svg';
import { contactsSelectors } from '../../redux_thunk/contacts';

const PhonebookPage = ({ localization }) => {
  const { primaryTitle, secondaryTitle, contentBtnAdd } =
    localization.localizedContent;
  const [showModal, setShowModal] = useState(false);

  const allContacts = useSelector(contactsSelectors.getContacts);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <PageWrapper>
      <Title primaryTitle={primaryTitle} titleClass="primaryTitle" />
      <ButtonIconWithContent
        onClick={toggleModal}
        btnClass="btnAddContact"
        aria-label="Add contact"
      >
        <AddIcon width="30" height="30" fill="currentColor" />
        {contentBtnAdd}
      </ButtonIconWithContent>
      <AnimatePresence>
        {showModal && (
          <Modal onClose={toggleModal}>
            <FormContactAdd saveContact={toggleModal} />
            <ButtonIcon
              onClick={toggleModal}
              btnClass="btnCloseModal"
              aria-label="Close modal add contacts"
            >
              <CloseIcon width="32" height="32" fill="currentColor" />
            </ButtonIcon>
          </Modal>
        )}
      </AnimatePresence>
      {allContacts.length !== 0 && (
        <Title secondaryTitle={secondaryTitle} titleClass="secondaryTitle" />
      )}

      <Filter />
      <ContactList />
    </PageWrapper>
  );
};

export default withLocalization(PhonebookPage);
