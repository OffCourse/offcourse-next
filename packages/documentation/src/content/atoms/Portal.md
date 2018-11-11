```react
state: { isOpen: false}
---
const toggle = () => setState({isOpen: !state.isOpen});
<div>
 <Portal>
    <Fade minOpacity={0} maxOpacity={0.7} pose={state.isOpen ? "visible" :  "hidden"}>
        <Backdrop display="block" onClick={toggle}/>
    </Fade>
 </Portal>
 <Button onClick={toggle}>{`${state.isOpen ? "Close" : "Open"} Portal`}</Button>
</div>
```
