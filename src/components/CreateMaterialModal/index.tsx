import { inject, observer } from 'mobx-react';
import React, { useState } from 'react';
import { MaterialStore } from '~/store';
import { Container, UploadFileStyled, FileListStyled, Contend, Input, ButtonStyled } from './styles';
import filesize from 'filesize';
import api from '~/services/api';
import { FaWindowClose, getCurrentCourseID, notify } from '~/utils';
import { isEmpty } from 'lodash';

type Props = {
  material?: MaterialStore;
};

const CreateMaterialModal: React.FC<Props> = ({ material, ...rest }) => {
  const [uploadedFile, setUploadedFile] = useState({});

  const [progress, setProgress] = useState(0);
  const [fileLink, setFileLink] = useState('');
  const [fileUploaded, setFileUploaded] = useState(false);
  const [name, setName] = useState('');

  const createMaterial = async () => {
    if (isEmpty(name)) {
      return notify('info', 'Digite o titulo do material');
    }

    const response = await material?.create({
      name,
      course_id: getCurrentCourseID()!,
      file: fileLink,
      type: 'IMAGE',
    });

    console.log(response);

    if (response) {
      notify('success', 'Material adicionado com sucesso');

      return setTimeout(() => {
        window.location.reload();
      }, 1500);
    }

    return notify('error', 'Erro ao adicionar o material');
  };

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
        {fileUploaded && (
          <>
            <Input
              placeholder="Digite o titulo do material"
              value={name}
              onChange={({ target }) => setName(target.value)}
            />
            <ButtonStyled onClick={createMaterial}>Adicionar</ButtonStyled>
          </>
        )}
      </Contend>
    </Container>
  );
};

export default inject('material')(observer(CreateMaterialModal));
