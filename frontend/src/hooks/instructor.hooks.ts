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

export const useGetClassroom = (roomId: number) => {
  return useQuery({
    queryKey: ["classroom"],
    queryFn: () => instructor.getClassroom(roomId),
  });
};

export const useGetAnnouncements = (roomId: number) => {
  return useQuery({
    queryKey: ["announcements"],
    queryFn: () => instructor.getAnnouncements(roomId),
  });
};

export const usePostAnnouncement = (
  roomId: number,
  title: string,
  description: string,
  fileData: any[]
) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: () =>
      instructor.createAnnouncement(roomId, title, description, fileData),
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["announcements"] });
      queryClient.invalidateQueries({ queryKey: ["announcement"] });
      toast.success(data?.message);
    },
    onError: (error) => {
      queryClient.invalidateQueries({ queryKey: ["announcements"] });
      queryClient.invalidateQueries({ queryKey: ["announcement"] });
      toast.success(error?.message);
    },
  });
};

export const useGetAnnouncement = (announceId: number) => {
  return useQuery({
    queryKey: ["announcement"],
    queryFn: () => instructor.getAnnouncement(announceId),
  });
};

export const useDeleteAnnouncement = (announceId: number) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: () => instructor.removeAnnouncement(announceId),
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["announcements"] });

      toast.success(data?.message);
    },
    onError: (error) => {
      queryClient.invalidateQueries({ queryKey: ["announcements"] });

      toast.success(error?.message);
    },
  });
};
