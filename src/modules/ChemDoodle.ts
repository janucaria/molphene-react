
interface ChemDoodleType {
  io : {
    PDBInterpreter : {
      new(): {
        deduceResidueBonds: boolean;
        read(arg: any, arg2?: number): any;
      }
    };

    JSONInterpreter : {
      new(): {
        molTo(mol: any): any
      }
    }
  }

  readMOL(arg: string, arg2?: number): any;
};

export default ChemDoodleType;