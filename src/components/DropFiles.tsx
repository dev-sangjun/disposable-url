import React, { useState } from "react";
import styled from "styled-components";
import Dropzone from "react-dropzone";
import colors from "../styles/colors";
import { uploadFiles } from "../api/upload";

type DropFilesProps = {
  className?: string;
};

const Button = styled.button`
  width: 100%;
  height: 3rem;
  border: none;
  border-radius: 0.25rem;
  background-color: ${colors.primary};
  color: white;
  font-size: 1.2em;
  font-weight: bold;
  &:hover {
    cursor: pointer;
  }
`;

const DropFiles: React.FC<DropFilesProps> = ({ className }) => {
  const [files, setFiles] = useState<File[]>();
  const [key, setKey] = useState<string | null>("");
  const url = "https://disposable-url.herokuapp.com/";
  const onDrop = (acceptedFiles: File[]) => {
    setFiles(acceptedFiles);
  };
  const onClick = () => {
    if (files)
      uploadFiles(files).then(res => {
        const { uuid } = res.data;
        setKey(uuid);
      });
  };
  return (
    <Dropzone onDrop={onDrop}>
      {({ getRootProps, getInputProps }) => (
        <section>
          <div className={className} {...getRootProps()}>
            <input {...getInputProps()} />
            <p className="drop-message">Drop your files here.</p>
          </div>
          <Button onClick={onClick}>Generate URL</Button>
          {key && <span className="url">{url + key}</span>}
        </section>
      )}
    </Dropzone>
  );
};

export default styled(DropFiles)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 15rem;
  margin: auto;
  margin-bottom: 1rem;
  border: 1px solid ${colors.primary};
  border-radius: 0.25rem;
  .drop-message {
    font-size: 1.5em;
    color: ${colors.gray};
  }
  &:hover {
    cursor: pointer;
  }
`;
