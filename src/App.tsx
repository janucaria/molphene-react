import * as React from 'react';
import * as Molphene from './modules/molphene';
import ChemDoodle from './modules/ChemDoodle';
import './App.scss';
import TopAppBar from "./components/TopAppBar";
import NavDrawer from "./components/NavDrawer";

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

interface States {
  isNavDrawerOpen: boolean;
  isMoreMenuOpened: boolean;
  activedRepresentation: MoleculeRepresentation;
  activatedMolecule: number;
}

class App extends React.Component<Props, States> {
  state: States;
  navigationList: NavigationListItem[];
  representationList: RepresentationListItem[];

  constructor(props: Props) {
    super(props);

    this.state = {
      isNavDrawerOpen: false,
      isMoreMenuOpened: false,
      activedRepresentation: MoleculeRepresentation.BallAndStickInstanced,
      activatedMolecule: 0
    };

    this.representationList = [
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

    this.navigationList = [
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
  }

  closeAll = (e: React.MouseEvent<HTMLDivElement>) => {
    this.setState({
      isNavDrawerOpen: false,
      isMoreMenuOpened: false
    });
  }

  onAppToolbarDrawerBtnClicked = (e: React.MouseEvent<HTMLButtonElement>) => {
    this.setState(oldState => {
      return {
        isNavDrawerOpen: !oldState.isNavDrawerOpen
      };
    });
  }

  onAppBarMoreMenuClicked = (e: React.MouseEvent<HTMLButtonElement>) => {
    this.setState(oldState => {
      return {
        isMoreMenuOpened: !oldState.isMoreMenuOpened
      }
    });
  }

  onDrawerListItemClicked = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const target = e.currentTarget;
    const activatedMol = parseInt(target.dataset.key!, 10);
    const currentActivatedMolecule = this.state.activatedMolecule;

    this.setState({
      isNavDrawerOpen: false,
      activatedMolecule: activatedMol
    });

    if (activatedMol !== currentActivatedMolecule) {
      const molecule = this.navigationList[activatedMol].link;
      this.openPDBMolecule(molecule);
    }
  }

  onAppBarMenuListItemClicked = (e: React.MouseEvent<HTMLLIElement>) => {
    const listItem = e.currentTarget;
    const repret = parseInt(listItem.dataset.representation!, 10);
    this.setState({
      isMoreMenuOpened: false,
      activedRepresentation: repret
    });
  }

  openPDBMolecule(pdbName: string) {
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

  componentDidMount() {
    Molphene.setup();
    Molphene.afterCanvasResized();
    Molphene.changeRepresentation(this.state.activedRepresentation);

    const activatedMol = Math.abs(this.state.activatedMolecule);
    const navIndex = this.navigationList.length > activatedMol ? activatedMol : 0;

    const molecule = this.navigationList[navIndex].link;
    this.openPDBMolecule(molecule);
  }

  componentDidUpdate() {
    Molphene.changeRepresentation(this.state.activedRepresentation);
    Molphene.renderFrame();
  }

  render() {
    return (
      <React.Fragment>
        <TopAppBar
          onAppToolbarDrawerBtnClicked={this.onAppToolbarDrawerBtnClicked}
          onAppBarMoreMenuClicked={this.onAppBarMoreMenuClicked}
          isMoreMenuOpened={this.state.isMoreMenuOpened}
          representationList={this.representationList}
          activedRepresentation={this.state.activedRepresentation}
          onAppBarMenuListItemClicked={this.onAppBarMenuListItemClicked}
        />
        <NavDrawer
          isNavDrawerOpen={this.state.isNavDrawerOpen}
          navigationList={this.navigationList}
          activatedMolecule={this.state.activatedMolecule}
          onDrawerListItemClicked={this.onDrawerListItemClicked}
        />
        <div className="fill-height" onClick={this.closeAll}>
          <canvas ref="canvas" id="canvas"></canvas>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
