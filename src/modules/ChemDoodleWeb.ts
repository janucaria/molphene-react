declare namespace ChemDoodle {
  namespace io {
    class PDBInterpreter {
      deduceResidueBonds: boolean;
      constructor();
      read(arg: any, arg2?: number): any;
    }

    class JSONInterpreter {
      constructor();
      molTo(mol: any): any
    }
  }

  function readMOL(arg: string, arg2?: number): any;
};

export default ChemDoodle;