import React, { useState, useEffect } from 'react';
import * as Molphene from '../modules/molphene';
import ChemDoodle from '../modules/ChemDoodle';
import TopAppBar from "./TopAppBar";
import NavDrawer from "./NavDrawer";

interface NavigationListItem {
  title: string;
  link: string;
  atoms: number;
  bonds: number;
}

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

}

export default function App(props: Props): JSX.Element {
  const [isNavDrawerOpen, setIsNavDrawerOpen] = useState(false);
  const [isMoreMenuOpened, setIsMoreMenuOpened] = useState(false);
  const [activedRepresentation, setActivedRepresentation] = useState(MoleculeRepresentation.BallAndStickInstanced);
  const [activatedMolecule, setActivatedMolecule] = useState(0);

  useEffect(() => {
    Molphene.setup();
    Molphene.afterCanvasResized();
    Molphene.changeRepresentation(activedRepresentation);

    const activatedMol = Math.abs(activatedMolecule);
    const navIndex = navigationList.length > activatedMol ? activatedMol : 0;

    const molecule = navigationList[navIndex].link;
    openPDBMolecule(molecule);

    window.addEventListener('resize', molpheneResizeCanvas, false);

    return () => {
      window.removeEventListener('resize', molpheneResizeCanvas, false);
    }
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    Molphene.changeRepresentation(activedRepresentation);
    Molphene.renderFrame();
  });

  function molpheneResizeCanvas() {
    Molphene.afterCanvasResized();
    Molphene.renderFrame();
  }

  const representationList: RepresentationListItem[] = [
    {
      title: "Spacefill (slow batch rendering)"
    },
    {
      title: "Ball and Stick (slow batch rendering)"
    },
    {
      title: "Spacefill (fast instanced rendering)"
    },
    {
      title: "Ball and Stick (fast instances rendering)"
    }
  ];

  const navigationList: NavigationListItem[] = [
    {
      title: "Insulin",
      link: "4ins.pdb1",
      atoms: 484,
      bonds: 411
    },
    {
      title: "Benzene",
      link: "mol_benzene.mol",
      atoms: 12,
      bonds: 12
    },
    {
      title: "Caffeine",
      link: "mol_caffeine.mol",
      atoms: 24,
      bonds: 25
    },
    {
      title: "Cyclohexane",
      link: "mol_cyclohexane.mol",
      atoms: 18,
      bonds: 18
    },
    {
      title: "DDT",
      link: "mol_ddt.mol",
      atoms: 28,
      bonds: 29
    },
    {
      title: "Methane",
      link: "mol_methane.mol",
      atoms: 5,
      bonds: 4
    },
    {
      title: "Morphine",
      link: "mol_morphine.mol",
      atoms: 40,
      bonds: 44
    },
    {
      title: "Oxylate",
      link: "mol_oxylate.mol",
      atoms: 74,
      bonds: 79
    },
    {
      title: "Myoglobin",
      link: "1mbo.pdb1",
      atoms: 1601,
      bonds: 1245
    },
    {
      title: "Hemoglobin",
      link: "4hhb.pdb1",
      atoms: 4779,
      bonds: 4044
    },
    {
      title: "DNA",
      link: "1bna.pdb1",
      atoms: 566,
      bonds: 544
    },
    {
      title: "Transfer RNA",
      link: "4tra.pdb1",
      atoms: 1779,
      bonds: 1476
    },
    {
      title: "Lysozyme",
      link: "2lyz.pdb1",
      atoms: 1102,
      bonds: 1021
    },
    {
      title: "Porin",
      link: "2por.pdb1",
      atoms: 2580,
      bonds: 2258
    },
    {
      title: "Green Florousent Protein",
      link: "1gfl.pdb1",
      atoms: 3950,
      bonds: 3738
    },
    {
      title: "Antobody",
      link: "1igt.pdb1",
      atoms: 12956,
      bonds: 12794
    },
    {
      title: "Chaperones",
      link: "1aon.pdb1",
      atoms: 58870,
      bonds: 59087
    }
  ];

  const closeAll = (ev: React.MouseEvent<HTMLDivElement>) => {
    setIsNavDrawerOpen(false);
    setIsMoreMenuOpened(false);
  }

  const onAppToolbarDrawerBtnClicked = (ev: React.MouseEvent<HTMLButtonElement>) => {
    setIsNavDrawerOpen(!isNavDrawerOpen);
  }

  const onAppBarMoreMenuClicked = (ev: React.MouseEvent<HTMLButtonElement>) => {
    setIsMoreMenuOpened(!isMoreMenuOpened);
  }

  const onDrawerListItemClicked = (ev: React.MouseEvent<HTMLAnchorElement>) => {
    const target = ev.currentTarget;
    const activatedMol = parseInt(target.dataset.key!, 10);
    const currentActivatedMolecule = activatedMolecule;

    setIsNavDrawerOpen(false);
    setActivatedMolecule(activatedMol);

    if (activatedMol !== currentActivatedMolecule) {
      const molecule = navigationList[activatedMol].link;
      openPDBMolecule(molecule);
    }
  }

  const onAppBarMenuListItemClicked = (ev: React.MouseEvent<HTMLLIElement>) => {
    const listItem = ev.currentTarget;
    const repret = parseInt(listItem.dataset.representation!, 10);
    setIsMoreMenuOpened(false);
    setActivedRepresentation(repret);
  }

  function openPDBMolecule(pdbName: string) {
    let urlPdb = "./pdb/" + pdbName.toLocaleLowerCase();

    fetch(urlPdb)
      .then(res => {
        return res.text()
      })
      .then(jsonMolJson => {
        var mol;

        if (urlPdb.endsWith(".mol")) {
          mol = ChemDoodle.readMOL(jsonMolJson, 1);
        } else {
          var pdbInterpreter = new ChemDoodle.io.PDBInterpreter();
          pdbInterpreter.deduceResidueBonds = true;
          mol = pdbInterpreter.read(jsonMolJson, 1);
        }

        var jsonMol = new ChemDoodle.io.JSONInterpreter().molTo(mol);
        var jsonMolStr = JSON.stringify(jsonMol);
        Molphene.openPDBData(jsonMolStr);
        Molphene.renderFrame();
      })
      .catch(err => {
        Molphene.renderFrame();
        console.error(err);
      });
  }

  return (
    <React.Fragment>
      <TopAppBar
        onAppToolbarDrawerBtnClicked={onAppToolbarDrawerBtnClicked}
        onAppBarMoreMenuClicked={onAppBarMoreMenuClicked}
        isMoreMenuOpened={isMoreMenuOpened}
        representationList={representationList}
        activedRepresentation={activedRepresentation}
        onAppBarMenuListItemClicked={onAppBarMenuListItemClicked}
      />
      <NavDrawer
        isNavDrawerOpen={isNavDrawerOpen}
        navigationList={navigationList}
        activatedMolecule={activatedMolecule}
        onDrawerListItemClicked={onDrawerListItemClicked}
      />
      <div className="fill-height" onClick={closeAll}>
        <canvas id="canvas"></canvas>
      </div>
    </React.Fragment>
  );
}
