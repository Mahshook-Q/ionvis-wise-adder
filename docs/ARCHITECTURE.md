# WISE Architecture — Explained

From Malinowski et al., arXiv:2305.12773

**Problem:** Direct wiring needs 1+ analog lines per electrode. For 1000 qubits, that's >10,000 feedthroughs — impossible.

**WISE Solution:** Wiring using Integrated Switching Electronics
1. Integrate *only simple CMOS switches* into the trap chip (compatible with UHV, cryo)
2. Keep DACs, amplifiers *outside*
3. Time-multiplex: ~200 sources drive thousands of electrodes via switches

Three electrode types in IonVis:
- **Dynamic (green):** fast transport, shared DAC
- **Shim (blue):** slow compensation
- **Gate zone (cyan):** where lasers hit

Result: 40–2600 layers/sec on fully-connected 1000-qubit device.
