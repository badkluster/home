import React from "react";
import { Row, Col } from "antd";
import { useParams } from "react-router-dom";
import PostsListWeb from "../component/Web/Blog/PostsListWeb";
import PostInfo from "../component/Web/Blog/PostInfo";

export default function Blog(props) {
  const { location, history } = props;
  const { url } = useParams();

  return (
    <Row>
      <Col md={4} />
      <Col md={16}>
        {url ? (
          <PostInfo url={url} />
        ) : (
          <PostsListWeb location={location} history={history} />
        )}
      </Col>
      <Col md={4} />
    </Row>
  );
}
