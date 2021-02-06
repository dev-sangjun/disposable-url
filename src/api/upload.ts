import axios from "axios";

// const devURL = "http://localhost:5000/upload";
const URL = "https://disposable-url.herokuapp.com/upload";

export const uploadFiles = (
  numLimit: number,
  expiresIn: number,
  files: File[]
) => {
  const formData = new FormData();
  files.forEach((file: File) => {
    formData.append("files", file);
  });
  formData.append("numLimit", String(numLimit));
  formData.append("expiresIn", String(expiresIn));
  return axios.post(URL, formData);
};
