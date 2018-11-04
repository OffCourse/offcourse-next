Avatars can have a default or a custom image

```react|span-2
---
const name = "Yeehaa";
<Avatar name={name} />;
```

```react|span-2
const name = "Yeehaa";
const { RESOURCE_NOT_LOADING } = errors;
<Avatar variant={RESOURCE_NOT_LOADING} name={name} />;
```

```react|span-2
const name = "Yeehaa";
const { NO_SEARCH_RESULTS } = errors;
<Avatar variant={NO_SEARCH_RESULTS} name={name} />;
```

```react|span-2
const name = "Yeehaa";
const { COURSE_NOT_FOUND } = errors;
<Avatar variant={COURSE_NOT_FOUND} name={name} />;
```

```react|span-2
const name = "Yeehaa";
const { CHECKPOINT_NOT_FOUND } = errors;
<Avatar variant={CHECKPOINT_NOT_FOUND} name={name} />;
```

```react|span-2
const name = "Yeehaa";
const { TOTAL_PANIC } = errors;
<Avatar variant={TOTAL_PANIC} name={name} />;
```
