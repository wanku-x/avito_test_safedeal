import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Container, Row, Col } from 'react-grid-system';
import { requestGET } from '../Requests';
import Loader from './Loader';
import WriteComment from './WriteComment';
import { Paragraph } from './Typo';

const ImageStiled = styled.img`
  width: 100%;
`;

const Comment = styled.div`
  padding-bottom: 15px;
`;

const MoreInfo = ({ photoId }) => {
  const [moreInfo, setMoreInfo] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const abortController = new AbortController();

    requestGET(
      `https://boiling-refuge-66454.herokuapp.com/images/${photoId}`,
      abortController.signal,
    ).then((res) => {
      setMoreInfo(res);
    }).catch((err) => {
      console.log(err);
    }).finally(() => {
      setLoading(false);
    });

    return () => {
      abortController.abort();
    };
  }, [photoId]);

  return (
    <>
      <Container fluid>
        <Row>
          <Col md={7}>
            <ImageStiled src={moreInfo.url} alt="" />
          </Col>
          <Col md={5}>
            {(moreInfo.comments !== undefined) && moreInfo.comments.map((comment) => (
              <Comment>
                <Paragraph variant="secondary">18.12.2019</Paragraph>
                <Paragraph variant="primary">{ comment.text }</Paragraph>
              </Comment>
            ))}
          </Col>
          <Col md={7}>
            <WriteComment />
          </Col>
        </Row>
      </Container>
      <Loader visible={loading} />
    </>
  );
};

MoreInfo.propTypes = {
  photoId: PropTypes.number.isRequired,
};

export default MoreInfo;
