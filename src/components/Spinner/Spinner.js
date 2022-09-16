import { ThreeDots } from 'react-loader-spinner';
// import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

import s from './Spinner.module.scss';

const Spinner = () => (
  <ThreeDots
    height="100"
    width="100"
    radius="9"
    color="#F6AB0E"
    ariaLabel="three-dots-loading"
    wrapperClass={s.Loader}
    visible={true}
  />
);

export default Spinner;
