This molecule creates a section for direct sharing on social media or using a URL

```react
const url = "https://app.offcourse.io/flags/all";
const text = "Something Profane";
<Share url={url} text={text} providers={["twitter", "facebook", "url"]} />;
```

Alternatively, the URL button can be left out in this section

```react
const url = "https://app.offcourse.io/flags/all";
const text = "Something Even More Profane";
<Share url={url} text={text} providers={["twitter", "facebook"]} />;
```
