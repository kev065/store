'use client';

import { useState, useEffect } from 'react';
import { useToast } from '@/components/ui/use-toast';
import { actionFunction } from '@/utils/types';

const initialState = {
  message: '',
};

function FormContainer({
  action,
  children,
}: {
  action: actionFunction;
  children: React.ReactNode;
}) {
  const [state, setState] = useState(initialState);
  const { toast } = useToast();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      const result = await action(data);
      setState(result);
    } catch {
      setState({ message: 'An error occurred' });
    }
  };

  useEffect(() => {
    if (state.message) {
      toast({ description: state.message });
    }
  }, [state.message, toast]);

  return <form onSubmit={handleSubmit}>{children}</form>;
}

export default FormContainer;