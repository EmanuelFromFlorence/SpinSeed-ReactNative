import React, { useState } from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import { Collapse, Badge } from 'reactstrap';
import { Route } from 'react-router';
// @ts-ignore
import classnames from 'classnames';

import s from './LinksGroup.module.scss';

type LinksGroupProps = {
  header?: string;
  link?: string;
  childrenLinks?: Array<{}>;
  iconName?: JSX.Element;
  className?: string;
  badge?: string;
  label?: string;
  activeItem?: string;
  isHeader?: boolean;
  index?: string;
  deep?: number;
  onActiveSidebarItemChange?: (activeItem: string) => void;
  labelColor?: string;
  exact?: boolean;
  target?: string;
};

const LinksGroup = (props: LinksGroupProps) => {
  const {
    header,
    link = '',
    childrenLinks = null,
    iconName,
    className = '',
    badge,
    label = '',
    activeItem = '',
    isHeader = false,
    index,
    deep = 0,
    onActiveSidebarItemChange,
    labelColor,
    exact = true,
    target,
  } = props;

  const [headerLinkWasClicked, setHeaderLinkWasClicked] = useState(true);

  const togglePanelCollapse = (link: string) => {
    if (onActiveSidebarItemChange) {
      onActiveSidebarItemChange(link);
    }
    setHeaderLinkWasClicked(
      (prevState) =>
        !prevState || (!!activeItem && !activeItem.includes(index!)),
    );
  };

  let isOpen = false;

  if (index) {
    isOpen = !!activeItem && activeItem.includes(index) && headerLinkWasClicked;
  }

  if (!childrenLinks) {
    if (isHeader) {
      return (
        <li className={[s.headerLink, className].join(' ')}>
          <NavLink
            to={link}
            activeClassName={s.headerLinkActive}
            exact={exact}
            target={target}
          >
            <span className={s.icon}>
              {iconName}
              {/*<i className="fa fa-pie-chart"></i>*/}
            </span>
            {header}
            {label && (
              <sup
                className={`${s.headerLabel} text-${labelColor || 'warning'}`}
              >
                {label}
              </sup>
            )}
            {badge && (
              <Badge className={s.badge} color='secondary-red' pill>
                {badge}
              </Badge>
            )}
          </NavLink>
        </li>
      );
    }
    return (
      <li>
        <NavLink
          to={link}
          activeClassName={s.headerLinkActive}
          onClick={(e: any) => {
            if (link.includes('menu')) {
              e.preventDefault();
            }
          }}
          exact={exact}
        >
          {<i className='fa fa-circle text-primary mr-2' />} {header}
        </NavLink>
      </li>
    );
  }
  return (
    <Route
      path={link}
      children={(params) => {
        const { match } = params;
        return (
          <li className={classnames({ [s.headerLink]: isHeader }, className)}>
            <a
              className={classnames(
                s.accordionToggle,
                { [s.collapsed]: isOpen },
                'd-flex',
              )}
              // style={{ paddingLeft: `${deep == 0 ? 16 : 35 + 10 * (deep - 1)}px`}}
              onClick={() => togglePanelCollapse(link)}
              href='#top'
            >
              {isHeader ? <span className={s.icon}>{iconName}</span> : null}
              {header}{' '}
              {label && (
                <sup
                  className={`${s.headerLabel} text-${
                    labelColor || 'warning'
                  } ml-1`}
                >
                  {label}
                </sup>
              )}
              <b className={['fa fa-angle-right', s.caret].join(' ')} />
            </a>
            <Collapse className={s.panel} isOpen={isOpen}>
              <ul>
                {childrenLinks &&
                  childrenLinks.map(
                    (child: LinksGroupProps, ind): JSX.Element | null => (
                      <LinksGroup
                        onActiveSidebarItemChange={onActiveSidebarItemChange}
                        activeItem={activeItem}
                        header={child.header}
                        link={child.link}
                        index={child.index}
                        childrenLinks={child.childrenLinks}
                        deep={deep + 1}
                        key={ind}
                      />
                    ),
                  )}
              </ul>
            </Collapse>
          </li>
        );
      }}
    />
  );
};

export default LinksGroup;
