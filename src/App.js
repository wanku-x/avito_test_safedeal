import React, { useState, useEffect } from 'react';
import { Row, Col, setConfiguration } from 'react-grid-system';
import styled from 'styled-components';
import Header from './Components/Header';
import Main from './Components/Main';
import Footer from './Components/Footer';
import Picture from './Components/Picture';
import Loader from './Components/Loader';
import { requestGET } from './Requests';
import Modal from './Components/Modal';

setConfiguration({
  gutterWidth: 20,
});

const ColStyled = styled(Col)`
  padding-bottom: 30px;
`;

const App = () => {
  const [photos, setPhotos] = useState([]);
  const [moreInfo, setMoreInfo] = useState({});
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const abortController = new AbortController();

    requestGET(
      'https://boiling-refuge-66454.herokuapp.com/images',
      { signal: abortController.signal },
    ).then((res) => {
      setPhotos(res);
    }).catch((err) => {
      console.log(err);
    }).finally(() => {
      setLoading(false);
    });

    return () => {
      abortController.abort();
    };
  }, []);

  const getPhotoInfo = (id) => {
    setLoading(true);
    setMoreInfo({});

    requestGET(
      `https://boiling-refuge-66454.herokuapp.com/images/${id}`,
    ).then((res) => {
      setMoreInfo(res);
    }).catch((err) => {
      console.log(err);
    }).finally(() => {
      setLoading(false);
    });
  };

  const openModal = (id) => {
    getPhotoInfo(id);
    setModalIsOpen(true);
  };

  return (
    <>
      <Header />
      <Main>
        <Row>
          {photos.map((photo) => (
            <ColStyled md={4} key={photo.id}>
              <Picture
                src={photo.url}
                openModal={() => openModal(photo.id)}
              />
            </ColStyled>
          ))}
        </Row>
      </Main>
      <Footer />
      <Modal
        open={modalIsOpen}
        content={JSON.stringify(moreInfo)}
        onClose={() => setModalIsOpen(false)}
      />
      <Loader visible={loading} />
    </>
  );
};

export default App;
