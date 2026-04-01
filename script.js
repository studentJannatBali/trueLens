// ─── DATA ───────────────────────────────────────────────────────
const trendingNews=[
  {num:1,cat:"Politics",title:"Election Commission announces new EVm audit protocol for 2025 state polls",time:"2h ago",badge:"verified",score:92},
  {num:2,cat:"Science",title:"ISRO confirms Chandrayaan-4 mission launch window set for Q3 2025",time:"4h ago",badge:"verified",score:88},
  {num:3,cat:"Health",title:"WHO issues alert over new respiratory virus strain detected in Southeast Asia",time:"6h ago",badge:"uncertain",score:61},
  {num:4,cat:"Business",title:"Reliance Industries posts record quarterly profit of ₹19,000 crore",time:"8h ago",badge:"verified",score:95},
  {num:5,cat:"Entertainment",title:"Viral claim that Bollywood actor to retire from films is false, says PR",time:"10h ago",badge:"rumour",score:87},
];
const latestNews=[
  {title:"PM Modi inaugurates new expressway connecting Delhi to Meerut in 45 minutes",time:"12m",badge:"verified"},
  {title:"Fake: Viral image of flooded Bengaluru streets is actually from 2017",time:"34m",badge:"rumour"},
  {title:"RBI keeps repo rate unchanged at 6.5% in latest MPC meeting",time:"1h",badge:"verified"},
  {title:"Claims about free government laptop scheme for students are unverified",time:"1h",badge:"uncertain"},
  {title:"IIT Bombay research team develops biodegradable plastic alternative",time:"2h",badge:"verified"},
  {title:"No, India has not banned TikTok again — claims are misleading",time:"3h",badge:"rumour"},
  {title:"CBSE board results to be declared on schedule, confirms official source",time:"3h",badge:"verified"},
  {title:"Viral video of 'alien sighting' in Rajasthan is CGI animation",time:"4h",badge:"rumour"},
];
const categories=[
  {key:"politics",icon:"🏛️",label:"Politics",title:"Analysing misinformation in Indian and global political discourse",excerpt:"From election claims to policy announcements — we verify every political statement with AI precision.",color:"politics",articles:28},
  {key:"entertainment",icon:"🎬",label:"Entertainment",title:"Celebrity rumours and viral entertainment misinformation",excerpt:"Bollywood gossip, celebrity death hoaxes and fabricated controversies examined and verified.",color:"entertainment",articles:42},
  {key:"science",icon:"🔬",label:"Science & Technology",title:"Scientific misinformation and tech fake news analysis",excerpt:"AI, space missions, medical discoveries — separating peer-reviewed fact from viral fiction.",color:"science",articles:35},
  {key:"history",icon:"📜",label:"History",title:"Historical revisionism and misinformation about past events",excerpt:"Correcting distorted historical narratives, fabricated quotes and misleading context about the past.",color:"history",articles:19},
  {key:"education",icon:"🎓",label:"Education",title:"Fake scholarship schemes, exam rumours and academic fraud",excerpt:"Protecting students from fraudulent schemes, fake exam leaks and misleading academic claims.",color:"education",articles:24},
  {key:"business",icon:"📈",label:"Business",title:"Stock market rumours, corporate misinformation and scam alerts",excerpt:"Financial fake news, pump-and-dump schemes and false corporate announcements investigated.",color:"business",articles:31},
  {key:"sports",icon:"🏆",label:"Sports",title:"Sports rumours, transfer fake news and match fixing claims",excerpt:"Cricket, football and Olympic misinformation — from fake transfers to fabricated score fixes.",color:"sports",articles:47},
  {key:"health",icon:"🏥",label:"Health",title:"Medical misinformation, vaccine rumours and health hoaxes",excerpt:"Dangerous health myths, fake remedies and misrepresented medical research debunked.",color:"health",articles:53},
];
const allArticles={
  politics:[
    {title:"EVM Hacking Claims: What the Evidence Actually Shows",excerpt:"Multiple viral posts claim EVMs were hacked during the 2024 elections. We examined the technical specifications, audit reports and electoral commission data.",badge:"rumour",score:89,full:"Election Commission of India has released comprehensive audit logs showing no evidence of tampering. Independent cybersecurity experts from IIT Delhi reviewed the machines and confirmed the claims circulating on social media are technically impossible given the air-gapped nature of the devices. The viral posts cherry-pick isolated incidents while ignoring the broader verified evidence. Our AI cross-referenced 847 sources and found zero credible technical documentation supporting hacking claims."},
    {title:"Opposition leader did NOT say 'India should be divided' — viral clip edited",excerpt:"A 14-second clip shared 2 million times removes crucial context from a speech.",badge:"rumour",score:94,full:"Full speech analysis reveals the clip was edited from a 45-minute address. The complete statement, when read in context, is the exact opposite of what the viral clip implies. Three independent fact-checkers confirmed the manipulation using audio forensics tools. The original press conference video remains available on the official party YouTube channel."},
    {title:"CAA Implementation: Separating policy fact from viral fiction",excerpt:"What the Citizenship Amendment Act actually says versus what is being shared.",badge:"verified",score:78,full:"The actual text of the CAA has been cross-referenced with viral claims circulating on WhatsApp. Several key provisions are being misrepresented. The law applies specifically to non-Muslim minorities from Pakistan, Bangladesh and Afghanistan who entered India before December 31, 2014. Claims that it strips citizenship from Indian Muslims are factually incorrect as the act deals with granting — not revoking — citizenship."},
  ],
  entertainment:[
    {title:"Viral: Actor Shah Rukh Khan hospitalised — FALSE",excerpt:"A recycled 2018 image being reshared as breaking news in 2025.",badge:"rumour",score:97,full:"The image circulating showing an actor being taken into hospital is from 2018 and relates to a completely unrelated individual. Reverse image search confirms the origin. The actor's team has issued an official denial. This is at least the third time this image has been recycled to spread false health rumours about prominent Bollywood personalities."},
    {title:"New film's box office numbers: What's real and what's inflated",excerpt:"How distributors manipulate opening weekend numbers and what the reality looks like.",badge:"uncertain",score:58,full:"Film trade analysts have identified inconsistencies between reported box office collections and actual theatre occupancy data. The film claims ₹150 crore opening weekend but occupancy data from BookMyShow and PVR suggests numbers closer to ₹95-110 crore. This practice of inflated reporting is not illegal but creates misleading viral headlines."},
  ],
  science:[
    {title:"ISRO Moon Water Discovery: Fact-checking the viral headlines",excerpt:"What Chandrayaan-3 actually found versus the exaggerated social media claims.",badge:"verified",score:82,full:"Chandrayaan-3 confirmed the presence of water ice molecules in the south polar region. This is genuine and verified. However, viral posts claiming 'India found an ocean on the Moon' are exaggerated. The discovery is of molecules in permanently shadowed craters, not liquid water. ISRO's official press release uses careful scientific language that was sensationalised by subsequent media coverage."},
    {title:"5G Causes COVID: The persistent myth that won't die",excerpt:"Comprehensive analysis of the 5G health claims that continue to circulate.",badge:"rumour",score:99,full:"There is no credible scientific mechanism by which 5G radio waves could cause, spread or worsen any viral infection. Radio waves are non-ionising radiation and cannot alter human DNA or viral particles. The claim has been debunked by WHO, IEEE, ICNIRP and every major scientific body globally. Our AI scanned 1,240 peer-reviewed papers and found zero supporting evidence for any link."},
  ],
  history:[
    {title:"The fabricated Gandhi quote on religion shared 4M times",excerpt:"A quote attributed to Gandhi about religious conversion has no verifiable origin.",badge:"rumour",score:91,full:"Extensive search through the collected works of Mahatma Gandhi — comprising 98 volumes — finds no source for this quote. Three Gandhi scholars from Sabarmati Ashram have confirmed it is fabricated. The quote first appeared in 2015 on a Facebook page with no citation and has been shared millions of times since. Misattributed quotes are among the most effective forms of misinformation."},
  ],
  education:[
    {title:"Fake scholarship: 'PM Free Laptop Yojana 2025' is a scam",excerpt:"Thousands of students have shared personal details on a fraudulent government-lookalike site.",badge:"rumour",score:98,full:"The Ministry of Education has issued an official clarification that no such scheme exists. The website mimicking government portals has been reported to CERT-In. Students who submitted their Aadhaar and bank details should immediately contact their bank and file a complaint at cybercrime.gov.in. The domain was registered in March 2025 by an unknown foreign entity."},
    {title:"JEE Advanced 2025 paper leak claims are unverified",excerpt:"Telegram groups claiming to share leaked papers are circulating but cannot be authenticated.",badge:"uncertain",score:67,full:"IIT Bombay, the organising institute for JEE Advanced 2025, has denied any leak. Three papers circulating on Telegram were analysed and found to contain questions from previous years and coaching institute mock tests. However, an official inquiry has been ordered. Students should rely only on information from the official JEE website."},
  ],
  business:[
    {title:"Adani Group stock crash rumour: Anatomy of a coordinated attack",excerpt:"How a single anonymously posted PDF triggered ₹2 lakh crore in market cap erosion.",badge:"uncertain",score:71,full:"The sequence of events shows a 47-page report was posted on an anonymous site at 3:47 AM, shared simultaneously by coordinated Twitter accounts, picked up by algorithmic trading systems and triggered automatic sell orders before human analysts could verify the claims. SEBI is investigating the origin of the report. Some allegations are supported by public data; others rely on disputed interpretations."},
  ],
  sports:[
    {title:"India-Pakistan cricket fix rumour: No evidence found",excerpt:"Claims of a fixed result in the Champions Trophy match are unsupported.",badge:"rumour",score:86,full:"ICC Anti-Corruption Unit has investigated the claims. Analysis of betting pattern data does not show the suspicious movements that typically precede a fixed match. The claims originated from a single anonymous Twitter account that has since been suspended. All 22 players from both teams have been cleared by their respective boards following routine questioning."},
    {title:"Virat Kohli retirement announcement is FALSE",excerpt:"A fabricated screenshot of an 'official BCCI announcement' is being widely shared.",badge:"rumour",score:96,full:"The screenshot is digitally manipulated. The BCCI logo used is an outdated version retired in 2020. The typeface used in the announcement does not match official BCCI communications. Virat Kohli's management team issued an explicit denial within two hours of the post going viral. This follows a pattern of fabricated retirement announcements targeting prominent cricketers."},
  ],
  health:[
    {title:"'Lemon juice cures cancer' — dangerous misinformation spreading on WhatsApp",excerpt:"A viral audio message claiming a doctor recommends lemon juice over chemotherapy is fabricated.",badge:"rumour",score:99,full:"No oncologist or medical institution endorses replacing evidence-based cancer treatment with citrus consumption. While lemon juice contains vitamin C and antioxidants with general health benefits, claiming it cures cancer is not supported by any peer-reviewed research. The 'doctor' mentioned in the audio message does not exist in any medical registry. Patients delaying treatment based on this advice face serious health risks."},
    {title:"COVID vaccine long-term effects: What the 3-year data actually shows",excerpt:"Comprehensive review of post-vaccination surveillance data from 47 countries.",badge:"verified",score:88,full:"Three years of surveillance data from 47 countries covering 5.6 billion doses shows the COVID vaccines have a strong safety profile. Serious adverse events occur at a rate of 2-4 per million doses — comparable to long-established vaccines. Claims of widespread 'turbo cancer' or cardiac death are not supported by actuarial data, which shows no anomalous all-cause mortality increase in highly vaccinated populations when adjusted for COVID deaths."},
  ],
};
const faqs=[
  {q:"How is TrueLens different from regular fact-checkers?",a:"Unlike manual fact-checkers that review specific stories, TrueLens uses AI to analyse ANY text you submit in real-time — scanning the entire web in under 2 seconds and explaining exactly which words are problematic and why."},
  {q:"How accurate is the AI detection?",a:"Our AI achieves 94.7% accuracy on benchmark datasets. The confidence score tells you how certain the AI is — anything below 70% is marked as 'uncertain' rather than forcing a verdict."},
  {q:"What does 'Explainable AI' mean?",a:"Instead of just saying 'FAKE' or 'REAL', TrueLens shows you which specific words or phrases are flagged, what sources contradict them, and what the reasoning behind the verdict is."},
  {q:"Is my submitted text stored or shared?",a:"Absolutely not. Text submitted for analysis is processed in real-time and immediately deleted. We never store, sell or share your queries. Privacy is foundational to TrueLens."},
  {q:"Can TrueLens detect misinformation in languages other than English?",a:"Currently TrueLens supports English, Hindi and Tamil. We are actively expanding to 12 more Indian regional languages by end of 2025."},
  {q:"How does the confidence score work?",a:"The score (0-100%) represents how certain the AI is about its verdict based on the number of contradicting sources found, their credibility ratings and the severity of factual discrepancies detected."},
];

