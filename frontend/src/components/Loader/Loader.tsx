import React from 'react';
// @ts-ignore
import cx from 'classnames';
import s from './Loader.module.scss';

const Loader = ({
  size = 21,
  className,
}: {
  size?: number;
  className?: string;
}) => {
  return (
    <div className={cx(s.root, className)}>
      <i className='la la-spinner la-spin' style={{ fontSize: size }} />
    </div>
  );
};

export default Loader;
