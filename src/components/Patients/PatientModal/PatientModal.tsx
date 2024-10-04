import React from 'react';
import PatientForm from '../PatientForm/PatientForm';
import { Patient } from '../../../types';

interface PatientMoodalProps {
  patient: Patient | null;
  onClose: () => void;
  onSavePatient: (data: Patient) => void;
}

const PatientModal: React.FC<PatientMoodalProps> = (
  props: PatientMoodalProps
) => {
  const { onClose, onSavePatient, patient } = props;
  return (
    <div
      aria-hidden="true"
     className="modal-container flex items-center justify-center fixed left-0 top-0 w-full h-full bg-modal-background z-20"
    >
      <div className="relative w-full max-w-lg bg-white rounded-lg shadow-md">
        <div className="flex flex-col bg-white rounded-lg shadow ">
          <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t">
            <h3 className="text-lg font-semibold text-gray-900">
              {patient ? `Edit Patient` : `Add New Patient`}
            </h3>
            <button
              type="button"
              onClick={onClose}
              className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-lg w-6 h-6 ms-auto inline-flex justify-center items-center"
            >
              &times;
            </button>
          </div>
          <div className="p-12">
            <PatientForm onSavePatient={onSavePatient} patient={patient} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatientModal;