// ─── RENDER FUNCTIONS ───────────────────────────────────────────
function badgeHtml(b){
  const map={rumour:'🔴 Rumour',verified:'✅ Verified',uncertain:'⚠️ Uncertain'};
  return `<span class="truth-badge ${b}">${map[b]||b}</span>`;
}
function renderTrending(){
  document.getElementById('trendingList').innerHTML=trendingNews.map(n=>`
    <div class="trending-card" onclick="showToast('Opening article...')">
      <span class="trending-num">${n.num}</span>
      <div class="trending-cat">${n.cat}</div>
      <div class="trending-title">${n.title}</div>
      <div class="trending-meta">
        ${badgeHtml(n.badge)}
        <span>${n.time}</span>
        <span>Confidence: ${n.score}%</span>
      </div>
    </div>`).join('');
}
function renderLatest(){
  document.getElementById('latestList').innerHTML=latestNews.map(n=>`
    <div class="latest-card" onclick="showToast('Loading article...')">
      <div class="latest-title">${n.title}</div>
      <div class="latest-meta">
        ${badgeHtml(n.badge)}
        <span>${n.time} ago</span>
      </div>
    </div>`).join('');
}
function renderCategories(){
  document.getElementById('catGrid').innerHTML=categories.map(c=>`
    <div class="cat-card">
      <div class="cat-card-top ${c.color}"></div>
      <div class="cat-card-body">
        <div class="cat-icon">${c.icon}</div>
        <div class="cat-label">${c.label}</div>
        <div class="cat-title">${c.title}</div>
        <div class="cat-excerpt">${c.excerpt}</div>
        <div class="cat-footer">
          <span style="font-size:.75rem;color:var(--muted)">${c.articles} articles</span>
          <button class="read-more-btn" onclick="openCategoryPage('${c.key}','${c.label}','${c.icon}')">Read More →</button>
        </div>
      </div>
    </div>`).join('');
}
function renderFaq(){
  document.getElementById('faqGrid').innerHTML=faqs.map((f,i)=>`
    <div class="faq-card">
      <div class="faq-q" onclick="toggleFaq(${i})">
        ${f.q}
        <span class="faq-icon" id="faqIcon${i}">+</span>
      </div>
      <div class="faq-a" id="faqA${i}">
        ${f.a}
        <span class="faq-read" onclick="showToast('Full FAQ page coming soon!')">Read more →</span>
      </div>
    </div>`).join('');
}
function toggleFaq(i){
  const a=document.getElementById('faqA'+i);
  const ic=document.getElementById('faqIcon'+i);
  const open=a.classList.toggle('open');
  ic.textContent=open?'−':'+';
  ic.style.transform=open?'rotate(180deg)':'rotate(0)';
}

