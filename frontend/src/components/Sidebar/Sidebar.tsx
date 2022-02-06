import React, { useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { useTypedSelector } from 'hooks/useTypedSelector';
import s from './Sidebar.module.scss';
import s2 from './LinksGroup/LinksGroup.module.scss';
import LinksGroup from './LinksGroup/LinksGroup';
import { changeActiveSidebarItem } from '../../store/actions/navigationActions';
import SofiaLogo from '../Icons/SidebarIcons/SofiaLogo.js';
import 'eva-icons/style/eva-icons.css';

const Sidebar = () => {
  const sidebarOpened = useTypedSelector(
    (store) => store.navigation.sidebarOpened,
  );
  const activeItem = useTypedSelector((store) => store.navigation.activeItem);
  const currentUser = useTypedSelector((store) => store.auth.currentUser);

  const dispatch = useDispatch();

  const navEl: any = useRef(null);

  useEffect(() => {
    if (navEl) {
      navEl.current.addEventListener(
        'transitionend',
        () => {
          if (sidebarOpened) {
            navEl.current.classList.add(s.sidebarOpen);
          }
        },
        false,
      );
      if (sidebarOpened) {
        navEl.current.style.height = `${navEl.current.scrollHeight}px`;
      } else {
        navEl.current.classList.remove(s.sidebarOpen);
        navEl.current.style.height = '';
      }
    }
  }, [sidebarOpened]);

  return (
    <nav ref={navEl} className={s.root}>
      <header className={s.logo}>
        <SofiaLogo />
        <span className={s.title}>SpinSeed</span>
      </header>
      <ul className={s.nav}>
        <LinksGroup
          onActiveSidebarItemChange={(activeItem) =>
            dispatch(changeActiveSidebarItem(activeItem))
          }
          activeItem={activeItem}
          header='Dashboard'
          isHeader
          iconName={<i className='eva eva-home-outline' />}
          link='/app/dashboard'
          index='dashboard'
          badge='9'
        />

        {currentUser && currentUser.role === 'admin' && (
          <LinksGroup
            onActiveSidebarItemChange={(activeItem) =>
              dispatch(changeActiveSidebarItem(activeItem))
            }
            activeItem={activeItem}
            header='Users'
            link='/admin/users'
            isHeader
            iconName={<i className='eva eva-list-outline' />}
          />
        )}

        {currentUser && currentUser.role === 'admin' && (
          <LinksGroup
            onActiveSidebarItemChange={(activeItem) =>
              dispatch(changeActiveSidebarItem(activeItem))
            }
            activeItem={activeItem}
            header='Products'
            link='/admin/products'
            isHeader
            iconName={<i className='eva eva-list-outline' />}
          />
        )}

        {currentUser && currentUser.role === 'admin' && (
          <LinksGroup
            onActiveSidebarItemChange={(activeItem) =>
              dispatch(changeActiveSidebarItem(activeItem))
            }
            activeItem={activeItem}
            header='Categories'
            link='/admin/categories'
            isHeader
            iconName={<i className='eva eva-list-outline' />}
          />
        )}

        {currentUser && currentUser.role === 'admin' && (
          <LinksGroup
            onActiveSidebarItemChange={(activeItem) =>
              dispatch(changeActiveSidebarItem(activeItem))
            }
            activeItem={activeItem}
            header='Orders'
            link='/admin/orders'
            isHeader
            iconName={<i className='eva eva-list-outline' />}
          />
        )}

        {currentUser && currentUser.role === 'admin' && (
          <LinksGroup
            onActiveSidebarItemChange={(activeItem) =>
              dispatch(changeActiveSidebarItem(activeItem))
            }
            activeItem={activeItem}
            header='Reviews'
            link='/admin/reviews'
            isHeader
            iconName={<i className='eva eva-list-outline' />}
          />
        )}

        {currentUser && currentUser.role === 'admin' && (
          <LinksGroup
            onActiveSidebarItemChange={(activeItem) =>
              dispatch(changeActiveSidebarItem(activeItem))
            }
            activeItem={activeItem}
            header='Promocodes'
            link='/admin/promocodes'
            isHeader
            iconName={<i className='eva eva-list-outline' />}
          />
        )}

        <LinksGroup
          onActiveSidebarItemChange={(activeItem) =>
            dispatch(changeActiveSidebarItem(activeItem))
          }
          activeItem={activeItem}
          header='My profile'
          link='/app/user'
          isHeader
          iconName={<i className='eva eva-person-outline' />}
        />

        <LinksGroup
          onActiveSidebarItemChange={(activeItem) =>
            dispatch(changeActiveSidebarItem(activeItem))
          }
          activeItem={activeItem}
          header='Change Password'
          link='/app/password'
          isHeader
          iconName={<i className='eva eva-lock-outline' />}
        />
        <LinksGroup
          onActiveSidebarItemChange={(activeItem) =>
            dispatch(changeActiveSidebarItem(activeItem))
          }
          activeItem={activeItem}
          header='Documentation'
          link='/documentation'
          isHeader
          iconName={<i className='eva eva-book-open-outline' />}
          index='documentation'
          label='new'
          target='_blank'
          labelColor='success'
        />
        <li className={s2.headerLink}>
          <a
            target={'_blank'}
            href={
              process.env.NODE_ENV === 'production'
                ? window.location.origin + '/api-docs'
                : 'http://localhost:8080/api-docs'
            }
          >
            <span className='mr-2'>
              <i className='eva eva-browser-outline' />
            </span>
            API docs
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Sidebar;
