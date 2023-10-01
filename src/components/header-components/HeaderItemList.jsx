import React from 'react';
import HeaderItemText from './HeaderItemText';

function HeaderItemList({ text, navigation, handleToogle, hide }) {
  return (
    <ul className="flex flex-col items-center gap-8 md:flex-row">
      {navigation.map((nav) => (
        <li key={nav.text}>
          <HeaderItemText text={text} handleToogle={handleToogle} hide={hide} />
        </li>
      ))}
    </ul>
  );
}

export default HeaderItemList;
