import React from 'react';
import Dropzone from 'react-dropzone';

import { DropContainer, UploadMessage } from './styles';

type Props = {
  onUpload: (value: any) => void;
};

export const UploadFile: React.FC<Props> = ({ onUpload }) => {
  const renderDragMessage = (isDragActive: boolean, isDragReject: boolean) => {
    if (!isDragActive) {
      return <UploadMessage>Arraste o arquivo aqui ou clique</UploadMessage>;
    }

    if (isDragReject) {
      return <UploadMessage isError>Arquivo não suportado</UploadMessage>;
    }

    return <UploadMessage isSuccess>Solte o arquivo aqui</UploadMessage>;
  };

  return (
    <div>
      <Dropzone accept="text/*, application/pdf, image/*, video/*" onDropAccepted={onUpload} multiple={false}>
        {({ getRootProps, getInputProps, isDragActive, isDragReject }) => (
          <DropContainer {...getRootProps()} isDragActive={isDragActive} isDragReject={isDragReject}>
            <input {...getInputProps()} />
            {renderDragMessage(isDragActive, isDragReject)}
          </DropContainer>
        )}
      </Dropzone>
    </div>
  );
};
