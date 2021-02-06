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
  margin-top: 1rem;
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
  const [params, setParams] = useState({
    numLimit: "1",
    expiresIn: "15",
  });
  const { numLimit, expiresIn } = params;
  const [complete, setComplete] = useState(false);
  const [error, setError] = useState({
    numError: "",
    expireError: "",
    emptyError: "",
  });
  const inputRef = useRef<HTMLInputElement | null>(null);
  const url = "https://disposable-url.herokuapp.com/download/";
  // const devUrl = "http://localhost:5000/upload/";
  const onDrop = (acceptedFiles: File[]) => {
    setComplete(false);
    setFiles(acceptedFiles);
  };
  const onClick = () => {
    if (files && !disabled()) {
      setLoading(true);
      setCopied(false);
      uploadFiles(
        parseInt(params.numLimit),
        parseInt(params.expiresIn),
        files
      ).then(res => {
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
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    const num = parseInt(value);
    switch (name) {
      case "num-limit":
        setParams({
          ...params,
          numLimit: isNaN(num) ? "" : String(num),
        });
        setError({
          ...error,
          numError:
            num < 0 || num > 5
              ? '"Number of access" must be between 1 and 5.'
              : "",
          emptyError: isNaN(num) ? "All fields must not be empty." : "",
        });

        break;
      case "expire":
        setParams({
          ...params,
          expiresIn: isNaN(num) ? "" : String(num),
        });
        setError({
          ...error,
          expireError:
            num < 0 || num > 15 ? '"Expires in" must be between 1 and 15.' : "",
          emptyError: isNaN(num) ? "All fields must not be empty." : "",
        });

        break;
      default:
        break;
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
                  {Number(file.size / 1048576).toFixed(1)}MB
                </span>
              </li>
            ))}
          </ul>
        </div>
      )
    );
  };
  const disabled = () => {
    const { numError, expireError, emptyError } = error;
    return (
      !files ||
      files.length <= 0 ||
      numError !== "" ||
      expireError !== "" ||
      emptyError !== ""
    );
  };
  const maxSize = 8;
  const onDropRejected = () => {
    alert(`Total file size must not exceed ${maxSize}MB`);
  };
  return (
    <Dropzone
      onDrop={onDrop}
      maxSize={maxSize * 1048576}
      onDropRejected={onDropRejected}
    >
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
          <div className="limit-container">
            <div className="top-container">
              <div className="limit-item">
                <label htmlFor="expire">Number of access:</label>
                <input
                  id="num-limit"
                  name="num-limit"
                  type="number"
                  value={numLimit}
                  onChange={onChange}
                />
              </div>
              <div className="limit-item">
                <label htmlFor="expire">Expires in (Minutes):</label>
                <input
                  id="expire"
                  name="expire"
                  type="number"
                  value={expiresIn}
                  onChange={onChange}
                />
              </div>
            </div>
            {error.numError !== "" && (
              <span className="error">{error.numError}</span>
            )}
            {error.expireError !== "" && (
              <span className="error">{error.expireError}</span>
            )}
            {error.emptyError !== "" && (
              <span className="error">{error.emptyError}</span>
            )}
          </div>
          <GenerateURLButton onClick={onClick} disabled={disabled()}>
            {loading ? (
              <Loader
                type="TailSpin"
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
  .limit-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    text-align: center;
    .top-container {
      display: flex;
      justify-content: center;
      align-content: center;
      margin-bottom: 0.5rem;
      .limit-item {
        display: flex;
        justify-content: center;
        align-content: center;
        margin-right: 1rem;
        &:last-child {
          margin-right: 0;
        }
      }
    }
    .error {
      color: red;
      margin-bottom: 0.5rem;
      &:last-child {
        margin-bottom: 0;
      }
    }
    label {
      position: relative;
      top: 4px;
      color: white;
      text-align: right;
      margin-right: 0.5rem;
    }
    input {
      width: 4rem;
      height: 2rem;
      padding: 0.5rem;
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
  .share-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    margin-top: 1rem;
    text-align: center;
    .share-label {
      color: white;
      margin-right: 1rem;
      font-weight: bold;
    }
    .share-buttons {
      display: flex;
      justify-content: center;
      margin-top: 0.5rem;
    }
  }
  @media (max-width: 640px) {
    .limit-container {
      .top-container {
        flex-direction: column;
        .limit-item {
          flex-direction: column;
          align-items: center;
          margin-bottom: 0.5rem;
          margin-right: 0;
          &:last-child {
            margin-right: 0;
          }
        }
        label {
          position: inherit;
          color: white;
          text-align: center;
          margin-bottom: 0.5rem;
          margin-right: 0;
        }
        input {
          margin-right: 0;
        }
      }
    }
  }
`;
