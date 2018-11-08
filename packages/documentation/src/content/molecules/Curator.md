This molecule combines the avatar with a click handler

```react
const onClick = () => console.log("X");
const url = "https://assets.offcourse.io/portraits/offcourse_1.jpg";
const name = "Yeehaa";
<Curator profileUrl={`/${name}`} onClick={onClick} section="meta" curator={name} avatarUrl={url} />;
```

An avatar can also be combined with a link

```react
const url = "https://assets.offcourse.io/portraits/offcourse_1.jpg";
const name = "Yeehaa";

<Curator profileUrl="/" curator={name} avatarUrl={url} />;
```
