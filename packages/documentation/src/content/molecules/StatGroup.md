The StatGroup molecules combine multiple Stat components into groups

```react|span-3
<StatGroup section="planning">
  <Stat iconName="calendar" label="July, 30" />
  <Stat iconName="clock" label="40 Hours" />
  <Stat iconName="expert" label="expert" />
</StatGroup>
```

```react|span-3,dark
<StatGroup inverse section="planning">
  <Stat iconName="calendar" label="July, 30" />
  <Stat iconName="clock" label="40 Hours" />
  <Stat iconName="expert" label="expert" />
</StatGroup>
```

They can also be oriented horizontally

```react|span-3
const { HORIZONTAL } = directions;
<StatGroup direction={ HORIZONTAL } section="planning">
  <Stat iconName="calendar" label="July, 30" />
  <Stat iconName="clock" label="40 Hours" />
  <Stat iconName="expert" label="expert" />
</StatGroup>
```

```react|span-3,dark
const { HORIZONTAL } = directions;
<StatGroup direction={ HORIZONTAL } inverse section="planning">
  <Stat iconName="calendar" label="July, 30" />
  <Stat iconName="clock" label="40 Hours" />
  <Stat iconName="expert" label="expert" />
</StatGroup>
```
