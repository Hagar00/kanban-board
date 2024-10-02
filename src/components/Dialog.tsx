import { FC, ReactNode } from "react";

interface DialogProps {
  isOpen: boolean;
  onHide: () => void;
  children: ReactNode;
}

const Dialog: FC<DialogProps> = ({ isOpen, onHide, children }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="relative bg-white rounded-lg shadow-lg w-full max-w-lg p-6">
        <button
          onClick={onHide}
          className="absolute top-4 right-4 text-gray-600 hover:text-gray-900"
        >
          &times;
        </button>

        <div>{children}</div>
      </div>
    </div>
  );
};

export default Dialog;
