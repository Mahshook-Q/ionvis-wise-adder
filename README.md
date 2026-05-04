# IonVis — Quantum Arithmetic Simulator (WISE Architecture)

Visual, interactive simulator for a 2-qubit quantum adder running on a trapped-ion QCCD chip, built for the Quantum Hackathon — **Visual Adder Simulator** track.

**Live Demo:** (deploy to GitHub Pages after push)

### Why WISE?
Today's ion traps wire *each qubit to an external signal source* — not scalable. The WISE architecture (Malinowski et al., arXiv:2305.12773) integrates simple switching electronics *on-chip*, keeping complex DACs off-chip.

- **~200 signal sources → 1000 qubits**
- **40–2600 gate layers/sec**
- 10× I/O reduction vs direct wiring, without sacrificing fidelity

IonVis visualizes this: watch ions shuttle, lasers fire, DACs multiplex, and compare Traditional QCCD vs WISE-optimized control.

### Features
- Interactive trap visualization with dynamic/shim/gate electrodes
- Bloch sphere real-time updates per gate
- Half-adder & full-adder circuits with drag-drop builder
- WISE vs Traditional toggle (wiring count, latency, error)
- Hardware mode: run same adder on Qiskit Aer / IonQ and overlay errors

### Repo Structure
- `index.html` — main app (currently monolithic, refactor in progress)
- `/src/js/` — modular simulator code
- `/data/` — WISE parameters from paper, noise models
- `/hardware/` — Python scripts to run on real QPUs
- `/docs/` — architecture explainer for judges

### Quick Start (GitHub Pages)
1. Fork repo
2. Enable Pages: Settings → Pages → Source: main / root
3. Visit `https://<user>.github.io/ionvis-wise-adder/`

### Local dev
```bash
python -m http.server 8000
# open http://localhost:8000
```

### Paper Reference
M. Malinowski, D.T.C. Allcock, C.J. Ballance. "How to wire a 1000-qubit trapped ion quantum computer." arXiv:2305.12773 (2023).
