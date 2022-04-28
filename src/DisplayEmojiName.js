import React from 'react'

const DisplayEmojiName = (Event) => alert(Event.target.id)
const Emojis = [
  {
    emoji: '😀',
    NamedNodeMap: 'test grinning face',
  },
  {
    emoji: '🎉',
    NamedNodeMap: 'party popper',
  },
]
function DisplayEmojis() {
  const Greeting = 'greeting'
  const DisplayAction = false
  return (
    <div className="container">
      <h1 id={Greeting}>Hey You !!!</h1>
      {DisplayAction && <p>I'm writing JSX</p>}
      <ul>
        {Emojis.map((emoji) => (
          <li key={emoji.NamedNodeMap}>
            <button onClick={DisplayEmojiName}>
              <span
                aria-roledescription="img"
                aria-label={emoji.NamedNodeMap}
                id={emoji.NamedNodeMap}
              >
                {emoji.emoji}
              </span>
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default DisplayEmojis