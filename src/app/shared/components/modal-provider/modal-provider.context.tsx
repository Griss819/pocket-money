'use client';

// Creamos el contexto con un valor por defecto
import { createContext, useState } from 'react';
import { DynamicComponentProps, ModalContextType } from '@/app/shared/types/dynamic-component.types';

export const ModalContext = createContext<ModalContextType>({
  showModal: () => Promise.resolve(undefined),
});
// Proveedor que envuelve la aplicación
export function ModalProvider({ children }: { children: React.ReactNode }) {
  const [modal, setModal] = useState<React.ReactNode | null>(null);

  // Función para mostrar un modal y esperar su respuesta
  const showModal = <T,>(Component: React.ComponentType<DynamicComponentProps<T>>) => {
    return new Promise<T | undefined>((resolve) => {
      // Creamos una versión del componente con la función onClose
      const ModalWithProps = () => (
        <Component onClose={(response) => {
          setModal(null); // Cerramos el modal
          resolve(response); // Resolvemos la promesa con la respuesta
        }} />
      );

      // Mostramos el modal
      setModal(<ModalWithProps />);
    });
  };

  return (
    <ModalContext.Provider value={{ showModal }}>
      {children}
      {modal && (
        <div className="fixed inset-0 bg-black opacity-50 flex items-center justify-center p-4">
          {modal}
        </div>
      )}
    </ModalContext.Provider>
  );
}
