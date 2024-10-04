import React, { useEffect, useState } from 'react';
import usePatients from '../../../hooks/usePatients';
import Loading from '../../shared/Loading/Loading';
import PatientCard from '../PatientCard/PatientCard';
import { Patient } from '../../../types';
import PatientModal from '../PatientModal/PatientModal';
import Toast from '../../shared/Toast';
import { useNavigate } from 'react-router-dom';

const PatientsList = () => {
  const { patients, loading } = usePatients();
  const [patientsArray, setPatientsArray] = useState<Patient[] | null>(null);
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [newPatient, setNewPatient] = useState<Patient | null>(null);
  const [openToast, setOpenToast] = useState<boolean>(false);
  const [toastMessage, setToastMessage] = useState<string>('');

  const navigate = useNavigate();

  useEffect(() => {
    setPatientsArray(patients);
  }, [patients]);

  if (loading) {
    return <Loading />;
  }


  const handleGoBack = () => {
    navigate('/');
  };

  const handleOpenModal = (patient?: Patient) => {
    if (patient) {
      setNewPatient(patient);
    } else {
      setNewPatient(null);
    }
    setOpenModal(true);
  };
  const handleCloseModal = () => {
    setOpenModal(false);
  };
  const handleCloseToast = () => {
    setOpenToast(false);
  };

  const handleSavePatient = (data: Patient) => {
    if (newPatient) {
      setPatientsArray((prev: any) =>
        prev.map((patient: any) =>
          patient.id === data.id
            ? {
                ...patient,
                id: data.id,
                name: data.name,
                description: data.description,
              }
            : patient
        )
      );
      setToastMessage('Patient Edited Succesfully');
    } else {
      setPatientsArray((prev: any) => [
        ...prev,
        { ...data, id: new Date().toISOString() },
      ]);
      setToastMessage('Patient Added Succesfully');
    }
    handleCloseModal();
    setOpenToast(true);
    setTimeout(() => setOpenToast(false), 3000);
  };
  return (
    <>
      <div className="flex flex-col items-center bg-gray-background">
        <div className="p-4">
          <h1 className="text-3xl font-bold text-blue-3 mb-2 text-center">
            List of Patients
          </h1>
          <div className="border-b-2 border-gray-300 mx-auto mb-4"></div>
        </div>
        <div className="flex justify-between px-24 pt-4 w-full">
          <button
            onClick={handleGoBack}
            className="bg-gray-1 p-4 rounded-lg m-4 text-white hover:opacity-80"
          >
            Go back
          </button>
          <button
            onClick={() => handleOpenModal()}
            className="bg-main-blue p-4 rounded-lg m-4 text-white hover:opacity-80"
          >
            Add Patient
          </button>
        </div>
        <div className="flex flex-wrap justify-center gap-4 items-baseline">
          {patientsArray?.map((patient) => (
            <PatientCard
              key={patient.id}
              name={patient.name}
              patientId={patient.id}
              description={patient.description}
              avatar={patient.avatar}
              onOpenModal={handleOpenModal}
            />
          ))}
        </div>
      </div>
      {openModal && (
        <PatientModal
          onSavePatient={handleSavePatient}
          onClose={handleCloseModal}
          patient={newPatient}
        />
      )}
      {openToast && <Toast onClose={handleCloseToast} message={toastMessage} />}
    </>
  );
};

export default PatientsList;
