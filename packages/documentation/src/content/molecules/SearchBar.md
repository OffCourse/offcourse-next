```react
state: { searchTerm: "Start Typing" }
---
<div>
    <SearchBar onSearchChange={({searchTerm}) => setState({searchTerm})} onSearchSubmit={({searchTerm}) => alert(searchTerm)}/>
    <p>{ state.searchTerm }</p>
</div>
```
