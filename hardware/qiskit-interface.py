"""Run 2-qubit adder on Qiskit Aer with ion-trap noise model"""
from qiskit import QuantumCircuit
from qiskit_aer import AerSimulator
from qiskit_aer.noise import NoiseModel, depolarizing_error

def half_adder():
    qc = QuantumCircuit(2,2)
    qc.h(1)
    qc.cx(0,1)  # simplified
    qc.measure_all()
    return qc

noise = NoiseModel()
noise.add_all_qubit_quantum_error(depolarizing_error(0.005, 2), ['cx'])

sim = AerSimulator(noise_model=noise)
result = sim.run(half_adder(), shots=1024).result()
print(result.get_counts())
