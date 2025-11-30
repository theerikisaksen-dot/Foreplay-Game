
const data = {"Connecting": ["What animal best describes your partner?", "Would you rather\u2026Time travel or Read minds?", "Would you rather\u2026 Have unlimited time or money?", "When you were young, what did you want to be when you grew up", "Describe the worst date you've ever had", "Describe the best date you've ever had", "Describe your dream home", "If you could relive one moment with your partner, what would it be?", "If you had to use a fruit or vegetable as a sex toy, what would it be?", "Have you ever tossed someones salad? Would you?", "Do you discuss your sex life with your friends? How detailed?", "Would you watch a porn with your partner?", "Have you ever been to a strip club?  Did you partake in any activities?", "Describe your perfect day", "Have you ever had sex at work?", "Would you rather\u2026 be handcuffed or blindfolded?", "Would you ever go to a happy ending massage place?", "Choose one body part of your partners to change", "If you switched genders, what is the first thing you would do?", "Rock Paper Scissors - Loser removes a piece of clothing", "List two things on your bucket list", "Warm embrace\u2026 Hug for 15 seconds", "Would you rather\u2026 be woken up being pleasured with a hand or mouth?", "If you could be anyone famous, who would it be?", "Rate your partner on their bedroom skills 1-10", "Have you ever been naked in public?", "What is the sexiest pair of underwear you own?", "How much $$ would it take for you to do a live sex video online?", "Do you enjoy ass play?  Do you want to try?", "Put your partner in any outfit of your choosing for the next 3 rounds", "Rock Paper Scissors - Loser removes a piece of clothing", "FREE PASS CARD", "Describe the best way someone could pleasure you orally", "Warm embrace\u2026 Hug for 15 seconds", "Smooches for 15 seconds", "Talk with an accent for 2 rounds", "Have you ever been streaking?", "You won the lottery, what is the first thing you would do and why?", "If you could have one superpower in the bedroom, what would it be?", "What is the strangest thing you've ever used to pleasure yourself?"], "Heating Up": ["Rock Paper Scissors - Loser removes a piece of clothing", "Swap all clothes for 2 rounds", "Starting at the lips, kiss your way down to your favorite body part on your partner", "Sensual kiss on the lips for 20 seconds", "Sensual kiss on something other than the lips for 15 seconds", "Go into another room and send your partner a naughty photo", "Take a sweet selfie together", "Kiss your partner somewhere private and leave a hickey", "You receive a 2 minute massage of your choice", "You receive a 2 minute massage of your choice", "You are blindfolded.  Your partner will put 3 different things in your mouth and you must guess what they are.", "Wrestling match! The first person to touch the others foot wins! 1 minute of your choice", "FREE PASS CARD", "Suck on your partners fingers seductively for 20 seconds", "Suck on your partners toes for 15 seconds", "Put on a sexy outfit for your partner for the next 3 rounds", "Tease your partner over their pants/underwear for 30 seconds", "If you were to pick costumes for the bedroom, what would they be?", "Ask me anything! No limits!", "Kiss/Suck/Nibble on your partners nipples for 30 seconds", "If you could utilize anything \"extra\" to spice up your sex life for even just an evening, what would it be?"], "Spicy": ["Demonstrate a handjob on a dildo for 45 seconds.  It can be recorded.", "Demonstrate a blowjob on a dildo for 45 seconds.  It can be recorded.", "POV - Take a video of your partner giving you oral pleasure for 90 seconds", "POV - Take a video of your partner giving you oral pleasure for 90 seconds", "POV - Take a video of your partner pleasuring you with their hand for 90 seconds", "Take a dirty, sexy selfie together", "You masturbate for 90 seconds, your partner must help however you tell them to.", "You receive a butt/groin massage for 90 seconds", "Using an ice cube, pleasure your partners privates with you hand for 60 seconds", "DARTS! Each person gets 3 shots\u2026 closest to bullseye wins! 1 Minute of your choice", "FREE CARD - Use as a pass or free choice", "You are blindfolded for next 3 rounds", "Push her up against a wall for 30 seconds.  Run your hands all over and kiss her all over.", "Each person writes down one option for each - Place, Act, Duration.  You will pick one of each and act it out.", "Rock Paper Scissors - Winner gets to choose to add clothing or remove clothing of either player.", "Take 2 photos of your partner however you'd like.  You are the photographer.", "Use something in the house that isn't a sex toy on your partner and pleasure them with it for 60 seconds.", "In whatever you are wearing, have your partner lay flat on their back and do 5 squats over their face.", "You do 5 pushups.", "She will sit on his lap.  Kiss and hug for 30 seconds", "BONUS! Use this card to request/demand something for future use!"], "Extreme": ["You receive oral pleasure for 2 minutes.  Make sure your partner minds the back side too.", "Bend over.. Your partner must pleasure you from the back however they choose for 2 minutes.", "She will ride a dildo of her choice for 4 minutes.  He is the movie director.  Record it.", "Use a sex toy on your partner for 90 seconds", "Mutual Masturbation for 60 seconds", "Choose a porn.  Reenact it for 3 minutes.", "Using a sex toy and his penis at the same time, pretend you're in a 3 some. 4 minutes.  Record it.", "Choose a sexy outfit for your partner to wear for the next 3 rounds.", "While using a cock sleeve, he will fuck you however he decides.  Record it for 3 minutes.", "Using a penis and dildo at the same time, she will decide where everything goes for 2 minutes.", "You will sit on your partners face for 45 seconds, they cannot use their hands.  You have control.", "Make a video of your choosing for 3 minutes.", "Take a very dirty picture together.", "Go into another room and record yourself pleasuring yourself however you'd like for 90 seconds.  Send video to your partner", "Play with yourself over your partners face for 30 seconds", "You can pick anything to make your sexual experience better for tonight.  No limits.", "Finish your partner with oral sex.", "Finish your partner with a hand.", "You pick!", "You pick!"]}

let category = Object.keys(data)[0];
let order = [];
let index = 0;

function shuffle() {
  order = data[category].map((_,i)=>i);
  for (let i=order.length-1;i>0;i--) {
    const j=Math.floor(Math.random()*(i+1));
    [order[i],order[j]]=[order[j],order[i]];
  }
  index=0;
}

function renderCategories() {
  const div=document.getElementById("categories");
  div.innerHTML="";
  Object.keys(data).forEach(cat=>{
    const btn=document.createElement("button");
    btn.textContent=cat;
    btn.className = cat===category ? "active" : "";
    btn.onclick=()=>{ category=cat; shuffle(); render(); };
    div.appendChild(btn);
  });
}

function render() {
  const card=document.getElementById("card");
  if(index>=order.length-1) {
    card.textContent="Deck complete! 🎉";
  } else {
    card.textContent=data[category][order[index]];
  }
}

document.getElementById("nextBtn").onclick=()=>{ if(index<order.length-1) index++; render(); };
document.getElementById("shuffleBtn").onclick=()=>{ shuffle(); render(); };

shuffle();
renderCategories();
render();
