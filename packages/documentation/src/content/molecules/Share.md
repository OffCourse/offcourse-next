With url button

```react
const url = "https://app.offcourse.io/flags/all";
const text = "Something Profane";
<Share url={url} text={text} providers={["twitter", "facebook", "url"]} />;
```

Without url button

```react
const url = "https://app.offcourse.io/flags/all";
const text = "Something Even More Profane";
<Share url={url} text={text} providers={["twitter", "facebook"]} />;
```
