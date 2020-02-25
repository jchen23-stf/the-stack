let trait_meanings = {
    "Openness": "Openness, or Open to Experience, is the extent to which a person is open to experiencing a variety of activities. Openness is composed of the following subtraits: adventurousness, artistic interests, emotionality, imagination, intellect, and authority-challenging",
    "Conscientiousness": "Conscientiousness is a person's tendency to act in an organized or thoughtful way. Contientiousness is composed of the following subtraits: achievement striving, cautiousness, dutifulness, orderliness, self-discipline, and self-efficacy.",
    "Agreeableness": "Agreeableness is a person's tendency to be compassionate and cooperative toward others. Agreeableness is composed of the following subtraits: altruism, cooperation, modesty, uncompromisisng, sympathy, loyalty, sympathy, and trust.",
    "Extraversion": "Extraversion is a person's tendency to seek stimulation in the company of others. Extraversion is composed of the following subtraits: activity level, assertiveness, cheerfulness, excitement-seeking, outgoing, and gregariousness.",
    "Emotional range": "Emotional range, also referred to as Neuroticism or Natural reactions, is the extent to which a person's emotions are sensitive to the individual's environment. Emotional range is composed of the following subtraits: fiery, prone to worry, melancholy, immoderation, self-conciousness, and susceptible to stress.", 
    "Adventurousness": "Are eager to try new activities and experience different things. They find familiarity and routine boring. <br> <br> Lower scores denote you enjoy familiar routines and prefer not to deviate from them. <br> Higher scores denote you are eager to experience new things.",
    "Artistic interests": "Love beauty, both in art and in nature. They become easily involved and absorbed in artistic and natural events. With intellect, this facet is one of the two most important, central aspects of this characteristic. <br><br> Lower scores denote you are less concerned with artistic or creative activities than most people. <br> Higher scores denote you enjoy beauty and seek out creative experiences.", 
    "Emotionality": "Have good access to and awareness of their own feelings. <br><br> Lower scores denote you do not frequently think about or openly express your emotions. <br> Higher scores denote you are aware of your feelings and how to express them.",
    "Imagination": "View the real world as often too plain and ordinary. They use fantasy not as an escape but as a way of creating for themselves a richer and more interesting inner-world. <br><br> Lower scores denote you prefer facts over fantasy. <br> Higher scores denote you have a wild imagination.",
    "Intellect": "Are intellectually curious and tend to think in symbols and abstractions. With artistic interests, this facet is one of the two most important, central aspects of this characteristic. <br><br> Lower scores denote you prefer dealing with the world as it is, rarely considering abstract ideas. <br> Higher scores denote you are open to and intrigued by new ideas and love to explore them.",
    "Authority-challenging": "Have a readiness to challenge authority, convention, and traditional values. <br><br> Lower scores denote you prefer following with tradition to maintain a sense of stability. <br> Higher scores denote you prefer to challenge authority and traditional values to help bring about change.",
    "Achievement striving": "Try hard to achieve excellence. Their drive to be recognized as successful keeps them on track as they work hard to accomplish their goals. <br><br> Lower scores denote you are content with your level of accomplishment and do not feel the need to set ambitious goals. <br> Higher scores denote you set high goals for yourself and work hard to achieve them.",
    "Cautiousness": "Are disposed to think through possibilities carefully before acting. <br><br> Lower scores denote you would rather take action immediately than spend time deliberating making a decision. <br> Higher scores denote you carefully think through decisions before making them.",
    "Dutifulness": "Have a strong sense of duty and obligation. <br><br> Lower scores denote you do what you want, disregarding rules and obligations. <br> Higher scores denote you take rules and obligations seriously, even when they are inconvenient.",
    "Orderliness": "Are well-organized, tidy, and neat. <br><br> Lower scores denote you do not make a lot of time for organization in your daily life. <br> Higher scores denote you feel a strong need for structure in your life.",
    "Self-discipline": "Have the self-discipline, or \"will-power,\" to persist at difficult or unpleasant tasks until they are completed. <br><br> Lower scores denote you have a hard time sticking with difficult tasks for a long period of time. <br> Higher scores denote you can tackle and stick with tough tasks.",
    "Self-efficacy": "Are confident in their ability to accomplish things. <br><br> Lower scores denote you frequently doubt your ability to achieve your goals.	<br> Higher scores denote you feel you have the ability to succeed in the tasks you set out to do.",
    "Activity level": "Lead fast-paced and busy lives. They do things and move about quickly, energetically, and vigorously, and they are involved in many activities. <br><br> Lower scores denote you appreciate a relaxed pace in life. <br> Higher scores denote you enjoy a fast-paced, busy schedule with many activities.",
    "Assertiveness": "Like to take charge and direct the activities of others. They tend to be leaders in groups. <br><br> Lower scores denote you prefer to listen than to talk, especially in group settings. <br> Higher scores denote you tend to speak up and take charge of situations, and you are comfortable leading groups.",
    "Cheerfulness": "Experience a range of positive feelings, including happiness, enthusiasm, optimism, and joy. <br><br> Lower scores denote you are generally serious and do not joke much. Higher scores denote you are a joyful person and share that joy with the world.",
    "Excitement-seeking": "Are easily bored without high levels of stimulation. <br><br> Lower scores denote you prefer activities that are quiet, calm, and safe. <br> Higher scores denote you are excited by taking risks and feel bored without lots of action going on.", 
    "Outgoing": "Genuinely like other people and openly demonstrate positive feelings toward others. <br><br> Lower scores denote you are a private person and do not let many people in. <br> Higher scores denote you make friends easily and feel comfortable around other people.",
    "Gregariousness": "Find the company of others pleasantly stimulating and rewarding. They enjoy the excitement of crowds. <br><br> Lower scores denote you have a strong desire to have time to yourself. <br> Higher scores denote you enjoy being in the company of others.",
    "Altruism": "Find that helping others is genuinely rewarding, that doing things for others is a form of self-fulfillment rather than self-sacrifice. <br><br> Lower scores denote you are more concerned with taking care of yourself than taking time for others. <br> Higher scores denote you feel fulfilled when helping others and will go out of your way to do so.",
    "Cooperation": "Dislike confrontation. They are perfectly willing to compromise or to deny their own needs to get along with others. <br><br> Lower scores denote you do not shy away from contradicting others. <br> Higher scores denote you are easy to please and try to avoid confrontation.",
    "Modesty": "Are unassuming, rather self-effacing, and humble. However, they do not necessarily lack self-confidence or self-esteem. <br><br> Lower scores denote you hold yourself in high regard and are satisfied with who you are. <br> Higher scores denote you are uncomfortable being the center of attention.",
    "Uncompromising": "See no need for pretense or manipulation when dealing with others and are therefore candid, frank, and genuine. <br><br> Lower scores denote ou are comfortable using every trick in the book to get what you want. <br> Higher scores denote you think it is wrong to take advantage of others to get ahead.",
    "Sympathy": "Are tender-hearted and compassionate.<br><br> Lower scores denote you think people should generally rely more on themselves than on others. <br> Higher scores denote you feel what others feel and are compassionate toward them.",
    "Trust": "Assume that most people are fundamentally fair, honest, and have good intentions. They take people at face value and are willing to forgive and forget.<br><br> Lower scores denote you are wary of other people's intentions and do not trust easily.<br> Higher scores denote you believe the best of others and trust people easily.",
    "Fiery": "Have a tendency to feel angry. <br><br> Lower scores denote it takes a lot to get you angry.<br> Higher scores denote you have a fiery temper, especially when things do not go your way.",
    "Prone to worry": "Often feel like something unpleasant, threatening, or dangerous is about to happen. The \"fight-or-flight\" system of their brains is too easily and too often engaged.<br><br> Lower scores denote you tend to feel calm and self-assured.<br> Higher scores denote you tend to worry about things that might happen.",
    "Melancholy": "Tend to react more readily to life's ups and downs.<br><br> Lower scores denote you are generally comfortable with yourself as you are.<br> Higher scores denote you think quite often about the things you are unhappy about.",
    "Immoderation": "Feel strong cravings and urges that they have difficulty resisting, even though they know that they are likely to regret them later. They tend to be oriented toward short-term pleasures and rewards rather than long-term consequences.<br><br> Lower scores denote you have control over your desires, which are not particularly intense.<br> Higher scores denote you feel your desires strongly and are easily tempted by them.",
    "Self-consciousness": "Are sensitive about what others think of them. Their concerns about rejection and ridicule cause them to feel shy and uncomfortable around others; they are easily embarrassed.<br><br> Lower scores denote you are hard to embarrass and are self-confident most of the time.<br> Higher scores denote you are sensitive about what others might be thinking of you.",
    "Susceptible to stress": "Have difficulty coping with stress. They experience panic, confusion, and helplessness when under pressure or when facing emergency situations.<br><br> Lower scores denote you handle unexpected events calmly and effectively.<br> Higher scores denote you are easily overwhelmed in stressful situations."
  }