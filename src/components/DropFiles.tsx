import React, { useState } from "react";
import styled from "styled-components";
import Dropzone from "react-dropzone";
import colors from "../styles/colors";

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
  &:focus {
    outline: none;
  }
`;

const DropFiles: React.FC<DropFilesProps> = ({ className }) => {
  const [files, setFiles] = useState<File[]>();
  const onDrop = (acceptedFiles: File[]) => {
    setFiles(files);
  };
  return (
    <Dropzone onDrop={onDrop}>
      {({ getRootProps, getInputProps }) => (
        <section>
          <div className={className} {...getRootProps()}>
            <input {...getInputProps()} />
            <p className="drop-message">Drop your files here.</p>
          </div>
          <Button>Generate URL</Button>
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
`;
