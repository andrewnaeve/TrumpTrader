#Under Construction
<h1>Trump Trader Automated Trading Platform</h1>
<p>This app is an homage to T3's Trump and Dump stock trading robot, except built with Node.js and JavaScript instead of Python. The app streams Donald Trump's tweets in real-time from the Twitter streaming API and finds mentions of publicly traded companies. If the mention is negative enough, it shorts the stock.</p>
#Named Entity Recognition
<p>One of the main challenges of this application, was that the node package ecosystem is not as established in the field of natural language processing, and in particular, named-entity-recognition. While Python has access to the Natural Language Toolkit, equivalents for Node are sparse and not as comprehensive. I designed an algorithm that scans tweets in real-time for consecutive strings of words in the tweet that most closely match consecutive words-phrases in the description of a publicly traded company. It returns the stock symbol for the best match based on probability that the phrase closely corelates with the actual name of the traded entity. At the same time, the tweet is scored by a sentiment analyzer. If there is a highly correlated match with a sufficiently negative sentiment, the server connects to the eTrade API and shorts the stock.</p>
#Technolog used
<ul>
<li>Express for the server</li>
<li>Bluebird for fast asynchronous design</li>
<li>Mocha / Chai for testing</li>
<li>Sentiment from NPM for sentiment analysis</li>
</ul>
#Work to be done
<p>The main algorithms are complete and tweets pass preliminary testing. I still have yet to receive my eTrade API key to complete
the app.</p>
