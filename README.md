# Discord Messsage Sender

### Steps
- Send a message to desired Discord channel from Discord. (Inspect the send)
	- You'll see `https://discord.com/api/v8/channels/748598092168822785/messages` and `748598092168822785` is your `channelID`.
- In headers, you'll see `authorization`. It's something like this `1.  NjIyOTA4NTQwNjE2NDQxODY1.Xp-71A.nWnC-wkJ2K5sdw21WOH313`.
- Create a file named `credentials.json` and fill it like below.


```javascript
{
	"channelID":  "****",
	"authorization":  "****"
}
```