import zxcvbn from 'zxcvbn';
import s from './RegistrationForm.module.scss';

const PasswordStrenghtMeter = ({ password }) => {
  const testResult = zxcvbn(password);
  const num = (testResult.score * 100) / 4;
  const funcProgressColor = () => {
    switch (testResult.score) {
      case 0:
        return 'tomato';
      case 1:
        return 'tomato';
      case 2:
        return '#F6AB0E';
      case 3:
        return '#52b2fc';
      case 4:
        return '#52b2fc';
      default:
        return 'none';
    }
  };

  const createPasswordLabel = () => {
    switch (testResult.score) {
      case 0:
        return '';
      case 1:
        return 'Weak';
      case 2:
        return 'Fear';
      case 3:
        return 'Good';
      case 4:
        return 'Strong';
      default:
        return '';
    }
  };

  // #24CCA7

  const changeStyleProgress = () => ({
    width: '100%',
    height: '4px',
    // marginBottom: '20px',
    // marginTop: '-10px',
  });

  const changePasswordColor = () => ({
    width: `${num}%`,
    height: '4px',
    // background: '#24CCA7',
    background: funcProgressColor(),
    boxShadow: '0px 1px 8px rgba(36, 204, 167, 0.5)',
    borderRadius: '4px',
  });

  return (
    <>
      {/* <div className="progress" style={changeStyleProgress()}> */}
      <div className={s.progress} style={changeStyleProgress()}>
        <div className="progress-bar" style={changePasswordColor()}></div>
      </div>
      <p className={s.Text} style={{ color: funcProgressColor() }}>
        {createPasswordLabel()}
      </p>
    </>
  );
};

export default PasswordStrenghtMeter;
