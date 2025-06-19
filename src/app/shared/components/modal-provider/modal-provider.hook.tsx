'use client'

// Hook personalizado para usar el servicio
import { useContext } from 'react';
import { ModalContext } from '@/app/shared/components/modal-provider/modal-provider.context';

export function useModal() {
  return useContext(ModalContext);
}
