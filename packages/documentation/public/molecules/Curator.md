with click handler

```react
const url = "https://assets.offcourse.io/portraits/offcourse_1.jpg";
const name = "Yeehaa";
const onClick = {name, profileUrl}) => alert(`curator is ${name}, url is ${profileUrl}`)
<Curator profileUrl={`/${name}`} onClick={onClick} section="meta" name={name} avatarUrl={url} />;
```

with link

```react
const url = "https://assets.offcourse.io/portraits/offcourse_1.jpg";
const name = "Yeehaa";

<Curator profileUrl="/" name={name} avatarUrl={url} />;
```
