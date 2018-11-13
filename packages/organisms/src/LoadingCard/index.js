import React from "react";
import { Card, Section } from "@offcourse/atoms";
import { Loading } from "@offcourse/molecules";
import { sizes } from "@offcourse/constants";

const { LARGE } = sizes;

const LoadingCard = () => (
  <Card p={8}>
    <Section justifyContent="center" alignItems="center">
      <Loading size={LARGE} />
    </Section>
  </Card>
);

export default LoadingCard;
