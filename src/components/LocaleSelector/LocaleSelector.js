import React from 'react';
import { motion } from 'framer-motion';
import withLocalization from '../hoc/withLocalization';
import ButtonIconWithContent from '../ButtonIconWithContent';
import s from './LocaleSelector.module.scss';

const LocaleSelector = ({ localization }) => {
  const { currentLocale, locales, changeLocale } = localization;

  return (
    <motion.section
      className={s.selector}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ ease: 'easeOut', duration: 0.5 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      {locales.map(locale => (
        <ButtonIconWithContent
          key={locale}
          onClick={() => changeLocale(locale)}
          btnClass={locale === currentLocale ? 'activeLocale' : 'buttonLocale'}
          aria-label="Toggle locale"
        >
          {locale}
        </ButtonIconWithContent>
      ))}
    </motion.section>
  );
};

export default withLocalization(LocaleSelector);
