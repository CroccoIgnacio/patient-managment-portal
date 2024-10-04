import React, { useState } from 'react';
import placeholder from '../../../assets/images/user.png';
import edit from '../../../assets/icons/edit.png';
import { Patient } from '../../../types';

interface PatientCardProps {
  name: string;
  description: string;
  avatar: string;
  onOpenModal: (patient?: Patient) => void;
  patientId: string;
}

const PatientCard: React.FC<PatientCardProps> = (props: PatientCardProps) => {
  const { name, description, avatar, onOpenModal, patientId } = props;

  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  const handleOnExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const handleOnEdit = () => {
    onOpenModal({ name, description, avatar, id: patientId });
  };

  return (
    <div className="w-64 max-w-sm bg-white border border-gray-200 rounded-lg shadow">
      <div className="flex justify-end px-4 pt-4">
        <button
          className="hover:bg-gray-300 rounded p-2 transition-colors duration-300"
          onClick={handleOnEdit}
        >
          <img className={'w-5 h-5'} src={edit} alt="Edit" />
        </button>
      </div>
      <div className="flex flex-col items-center pb-10 pt-10">
        <img
          className="w-24 h-24 mb-3 rounded-full shadow-lg"
          src={avatar || placeholder}
          alt={`${name}'s avatar`}
          onError={(e) => {
            (e.target as HTMLImageElement).src = placeholder;
          }}
        />
        <h5 className="mb-1 text-xl font-medium text-gray-900">
          {name}
        </h5>
        <div className="flex items-center justify-center">
          <button onClick={handleOnExpand}>
            {isExpanded ? 'See less' : 'See more'}
          </button>
        </div>
        <div
          className={`overflow-hidden transition-max-height duration-500 ease-in-out ${isExpanded ? 'max-h-screen' : 'max-h-0'}`}
        >
          {isExpanded && (
            <p className="mt-2 text-gray-600 text-center p-2">
              {description}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default PatientCard;
