```react|plain
meta: !import meta
---
<div>
  <h1>{meta.blockName}</h1>
  <table>
    <tr><td>Source Code</td><td><a href={meta.url}>{meta.url}</a></td></tr>
  </table>
</div>
```

Avatar with Custom and Custom Image

```react|span-2
---
const name = "Yeehaa";
<Avatar name={name} />;
```

```react|span-2
const url = "https://assets.offcourse.io/portraits/offcourse_1.jpg";
const name = "Yeehaa";
<Avatar url={url} name={name} />;
```
