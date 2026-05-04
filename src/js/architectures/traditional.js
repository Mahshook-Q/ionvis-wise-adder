// Traditional QCCD baseline
export const TRADITIONAL = {
  name: "Traditional QCCD",
  signalSources: 1000, // 1 per qubit (simplified)
  qubits: 1000,
  gateLayersPerSec: [5, 20],
  ioReduction: "1x",
  features: ["direct wiring", "no multiplexing"],
  latencyPerStepMs: 1200
};