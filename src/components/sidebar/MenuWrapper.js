export default ({ Menu, style, children, event = () => {}, type }) => {
  if (Menu.isAllowed)
    if (Menu.childs)
      return (
        <div className={style} onClick={event}>
          {children}
        </div>
      );
    else
      return (
        <a href={`#${Menu.id}`} className={style}>
          {children}
        </a>
      );
  else return <span className={style}> {children}</span>;
};
