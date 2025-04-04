export type DynamicComponentProps<T = object> = {
  onClose: (response?: T) => void; // Función que el componente llamará al cerrarse
};

// Tipo para el contexto
export type ModalContextType = {
  showModal: <T>(
    Component: React.ComponentType<DynamicComponentProps<T>> // Componente a mostrar
  ) => Promise<T | undefined>; // Promesa que se resolverá cuando el componente se cierre
};
