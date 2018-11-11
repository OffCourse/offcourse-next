```react
state: { isOpen: false}
---
const { EXTRA_LARGE} = sizes;
<div>
<Slide pose={state.isOpen ? "open" : "close"}>
  <Heading size={EXTRA_LARGE}>HELLO THERE!!!!</Heading>
</Slide>
  <Button onClick={() => setState({isOpen: !state.isOpen})}>{`Slide ${state.isOpen ? "Up" :  "Down"}`}</Button>
</div>
```

```react
state: { isOpen: false}
---
const { EXTRA_LARGE} = sizes;
<div>
  <Button onClick={() => setState({isOpen: !state.isOpen})}>{`Slide ${state.isOpen ? "Down" :  "Up"}`}</Button>
<Slide direction="bottom"pose={state.isOpen ? "open" : "close"}>
  <Heading size={EXTRA_LARGE}>HELLO THERE!!!!</Heading>
</Slide>
</div>
```

```react
state: { isOpen: false}
---
const { EXTRA_LARGE} = sizes;
<div>
<Slide direction="right" pose={state.isOpen ? "open" : "close"}>
  <Heading size={EXTRA_LARGE}>HELLO THERE!!!!</Heading>
</Slide>
  <Button onClick={() => setState({isOpen: !state.isOpen})}>{`Slide ${state.isOpen ? "Right" :  "Left"}`}</Button>
</div>
```

```react
state: { isOpen: false}
---
const { EXTRA_LARGE} = sizes;
<div>
<Slide direction="left" pose={state.isOpen ? "open" : "close"}>
  <Heading size={EXTRA_LARGE}>HELLO THERE!!!!</Heading>
</Slide>
  <Button onClick={() => setState({isOpen: !state.isOpen})}>{`Slide ${state.isOpen ? "Left" :  "Right"}`}</Button>
</div>
```

```react
state: { isOpen: false}
---
const { EXTRA_LARGE} = sizes;
<div>
<Slide distance="50px" direction="left" pose={state.isOpen ? "open" : "close"}>
  <Heading size={EXTRA_LARGE}>HELLO THERE!!!!</Heading>
</Slide>
  <Button onClick={() => setState({isOpen: !state.isOpen})}>{`Slide ${state.isOpen ? "Left" :  "Right"}`}</Button>
</div>
```
