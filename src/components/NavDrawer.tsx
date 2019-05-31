import React from 'react';

interface NavigationListItem {
  title: string;
  link: string;
  atoms: number;
  bonds: number;
}

interface Props {
  isNavDrawerOpen: boolean;
  activatedMolecule: number;
  navigationList: NavigationListItem[];
  onDrawerListItemClicked(e: React.MouseEvent<HTMLAnchorElement>): void;
}

export default function NavDrawer(props: Props): JSX.Element {
  const {
    isNavDrawerOpen,
    navigationList,
    activatedMolecule,
    onDrawerListItemClicked
  } = props;

  return (<aside className={"mdc-drawer mdc-drawer--modal" + (isNavDrawerOpen ? " mdc-drawer--open" : "")}>
    <div className="mdc-drawer__header">
      <h3 className="mdc-drawer__title">Molphene</h3>
    </div>
    <hr className="mdc-list-divider" />
    <div className="mdc-drawer__content">
      <nav className="mdc-list mdc-list--two-line">
        {navigationList.map((navListItem, idx) => {
          return (
            <a key={idx}
              data-key={idx}
              className={"mdc-list-item" + (activatedMolecule === idx ? " mdc-list-item--activated" : "")}
              href={"#" + navListItem.link}
              onClick={onDrawerListItemClicked}
            >
              <span className="mdc-list-item__text">
                <span className="mdc-list-item__primary-text">
                  {navListItem.title}
                </span>
                <span className="mdc-list-item__secondary-text">
                  atoms: {navListItem.atoms}, bonds: {navListItem.bonds}
                </span>
              </span>
            </a>
          )
        })}
      </nav>
    </div>
  </aside>);
}