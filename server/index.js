const express = require("express");
const cors = require("cors");

const app = express();
 

app.use(cors());

app.use(express.json()); // When we want to be able to accept JSON.

app.get("/api/compliment", (req, res) => {
  const compliments = ["Gee, you're a smart cookie!",
					 "Cool shirt!",
					 "Your Javascript skills are stellar.",
  ];

  // choose random compliment
  let randomIndex = Math.floor(Math.random() * compliments.length);
  let randomCompliment = compliments[randomIndex];

  res.status(200).send(randomCompliment);
  
});


app.get("/api/confidence", (req, res) => {
  const confidence = ["You're doing great, keep it up!",
"Wow you've learnd a lot, keep going!", 
"This button is your favorite, isn't it? ;)"];

 // choose random confidence boost
 let randomIndex = Math.floor(Math.random() * confidence.length);
 let randomConfidence = confidence[randomIndex]

 res.status(200).send(randomConfidence)
});
//enter your own confidence boost


app.listen(4000, () => console.log("Server running on 4000"));
