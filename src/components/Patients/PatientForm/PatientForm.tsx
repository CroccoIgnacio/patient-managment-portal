import React from 'react';
import { useForm } from 'react-hook-form';
import { Patient } from '../../../types';

interface PatientFormProps {
  patient: Patient | null;
  onSavePatient: (data: Patient) => void;
}

const PatientForm: React.FC<PatientFormProps> = (props: PatientFormProps) => {
  const { patient, onSavePatient } = props;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Patient>({
    defaultValues: patient || { name: '', description: '' },
  });

  return (
    <form onSubmit={handleSubmit(onSavePatient)}>
      <div className="flex flex-col justify-center gap-4 overflow-auto">
        <div>
          <label
            htmlFor="name"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Name
          </label>
          <input
            {...register('name', { required: 'Name is required' })}
            type="text"
            id="name"
            className="border border-gray-300 p-2 rounded-lg w-full"
            placeholder="Enter patient name"
          />
          {errors.name && (
            <p className="text-red-500 text-sm">{errors.name.message}</p>
          )}{' '}
        </div>
        <div>
          <label
            htmlFor="Description"
            className="block mb-2 text-sm font-medium text-gray-900"
          >
            Description
          </label>
          <textarea
            {...register('description', {
              required: 'Description is required',
            })}
            id="description"
            className="border border-gray-300 p-2 rounded-lg w-full"
            placeholder="Enter patient description"
            rows={6}
          />
          {errors.description && (
            <p className="text-red-500 text-sm">{errors.description.message}</p>
          )}
        </div>
        <button
          type="submit"
          className="bg-main-blue p-2 rounded-lg m-4 text-white hover:opacity-80"
        >
          {patient ? 'Update Patient' : 'Add Patient'}
        </button>
      </div>
    </form>
  );
};

export default PatientForm;
