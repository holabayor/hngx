const express = require('express');

const app = express();
const port = process.env.PORT || 3000;

app.get('/api/', (req, res) => {
  const { slack_name, track } = req.query;

  if (!slack_name || !track) {
    return res
      .status(400)
      .json({ error: 'Please provide slack_name and track' });
  }

  const current_day = new Date().toLocaleDateString('en-US', {
    weekday: 'long',
  });
  const utc_time = new Date().toISOString();

  const info = {
    slack_name,
    current_day,
    utc_time,
    track,
    github_file_url:
      'https://github.com/holabayor/hngx/blob/main/stage_one/server.js',
    github_repo_url: 'https://github.com/holabayor/hngx',
    status_code: 200,
  };

  res.json(info);
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