// ─── CATEGORY / ARTICLE ─────────────────────────────────────────
function openCategoryPage(key,label,icon){
  const arts=allArticles[key]||[];
  const catInfo=categories.find(c=>c.key===key);
  const colorMap={politics:'#7c4dff',entertainment:'#f50057',science:'#00e5ff',history:'#ffa502',education:'#2ed573',business:'#ffcc00',sports:'#ff6348',health:'#70a1ff'};
  const col=colorMap[key]||'var(--accent)';
  document.getElementById('articleContent').innerHTML=`
    <button class="back-btn" onclick="showPage('home',null)">← Back to Home</button>
    <div class="ai-badge" style="background:rgba(0,229,255,.1);margin-bottom:1rem">${icon} ${label}</div>
    <h2 style="font-size:1.8rem;font-weight:800;margin-bottom:.5rem">${catInfo?catInfo.title:label}</h2>
    <p style="color:var(--muted);margin-bottom:2rem">${catInfo?catInfo.excerpt:''}</p>
    <div class="more-grid">
      ${arts.map((a,i)=>`
        <div class="cat-card" onclick="openArticle('${key}',${i})">
          <div class="cat-card-top ${key}"></div>
          <div class="cat-card-body">
            <div class="cat-title">${a.title}</div>
            <div class="cat-excerpt">${a.excerpt}</div>
            <div class="cat-footer">
              ${badgeHtml(a.badge)}
              <button class="read-more-btn">Read Article →</button>
            </div>
          </div>
        </div>`).join('')}
      <div class="cat-card" style="border:2px dashed var(--border);display:flex;align-items:center;justify-content:center;min-height:180px;cursor:pointer" onclick="showToast('More articles loading soon!')">
        <div style="text-align:center;color:var(--muted)">
          <div style="font-size:2rem;margin-bottom:.5rem">+</div>
          <div style="font-size:.85rem">Load More Articles</div>
        </div>
      </div>
    </div>`;
  showPage('article',null);
}
function openArticle(catKey,idx){
  const art=allArticles[catKey]?.[idx];
  if(!art)return;
  const catInfo=categories.find(c=>c.key===catKey);
  const colorMap={politics:'rgba(124,77,255,.15)',entertainment:'rgba(245,0,87,.15)',science:'rgba(0,229,255,.15)',history:'rgba(255,165,2,.15)',education:'rgba(46,213,115,.15)',business:'rgba(255,204,0,.15)',sports:'rgba(255,99,72,.15)',health:'rgba(112,161,255,.15)'};
  document.getElementById('articleContent').innerHTML=`
    <button class="back-btn" onclick="openCategoryPage('${catKey}','${catInfo?.label||catKey}','${catInfo?.icon||'📰'}')">← Back to ${catInfo?.label||catKey}</button>
    <span class="article-cat-badge" style="background:${colorMap[catKey]||'rgba(0,229,255,.15)'};color:var(--accent)">${catInfo?.icon||'📰'} ${catInfo?.label||catKey}</span>
    <h1 class="article-title">${art.title}</h1>
    <div class="article-meta">
      ${badgeHtml(art.badge)}
      <span>Confidence: <strong style="color:var(--accent)">${art.score}%</strong></span>
      <span>AI Verified • Just now</span>
    </div>
    <div class="article-truth">
      <div style="font-size:.8rem;color:var(--muted);text-transform:uppercase;letter-spacing:.5px;margin-bottom:.5rem;font-weight:600">🧠 TrueLens AI Verdict</div>
      <div style="display:flex;align-items:center;gap:1rem;flex-wrap:wrap">
        <div class="verdict ${art.badge}">${art.badge==='rumour'?'🔴 LIKELY FALSE':art.badge==='verified'?'✅ VERIFIED TRUE':'⚠️ UNVERIFIED'}</div>
        <div class="score-wrap">
          <span class="score-label">Confidence</span>
          <div class="score-bar"><div class="score-fill ${art.score>75?art.badge==='rumour'?'high':'low':'med'}" style="width:${art.score}%"></div></div>
          <span class="score-pct" style="color:${art.score>75?art.badge==='verified'?'var(--ok)':'var(--danger)':'var(--warn)'}">${art.score}%</span>
        </div>
      </div>
    </div>
    <div class="article-body">
      <p>${art.full}</p>
      <p style="color:var(--muted);font-size:.88rem;border-left:3px solid var(--accent);padding-left:1rem;margin-top:1.5rem">
        <strong style="color:var(--accent)">Methodology:</strong> This analysis was conducted by TrueLens AI which cross-referenced ${Math.floor(Math.random()*800+200)} sources, checked image metadata, analysed sentiment patterns and compared against verified databases within 1.8 seconds.
      </p>
    </div>`;
  showPage('article',null);
}

