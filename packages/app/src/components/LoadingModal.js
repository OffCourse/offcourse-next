import React, { memo } from "react";
import { Group, Loading } from "@offcourse/atoms";
import { Modal } from "@offcourse/molecules";
import { sizes } from "@offcourse/constants";

const { LARGE } = sizes;

const LoadingModal = () => {
  return (
    <Group height="400px" justifyContent="center" alignItems="center">
      <Modal.Section>
        <Loading size={LARGE} />
      </Modal.Section>
    </Group>
  );
};

export default memo(LoadingModal);
