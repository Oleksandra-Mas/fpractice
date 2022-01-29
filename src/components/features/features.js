import { useState, useEffect } from "react";
import styled from "styled-components";

import { getPexelsImages } from "../../helpers/fetch";
getPexelsImages();

const List = styled.ul`
  display: flex;
  justify-content: space-between;
`;

const Item = styled.li`
  position: relative;
  height: 340px;
  width: 260px;
  overflow: hidden;
  border-radius: 6px;
  text-align: center;
  display: flex;

  img {
    display: block;
    object-fit: contain;
  }
`;

const Author = styled.span`
  position: absolute;
  bottom: 0;
  left: 0;
  background: white;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  height: 20%;
  width: 50%;
  border-radius: 0px 6px 0px 0px;
  font-weight: 600;
  font-size: 17px;
  line-height: 1.47;
  color: #042521;
`;

const Title = styled.h2`
  font-weight: bold;
  font-size: 36px;
  line-height: 1.39;
`;

const Features = () => {
  const [photos, setPhotos] = useState([]);
  const [search, setSearch] = useState("sea");

  useEffect(() => {
    const getPhotos = async () => {
      const res = await getPexelsImages(search);
      setPhotos(res.photos);
    };
    getPhotos();

    return () => {
      setSearch("");
    };
  }, [search]);
  return (
    <section>
      <Title>Featured destinations</Title>
      <List>
        {photos.length > 0 &&
          photos.map(({ id, alt, src: { original }, photographer }) => {
            return (
              <Item key={id}>
                <img src={original} alt={alt} />
                <Author>{photographer}</Author>
              </Item>
            );
          })}
      </List>
    </section>
  );
};

export default Features;
