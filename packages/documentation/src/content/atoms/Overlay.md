```react
state: { isOpen: false }
---
const close = () => setState({isOpen: false});
const open = () => setState({isOpen: true});

<Group>
  <Overlay close={close} isOpen={state.isOpen}>
    <Button onClick={close}>
      Close Overlay
    </Button>
  </Overlay>
  <Button onClick={open}>
    Open Overlay
  </Button>
</Group>
```
