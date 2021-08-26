async function createRoom() {
  const apiKey = process.env.VUE_APP_DAILY_API_KEY;
  if (!apiKey) return null;
  // we'll add 30 min expiry (exp) so rooms won't linger too long on your account
  // we'll also turn on chat (enable_chat)
  // see other available options at https://docs.daily.co/reference#create-room
  const exp = Math.round(Date.now() / 1000) + 60 * 30;
  const options = {
    properties: {
      exp,
      enable_chat: true,
    },
  };
  // This endpoint is using the proxy as outlined in netlify.toml
  const response = await fetch(`${window.location.origin}/api/rooms`, {
    method: "POST",
    body: JSON.stringify(options),
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + apiKey,
    },
  });
  const room = await response.json();
  return room;
}

export default {
  createRoom,
};
