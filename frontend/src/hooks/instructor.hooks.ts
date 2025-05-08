import { instructor } from "@/api/instructor.api";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

export const useGetClasses = (userId: number) => {
  return useQuery({
    queryKey: ["classes"],
    queryFn: () => instructor.getClasses(userId),
  });
};

export const usePostClassroom = (
  classname: string,
  subject: string,
  section: string,
  room: string,
  userId: number,
  onSuccess?: () => void,
  onError?: () => void
) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: () =>
      instructor.createClassroom(classname, subject, section, room, userId),
    onSuccess: () => {
      onSuccess?.();
      queryClient.invalidateQueries({ queryKey: ["classes"] });
    },
    onError: (error) => {
      onError?.();
      if (error) toast.error(error?.message);
    },
  });
};
