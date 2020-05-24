import React, { useState } from "react";

export const Tabs = ({ children, currentTab, onTabChange, type = 'normal' }) => {
  const [selected, setSelecteTab] = useState(currentTab);
  const handleChange = (index) => {
    setSelecteTab(index);
    onTabChange && onTabChange(index);
  };
  return (
    <div>
      <ul className={`tabs--${type}__inline`}>
        {children.map((elem, index) => {
          let style = index == selected ? "selected" : "";
          return (
            <li
              className={style}
              key={index}
              onClick={() => handleChange(index)}
            >
              {elem.props.title}
            </li>
          );
        })}
      </ul>
      <div className={`tabs--${type}`}>{children[selected]}</div>
    </div>
  );
};

export const Panel = ({ children }) => {
  return <div>{children}</div>;
};
