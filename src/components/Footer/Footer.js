import s from './Footer.module.scss';

const Footer = () => {
  return (
    <footer>
      <div className={s.copyrite}>
        <div className={s.copyriteText}>&copy; Phonebook 2022</div>
      </div>
    </footer>
  );
};

export default Footer;
