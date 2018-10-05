Multiple tags can be combined into a group

```react
const Tag = TagGroup.Tag;
<TagGroup>
  <Tag>Spicy</Tag>
  <Tag>Jalapeno</Tag>
  <Tag>Tri-Tip</Tag>
  <Tag>Jowl</Tag>
  <Tag>Prosciutto</Tag>
  <Tag>Short Ribs</Tag>
  <Tag>Pork</Tag>
  <Tag>Ribeye</Tag>
  <Tag>Tenderloin</Tag>
  <Tag>Porchetta</Tag>
  <Tag>Jowl</Tag>
  <Tag>Prosciutto</Tag>
  <Tag>Short Ribs</Tag>
  <Tag>Pork</Tag>
  <Tag>Ribeye</Tag>
  <Tag>Landjaeger</Tag>
  <Tag>Fatback</Tag>
  <Tag>Spicy</Tag>
  <Tag>Jalapeno</Tag>
  <Tag>Tri-Tip</Tag>
  <Tag>Tenderloin</Tag>
  <Tag>Porchetta</Tag>
  <Tag>Landjaeger</Tag>
  <Tag>Fatback</Tag>
</TagGroup>
```
Alternatively, tags can be structured as multiple variables in a single array

```react
<TagGroup tags={["Prosciutto", "Short Ribs", "Pork", "Spicy", "Jalapeno", "Tri-Tip", "Jowl"]} />
```
Tags can also become clickable

```react
<TagGroup onClick={({tag}) => alert(tag) } tags={["Prosciutto", "Short Ribs", "Pork", "Spicy", "Jalapeno", "Tri-Tip", "Jowl"]} />
```
