import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import s from './AuthNav.module.scss';

const AuthNav = ({ content, path }) => (
  <motion.div
    className={s.AuthNav}
    initial={{ scale: 0.5 }}
    transition={{ ease: 'easeOut', duration: 0.3 }}
    whileInView={{ scale: 1 }}
    viewport={{ once: false }}
  >
    <Link to={path} className={s.link}>
      {content}
    </Link>
  </motion.div>
);

export default AuthNav;
