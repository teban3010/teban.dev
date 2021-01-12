import React, { Children } from 'react';

import Link from 'next/link';
import { withRouter } from 'next/router';

const ActiveLink: React.FC<any> = ({
  router,
  children,
  className,
  activeClassName,
  exact,
  ...props
}) => {
  const child = Children.only(children);

  let childClassName = `${child.props.className || ''} ${
    className || ''
  }`.trim();

  if (
    (activeClassName &&
      !exact &&
      (router.pathname.includes(props.href) ||
        router.pathname.includes(props.asPath))) ||
    (exact &&
      (router.pathname === props.href || router.pathname === props.asPath))
  ) {
    childClassName = `${childClassName} ${activeClassName}`.trim();
  }

  return (
    <Link {...props}>
      {React.cloneElement(child, { className: childClassName })}
    </Link>
  );
};

export default withRouter(ActiveLink);
