StatGroup molecules combine multiple Stat components into a group

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
<StatGroup direction="horizontal" section="planning">
  <Stat iconName="calendar" label="July, 30" />
  <Stat iconName="clock" label="40 Hours" />
  <Stat iconName="expert" label="expert" />
</StatGroup>
```

```react|span-3,dark
<StatGroup direction="horizontal" inverse section="planning">
  <Stat iconName="calendar" label="July, 30" />
  <Stat iconName="clock" label="40 Hours" />
  <Stat iconName="expert" label="expert" />
</StatGroup>
```
