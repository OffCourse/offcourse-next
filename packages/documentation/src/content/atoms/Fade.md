```react
state: { isVisible: true }
---
const { EXTRA_LARGE} = sizes;
<div>
<Fade pose={state.isVisible ? "visible" : "hidden"}>
  <Heading size={EXTRA_LARGE}>HELLO THERE!!!!</Heading>
</Fade>
  <Button onClick={() => setState({isVisible: !state.isVisible})}>{`Fade ${state.isVisible ? "Out" : "In"}`}</Button>
</div>
```

```react
state: { isVisible: true }
---
const { EXTRA_LARGE} = sizes;
<div>
  <Fade minOpacity={0.2} maxOpacity={0.5} pose={state.isVisible ? "visible" : "hidden"}>
    <Heading size={EXTRA_LARGE}>HELLO THERE!!!!</Heading>
  </Fade>
  <Button onClick={() => setState({isVisible: !state.isVisible})}>{`Fade ${state.isVisible ? "Out" : "In"}`}</Button>
</div>
```
