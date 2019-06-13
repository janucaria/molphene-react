import React from "react";

interface RepresentationListItem {
  title: string;
}

enum MoleculeRepresentation {
  Spacefill,
  BallAndStick,
  SpacefillInstanced,
  BallAndStickInstanced
}

interface Props {
  onAppToolbarDrawerBtnClicked(e: React.MouseEvent<HTMLButtonElement>): void;
  onAppBarMoreMenuClicked(e: React.MouseEvent<HTMLButtonElement>): void;
  onAppBarMenuListItemClicked(e: React.MouseEvent<HTMLLIElement>): void;
  isMoreMenuOpened: boolean;
  representationList: RepresentationListItem[];
  activedRepresentation: MoleculeRepresentation;
}

export default function TopAppBar(props: Props): JSX.Element {
  const {
    onAppToolbarDrawerBtnClicked,
    onAppBarMoreMenuClicked,
    onAppBarMenuListItemClicked,
    isMoreMenuOpened,
    representationList,
    activedRepresentation,
  } = props;
  return (
    <header className="mdc-top-app-bar mdc-top-app-bar--dense">
      <div className="mdc-top-app-bar__row">
        <section className="mdc-top-app-bar__section mdc-top-app-bar__section--align-start">
          <button
            onClick={onAppToolbarDrawerBtnClicked}
            className="material-icons mdc-top-app-bar__navigation-icon">
            menu
              </button>
          <span className="mdc-top-app-bar__title">Molphene</span>
        </section>
        <section className="mdc-top-app-bar__section mdc-top-app-bar__section--align-end">
          <div id="demo-menu" className="mdc-menu-surface--anchor">
            <button
              id="menu-button"
              onClick={onAppBarMoreMenuClicked}
              className="material-icons mdc-top-app-bar__action-item"
              aria-label="More menu">
              more_vert
                </button>
            <div
              className={"mdc-menu mdc-menu-surface" + (isMoreMenuOpened ? " mdc-menu-surface--open" : "")}
            >
              <ul className="mdc-list" role="menu" aria-hidden="true" aria-orientation="vertical">
                {representationList.map((repret, idx) => {
                  return (
                    <li
                      key={idx}
                      data-representation={idx}
                      className={"mdc-list-item" + (activedRepresentation === idx ? " mdc-list-item--activated" : "")}
                      role="menuitem"
                      onClick={onAppBarMenuListItemClicked}
                    >
                      <span className="mdc-list-item__text">{repret.title}</span>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </section>
      </div>
    </header>
  );
}
