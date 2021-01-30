import React, { useRef, useState } from "react";
import styled from "styled-components";
import Dropzone from "react-dropzone";
import Loader from "react-loader-spinner";
import colors from "../styles/colors";
import { uploadFiles } from "../api/upload";

type DropFilesProps = {
  className?: string;
};

const GenerateURLButton = styled.button`
  width: 100%;
  height: 3rem;
  border: none;
  border-radius: 0.25rem;
  background-color: ${colors.primary};
  color: white;
  font-size: 1.2em;
  font-weight: bold;
  &:hover {
    background-color: ${colors.primaryBright};
    cursor: ${(props: React.ButtonHTMLAttributes<HTMLButtonElement>) =>
      props.disabled ? "not-allowed" : "pointer"};
  }
`;

const CopyButton = styled.button`
  height: 100%;
  padding: 1rem;
  background-color: ${colors.gray};
  color: white;
  border: none;
  font-weight: bold;
  &:hover {
    background-color: ${colors.grayBright};
    cursor: ${(props: React.ButtonHTMLAttributes<HTMLButtonElement>) =>
      props.disabled ? "not-allowed" : "pointer"};
  }
`;

const DropFiles: React.FC<DropFilesProps> = ({ className }) => {
  const [files, setFiles] = useState<File[]>();
  const [key, setKey] = useState("");
  const [loading, setLoading] = useState(false);
  const [copied, setCopied] = useState(false);
  const [enablePreviewMode, setEnablePreviewMode] = useState(true);
  const [complete, setComplete] = useState(false);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const url = "https://disposable-url.herokuapp.com/upload/";
  // const devUrl = "http://localhost:5000/upload/";
  const onDrop = (acceptedFiles: File[]) => {
    setComplete(false);
    setFiles(acceptedFiles);
  };
  const onClick = () => {
    if (files) {
      setLoading(true);
      setCopied(false);
      uploadFiles(enablePreviewMode ? 2 : 0, files).then(res => {
        const { uuid } = res.data;
        setKey(uuid);
        setLoading(false);
        setComplete(true);
        setFiles([]);
      });
    }
  };
  const onCopy = () => {
    const input = inputRef.current;
    if (input) {
      navigator.clipboard.writeText(url + key);
      setCopied(true);
    }
  };
  const getFilenames = () => {
    return (
      files && (
        <div className="dropzone-file-container">
          <h3>Added Files ({files.length})):</h3>
          <ul className="filename-list">
            {files.map((file, index) => (
              <li className="filename-item" key={index}>
                <span className="filename">{file.name}</span>
                <span className="file-size">
                  {Number(file.size / 1000000).toFixed(1)}MB
                </span>
              </li>
            ))}
          </ul>
        </div>
      )
    );
  };
  const onCheck = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { checked } = e.target;
    setEnablePreviewMode(checked);
  };
  return (
    <Dropzone onDrop={onDrop}>
      {({ getRootProps, getInputProps }) => (
        <section className={className}>
          <div className="dropzone" {...getRootProps()}>
            <input {...getInputProps()} />
            {files && files.length > 0 ? (
              getFilenames()
            ) : (
              <p className="drop-message">Drop your files here.</p>
            )}
          </div>
          <GenerateURLButton
            onClick={onClick}
            disabled={!files || files.length <= 0}
          >
            {loading ? (
              <Loader
                type="Circles"
                color="#FFFFFF"
                height={32}
                width={32}
                style={{ position: "relative", top: "3px" }}
              />
            ) : complete ? (
              "Complete"
            ) : (
              "Generate URL"
            )}
          </GenerateURLButton>
          <div className="checkbox-container">
            <label className="checkbox-label">Enable Preview Mode:</label>
            <input
              id="checkbox"
              type="checkbox"
              onChange={onCheck}
              checked={enablePreviewMode}
            />
          </div>
          <div className="url-container">
            <label className="url-label" htmlFor="url">
              URL:
            </label>
            <input
              id="url"
              type="text"
              value={key === "" ? "" : url + key}
              readOnly
              ref={inputRef}
            />
            <CopyButton disabled={key === ""} onClick={onCopy}>
              {copied ? "Copied!" : "Copy"}
            </CopyButton>
          </div>
        </section>
      )}
    </Dropzone>
  );
};

export default styled(DropFiles)`
  .dropzone {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 15rem;
    margin: auto;
    margin-bottom: 1rem;
    border: 1px solid ${colors.primary};
    border-radius: 0.25rem;
    outline: none;
    .dropzone-file-container {
      width: 100%;
      height: 100%;
      padding: 1rem;
      color: white;
      overflow-y: scroll;
      .filename-list {
        width: 100%;
        padding: 1rem;
        .filename-item {
          display: flex;
          justify-content: space-between;
          width: 100%;
          margin-bottom: 0.5rem;
          .filename {
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
          }
          .file-size {
            margin-left: 1rem;
          }
        }
      }
    }
    .drop-message {
      font-size: 1.5em;
      color: ${colors.gray};
    }
    &:hover {
      cursor: pointer;
    }
  }
  .checkbox-container {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 1rem;
    color: white;
    label {
      margin-right: 1rem;
    }
  }
  .url-container {
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 3rem;
    margin-top: 1rem;
    border-radius: 0.25rem;
    background-color: white;
    overflow: hidden;
    .url-label {
      position: absolute;
      left: 1rem;
      font-weight: bold;
    }
    input {
      width: 100%;
      height: 100%;
      padding-left: 4rem;
      padding-right: 1rem;
      border: none;
      font-size: 1em;
      overflow: hidden;
    }
  }
`;
