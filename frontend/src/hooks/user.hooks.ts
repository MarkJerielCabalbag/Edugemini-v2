import { user } from "@/api/user.api";
import { useMutation, useQuery } from "@tanstack/react-query";

import { useRouter } from "next/navigation";
export const useSignUp = (
  email: string,
  username: string,
  password: string
) => {
  return useMutation({
    mutationFn: () => user.signUp(email, username, password),
    onSuccess: () => console.log("success"),
    onError: () => console.log("error"),
  });
};

export const useSignIn = (
  email: string,
  password: string,
  onSuccess?: () => void,
  onError?: () => void
) => {
  const router = useRouter();
  return useMutation({
    mutationFn: () => user.signIn(email, password),
    onSuccess: (data) => {
      onSuccess?.();
      router.push(`home/${data.data.id}`);
    },
    onError: () => {
      onError?.();
    },
  });
};