// ─── AI DETECTION SIMULATION ────────────────────────────────────
const detectionScenarios=[
  {verdict:'rumour',score:87,explanation:"The claim contains <span class='highlight-wrong'>several factually incorrect assertions</span> that contradict verified government records. The phrase <span class='highlight-wrong'>\"completely banned\"</span> is inaccurate — the product faces restrictions, not a total ban. The statistic <span class='highlight-diff'>\"affecting 90% of population\"</span> could not be verified in any peer-reviewed study.",sources:["PIB India","Ministry of Health","WHO South-East Asia"],reason:"Multiple factual inaccuracies detected. Key statistics are unverified. Language uses sensationalist phrasing typical of viral misinformation."},
  {verdict:'verified',score:91,explanation:"This claim is <span style='color:var(--ok)'>supported by multiple credible sources</span>. The core facts align with <span style='color:var(--ok)'>official government announcements</span> and verified news reports from established media outlets. No significant factual discrepancies detected.",sources:["Times of India","The Hindu","Official Government Portal"],reason:"Statement matches verified records from 4+ credible sources. No contradicting evidence found. Timeline and figures are accurate."},
  {verdict:'uncertain',score:54,explanation:"This claim is <span class='highlight-diff'>partially accurate but missing important context</span>. While the event described <span style='color:var(--ok)'>did occur</span>, the phrase <span class='highlight-diff'>\"for the first time in history\"</span> is disputed — similar events occurred in 2009 and 2014 according to archived records. Confidence is moderate.",sources:["Reuters","BBC India","Wikipedia (archived)"],reason:"Core event is verified but framing adds misleading context. Treat with caution and seek additional sources."},
];
let detecting=false;
function runDetection(){
  const input=document.getElementById('detectInput').value.trim();
  if(!input){showToast('Please enter some text to analyse!');return;}
  if(detecting)return;
  detecting=true;
  const box=document.getElementById('resultBox');
  box.style.display='block';
  const steps=['🌐 Searching across 10,000+ sources...','🧠 Running NLP analysis...','📊 Calculating confidence score...','🔍 Identifying suspicious phrases...','✅ Generating explanation...'];
  box.innerHTML=`<div class="loading-state">
    <div class="loading-spinner"></div>
    <div style="font-size:.9rem;color:var(--muted);margin-bottom:.8rem">TrueLens AI is analysing your text...</div>
    <div class="loading-steps">${steps.map((s,i)=>`<div class="step" id="step${i}">${s}</div>`).join('')}</div>
  </div>`;
  let si=0;
  const stepInt=setInterval(()=>{
    if(si>0)document.getElementById('step'+(si-1))?.classList.replace('active','done');
    if(si<steps.length)document.getElementById('step'+si)?.classList.add('active');
    si++;
    if(si>steps.length){clearInterval(stepInt);showResult();}
  },480);
}
function showResult(){
  const sc=detectionScenarios[Math.floor(Math.random()*detectionScenarios.length)];
  const verdictLabel={rumour:'🔴 LIKELY FALSE / RUMOUR',verified:'✅ VERIFIED INFORMATION',uncertain:'⚠️ UNVERIFIED — UNCERTAIN'}[sc.verdict];
  const scoreColor=sc.verdict==='verified'?'var(--ok)':sc.verdict==='rumour'?'var(--danger)':'var(--warn)';
  const fillClass=sc.verdict==='verified'?'low':sc.verdict==='rumour'?'high':'med';
  document.getElementById('resultBox').innerHTML=`
    <div class="result-box">
      <div class="result-header">
        <div class="verdict ${sc.verdict}">${verdictLabel}</div>
        <div class="score-wrap">
          <span class="score-label">Confidence</span>
          <div class="score-bar"><div class="score-fill ${fillClass}" style="width:${sc.score}%"></div></div>
          <span class="score-pct" style="color:${scoreColor}">${sc.score}%</span>
        </div>
      </div>
      <div class="result-body">
        <div style="font-size:.75rem;color:var(--muted);text-transform:uppercase;letter-spacing:.5px;margin-bottom:.6rem;font-weight:600">🔍 Highlighted Analysis</div>
        <div class="result-text">${sc.explanation}</div>
        <div class="explanation-section">
          <h6>🧠 Explainable AI — Why this verdict?</h6>
          <p>${sc.reason}</p>
        </div>
        <div class="explanation-section" style="margin-top:.8rem;background:rgba(124,77,255,.05);border-color:rgba(124,77,255,.2)">
          <h6 style="color:var(--accent2)">🔗 Sources Cross-Referenced</h6>
          <div class="sources-list">${sc.sources.map(s=>`<span class="source-tag">${s}</span>`).join('')}</div>
        </div>
        <div style="margin-top:1rem;font-size:.75rem;color:var(--muted)">Analysis completed in ${(Math.random()*.8+1.2).toFixed(2)}s • ${Math.floor(Math.random()*800+400)} sources scanned • Powered by TrueLens AI</div>
      </div>
    </div>`;
  detecting=false;
}

// ─── PAGE NAVIGATION ────────────────────────────────────────────
function showPage(name,linkEl){
  document.querySelectorAll('.page').forEach(p=>p.classList.remove('active'));
  document.getElementById('page-'+name).classList.add('active');
  document.querySelectorAll('.nav-links a').forEach(a=>a.classList.remove('active'));
  if(linkEl)linkEl.classList.add('active');
  window.scrollTo({top:0,behavior:'smooth'});
}

// ─── TOAST ──────────────────────────────────────────────────────
function showToast(msg){
  const t=document.getElementById('toast');
  t.textContent=msg;
  t.classList.add('show');
  setTimeout(()=>t.classList.remove('show'),3000);
}

// ─── INIT ───────────────────────────────────────────────────────
renderTrending();
renderLatest();
renderCategories();
renderFaq();
