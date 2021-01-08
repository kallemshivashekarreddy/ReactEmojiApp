import React from "react";
import emojipedia from "../emojipedia";
import Entry from "./emoji";
function emojiEntry(emoj) {
  return (
    <Entry
      key={emoj.id}
      emoji={emoj.emoji}
      name={emoj.name}
      meaning={emoj.meaning}
    />
  );
}

function App() {
  return (
    <div>
      <h1>
        <span>emojipedia</span>
      </h1>

      <dl className="dictionary">{emojipedia.map(emojiEntry)}</dl>
    </div>
  );
}

export default App;
