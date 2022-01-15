import styled from "styled-components";

import { useState } from "react";
import { handlePost } from "../../helpers/fetch";
import Button from "../Button";

const MainTitle = styled.h1`
  font-weight: 700;
  font-size: 64px;
  line-height: 1.23;
  color: #202336;
`;

const Title = styled.h2`
  font-weight: 600;
  font-size: 22px;
  line-height: 1.21;
  color: #202336;
  ::after {
    content: "";
    margin-top: 20px;
    width: 32px;
    height: 2px;
    background-color: black;
    display: block;
  }
`;

const Section = styled.section`
  width: 680px;
  padding: 15px;
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
  width: 480px;
  button {
    margin-top: 47px;
  }
`;

const Select = styled.select`
  min-width: 226px;
  border-radius: 5px;
  padding-left: 21px;
  padding-right: 121px;
  padding-top: 21px;
  padding-bottom: 21px;
  margin-right: 10px;
  :nth-child(1),
  :nth-child(2) {
    margin-bottom: 35px;
  }
`;

const Option = styled.option`
  display: inline-block;

  font-size: 15px;
  line-height: 1.1;
  text-transform: capitalize;
  color: #4a4c53;
`;

export default function Hero() {
  const [location, setLocation] = useState("");
  const [activity, setActivity] = useState("");
  const [grade, setGrade] = useState("");
  const [date, setDate] = useState("");
  const [query, setQuery] = useState({});

  const handleSubmit = (evt) => {
    evt.preventDefault();
    const obj = {
      location,
      activity,
      grade,
      date,
    };
    setQuery(obj);

    handlePost(query);
  };

  const handleChange = (evt) => {
    switch (evt.target.name) {
      case "location":
        setLocation(evt.target.value);
        break;
      case "activity":
        setActivity(evt.target.value);
        break;
      case "grade":
        setGrade(evt.target.value);
        break;
      case "date":
        setDate(evt.target.value);
        break;

      default:
        return;
    }
  };

  return (
    <Section>
      <MainTitle>Explore and Travel</MainTitle>
      <Title>Holiday finder</Title>
      <Form onSubmit={handleSubmit}>
        <Select defaultValue="location" onChange={handleChange} name="location">
          <Option value="location" disabled>
            disabled
          </Option>

          <Option value="location1">location1</Option>
          <Option value="location2">location2</Option>
        </Select>

        <Select defaultValue="activity" onChange={handleChange} name="activity">
          <Option value="activity" disabled>
            disabled
          </Option>
          <Option value="activity1">activity1</Option>
          <Option value="activity2">activity2</Option>
        </Select>

        <Select defaultValue="grade" onChange={handleChange} name="grade">
          <Option value="grade" disabled>
            disabled
          </Option>
          <Option value="grade1">grade1</Option>
          <Option value="grade2">grade2</Option>
        </Select>

        <Select defaultValue="date" onChange={handleChange} name="date">
          <Option value="date" disabled>
            disabled
          </Option>
          <Option value="date1">date1</Option>
          <Option value="date2">date2</Option>
        </Select>

        <Button type="submit" text="explore" styleType="bright" />
      </Form>
    </Section>
  );
}
