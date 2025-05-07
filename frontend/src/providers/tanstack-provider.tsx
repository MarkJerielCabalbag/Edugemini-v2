"use client";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { ReactNode, useState } from "react";

type TanstackProviderProps = {
  children: ReactNode;
};

export const TanstackProvider = ({ children }: TanstackProviderProps) => {
  const [queryClient] = useState(() => new QueryClient());
  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};
