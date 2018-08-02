import React, { Component } from "react";
import { Group, Loading } from "@offcourse/atoms";
import { Modal } from "@offcourse/molecules";

export default class LoadingModal extends Component {
    render() {
        return (
            <Group height="400px" justifyContent="center" alignItems="center">
                <Modal.Section>
                    <Loading size="large" />
                </Modal.Section>
            </Group>
        );
    }
}