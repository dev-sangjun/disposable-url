import axios from "axios";

const URL = "http://localhost:5000/upload";

export const uploadFiles = (files: File[]) => {
  const formData = new FormData();
  files.forEach((file: File) => formData.append("files", file));
  return axios.post(URL, formData);
};
