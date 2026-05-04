// WISE architecture parameters from arXiv:2305.12773
export const WISE = {
  name: "WISE",
  signalSources: 200,
  qubits: 1000,
  gateLayersPerSec: [40, 2600],
  ioReduction: "10x",
  features: ["on-chip switches", "shared DACs", "dynamic electrodes", "shim electrodes"],
  latencyPerStepMs: 400
};