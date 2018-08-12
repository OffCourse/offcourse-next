with click handler

```react
const onClick = () => console.log("X");
const url = "https://assets.offcourse.io/portraits/offcourse_1.jpg";
const name = "Yeehaa";
<Curator profileUrl={`/${name}`} onClick={onClick} section="meta" name={name} avatarUrl={url} />;
```

with link

```react
const url = "https://assets.offcourse.io/portraits/offcourse_1.jpg";
const name = "Yeehaa";

<Curator profileUrl="/" name={name} avatarUrl={url} />;
```
