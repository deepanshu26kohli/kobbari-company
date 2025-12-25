import { X } from 'lucide-react';
import InquiryForm from './InquiryForm';

interface InquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function InquiryModal({ isOpen, onClose }: InquiryModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-green-800 text-white p-6 flex justify-between items-center">
          <div>
            <h2 className="text-2xl font-bold">Request Bulk Quote</h2>
            <p className="text-green-100 text-sm mt-1">Fill out the form and we'll get back to you within 24 hours</p>
          </div>
          <button
            onClick={onClose}
            className="text-white hover:text-green-200 transition-colors"
          >
            <X size={24} />
          </button>
        </div>

        <div className="p-6">
          <InquiryForm onSuccess={() => {
            setTimeout(onClose, 2000);
          }} />
        </div>
      </div>
    </div>
  );
}
