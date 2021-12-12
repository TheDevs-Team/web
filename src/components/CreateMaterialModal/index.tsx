import { inject, observer } from 'mobx-react';
import React, { useState } from 'react';
import { CourseStore } from '~/store';
import { Container, UploadFileStyled, FileListStyled, Contend } from './styles';
import filesize from 'filesize';
import api from '~/services/api';

type Props = {
  onClose: () => void;
  onConfirm: () => void;
  course?: CourseStore;
};

const CreateMaterialModal: React.FC<Props> = ({ onClose, onConfirm, ...rest }) => {
  const [uploadedFile, setUploadedFile] = useState({});

  const [progress, setProgress] = useState(0);
  const [fileLink, setFileLink] = useState('');
  const [fileUploaded, setFileUploaded] = useState(false);

  const processUpload = async (file: any) => {
    setUploadedFile(file);

    const data = new FormData();

    data.append('file', file.file);

    try {
      const response = await api.post('/service/file/create', data, {
        headers: { 'content-type': 'multipart/form-data' },

        onUploadProgress: (event) => {
          const progress = Number(Math.round((event.loaded * 100) / event.total));

          setProgress(progress);
        },
      });

      setFileLink(response.data.file);
      setFileUploaded(true);
      return true;
    } catch (err) {
      return console.log(err);
    }
  };

  const handleUpload = (file) => {
    setProgress(0);
    setFileUploaded(false);
    setFileLink('');

    const uploaded = {
      file,
      name: file.name,
      readableSize: filesize(file.size),
      preview: URL.createObjectURL(file),
      uploaded: false,
      error: false,
      url: null,
    };

    processUpload(uploaded);
  };

  const onDelete = () => {
    setUploadedFile({});
    setProgress(0);
    setFileUploaded(false);
    setFileLink('');
  };

  return (
    <Container {...rest}>
      <Contend>
        <UploadFileStyled onUpload={(file) => handleUpload(file[0])} />
        <FileListStyled
          file={uploadedFile}
          progress={progress}
          fileLink={fileLink}
          fileUploaded={fileUploaded}
          onDelete={onDelete}
        />
      </Contend>
    </Container>
  );
};

export default inject('course')(observer(CreateMaterialModal));
