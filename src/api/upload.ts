import axios from "axios";

const URL = "https://disposable-url.herokuapp.com/upload";

export const uploadFiles = (files: File[]) => {
  const formData = new FormData();
  files.forEach((file: File) => {
    formData.append("files", file);
    formData.append("filenames", file.name);
  });
  return axios.post(URL, formData);
};
