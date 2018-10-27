import React, { Component, Fragment } from "react";
import { map } from "ramda";
import { debounce } from "debounce";
import PropTypes from "prop-types";
import { Adopt } from "react-adopt";
import { Modal } from "@offcourse/molecules";
import { AppShell } from "@offcourse/organisms";
import { LoadingModal, Route, GlobalEvents } from "../components";
import {
  ForkCourseDialogContainer,
  AuthContainer,
  CourseFormContainer
} from ".";

import {
  SearchbarProvider,
  SidebarProvider,
  OverlayProvider,
  AuthProvider,
  FlashProvider
} from "../providers";

const {
  SIGNING_IN,
  SIGNING_UP,
  SIGNING_OUT,
  RESETTING_PASSWORD,
  CREATE_COURSE,
  EDIT_COURSE,
  FORK_COURSE
} = OverlayProvider.constants;

const mapper = {
  auth: <AuthProvider />,
  flash: <FlashProvider />,
  route: <Route />,
  overlay: <OverlayProvider />,
  sidebar: <SidebarProvider />,
  searchbar: <SearchbarProvider />
};

export default class LayoutContainer extends Component {
  static propTypes = {};

  selectMode({ mode, courseId, close }) {
    switch (mode) {
      case SIGNING_UP:
      case SIGNING_IN:
      case SIGNING_OUT:
      case RESETTING_PASSWORD:
        return <AuthContainer />;
      case EDIT_COURSE:
      case CREATE_COURSE:
        return <CourseFormContainer courseId={courseId} />;
      case FORK_COURSE:
        return <ForkCourseDialogContainer courseId={courseId} />;
      default:
        return <LoadingModal />;
    }
  }
  createUserLinks({ openOverlay, handlers }) {
    return [
      {
        onClick: () => openOverlay({ mode: CREATE_COURSE }),
        title: "Create Course",
        level: 1
      },
      {
        href: "https://condescending-wing-149611.netlify.com/",
        title: "Contribute",
        level: 1
      },
      {
        onClick: handlers.goToAbout,
        title: "About",
        level: 1
      },
      {
        onClick: () => openOverlay({ mode: SIGNING_OUT }),
        title: "Sign Out",
        level: 1
      }
    ];
  }

  createGuestLinks({ openOverlay, handlers }) {
    return [
      {
        onClick: () => openOverlay({ mode: SIGNING_IN }),
        title: "Sign In",
        level: 1
      },
      {
        href: "https://condescending-wing-149611.netlify.com/",
        title: "Contribute",
        level: 1
      },
      {
        onClick: handlers.goToAbout,
        title: "About",
        level: 1
      }
    ];
  }

  createLinks({ userName, openOverlay, changeCardSize, handlers }) {
    return userName
      ? this.createUserLinks({ openOverlay, changeCardSize, handlers })
      : this.createGuestLinks({ openOverlay, changeCardSize, handlers });
  }

  render() {
    return (
      <Adopt mapper={mapper}>
        {({ sidebar, searchbar, auth, overlay, flash, theme, route }) => {
          const { goHome, goToCollection } = route.handlers;
          return (
            <Fragment>
              <GlobalEvents
                closeSidebar={sidebar.close}
                toggleSearchBar={searchbar.toggle}
                toggleSidebar={sidebar.toggle}
                closeSearchBar={searchbar.close}
                closeOverlay={overlay.close}
              />
              <AppShell
                position="fixed"
                messages={flash.messages}
                onLogoClick={() => searchbar.close() && goHome()}
                toggleSidebar={sidebar.toggle}
                closeSidebar={sidebar.close}
                toggleSearchBar={searchbar.toggle}
                closeSearchBar={searchbar.close}
                isSearchBarOpen={searchbar.isOpen}
                onSearchChange={debounce(
                  ({ searchTerm }) => goToCollection({ searchTerm }),
                  300
                )}
                onSearchSubmit={({ searchTerm }) =>
                  searchbar.close() && goToCollection({ searchTerm })
                }
                isSidebarOpen={sidebar.isOpen}
                links={[
                  ...this.createLinks({
                    openOverlay: overlay.open,
                    userName: auth.userName,
                    handlers: route.handlers
                  })
                ]}
              />
              <Modal close={overlay.close} isOpen={overlay.isOpen}>
                {this.selectMode(overlay)}
              </Modal>
            </Fragment>
          );
        }}
      </Adopt>
    );
  }
}
